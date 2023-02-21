import axios from "../../../config/http-common";

const getAll = async () => {
    try {
        const result: any = await axios.get("/region");
        return result;
    } catch (error: any) {
        return error.message;
    }
}

const getId = async (id: number) => {
    try {
        const result: any = await axios.get(`/region/${id}`);
        return result;
    } catch (error: any) {
        return error.message;
    }
}

const create = async (data: any) => {
    try {
        const result: any = await axios.post("/region/save/", data);
        return result;
    } catch (error: any) {
        return error.message;
    }
}

const update = async (data: any) => {
    const id = parseInt(data.userId);
    try {
        const result: any = await axios.put(`/region/update/${id}`, data);
        return result;
    } catch (error: any) {
        return error.message;
    }
}

const remove = async (id: number) => {
    try {
        const result: any = await axios.delete(`/region/delete/${id}`);
        return result;
    } catch (error: any) {
        return error.message;
    }
}
// ============== country ======== //
const getAll2 = async () => {
    try {
        const result: any = await axios.get("/countries");
        return result;
    } catch (error: any) {
        return error.message;
    }
}

const getId2 = async (id: number) => {
    try {
        const result: any = await axios.get(`/countries/${id}`);
        return result;
    } catch (error: any) {
        return error.message;
    }
}

const create2 = async (data: any) => {
    try {
        const result: any = await axios.post("/countries/save/", data);
        return result;
    } catch (error: any) {
        return error.message;
    }
}

const update2 = async (data: any) => {
    const id = parseInt(data.userId);
    try {
        const result: any = await axios.put(`/countries/update/${id}`, data);
        return result;
    } catch (error: any) {
        return error.message;
    }
}

const remove2 = async (id: number) => {
    try {
        const result: any = await axios.delete(`/countries/delete/${id}`);
        return result;
    } catch (error: any) {
        return error.message;
    }
}

// ====== prov ====//
const getAll3 = async () => {
    try {
        const result: any = await axios.get("/provinces");
        return result;
    } catch (error: any) {
        return error.message;
    }
}

const getId3 = async (id: number) => {
    try {
        const result: any = await axios.get(`/provinces/${id}`);
        return result;
    } catch (error: any) {
        return error.message;
    }
}

const create3 = async (data: any) => {
    try {
        const result: any = await axios.post("/provinces/save/", data);
        return result;
    } catch (error: any) {
        return error.message;
    }
}

const update3 = async (data: any) => {
    const id = parseInt(data.userId);
    try {
        const result: any = await axios.put(`/provinces/update/${id}`, data);
        return result;
    } catch (error: any) {
        return error.message;
    }
}

const remove3 = async (id: number) => {
    try {
        const result: any = await axios.delete(`/provinces/delete/${id}`);
        return result;
    } catch (error: any) {
        return error.message;
    }
}


// addr
const getAll4 = async () => {
    try {
        const result: any = await axios.get("/address");
        return result;
    } catch (error: any) {
        return error.message;
    }
}

const getId4 = async (id: number) => {
    try {
        const result: any = await axios.get(`/address/${id}`);
        return result;
    } catch (error: any) {
        return error.message;
    }
}

const create4 = async (data: any) => {
    try {
        const result: any = await axios.post("/address/save/", data);
        return result;
    } catch (error: any) {
        return error.message;
    }
}

const update4 = async (data: any) => {
    const id = parseInt(data.userId);
    try {
        const result: any = await axios.put(`/address/update/${id}`, data);
        return result;
    } catch (error: any) {
        return error.message;
    }
}

const remove4 = async (id: number) => {
    try {
        const result: any = await axios.delete(`/address/delete/${id}`);
        return result;
    } catch (error: any) {
        return error.message;
    }
}


// const login = async (data: any) => {
//     try {
//         const result: any = await axios.post("auth/login", data);
//         return result;
//     } catch (error: any) {
//         return error.message;
//     }
// }

// const register = async (data: any) => {
//     try {
//         const result: any = await axios.post("auth/register", data);
//         return result;
//     } catch (error: any) {
//         return error.message;
//     }
// }
// const updatePhoto = async (data:any) => {
//     const id = parseInt(data.usproId);
//     try {
//         const result:any = await axios.put(`/userprofiles/userPhotoProfiles/${id}`, data);
//         return result;
//     } catch (error:any) {
//         return error.message;
//     }
// }
const ReduceService: any = {
    getAll,
    getId,
    create,
    update,
    remove,

    // country
    getAll2,
    getId2,
    create2,
    update2,
    remove2,

    // === prov ===//
    getAll3,
    getId3,
    create3,
    update3,
    remove3,

    // ==== addr
    getAll4,
    getId4,
    create4,
    update4,
    remove4,

    // updatePhoto,
    // login,
    // register
}

export default ReduceService;