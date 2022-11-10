import {BsPlusLg} from "react-icons/bs";
import {useEffect, useState} from "react";
import {MaterialsService} from "../../services/MaterialsService";


interface Props {
    onClose?: Function,
    onAdd: Function
}

const AddMaterialForm = (props: Props) => {
    const initialMaterial = {
        id: 0,
        name: "",
        quantity: ""
    }
    const [materials, setMaterials] = useState([])
    const [material, setMaterial] = useState(initialMaterial)

    useEffect(() => {
        getMaterials()
    }, [])

    const getMaterials = () => {
        MaterialsService.getMaterials().then(r => {
            setMaterials(r)
            setMaterial(r[0])
        }).catch(r => console.error("Error getting materials"))
    }

    const handleInputChange = (input: string, value) => {
        setMaterial({...material, [input]: value})
    }

    const getMaterialName = (id) => {
        let found = materials.find(m => m.id === parseInt(id))
        return found.name
    }

    const handleSelectChange = (materialId) => {
        setMaterial({...material, id: materialId, name: getMaterialName(materialId)})
    }

    const handleAddMaterial = (e) => {
        e.preventDefault()
        props.onAdd(material)
        setMaterial({...material, quantity: ""})
    }


    return (
        <form className="form-inline" onSubmit={handleAddMaterial}>
            <div className="form-group  mb-2">
                <label htmlFor={"materials"} className={"sr-only"}> Material</label>
                <select className={"form-select"}
                        name={"materials"}
                        defaultValue={materials[0]?.id}
                        onChange={e => handleSelectChange(parseInt(e.target.value))}
                >
                    {materials.map(m =>
                        <option key={m.id} value={m.id}> {m.name}</option>
                    )}
                </select>
            </div>
            <div className="form-group mx-sm-3 mb-2">
                <label htmlFor={"quantity"} className={"sr-only"}> Quantity </label>
                <input type="number" name={"quantity"}
                       placeholder={"Quantity"}
                       required
                       className={"form-control form-control-user"}
                       onChange={e => handleInputChange("quantity", e.target.value)}
                       value={material.quantity}
                       min={1}
                />
            </div>
            <div className="form-group mx-sm-3 mb-2">
                <button className={"btn btn-secondary btn-icon-split float-right"} type={"submit"}>
                    <span className="icon text-white-50"><BsPlusLg/></span>
                    {/*<span className="text"> Add material</span>*/}
                </button>
            </div>
        </form>
    )

}

export default AddMaterialForm;