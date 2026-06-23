import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTrainDetails } from "../services/TrainService";

function TrainDetails() {

    const { id } = useParams();

    const [details, setDetails] =
        useState(null);

    useEffect(() => {
        loadDetails();
    }, []);

    const loadDetails = async () => {

        const response =
            await getTrainDetails(id);

        setDetails(response.data);
    };

    if (!details)
        return <h3>Loading...</h3>;

    return (

        <div className="container mt-4">

            <h2>
                {details.train.trainName}
            </h2>

            <h4>
                Train No:
                {details.train.trainNo}
            </h4>

            <p>
                Source:
                {details.train.source}
            </p>

            <p>
                Destination:
                {details.train.destination}
            </p>

            <hr />

            <h3>Route</h3>

            <table className="table">

                <thead>

                <tr>

                    <th>Stop</th>
                    <th>Station</th>
                    <th>Arrival</th>
                    <th>Departure</th>

                </tr>

                </thead>

                <tbody>

                {details.routes.map(route => (

                    <tr key={route.id}>

                        <td>{route.stopNo}</td>

                        <td>
                            {route.stationName}
                        </td>

                        <td>
                            {route.arrivalTime}
                        </td>

                        <td>
                            {route.departureTime}
                        </td>

                    </tr>

                ))}

                </tbody>

            </table>

        </div>

    );
}

export default TrainDetails;