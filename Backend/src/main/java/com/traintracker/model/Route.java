package com.traintracker.model;

import jakarta.persistence.*;

@Entity
@Table(name="routes")
public class Route {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long trainId;

    private String stationName;

    private String arrivalTime;

    private String departureTime;

    private Integer stopNo;

    public Route() {
    }

    public Long getId() {
        return id;
    }

    public Long getTrainId() {
        return trainId;
    }

    public void setTrainId(Long trainId) {
        this.trainId = trainId;
    }

    public String getStationName() {
        return stationName;
    }

    public void setStationName(String stationName) {
        this.stationName = stationName;
    }

    public String getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(String arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public String getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(String departureTime) {
        this.departureTime = departureTime;
    }

    public Integer getStopNo() {
        return stopNo;
    }

    public void setStopNo(Integer stopNo) {
        this.stopNo = stopNo;
    }
}