import Modal from "../UI/Modal";
import {BsXLg} from "react-icons/bs";

const AddMaterialModal = (props) => {

    const materials = [
        {
            id: 1,
            name: "a material"
        }
    ]

    function handleAdd() {

    }

    return (
        <Modal onClose={props.onClose}>
            <span className={"float-right pointer"} onClick={props.onClose}><BsXLg/></span>
            <h4>New material</h4>

            <div className="form-group">
                <label htmlFor={"materials"}> Material</label>
                <select className={"form-control form-control-user"} name={"materials"}>
                    {materials.map(m =>
                        <option key={m.id}> {m.name}</option>
                    )}
                </select>
            </div>

            <div className="form-group">
                <label htmlFor={"quantity"}> Quantity </label>
                <input type="number" name={"quantity"} className={"form-control form-control-user"}/>
            </div>

            <button className={"btn btn-secondary float-right"} onClick={handleAdd}>
                Add
            </button>


        </Modal>
    )

}

export default AddMaterialModal;