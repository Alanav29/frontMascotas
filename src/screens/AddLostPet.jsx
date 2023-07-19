import { useForm } from "react-hook-form";

const AddLostPet = () => {
	const { register, handleSubmit } = useForm();
	const addLostPet = () => {};

	return (
		<div className="d-flex flex-wrap">
			<form className="d-block" onSubmit={handleSubmit(addLostPet)}>
				<label className="form-label" htmlFor="lostPetImgInput">
					Foto de mascota
				</label>
				<input
					{...register("image")}
					type="file"
					className="form-control"
					id="lostPetImgInput"
				/>

				<label className="form-label" htmlFor="lostPetNameInput">
					Nombre de mascota
				</label>
				<input
					{...register("name")}
					className="form-control"
					type="text"
					placeholder="Name"
					id="lostPetNameInput"
					required
				/>

				<label className="form-label" htmlFor="lostPetDescInput">
					Descripción
				</label>
				<textarea
					{...register("description")}
					className="form-control"
					aria-label="With textarea"
					id="lostPetDescInput"
					placeholder="Describe a tu mascota"
				></textarea>

				<label className="form-label" htmlFor="losPetDateInput">
					Fecha de perdida
				</label>
				<input
					{...register("date_lost")}
					className="form-control"
					type="date"
					placeholder="Fecha en que se perdío"
					id="losPetDateInput"
					required
				/>

				<button className="btn btn-success mt-3" type="submit">
					Registra mascota perdida
				</button>
			</form>
		</div>
	);
};

export default AddLostPet;
