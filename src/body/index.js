import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './home';

function getPath (i, pathArr) {
    pathArr.add(i.link)
    if (!i.subpro.length) {
        return;
    }
    i.subpro.forEach(i => {
        getPath(i, pathArr)
    })
}

function createRoute (products) {
    if (!products) return [];
    let pathArr = new Set()
    products.forEach(i => {
        return getPath(i, pathArr)
    })
    console.log(pathArr);
    let routes = []
    pathArr.size && pathArr.forEach((item, idx) => {
        routes.push(
            <Route key={idx} exact path={item} render={(props) => {
                return (React.createElement('div', {props: props}, `${props.match.path}`))
            }}/>
        );
    })
    return routes
}

const getRouter = (products) => {
    let routes = createRoute(products)
    routes.unshift(<Route key="home" exact path="/" component={Home}/>)
    routes.push(<Redirect key="redirect" to="/" />)
    return (
        <Switch>
            {routes}
        </Switch>
    );
}

export default getRouter;

/**
 * 
            <Boot.Container>
                <Boot.Row style={{marginTop: '25px'}}>
                    <Boot.Col>
                        
                    </Boot.Col>
                </Boot.Row>
            </Boot.Container>
 */