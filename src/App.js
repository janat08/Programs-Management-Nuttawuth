import Header from './Header';
import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import Home from './pages/Home';
import Login from './comps/Login';
import Register from './comps/Register';

import Users from './pages/Users.js';
import Submit from './pages/Submit';
import PublisherResources from './pages/PublisherResources';
import PublisherHistory from './pages/PublisherHistory';
import PublisherAccess from './pages/PublisherAccess';
import Programs from './pages/Programs';
import Profile from './pages/Profile';
import History from './pages/History';
import Forms from './pages/Forms';
import EditPrograms from './pages/EditPrograms';
import EditApplications from './pages/EditApplications';
import Applications from './pages/Applications';
// import Settings from './Settings';
// import Profile from './Profile';
// import Article from './Article';
// import Editor from './Editor';
// import PrivateRoute from './PrivateRoute';


@withRouter
@observer
export default class App extends React.Component {
  // previousLocation = this.props.location

  // componentWillUpdate(nextProps) {
  //   const { location } = this.props
  //   // set previousLocation if props.location is not modal
  //   if (
  //     nextProps.history.action !== 'POP' &&
  //     (!location.state || !location.state.modal)
  //   ) {
  //     this.previousLocation = this.props.location
  //   }
  // }

  render() {
    //     const { location } = this.props
    // const isModal = !!(
    //   location.state &&
    //   location.state.modal &&
    //   this.previousLocation !== location // not initial render
    // )
    return (
      <div>
      <Header />
        <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users}/>
        <Route path="/submit" component={Submit}/>
        <Route path="/publisher/resources" component={PublisherResources}/>
        <Route path="/publisher/history" component={PublisherHistory}/>
        <Route path="/publisher/access" component={PublisherAccess}/>
        <Route path="/programs" component={Programs}/>
        {/* should be dynamic */}
        <Route path="/profile" component={Profile}/> 
        <Route path="/history" component={History}/>
        <Route path="/forms" component={Forms}/>
        <Route path="/edit/programs" component={EditPrograms}/>
        <Route path="/edit/applications" component={EditApplications}/>
        <Route path="/applications" component={Applications}/>
        {/* <Route path="/editor/:slug?" component={Editor} />
        <Route path="/article/:id" component={Article} />
        <PrivateRoute path="/settings" component={Settings} />
        <Route path="/@:username" component={Profile} />
        <Route path="/@:username/favorites" component={Profile} /> */}
      </Switch>
      {/* {isModal ? <Route path='/img/:id' component={Modal} /> : null} */}

    </div>
    );
  }
}


