import React from 'react';
import {Link, withRouter, NavLink, Route} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import {Store} from "./stores/store.js"
import routes from "./routerConfig"
import UIkit from 'uikit';

const OldSchoolMenuLink = ({label, to, activeOnlyWhenExact, embed}) => (<Route
  path={to}
  exact={activeOnlyWhenExact}
  children={({match}) => {
  if (embed && match) {
    return null
  }
  return (
    <li className={match
      ? "uk-active"
      : ""}>
        <Link to={to}>{label}</Link>
    </li>
  )
}}/>);

//try button with dropdown style: inlining; https://getuikit.com/docs/button
function List(x, i, embed, location) {
  if (x.routes) {
    var child = x.routes.filter(x=>x.path==location.pathname)
    return (
      <li key={x.path} className={child.length?"uk-active":""}>
        <a href="#">
        <div>
          {x.name}
          {!!child.length && <div className="uk-navbar-subtitle">{child[0].name}</div>}
        </div>
        </a>
        <div data-uk-dropdown="offset: 0" className="uk-navbar-dropdown">
          <ul className="uk-nav uk-navbar-dropdown-nav">
            {x
              .routes
              .map((x, i) => {
                {
                  return List(x, i, true)
                }
              })}
          </ul>
        </div>
      </li>
    )
  }
  return (<OldSchoolMenuLink
    key={x.path}
    label={x.name}
    to={x.path}
    activeOnlyWhenExact={x.exact}
    embed={embed}/>)
}

@inject("store")
@withRouter
@observer
class Header extends React.Component {
  render() {
    var u = this.props.store.currentUser
    return (
      <nav className="uk-navbar-container" data-uk-navbar="true">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            {routes.map((x, i) => {
              return (
                List(x,i,false, this.props.location)
              )}
              )}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
/*{
<Menu pointing secondary mode="horizontal">

  <Menu.Item active>
    <NavLink to="/">
      Home
    </NavLink>
  </Menu.Item>

  <Menu.Item >
    {loginButton()}
  </Menu.Item>

  <Menu.Item>
    {registerButton()}
  </Menu.Item>

             <LoggedOutView {...this.props} currentUser={u} />

            {u && Object.keys(userType).map((x)=>{
              if (u.roles[x] == true){
                return userType[x](...this.props)
              }
            })}
            </Menu> }*/

// function loginButton (){   return (     // <Link to={{     //   pathname:
// `/login`,     //   state: {modal: true}     // }}>     <NavLink to="/login">
//     Sign In     </NavLink>   ) } function registerButton(){   return ( //
// <Link to={{     //   pathname: `/register`,     //   state: {modal: true}
// // }}>     <NavLink to="/register">       Sign Up     </NavLink>   ) } const
// LoggedOutView = props => {     if (!props.currentUser) {       return (
//   <Menu mode="horizontal">           <Menu.Item>             <Link to="/" >
//             Home             </Link>           </Menu.Item>    <Menu.Item >
//           {loginButton()}           </Menu.Item> <Menu.Item >
// {registerButton()}           </Menu.Item> </Menu>       );     }     return
// null;   }; var admin = [   {     text: <NavLink to="/users">Users</NavLink>,
//    value: '/users',   },   {     text: 'Forms',     value: '/forms',   }, ],
// programManager=[   {     text: 'Users',     value: '/users',   },   {
// text: 'Forms',     value: '/forms',   }, ] //todo turn to className var
// activated = {    "background-color": "transparent",  "-webkit-box-shadow":
// "none",   "box-shadow": "none",   "border-color": "#1b1c1d",   "font-weight":
// "700!important",   color:" rgba(0,0,0,.95)", } //was going to remove the
// selected item to display inline, it looks like it might be best to just use
// vanilla semantic ui instead //otherwise without removing the item styles
// don't apply anyway and then the selected item in dropdown is still
// highlighted //      var item =
// admin.filter(x=>x.value==prop.location.pathname)[0] //<Dropdown item
// style={item?activated:null} active simple
// trigger={<span>{item?item.text:"Admin"}</span>} options={admin} />   var
// userType = {     admin (prop) {       return (         // <div>         //
// {/* <Menu.Item active active={item?true:false}>         // </Menu.Item> */}
//     // </div>         <Dropdown simple item text="Admin" key="0">
// <Dropdown.Menu>           <Dropdown.Item key="setting:1">          <Link
// to="/users" >               Users             </Link>  </Dropdown.Item>
//     <Dropdown.Item key="setting:2">             <Link to="/forms" >
//     Master Forms             </Link> </Dropdown.Item>
// </Dropdown.Menu>         </Dropdown>       ) },     programManager () {
// return (         <Dropdown simple item text="Manager" key="1">
// <Dropdown.Menu>           <Dropdown.Item key="setting:3">             <Link
// to="/applications" > Applications             </Link>
// </Dropdown.Item> <Dropdown.Item key="setting:4">             <Link
// to="/programs" >    Programs             </Link>           </Dropdown.Item>
// </Dropdown.Menu>           </Dropdown>                 )     }, participant
// () {       return (         <Dropdown simple item text="Participant" key="2">
//   <Dropdown.Menu>           <Dropdown.Item key="setting:5">             <Link
// to="/submit" >               Submit Application             </Link>
// </Dropdown.Item> <Dropdown.Item key="setting:6">             <Link
// to="/history" >   Applicaiton History             </Link>
// </Dropdown.Item>  <Dropdown.Item key="setting:7">             <Link
// to="/profile" >    Profile             </Link>           </Dropdown.Item>
// </Dropdown.Menu>           </Dropdown>               )     },     editor () {
//       return (         <Dropdown simple item text="Editor" key="3">
// <Dropdown.Menu>           <Dropdown.Item key="setting:8">             <Link
// to="/edit/applications" >               Edit Applications             </Link>
//           </Dropdown.Item>           <Dropdown.Item key="setting:9">    <Link
// to="/edit/programs" >               Edit Programs </Link>
// </Dropdown.Item>           </Dropdown.Menu> </Dropdown>       )     },
// publisher () {       return ( <Dropdown simple item text="Publisher" key="4">
//         <Dropdown.Menu>     <Dropdown.Item key="setting:11">
// <Link to="/publisher/access" >               Publisher Programs Access
//      </Link> </Dropdown.Item>           <Dropdown.Item key="setting:12">
//        <Link to="/publisher/resources" >               Publisher Resources
// Others    </Link>           </Dropdown.Item>           <Dropdown.Item
// key="setting:13">             <Link to="/publisher/history" > History
//     </Link>           </Dropdown.Item> </Dropdown.Menu>         </Dropdown>
//     )     }   }   const LoggedInView = props => {     if (props.currentUser)
// {       return (         <Menu pointing secondary mode="horizontal">
//  <Menu.Item active> <NavLink to="/">               Home
// </NavLink> </Menu.Item>           <Menu.Item >             {loginButton()}
// </Menu.Item>           <Menu.Item>             {registerButton()}
// </Menu.Item>           {             Object.keys(userType).map((x)=>{
// if (props.currentUser.roles[x] == true){                 return
// userType[x](props)               }             })           }         </Menu>
//       );     }     return null;   };