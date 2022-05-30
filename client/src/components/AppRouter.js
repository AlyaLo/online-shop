import React, {useContext} from 'react';
import {Routes , Route} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context)
    let routers = publicRoutes.map(({path, Component}) => <Route exact  key={path} path={path} element={Component}/>)
    let anoverone = user.isAuth && authRoutes.map(({path, Component}) =>
    <Route exact  key={path} path={path} element={Component} />
)
    console.log(user)
    return (
        <Routes >
            {anoverone}
            {routers}
        </Routes >
    );
});

export default AppRouter;