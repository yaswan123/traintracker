package com.traintracker.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.traintracker.model.Route;
import com.traintracker.repository.RouteRepository;

@Service
public class RouteService {

    private final RouteRepository repository;

    public RouteService(RouteRepository repository) {
        this.repository = repository;
    }
    
    public Route getRoute(Long id) {

        return repository
                .findById(id)
                .orElse(null);
    }
    public Route addRoute(Route route) {
        return repository.save(route);
    }

    public List<Route> getRouteByTrainId(
            Long trainId) {

        return repository
                .findByTrainIdOrderByStopNoAsc(
                        trainId);
    }

    public List<Route> getAllRoutes() {
        return repository.findAll();
    }
}