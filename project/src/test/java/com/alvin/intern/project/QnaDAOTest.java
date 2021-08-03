package com.alvin.intern.project;

import com.alvin.intern.project.model.Qna;
import org.junit.Test;
import org.junit.jupiter.api.*;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertTrue;


public class QnaDAOTest {
    private FaqDAO dao;

    @BeforeEach
    void setUp() throws Exception{
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setUrl("jdbc:oracle:thin:@localhost:1521:xe");
        dataSource.setUsername("system");
        dataSource.setPassword("alvin");
        dataSource.setDriverClassName("oracle.jdbc.OracleDriver");

        dao = new FaqDAO(new JdbcTemplate(dataSource));

    }

    @Test
    void testList(){
        List<Qna> listQna = dao.list();

        assertTrue(listQna.isEmpty());
    }
}
