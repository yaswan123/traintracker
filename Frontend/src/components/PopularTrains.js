function PopularTrains() {

    const trains = [

        "12727 Godavari Express",
        "12805 Janmabhoomi Express",
        "12760 Charminar Express",
        "12841 Coromandel Express"

    ];

    return (

        <div className="container mt-4">

            <h3>Popular Trains</h3>

            <ul className="list-group">

                {trains.map((train,index)=>(

                    <li
                        key={index}
                        className="list-group-item"
                    >
                        {train}
                    </li>

                ))}

            </ul>

        </div>

    );
}

export default PopularTrains;