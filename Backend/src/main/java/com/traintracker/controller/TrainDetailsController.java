package com.traintracker.controller;

import org.springframework.web.bind.annotation.*;

import com.traintracker.dto.TrainDetailsDTO;
import com.traintracker.service.TrainDetailsService;

@RestController
@RequestMapping("/train-details")
@CrossOrigin("*")
public class TrainDetailsController {

    private final TrainDetailsService service;

    public TrainDetailsController(
            TrainDetailsService service) {

        this.service = service;
    }

    @GetMapping("/{trainId}")
    public TrainDetailsDTO getDetails(
            @PathVariable Long trainId) {

        return service.getTrainDetails(
                trainId);
    }
}