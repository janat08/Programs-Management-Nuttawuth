import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Store } from "../stores/store.js"
import {Form, Input, Button, Checkbox} from 'semantic-ui-react';


@withRouter
@observer
@inject('store')
export default class Register extends React.Component {
  render() {
    
    return (
    <div>
      <Form>
        <Form.Item>
            <Input placeholder="Username" />
        </Form.Item>
        <Form.Item label="roles">

        {this.props.store.roles.map(x=>{
              return <Checkbox checked={false}> {x} </Checkbox>
            })
            }
            </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
          >
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
    );
  }
}


