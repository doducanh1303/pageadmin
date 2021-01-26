import HomePage from '../page/HomePage';
import Project from '../page/Project';
import List from '../component/List'
import React from 'react';

const routes = [
    {
        path: '/',
        exact: true,
        component: () => HomePage()
    },
    {
        path: '/project',
        exact: true,
        component: () => Project()
    },
    {
        path: '/baiviet/danhsach',
        exact: true,
        component: () => List()
    }
]
export default routes;

