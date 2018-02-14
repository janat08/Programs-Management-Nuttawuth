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

        const error = getError();
        const warning = getWarning();
        const success = getSuccess();

        return (
            <div key={this.props.label} className="uk-margin">
                <label className="uk-form-label">{this.props.label}</label>
                <div className="uk-form-controls uk-form-controls-text">
                <RadioGroup field={this.props.label}>
                {group => (
                    <div>
                    {this.props
                        .options
                        .map((x, i) => {
                            return <div key={x}>
                                <label><Radio
                                    className={error
                                ? "uk-radio .uk-form-danger"
                                : "uk-radio"}
                                group={group}
                                    value={x}
                            {...rest}/>{x}</label><br/></div>
                        })}
                        </div>
            )}
            </RadioGroup>
                         {error
                        ? <Message message={error}/>
                        : null}
                    {!error && warning
                        ? <Message message={warning}/>
                        : null}
                    {!error && !warning && success
                        ? <Message message={success}/>
                        : null}
                </div>
            </div>
        );
    }
}

// Use the form field and your custom input together to create your very own
// input!
const CustomText = FormField(CustomRadio);

export default CustomText