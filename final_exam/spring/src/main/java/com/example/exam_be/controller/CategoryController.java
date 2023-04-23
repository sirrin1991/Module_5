package com.example.exam_be.controller;

import com.example.exam_be.model.dto.CategoryDto;
import com.example.exam_be.model.entity.Category;
import com.example.exam_be.service.CategoryService;
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
@RequestMapping("/categoryList")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @GetMapping
    public ResponseEntity<List<CategoryDto>> showCategoryList(){
        List<Category> categoryList = categoryService.findAll();
        List<CategoryDto> list = new ArrayList<>();
        for(Category c : categoryList){
            CategoryDto categoryDto = new CategoryDto();
            categoryDto.setId(c.getId());
            categoryDto.setName(c.getName());
            list.add(categoryDto);
        }
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
}
