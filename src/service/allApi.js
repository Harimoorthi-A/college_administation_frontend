const { BASE_URL } = require("./baseUrl");
const { commonApi } = require("./commonApi");

// register
export const registerApi=async(body)=>{
    // console.log(body);
    return await commonApi('POST',`${BASE_URL}/users/register`,body,"")
}

// login
export const loginApi=async(body)=>{
    return await commonApi('POST',`${BASE_URL}/users/login`,body,"")
}