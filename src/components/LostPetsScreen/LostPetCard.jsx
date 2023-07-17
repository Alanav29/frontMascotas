/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "../../styles/LostPetCard.css";

const LostPetCard = ({ lostPet }) => {
	return (
		<>
			<div className="card cardList m-3 lostPetCard">
				<img
					src={lostPet.image.secure_url}
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h1 className="card-title fs-4 colorThree">{lostPet.name}</h1>
					<h2 className="card-title fs-5">Fecha de perdida</h2>
					<p className="card-title fs-6">{lostPet.date_lost}</p>
					<p className="card-title fs-6">{lostPet.description}</p>
					<Link to={`/${lostPet._id}`} className="btn bgOne">
						Mas detalles
					</Link>
				</div>
			</div>
		</>
	);
};

export default LostPetCard;
