import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Store } from "../stores/store.js"


@withRouter
@observer
@inject('store')
export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "", 
      roles: {admin: false, publisher: false, programManager: false, participant: false, editor: false}
    };

    this.handleName = this.handleName.bind(this);
    this.handleRole = this.handleRole.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(event) {
    this.setState({name: event.target.value});
  }
  handleRole(event) {
var target = event.target
    this.setState({roles: { ...this.state.roles, [target.value]: target.checked}});
  }
  handleSubmit(ev){
    ev.preventDefault();
    this.props.store.register(this.state)
    console.log(this.props.store.users)
  }
  render() {
    console.log(this.state)
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
    <fieldset class="uk-fieldset">

        <legend class="uk-legend">Register</legend>

        <div class="uk-margin">
            <input onChange={this.handleName} class="uk-input" name="name" type="text" placeholder="Name" />
        </div>

        <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
        
        {this.props.store.roles.map(x=>{
          return <label key={x}><input onChange={this.handleRole}  name="role" class="uk-checkbox" value={x} checked={this.state.roles[x]} type="checkbox"/> {x}</label>
            })
            }
            </div>
    </fieldset>
    <p data-uk-margin>
                  <button type="submit" className="uk-button uk-button-primary">Sign Up</button>
                </p>

</form>
    </div>
    );
  }
}


