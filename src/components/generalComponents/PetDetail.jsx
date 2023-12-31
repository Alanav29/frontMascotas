/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../features/userFeature";
import {
	setChange,
	selectChangesCounter,
} from "../../features/changesCounterFeature";
import Comment from "./Comment";

// import getLostPet from "../../utils/lostPets/getLostPet";
// import delLostPet from "../../utils/lostPets/delLostPet";
// import {getComments, postComment, delComment} from "./../../utils/comments"

const PetDetail = ({ delPet, getComments, postComment, getPet, editUrl }) => {
	const { register, handleSubmit, reset } = useForm();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	let changesCounter = useSelector(selectChangesCounter);
	const { petId } = useParams();
	const [pet, setPet] = useState({ image: "" });
	const [comments, setComments] = useState([]);
	let delButton = <></>;
	let editButton = <></>;
	let commentForm = <></>;

	const fetchGetLostPet = async () => {
		try {
			const result = await getPet(petId);

			if (result.status === 200) {
				setPet(result.data);
			}
		} catch (error) {
			console.log(
				"Ocurrio un error al traer la mascota perdida",
				error.message
			);
		}
	};

	const fetchComments = async () => {
		try {
			const result = await getComments(petId);

			if (result.status === 200) {
				setComments(result.data);
			}
		} catch (error) {
			console.log(
				"Ocurrio un error al traer los comentarios de la mascota perdida",
				error.message
			);
		}
	};

	useEffect(() => {
		fetchGetLostPet();
	}, []);

	useEffect(() => {
		fetchComments();
	}, [changesCounter]);

	const fetchDeletePet = async () => {
		try {
			const result = await delPet(petId, user.token);

			if (result.status === 200) {
				navigate("/");
				dispatch(setChange(1));
				console.log("se borro mascota perdida");
			}
		} catch (error) {
			console.log("Ocurrio un error al borrar la mascota ", error.message);
		}
	};

	const deletePet = () => {
		fetchDeletePet();
	};

	let dateType = "";
	let date = pet.createdAt;
	let postType = "";
	if (pet.date_lost) {
		dateType = "Fecha de perdida";
		date = pet.date_lost;
		postType = "LostPet";
	} else if (pet.date_found) {
		dateType = "Fecha en que se encontro";
		date = pet.date_found;
		postType = "ShelteredPet";
	} else {
		dateType = "Fecha de subida";
		postType = "AdoptionPet";
	}

	const fetchPostComment = async (data) => {
		try {
			const result = await postComment(data, petId, postType, user.token);

			if (result.status === 200) {
				dispatch(setChange(1));
				console.log("se agrego comentario");
			}
		} catch (error) {
			console.log("Ocurrio un error al publicar comentario ", error.message);
		}
	};

	const addComment = (data) => {
		reset();
		fetchPostComment(data);
	};

	if (user.isAdmin) {
		delButton = (
			<button onClick={deletePet} className="btn btn-danger me-4">
				Borrar mascota
			</button>
		);

		editButton = (
			<Link to={`${editUrl}${petId}`} className="btn btn-primary">
				Editar mascota
			</Link>
		);
	} else if (user._id === pet.user_id) {
		editButton = (
			<Link to={`${editUrl}${petId}`} className="btn btn-primary">
				Editar mascota
			</Link>
		);
	}

	if (user.token) {
		commentForm = (
			<div className="my-2">
				<form className="d-flex" onSubmit={handleSubmit(addComment)}>
					<textarea
						{...register("text")}
						className="form-control"
						aria-label="With textarea"
						id="lostPetCommentInput"
						placeholder="Agrega un comentario"
					></textarea>
					<button
						type="submit"
						className="p-2 bg-success btn text-white mx-2 d-flex align-items-center"
					>
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
		);
	}

	let name = "";
	if (pet.name === "") {
		name = "Sin Nombre";
	} else {
		name = pet.name;
	}

	return (
		<div className="container my-4">
			<div className="mb-3">
				<div className="row g-0">
					<div className="col-md-5 p-4 ps-0">
						<img
							src={pet.image.secure_url}
							className="img-fluid rounded-start"
							alt="Pet image"
						/>
					</div>
					<div className="col-md-7 p-4">
						<div className="">
							<h5 className="fs-5">{name}</h5>
							<p className="fs-6 mb-2">{pet.description}</p>
							<h5 className="fs-5">{dateType}</h5>
							<h6 className="fs-6">{date}</h6>
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
					<Comment key={comment._id} comment={comment} />
				))}
				{commentForm}
			</div>
		</div>
	);
};

export default PetDetail;
