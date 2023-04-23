package com.example.exam_be.service;

import com.example.exam_be.model.entity.Category;

import java.util.List;

public interface CategoryService {
    List<Category> findAll();
    Category findById(Integer id);
}
