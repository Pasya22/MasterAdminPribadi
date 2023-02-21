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



// ======== prov =======//
export const doProvRequest: any = (): any => {
    return {
        type: ActionMasterType.GET_PROV
    }
}

export const doProvRequestSucceed: any = (payload: any): any => {
    return {
        type: ActionMasterType.GET_PROV_SUCCEED,
        payload
    }
}

export const doProvRequestFailed: any = (payload: any): any => {
    return {
        type: ActionMasterType.GET_PROV_SUCCEED,
        payload
    }
}

export const doProvCreate: any = (payload: any): any => {
    return {
        type: ActionMasterType.ADD_PROV,
        payload
    }
}

export function doAddProvSucceed(payload: any): any {
    return {
        type: ActionMasterType.ADD_PROV_SUCCEED,
        payload
    }

}

export const doAddProvFailed: any = (payload: any): any => {
    return {
        type: ActionMasterType.ADD_PROV_FAILED,
        payload
    }
}

export const doUpdateProv: any = (id: number, payload: any): any => {
    return {
        type: ActionMasterType.UPDATE_PROV,
        id,
        payload
    }
}

export const doUpdateProvSucceed: any = (payload: any): any => {
    return {
        type: ActionMasterType.UPDATE_PROV_SUCCEED,
        payload
    }
}


export const doUpdateProvFailed: any = (payload: any): any => {
    return {
        type: ActionMasterType.UPDATE_PROV_FAILED,
        payload
    }
}


export const doDeleteProv: any = (payload: any): any => {
    return {
        type: ActionMasterType.DEL_PROV,
        payload
    }
}

export const doDeleteProvSucceed: any = (payload: any): any => {
    console.info(payload)
    return {
        type: ActionMasterType.DEL_PROV_SUCCEED,
        payload
    }
}

export const doDeleteProvFailed: any = (payload: any): any => {
    return {
        type: ActionMasterType.DEL_PROV_FAILED,
        payload
    }
}


// === addr
export const doAddrRequest: any = (): any => {
    return {
        type: ActionMasterType.GET_ADDR
    }
}

export const doAddrRequestSucceed: any = (payload: any): any => {
    return {
        type: ActionMasterType.GET_ADDR_SUCCEED,
        payload
    }
}

export const doAddrRequestFailed: any = (payload: any): any => {
    return {
        type: ActionMasterType.GET_ADDR_SUCCEED,
        payload
    }
}

export const doAddrCreate: any = (payload: any): any => {
    return {
        type: ActionMasterType.ADD_ADDR,
        payload
    }
}

export function doAddAddrSucceed(payload: any): any {
    return {
        type: ActionMasterType.ADD_ADDR_SUCCEED,
        payload
    }

}

export const doAddAddrFailed: any = (payload: any): any => {
    return {
        type: ActionMasterType.ADD_ADDR_FAILED,
        payload
    }
}

export const doUpdateAddr: any = (id: number, payload: any): any => {
    return {
        type: ActionMasterType.UPDATE_ADDR,
        id,
        payload
    }
}

export const doUpdateAddrSucceed: any = (payload: any): any => {
    return {
        type: ActionMasterType.UPDATE_ADDR_SUCCEED,
        payload
    }
}


export const doUpdateAddrFailed: any = (payload: any): any => {
    return {
        type: ActionMasterType.UPDATE_ADDR_FAILED,
        payload
    }
}


export const doDeleteAddr: any = (payload: any): any => {
    return {
        type: ActionMasterType.DEL_ADDR,
        payload
    }
}

export const doDeleteAddrSucceed: any = (payload: any): any => {
    console.info(payload)
    return {
        type: ActionMasterType.DEL_ADDR_SUCCEED,
        payload
    }
}

export const doDeleteAddrFailed: any = (payload: any): any => {
    return {
        type: ActionMasterType.DEL_ADDR_FAILED,
        payload
    }
}
