import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import store  from "../stores/store.js"
import {Table, Checkbox, Button, Popup} from 'semantic-ui-react';


@withRouter
@observer
@inject('store')
class UsersTable extends React.Component {
  render() {
    return (
    <div>
        <Table rowKey={record => record.index} columns={this.props.columns} dataSource={this.props.data} size="middle"/>
        {/* <a.Checkbox onChange={onChange} checked={this.state.checked}>Checkbox</a.Checkbox> */}
    </div>
    );
  }
}

const data = [{
  index: 0,
  key: this.index,
  name: 'Mike',
  roles: {admin: true},
}, 
{
  index: 1,
  key: this.index,
  name: 'Mike',
  roles: {admin: true, publisher: true},
}
];

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Roles',
  key: 'index',
  render: (record) => {
    var roles = record.roles
    if (Object.keys(roles).length != 1){
      return popOver(Object.keys(roles).length, roles)
    } else {
      return popOver(Object.keys(roles), roles)
    }
  }
}, 
];

function popOver(children, roles){
  return (<Popup content={(
    store.roles.map(x=>{
      return <Checkbox key={x} checked={roles[x]}> {x} </Checkbox>
    })
  )} title="Roles" trigger="click">
    <Button type="secondary">{children}</Button>
  </Popup>)
}
export {UsersTable, columns, data}