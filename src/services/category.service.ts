import categoryRoutes from "@/router/category";
import {http} from "./http.service";
import type { AxiosResponse } from "./http.service";
import type { Axios } from "axios";
import { onUpdated } from "vue";

// type category ={
//     CategoryId: number;
//     CategoryName: string;
// };

export interface CategoryResponse {
    totalRecord: number;
    data:        Category[];
}

export interface Category {
    categoryId:   number;
    categoryName: string;
}


export async function findAllCategory(page =1 , pageSize = 3):Promise<AxiosResponse<CategoryResponse>> {
    return await http.get(`/Categories?page=${page}&pageSize=${pageSize}`);
    
}

//create
export async function creatCategory(
    category: Category
    
): Promise<AxiosResponse<any>>{
return await http.post<any>("/Categories",{
    categoryName:category.categoryName,
});}

export async function findOneCategory(id:number):Promise<AxiosResponse<any>>{
    return await http.get<any>(`/Categories/${id}`);
}

export async function UpdateCategory(id:number,category:Category){
    return await http.put<any>(`/Categories/${id}`,{
        category:category,
    });
}

export async function removeCategory(id:number):Promise<AxiosResponse<any>>{
    return await http.delete(`/Categories/${id}`);
      
    }
