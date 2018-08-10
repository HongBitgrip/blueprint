package com.coremedia.livecontext.ecommerce.hybris.rest;

import com.coremedia.livecontext.ecommerce.hybris.rest.documents.VariantAttributeDocument;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;

import java.io.IOException;
import java.util.List;

import static com.google.common.collect.Lists.newArrayList;

public class VariantAttributesDeserializer extends JsonDeserializer<List<VariantAttributeDocument>> {

  public static final String VARIANT_ATTRIBUTE = "variantAttribute";

  @Override
  public List<VariantAttributeDocument> deserialize(JsonParser jsonParser,
                                                    DeserializationContext deserializationContext)
          throws IOException {
    JsonNode treeNode = jsonParser.readValueAs(JsonNode.class).get(VARIANT_ATTRIBUTE);

    if (treeNode instanceof ArrayNode) {
      // if attributes > 1 then JSON is of type array
      TypeReference<List<VariantAttributeDocument>> type = new TypeReference<List<VariantAttributeDocument>>() {
      };

      return new ObjectMapper().readerFor(type).readValue(treeNode);
    } else {
      // if attributes <=1 then JSON is of type object
      VariantAttributeDocument attribute = new ObjectMapper()
              .readerFor(VariantAttributeDocument.class)
              .readValue(treeNode);

      return newArrayList(attribute);
    }
  }
}