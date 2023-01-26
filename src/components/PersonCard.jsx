import React from "react";

const PersonCard = (props) => {
  return (
    <div className="containt-person">
      <p className="first-person">
        <strong>
          {props.first} , {props.last}
        </strong>
      </p>

      <p className="age-person">Age: {props.age}</p>
      <p className="hair-person"> Hair Color: {props.hair}</p>
    </div>
  );
};
export default PersonCard;
