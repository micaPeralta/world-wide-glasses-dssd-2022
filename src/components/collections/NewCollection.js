import Input from "../UI/Input";
import {useRef, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {BsXLg} from "react-icons/bs";
import {API_COLLECTIONS, UPLOAD_IMAGE} from "../../helpers/Routes";

const NewCollection = () => {
    const navigate = useNavigate();
    const [models,setModels] = useState([]);
    const [filesSelected, setFilesSelected] = useState(
        []
    );


    const nameRef = useRef("")
    const descriptionRef = useRef("")
    const imagesRef = useRef("")
    const releaseDateRef = useRef(undefined)
    const manufacturingTimeRef = useRef(undefined)
    const modelNameRef = useRef(undefined)
    const modelTypeTimeRef = useRef(undefined)

    const handleCreateCollection = async (e) => {
        e.preventDefault()
        let collection = {
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            releaseDate: new Date(releaseDateRef.current.value).toISOString(),
            models: models,
            manufacturingTime: manufacturingTimeRef.current.value
        }

        fetch(API_COLLECTIONS, {
            method: 'POST',
            body: JSON.stringify(collection),
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {

                if (!response.ok) {
                    return
                }
                response.clone().json()
            })
            .then(collection => {
                console.log(collection.id)
                handleUploadFiles(collection.id)
                navigate("/home/collections")
            }).catch((response) => {
            console.log("ERROR", response)
        })

    }

    const saveFileSelected= (e) => {
        //in case you wan to print the file selected
        // console.log(e.target.files[0]);
        // console.log(e.target.files);
        setFilesSelected(e.target.files);
    };

    const handleAddModel = (e) => {
        e.preventDefault()
        let model = {
            name: modelNameRef.current.value,
            modelType: modelTypeTimeRef.current.value,
            description: "a descriptions"
        }

        modelNameRef.current.value = "";
        setModels([...models,model])
    }

    const handleDeleteModel = (name) => {
        let modelVar = models.filter(m => m.name !== name)
        setModels(modelVar)
    }

    const handleUploadFiles = async (collectionId) => {
        const formData = new FormData();

        for (let i = 0; i < filesSelected.length ; i++) {
            formData.append("files", filesSelected[i])
        }
        formData.append("collectionId", collectionId);

        const res = await fetch(UPLOAD_IMAGE, {
            method: "POST",
            body: formData

        }).then((res) => res.json());
    };

    return (
        <>
            <nav  aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><NavLink to={"/home/collections"}> Collections </NavLink>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">New Collection</li>
                </ol>
            </nav>

            <h1 className="h3 mb-2 text-gray-800">Schedule a new collection</h1>


            <div className="col-sm-6 pt-2">
                <form onSubmit={handleCreateCollection}>
                    <div className="form-group">
                        <label htmlFor="releaseDate"> Name</label>

                        <Input ref={nameRef}
                           name={"name"}
                           type="text"
                           label={"Name"}
                           id="name"
                           class={"form-control form-control-user"}
                           required
                    />
                    </div>
                    <div className="form-group">
                        <label htmlFor="releaseDate"> Description</label>
                        <textarea ref={descriptionRef} className="form-control" id="description" rows="3" required></textarea>
                    </div>


                    <label htmlFor=""> Models</label>

                    <div className="card">
                        <div className="card-body">
                            {models.length > 0 &&
                                <div className="alert alert-warning" role="alert">
                                {models.map(m =>{
                                    return <span className="badge bg-secondary m-1 p-1">
                                        {m.name }({m.modelType})
                                        <BsXLg onClick={() => handleDeleteModel(m.name)}/>
                                    </span>
                                })}
                                </div>}
                            <div className="form-group">
                                <label htmlFor="manufacturingTime"> Model Name </label>
                                <Input ref={modelNameRef}
                                       name={"modelName"}
                                       type="text"
                                       label={"modelName"}
                                       id="modelName"
                                       class={"form-control form-control-user"}
                                       required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="model">Model Type</label>
                                <select className="form-select" id="model" ref={modelTypeTimeRef} defaultValue={"Reading lens"} >
                                    <option value="sunglasses">Sunglasses</option>
                                    <option value="Reading lens">Reading lens </option>
                                </select>
                            </div>

                            <button className={"btn btn-secondary float-right"} onClick={handleAddModel}>
                                Add
                            </button>
                        </div>
                    </div>


                    <div className="form-group">
                        <label htmlFor="releaseDate"> Release Date</label>
                        <Input ref={releaseDateRef}
                               name={"releaseDate"}
                               type="date"
                               label={"releaseDate"}
                               id="releaseDate"
                               class={"form-control form-control-user"}
                               required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="manufacturingTime"> Manufacturing Time</label>
                        <Input ref={manufacturingTimeRef}
                               name={"manufacturingTime"}
                               type="number"
                               label={"manufacturingTime"}
                               id="manufacturingTime"
                               class={"form-control form-control-user"}
                               required
                        />
                    </div>


                    {/*<form onSubmit={e => e.preventDefault()}>*/}
                        <div className="form-group">
                            <label htmlFor="images">Collection files:</label>
                            <Input ref={imagesRef}
                                   name={"images"}
                                   type="file"
                                   id="images"
                                   class={"form-control form-control-user"}
                                   multiple
                                   required
                                   onChange={saveFileSelected}
                            />
                            {/*<input type="button" onClick={handleUploadFiles}/>*/}
                        </div>

                    {/*</form>*/}


                    <div className="d-grid gap-2">
                    <button className={"btn btn-secondary btn- "} type={"submit"}>
                        Submit
                    </button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default NewCollection;