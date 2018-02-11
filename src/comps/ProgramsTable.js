import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import store  from "../stores/store.js"
import {Table, Checkbox, Button, Divider, Icon} from 'semantic-ui-react';
import moment from "moment"
// const { MonthPicker, RangePicker, WeekPicker } = DatePicker;


@withRouter
@observer
@inject('store')
class ProgramsTable extends React.Component {
  render() {
    return (
    <div>
        <Table rowKey={record => record.index} columns={this.props.columns} dataSource={this.props.data} />
        {/* <a.Checkbox onChange={onChange} checked={this.state.checked}>Checkbox</a.Checkbox> */}
    </div>
    );
  }
}

const data = [{
  index: 0,
  key: this.index,
  name: 'Web Design',
  description: "Deserunt qui irure pariatur dolore duis excepteur ut. Id cupidatat qui fugiat eiusmod adipisicing deserunt ullamco culpa. Velit qui ut veniam cupidatat sunt. Mollit tempor enim duis consequat deserunt eiusmod ad labore laboris. Id commodo elit labore excepteur aliquip ad ut incididunt. Labore eu culpa ad id nostrud magna dolore quis eiusmod laboris Lorem mollit sit laboris. Sit nostrud excepteur consequat dolor adipisicing fugiat tempor laborum."
}, 
{
  index: 1,
  key: this.index,
  name: 'Furniture Design',
  description: "Amet irure Lorem veniam enim cillum cillum commodo nisi adipisicing laborum ipsum est. Commodo laboris irure in tempor non in eu. Fugiat elit anim ullamco veniam et magna commodo aliquip nostrud occaecat minim commodo. Tempor aliqua incididunt ex laboris voluptate aute dolor et sint laboris voluptate elit sunt."
}
];
var columns

// const columns = [{
//   title: 'Name',
//   dataIndex: 'name',
//   key: 'name',
// }, 
// {
//     title: "Days",
//     key: "days",
//     render: (record=>{
//       return <DatePicker.RangePicker value={[moment(), moment()]} />
//     })
// }, 
// {
//   title: "Start",
//   key: "start",
//   render: (record=>{
//     return <TimePicker defaultOpenValue={moment('12:00:00', 'HH:mm:ss')} />
//   })
// },
// {
//   title: "End",
//   key: "end",
//   render: (record=>{
//     return <TimePicker defaultOpenValue={moment('18:00:00', 'HH:mm:ss')} />
//   })
// }, 
// , {
//   title: 'Action',
//   key: 'action',
//   render: (text, record) => (
//     <span>
//       <a href="#">View</a>
//       <Divider type="vertical" />
//       <a href="#">Reject</a>
//       <Divider type="vertical" />
//       <a href="#" className="ant-dropdown-link">
//         More actions <Icon type="down" />
//       </a>
//     </span>
//   ),
// }
// ];

// function popOver(children, roles){
//   return (<Popover content={(
//     store.roles.map(x=>{
//       return <Checkbox key={x} checked={roles[x]}> {x} </Checkbox>
//     })
//   )} title="Roles" trigger="click">
//     <Button type="secondary">{children}</Button>
//   </Popover>)
// }
export {ProgramsTable, columns, data}