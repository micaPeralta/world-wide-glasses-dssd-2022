import classes from './NotFound.module.css';
import notFoundImage from "../assets/not-found.png";
import PageTemplate from "./Layout/PageTemplate";
const NotFound =  () => {
    return <PageTemplate>
        <div className={classes.notFound}>
            <img src={notFoundImage} alt="not found image"/>
        </div>
    </PageTemplate>
}

export default NotFound;