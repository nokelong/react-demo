
import React from 'react'
import IndexPage from '../views/index'
export default [   
    {
        path: '/',
        name: 'index-page',
        component: IndexPage,
        routes:[
            {    
                path: '/test',
                isDynamic: true,
                component: React.lazy(() => import('../views/test')),
            },{
                path: '/comment',
                isDynamic: true,
                component: React.lazy(() => import('../views/comment')),
            }
        ]
    }  
]