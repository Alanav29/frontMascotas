import { Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import LostPets from "../screens/LostPets";
import ShelteredPets from "../screens/ShelteredPets";
import PetsForAdoption from "../screens/PetsForAdoption";

export const RouterIndex = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/mascotas-perdidas" element={<LostPets />} />
			<Route path="/mascotas-resguardadas" element={<ShelteredPets />} />
			<Route path="/mascotas-en-adopcion" element={<PetsForAdoption />} />
		</Routes>
	);
};
