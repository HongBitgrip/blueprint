<#-- @ftlvariable name="self" type="com.coremedia.blueprint.common.layout.Container" -->

<#assign items=self.items![] />
<#assign numberOfItems=items?size />

<div class="cm-container cm-container--details"<@preview.metadata data=bp.getContainerMetadata(self) />>
  <#list items as item>
    <@cm.include self=item />
  </#list>
</div>