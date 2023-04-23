package com.example.exam_be.controller;

import com.example.exam_be.model.dto.CityDto;
import com.example.exam_be.model.entity.City;
import com.example.exam_be.repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("/cityList")
public class CityController {
    @Autowired
    private CityRepository cityRepository;

    @GetMapping
    public ResponseEntity<List<CityDto>> showCityList(){
        List<City> cityList = cityRepository.findAll();
        List<CityDto> cityDtoList = new ArrayList<>();
        for(City c : cityList){
            CityDto cityDto = new CityDto();
            cityDto.setId(c.getId());
            cityDto.setName(c.getName());
            cityDtoList.add(cityDto);
        }
        return new ResponseEntity<>(cityDtoList, HttpStatus.OK);
    }
}
