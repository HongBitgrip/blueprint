package com.coremedia.blueprint.boot.contentmanagementserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

/**
 * we need to exclude some autoconfigurations:
 * - the datasource autoconfiguration
 */
@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class BlueprintBootApp {

  // ... Bean definitions
  public static void main(String[] args) throws Exception {
    SpringApplication.run(BlueprintBootApp.class, args);
  }
}
