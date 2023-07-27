import { Link } from "react-router-dom";
import "../../styles/HomeCarousel.css";

const HomeCarousel = () => {
	const banners = {
		bannerOne: {
			image:
				"https://res.cloudinary.com/dtyazhppg/image/upload/v1689925580/samples/banner1_te4ibq.jpg",
			id: "1",
		},
		bannerTwo: {
			image:
				"https://res.cloudinary.com/dtyazhppg/image/upload/v1689925580/samples/banner1_te4ibq.jpg",
			id: "2",
		},
		bannerThree: {
			image:
				"https://res.cloudinary.com/dtyazhppg/image/upload/v1689925580/samples/banner1_te4ibq.jpg",
			id: "3",
		},
	};
	return (
		<div className="carouselHeight">
			<div id="carouselExampleIndicators" className="carousel slide">
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to={0}
						className="active"
						aria-current="true"
						aria-label="Slide 1"
					/>
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to={1}
						aria-label="Slide 2"
					/>
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to={2}
						aria-label="Slide 3"
					/>
				</div>
				<div className="carousel-inner">
					<Link
						to={`advertisements/${banners.bannerOne.id}`}
						className="carousel-item active"
					>
						<img
							src={banners.bannerOne.image}
							className="d-block w-100"
							alt="..."
						/>
					</Link>
					<Link
						to={`advertisements/${banners.bannerTwo.id}`}
						className="carousel-item active"
					>
						<img
							src={banners.bannerThree.image}
							className="d-block w-100"
							alt="..."
						/>
					</Link>
					<Link
						to={`advertisements/${banners.bannerThree.id}`}
						className="carousel-item active"
					>
						<img
							src={banners.bannerThree.image}
							className="d-block w-100"
							alt="..."
						/>
					</Link>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide="prev"
				>
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide="next"
				>
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	);
};

export default HomeCarousel;
