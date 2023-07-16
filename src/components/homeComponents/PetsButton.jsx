/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const PetsButton = ({ buttonText, url, classBg }) => {
	return (
		<Link
			to={url}
			className={`m-3 petButtonHome text-center text-decoration-none fs-4 text-white ${classBg}`}
		>
			{buttonText}
		</Link>
	);
};

export default PetsButton;
