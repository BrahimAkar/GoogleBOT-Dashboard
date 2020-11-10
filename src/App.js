import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./scss/style.scss";


import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

// Pages
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Register = React.lazy(() => import("./views/pages/register/Register"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route
                exact
                path="/login"
                name="Login Page"
                render={(props) => <Login {...props} />}
              />
              <Route
                exact
                path="/register"
                name="Register Page"
                render={(props) => <Register {...props} />}
              />
              <Route
                exact
                path="/404"
                name="Page 404"
                render={(props) => <Page404 {...props} />}
              />
              <Route
                exact
                path="/500"
                name="Page 500"
                render={(props) => <Page500 {...props} />}
              />
              {/* <Route path="/" name="Home" render={(props) => <TheLayout {...props} />} */}
              {/* /> */}
              {/* /> */}
              {/* <Route
                path="/"
                name="Home"
                component={TheLayout}
              /> */}
              {/* <PrivateRoute path="/" name="Home" render={<TheLayout />} /> */}
              <PrivateRoute exact path="/dashboard" component={TheLayout} />
              <PrivateRoute exact path="/" component={TheLayout} />
              <PrivateRoute
                exact
                path="/scrapwithServerip"
                component={TheLayout}
              />
              <PrivateRoute
                exact
                path="/scrapwithcustomproxies"
                component={TheLayout}
              />
              <PrivateRoute
                exact
                path="/scrapwithpremium"
                component={TheLayout}
              />
              <PrivateRoute
                exact
                path="/live"
                component={TheLayout}
              />
              <PrivateRoute
                exact
                path="/scrapwithfreeproxies"
                component={TheLayout}
              />
            </Switch>
          </React.Suspense>
        </HashRouter>
      </AuthProvider>
    );
  }
}

export default App;
