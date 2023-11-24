package com.bloomtech.repositories;

import com.bloomtech.entities.Hello;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class HelloRepository {

    public List<Hello> findAll() {
        List<Hello> hellos = new ArrayList<Hello>();

        hellos.add(new Hello("1", "Joey", "How You doin!"));
        hellos.add(new Hello("2", "Bob", "How Are you doin!"));
        hellos.add(new Hello("3", "Steve", "Howz u?"));
        hellos.add(new Hello("4", "Mike", "hmmmmm?!?!!"));

        return hellos;
    }


}
