import classes from "./Header/Header.module.css";
import mealsImage from "../../assets/glasses.jpg";

const HeaderImage =  () => {
    return <>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="delicious food"/>
        </div>
    </>
}

export default HeaderImage;