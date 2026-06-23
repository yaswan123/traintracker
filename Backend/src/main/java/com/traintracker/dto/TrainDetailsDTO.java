package com.traintracker.dto;

import java.util.List;

import com.traintracker.model.Route;
import com.traintracker.model.Train;

public class TrainDetailsDTO {

    private Train train;

    private List<Route> routes;

    public Train getTrain() {
        return train;
    }

    public void setTrain(Train train) {
        this.train = train;
    }

    public List<Route> getRoutes() {
        return routes;
    }

    public void setRoutes(List<Route> routes) {
        this.routes = routes;
    }
}