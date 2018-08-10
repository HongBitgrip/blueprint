package com.coremedia.livecontext.ecommerce.hybris.rest.documents;

import com.coremedia.livecontext.ecommerce.search.SearchFacet;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import edu.umd.cs.findbugs.annotations.NonNull;
import java.util.Collections;
import java.util.List;
import java.util.Map;

@JsonIgnoreProperties(ignoreUnknown = true)
public class SearchFacetDocument extends AbstractHybrisDocument implements SearchFacet {

  @JsonProperty("count")
  private int count;

  @JsonProperty("name")
  private String name;

  @JsonProperty("selected")
  private boolean selected;

  private String url;

  @JsonProperty("values")
  private List<SearchFacetDocument> values;

  private String value;

  @NonNull
  public List<SearchFacet> getValues() {
    return Collections.unmodifiableList(values);
  }

  @JsonProperty("query")
  public void setValue(Map<String, Object> query) {
    url = (String) query.get("url");
    Map<String, String> innerQuery = (Map<String, String>) query.get("query");
    if (innerQuery != null) {
      value = innerQuery.get("value");
    }
  }

  @Override
  public int getCount() {
    return count;
  }

  @NonNull
  @Override
  public String getLabel() {
    return name;
  }

  @Override
  public boolean isSelected() {
    return selected;
  }

  @NonNull
  @Override
  public String getQuery() {
    return value;
  }

  @Override
  public String getUrl() {
    return url;
  }

  @NonNull
  @Override
  public Map<String, Object> getExtendedData() {
    return unmapped();
  }

  @NonNull
  @Override
  public List<SearchFacet> getChildFacets() {
    return values != null ? getValues() : Collections.emptyList();
  }
}