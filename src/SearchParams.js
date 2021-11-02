import { useEffect, useState } from "react";
import Results from "./Results";


const MAKE = ["Nissan", "Toyota", "Honda"];

const SearchParams = () => {
    const [make,setMake] = useState("")
    const [cars,setCars] = useState([])
 

    useEffect(() => {
        requestCars();
    },[])

    async function requestCars(){
        const res = await fetch(
            `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${cars}?format=JSON`
        );
        const json = await res.json();
        setCars(json.cars);
    }

    return(
        <div className="search-params">
            <form>
                <label htmlFor = "make">
                    Make
                    <select 
                        id = "make" 
                        value = {make} 
                        onChange = {(e) => setMake(e.target.value)} 
                        onBlur = {(e) => setMake(e.target.value)} 
                    >
                        <option />
                        {MAKE.map((make) =>
                            <option key = {make} value = {make}>
                           {make}
                           </option>
                        )}
                    </select>
                </label>
            </form>
            <Results> </Results>
        </div>
    );

}

export default SearchParams;