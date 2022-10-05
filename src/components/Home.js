
import {Outlet} from "react-router-dom";

const Home = () => {

    return <>
        {/*<Sidebar/>*/}
        <div className="col-sm-10">
            <Outlet/>
        </div>
    </>
}

export default Home;