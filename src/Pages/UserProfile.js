import React from "react";
import Card from "../Component/Card";
import UserProfileStyle from "./UserProfile.module.css";

function UserProfile() {
  return (
    <div className={UserProfileStyle.container}>
      <Card />
    </div>
  );
}

export default UserProfile;
