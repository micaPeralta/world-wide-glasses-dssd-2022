import {BsPlusLg} from "react-icons/bs";
import {NavLink, useNavigate} from "react-router-dom";


const Collections = () => {

    const navigate = useNavigate();

    const collections = [{
        id: 1,
        name: "a name",
        field: "field"
    }]

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
                            <th>Position</th>
                            <th>Office</th>
                        </tr>
                        </thead>
                        <tbody>
                        {collections.map(c => {
                            return (
                                <tr key={c.id}>
                                    <td>{c.id}</td>
                                    <td>{c.name}</td>
                                    <td>{c.field}</td>
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