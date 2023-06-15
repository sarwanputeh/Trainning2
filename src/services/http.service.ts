import axios from 'axios'
import  type {AxiosResponse } from "axios";

const http = axios.create({
 baseURL:import.meta.env.VITE_BACKEND_URL,
});


export  {http,  type AxiosResponse};