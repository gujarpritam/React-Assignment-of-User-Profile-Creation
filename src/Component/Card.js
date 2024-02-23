import React, { useEffect, useState } from "react";
import CardStyle from "./Card.module.css";
import "../App.css";

function Card() {
  const [userDetails, setUserDetails] = useState({});
  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = () => {
    const userDetailsUrl =
      "https://randomuser.me/api/?page=1&results=1&seed=abc";
    fetch(userDetailsUrl)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data.results[0].picture);
        console.log(data.results[0]);
        setUserDetails(data.results[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={CardStyle.container}>
      <div className={CardStyle.innerContainer}>
        <div className={CardStyle.informationBox}>
          <img className={CardStyle.imageBox} src={userDetails.picture.large} />
          <div className={CardStyle.userInfoContainer}>
            <div className={CardStyle.userInfo}>
              <div>First Name: &nbsp;{userDetails.name.first}</div>
              <div className={CardStyle.lastName}>
                Last Name: &nbsp;{userDetails.name.last}
              </div>
            </div>

            <div className={CardStyle.lName}>
              Last Name: &nbsp;{userDetails.name.last}
            </div>

            <div>Gender: &nbsp;{userDetails.gender}</div>
            <div>Phone Number: &nbsp;{userDetails.phone}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
