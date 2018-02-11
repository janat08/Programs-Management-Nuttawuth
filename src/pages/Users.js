import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Store } from "../stores/store.js"
import * as a from 'semantic-ui-react';

import {data, columns, UsersTable} from "../comps/UsersTable"


@withRouter
@observer
@inject('store')
export default class Users extends React.Component {
  render() {
    
    return (
    <div>
      <h4>Users</h4>
      <UsersTable data={data} columns={columns}> </UsersTable>
    </div>
    );
  }
}