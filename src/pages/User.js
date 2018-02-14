import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Store } from "../stores/store.js"
import {RouteWithSubRoutes} from "../App.js"

@withRouter
@observer
@inject('store')
export default class App extends React.Component {
  render() {
    
    return (
    <div>
      {this.props.routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}

    </div>
    );
  }
}
