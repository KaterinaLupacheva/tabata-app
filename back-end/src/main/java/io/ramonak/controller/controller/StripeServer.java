package io.ramonak.controller.controller;

import com.google.gson.Gson;
import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin
public class StripeServer {
    private static Gson gson = new Gson();

    Dotenv dotenv = Dotenv.load();

    @GetMapping("/public-key")
    public String getPublicKey() {
        Map<String, Object> responseData = new HashMap<>();
        responseData.put("publicKey", dotenv.get("STRIPE_PUBLISHABLE_KEY"));
        return gson.toJson(responseData);
    }
}
