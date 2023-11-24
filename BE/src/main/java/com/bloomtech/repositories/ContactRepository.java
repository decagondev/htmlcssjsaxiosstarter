package com.bloomtech.repositories;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBSaveExpression;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue;
import com.bloomtech.entities.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ContactRepository {

    @Autowired
    private DynamoDBMapper mapper;

    // Create
    public Contact save(Contact contact) {
        mapper.save(contact);
        return contact;
    }

    // Read
    public Contact findById(String id) { return mapper.load(Contact.class, id);}

    public List<Contact> findAll() { return mapper.scan(Contact.class, new DynamoDBScanExpression()); }

    // Update
    public String update(String id, Contact Contact) {
        mapper.save(Contact, new DynamoDBSaveExpression()
                .withExpectedEntry("id", new ExpectedAttributeValue(
                        new AttributeValue().withS(id)
                )));

        return "Successfully Updated Contact: " + id;
    }

    // Delete
    public String delete(String id) {
        Contact contact = mapper.load(Contact.class, id);
        mapper.delete(contact);
        return "Successfully deleted Contact: " + id;
    }
}

