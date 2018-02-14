import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import {UsersTable, data, columns} from "./UsersTable";


@withRouter
@observer
@inject('store')
export default class Login extends React.Component {
  render() {
    var store = this.props.store
    columns.push({
        title: "Select",
        key: "select",
        render: (td)=>{
          return (
            <button class="uk-button uk-button-default">Log In </button>
          )
        }
      })

    return (
    <div>
        <UsersTable data={data} columns={columns}></UsersTable>
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
