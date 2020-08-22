import React, { useEffect } from "react";
import "./Main.css";
import { useDispatch, useSelector } from "react-redux";
import { rootStore } from "../../index";
// eslint-disable-next-line
import { BrowserRouter as Router, useParams } from "react-router-dom";
import _ from "lodash";
import * as actions from "../../actions/actions";

export const Main = () => {
  const videoState = useSelector((state: rootStore) => state.data);
  const campaignsState = useSelector((state: rootStore) => state.campaigns);
  const dispatch = useDispatch();

  let { campaign } = useParams();

  const campaignsBySlug = _.groupBy(campaignsState.videos, (e) => e.slug);

  useEffect(() => {
    if (
      campaignsBySlug[campaign] &&
      !videoState.data[campaign] &&
      !videoState.loading
    ) {
      dispatch(
        actions.fetchData(
          campaignsBySlug[campaign][0].campaignId,
          campaignsBySlug[campaign][0].name,
          campaignsBySlug[campaign][0].slug
        )
      );
    }
  });

  const handle = (currentVideos: number) => {
    dispatch(
      actions.fetchData(
        campaignsBySlug[campaign][0].campaignId,
        campaignsBySlug[campaign][0].name,
        campaignsBySlug[campaign][0].slug,
        currentVideos + 6
      )
    );
  };

  return (
    <div>
      {videoState.data && videoState.data[campaign] ? (
        <div className="MainTitle"># {videoState.data[campaign].name}</div>
      ) : (
        ""
      )}
      <div className="flex-container">
        {videoState.data && videoState.data[campaign]
          ? videoState.data[campaign].videos.docs.map((event, i) => {
              if (event.videos[0]) {
                return (
                  <div className="card" key={i}>
                    <video
                      controls
                      width="100%"
                      height="100%"
                      poster={event.videos[0].previewImage}
                    >
                      <source src={event.videos[0].url} type="video/mp4" />
                    </video>
                  </div>
                );
              }
              return "";
            })
          : ""}
      </div>
      {videoState.data &&
      videoState.data[campaign] &&
      videoState.data[campaign].videos.hasNextPage ? (
        <div className="showMore">
          <button
            onClick={() => handle(videoState.data[campaign].videos.docs.length)}
          >
            Show More
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
