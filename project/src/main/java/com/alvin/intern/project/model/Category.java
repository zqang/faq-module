package com.alvin.intern.project.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;

@Entity
public class Category {

    @Id
    @Column(name = "category_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "category_seq")
    private Long categoryId;

    @Column(name = "name", nullable = false)
    private String name;

    @OneToMany(targetEntity = Qna.class, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "cq_fk", referencedColumnName = "category_id")
    private List<Qna> qnaList;

    public Long getCategoryId() {return categoryId;}
    public void setCategoryId(Long categoryId) {this.categoryId = categoryId;}

    public String getName() {return name;}
    public void setName(String name) {this.name = name;}

    public List<Qna> getQnaList() {return qnaList;}
    public void setQnaList(List<Qna> qnaList) {this.qnaList = qnaList;}
}
