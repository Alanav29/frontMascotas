/* eslint-disable react/prop-types */
import { useState } from "react";
import getLostPet from "../utils/lostPets/getLostPet";
import { useParams } from "react-router-dom";

const LostPetDetail = () => {
	const { lostPetId } = useParams();
	const [lostPet, setLostPet] = useState({ image: "" });
	const fetchGetLostPet = async () => {
		try {
			const result = await getLostPet(lostPetId);

			if (result.status === 200) {
				setLostPet(result.data);
			}
		} catch (error) {
			console.log(
				"Ocurrio un error al traer la mascota perdida",
				error.message
			);
		}
	};

	useState(() => {
		fetchGetLostPet();
	}, []);

	return (
		<div className="container my-4">
			<div className="card mb-3">
				<div className="row g-0">
					<div className="col-md-5">
						<img
							src={lostPet.image.secure_url}
							className="img-fluid rounded-start"
							alt="Pet image"
						/>
					</div>
					<div className="col-md-7">
						<div className="card-body">
							<h5 className="card-title">{lostPet.name}</h5>
							<p className="card-text mb-2">{lostPet.description}</p>
							<h5 className="card-title">Me perdi el :</h5>
							<h6 className="card-text">{lostPet.date_lost}</h6>
						</div>
					</div>
				</div>
			</div>
			<div>Esta sera la seccion de comentarios</div>
		</div>
	);
};

export default LostPetDetail;
