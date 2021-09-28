import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Homepage, Aboutpage, Contactpage, AppLandingPage } from './App';

ReactDOM.render(
    <Router>
       <Switch>
		      <Route exact path="/" component={Homepage}/>
              <Route exact path="/app" component={AppLandingPage}/>
				<Route exact path="/app/about" component={Aboutpage }/>
                <Route exact path="/app/contact" component={Contactpage }/>

	    </Switch>
    </Router>,
    document.getElementById('root')
);