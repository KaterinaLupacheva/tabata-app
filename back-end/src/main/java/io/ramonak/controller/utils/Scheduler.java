package io.ramonak.controller.utils;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;

@Configuration
@EnableScheduling
public class Scheduler {

    @Bean
    public HerokuNoSleep herokuNoSleep() {
        return new HerokuNoSleep();
    }
}
