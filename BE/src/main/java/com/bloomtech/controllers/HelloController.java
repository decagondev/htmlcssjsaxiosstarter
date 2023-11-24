package com.bloomtech.controllers;

import com.bloomtech.entities.Hello;
import com.bloomtech.services.HelloService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/hello")
public class HelloController {

    @Autowired
    HelloService helloService;

    @GetMapping
    public String greeting() {
        return helloService.greeter();
    }

    @GetMapping("/all")
    public List<Hello> greetings() {
        return helloService.greeters();
    }

    @GetMapping("/goodbye")
    public String byebye() {
        return "Goodbye from Spring Boot";
    }
}
