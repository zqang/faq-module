package com.alvin.intern.project.model;

import javax.persistence.*;

@Entity
public class Qna {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "qna_seq")
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "question", nullable = false)
    private String Question;

    @Column(name = "answer", nullable = false)
    private String Answer;

    public Long getId() {return id;}
    public void setId(Long id) {this.id = id;}

    public String getQuestion() {return Question;}
    public void setQuestion(String question) {Question = question;}

    public String getAnswer() {return Answer;}
    public void setAnswer(String answer) {Answer = answer;}
}
