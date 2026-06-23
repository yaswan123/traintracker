package com.traintracker.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.traintracker.model.Train;

public interface TrainRepository extends JpaRepository<Train, Long> {

    List<Train> findBySourceAndDestination(
            String source,
            String destination);

    Train findByTrainNo(String trainNo);
}