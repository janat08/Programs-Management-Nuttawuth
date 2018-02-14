import Header from './Header';
import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import routes from "./routerConfig"

import Upload from "./comps/forms/Upload"


const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    exact={route.exact}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);


@withRouter
@observer
export default class App extends React.Component {
  // previousLocation = this.props.location

  // componentWillUpdate(nextProps) {
  //   const { location } = this.props
  //   // set previousLocation if props.location is not modal
  //   if (
  //     nextProps.history.action !== 'POP' &&
  //     (!location.state || !location.state.modal)
  //   ) {
  //     this.previousLocation = this.props.location
  //   }
  // }

  render() {
    //     const { location } = this.props
    // const isModal = !!(
    //   location.state &&
    //   location.state.modal &&
    //   this.previousLocation !== location // not initial render
    // )
    return (
      <div>
        <Header />

         {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}

    </div>
    );
  }
}

export {RouteWithSubRoutes}

