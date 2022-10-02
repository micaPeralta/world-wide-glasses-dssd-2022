import  classes from "./Input.module.css"
import React from "react";

const Input = React.forwardRef((props, ref) => {

    // useImperativeHandle(
    //     // Parameter 1: the ref that is exposed to the parent
    //     ref,
    //     // Parameter 2: a function that returns the value of the ref's current property,
    //     // an object containing the things we're trying to expose (in this case, just
    //     // one function)
    //     () => {
    //         return {
    //             focusOnForm: focusOnForm,
    //         }
    //     }
    // );

    return <div className={"row mb-3"}>
        <label className="col-sm-2 col-form-label" htmlFor={props.id}>{props.label}</label>
        <div className="col-sm-10">
            <input className="form-control" name={props.label} id={props.id} {...props}  ref={ref}  />
        </div>
    </div>
})

export default Input