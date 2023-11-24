package com.bloomtech.services;

import com.bloomtech.entities.Hello;
import com.bloomtech.repositories.HelloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HelloService {

    @Autowired
    HelloRepository helloRepository;
    public String greeter() {
        return "Hello from the greeter";
    }

    public List<Hello> greeters() {
        return helloRepository.findAll();
    }
}
