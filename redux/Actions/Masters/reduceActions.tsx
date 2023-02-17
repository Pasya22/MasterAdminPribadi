import ActionMasterType from "redux/Constant/Masters/ActionType"

export const doRegionsRequest: any = (): any => {
    return {
        type: ActionMasterType.GET_REGIONS
    }
}

export const doRegionsRequestSucceed: any = (payload: any): any => {
    return {
        type: ActionMasterType.GET_REGIONS_SUCCEED,
        payload
    }
}

export const doRegionsRequestFailed: any = (payload: any): any => {
    return {
        type: ActionMasterType.GET_REGIONS_SUCCEED,
        payload
    }
}

export const doRegionsCreate: any = (payload: any): any => {
    return {
        type: ActionMasterType.ADD_REGIONS,
        payload
    }
}

export const doAddRegionsSucceed: any = (payload: any): any => {
    return {
        type: ActionMasterType.ADD_REGIONS_SUCCEED,
        payload
    }

}

export const doAddRegionsFailed: any = (payload: any): any => {
    return {
        type: ActionMasterType.ADD_REGIONS_FAILED,
        payload
    }
}

export const doUpdateRegions: any = (id: number, payload: any): any => {
    return {
        type: ActionMasterType.UPDATE_REGIONS,
        id,
        payload
    }
}

export const doUpdateRegionsSucceed: any = (payload: any): any => {
    return {
        type: ActionMasterType.UPDATE_REGIONS_SUCCEED,
        payload
    }
}


export const doUpdateRegionsFailed: any = (payload: any): any => {
    return {
        type: ActionMasterType.UPDATE_REGIONS_FAILED,
        payload
    }
}


export const doDeleteRegions: any = (payload: any): any => {
    return {
        type: ActionMasterType.DEL_REGIONS,
        payload
    }
}

export const doDeleteRegionsSucceed: any = (payload: any): any => {
    console.info(payload)
    return {
        type: ActionMasterType.DEL_REGIONS_SUCCEED,
        payload
    }
}

export const doDeleteRegionsFailed: any = (payload: any): any => {
    return {
        type: ActionMasterType.DEL_REGIONS_FAILED,
        payload
    }
}


// ===================== country ======== //

export const doCountryRequest: any = (): any => {
    return {
        type: ActionMasterType.GET_COUNTRY
    }
}

export const doCountryRequestSucceed: any = (payload: any): any => {
    return {
        type: ActionMasterType.GET_COUNTRY_SUCCEED,
        payload
    }
}

export const doCountryRequestFailed: any = (payload: any): any => {
    return {
        type: ActionMasterType.GET_COUNTRY_SUCCEED,
        payload
    }
}

export const doCountryCreate: any = (payload: any): any => {
    return {
        type: ActionMasterType.ADD_COUNTRY,
        payload
    }
}

export const doAddCountrySucceed: any = (payload: any): any => {
    return {
        type: ActionMasterType.ADD_COUNTRY_SUCCEED,
        payload
    }

}

export const doAddCountryFailed: any = (payload: any): any => {
    return {
        type: ActionMasterType.ADD_COUNTRY_FAILED,
        payload
    }
}

export const doUpdateCountry: any = (id: number, payload: any): any => {
    return {
        type: ActionMasterType.UPDATE_COUNTRY,
        id,
        payload
    }
}

export const doUpdateCountrySucceed: any = (payload: any): any => {
    return {
        type: ActionMasterType.UPDATE_COUNTRY_SUCCEED,
        payload
    }
}


export const doUpdateCountryFailed: any = (payload: any): any => {
    return {
        type: ActionMasterType.UPDATE_COUNTRY_FAILED,
        payload
    }
}


export const doDeleteCountry: any = (payload: any): any => {
    return {
        type: ActionMasterType.DEL_COUNTRY,
        payload
    }
}

export const doDeleteCountrySucceed: any = (payload: any): any => {
    console.info(payload)
    return {
        type: ActionMasterType.DEL_COUNTRY_SUCCEED,
        payload
    }
}

export const doDeleteCountryFailed: any = (payload: any): any => {
    return {
        type: ActionMasterType.DEL_REGIONS_FAILED,
        payload
    }
}

