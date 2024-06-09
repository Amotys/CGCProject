// 地址路由管理，不需要额外增加，会根据PageComponents增加而自动增加
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageComponents from './PageComponents';

const pagePathMatcher = {
    app_home: '/home',
    app_worldview: '/worldview',
    app_race: '/race',
    app_characters: '/characters',
    app_geography: '/geography',
    app_library: '/library',
    app_tools: '/tools',
}

const generateRoutes = () => {
    return Object.keys(PageComponents).map((key) => (
        <Route
            key={key}
            path={pagePathMatcher[key]}
            element={React.createElement(PageComponents[key])}
        />
    ));
};

const RoutesComponent = () => (
    <BrowserRouter>
        <Routes>
            {generateRoutes()}
            <Route path='*' element={<h2>404 Not Found</h2>} /> {/* 默认404页面 */}
        </Routes>
    </BrowserRouter>
);

export default RoutesComponent;