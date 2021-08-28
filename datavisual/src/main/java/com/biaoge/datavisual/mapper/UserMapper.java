package com.biaoge.datavisual.mapper;

import com.biaoge.datavisual.entity.User;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface UserMapper {

    @Select("select * from t_user")
    List<User> getAllUsers();

    @Results({
            @Result(property = "id", column = "id"),
            @Result(property = "username", column = "u"),
            @Result(property = "password", column = "p")
    })
    @Select("select username as u,password as p,id as id from t_user where id=#{id}")
    User getUserById(Long id);

    @Results({
            @Result(property = "id", column = "id"),
            @Result(property = "username", column = "u"),
            @Result(property = "password", column = "p"),
            @Result(property = "img", column = "i"),
    })
    @Select("select username as u,password as p,id as id,img as i from t_user where username=#{username}")
    User getUserByUserName(String username);

    @Select("select * from t_user where username like concat('%',#{name},'%')")
    List<User> getUsersByName(String name);

    @Insert({"insert into t_user(username,password) values(#{username},#{password})"})
    @SelectKey(statement = "select last_insert_id()", keyProperty = "id", before = false, resultType = Integer.class)
    Integer addUser(User user);

    @Update("update t_user set username=#{username},address=#{address} where id=#{id}")
    Integer updateUserById(User user);

    @Update("update t_user set img=#{img} where username=#{username}")
    Integer updateUserImgByUsername(User user);

    @Delete("delete from t_user where id=#{id}")
    Integer deleteUserById(Integer id);
}
