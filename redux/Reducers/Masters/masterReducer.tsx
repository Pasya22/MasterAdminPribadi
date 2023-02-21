import ActionType from "redux/Constant/Masters/ActionType";

const initialState = {
    // Location
    mRegion: [],


};

function masterReducers(state = initialState, action: any) {

    switch (action.type) {

        case ActionType.GET_REGIONS:
            return { ...state };
        case ActionType.GET_REGIONS_SUCCEED:
            return { ...state, mRegion: action.payload };

        case ActionType.ADD_REGIONS:
            return { ...state };
        case ActionType.ADD_REGIONS_SUCCEED:
            return { ...state, mRegion: [...state.mRegion, action.payload] };
        case ActionType.ADD_REGIONS_FAILED:
            return { ...state, mRegion: action.payload };

        case ActionType.UPDATE_REGIONS:
            return { ...state };
        case ActionType.UPDATE_REGIONS_SUCCEED:
            return applyUpdateRegions(state, action);
        case ActionType.UPDATE_REGIONS_FAILED:
            return applyUpdateRegions(state, action);

        case ActionType.DEL_REGIONS:
            return { ...state };
        case ActionType.DEL_REGIONS_SUCCEED:
            return {
                ...state,
                mRegion: state.mRegion.filter((mRegion: any) => mRegion.id !== action.payload.id)
            }


        default:
            return { ...state }
    }

}


const applyUpdateRegions = (state: any, action: any) => {
    return state.regions.results.map((regions: any) => {
        if (regions.regionCode === state.regions.results.regionCode) {
            return {
                ...state,
                ...state.regions.results
            }
        } else {
            return state
        }
    });
}


export default masterReducers