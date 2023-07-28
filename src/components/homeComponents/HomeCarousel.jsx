/* eslint-disable react/prop-types */
import "../../styles/HomeCarousel.css";
import AdvertisementBanner from "../advertisementComponents/AdvertisementBanner";

const HomeCarousel = ({ advertisements }) => {
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
					<AdvertisementBanner
						key={advertisements[0]._id}
						advertisement={advertisements[0]}
						initActive={true}
					/>
					<AdvertisementBanner
						key={advertisements[1]._id}
						advertisement={advertisements[1]}
						initActive={false}
					/>
					<AdvertisementBanner
						key={advertisements[2]._id}
						advertisement={advertisements[2]}
						initActive={false}
					/>
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
