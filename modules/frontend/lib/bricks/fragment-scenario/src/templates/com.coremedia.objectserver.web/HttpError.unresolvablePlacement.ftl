<#-- @ftlvariable name="self" type="com.coremedia.objectserver.web.HttpError" -->
<#-- @ftlvariable name="placementName" type="java.lang.String" -->
<#if cm.isPreviewCae()>
<div <@preview.metadata data=[lc.fragmentHighlightingMetaData(placementName)!""]/>>
</div>
</#if>
