import { useEffect, useState } from "react";


const MAKE = ["Nissan", "Toyota", "Honda"];

const SearchParams = () => {
    const [make,setMake] = useState("Default Maker")

    useEffect(() => {
        // request
    },[])

    return(
        <div className="search-params">
            <form>
                <label htmlFor = "make">
                    Make
                    <select id = "make" value = {make} onChange = {(e) => setMake(e.target.value)} onBlur = {(e) => setMake(e.target.value)} >
                        <option />
                        {MAKE.map((make) =>
                            <option key = {make} value = {make}>
                           {make}
                           </option>
                        )}
                    </select>
                </label>
            </form>
        </div>
    );

}

export default SearchParams;