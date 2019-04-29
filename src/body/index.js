import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './home';

const getRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/rechargeable/(:type)" render={(props) => {
                console.log(props);
                return (React.createElement('div', {props: props}, `${props.match.params.type}`))
            }}/>
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