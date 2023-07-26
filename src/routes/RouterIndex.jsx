import { Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import LostPets from "../screens/LostPets";
import ShelteredPets from "../screens/ShelteredPets";
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
import PetsForAdoption from "../screens/PetsForAdoption";
import AddAdoptionPet from '../screens/AddAdoptionPet.jsx'
import AdoptionPetDetail from '../screens/AdoptionPetDetail'
import AdoptionPetEdit from '../screens/AdoptionPetEdit'

export const RouterIndex = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/mascotas-perdidas" element={<LostPets />} />
			<Route path="/mascotas-perdidas/:petId" element={<LostPetDetail />} />
			<Route path="/mascota-perdida-edit/:lostPetId" element={<LostPetEdit />}/>
			<Route path="/add-lost-pet" element={<AddLostPet />} />

			<Route path="/mascotas-resguardadas" element={<ShelteredPets />} />
			<Route path="/mascotas-resguardadas/:petId" element={<ShelteredPetDetail />}/>
			<Route path="/add-sheltered-pet" element={<AddShelteredPet />} />
			
			<Route path="/mascotas-en-adopcion" element={<PetsForAdoption />} />
			<Route path="/mascotas-en-adopcion/:petId" element={<AdoptionPetDetail />} />
			<Route path="/mascota-en-adopcion-edit/:petId" element={<AdoptionPetEdit />}/>
			<Route path="/add-adoption-pet" element={<AddAdoptionPet />} />
			
			<Route path="/signIn" element={<SignIn />} />
			<Route path="/signUp" element={<SignUp />} />
			<Route path="/user-data" element={<UserData />} />
			<Route path="/publicity-banners" element={<PublicityBanners />} />
			<Route
				path="/publicity-banners/:publicityId"
				element={<PublicityDetail />}
			/>
		</Routes>
	);
};
