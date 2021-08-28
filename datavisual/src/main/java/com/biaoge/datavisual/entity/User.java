package com.biaoge.datavisual.entity;

import lombok.Data;
import java.io.Serializable;

@Data
public class User implements Serializable {

    private static final long serialVersionUID = -5514139686858156155L;

    private Integer id;
    private String username;
    private String password;
    private String img;
}
