import {BsPlusLg} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {API_COLLECTIONS} from "../../helpers/Routes";

const Collections = () => {

    const navigate = useNavigate();
    const [collections, setCollections] = useState([])

    useEffect(() => {
        getCollections()
    }, [])



    const getCollections = async () => {
        const path = API_COLLECTIONS + "/getAll"

        fetch(path)
            .then(response =>  response.clone().json())
            .then((data) => {
                console.log(data)
                setCollections(data)
            })
            .catch((response) => {
                console.log("ERROR", response)
            }
        )
    }

    const goToNewCollection = () => {
        navigate("../new-collection", {replace: true})
    }
    return <>
        <h1 className="h3 mb-2 text-gray-800">Collections</h1>
        <p className="mb-4">Here you can see all scheduled collections.</p>


        <div className="card shadow mb-4">
            <div className="card-header py-3">
                {/*<h6 className="m-0 font-weight-bold text-primary">Collections</h6>*/}
                <button className={"btn btn-secondary btn-icon-split float-right"} onClick={goToNewCollection}>
                    <span className="icon text-white-50">
                       <BsPlusLg/>
                    </span>
                    <span className="text">
                        New collection
                    </span>

                </button>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Manufacturing Time</th>
                            <th>Release Date </th>
                            <th>Models </th>
                        </tr>
                        </thead>
                        <tbody>
                        {collections.map(c => {
                            return (
                                <tr key={c.id}>
                                    <td>{c.name}</td>
                                    <td>{c.description}</td>
                                    <td>{c.manufacturingTime}</td>
                                    <td>{new Date(c.releaseDate).toDateString()}</td>
                                    <td>
                                        {c.models.length > 0 &&
                                            <div className="alert alert-warning" role="alert">
                                                {c.models.map(m =>{
                                                    return <span className="badge bg-secondary m-1 p-1">{m.name }({m.modelType})</span>
                                                })}
                                            </div>}
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}

export default Collections;