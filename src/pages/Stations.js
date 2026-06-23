import { useEffect, useState } from "react";
import { getStations } from "../services/TrainService";

function Stations() {

    const [stations, setStations] = useState([]);

    useEffect(() => {
        loadStations();
    }, []);

    const loadStations = async () => {
        const response = await getStations();
        setStations(response.data);
    };

    return (

        <div className="container mt-4">

            <h2>Stations</h2>

            <div className="row">

                {stations.map(station => (

                    <div
                        className="col-md-4"
                        key={station.id}
                    >

                        <div className="card shadow p-3 mb-3">

                            <h5>
                                {station.stationName}
                            </h5>

                            <p>
                                Code:
                                {station.stationCode}
                            </p>

                            <p>
                                City:
                                {station.city}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );
}

export default Stations;