package com.thoughtworks.aceleradora.repositorio;

import com.thoughtworks.aceleradora.dominio.User;
import org.junit.Assert;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

public class UserRepositoryTest {
    @Test
    public void shouldReturnOKIfISaveAValidUser(){

        User user = new User("Lucilaine", "Lucilaine@email.com");
        UserRepository userRepository = new UserRepository();
        List<User> users = userRepository.addUser(user);

        User userResult
                = users.get(0);
        Assert.assertEquals(userResult.getName(), user.getName());
        Assert.assertEquals(userResult.getEmail(), user.getEmail());
    }
}
