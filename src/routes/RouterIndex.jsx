import { Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import LostPets from "../screens/LostPets";
import ShelteredPets from "../screens/ShelteredPets";
import PetsForAdoption from "../screens/PetsForAdoption";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import AddLostPet from "../screens/AddLostPet";
import UserData from "../screens/UserData";
import PublicityBanners from "../screens/PublicityBanners";
import LostPetDetail from "../screens/LostPetDetail";
import PublicityDetail from "../screens/PublicityDetail";
import LostPetEdit from "../screens/LostPetEdit";
import AddShelteredPet from "../screens/AddShelteredPet";
import ShelteredPetDetail from "../screens/ShelteredPetDetail";

export const RouterIndex = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/mascotas-perdidas" element={<LostPets />} />
			<Route path="/mascotas-perdidas/:lostPetId" element={<LostPetDetail />} />
			<Route
				path="/mascotas-resguardadas/:lostPetId"
				element={<ShelteredPetDetail />}
			/>
			<Route
				path="/mascota-perdida-edit/:lostPetId"
				element={<LostPetEdit />}
			/>
			<Route path="/mascotas-resguardadas" element={<ShelteredPets />} />
			<Route path="/mascotas-en-adopcion" element={<PetsForAdoption />} />
			<Route path="/signIn" element={<SignIn />} />
			<Route path="/signUp" element={<SignUp />} />
			<Route path="/add-lost-pet" element={<AddLostPet />} />
			<Route path="/add-sheltered-pet" element={<AddShelteredPet />} />
			<Route path="/user-data" element={<UserData />} />
			<Route path="/publicity-banners" element={<PublicityBanners />} />
			<Route
				path="/publicity-banners/:publicityId"
				element={<PublicityDetail />}
			/>
		</Routes>
	);
};
