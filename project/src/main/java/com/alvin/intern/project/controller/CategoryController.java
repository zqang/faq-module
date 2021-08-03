package com.alvin.intern.project.controller;

import com.alvin.intern.project.model.Category;
import com.alvin.intern.project.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins= "http://localhost:4200")
@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/categories")
    private List<Category> getAllCategories(){
        return categoryService.getAllCategory();
    }

    @GetMapping("/category/{categoryid}")
    private Optional<Category> getCategory(@PathVariable("categoryid")Long categoryid){
        return categoryService.getCategoryById(categoryid);
    }

    @DeleteMapping("/category/{categoryid}")
    private void deleteCategory(@PathVariable("categoryid")Long categoryid){
        categoryService.delete(categoryid);
    }

    @PostMapping("/add_categories")
    private Category saveCategory(@RequestBody Category category){
        categoryService.save(category);
        return category;
    }

    @PutMapping("/category/{categoryid}")
    private Category updateCategory(@RequestBody Category category){
        categoryService.save(category);
        return category;
    }


}
