import React from "react"

export default ({ type, message }) => {
    var type
    if (type == "warn"){
        type = ".uk-alert-warning"
    } else if (type == "suc"){
        type = ".uk-alert-success"
    } else {
        type = ".uk-alert-danger"
    }

    return (
        <div className={type} data-uk-alert>
        <a class="uk-alert-close" data-uk-close></a>
        <p>{message}</p>
        </div>
    );
  }