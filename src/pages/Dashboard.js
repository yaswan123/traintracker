import PopularTrains
from "../components/PopularTrains";
function Dashboard() {

    return (

        <div className="container mt-4">

            <h2>🚆 Railway Dashboard</h2>

            <div className="row mt-4">

                <div className="col-md-4">

                    <div className="card bg-primary text-white p-3">

                        <h4>150+</h4>

                        <p>Trains</p>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card bg-success text-white p-3">

                        <h4>500+</h4>

                        <p>Stations</p>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card bg-danger text-white p-3">

                        <h4>1000+</h4>

                        <p>Routes</p>

                    </div>

                </div>

            </div>

        </div>

    );
}
<PopularTrains />
export default Dashboard;