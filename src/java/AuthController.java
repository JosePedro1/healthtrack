package com.healthtrack.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class AuthController {

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping("/register")
    public String register() {
        return "register";
    }

    @PostMapping("/login")
    public String loginSubmit(String email, String password, Model model) {
        return "login";
    }

    @PostMapping("/register")
    public String registerSubmit(String name, String email, String password, Model model) {

        return "register";
    }
}
