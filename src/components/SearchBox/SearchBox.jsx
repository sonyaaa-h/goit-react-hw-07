import { MdSearch  } from "react-icons/md";
import s from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";



const SearchBox = () => {
const dispatch = useDispatch();




    return (
        <div className={s.searchWrapper}>
            <label>Find contacts by name</label>
            <div className={s.searchBox}>
                <MdSearch  className={s.searchIcon} />
                <input
                    type="text"
                    name="filter"
                    placeholder="Search contacts"
                    onChange={(e) =>{
                        dispatch(changeFilter(e.target.value))
                        
                    }}
                />
            </div>
        </div>
    );
};
export default SearchBox;