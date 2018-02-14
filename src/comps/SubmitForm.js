import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import {Store} from "../stores/store.js"
import Input from "./forms/Input"
import Radio from "./forms/Radio"
import Upload from "./forms/Upload"
import {Form, Text, FormField} from 'react-form';

var end = [
  {
    label: "Do you have a succes story you would like to share",
    type: "textarea", //default input
    options: "",
    value: ""
  }, {
    render: () => <div><Upload/>
        <p>
          Complex linked media component
        </p>
      </div>
  }
]

var forms = [
  {
    label: "Concept title",
    type: "",
    options: "",
    value: ""
  }, {
    label: "Website",
    type: "",
    options: "",
    value: ""
  }, {
    label: "What would you like to present",
    type: "textarea", //default input
    options: "",
    value: [""]
  }, {
    label: "Tell us about yourself (or your organization)",
    type: "textarea", //default input
    options: "",
    value: ""
  }, {
    label: "Do you have a location/venue to present your work",
    type: "controlRadio", //default input
    options: [
      "No", "Yes"
    ],
    value: {
      No: [],
      Yes: [
        {
          label: "Name of location",
          type: "", //default input
          options: "",
          value: ""
        }, {
          label: "Adress of the location",
          type: "", //default input
          options: "",
          value: ""
        }
      ]
    }
  }, {
    label: "Application type",
    type: "controlRadio", //default input
    options: [
      "Exhibition", "Activity"
    ],
    value: {
      Exhibition: [
        // { TODO: I could just present checkboxes and map over after the fact   label:
        // "Are you interested in one of these locations",   type: "", //multi select
        // options: "",   value: "" },
        {
          label: "How many people will be participating",
          type: "", //default input
          options: "",
          value: ""
        }, 
        // {
        //   label: "Special guests",
        //   type: "list", //TODO: list https://getuikit.com/docs/list
        //   options: [
        //     {
        //       label: "Name",
        //       type: "", //default input
        //       options: "",
        //       value: ""
        //     }, {
        //       label: "Website",
        //       type: "", //default input
        //       options: "",
        //       value: ""
        //     }
        //   ],
        //   value: []
        // }, 
        {
          label: "I am interested in",
          type: "", //multi select   
          options: 
          ["Designride ", " Design shop "],   
          value: " " },
        ...end
        ],
        Activity : [
          {
            label: "This activity is:",
            type: "radio", //default input
            options: [
              "Public", "Private(ticket on sale)", "Private(on invite only)"
            ],
            value: ""
          }, {
            label: "What is the name (or names) of the speaker(s)", //dynamic
            type: "dynamic", //default input
            options: "Add speaker",
            value: [""],
          }, {
            label: "Type",
            type: "radio", //default input
            options: [
              "Awardshow",
              "Challenge",
              "Hackathon/Workshop",
              "Kick-off",
              "Party",
              "Pitch",
              "Presentation",
              "Seminar",
              "Talkshow",
              "Tour"
            ],
            value: ""
          },
          ...end
        ]
      }
    }
  ]

  var forms = forms.map(x => {
    x.label += ":";
    return x
  })
  @withRouter @observer @inject('store')
  export default class SubmitForm extends React.Component {

    render() {

      return (
        <div className="uk-section uk-section-default">
          <Form onSubmit={submittedValues => console.log(submittedValues)}>
            {formApi => (
              <form
                className="uk-form-horizontal uk-margin-large"
                onSubmit={formApi.submitForm}>
                <legend className="uk-legend">Basics</legend>
                {forms
                  .map(function recursive(x, i, ar) {
                    //Branching logic
                    if (x.type == "controlRadio") {
                      var value = formApi.values[x.label]
                      if (value && !ar[i].value[value]) {
                        return <Radio key={x.label} field={x.label} label={x.label} options={x.options}/>
                      } else if (!value) {
                        return <Radio key={x.label} field={x.label} label={x.label} options={x.options}/>
                      }
                      return (
                        <div key={x.label}>
                          <Radio field={x.label} label={x.label} options={x.options}/>
                          <legend className="uk-legend">{value == "Yes"
                              ? "Personal Location"
                              : value == "No"
                                ? ""
                                : value}</legend>
                          {ar[i]
                            .value[value]
                            .map(recursive)}
                        </div>
                      )
                    }

                    if (x.type == "" || x.type == "input") {
                      return (<Input key={x.label} field={x.label} label={x.label}/>)
                    } else if (x.type == "radio") {
                      return <Radio key={x.label} field={x.label} label={x.label} options={x.options}/>
                    } else if (x.render) {
                      return x.render()
                    } else if (x.type == "textarea") {
                      return <Input key={x.label} field={x.label} label={x.label} textarea={true}/>
                    } else if (x.type == "dynamic"){
                      return (
                        <div>

                  <Input key={x.label} field={[x.label, 0]} label={x.label} />
                        {(formApi.values[x.label]? formApi.values[x.label]: []).map((y,z)=>{
                          // if (z ==0)return null
                          return ( 
                          <Input key={z.toString()} field={[x.label, z]} label={x.label} />
                        )
                        })
                      }
                                                          <div className="uk-margin">
          <label className="uk-form-label">                        </label>
          <div className="uk-form-controls"> <button
                  onClick={() => formApi.addValue(x.label, '')}
                  type="button"
                  className="uk-button uk-button-default">{x.options}</button></div></div>

                        </div>
                      )
                    }
                  })}

                <p data-uk-margin>
                  <button type="submit" className="uk-button uk-button-primary">Submit</button>
                </p>
              </form>
            )}
          </Form>
        </div>
      );
    }
  }
