import Alert from "../UI/Alert";
import {useState} from "react";
import AddMaterialForm from "./AddMaterialForm";
import {FaCheck, FaTrashAlt} from "react-icons/fa";

const Materials = () => {

    const [collectionMaterials, setCollectionMaterials] = useState([])
    const [duplicated, setDuplicated] = useState(false)

    const findMaterial = (id) => {
        return collectionMaterials.find(m => m.id === parseInt(id))
    }

    function handleAddMaterialToCollection(newMaterial) {
        let existMaterial = findMaterial(newMaterial.id)
        if (existMaterial) {
            setDuplicated(true)
            return
        }
        setCollectionMaterials(prevState => [...prevState, newMaterial])
        setDuplicated(false)
    }

    const handleRemoveMaterial = (id) => {
        let cm = collectionMaterials.filter(m => m.id !== id) || []
        setCollectionMaterials(cm)
    }

    return (
        <>
            <h1 className="h3 mb-2 text-gray-800">Materials</h1>

            {/*<TableLayout buttonText={"Add Material"} buttonType={"MODAL"} onActionModal={handleAddMaterialToCollection}>*/}

            <div className="card shadow mb-4">
                <div className="card-header py-3">

                    <AddMaterialForm onAdd={handleAddMaterialToCollection}/>
                    {duplicated && <span className={"text-danger"}> Duplicated material</span>}
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        {collectionMaterials.length === 0 ?
                            <Alert type={"primary"}>
                                No data
                            </Alert>
                            :
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                <tr>
                                    <th>Material</th>
                                    <th>Quantity</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {collectionMaterials.map(c => {
                                    return (
                                        <tr key={c.id}>
                                            <td>{c.name}</td>
                                            <td>{c.quantity}</td>
                                            <td>
                                                <FaTrashAlt className={"pointer"}
                                                            onClick={() => handleRemoveMaterial(c.id)}/>
                                            </td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                                <tfoot>
                                <tr>
                                    <td colSpan={3}>
                                        <button className={"btn btn-info btn-icon-split float-right"}
                                                type={"submit"}>
                                            <span className="icon text-white-50"><FaCheck/></span>
                                            <span className="text"> Confirm</span>
                                        </button>
                                    </td>
                                </tr>
                                </tfoot>
                            </table>
                        }
                    </div>
                </div>
            </div>


            {/*</TableLayout>*/}
        </>
    )
}

export default Materials