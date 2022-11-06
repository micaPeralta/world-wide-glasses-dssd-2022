import TableLayout from "../Layout/TableLayout";
import Alert from "../UI/Alert";

const Materials = () => {

    const materials = [
        // {
        //     material: "a material",
        //     quantity: 1,
        //     date: "2022-10-23"
        // }
    ]


    const getMaterials = () => {

    }
    return (
        <>
            <h1 className="h3 mb-2 text-gray-800">Materials</h1>

            <TableLayout buttonText={"Add Material"} buttonType={"MODAL"} buttonAction={() => {
            }}>
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                    <thead>
                    {materials.length > 0 ?
                        <tr>
                            <th>Material</th>
                            <th>Quantity</th>
                            <th>Date</th>
                        </tr>
                        :
                        <Alert type={"primary"}>
                            No data
                        </Alert>
                    }
                    </thead>
                    <tbody>
                    {materials.map(c => {
                        return (
                            <tr key={c.material}>
                                <td>{c.quantity}</td>
                                <td>{c.date}</td>
                                <td>

                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>

            </TableLayout>
        </>
    )
}

export default Materials