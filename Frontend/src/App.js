import './App.css';
import LiveStatus from "./pages/LiveStatus";
import TrainDetails from "./pages/TrainDetails";
import Dashboard from "./pages/Dashboard";
import StationSearch from "./pages/StationSearch";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import SearchTrain from "./pages/SearchTrain";
import Stations from "./pages/Stations";

function App() {

  return (

    <BrowserRouter>

      <div
        className="d-flex flex-column"
        style={{ minHeight: "100vh" }}
      >

        <Navbar />

        <div className="flex-grow-1">

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/live"
              element={<LiveStatus />}
            />

            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
              path="/station-search"
              element={<StationSearch />}
            />

            <Route
              path="/search"
              element={<SearchTrain />}
            />

            <Route
              path="/details/:id"
              element={<TrainDetails />}
            />

            <Route
              path="/stations"
              element={<Stations />}
            />

          </Routes>

        </div>

        <Footer />

      </div>

    </BrowserRouter>

  );

}

export default App;