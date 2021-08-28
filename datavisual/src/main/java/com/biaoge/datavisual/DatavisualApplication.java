package com.biaoge.datavisual;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan("com.biaoge.datavisual.mapper")
@SpringBootApplication
public class DatavisualApplication {

    public static void main(String[] args) {
        SpringApplication.run(DatavisualApplication.class, args);
    }

}
