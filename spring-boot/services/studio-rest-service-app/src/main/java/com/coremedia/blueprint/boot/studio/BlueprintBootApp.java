package com.coremedia.blueprint.boot.studio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.SecurityFilterAutoConfiguration;

/**
 * we need to exclude the autoconfiguration for the default springSecurityFilterChain to enable ours
 */
@SpringBootApplication(exclude = { SecurityFilterAutoConfiguration.class })
public class BlueprintBootApp {

  // ... Bean definitions
  public static void main(String[] args) throws Exception {
    SpringApplication.run(BlueprintBootApp.class, args);
  }
}
