package com.traintracker.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.traintracker.model.Station;
import com.traintracker.service.StationService;

@RestController
@RequestMapping("/stations")
@CrossOrigin("*")
public class StationController {

    private final StationService service;

    public StationController(StationService service) {
        this.service = service;
    }

    @PostMapping
    public Station addStation(
            @RequestBody Station station) {
        return service.addStation(station);
    }

    @GetMapping
    public List<Station> getAllStations() {

        return service.getAllStations();
    }

    @GetMapping("/code/{stationCode}")
    public Station getStationByCode(
            @PathVariable String stationCode) {

        return service.getStationByCode(
                stationCode);
    }

    @GetMapping("/city/{city}")
    public List<Station> getStationsByCity(
            @PathVariable String city) {

        return service.getStationsByCity(city);
    }
}