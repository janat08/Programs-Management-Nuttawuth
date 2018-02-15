import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import Store from "../stores/store.js"
import Input from "./forms/Input"
import Upload from "./forms/Upload"
import {Form, Text, FormField} from 'react-form';
import _ from "lodash"

var abc = 0
function getValue(ab){
return function(value){
  if (ab){
    var value = [ab, "value", ...value]
    console.log(ab, value)
  } else {
    var value = value
  }
  abc += 1
// console.log(value, abc)
  var res = value.reduce((a,x)=>{
    return a[x]
}, Store.form)
// console.log(window.JS(res))
  return res
}
}

function setValue(ab){
return function(value){
  if (ab){
    var value = [ab, "value", ...value]
  } else {
    var value = value
  }
  // console.log("value", value,  Store.setValue(...value))
  return Store.setValue(...value)
}
}


var Recursive = observer(function ({store, arr, ab, x, i, ar}) {
  var curriedSet = setValue(ab, arr)
  var curriedGet = getValue(ab)
  //Branching logic
  if (x.type == "controlRadio") {
    var value = Object.keys(curriedGet([[i],"value"]))[0],
    options = Object.keys(x.options),
    set = curriedSet([[i]]),
    get = value
    
    if (!value || !ar[i].value[value]) {
      return <Input control get={get} set={set} key={x.label} field={x.label} label={x.label} options={options} values={x.options}/>
    }
    return (
      <div key={x.label}>
        <Input control set={set} get={get} field={x.label} label={x.label} options={options} values={x.options}/>
        <legend className="uk-legend">{value == "Yes"
            ? "Personal Location"
            : value == "No"
              ? ""
              : value}</legend>
        {curriedGet([[i],"value", value])
          // arr[i].value[value]
          .map((x,ii,ar)=>{
            return <Recursive key={x.label} x={x} i={ii} ar={ar} store={store} arr={ar} ab={i}/>
            // recursive.bind(null, store, null, null)
          })
          // .map(recursive.bind(null,store, ar, i))
          }
      </div>
    )
  }
  var set = curriedSet([[i]])
  var get = curriedGet([[i], "value"])
  if (x.type == "" || x.type == "input") {
    return (<Input get={get} set={set} key={x.label} field={x.label} label={x.label}/>)
  } else if (x.type == "radio") {

    return <Input radio get={get} set={set} key={x.label} field={x.label} label={x.label} options={x.options}/>
  } else if (x.render) {
    return x.render()
  } else if (x.type == "textarea") {
    return <Input get={get} set={set} key={x.label} field={x.label} label={x.label} textarea={true}/>
  } else if (x.type == "dynamic"){
    set = curriedSet([[i], 0])
    get = curriedGet([[i], 0,"value"])
    return (
      <div key={x.label}>
<Input set={set} get={get} field={[x.label, 0]} label={x.label} />
      {(store.form[x.label]? store.form[x.label]: []).map((y,z)=>{
        // if (z ==0)return null
        var set = curriedSet([[i],[z],])
        var get = curriedGet([[i],[z], "value"])
        return ( 
        <Input get={get} set={set} key={z.toString()} label={x.label} />
      )
      })
    }
                                        <div className="uk-margin">
<label className="uk-form-label">                        </label>
<div className="uk-form-controls"> <button
onClick={() => store.addValue(x.label, '')}
type="button"
className="uk-button uk-button-default">{x.options}</button></div></div>

      </div>
    )
  }
})


  @withRouter @observer @inject('store')
  export default class SubmitForm extends React.Component {
    render() {
var self = this
var store = this.props.store
      return (
        <div className="uk-section uk-section-default">
              <form
              onSubmit={submittedValues => console.log(submittedValues)}
                className="uk-form-horizontal uk-margin-large">
                <legend className="uk-legend">Basics</legend>
                {store.form
                  .map((x,i,ar)=>{
                    return <Recursive key={x.label} x={x} i={i} ar={ar} store={store} />
                    // recursive.bind(null, store, null, null)
                  })
                }

                <p data-uk-margin>
                  <button type="submit" className="uk-button uk-button-primary">Submit</button>
                </p>
              </form>        </div>
      );
    }
  }
