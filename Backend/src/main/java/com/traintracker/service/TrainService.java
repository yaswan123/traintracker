package com.traintracker.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.traintracker.model.Train;
import com.traintracker.repository.TrainRepository;

@Service
public class TrainService {

    private final TrainRepository repository;

    public TrainService(TrainRepository repository) {
        this.repository = repository;
    }

    public Train addTrain(Train train) {
        return repository.save(train);
    }

    public List<Train> getAllTrains() {
        return repository.findAll();
    }

    public Train getTrainById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Train getTrainByNumber(String trainNo) {
        return repository.findByTrainNo(trainNo);
    }

    public List<Train> searchTrains(
            String source,
            String destination) {

        return repository.findBySourceAndDestination(
                source,
                destination);
    }

    public Train updateTrain(Long id, Train train) {

        Train existing =
                repository.findById(id).orElse(null);

        if (existing == null) {
            return null;
        }

        existing.setTrainNo(train.getTrainNo());
        existing.setTrainName(train.getTrainName());
        existing.setSource(train.getSource());
        existing.setDestination(train.getDestination());

        return repository.save(existing);
    }

    public void deleteTrain(Long id) {
        repository.deleteById(id);
    }
}