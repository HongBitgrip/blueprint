package com.coremedia.blueprint.boot.autoconfigure;

import org.apache.catalina.WebResourceRoot;
import org.apache.catalina.webresources.StandardRoot;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.boot.context.embedded.tomcat.TomcatContextCustomizer;
import org.springframework.boot.context.embedded.tomcat.TomcatEmbeddedServletContainerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * This configuration class can be used to add directories outside of the maven module/spring-boot jar at runtime
 */
@Configuration
@ConditionalOnClass({WebResourceRoot.class})
public class DevelopmentResourcesConfiguration {

  @Bean
  @ConditionalOnProperty(name = "spring.boot.tomcat.extraResources")
  EmbeddedServletContainerCustomizer developmentResourcesConfigurer(@Value("${spring.boot.tomcat.extraResources:}") final String[] extraResources) {
    return container -> {
      if (container instanceof TomcatEmbeddedServletContainerFactory) {
        TomcatEmbeddedServletContainerFactory containerFactory = (TomcatEmbeddedServletContainerFactory) container;
        containerFactory.addContextCustomizers((TomcatContextCustomizer) context -> {
          WebResourceRoot resources = context.getResources();
          if (null == resources) {
            resources = new StandardRoot();
            context.setResources(resources);
          }
          for (String dir : extraResources) {
            resources.createWebResourceSet(WebResourceRoot.ResourceSetType.PRE, "/", dir, null, "/");
          }
        });
      }
    };
  }

}
