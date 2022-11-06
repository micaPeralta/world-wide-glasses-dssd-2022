const Alert = (props) => {

    return (
        <div className={"alert alert-" + props.type + " text-center"} role="alert">
            {props.children}
        </div>
    )
}

export default Alert;