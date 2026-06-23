import { useState } from "react";

function LiveStatus() {

    const [trainNo, setTrainNo] = useState("");
    const [status, setStatus] = useState(null);

    const searchStatus = async () => {

        // Dummy Data for now

        setStatus({
            trainNo: trainNo,
            trainName: "Godavari Express",
            currentStation: "Vijayawada",
            delay: "10 Minutes",
            nextStation: "Khammam",
            expectedArrival: "18:30"
        });

    };

    return (

        <div className="container mt-4">

            <div className="card shadow p-4">

                <h2>🚆 Live Train Status</h2>

                <div className="row">

                    <div className="col-md-8">

                        <input
                            className="form-control"
                            placeholder="Enter Train Number"
                            value={trainNo}
                            onChange={(e)=>
                                setTrainNo(
                                    e.target.value
                                )
                            }
                        />

                    </div>

                    <div className="col-md-4">

                        <button
                            className="btn btn-primary"
                            onClick={searchStatus}
                        >
                            Track Train
                        </button>

                    </div>

                </div>

            </div>

            <br />

            {status && (

                <div className="card shadow p-4">

                    <h3>
                        {status.trainName}
                    </h3>

                    <p>
                        Train No:
                        {status.trainNo}
                    </p>

                    <p>
                        Current Station:
                        {status.currentStation}
                    </p>

                    <p>
                        Delay:
                        {status.delay}
                    </p>

                    <p>
                        Next Station:
                        {status.nextStation}
                    </p>

                    <p>
                        Expected Arrival:
                        {status.expectedArrival}
                    </p>

                </div>

            )}

        </div>

    );
}

export default LiveStatus;