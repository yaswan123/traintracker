package com.traintracker.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.traintracker.model.Route;

public interface RouteRepository
        extends JpaRepository<Route, Long> {

    List<Route> findByTrainIdOrderByStopNoAsc(
            Long trainId);
}