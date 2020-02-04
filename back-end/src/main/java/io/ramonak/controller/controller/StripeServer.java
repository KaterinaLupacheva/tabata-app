package io.ramonak.controller.controller;

import com.google.gson.Gson;
import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StripeServer {
    private static Gson gson = new Gson();

    Dotenv dotenv = Dotenv.load();

    @GetMapping("/public-key")
    public String getPublicKey() {
        return dotenv.get("STRIPE_PUBLISHABLE_KEY");
    }
}
