import classes from "./Input.module.css"
import React from "react";

const Input = React.forwardRef((props, ref) => {
    return <div>
        <input className={props.class} name={props.label} id={props.id} {...props} ref={ref}/>
    </div>
})

export default Input