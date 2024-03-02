import "./BusinessCard.css";
import { SocialIcon } from "react-social-icons";

const BusinessCard = (props) => {
  const { name, description, interests, social } = props.data;
  return (
    <>
      <div className="card-container">
        <h3 className="card-title">{name}</h3>
        <p className="card-description">{description} </p>
        <div className="card-interest-container">
          {interests.map((item) => (
            <p className="card-interest-item" key={item}>
              {item}
            </p>
          ))}
        </div>
        <div className="card-media-container">
          {social.map((item) => {
            <SocialIcon url={`${item}`} />;
          })}
        </div>
      </div>
    </>
  );
};

export default BusinessCard;
