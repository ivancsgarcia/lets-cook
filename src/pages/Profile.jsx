import React from "react";
import "../css/profile.css";
import Navbot from "../components/Navbot";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="profile">
      <div className="header">
        <Link to={"/home"}>
          <img
            src="/images/svg/chevron-left.svg"
            alt=""
            className="profile-left"
          />
        </Link>
        <h1>Profile</h1>
      </div>

      <div className="avatar">
        <div>
          <img src="/images/svg/avatar.svg" alt="" />
        </div>
        <div className="avatar-info">
          <h3>Email Address</h3>
          <p>Notes</p>
        </div>
      </div>

      <div className="settings">
        <h3>System</h3>
        <div className="row-2">
          <div className="row">
            <img
              src="images/svg/globe-americas.svg"
              alt=""
              className="left-side"
            />
            <span>Languages</span>
            <img
              src="/images/svg/chevron-right.svg"
              alt=""
              className="profile-right"
            />
          </div>
          <div className="row">
            <img
              src="images/svg/weight-scale-solid.svg"
              alt=""
              className="left-side"
            />
            <span>Measurement System</span>
            <img
              src="/images/svg/chevron-right.svg"
              alt=""
              className="profile-right"
            />
          </div>

          <div className="row mb-2">
            <img
              src="images/svg/circle-half-stroke-solid.svg"
              alt=""
              className="left-side"
            />
            <span>Dark Mode</span>
            <img
              src="/images/svg/chevron-right.svg"
              alt=""
              className="profile-right"
            />
          </div>
        </div>

        <div className="row row-2 m-2">
          <img
            src="images/svg/bookmark.svg"
            alt=""
            className="left-side mb-2"
          />
          <span>Favorites</span>
          <img
            src="/images/svg/chevron-right.svg"
            alt=""
            className="profile-right"
          />
        </div>
        <h3>More</h3>
        <div className="row-2">
          <div className="row">
            <img src="images/svg/info.svg" alt="" className="left-side" />
            <span>About Us</span>
            <img
              src="/images/svg/chevron-right.svg"
              alt=""
              className="profile-right"
            />
          </div>
          <div className="row">
            <img src="images/svg/star.svg" alt="" className="left-side" />
            <span>Rate this app</span>
            <img
              src="/images/svg/chevron-right.svg"
              alt=""
              className="profile-right"
            />
          </div>
          <div className="row mb-2">
            <img src="images/svg/share-2.svg" alt="" className="left-side" />
            <span>Share this app</span>
            <img
              src="/images/svg/chevron-right.svg"
              alt=""
              className="profile-right"
            />
          </div>
        </div>
      </div>
      <Navbot />
    </div>
  );
}

export default Profile;
