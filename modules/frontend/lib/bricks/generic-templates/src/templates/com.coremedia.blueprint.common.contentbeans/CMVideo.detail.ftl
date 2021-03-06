<#-- @ftlvariable name="self" type="com.coremedia.blueprint.common.contentbeans.CMVideo" -->

<#--
    Template Description:

    This template extends the brick generic-templates" for the detail view.
-->

<#assign blockClass=cm.localParameters().blockClass!"cm-details" />
<#assign relatedView=cm.localParameters().relatedView!"related" />
<#assign renderTags=cm.localParameter("renderTags", true) />
<#assign renderRelated=cm.localParameter("renderRelated", true) />

<article class="${blockClass} ${blockClass}--video"<@preview.metadata self.content />>

  <#-- title -->
  <h1 class="${blockClass}__headline"<@preview.metadata "properties.title"/>>${self.title!""}</h1>

  <#-- video -->
  <div class="${blockClass}__medias">
    <@cm.include self=self view="media" params={
      "classBox": "${blockClass}__video-box",
      "classMedia": "${blockClass}__video",
      "preload": true
    } />
    <span class="${blockClass}__copyright"<@preview.metadata "properties.copyright"/>>${self.copyright!""}</span>
  </div>

  <#-- text -->
  <#if self.detailText?has_content>
    <div class="${blockClass}__text cm-richtext"<@preview.metadata "properties.detailText"/>>
      <@cm.include self=self.detailText!cm.UNDEFINED />
    </div>
  </#if>

  <#-- tags -->
  <#if renderTags>
    <@cm.include self=self view="_tagList"/>
  </#if>
</article>

<#-- related -->
<#if renderRelated>
  <@cm.include self=self view="_related" params={"relatedView": relatedView}/>
</#if>

<#-- extensions -->
<@cm.hook id=bp.viewHookEventNames.VIEW_HOOK_END />
