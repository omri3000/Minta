import React, { useState } from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./SideNav.css";
import { useSelector } from "react-redux";
import { rootStore } from "../../index";

export const SideNav = () => {
  const [select, setSelecet] = useState(-1);

  const campaignsState = useSelector((state: rootStore) => state.campaigns);

  return (
    <div className="SideNav-container">
      <div className="Title">
        <Link
          to={"/"}
          onClick={() => {
            setSelecet(-1);
          }}
        >
          Mints
        </Link>
      </div>
      {campaignsState && campaignsState.videos
        ? campaignsState.videos.map((campaign: any, i: number) => {
            return (
              <Link
                to={"/" + campaign.slug}
                onClick={() => {
                  setSelecet(i);
                }}
                key={i}
              >
                <div
                  className={`Campaign ${select === i ? "Selected" : ""}`}
                  key={i}
                >
                  {campaign.name}{" "}
                </div>
              </Link>
            );
          })
        : ""}
    </div>
  );
};
