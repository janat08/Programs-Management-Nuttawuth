import React from 'react';
import Upload from "../comps/forms/Upload"

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
      value: "",
    }, {
      label: "Tell us about yourself (or your organization)",
      type: "textarea", //default input
      options: "",
      value: ""
    }, {
      label: "Do you have a location/venue to present your work",
      type: "controlRadio", //default input
      options: {
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
      },
      value: {}
    }, {
      label: "Application type",
      type: "controlRadio", //default input
      options: {
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
        },
      value: {}
      }
    ]

    export default forms.map(x => {
        x.label += ":";
        var val = x.validation
        // if (!val){
        //   x.validation = {}
        // }
        // if (!val.getError){
        //   val.getError = ()=
        // }
        // if (!val.getWarning){
          
        // }
        // if (!val.getSuccess){
          
        // }
        return x
      })