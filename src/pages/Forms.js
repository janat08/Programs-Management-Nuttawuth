import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import {Store} from "../stores/store.js"
import SubmitForm from "../comps/SubmitForm"

@withRouter
@observer
@inject('store')
export default class Forms extends React.Component {
  render() {

    return (
      <div>
        <h2>General Forms</h2>
        <SubmitForm />
      </div>
    );
  }
}
