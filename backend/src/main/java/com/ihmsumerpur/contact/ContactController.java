package com.ihmsumerpur.contact;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/contact")
public class ContactController {
    @Autowired
    private ContactRepository contactRepository;

    @GetMapping
    public List<ContactForm> getAllContacts() {
        return contactRepository.findAll();
    }

    @PostMapping
    public ContactForm createContact(@RequestBody ContactForm contactForm) {
        return contactRepository.save(contactForm);
    }
}
