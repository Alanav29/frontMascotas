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

const UserData = () => {
	const [userInfo, setUserInfo] = useState({
		lostPets: [{ _id: 1, image: {} }],
		shelteredPets: [{ _id: 1, image: {} }],
		adoptionPets: [{ _id: 1, image: {} }],
	});
	const changesCounter = useSelector(selectChangesCounter);
	const user = useSelector(selectUser);

	const fetchUserInfo = async () => {
		try {
			const result = await getUserInfo(user.token);

			if (result.status === 200) {
				setUserInfo(result.data[0]);
				console.log(result);
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
	}, [changesCounter]);
	return (
		<div className="container my-4">
			<div className="">
				<h3>Datos del usuario</h3>
				<h4>Nombre</h4>
				<div className="fs-5">{userInfo.name}</div>
				<h4>Email</h4>
				<div className="fs-5">{userInfo.email}</div>
			</div>
			<div className="">
				<h4>Mascotas del usuario</h4>
				<h4>Mascotas perdidas</h4>
				<div className="d-flex overflow-scroll">
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
					<h4>Mascotas Resguardadas</h4>
					<div className="d-flex overflow-scroll">
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
					<h4>Mascotas en Adopción</h4>
					<div className="d-flex overflow-scroll">
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
