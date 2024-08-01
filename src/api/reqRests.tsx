import axios from "axios";

//constante para crear la comunicacion con API
export const reqResApi = axios.create({
    baseURL:'https://reqres.in/api'
});