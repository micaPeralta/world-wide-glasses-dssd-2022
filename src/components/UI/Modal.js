import classes from "./Modal.module.css";
import ReactDom from "react-dom";

const Backdrop = (props) => <div className={classes.backdrop} onClick={() => props.onClose()}></div>

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div>
            {props.element}
        </div>
    </div>
}

const Modal = (props) => {
    return <>
        {ReactDom.createPortal(<Backdrop onClose={props.onClose}/>, document.getElementById("backdrop-root"))}
        {ReactDom.createPortal(<ModalOverlay element={props.children}/>, document.getElementById("overlay-root"))}
    </>
}

export default Modal;