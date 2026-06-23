package com.traintracker.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.traintracker.dto.TrainDetailsDTO;
import com.traintracker.model.Route;
import com.traintracker.model.Train;

@Service
public class TrainDetailsService {

    private final TrainService trainService;
    private final RouteService routeService;

    public TrainDetailsService(
            TrainService trainService,
            RouteService routeService) {

        this.trainService = trainService;
        this.routeService = routeService;
    }

    public TrainDetailsDTO getTrainDetails(
            Long trainId) {

        Train train =
                trainService.getTrainById(
                        trainId);

        List<Route> routes =
                routeService.getRouteByTrainId(
                        trainId);

        TrainDetailsDTO dto =
                new TrainDetailsDTO();

        dto.setTrain(train);
        dto.setRoutes(routes);

        return dto;
    }
}