import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './home';
import Product from './product';
const getRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/link" render={(props) => {
                return <Product {...props}/>
            }} />
            <Route exact path="/rechargeable" render={(props) => {
                return (React.createElement('div', {props: props}, `${props.match.path}`))
            }}/>
            <Route exact path="/rechargeable/:type" render={(props) => {
                return (React.createElement('div', {props: props}, `${props.match.params.type}`))
            }}/>
            <Route exact path="/headlamps" render={(props) => {
                return (React.createElement('div', {props: props}, `${props.match.path}`))
            }}/>
            <Route exact path="/headlamps/:type" render={(props) => {
                return (React.createElement('div', {props: props}, `${props.match.params.type}`))
            }}/>
            <Redirect to="/"/>
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