import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectChangesCounter } from "../features/changesCounterFeature";
import getUserInfo from "../utils/user/getUserInfo";
import { selectUser } from "../features/userFeature";

const UserData = () => {
	const [userInfo, setUserInfo] = useState([]);
	const changesCounter = useSelector(selectChangesCounter);
	const user = useSelector(selectUser);

	const fetchUserInfo = async () => {
		try {
			const result = await getUserInfo(user.token);

			if (result.status === 200) {
				setUserInfo(result.data);
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
			<h3>Datos del usuario</h3>
			<h4>Nombre</h4>
			<h5>{userInfo.name}</h5>
			<h4>Email</h4>
			<h5>{userInfo.email}</h5>
		</div>
	);
};

export default UserData;
