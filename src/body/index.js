import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './home';
import Product from './product';



const getRouter = (products) => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            {
                products.length && products.map((item, idx) => {
                    console.log(`/${item.name}(/:type)`);
                    return (
                        <Route key={idx} exact path={`/${item.name}(/:type)`} render={(props) => {
                            return (React.createElement('div', {props: props}, `${props.match.path}`))
                        }}/>
                    );
                })
            }
            {/* <Route exact path="/link" render={(props) => {
                console.log(props);
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
            }}/> */}
            <Redirect to="/" />
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