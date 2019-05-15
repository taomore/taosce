export default {
    path: '/index',
    component: () => import('@/views/index'),
    children: [
        {
            path: 'operation',
            component: () => import('@/components/operation'),
            children:[
                {
                    path: "jecms1",
                    component: () => import('@/components/operation/jecms1')
                },
                {
                    path: "jecms2",
                    component: () => import('@/components/operation/jecms2')
                },
                {
                    path:"operation",
                    redirect:"/jecms1"
                }
            ]
        },
        
        // {
        //     path: 'user',
        //     component: () => import('@/components/user')
        // },
        // {
        //     path: '/',
        //     // component: () => import('@/components/userindex'),
        //     redirect:"userindex"
        // }
    ]
}