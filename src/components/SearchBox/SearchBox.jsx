import { useDispatch, useSelector } from "react-redux";
import { getFilters, setFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilters);

  return (
    <div className={css.wrapper}>
      <p className={css.text}>Find contacts by name</p>
      <input className={css.input}
        type="text"
        name="filter"
        value={filterValue}
        onChange={(event) => dispatch(setFilter(event.target.value))}
      />
    </div>
  );
}
