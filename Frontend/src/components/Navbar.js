import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">

                <Link className="navbar-brand" to="/">
                    🚆 Train Tracker
                </Link>

                <div className="navbar-nav ms-auto">

                    <Link className="nav-link mx-2" to="/">
                        Home
                    </Link>

                    <Link className="nav-link mx-2" to="/search">
                        Search Train
                    </Link>

                    <Link className="nav-link mx-2" to="/stations">
                        Stations
                    </Link>

                    <Link className="nav-link mx-2" to="/live">
                        Live Status
                    </Link>

                    <Link className="nav-link mx-2" to="/dashboard">
                        Dashboard
                    </Link>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;