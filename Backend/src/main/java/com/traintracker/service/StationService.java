package com.traintracker.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.traintracker.model.Station;
import com.traintracker.repository.StationRepository;

@Service
public class StationService {

    private final StationRepository repository;

    public StationService(StationRepository repository) {
        this.repository = repository;
    }

    public Station addStation(Station station) {
        return repository.save(station);
    }

    public List<Station> getAllStations() {
        return repository.findAll();
    }

    public Station getStationByCode(
            String stationCode) {

        return repository.findByStationCode(
                stationCode);
    }

    public List<Station> getStationsByCity(
            String city) {

        return repository.findByCity(city);
    }
}