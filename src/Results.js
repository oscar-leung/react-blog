import Car from "./Car"

const Results = ({cars}) => {
    return (
        <div className = "search">
            {!cars.length ? (
                <h1>No Cars Found</h1>
            ) : (
                cars.map((car) => {
                    return (
                        <Car
                        makeID = {car.Make_ID}
                        makeName = {car.Make_Name}
                        modelID = {car.Mode_ID}
                        modelName = {car.Model_Name}
                        />
                    );
                })
            )}
        </div>
    )
}

export default Results;
