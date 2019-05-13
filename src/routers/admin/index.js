export default {
    path: '/',
    component: () => import('@/views/admin/index'),
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