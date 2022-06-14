import React from "react";


function Theme(props) {
    return (
        <button
          theme={props.theme}
          style={{ backgroundColor: theme.background }}
        >{props.text}</button>
    )
}

export default Theme;
