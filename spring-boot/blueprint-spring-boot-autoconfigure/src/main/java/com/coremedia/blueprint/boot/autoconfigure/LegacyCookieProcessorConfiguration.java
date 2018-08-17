package com.coremedia.blueprint.boot.autoconfigure;

import org.apache.tomcat.util.http.LegacyCookieProcessor;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.boot.context.embedded.tomcat.TomcatEmbeddedServletContainerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConditionalOnClass({LegacyCookieProcessor.class})
public class LegacyCookieProcessorConfiguration {

  @Bean
  public EmbeddedServletContainerCustomizer customizer() {
    return container -> {
      if (container instanceof TomcatEmbeddedServletContainerFactory) {
        TomcatEmbeddedServletContainerFactory tomcat = (TomcatEmbeddedServletContainerFactory) container;
        tomcat.addContextCustomizers(context -> context.setCookieProcessor(new LegacyCookieProcessor()));
      }
    };
  }
}
