package com.biaoge.datavisual.controller;

import com.alibaba.fastjson.JSON;
import com.biaoge.datavisual.entity.User;
import com.biaoge.datavisual.service.UserService;
import com.mysql.cj.util.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/hello")
    public String hello() {
        Map<String, String> result = new HashMap<>();
        result.put("code", "200");
        result.put("msg", "hello");
        return JSON.toJSONString(result);
    }

    @PostMapping("/addUser")
    public String addUser(@RequestBody User user) {
        User newUser = new User();
        newUser.setUsername(user.getUsername());
        newUser.setPassword(user.getPassword());

        Map<String, String> result = new HashMap<>();

        try {
            userService.addUser(newUser);
            result.put("code", "200");
            result.put("msg", "注册成功");
        } catch (Exception e) {
            result.put("code", "100");
            result.put("msg", "注册失败");
        }

        return JSON.toJSONString(result);
    }

    @PostMapping("/mark")
    public String mark(@RequestBody User user) {
        Map<String, String> result = new HashMap<>();

        try {
            User dbUser = userService.getUserByUserName(user.getUsername());

            if (StringUtils.isNullOrEmpty(dbUser.getImg())) {
                dbUser.setImg(user.getImg());
            } else {
                dbUser.setImg(dbUser.getImg() + ";" + user.getImg());
            }

            userService.updateUserImgByUsername(dbUser);
            result.put("code", "200");
            result.put("msg", "mark成功");
        } catch (Exception e) {
            result.put("code", "100");
            result.put("msg", "mark失败");
        }

        return JSON.toJSONString(result);
    }

    @PostMapping("/unmark")
    public String unmark(@RequestBody User user) {
        Map<String, String> result = new HashMap<>();

        try {
            User dbUser = userService.getUserByUserName(user.getUsername());

            if (StringUtils.isNullOrEmpty(dbUser.getImg())) {
                System.out.println("### do nothing");
            } else {
                findUnmarkImgDel(user.getImg(), dbUser);
            }

            userService.updateUserImgByUsername(dbUser);
            result.put("code", "200");
            result.put("msg", "unmark成功");
        } catch (Exception e) {
            result.put("code", "100");
            result.put("msg", "unmark失败");
        }

        return JSON.toJSONString(result);
    }

    @PostMapping("/queryAllImgs")
    public String queryAllImgs(@RequestBody User user) {
        Map<String, String> result = new HashMap<>();

        try {
            User dbUser = userService.getUserByUserName(user.getUsername());
            result.put("code", "200");
            result.put("msg", "查询成功");
            result.put("data", dbUser.getImg());
        } catch (Exception e) {
            result.put("code", "100");
            result.put("msg", "query失败");
        }

        return JSON.toJSONString(result);
    }

    private void findUnmarkImgDel(String stargetImg, User dbUser) {
        String imgs = dbUser.getImg();
        String[] imgStrs = imgs.split(";");

        StringBuffer tempStr = new StringBuffer();

        for (int i = 0; i < imgStrs.length; i++) {
            if (stargetImg.equals(imgStrs[i])) {
                continue;
            }

            if (i != imgStrs.length - 1) {
                tempStr.append(imgStrs[i]).append(";");
            } else {
                tempStr.append(imgStrs[i]);
            }
        }


        tempStr.substring(0, tempStr.length() - 1);

        dbUser.setImg(String.valueOf(tempStr));
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        Map<String, String> result = new HashMap<>();

        try {
            User dbUser = userService.getUserByUserName(user.getUsername());

            if (user.getPassword().equals(dbUser.getPassword())) {
                result.put("code", "200");
                result.put("msg", "登录成功");
            } else {
                result.put("code", "100");
                result.put("msg", "登录失败");
            }

        } catch (Exception e) {
            result.put("code", "100");
            result.put("msg", "登录失败");
        }

        return JSON.toJSONString(result);
    }

    public static void main(String[] args) {
        String str = "line";
        String[] split = str.split(";");
        String tempStr = "";

        for (String s : split) {
            if (!StringUtils.isNullOrEmpty(s) ) {
                tempStr += s + ";";
            }
        }
        System.out.println(tempStr);
    }
}
