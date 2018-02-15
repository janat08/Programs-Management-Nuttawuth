import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import {UsersTable, userColumns} from "./UsersTable";


@withRouter
@observer
@inject('store')
export default class Login extends React.Component {
  render() {
    var store = this.props.store
    userColumns.push({
        title: "Select",
        key: "select",
        render: (td, ind)=>{
          return (
            <button onClick={()=>this.props.store.login(ind)} class="uk-button uk-button-default">Log In </button>
          )
        }
      })

    return (
    <div>
        <UsersTable data={this.props.store.users} columns={userColumns}></UsersTable>
        {/* {
            store.users.map(function (x, i){
                return (
                    <div onClick={store.login(i)}>
                        {x.name}
                        {Object.keys(x.roles).map(x=><a>{x}</a>)}
                    </div>
                )
            })
        } */}
    </div>
    );
  }
}
