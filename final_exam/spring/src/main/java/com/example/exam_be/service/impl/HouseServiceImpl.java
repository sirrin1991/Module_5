package com.example.exam_be.service.impl;

import com.example.exam_be.model.entity.House;
import com.example.exam_be.repository.HouseRepository;
import com.example.exam_be.service.HouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HouseServiceImpl implements HouseService {
    @Autowired
    private HouseRepository houseRepository;
    @Override
    public List<House> findAll() {
        return houseRepository.findAll();
    }

    @Override
    public void save(House house) {
        houseRepository.save(house);
    }

    @Override
    public House findById(Long id) {
        return houseRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteById(Long id) {
        houseRepository.deleteById(id);
    }
}
