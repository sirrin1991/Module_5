package com.example.exam_be.service.impl;

import com.example.exam_be.model.entity.City;
import com.example.exam_be.repository.CityRepository;
import com.example.exam_be.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityServiceImpl implements CityService {
    @Autowired
    private CityRepository cityRepository;

    @Override
    public List<City> findAll() {
        return cityRepository.findAll();
    }

    @Override
    public City findById(Integer id) {
        return cityRepository.findById(id).orElse(null);
    }
}
