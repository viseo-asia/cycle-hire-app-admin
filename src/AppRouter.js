import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './theme';
import UserDashboardContainer from "./modules/UserDashboard";
import HeaderNavigation from "./components/higher-order/HeaderNavigation";
import LoginContainer from "./modules/Login";
// import Error404Container from "./modules/Error404";
import DashboardContainer from "./modules/Dashboard";
import AuthCallbackContainer from "./modules/AuthCallbackContainer";


class AppRouter extends Component {

  render() {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <Router>
                <Switch>
                    <Route exact path="/" component={LoginContainer} />
                    <HeaderNavigation>
                        <Route exact path="/user/dashboard" component={UserDashboardContainer} />
                        <Route exact path="/dashboard" component={DashboardContainer} />
                        <Route exact path="/auth/callback" component={AuthCallbackContainer} />
                        {/*<Route component={Error404Container} />*/}
                    </HeaderNavigation>
                </Switch>
            </Router>
        </MuiThemeProvider>
    );
  }
}
export default AppRouter;