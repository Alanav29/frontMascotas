import { Link } from "react-router-dom";
import "../../styles/LostPetCard.css";

const LostPetCard = () => {
	return (
		<>
			<div className="card cardList m-3 lostPetCard">
				<img
					src="https://res.cloudinary.com/dtyazhppg/image/upload/v1689399972/samples/animals/three-dogs.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">Nombre Mascota</h5>
					<h5 className="card-title">Fecha en que se perdio</h5>
					<p>20/01/2023</p>
					<p className="card-text">Descripcion mascota</p>
					<Link to="/" className="btn btn-primary">
						Mas detalles
					</Link>
				</div>
			</div>
		</>
	);
};

export default LostPetCard;
