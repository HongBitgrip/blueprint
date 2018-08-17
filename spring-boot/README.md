CoreMedia Blueprint Applications
================================

This workspace provides Maven modules to build Spring Boot applications
for Blueprint applications. 

## Prerequisites
Before you can build this workspace, you have to build the [CoreMedia Blueprints Workspace](https://github.com/coremedia-contributions/coremedia-blueprints-workspace) in advance.

If this workspace is intended for use with the [CoreMedia Docker Deployment Workspace](https://github.com/coremedia-contributions/coremedia-deployment-docker), it is recommended, that you check out the workspaces with the following file structure:
```
<some root dir>
      |- blueprint (CoreMedia Blueprints Workspace)
      |- applications (this workspace)
      `- deployment (CoreMedia Docker Deployment Workspace)
```
> It is a good pattern, to aggregate all workspaces in one aggregating Git repository using Git submodules. In that 
> case, you can outfit that repository with an aggregating `pom.xml` to build all 
> workspaces in one Maven run with maximum parallelism. 


Workspace Structure
-------------------
* `services` - below this folder there is a Maven module for each service
application. Each of these modules will build a single Spring Boot application
packaged as a JAR file.

* `blueprint-spring-boot-autoconfigure` - this module encapsulates common
 configuration aspects for all Spring Boot service modules.

Application Structure
---------------------
Each Spring Boot application module is structured the same way:
* A source folder containing at least the application starter class. It
could also contain other classes implementing Spring configuration classes.
* A resources folder containing the application property files.

> Note that the CoreMedia system property `propertieslocations` does not work anymore with Spring Boot.
> To load properties from a different location use the Spring Boot property `spring.config.location`.

Quickstart
----------------------------------------
### Build the Workspace
Build the modules with:

        mvn clean install
        
###Start the Applications locally with Maven

To start an application with Maven to run all services locally use:

        mvn spring-boot:run

To use a remote backend system for databases, content repositories and search engine, use:

        mvn spring-boot:run -Dinstallation.host=<remote backend system>

When you configure `installation.host` using a profile in your `settings.xml` file or in any `pom.xml` file, make sure to activate the
`dev` Maven profile on the command line. If `-Dinstallation.host` is given on the command line, the profile is activated implicitly.

As familiar from starting `-webapp` modules locally, you can not only configure the location of remote services globally but also
configure which applications are residing where using the following Maven properties:

* `content-management-server.host`
* `workflow-server.host`
* `master-live-server.host`
* `cae-preview.host`
* `cae-live.host`
* `db.host`
* `mongoDb.host`
* `solr.host`
* `wcs.host`
* `hybris.host`
* `livecontext.sfcc.host`

> It may also be noted, that using the configuration indirection from `../blueprint/workspace-configuration/development-properties` is under
> review for the Spring Boot applications and we would like to replace it with a configuration a per service module level using Spring profile
> application property files.

