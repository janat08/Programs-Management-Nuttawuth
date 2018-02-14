import React from 'react';
import { Form, Text, FormField } from 'react-form';
import Message from "./Message"


class Input extends React.Component {

    render() {

        const {
          fieldApi,
          onInput,
          textarea,
          ...rest
        } = this.props;
  
        const {
          getValue,
          getError,
          getWarning,
          getSuccess,
          setValue,
          setTouched,
        } = fieldApi;
  
        const error = getError();
        const warning = getWarning();
        const success = getSuccess();
        var inputClasses = ""
        if (error){
          inputClasses += "uk-form-danger "
        }
        if (this.props.textarea){
          inputClasses += "uk-textarea "
        } else {
          inputClasses += "uk-input "
        }
        return (
          <div key={this.props.label} className="uk-margin">
          <label className="uk-form-label">{this.props.label}</label>
          <div className="uk-form-controls">
            {this.props.textarea?
            <textarea
            className={inputClasses}
             value={getValue()}
             onInput={( e ) => {
               setValue(e.target.value);
               if ( onInput ) {
                 onInput( e );
               }
             }}
             onBlur={() => {
               setTouched();
             }}
             {...rest} />
            :<input
             className={inputClasses}
              value={getValue()}
              onInput={( e ) => {
                setValue(e.target.value);
                if ( onInput ) {
                  onInput( e );
                }
              }}
              onBlur={() => {
                setTouched();
              }}
              {...rest} />
              }
            { error ? <Message message={error} /> : null }
            { !error && warning ? <Message message={warning} /> : null }
            { !error && !warning && success ? <Message message={success} /> : null }
              </div>
          </div>
        );
      }
    }
  
    // Use the form field and your custom input together to create your very own input!
    const CustomText = FormField(Input);

    export default CustomText