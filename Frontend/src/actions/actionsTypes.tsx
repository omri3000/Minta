export const DATA_VIDEOS_LOADING = "DATA_VIDEOS_LOADING";
export const DATA_VIDEOS_SUCCESS = "DATA_VIDEOS_SUCCESS";
export const DATA_VIDEOS_MORE_SUCCESS = "DATA_VIDEOS_MORE_SUCCESS";
export const DATA_VIDEOS_FAIL = "DATA_VIDEOS_FAIL";
export const GET_CAMPAIGNS_SUCCESS = "GET_CAMPAIGNS_SUCCESS";
export const GET_CAMPAIGNS_FAIL = "GET_CAMPAIGNS_FAIL";

export type VideosType = {
  name: string;
  slug: string;
  videos: Videos;
};

export type Videos = {
  docs: InerVideos[];
  hasNextPage: boolean;
};

type InerVideos = {
  videos: [{ previewImage: string; url: string }];
};

export type Campaigns = {
  campaignId: string;
  name: string;
  slug: string;
};

interface DataLoading {
  type: typeof DATA_VIDEOS_LOADING;
}

interface DataFail {
  type: typeof DATA_VIDEOS_FAIL;
}

interface DataSuccess {
  type: typeof DATA_VIDEOS_SUCCESS;
  payload: VideosType;
}
interface DataMoreSuccess {
  type: typeof DATA_VIDEOS_MORE_SUCCESS;
  payload: VideosType;
}

interface GetCampaignsSuccess {
  type: typeof GET_CAMPAIGNS_SUCCESS;
  payload: Campaigns[];
}
interface GetCampaignsFail {
  type: typeof GET_CAMPAIGNS_FAIL;
}

export type DispatchTypes =
  | DataLoading
  | DataFail
  | DataSuccess
  | DataMoreSuccess;
export type CampaignsDispatchTypes = GetCampaignsSuccess | GetCampaignsFail;
