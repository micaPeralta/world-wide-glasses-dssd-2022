import Input from "../UI/Input";
import {useRef} from "react";

const NewCollection = () => {
    const nameRef = useRef("")
    const descriptionRef = useRef()
    const imagesRef = useRef("")
    const releaseDateRef = useRef()
    const manufacturingTimeRef = useRef()
    const modelRef = useRef()

    const handleCreateCollection = async (e) => {
        e.preventDefault()
        // let collection = {
        //     name: nameRef.current.value,
        //     description: descriptionRef.current.value,
        //     images: imagesRef.current.value,
        //     releaseDate: releaseDateRef.current.value,
        //     model: modelRef.current.value,
        //     manufacturingTime: manufacturingTimeRef.current.value
        // }

        let collection = {
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            plazoFabricacion: manufacturingTimeRef.current.value,
            fechaLanzamientoEstimada: releaseDateRef.current.value,
            nombreDeModelos: [],
            tipoDeModelos: []
        }

        const path = "https://localhost:7224/api/Collection"
        let response = await fetch(path,{
            method: 'POST',
            body: collection,
            headers: {
                'Content-Type': 'application/json',
            }
        })

        console.log(response)
        // ).then(response => {
        //     console.log(response)
        // }).catch( response => {
        //     console.log(response)
        // })


    }

    return (
        <>
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

                    <div className="form-group">
                        <label htmlFor="model">Model</label>
                        <select className="form-select" id="model" >
                            <option selected value="sunglasses">Sunglasses</option>
                            <option value="Reading lens">Reading lens </option>
                        </select>
                    </div>

                    {/*<div className="form-group">*/}
                    {/*    <label htmlFor="images">Collection images:</label>*/}
                    {/*    <Input ref={imagesRef}*/}
                    {/*           name={"images"}*/}
                    {/*           type="file"*/}
                    {/*           id="images"*/}
                    {/*           accept="image/*"*/}
                    {/*           class={"form-control form-control-user"}*/}
                    {/*           multiple*/}
                    {/*           required*/}
                    {/*    />*/}
                    {/*</div>*/}

                    <button className={"btn btn-secondary float-right"} type={"submit"}>
                        Submit
                    </button>
                </form>

            </div>
        </>
    )
}

export default NewCollection;