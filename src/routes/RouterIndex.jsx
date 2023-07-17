import { Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import LostPets from "../screens/LostPets";
import ShelteredPets from "../screens/ShelteredPets";
import PetsForAdoption from "../screens/PetsForAdoption";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import AddLostPet from "../screens/AddLostPet";

export const RouterIndex = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/mascotas-perdidas" element={<LostPets />} />
			<Route path="/mascotas-resguardadas" element={<ShelteredPets />} />
			<Route path="/mascotas-en-adopcion" element={<PetsForAdoption />} />
			<Route path="/signIn" element={<SignIn />} />
			<Route path="/signUp" element={<SignUp />} />
			<Route path="/add-lost-pet" element={<AddLostPet />} />
		</Routes>
	);
};
