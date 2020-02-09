package io.ramonak.controller.controller;

import com.google.gson.Gson;
import com.google.gson.annotations.SerializedName;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
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

    static class CreatePaymentBody {
        @SerializedName("payment_method_types")
        String payment_method_types;

        public String getPaymentMethod() {
            return payment_method_types;
        }
    }

    private static ProductDetails getProductDetails() {
        ProductDetails details = new ProductDetails();
        details.amount = (long) 199;
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

    @PostMapping("/create-payment-intent")
    public String createPaymentIntent(@RequestBody Map<String, Object> request) {
        Stripe.apiKey = dotenv.get("STRIPE_SECRET_KEY");
        ProductDetails productDetails = getProductDetails();
        CreatePaymentBody postBody = new CreatePaymentBody();
        postBody.payment_method_types = request.get("payment_method_types").toString();
//        CreatePaymentBody postBody = gson.fromJson(request.getBody(), CreatePaymentBody.class);

        List<Object> paymentMethodTypes =
                new ArrayList<>();
        paymentMethodTypes.add(postBody.getPaymentMethod());
        Map<String, Object> params = new HashMap<>();
        params.put("amount", productDetails.getAmount());
        params.put("currency", productDetails.getCurrency());
        params.put(
                "payment_method_types",
                paymentMethodTypes
        );

//        PaymentIntentCreateParams createParams = new PaymentIntentCreateParams.Builder()
//                .setCurrency(productDetails.getCurrency()).setAmount(productDetails.getAmount())
//                .setPaymentMethod(postBody.getPaymentMethod()).build();
        PaymentIntent intent = null;
        try {
            intent = PaymentIntent.create(params);
        } catch (StripeException e) {
            e.printStackTrace();
        }
        return gson.toJson(intent);
    }
}
