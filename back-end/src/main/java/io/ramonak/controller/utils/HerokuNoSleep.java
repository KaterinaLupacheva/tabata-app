package io.ramonak.controller.utils;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.client.RestTemplate;

public class HerokuNoSleep {

    @Scheduled(fixedRate = 29000)
    public void herokuNoSleep() {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.getForObject("https://tabata-backend.herokuapp.com/exercises", Object.class);
    }
}
