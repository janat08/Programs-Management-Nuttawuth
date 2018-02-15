import React from 'react';
import Message from "./Message"
import {inject, observer} from 'mobx-react';
// import store from ""

@observer @inject("store")
class Input extends React.Component {
    render() {
        const {
          // onInput,
          textarea,
          get,
          set,
          setTouched,
          values,
          setSelect,
          options,
          address
        } = this.props;

        var store = this.props.store

        // const error = getError();
        var error = false
        // const warning = getWarning();
        // const success = getSuccess();
        var inputClasses = ""
        if (error){
          inputClasses += "uk-form-danger "
        }
        if (this.props.textarea){
          inputClasses += "uk-textarea "
        } else {
          inputClasses += "uk-input "
        }
        if (this.props.dynamic){
          return(
            <div key={this.props.label} className="uk-margin">
            <label className="uk-form-label">{this.props.label}</label>
            {/* <div className=" uk-inline"> */}
            <div className="uk-form-controls uk-inline">
            {/* <div className=" uk-inline"> */}
            <a className="uk-form-icon" data-uk-icon="icon: pencil" 
            onClick={e=>store.removeField(address)}
            ></a><input
             className={inputClasses}
              value={get}
              onInput={( e ) => {
                set(e.target.value);
                // if ( onInput ) {
                //   onInput( e );
                // }
              }}
              // onBlur={() => {
              //   setTouched();
              // }}
              /></div>
              </div>
              //  </div>
          )
        }
        if (this.props.control){
          return(
            <div className="uk-margin">
            <label className="uk-form-label">{this.props.label}</label>
            <div className="uk-form-controls uk-form-controls-text">
                        <div>
                            {this.props.options.map((x, i) => {
                                    return <div key={x}>
                                        <label>
                                          <input
                                        type="radio"
                                            className={error
                                        ? "uk-radio .uk-form-danger"
                                        : "uk-radio"}
                                        checked={x==get}
                                        onChange={( e ) => {
                                          var val = e.target.value
                                          setSelect(val)

                                            set(values[val]);
                                            console.log(val)
                                            // if ( onInput ) {
                                            //   onInput( e );
                                            // }
                                          }}
                                          // onBlur={() => {
                                          //   setTouched();
                                          // }}
                                            value={x}/>{x}</label><br/></div>
                                })}
                        </div>
            </div>
        </div>
          )
        }
        if (this.props.multi){
          return (
            <div className="uk-margin">
            <label className="uk-form-label">{this.props.label}</label>
            <div className="uk-form-controls uk-form-controls-text">
            <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
            {options.map((x,i)=>{
               return <label key={x}><input className="uk-checkbox" type="checkbox" onChange={e=>set([i])(e.target.checked)} checked={get[i]}/> {x} </label>
            })}
        </div>
            </div>
            </div>
          )
        }
        if (this.props.radio){
          return(
            <div className="uk-margin">
            <label className="uk-form-label">{this.props.label}</label>
            <div className="uk-form-controls uk-form-controls-text">
                        <div>
                            {this.props.options.map((x, i) => {
                                    return <div key={x}>
                                        <label><input
                                        type="radio"
                                            className={error
                                        ? "uk-radio .uk-form-danger"
                                        : "uk-radio"}
                                        checked={x==get}
                                        onChange={( e ) => {
                                            set(e.target.value);
                                            // if ( onInput ) {
                                            //   onInput( e );
                                            // }
                                          }}
                                          // onBlur={() => {
                                          //   setTouched();
                                          // }}
                                            value={x}/>{x}</label><br/></div>
                                })}
                        </div>
            </div>
        </div>
          )
        }
        return (
          <div key={this.props.label} className="uk-margin">
          <label className="uk-form-label">{this.props.label}</label>
          <div className="uk-form-controls">
            {this.props.textarea?
            <textarea
            className={inputClasses}
             value={get}
             onInput={( e ) => {
               set(e.target.value);
              //  if ( onInput ) {
              //    onInput( e );
              //  }
             }}
            //  onBlur={() => {
            //    setTouched();
            //  }}
             />
            :
            <input
             className={inputClasses}
              value={get}
              onInput={( e ) => {
                set(e.target.value);
                // if ( onInput ) {
                //   onInput( e );
                // }
              }}
              // onBlur={() => {
              //   setTouched();
              // }}
              />
              }
            {/* { error ? <Message message={error} /> : null }
            { !error && warning ? <Message message={warning} /> : null }
            { !error && !warning && success ? <Message message={success} /> : null } */}
              </div>
          </div>
        );
      }
    }
  
    // Use the form field and your custom input together to create your very own input!

    export default Input