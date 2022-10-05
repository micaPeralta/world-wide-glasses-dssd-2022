import Input from "./UI/Input";
import {useRef} from "react";

const NewCollection = () => {
    const nameRef = useRef("")

    return (
        <>
            <h1 className="h3 mb-2 text-gray-800">Schedule a new collection</h1>

            <div className="col-sm-6 pt-2">
                <form>
                    <div className="form-group">
                    <Input ref={nameRef}
                           name={"name"}
                           type="text"
                           label={"Name"}
                           id="name"
                           placeholder="Name"
                           class={"form-control form-control-user"}
                    />
                    </div>
                    <div className="form-group">

                        <Input ref={nameRef}
                               name={"name"}
                               type="text"
                               label={"Name"}
                               id="name"
                               placeholder="Name"
                               class={"form-control form-control-user"}
                        />

                    </div>

                    <button className={"btn btn-secondary float-right"}>
                        Submit
                    </button>
                </form>

            </div>
        </>
    )
}

export default NewCollection;