import {
  VideosType,
  DispatchTypes,
  DATA_VIDEOS_SUCCESS,
  DATA_VIDEOS_FAIL,
  DATA_VIDEOS_LOADING,
  GET_CAMPAIGNS_SUCCESS,
  DATA_VIDEOS_MORE_SUCCESS,
} from "../actions/actionsTypes";

export interface InitialState {
  loading: boolean;
  data: VideosType[];
}

export const initialState: InitialState = {
  loading: false,
  data: [],
};

export interface ViewState {
  videos?: VideosType;
}

export const viewState: ViewState = {};

export default function dataReducer(
  state: InitialState = initialState,
  action: DispatchTypes
): InitialState {
  switch (action.type) {
    case DATA_VIDEOS_SUCCESS:
      return {
        loading: false,
        data: Object.assign({}, state.data, {
          [action.payload.slug]: action.payload,
        }),
      };
    case DATA_VIDEOS_MORE_SUCCESS:
      return {
        loading: false,
        data: Object.assign({}, state.data, {
          [action.payload.slug]: action.payload,
        }),
      };
    case DATA_VIDEOS_FAIL:
      return { loading: false, data: state.data };
    case DATA_VIDEOS_LOADING:
      return { loading: true, data: state.data };
    default:
      return { ...state };
  }
}

export function campaignsReducer(state: ViewState = viewState, action: any) {
  switch (action.type) {
    case GET_CAMPAIGNS_SUCCESS:
      return {
        videos: action.payload,
      };
    default:
      return { ...state };
  }
}
