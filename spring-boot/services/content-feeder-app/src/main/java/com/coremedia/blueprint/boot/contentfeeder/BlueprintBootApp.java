package com.coremedia.blueprint.boot.contentfeeder;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.JdbcTemplateAutoConfiguration;

@SpringBootApplication
public class BlueprintBootApp {

  // ... Bean definitions
  public static void main(String[] args) throws Exception {
    SpringApplication.run(BlueprintBootApp.class, args);
  }
}
