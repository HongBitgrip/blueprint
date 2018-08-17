CHANGELOG
=========

This file will inform you about changes that are applied to this workspace.
Since it is a source repository, changes will be applied not only
at release but continuously. The latter changes can be found below the `NEXT` section.

## spring-boot-1.5

* Update Apache Tomcat to `8.5.32`
* The conditional annotation for upgrading to HTTP2 has been changed to be only active if
  `spring.boot.tomcat.h2c` evaluates to `true`. HTTP2 will only work if the proxy supports h2c protocol.

Compatibility

This version is compatible with CoreMedia Blueprints Workspace `1804` and `1807`

## 1804.2

* Update Apache Tomcat to `8.5.31`
* A common library named `blueprint-spring-boot-autoconfigure` has been added for all CoreMedia services. At the start the library contains:
    * an [autoconfiguration class](./blueprint-spring-boot-autoconfigure/src/main/java/com/coremedia/blueprint/boot/autoconfigure/DefaultPropertiesConfiguration.java)
     to load common default [application properties](./blueprint-spring-boot-autoconfigure/src/main/resources/com/coremedia/blueprint/boot/autoconfigure/default.properties).
    * an [autoconfiguration class](./blueprint-spring-boot-autoconfigure/src/main/java/com/coremedia/blueprint/boot/autoconfigure/DevPropertiesConfiguration.java)
      to load common `dev` profile [application properties](./blueprint-spring-boot-autoconfigure/src/main/resources/com/coremedia/blueprint/boot/autoconfigure/dev.properties).
    * a common [`logback-spring.xml`](./blueprint-spring-boot-autoconfigure/src/main/resources/logback-spring.xml) to add a
      central configuration for additional appenders. By default an log aggregation appender for elastic search is added.
* As a result of this common module, all `application-local.properties` and all `application-dev.properties` have been removed. The profiles
  though are still in place and if needed be, you can add `application-<profile>.properties` to override or add properties.

> Be aware, that you cannot define CoreMedia compoonent properties in the common property files as it cannot be assured, that they will be
> loaded with higher precendence than the component ones.

* The configuration classes from `tomcat8-component` have been moved to the new `blueprint-spring-boot-autoconfigure` module.

* Healthchecks have been added to the `health` actuator for:
    * UAPI repository availability
    * Solr connection for content search
    * Solr connection for elastic core
    * MongoDB connection
    * DB connection (only CAE Feeder are supported by now)
    * UAPI BlobCache disk space. Threshold can be configured using the property `management.health.blobCacheDiskspace.threshold`
    * Transformed BlobCache disk space. Threshold can be configured using the property `management.health.transformedBlobCacheDiskspace.threshold`
  Please see [HealthIndicatorAutoconfiguration](./blueprint-spring-boot-autoconfigure/src/main/java/com/coremedia/blueprint/boot/autoconfigure/HealthIndicatorAutoconfiguration.java)
  for more information.

  To disable a healthcheck use the corresponding property:

    * `management.health.db.enabled`
    * `management.health.contentRepository.enabled`
    * `management.health.mongoDb.enabled`
    * `management.health.elasticSolr.enabled`
    * `management.health.contentSolr.enabled`
    * `management.health.blobCacheDiskSpace.enabled`
    * `management.health.transformedBlobCacheDiskSpace.enabled`

#### Compatibility

This release should be compatible with the Blueprints Workspace `1801.4` but requires the `1804.1` tagged version of the Spring Boot Applications workspace.


## 1804.1

Intital Release
