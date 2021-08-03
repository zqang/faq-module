package com.alvin.intern.project.dao;

import com.alvin.intern.project.model.Category;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CategoryDao extends CrudRepository<Category, Long> {
    Category save(Category category);

    List<Category> findAll();

    Optional<Category> findById(Long id);

    void deleteById(Long id);
}
