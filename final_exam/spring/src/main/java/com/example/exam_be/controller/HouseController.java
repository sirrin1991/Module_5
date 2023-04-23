package com.example.exam_be.controller;

import com.example.exam_be.model.dto.HouseDto;
import com.example.exam_be.model.entity.Category;
import com.example.exam_be.model.entity.City;
import com.example.exam_be.model.entity.House;
import com.example.exam_be.service.CategoryService;
import com.example.exam_be.service.CityService;
import com.example.exam_be.service.HouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/house")
@CrossOrigin(origins = "http://localhost:4200/")
public class HouseController {
    @Autowired
    private HouseService houseService;
    @Autowired
    private CategoryService categoryService;
    @Autowired
    private CityService cityService;

    @GetMapping
    public ResponseEntity<List<HouseDto>> showHouseList() {
        List<House> houseList = houseService.findAll();
        List<HouseDto> houseDtoList = new ArrayList<>();
        for (House h : houseList) {
            HouseDto houseDto = new HouseDto();
            houseDto.setId(h.getId());
            houseDto.setTitle(h.getTitle());
            houseDto.setCategory(h.getCategory().getId());
            houseDto.setDateOfPost(h.getDateOfPost());
            houseDto.setPost(h.getPost());
            houseDto.setStatus(h.getStatus());
            houseDtoList.add(houseDto);
        }
        return new ResponseEntity<>(houseDtoList, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<House> createHouse(@RequestBody House house) {
        houseService.save(house);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<HouseDto> getHouseById(@PathVariable Long id) {
        House house = this.houseService.findById(id);
        HouseDto houseDto = new HouseDto();
        if (house != null) {
            houseDto.setId(house.getId());
            houseDto.setTitle(house.getTitle());
            houseDto.setPost(house.getPost());
            houseDto.setCategory(house.getCategory().getId());
            houseDto.setDateOfPost(house.getDateOfPost());
            houseDto.setStatus(house.getStatus());
            houseDto.setAddress(house.getAddress());
            houseDto.setDirection(house.getDirection());
            houseDto.setArea(house.getArea());
            houseDto.setContent(house.getContent());
            houseDto.setPrice(house.getPrice());
            houseDto.setCity(house.getCity().getId());
            return new ResponseEntity<>(houseDto, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping("/{id}")
    public void updateHouse(@PathVariable Long id, @RequestBody HouseDto houseDto) {
        Integer categoryId = houseDto.getCategory();
        Integer cityId = houseDto.getCity();
        Category category = categoryService.findById(categoryId);
        City city = cityService.findById(cityId);
        House house = houseService.findById(id);
        house.setDateOfPost(houseDto.getDateOfPost());
        house.setPost(houseDto.getPost());
        house.setStatus(houseDto.getStatus());
        house.setAddress(houseDto.getAddress());
        house.setArea(houseDto.getArea());
        house.setDirection(houseDto.getDirection());
        house.setTitle(houseDto.getTitle());
        house.setContent(houseDto.getContent());
        house.setPrice(houseDto.getPrice());
        house.setCity(city);
        house.setCategory(category);
        System.out.println(house.toString());
        houseService.save(house);
    }

    @DeleteMapping("/{id}")
    public void deleteHouse(@PathVariable Long id){
        houseService.deleteById(id);
    }

}
