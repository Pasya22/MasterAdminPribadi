import { call, put } from "redux-saga/effects";
import ReduceService from "redux/Services/Masters/reduceService";
import {
    doAddRegionsFailed,
    doAddRegionsSucceed,
    doDeleteRegionsFailed,
    doDeleteRegionsSucceed,
    doUpdateRegionsFailed,
    doUpdateRegionsSucceed,
    doRegionsRequestFailed,
    doRegionsRequestSucceed,

    doCountryRequestSucceed,
    doAddCountryFailed,
    doAddCountrySucceed,
    doUpdateCountrySucceed,
    doUpdateCountryFailed,
    doDeleteCountryFailed,
    doDeleteCountrySucceed,
    doCountryRequestFailed,

    doProvRequestSucceed,
    doAddProvFailed,
    doAddProvSucceed,
    doUpdateProvSucceed,
    doUpdateProvFailed,
    doDeleteProvFailed,
    doDeleteProvSucceed,
    doProvRequestFailed,

    doAddrRequestSucceed,
    doAddAddrFailed,
    doAddAddrSucceed,
    doUpdateAddrSucceed,
    doUpdateAddrFailed,
    doDeleteAddrFailed,
    doDeleteAddrSucceed,
    doAddrRequestFailed,






} from '../../Actions/Masters/reduceActions';


function* handleAddRegions(action: any): any {
    try {
        const result = yield call(ReduceService.create, action.payload);
        yield put(doAddRegionsSucceed(result.data));
    }
    catch (error: any) {
        yield put(doAddRegionsFailed(error));
    }
}

function* handleUpdateRegions(action: any): any {
    try {
        const result = yield call(ReduceService.update, action.payload);
        yield put(doUpdateRegionsSucceed(result));
    }
    catch (error: any) {
        yield put(doUpdateRegionsFailed(error));
    }
}


function* handleDelRegions(action: any): any {
    try {
        const result = yield call(ReduceService.remove, action.payload);
        yield put(doDeleteRegionsSucceed(action.payload));
    }
    catch (error: any) {
        yield put(doDeleteRegionsFailed(error));
    }
}
function* handleRegions(): any {
    try {
        const result: any = yield call(ReduceService.getAll);
        yield put(doRegionsRequestSucceed(result.data));
    }
    catch (error: any) {
        yield put(doRegionsRequestFailed(error));
    }
}


// ===== country ================================ //
function* handleCountry(): any {
    try {
        const result: any = yield call(ReduceService.getAll2);
        yield put(doCountryRequestSucceed(result.data));
    }
    catch (error: any) {
        yield put(doCountryRequestFailed(error));
    }
}
function* handleAddCountry(action: any): any {
    try {
        const result = yield call(ReduceService.create2, action.payload);
        yield put(doAddCountrySucceed(result.data));
    }
    catch (error: any) {
        yield put(doAddCountryFailed(error));
    }
}

function* handleUpdateCountry(action: any): any {
    try {
        const result = yield call(ReduceService.update2, action.payload);
        yield put(doUpdateCountrySucceed(result));
    }
    catch (error: any) {
        yield put(doUpdateCountryFailed(error));
    }
}


function* handleDelCountry(action: any): any {
    try {
        const result = yield call(ReduceService.remove2, action.payload);
        yield put(doDeleteCountrySucceed(action.payload));
    }
    catch (error: any) {
        yield put(doDeleteCountryFailed(error));
    }
}

// ======== prov ====== //
function* handleProv(): any {
    try {
        const result: any = yield call(ReduceService.getAll3);
        yield put(doProvRequestSucceed(result.data));
    }
    catch (error: any) {
        yield put(doProvRequestFailed(error));
    }
}
function* handleAddProv(action: any): any {
    try {
        const result = yield call(ReduceService.create3, action.payload);
        yield put(doAddProvSucceed(result.data));
    }
    catch (error: any) {
        yield put(doAddProvFailed(error));
    }
}

function* handleUpdateProv(action: any): any {
    try {
        const result = yield call(ReduceService.update3, action.payload);
        yield put(doUpdateProvSucceed(result));
    }
    catch (error: any) {
        yield put(doUpdateProvFailed(error));
    }
}


function* handleDelProv(action: any): any {
    try {
        const result = yield call(ReduceService.remove3, action.payload);
        yield put(doDeleteProvSucceed(action.payload));
    }
    catch (error: any) {
        yield put(doDeleteProvFailed(error));
    }
}

// ADDR
function* handleAddr(): any {
    try {
        const result: any = yield call(ReduceService.getAll4);
        yield put(doAddrRequestSucceed(result.data));
    }
    catch (error: any) {
        yield put(doAddrRequestFailed(error));
    }
}
function* handleAddAddr(action: any): any {
    try {
        const result = yield call(ReduceService.create4, action.payload);
        yield put(doAddAddrSucceed(result.data));
    }
    catch (error: any) {
        yield put(doAddAddrFailed(error));
    }
}

function* handleUpdateAddr(action: any): any {
    try {
        const result = yield call(ReduceService.update4, action.payload);
        yield put(doUpdateAddrSucceed(result));
    }
    catch (error: any) {
        yield put(doUpdateAddrFailed(error));
    }
}


function* handleDelAddr(action: any): any {
    try {
        const result = yield call(ReduceService.remove4, action.payload);
        yield put(doDeleteAddrSucceed(action.payload));
    }
    catch (error: any) {
        yield put(doDeleteAddrFailed(error));
    }
}



export {
    handleRegions,
    handleAddRegions,
    handleDelRegions,
    handleUpdateRegions,

    handleCountry,
    handleAddCountry,
    handleDelCountry,
    handleUpdateCountry,

    handleProv,
    handleAddProv,
    handleDelProv,
    handleUpdateProv,

    handleAddr,
    handleAddAddr,
    handleDelAddr,
    handleUpdateAddr,





}