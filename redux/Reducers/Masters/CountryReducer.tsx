import ActionType from "redux/Constant/Masters/ActionType";

const initialState = {
    // Location
    mCountry: [],
  

};

function ContryReducer(state = initialState, action: any) {

    switch (action.type) {



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

        // case ActionType.UPDATE_COUNTRY:
        //     return { ...state };
        // case ActionType.UPDATE_COUNTRY_SUCCEED:
        //     return applyUpdateCOUNTRY(state, action);
        // case ActionType.UPDATE_COUNTRY_FAILED:
        //     return applyUpdateCOUNTRY(state, action);

        case ActionType.DEL_COUNTRY:
            return { ...state };
        case ActionType.DEL_COUNTRY_SUCCEED:
            return {
                ...state,
                mCountry: state.mCountry.filter((mCountry: any) => mCountry.id !== action.payload.id)
            }
            default:
                return { ...state}
        }}
        
export default ContryReducer