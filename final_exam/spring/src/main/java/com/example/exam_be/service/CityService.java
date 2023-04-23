package com.example.exam_be.service;

import com.example.exam_be.model.entity.City;

import java.util.List;

public interface CityService {
    List<City> findAll();
    City findById(Integer id);
}
