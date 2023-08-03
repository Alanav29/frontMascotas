import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectChangesCounter } from "../features/changesCounterFeature";
import getUserInfo from "../utils/user/getUserInfo";
import { selectUser } from "../features/userFeature";
import PetCard from "../components/LostPetsScreen/PetCard";
import delLostPet from "../utils/lostPets/delLostPet";
import delAdoptionPet from "../utils/adoptionPets/delAdoptionPet";
import delShelteredPet from "../utils/shelteredPets/delShelteredPet";
import "../styles/UserData.css";
import petAvatar from "../assets/petAvatar1.svg";

const UserData = () => {
	const [userInfo, setUserInfo] = useState({
		lostPets: [],
		shelteredPets: [],
		adoptionPets: [],
	});
	const changesCounter = useSelector(selectChangesCounter);
	const user = useSelector(selectUser);

	const fetchUserInfo = async () => {
		try {
			const result = await getUserInfo(user.token);

			if (result.status === 200) {
				setUserInfo(result.data[0]);
			}
		} catch (error) {
			console.log(
				"Ocurrio un error al traer la informacion de usuario",
				error.message
			);
		}
	};

	useEffect(() => {
		fetchUserInfo();
	}, [user, changesCounter]);
	return (
		<div>
			<div className="container d-flex justify-content-center">
				<div className="d-flex justify-content-center">
					<div className="petAvatarContainer">
						<img className="petAvatar" src={petAvatar} />
					</div>

					<div className="d-flex flex-column px-4 justify-content-center">
						<h5 className="colorThree m-0">Mis datos</h5>
						<div className="fs-2 p-0">{userInfo.name}</div>
						<div className="fs-5">{userInfo.email}</div>
					</div>
				</div>
			</div>
			<div className="">
				<h4 className="m-0 userInfo py-0">Mascotas perdidas</h4>
				<div className="py-4 d-flex overflow-x-scroll userInfo">
					{userInfo.lostPets.map((lostPet) => (
						<PetCard
							key={lostPet._id}
							pet={lostPet}
							delPet={delLostPet}
							cardUrl={"/mascotas-perdidas/"}
						/>
					))}
				</div>
				<div>
					<h4 className="m-0 userInfo py-0">Mascotas Resguardadas</h4>
					<div className="d-flex overflow-x-scroll userInfo py-4">
						{userInfo.shelteredPets.map((shelteredPet) => (
							<PetCard
								key={shelteredPet._id}
								pet={shelteredPet}
								delPet={delShelteredPet}
								cardUrl={"/mascotas-resguardadas/"}
							/>
						))}
					</div>
				</div>
				<div>
					<h4 className="m-0 userInfo py-0">Mascotas en Adopción</h4>
					<div className="d-flex overflow-x-scroll userInfo py-4">
						{userInfo.adoptionPets.map((adoptionPet) => (
							<PetCard
								key={adoptionPet._id}
								pet={adoptionPet}
								delPet={delAdoptionPet}
								cardUrl={"/mascotas-en-adopcion/"}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserData;
