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

// function setValue(ab, multi=[]){
// return function(value){
  
//   if (ab){
//     var value = [ab, "value",...multi, ...value]
//   } else {
//     var value = [...multi, ...value]
//   }

//   // console.log("value", value,  Store.setValue(...value))
//   return function(...value){
//     // address.push("value")
//     return function(val){
//     _.set(s.form, value, val)

//     }
// }
// }
// }


var Recursive = inject("store")(observer(function ({arr, ab, x, i, ar}) {
  var store = this.props.store
  var setValue = store.setValue
  var curriedSet = setValue(ab)
  var curriedGet = getValue(ab)

  if (x.type == "list"){

 if (ab){
  var address = [ab, "value", i,]
} else {
  var address = [i,]
}
  return (
    <div key={x.label}>
    {curriedGet([i,"value"]).map((y,z)=>{
      return <ul key={z.toString()} className="uk-list uk-list-divider">
      <li>
        {y.map((yy, zz)=>{
        var set = curriedSet([i,"value", z, zz, "value"])
        var get = curriedGet([i,"value",z, zz, "value"])
// if (z ==0)return <Input set={set} get={get} key={z.toString()} label={x.label} />
return ( 
<Input get={get} set={set} key={(z+zz).toString()} label={yy.label} />
)
      })}
      </li></ul>

    })
  }
  {/* add something button */}
<div className="uk-margin">
<label className="uk-form-label">{x.label}</label>
<div className="uk-form-controls"> <button
onClick={() => store.addField(address, JSON.parse(JSON.stringify(x.schema)))}
type="button"
className="uk-button uk-button-default">{x.options}</button></div></div>

    </div>
  )
  }
  if (x.type == "dynamic"){
 if (ab){
    var address = [ab, "value", i,]
  } else {
    var address = [i,]
  }
    return (
      <div key={x.label}>
      {curriedGet([i,"value"]).map((y,z)=>{
                var set = curriedSet([i,"value", z,])
                var get = curriedGet([i,"value",z])
                var remove = address.slice()
                remove.push("value", z)
                console.log(remove)
        if (z ==0)return <Input set={set} get={get} key={z.toString()} address={remove} label={x.label} />
        return ( 
        <Input dynamic get={get} set={set} key={z.toString()} address={remove} label={""} />
      )
      })
    }
    {/* add something button */}
 <div className="uk-margin">
<label className="uk-form-label"></label>
<div className="uk-form-controls"> <button
onClick={() => store.addField(address, "")}
type="button"
className="uk-button uk-button-default">{x.options}</button></div></div>

      </div>
    )
  }
  if (x.type == "multi"){
    var set = setValue(ab, [i, "value"])
    var get = getValue(ab, [i, "value"])

    return (<Input multi options={x.options} get={get} set={set} key={x.label} field={x.label} label={x.label}/>)
  }

  var set = curriedSet([i, "value"])
  var get = curriedGet([i, "value"])
  if (x.type == "input") {
    return (<Input get={get} set={set} key={x.label} field={x.label} label={x.label}/>)
  } else if (x.type == "radio") {

    return <Input radio get={get} set={set} key={x.label} field={x.label} label={x.label} options={x.options}/>
  } else if (x.render) {
    return x.render()
  } else if (x.type == "textarea") {
    return <Input get={get} set={set} key={x.label} field={x.label} label={x.label} textarea={true}/>
  }

    //Branching logic
    if (x.type == "controlRadio") {
      var value = curriedGet([i,"selected"])
      var options = Object.keys(x.options)
      var set = curriedSet([i, "value"])
      var setSelect = curriedSet([i, "selected"])
      var get = value
      
      if (!value || !ar[i].value) {
        return <Input control set={set} key={x.label} field={x.label} label={x.label} setSelect={setSelect} options={options} values={x.options}/>
      }
      return (
        <div key={x.label}>
          <Input control set={set} setSelect={setSelect} get={get} field={x.label} label={x.label} options={options} values={x.options}/>
          <legend className="uk-legend">{value == "Yes"
              ? "Personal Location"
              : value == "No"
                ? ""
                : value}</legend>
          {curriedGet([i,"value"])
            // arri.value[value]
            .map((x,ii,ar)=>{
              return <Recursive key={x.label} x={x} i={ii} ar={ar} arr={ar} ab={i}/>
              // recursive.bind(null, store, null, null)
            })
            // .map(recursive.bind(null,store, ar, i))
            }
        </div>
      )
    }
}))


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
                    return <Recursive key={x.label} x={x} i={i} ar={ar} />
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
