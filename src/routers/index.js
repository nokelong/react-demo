
import React from 'react'
export default [
    {
    
        path: '/test',
        isDynamic: true,
        // component: Login,
        component: React.lazy(() => import('../views/test')),
    },{
        path: '/comment',
        isDynamic: true,
        // component: Login,
        component: React.lazy(() => import('../views/comment')),
    }
]