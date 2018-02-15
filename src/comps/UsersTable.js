import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { inject, observer, autorun } from 'mobx-react';
import store  from "../stores/store.js"


@withRouter
@observer
@inject('store')
class UsersTable extends React.Component {
  render() {

    return (
    <div>
        <table className="uk-table uk-table-responsive uk-table-divider">
    <thead>
        <tr>
{this.props.columns.map(x=>{
  return <th key={x.title}> {x.title}</th>
})}
        </tr>
    </thead>
    <tbody>
      {this.props.data.map((y,z)=>{
        return (
        <tr key={y.index}>
          {this.props.columns.map((x,i)=>{
          var item = this.props.data[i]

          return <td key={x.key.toString()}> {x.dataIndex?item[x.dataIndex]:<x.render record={y}/>}</td>
})}
        </tr>)
      })}
        
    </tbody>
</table>
        {/* <a.Checkbox onChange={onChange} checked={this.state.checked}>Checkbox</a.Checkbox> */}
    </div>
    );
  }
}


const userColumns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, 
{
  title: 'Roles',
  key: 'index',
  render: observer(({record}) => {
    var roles = record.roles
    if (Object.keys(roles).length != 1){
      return popOver(Object.keys(roles).length, roles, record)
    } else {
      return popOver(Object.keys(roles), roles, record)
    }
  })
}, 
];


function popOver(children, roles, record){
  return (
  <div className="uk-inline">

    <button className="uk-button uk-button-default" type="button">{children}</button>
    <div data-uk-drop="mode: click; offset: 0" style={{width: 570}}>
    <div className="uk-card uk-card-body uk-card-hover uk-card-small uk-card-default ">
    <div className="uk-grid-small uk-child-width-auto" data-uk-grid>
    {(
    store.roles.map(x=>{
      return <label  key={x} ><input onChange={e=>store.users[record.index].roles[x] = e.target.checked} className="uk-checkbox" type="checkbox" checked={roles[x]}/> {x} </label>
    })
  )}
  </div>
  </div>
  </div>
    </div>
)
}
export {UsersTable, userColumns}