import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectChangesCounter } from "../features/changesCounterFeature";
import getUserInfo from "../utils/user/getUserInfo";
import { selectUser } from "../features/userFeature";
import LostPetCard from "../components/LostPetsScreen/LostPetCard";

const UserData = () => {
	const [userInfo, setUserInfo] = useState({
		lostPets: [{ _id: 1, image: {} }],
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
						<LostPetCard key={lostPet._id} lostPet={lostPet} />
					))}
				</div>
				<div>
					<h4>Mascotas Resguardadas</h4>
				</div>
				<div>
					<h4>Mascotas en Adopción</h4>
				</div>
			</div>
		</div>
	);
};

export default UserData;
