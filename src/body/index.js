import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './home';

function getPath (proArr, root, pathArr) {
    if (proArr.subpro === undefined || !proArr.subpro.length) {
        let path = root
        pathArr.push(path)
        return;
    }
    proArr.subpro.forEach((i, idx) => {
        getPath(i, root + '/' + i.name, pathArr)
    })
}

function createRoute (products) {
    console.log(products);
    let pathArr = []
    products.map(i => {
        let root = `/${i.name}`
        pathArr.push(root)
        return getPath(i, root, pathArr)
    })
    console.log(pathArr);
    let routes = pathArr.length && pathArr.map((item, idx) => {
        return (
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