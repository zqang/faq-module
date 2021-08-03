package com.alvin.intern.project.service;

import com.alvin.intern.project.model.Category;
import com.alvin.intern.project.model.Qna;

import java.util.List;
import java.util.Optional;

public interface CategoryService {
    void save(Category category);

    List<Category> getAllCategory();

    Optional<Category> getCategoryById(Long id);

    void delete(Long id);

}
