import "../../styles/HomeDescription.css";
import descImg from "../../assets/homeDescriptionImg.png";

const HomeDescription = () => {
	return (
		<div className="homeDesCard">
			<img src={descImg} className="card-img" alt="Dog with brown background" />
		</div>
	);
};

export default HomeDescription;
