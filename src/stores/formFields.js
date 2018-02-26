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
      type: "input",
      options: "",
      value: ""
    }, {
      label: "Website",
      type: "input",
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
      selected: "",
      options: {
        No: [],
        Yes: [
          {
            label: "Name of location",
            type: "input", //default input
            options: "",
            value: ""
          }, {
            label: "Adress of the location",
            type: "input", //default input
            options: "",
            value: ""
          }
        ]
      },
      value: {},
    }, {
      label: "Application type",
      type: "controlRadio", //default input
      selected: "Exhibition",
      options: {
        Exhibition: [
          {
            label: "Are you interested in one of these locations",   
            type: "multi", //multi select
          options: ["a", "b"],  
           value: [false, false] 
          },
          {
            label: "How many people will be participating",
            type: "input", //default input
            options: "",
            value: ""
          }, 
          {
            label: "Special guests",
            type: "list", //TODO: list https://getuikit.com/docs/list
            options: "Add guest",
            schema:                [{
                label: "Name", 
                type: "input", //default input
                options: "",
                value: ""
               },
                             {
                label: "Website",
                type: "input", //default input
                options: "",
                value: ""
               }],
            value: [
              // {
              //   label: "Name", ??Note it should start empty
              //   type: "", //default input
              //   options: "",
              //   value: ""
              //  }
          ]
          }, 
          {
            label: "I am interested in",
            type: "multi", //multi select   
            options: 
            ["Designride ", " Design shop "],   
            value: [false, false] },
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
              type: "dynamic", //TODO:
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
      value: [
        {
          label: "Are you interested in one of these locations",   
          type: "multi", //multi select
        options: ["a", "b"],  
         value: [false, false] 
        },
        {
          label: "How many people will be participating",
          type: "input", //default input
          options: "",
          value: ""
        }, 
        {
          label: "Special guests",
          type: "list", //TODO: list https://getuikit.com/docs/list
          options: "Add guest",
          schema:                [{
              label: "Name", 
              type: "input", //default input
              options: "",
              value: ""
             },
                           {
              label: "Website",
              type: "input", //default input
              options: "",
              value: ""
             }],
          value: [
            // {
            //   label: "Name", ??Note it should start empty
            //   type: "", //default input
            //   options: "",
            //   value: ""
            //  }
        ]
        }, 
        {
          label: "I am interested in",
          type: "multi", //multi select   
          options: 
          ["Designride ", " Design shop "],   
          value: [false, false] },
        ...end
        ]
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