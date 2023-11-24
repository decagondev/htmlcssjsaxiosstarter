package com.bloomtech.controllers;


import com.bloomtech.entities.Contact;
import com.bloomtech.repositories.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/contacts")
@CrossOrigin(origins="*")
public class ContactController {

    @Autowired
    ContactRepository contactRepo;

    @PostMapping
    public Contact save(@RequestBody Contact contact) { return contactRepo.save(contact); }

    @GetMapping("{id}")
    public Contact findById(@PathVariable(value = "id") String id) {
        return contactRepo.findById(id);
    }

    @GetMapping
    public List<Contact> findAll() {return contactRepo.findAll(); }

    @PutMapping("{id}")
    public String update(@PathVariable( value = "id") String id, @RequestBody Contact contact) {
        return contactRepo.update(id, contact);
    }

    @DeleteMapping("{id}")
    public String update(@PathVariable( value = "id") String id) {
        return contactRepo.delete(id);
    }
}