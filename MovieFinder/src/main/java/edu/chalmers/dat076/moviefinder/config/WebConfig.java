/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.chalmers.dat076.moviefinder.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

/**
 * Configuration class for the "web" portion of the application.
 */
@Configuration
@EnableWebMvc
@ComponentScan(basePackages = { "edu.chalmers.dat076.moviefinder.controller", "edu.chalmers.dat076.moviefinder.filter" })
public class WebConfig extends WebMvcConfigurerAdapter {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {

        // GET requests for /build/** are served static files from /build/
        registry.addResourceHandler("/build/**")
                .addResourceLocations("/build/")
                .setCachePeriod(31556926);

        // TODO: The following two routes are only needed for index-dev
        // Used for direct references instead of having to build whenever
        // a file changes.
        registry.addResourceHandler("/public/**")
                .addResourceLocations("/public/");
        registry.addResourceHandler("/partials/**")
                .addResourceLocations("/public/partials/");

        super.addResourceHandlers(registry);
    }

    @Bean
    InternalResourceViewResolver setViewResolver() {
        InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
        viewResolver.setPrefix("/WEB-INF/views/");
        viewResolver.setSuffix(".jsp");
        return viewResolver;
    }
}