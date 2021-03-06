<#-- @ftlvariable name="self" type="com.coremedia.blueprint.common.contentbeans.CMCSS" -->

<#--
    Template Description:

    This template is used for CSS files if
    - ieExpression (conditional comments for IE) is set
    - css includes an external css file
    - cae.use.local.resources and/or cae.developer.mode are set to true
    Otherwise MergableResources.asCSSLink.ftl is used.
-->

<#assign cssLink=cm.getLink(self)/>

<#if self.ieExpression?has_content>
  <!--[if ${self.ieExpression}]><link rel="stylesheet" href="${cssLink}"<@preview.metadata self.content />><![endif]-->
<#else>
  <link rel="stylesheet" href="${cssLink}"<@preview.metadata self.content />>
</#if>
