package com.thoughtworks.aceleradora.controller;

import com.thoughtworks.aceleradora.domain.Encoding;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/encode")
public class EncodingController {

    @GetMapping
    public Encoding encode(@RequestParam String value) {
        Encoding encoding = Encoding.of(value);
        System.out.println(encoding);
        return encoding;
    }

}
