import { h, resolveComponent } from "vue";
import type { RouteRecordRaw } from "vue-router";


const categoryRoutes: Array<RouteRecordRaw> = [
    {
        path:"category",
       name:"category",
        component:{
            render:() => h(resolveComponent("router-view")),
        },
        children:[
            {
                path:"",
                name:"c-index",
                component:()=> import("../views/Category/Cindex.vue")
            }
        ]
    }
]

export default categoryRoutes;