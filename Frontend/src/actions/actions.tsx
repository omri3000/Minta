import axios from "axios";
import { Dispatch } from "redux";
import {
  DispatchTypes,
  DATA_VIDEOS_LOADING,
  DATA_VIDEOS_FAIL,
  DATA_VIDEOS_SUCCESS,
  CampaignsDispatchTypes,
  GET_CAMPAIGNS_FAIL,
  GET_CAMPAIGNS_SUCCESS,
  DATA_VIDEOS_MORE_SUCCESS,
} from "./actionsTypes";

let config = {
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTg0OGQ2YWU1MWMwNzQ5ODRhYTdlYjEiLCJyb2xlcyI6WyJ1c2VyIl0sImlhdCI6MTU4NTc0NTI1OSwiZXhwIjoxNTg1ODMxNjU5fQ.S61K8RkHJ6qwxRjp9m2Pfvttd6hRBOyWRO3TimRkJA4",
  },
};

export function fetchData(
  campaignId: string,
  campaignName: string,
  slugName: string,
  limit: number = 6
) {
  return async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({
      type: DATA_VIDEOS_LOADING,
    });
    await axios
      .get(
        `https://dev.withminta.com/generate-video/videos/findByCampaign?campaignId=${campaignId}&offset=0&limit=${limit}&applicationSource=web`,
        config
      )
      .then((res) => {
        if (limit !== 6) {
          dispatch({
            type: DATA_VIDEOS_MORE_SUCCESS,
            payload: { name: campaignName, slug: slugName, videos: res.data },
          });
        } else {
          dispatch({
            type: DATA_VIDEOS_SUCCESS,
            payload: { name: campaignName, slug: slugName, videos: res.data },
          });
        }
      })
      .catch((res) => {
        dispatch({ type: DATA_VIDEOS_FAIL });
      });
  };
}

export function fetchCampaigns() {
  return async (dispatch: Dispatch<CampaignsDispatchTypes>) => {
    await axios
      .get(`https://run.mocky.io/v3/acaf8c80-a96a-4298-a824-42e9c826d9d3`)
      .then((res) => {
        dispatch({
          type: GET_CAMPAIGNS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((res) => {
        dispatch({ type: GET_CAMPAIGNS_FAIL });
      });
  };
}
