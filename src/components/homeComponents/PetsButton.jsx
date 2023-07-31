/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const PetsButton = ({ buttonText, url, classBg }) => {
	return (
		<Link to={url} className={`petButtonHome text-center ${classBg}`}>
			{buttonText}
		</Link>
	);
};

export default PetsButton;
