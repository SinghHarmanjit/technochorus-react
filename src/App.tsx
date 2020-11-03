import React from 'react';
import { Header } from './components/header/Header';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Profile from './components/profile/Profile';
import AgileBoard from './components/agile/AgileBoard';
import Architectures from './components/architectures/Architectures';

function App() {
    return (
        <React.Fragment>
            <div
                style={{
                    backgroundColor: 'rgb(249, 250, 252',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'top',
                    alignItems: 'center',
                    height: '850px',
                }}
            >
                <Router>
                    <Header />
                    <div
                        style={{
                            width: '80%',
                            height: '100%',
                            backgroundColor: 'white',
                            display: 'flex',
                            justifyContent: 'center',
                            justifyItems: 'center',
                        }}
                    >
                        <Switch>
                            <Route path="/profile" exact={true}>
                                <Profile />
                            </Route>
                            <Route path="/agile" exact={true}>
                                <AgileBoard />
                            </Route>
                            <Route path="/architecture" exact={true}>
                                <Architectures />
                            </Route>
                            <Route exact path="/"
                                render={() => <Redirect to="profile" /> }/>
                        </Switch>
                    </div>
                </Router>
            </div>
        </React.Fragment>
    );
}

export default App;
