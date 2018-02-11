import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import {Menu, Dropdown} from 'semantic-ui-react';
import { Store } from "./stores/store.js"
const MenuItemGroup = Menu.ItemGroup

function loginButton (){
  return (
    // <Link to={{
    //   pathname: `/login`,
    //   state: {modal: true}
    // }}>
    <Link to="/login">
      Sign In
    </Link>
  )
}

function registerButton(){
  return (
    // <Link to={{
    //   pathname: `/register`,
    //   state: {modal: true}
    // }}>
    <Link to="/register">
      Sign Up
    </Link>
  )
}

const LoggedOutView = props => {
    if (!props.currentUser) {
      return (
        <Menu mode="horizontal">
  
          <Menu.Item>
            <Link to="/" >
              Home
            </Link>
          </Menu.Item>
  
          <Menu.Item >
            {loginButton()}
          </Menu.Item>
  
          <Menu.Item >
            {registerButton()}
          </Menu.Item>
  
        </Menu>
      );
    }
    return null;
  };

var friendOptions = [
  {
    text: 'Jenny Hess',
    value: 'Jenny Hess',
    image: { avatar: true, src: '/assets/images/avatar/small/jenny.jpg' },
  },
]

  var userType = {
    admin () {
      return (
        <Menu.Item active>
          <Dropdown trigger={<span>Test</span>} options={friendOptions} />

        {/* <Dropdown simple item text="Admin" key="0">
        <Dropdown.Menu>
          <Dropdown.Item key="setting:1">
            <Link to="/users" >
              Users
            </Link>
          </Dropdown.Item>
          <Dropdown.Item key="setting:2">
            <Link to="/forms" >
              Master Forms
            </Link>
          </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
        </Menu.Item>
      )
    },
    programManager () {
      return (
        <Dropdown simple item text="Manager" key="1">
  <Dropdown.Menu>
          <Dropdown.Item key="setting:3">
            <Link to="/applications" >
              Applications
            </Link>
          </Dropdown.Item>
          <Dropdown.Item key="setting:4">
            <Link to="/programs" >
              Programs
            </Link>
          </Dropdown.Item>
          </Dropdown.Menu>
          </Dropdown>
                )
    },
    participant () {
      return (
        <Dropdown simple item text="Participant" key="2">
  <Dropdown.Menu>
          <Dropdown.Item key="setting:5">
            <Link to="/submit" >
              Submit Application
            </Link>
          </Dropdown.Item>
          <Dropdown.Item key="setting:6">
            <Link to="/history" >
              Applicaiton History
            </Link>
          </Dropdown.Item>
          <Dropdown.Item key="setting:7">
            <Link to="/profile" >
              Profile
            </Link>
          </Dropdown.Item>
          </Dropdown.Menu>
          </Dropdown>
              )
    },
    editor () {
      return (
        <Dropdown simple item text="Editor" key="3">
  <Dropdown.Menu>
          <Dropdown.Item key="setting:8">
            <Link to="/edit/applications" >
              Edit Applications
            </Link>
          </Dropdown.Item>
          <Dropdown.Item key="setting:9">
            <Link to="/edit/programs" >
              Edit Programs 
            </Link> 
          </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )
    },
    publisher () {
      return (
        <Dropdown simple item text="Publisher" key="4">
        <Dropdown.Menu>
          <Dropdown.Item key="setting:11">
            <Link to="/publisher/access" >
              Publisher Programs Access
            </Link>
          </Dropdown.Item>
          <Dropdown.Item key="setting:12">
            <Link to="/publisher/resources" >
              Publisher Resources Others
            </Link>
          </Dropdown.Item>
          <Dropdown.Item key="setting:13">
            <Link to="/publisher/history" >
              History
            </Link>
          </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )
    }
  }
  
  const LoggedInView = props => {
    if (props.currentUser) {

      return (
        <Menu mode="horizontal">
  
          <Menu.Item>
            <Link to="/">
              Home
            </Link>
          </Menu.Item>
  
          <Menu.Item >
            {loginButton()}
          </Menu.Item>
  
          <Menu.Item >
            {registerButton()}
          </Menu.Item>

          {
            Object.keys(userType).map((x)=>{
              if (props.currentUser.roles[x] == true){
                return userType[x]()
              }
            })
          }



          {/* <li className="nav-item">
            <Link to="/editor" className="nav-link">
              <i className="ion-compose" />&nbsp;New Post
            </Link>
          </li>
  
          <li className="nav-item">
            <Link to="/settings" className="nav-link">
              <i className="ion-gear-a" />&nbsp;Settings
            </Link>
          </li>
  
          <li className="nav-item">
            <Link
              to={`/@${props.currentUser.username}`}
              className="nav-link"
            >
              <img src={props.currentUser.image} className="user-pic" alt="" />
              {props.currentUser.username}
            </Link>
          </li> */}
  
        </Menu>
      );
    }
  
    return null;
  };

@inject("store")
@withRouter
@observer
  class Header extends React.Component {
    render() {
      var u = this.props.store.currentUser
      console.log(this.props)
      return (
        <nav className="navbar navbar-light">
          <div className="container">
{/*   
            <Link to="/" className="navbar-brand">
              {this.props.commonStore.appName.toLowerCase()}
            </Link> */}
   
             <LoggedOutView currentUser={u} />
  
            <LoggedInView currentUser={u} />
          </div>
        </nav>
      );
    }
  }
  
  export default observer(Header);
  