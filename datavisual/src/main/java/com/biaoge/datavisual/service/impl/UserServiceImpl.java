package com.biaoge.datavisual.service.impl;

import com.biaoge.datavisual.entity.User;
import com.biaoge.datavisual.mapper.UserMapper;
import com.biaoge.datavisual.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public List<User> getAllUsers() {
        return null;
    }

    @Override
    public User getUserById(Long id) {
        return null;
    }

    @Override
    public List<User> getUsersByName(String name) {
        return null;
    }

    @Override
    public Integer addUser(User user) {
        return userMapper.addUser(user);
    }

    @Override
    public User getUserByUserName(String username) {
        return userMapper.getUserByUserName(username);
    }

    @Override
    public Integer updateUserImgByUsername(User user) {
        return userMapper.updateUserImgByUsername(user);
    }

    @Override
    public Integer updateUserById(User user) {
        return null;
    }

    @Override
    public Integer deleteUserById(Integer id) {
        return null;
    }
}
