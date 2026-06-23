package com.traintracker.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.traintracker.model.Station;

public interface StationRepository
        extends JpaRepository<Station, Long> {

    Station findByStationCode(String stationCode);

    List<Station> findByCity(String city);
}