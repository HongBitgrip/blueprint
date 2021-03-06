<#-- @ftlvariable name="self" type="com.coremedia.blueprint.common.contentbeans.CMPicture" -->
<#-- @ftlvariable name="att_class" type="java.lang.String" -->

<#assign additionalCssClasses=att_class!""/>

<div class="cm-richtext-embedded cm-richtext-embedded--image ${additionalCssClasses}">
  <@cm.include self=self view="media" params={
    "limitAspectRatios": [ "landscape_ratio4x3", "landscape_ratio16x9" ],
    "classBox": "cm-richtext-embedded__picture-box",
    "classMedia": "cm-richtext-embedded__picture"
  }/>
</div>
