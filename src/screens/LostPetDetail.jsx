/* eslint-disable react/prop-types */
import { useState } from "react";
import getLostPet from "../utils/lostPets/getLostPet";
import { useNavigate, useParams } from "react-router-dom";
import Comment from "../components/lostPetDetail/comment";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../features/userFeature";
import { setChange } from "../features/changesCounterFeature";
import delLostPet from "../utils/lostPets/delLostPet";
import { Link } from "react-router-dom";

const LostPetDetail = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const { lostPetId } = useParams();
	const [lostPet, setLostPet] = useState({ image: "" });
	const comments = [{ id: "24", comment: "Lo vi hace un rato" }];
	let delButton = <></>;
	let editButton = <></>;

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

	const fetchDeleteLostPet = async () => {
		try {
			const result = await delLostPet(lostPetId, user.token);

			if (result.status === 200) {
				navigate("/");
				dispatch(setChange(1));
				console.log("se borro mascota perdida");
			}
		} catch (error) {
			console.log("Ocurrio un error al borrar la mascota ", error.message);
		}
	};

	const deleteLostPet = () => {
		fetchDeleteLostPet();
	};

	if (user.isAdmin) {
		delButton = (
			<button onClick={deleteLostPet} className="btn btn-danger me-4">
				Borrar mascota
			</button>
		);

		editButton = (
			<Link
				to={`/mascota-perdida-edit/${lostPetId}`}
				className="btn btn-primary"
			>
				Editar mascota
			</Link>
		);
	} else if (user._id === lostPet.user_id) {
		editButton = (
			<Link to="/" className="btn btn-success">
				Editar mascota
			</Link>
		);
	}

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
							<div className="d-flex">
								{delButton}
								{editButton}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h5 className="my-4">Comentarios</h5>
				{comments.map((comment) => (
					<Comment key={comment.id} comment={comment} />
				))}
			</div>
		</div>
	);
};

export default LostPetDetail;
