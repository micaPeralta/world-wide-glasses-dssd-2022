import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import TableLayout from "../Layout/TableLayout";
import Alert from "../UI/Alert";
import {CollectionsService} from "../../services/CollectionsService";

const Collections = () => {

    const navigate = useNavigate();
    const [collections, setCollections] = useState([])

    useEffect(() => {
        getCollections()
    }, [])


    const getCollections = async () => {
        CollectionsService.getCollections().then((data) => {
            setCollections(data)
        })
    }

    const goToNewCollection = () => {
        navigate("../new-collection", {replace: true})
    }
    return <>
        <h1 className="h3 mb-2 text-gray-800">Collections</h1>
        <p className="mb-4">Here you can see all scheduled collections.</p>


        <TableLayout buttonText={" New collection"} buttonAction={goToNewCollection} buttonType={"REDIRECT"}>
            {collections.length === 0 ?
                <Alert type={"primary"}>
                    No data
                </Alert>
                :
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Manufacturing Time</th>
                        <th>Release Date</th>
                        <th>Models</th>
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
                                            {c.models.map(m => {
                                                return <span
                                                    className="badge bg-secondary m-1 p-1">{m.name}({m.modelType})</span>
                                            })}
                                        </div>}
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            }
        </TableLayout>
    </>
}

export default Collections;