function Home() {
    return (
        <div className="container mt-5">

            <div
                className="text-center text-white p-5 rounded shadow"
                style={{
                    background:
                        "linear-gradient(135deg,#0d6efd,#20c997)"
                }}
            >

                <h1 className="display-4">
                    🚆 Train Tracker
                </h1>

                <p className="lead">
                    Track trains, search routes and check live status
                </p>

                <button className="btn btn-light btn-lg">
                    Search Trains
                </button>

            </div>

        </div>
    );
}

export default Home;