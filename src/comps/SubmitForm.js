import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import {Store} from "../stores/store.js"
import {Radio, Form, Input, Icon, Button, Card, TextArea} from 'semantic-ui-react';

@withRouter
@observer
@inject('store')
export default class SubmitForm extends React.Component {
  render() {
    const formItemLayout = {
      labelCol: {
        span: 7
      },
      wrapperCol: {
        span: 17
      }
    };
    return (
      <div>
        <h2>General Forms</h2>
        <Form>
          <Form.Field  label="Concept Title">
            <Input/>
          </Form.Field>
          <Form.Field  label="Website">
            <Input/>
          </Form.Field>
          <Form.Field  label="What would you like to present">
            <TextArea />
          </Form.Field>
          <Form.Field  label="Tell us about yourself (or your organization)">
              <TextArea />
          </Form.Field>
          <Form.Field  label="Do you have a location/venue to present your work">
          <Radio.Group>
              <Radio value={1}>No</Radio>
              <Radio value={2}>Yes</Radio>
            </Radio.Group>
          </Form.Field>
          <Form.Field  label="Name of the location">
            <Input/>
          </Form.Field>
          <Form.Field  label="Address of the location">
            <TextArea />
          </Form.Field>
        </Form>

        <Form>
          <Form.Field  label="Application Type">
          <Radio.Group>
              <Radio value={1}>Exhibition</Radio>
              <Radio value={2}>Event</Radio>
            </Radio.Group>
          </Form.Field>
        </Form>

        <Form layout="horizontal">
          <Form.Field  label="Select event type for specifics">
            <Radio.Group>
              <Radio value={1}>Talk</Radio>
              <Radio value={2}>Workshop</Radio>
              <Radio value={3}>Activity</Radio>
            </Radio.Group>
          </Form.Field>
        </Form>

        {/* ACTIVITY */}
        <Form layout="horizontal">
          <Form.Field  label="This activity is:">
            <Radio.Group>
              <Radio value={1}>Public</Radio>
              <Radio value={2}>Private(ticket sale)</Radio>
              <Radio value={3}>Private(on invite only)</Radio>
            </Radio.Group>
          </Form.Field>
          <Form.Field  label="What is the name (or names) of the speaker(s)"
          extra="Please share if there are already names known">
            <TextArea />
          </Form.Field>
          <Form.Field  label="Location">
          <Radio.Group>
              <Radio value={1}>Awardshow</Radio>
              <Radio value={2}>Challenge</Radio>
              <Radio value={2}>Hackathon/Workshop</Radio>
              <Radio value={2}>Kick-off</Radio>
              <Radio value={2}>Party</Radio>
              <Radio value={2}>Pitch</Radio>
              <Radio value={2}>Presentation</Radio>
              <Radio value={2}>Seminar</Radio>
              <Radio value={2}>Talkshow</Radio>
              <Radio value={2}>Tour</Radio>
            </Radio.Group>
          </Form.Field>
        </Form>
        
      </div>
    );
  }
}
