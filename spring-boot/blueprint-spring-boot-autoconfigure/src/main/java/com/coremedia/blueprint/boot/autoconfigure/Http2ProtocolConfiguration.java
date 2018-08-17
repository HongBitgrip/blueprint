package com.coremedia.blueprint.boot.autoconfigure;

import org.apache.coyote.http2.Http2Protocol;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.boot.context.embedded.tomcat.TomcatEmbeddedServletContainerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * This configuration class enables the HTTP2 unencrypted (h2c) protocol
 * Currently traefik does not support HTTP2 h2c offloading only h2 is supported and that can be configured using
 * the spring-boot property server.http2.enabled. See https://github.com/containous/traefik/issues/2139
 * <p>
 * Do not use this in production yet
 */
@Configuration
@ConditionalOnClass({Http2Protocol.class})
public class Http2ProtocolConfiguration {

  @Bean
  @ConditionalOnProperty(name = "spring.boot.tomcat.h2c", havingValue = "true")
  public EmbeddedServletContainerCustomizer tomcatCustomizer() {
    return (container) -> {
      if (container instanceof TomcatEmbeddedServletContainerFactory) {
        ((TomcatEmbeddedServletContainerFactory) container)
                .addConnectorCustomizers((connector) -> {
                  connector.addUpgradeProtocol(new Http2Protocol());
                });
      }
    };
  }
}
