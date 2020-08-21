import React, { Fragment, Suspense, lazy } from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import * as serviceWorker from "./serviceWorker";
import Pace from "./shared/components/Pace";

const UserLoggedInRoutes = lazy(() => import("./user_logged_in/components/Main"));

const AdminLoggedInRoutes = lazy(() => import("./admin_logged_in/components/Main"));

const LandingRoutes = lazy(() => import("./landing/components/Main"));

function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <Pace color={theme.palette.primary.light} />
        <Suspense fallback={<Fragment />}>
          <Switch>
            <Route path="/auth">
              <AdminLoggedInRoutes />
            </Route>
            <Route path="/users">
              <UserLoggedInRoutes />
            </Route>
            <Route>
              <LandingRoutes />
            </Route>
          </Switch>
        </Suspense>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

serviceWorker.register();

export default App;
