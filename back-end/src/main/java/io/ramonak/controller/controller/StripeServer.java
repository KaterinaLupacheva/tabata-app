package io.ramonak.controller.controller;

import com.google.gson.Gson;
import com.google.gson.annotations.SerializedName;
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

    static class ProductDetails {
        @SerializedName("amount")
        Long amount;

        @SerializedName("currency")
        String currency;

        public String getCurrency() {
            return currency;
        }

        public Long getAmount() {
            return amount;
        }
    }

    private static ProductDetails getProductDetails() {
        ProductDetails details = new ProductDetails();
        details.amount = (long) 1990;
        details.currency = "USD";
        return details;
    }

    @GetMapping("/public-key")
    public String getPublicKey() {
        Map<String, Object> responseData = new HashMap<>();
        responseData.put("publicKey", dotenv.get("STRIPE_PUBLISHABLE_KEY"));
        return gson.toJson(responseData);
    }

    @GetMapping("/product-details")
    public String getProductDetailsApi() {
        ProductDetails productDetails = getProductDetails();
        return gson.toJson(productDetails);
    }
}
