<#-- @ftlvariable name="self" type="com.coremedia.blueprint.cae.action.webflow.WebflowActionState" -->
<#-- @ftlvariable name="flowRequestContext" type="org.springframework.webflow.execution.RequestContext" -->

<#import "../../freemarkerLibs/elastic-social.ftl" as elasticSocial />

<div class="container">
  <div class="row">
    <div class="cm-form cm-form--failure col-xs-12 col-md-8 col-md-push-2"<@preview.metadata data=[self.action.content!"", "properties.id"]/>>
      <#if flowRequestContext?has_content && flowRequestContext.messageContext?has_content>
        <#list flowRequestContext.messageContext.allMessages![] as message>
          <@elasticSocial.notification type="error" title=bp.getMessage("activateRegistration_failure_title") text=message.text!"" additionalClasses=["alert alert-danger"] />
        </#list>
      </#if>
    </div>
  </div>
</div>
