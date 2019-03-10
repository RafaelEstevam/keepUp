import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/bootstrap.min.css';
import Home from './views/home';
import Lists from './views/lists';
// import Home from './views/home';
// import Login from './views/login';
// import Logout from './views/logout';
// import Register from './views/register';
// import Profile from './views/profile';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

// function getUserAuth (next, replace){
//     if(localStorage.getItem('auth-token-id') != null){
//         return true;
//     }else{
//         localStorage.setItem('msg-auth', 'Você precisa logar para acessar a timeline')
//     }
// }

ReactDOM.render(
    (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/list" exact={true} component={Lists} />
                {/* <Route path="/register" exact={true} component={Register} />
                <Route path="/logout" exact={true} component={Logout}/>
                <Route path="/profile/:user_name" exact={true} component={Profile}/>
                <Route path="/home" exact={true} /> */}
                {/* <Route path="/home" exact={true} render={() =>(
                    getUserAuth() ? (
                        <Home/>
                    ) : (
                        <Redirect to="/" msg={'teste'}/>
                    )
                )}/> */}
            </Switch>
        </BrowserRouter>
    ), 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
