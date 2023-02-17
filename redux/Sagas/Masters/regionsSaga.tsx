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
    doCountryRequestFailed
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





export {
    handleRegions,
    handleAddRegions,
    handleDelRegions,
    handleUpdateRegions,
    handleCountry,
    handleAddCountry,
    handleDelCountry,
    handleUpdateCountry
}