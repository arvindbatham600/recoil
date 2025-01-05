import { useRecoilValue, useSetRecoilState } from "recoil";
import { filterName } from "../store/atoms";

const FilterBox = () => {
    
    const setFilterValue = useSetRecoilState(filterName)
    const handleChange = (e) => {
        setFilterValue(e.target.value);
    }
    
    return (
      <>
        <div>
          <label>Filter list </label>
          <input type="text" onChange={handleChange} />
        </div>
      </>
    );
}

export default FilterBox;