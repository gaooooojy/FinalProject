package com.biaoge.datavisual.service;

import com.biaoge.datavisual.entity.User;
import java.util.List;

public interface UserService {
    List<User> getAllUsers();
    User getUserById(Long id);
    List<User> getUsersByName(String name);
    Integer addUser(User user);
    User getUserByUserName(String username);
    Integer updateUserImgByUsername(User user);
    Integer updateUserById(User user);
    Integer deleteUserById(Integer id);
}
