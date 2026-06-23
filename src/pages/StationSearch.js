import { useState } from "react";

function StationSearch() {

    const [station,setStation]=useState("");

    const searchStation=()=>{

        alert(
            "Searching station: "
            + station
        );
    };

    return (

        <div className="container mt-4">

            <h2>Station Search</h2>

            <div className="row">

                <div className="col-md-8">

                    <input
                        className="form-control"
                        placeholder="Enter Station Name"
                        onChange={(e)=>
                            setStation(
                                e.target.value
                            )
                        }
                    />

                </div>

                <div className="col-md-4">

                    <button
                        className="btn btn-primary"
                        onClick={searchStation}
                    >
                        Search
                    </button>

                </div>

            </div>

        </div>

    );
}

export default StationSearch;