import React from 'react';
import {Form, Text, FormField, RadioGroup, Radio} from 'react-form';
import Message from "./Message"

{/* <div className="uk-margin">
<div className="uk-form-label">{x.label}</div>
<div className="uk-form-controls uk-form-controls-text">
  {x
    .options
    .map((x, i) => {
      return <div>
        <label><input className="uk-radio" type="radio" name={x}/>{x}</label><br/></div>
    })}
</div>
</div> */
}

class CustomRadio extends React.Component {

    render() {

        const {
            fieldApi,
            onInput,
            ...rest
        } = this.props;

        const {
            getValue,
            getError,
            getWarning,
            getSuccess,
            setValue,
            setTouched
        } = fieldApi;

        // const error = getError();
        // const warning = getWarning();
        // const success = getSuccess();

        return (
            <div key={this.props.label} className="uk-margin">
                <label className="uk-form-label">{this.props.label}</label>
                <div className="uk-form-controls uk-form-controls-text">
                        {group => (
                            <div>
                                {this.props.options.map((x, i) => {
                                        return <div key={x}>
                                            <label><input
                                            type="radio"
                                                className={error
                                            ? "uk-radio .uk-form-danger"
                                            : "uk-radio"}
                                            check={x==value}
                                            name={x}
                                            onInput={( e ) => {
                                                setValue(e.target.value);
                                                // if ( onInput ) {
                                                //   onInput( e );
                                                // }
                                              }}
                                              onBlur={() => {
                                                setTouched();
                                              }}
                                                value={x}/>{x}</label><br/></div>
                                    })}
                            </div>
                        )}
                </div>
            </div>
        );
    }
}

// Use the form field and your custom input together to create your very own
// input!
const CustomText = FormField(CustomRadio);

export default CustomText