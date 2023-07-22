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
import { useForm } from "react-hook-form";

const LostPetDetail = () => {
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const { lostPetId } = useParams();
	const [lostPet, setLostPet] = useState({ image: "" });
	const comments = [
		{ id: "24", comment: "Lo vi hace un rato", user_name: "Alan" },
		{ id: "25", comment: "Paso por mi casa", user_name: "Alan" },
	];
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
			<Link
				to={`/mascota-perdida-edit/${lostPetId}`}
				className="btn btn-primary"
			>
				Editar mascota
			</Link>
		);
	}

	return (
		<div className="container my-4">
			<div className="mb-3">
				<div className="row g-0">
					<div className="col-md-5 p-4 ps-0">
						<img
							src={lostPet.image.secure_url}
							className="img-fluid rounded-start"
							alt="Pet image"
						/>
					</div>
					<div className="col-md-7 p-4">
						<div className="">
							<h5 className="fs-5">{lostPet.name}</h5>
							<p className="fs-6 mb-2">{lostPet.description}</p>
							<h5 className="fs-5">Me perdi el :</h5>
							<h6 className="fs-6">{lostPet.date_lost}</h6>
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
				<div className="my-2">
					<form className="d-flex" onSubmit={handleSubmit()}>
						<textarea
							{...register("comment")}
							className="form-control"
							aria-label="With textarea"
							id="lostPetCommentInput"
							placeholder="Agrega un comentario"
						></textarea>
						<button className="p-2 bg-success btn text-white mx-2 d-flex align-items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								className="bi bi-caret-right-fill"
								viewBox="0 0 16 16"
							>
								<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
							</svg>
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LostPetDetail;
