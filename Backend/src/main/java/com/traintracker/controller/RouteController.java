package com.traintracker.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.traintracker.model.Route;
import com.traintracker.service.RouteService;

@RestController
@RequestMapping("/routes")
@CrossOrigin("*")
public class RouteController {

    private final RouteService service;

    public RouteController(RouteService service) {
        this.service = service;
    }

    @PostMapping
    public Route addRoute(
            @RequestBody Route route) {

        return service.addRoute(route);
    }

    @GetMapping
    public List<Route> getAllRoutes() {

        return service.getAllRoutes();
    }

    @GetMapping("/train/{trainId}")
    public List<Route> getRouteByTrainId(
            @PathVariable Long trainId) {

        return service.getRouteByTrainId(
                trainId);
    }
}