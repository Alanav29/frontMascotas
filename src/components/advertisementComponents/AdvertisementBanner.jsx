/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const AdvertisementBanner = ({ advertisement, initActive }) => {
	let activeClass = "";
	if (initActive === true) {
		activeClass = "active";
	}
	return (
		<Link
			to={`advertisements/${advertisement._id}`}
			className={`carousel-item ${activeClass}`}
		>
			<img
				src={advertisement.image.secure_url}
				className="d-block w-100"
				alt="..."
			/>
		</Link>
	);
};

export default AdvertisementBanner;
