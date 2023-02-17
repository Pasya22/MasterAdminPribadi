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
    // updatePhoto,
    // login,
    // register
}

export default ReduceService;