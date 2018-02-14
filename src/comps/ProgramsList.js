// import React from 'react';
// import { withRouter, Link } from 'react-router-dom';
// import { inject, observer } from 'mobx-react';
// import store  from "../stores/store.js"
// import moment from "moment"

// const IconText = ({ type, text }) => (
//     <span>
//       <Icon type={type} style={{ marginRight: 8 }} />
//       {text}
//     </span>
//   );

// @withRouter
// @observer
// @inject('store')
// class ProgramsList extends React.Component {
//   render() {
//     return (
//     <div>
//         <List
//     itemLayout="vertical"
//     size="large"
//     dataSource={this.props.data}
//     renderItem={item => (
//       <List.Item
//         key={item.index}
//         actions={[<IconText text={item.status} />,<IconText text="Open Editor" />,]}
//         extra={<img width={272} alt="logo" src={item.scene} />}
//       >
//         <List.Item.Meta
//           avatar={<Avatar src={item.avatar} />}
//           title={<Link to={"/"+item.name+item.index}>{item.name}</Link>}
//           description={item.subtitle}
//         />
//         {item.description}
//       </List.Item>
//     )}
//   />
//         {/* <a.Checkbox onChange={onChange} checked={this.state.checked}>Checkbox</a.Checkbox> */}
//     </div>
//     );
//   }
// }

// const data = [{
//   index: 0,
//   key: this.index,
//   name: 'Web Design',
//   subtitle: "lasts 5 days, from 6 to 10",
//   avatar: "avatar.png",
//   scene: "scene.png",
//   status: "Published",
//   description: "Amet irure Lorem veniam enim cillum cillum commodo nisi adipisicing laborum ipsum est. Commodo laboris irure in tempor non in eu. Fugiat elit anim ullamco veniam et magna commodo aliquip nostrud occaecat minim commodo. Tempor aliqua incididunt ex laboris voluptate aute dolor et sint laboris voluptate elit sunt."
// }, 
// {
//   index: 1,
//   key: this.index,
//   name: 'Furniture Design',
//   subtitle: "lasts 5 days, from 6 to 10",
//   avatar: "avatar.png",
//   scene: "scene.png",
//   status: "accepted",
//   description: "Amet irure Lorem veniam enim cillum cillum commodo nisi adipisicing laborum ipsum est. Commodo laboris irure in tempor non in eu. Fugiat elit anim ullamco veniam et magna commodo aliquip nostrud occaecat minim commodo. Tempor aliqua incididunt ex laboris voluptate aute dolor et sint laboris voluptate elit sunt."
// }
// ];


// export {ProgramsList, data}