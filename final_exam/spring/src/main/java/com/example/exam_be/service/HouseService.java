package com.example.exam_be.service;

import com.example.exam_be.model.entity.House;

import java.util.List;

public interface HouseService {
    List<House> findAll();
    void save(House house);
    House findById(Long id);
    void deleteById(Long id);
}
