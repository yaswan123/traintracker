package com.traintracker.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.traintracker.model.Train;
import com.traintracker.service.TrainService;

@RestController
@RequestMapping("/trains")
@CrossOrigin("*")
public class TrainController {

    private final TrainService service;

    public TrainController(TrainService service) {
        this.service = service;
    }

    @PostMapping
    public Train addTrain(@RequestBody Train train) {
        return service.addTrain(train);
    }

    @GetMapping
    public List<Train> getAllTrains() {
        return service.getAllTrains();
    }

    @GetMapping("/{id}")
    public Train getTrainById(@PathVariable Long id) {
        return service.getTrainById(id);
    }

    @GetMapping("/number/{trainNo}")
    public Train getTrainByNumber(
            @PathVariable String trainNo) {

        return service.getTrainByNumber(trainNo);
    }

    @GetMapping("/search")
    public List<Train> searchTrains(
            @RequestParam String source,
            @RequestParam String destination) {

        return service.searchTrains(
                source,
                destination);
    }

    @PutMapping("/{id}")
    public Train updateTrain(
            @PathVariable Long id,
            @RequestBody Train train) {

        return service.updateTrain(id, train);
    }

    @DeleteMapping("/{id}")
    public String deleteTrain(
            @PathVariable Long id) {

        service.deleteTrain(id);

        return "Train Deleted Successfully";
    }
}