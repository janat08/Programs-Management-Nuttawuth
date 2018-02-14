import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Store } from "../stores/store.js"


@withRouter
@observer
@inject('store')
export default class Profile extends React.Component {
  render() {
    
    return (
    <div>

    </div>
    );
  }
}


