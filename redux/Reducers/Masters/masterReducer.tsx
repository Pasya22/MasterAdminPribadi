import ActionType from "redux/Constant/Masters/ActionType";

const initialState = {
    mRegion: [],
    mCountry: []
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
            


        // ======= country ======//
        case ActionType.GET_COUNTRY:
            return { ...state };
        case ActionType.GET_COUNTRY_SUCCEED:
            return { ...state, mCountry: action.payload };

        case ActionType.ADD_COUNTRY:
            return { ...state };
        case ActionType.ADD_COUNTRY_SUCCEED:
            return { ...state, mCountry: [...state.mCountry, action.payload] };
        case ActionType.ADD_COUNTRY_FAILED:
            return { ...state, mCountry: action.payload };

        case ActionType.UPDATE_COUNTRY:
            return { ...state };
        case ActionType.UPDATE_COUNTRY_SUCCEED:
            return applyUpdateCOUNTRY(state, action);
        case ActionType.UPDATE_COUNTRY_FAILED:
            return applyUpdateCOUNTRY(state, action);

        case ActionType.DEL_COUNTRY:
            return { ...state };
        case ActionType.DEL_COUNTRY_SUCCEED:
            return {
                ...state,
                mCountry: state.mCountry.filter((mCountry: any) => mCountry.id !== action.payload.id)
            }
        default:
            return { ...state, mRegion: action.payload  }
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
// ====== country ===== //
const applyUpdateCOUNTRY = (state: any, action: any) => {
    return state.mCountry.results.map((mCountry: any) => {
        if (mCountry.countryID === state.mCountry.results.countryId) {
            return {
                ...state,
                ...state.mCountry.results
            }
        } else {
            return state
        }
    });
}
// const applyUpdatePhotoUsers = (state: any, action: any) => {
//     return state.users.results.map((users: any) => {
//         if (users.userId === state.user.results.userId) {
//             return {
//                 ...state,
//                 ...state.user.results
//             }
//         } else {
//             return state
//         }
//     });
// }


export default masterReducers