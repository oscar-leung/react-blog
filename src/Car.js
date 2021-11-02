import { Link } from "react-router-dom";

const Car = (props) =>{
    const {MakeID, Make_Name, Model_ID, Model_Name,} = props
    return(
        <Link to={`/details/${MakeID}`} className = 'car'>
            <div className = 'info'>
                <h1> {Model_Name}</h1>
                <h2> {Make_Name} - {Model_ID}</h2>
            </div>
        </Link>
    )
}

export default Car;


//   return (
//     <Link to={`/details/${id}`} className="pet">
//       <div className="image-container">
//         <img src={hero} alt={name} />
//       </div>
//       <div className="info">
//         <h1>{name}</h1>
//         <h2>{`${animal} — ${breed} — ${location}`}</h2>
//       </div>
//     </Link>
//   );
// };

// export default Pet;
