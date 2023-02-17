import {Route, Redirect} from "react-router-dom";
import { useMemo } from "react";

export default function ProtectedRoute({component: Component, ...props}) {

  return (
    <Route>
      { () => props.loggedIn ? <Component {...props} /> : <Redirect to='./' />}
    </Route>
  )
}
