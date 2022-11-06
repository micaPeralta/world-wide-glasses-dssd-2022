import {BsPlusLg} from "react-icons/bs";
import AddMaterialForm from "../Materials/AddMaterialForm";
import {useState} from "react";

interface Props {
    buttonAction?: Function,
    buttonType: String,
    onActionModal?: Function
}

const TableLayout = (props: Props) => {

    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(prevState => !prevState)
    }

    const modalEnabled = () => {
        return props.buttonType === 'MODAL'
    }
    return <>
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <button className={"btn btn-secondary btn-icon-split float-right"}
                        onClick={modalEnabled() ? toggleModal : props.buttonAction}>
                    <span className="icon text-white-50">
                       <BsPlusLg/>
                    </span>
                    <span className="text">
                        {props.buttonText}
                    </span>

                </button>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    {props.children}
                </div>
            </div>
        </div>

        {modalEnabled() && openModal && <AddMaterialForm onClose={toggleModal} onAdd={props.onActionModal}/>}

    </>
}

export default TableLayout;