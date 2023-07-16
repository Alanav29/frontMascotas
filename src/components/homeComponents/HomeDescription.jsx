import "../../styles/HomeDescription.css";

const HomeDescription = () => {
	return (
		<div className="card text-bg-dark homeDesCard border border-0">
			<img
				src="https://res.cloudinary.com/dtyazhppg/image/upload/v1689483703/samples/banner2_ayfj0b.jpg"
				className="card-img"
				alt="Dog with brown background"
			/>
			<div className="card-img-overlay">
				<div className="homeDescription ms-auto d-flex align-items-center">
					<h1>Nos dedicamos a reunir familias perdidas</h1>
				</div>
			</div>
		</div>
	);
};

export default HomeDescription;
