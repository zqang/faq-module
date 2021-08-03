package com.alvin.intern.project.service.impl;

import com.alvin.intern.project.dao.CategoryDao;
import com.alvin.intern.project.model.Category;
import com.alvin.intern.project.model.Qna;
import com.alvin.intern.project.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CategoryDao categoryDao;

    @Override
    public void save(Category category) {
        categoryDao.save(category);
    }

    @Override
    public List<Category> getAllCategory() {
        return categoryDao.findAll();
    }

    @Override
    public Optional<Category> getCategoryById(Long id) {
        return categoryDao.findById(id);
    }

    @Override
    public void delete(Long id) {
        categoryDao.deleteById(id);
    }

}
