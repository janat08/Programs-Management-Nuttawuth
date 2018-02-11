import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Store } from "../stores/store.js"
import * as a from 'semantic-ui-react';


@withRouter
@observer
@inject('store')
export default class Applications extends React.Component {
  render() {
    
    return (
    <div>

    </div>
    );
  }
}


