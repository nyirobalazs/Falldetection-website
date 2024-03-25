import React from "react";
import Index from "pages/index";
import Index1 from "pages/index1";
import Index2 from "pages/index2";
import Page404 from "pages/page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export default () => (
    <Router>
        <GlobalStyles />
        <Switch>
        			<Route exact path='/' component={Index}/>
			<Route exact path='/index' component={Index}/>
			<Route exact path='/index1' component={Index1}/>
			<Route exact path='/index2' component={Index2}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);
