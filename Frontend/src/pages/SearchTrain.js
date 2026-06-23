import { useState } from "react";
import { searchTrain } from "../services/TrainService";
import { useNavigate } from "react-router-dom";

function SearchTrain() {

    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
    const [trains, setTrains] = useState([]);

    const navigate = useNavigate();

    const search = async () => {
        try {

            const response = await searchTrain(
                source,
                destination
            );

            setTrains(response.data);

        } catch (error) {

            console.error(error);

            alert("Error fetching trains");

        }
    };

    return (

        <div className="container mt-4">

            <div className="card p-4 shadow">

                <h2 className="mb-3">
                    Search Train
                </h2>

                <div className="row">

                    <div className="col-md-4">

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Source"
                            value={source}
                            onChange={(e) =>
                                setSource(
                                    e.target.value
                                )
                            }
                        />

                    </div>

                    <div className="col-md-4">

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Destination"
                            value={destination}
                            onChange={(e) =>
                                setDestination(
                                    e.target.value
                                )
                            }
                        />

                    </div>

                    <div className="col-md-4">

                        <button
                            className="btn btn-primary"
                            onClick={search}
                        >
                            Search
                        </button>

                    </div>

                </div>

            </div>

            <br />

            {trains.length > 0 && (

                <table className="table table-striped table-bordered">

                    <thead className="table-dark">

                    <tr>

                        <th>Train No</th>
                        <th>Train Name</th>
                        <th>Source</th>
                        <th>Destination</th>
                        <th>Action</th>

                    </tr>

                    </thead>

                    <tbody>

                    {trains.map((train) => (

                        <tr key={train.id}>

                            <td>{train.trainNo}</td>

                            <td>{train.trainName}</td>

                            <td>{train.source}</td>

                            <td>{train.destination}</td>

                            <td>

                                <button
                                    className="btn btn-success"
                                    onClick={() =>
                                        navigate(
                                            `/details/${train.id}`
                                        )
                                    }
                                >
                                    View
                                </button>

                            </td>

                        </tr>

                    ))}

                    </tbody>

                </table>

            )}

            {trains.length === 0 && (

                <div className="mt-3">

                    <p>
                        Search for trains by entering
                        source and destination.
                    </p>

                </div>

            )}

        </div>

    );
}

export default SearchTrain;