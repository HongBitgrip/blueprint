package com.coremedia.livecontext.view;

import com.coremedia.blueprint.base.settings.SettingsService;
import com.coremedia.blueprint.common.contentbeans.CMContext;
import com.coremedia.blueprint.common.contentbeans.Page;
import com.coremedia.blueprint.common.layout.PageGrid;
import com.coremedia.cache.Cache;
import com.coremedia.cap.content.Content;
import com.coremedia.dispatch.NoArgDispatcher;
import com.coremedia.dispatch.Type;
import com.coremedia.dispatch.Types;
import com.coremedia.objectserver.beans.ContentBean;
import com.google.common.collect.Streams;
import edu.umd.cs.findbugs.annotations.NonNull;
import edu.umd.cs.findbugs.annotations.Nullable;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.inject.Inject;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Stream;

import static java.util.Collections.emptyList;
import static java.util.Optional.empty;
import static java.util.stream.Collectors.toList;

public class PrefetchFragmentsConfigReader {

  private static final Logger LOG = LoggerFactory.getLogger(PrefetchFragmentsConfigReader.class);

  private static final String LIVECONTEXT_FRAGMENTS = "livecontext-fragments";
  private static final String PLACEMENT_VIEWS = "placementViews";
  private static final String PREFETCHED_VIEWS = "prefetchedViews";
  private static final String DEFAULTS = "defaults";
  private static final String VIEW_KEY = "view";
  private static final String SECTION_KEY = "section";
  private static final String CONTENT_TYPES = "contentTypes";
  private static final String TYPE = "type";
  private static final String LAYOUTS = "layouts";
  private static final String LAYOUT_KEY = "layout";

  private final NoArgDispatcher dispatcher = new PrefetchConfigContentTypeDispatcher(this);

  @Inject
  private SettingsService settingsService;

  @Inject
  private Cache cache;

  @NonNull
  Optional<String> getPlacementView(@NonNull Page page, @NonNull String placementName) {
    Optional<String> placementViewForLayout = getPlacementViewForLayout(page, placementName);
    if (placementViewForLayout.isPresent()) {
      return placementViewForLayout;
    }

    return getPlacementDefaultView(page, placementName);
  }

  @NonNull
  Optional<String> getPlacementDefaultView(@NonNull Page page, @NonNull String placementName) {
    Map<String, Object> livecontextFragmentsConfig = settingsService.settingAsMap(LIVECONTEXT_FRAGMENTS,
            String.class, Object.class, getPageContextContent(page).orElse(null));

    Object placementViews = livecontextFragmentsConfig.get(PLACEMENT_VIEWS);
    if (placementViews == null) {
      return empty();
    } else if (!(placementViews instanceof Map)) {
      throw new PrefetchFragmentsConfigException(LIVECONTEXT_FRAGMENTS + "." + PLACEMENT_VIEWS, Map.class, placementViews);
    }

    Object defaults = ((Map) placementViews).get(DEFAULTS);
    if (defaults == null) {
      return empty();
    } else if (!(defaults instanceof List)) {
      throw new PrefetchFragmentsConfigException(LIVECONTEXT_FRAGMENTS + "." + PLACEMENT_VIEWS + "." + DEFAULTS, List.class, defaults);
    }

    return ((List<?>) defaults).stream()
            .filter(Map.class::isInstance)
            .map(Map.class::cast)
            .map(map -> getMatchingViewForPlacementName(map, placementName,
                    LIVECONTEXT_FRAGMENTS + "." + PLACEMENT_VIEWS + "." + DEFAULTS))
            .flatMap(Streams::stream)
            .findFirst();
  }

  @NonNull
  private Optional<Content> getPageContextContent(@NonNull Page page) {
    CMContext context = page.getContext();
    if (context == null) {
      LOG.warn("Could not read Prefetch-Config, since page \"{}\" has no context", page.getTitle());
      return empty();
    }
    Content content = context.getContent();
    if (content == null) {
      LOG.warn("Could not read Prefetch-Config, since page \"{}\" has no content", page.getTitle());
      return empty();
    }
    return Optional.of(content);
  }

  @NonNull
  Optional<String> getPlacementViewForLayout(@NonNull Page page, @NonNull String placementName) {
    PageGrid pageGrid = page.getPageGrid();
    if (pageGrid == null) {
      return empty();
    }
    Content layout = pageGrid.getLayout();
    if (layout == null) {
      return empty();
    }

    Map<String, Object> livecontextFragmentsConfig = settingsService.settingAsMap(LIVECONTEXT_FRAGMENTS,
            String.class, Object.class, getPageContextContent(page).orElse(null));

    Object placementViews = livecontextFragmentsConfig.get(PLACEMENT_VIEWS);
    if (placementViews == null) {
      return empty();
    } else if (!(placementViews instanceof Map)) {
      throw new PrefetchFragmentsConfigException(LIVECONTEXT_FRAGMENTS + "." + PLACEMENT_VIEWS, Map.class, placementViews);
    }

    Object placementViewsForLayoutsConfigMap = ((Map) placementViews).get(LAYOUTS);
    if (placementViewsForLayoutsConfigMap == null) {
      return empty();
    } else if (!(placementViewsForLayoutsConfigMap instanceof List)) {
      throw new PrefetchFragmentsConfigException(LIVECONTEXT_FRAGMENTS + "." + PLACEMENT_VIEWS + "." + LAYOUTS, List.class, placementViewsForLayoutsConfigMap);
    }

    return ((List<?>) placementViewsForLayoutsConfigMap).stream()
            .filter(Map.class::isInstance)
            .map(Map.class::cast)
            .flatMap(map -> getMatchingPlacementViewsForLayout(map, layout))
            .filter(Map.class::isInstance)
            .map(Map.class::cast)
            .map(map -> getMatchingViewForPlacementName(map, placementName,
                    LIVECONTEXT_FRAGMENTS + "." + PLACEMENT_VIEWS + "." + LAYOUTS + ".[" + layout.getName() + "]." + PLACEMENT_VIEWS))
            .flatMap(Streams::stream)
            .findFirst();
  }

  @NonNull
  private static Stream<?> getMatchingPlacementViewsForLayout(@NonNull Map<?, ?> map, @NonNull Content layout) {
    if (!isLayoutConfigMatching(map, layout)) {
      return Stream.empty();
    }

    Object list = map.get(PLACEMENT_VIEWS);
    if (list == null) {
      return Stream.empty();
    } else if (!(list instanceof List)) {
      throw new PrefetchFragmentsConfigException(LIVECONTEXT_FRAGMENTS + "." + PLACEMENT_VIEWS + "." + LAYOUTS + ".[" + layout.getName() + "]." + PLACEMENT_VIEWS, List.class, list);
    }
    return ((List) list).stream();
  }

  @NonNull
  private static Optional<String> getMatchingViewForPlacementName(@NonNull Map<?, ?> map, @NonNull String placementName, @NonNull String configMapLookupPath) {
    if (!isSectionConfigMatching(map, placementName)) {
      return empty();
    }

    Object result = map.get(VIEW_KEY);
    if (result == null) {
      return empty();
    } else if (!(result instanceof String)) {
      throw new PrefetchFragmentsConfigException(configMapLookupPath + ".[" + placementName + "]." + VIEW_KEY, List.class, result);
    }
    return Optional.of((String) result);
  }

  private static boolean isSectionConfigMatching(@NonNull Map map, @NonNull String placementName) {
    Object section = map.get(SECTION_KEY);
    if (section instanceof Content) {
      return ((Content) section).getName().equals(placementName);
    }
    return false;
  }

  @NonNull
  List<String> getPredefinedViews(@Nullable Object bean, @NonNull Page page) {
    if (bean instanceof ContentBean) {
      Content content = ((ContentBean) bean).getContent();
      List<String> predefinedViewsForContent = getPredefinedViewsForContent(content, page);
      if (!predefinedViewsForContent.isEmpty()) {
        return predefinedViewsForContent;
      }
    }

    List<String> predefinedViewsForLayout = getPredefinedViewsForLayout(page);
    if (!predefinedViewsForLayout.isEmpty()) {
      return predefinedViewsForLayout;
    }

    return getPredefinedDefaultViews(page);
  }

  @NonNull
  List<String> getPredefinedDefaultViews(@NonNull Page page) {
    Map<String, Object> livecontextFragmentsConfig = settingsService.settingAsMap(LIVECONTEXT_FRAGMENTS, String.class, Object.class,
            getPageContextContent(page).orElse(null));

    Object prefetchedViews = livecontextFragmentsConfig.get(PREFETCHED_VIEWS);
    if (prefetchedViews == null) {
      return emptyList();
    } else if (!(prefetchedViews instanceof Map)) {
      throw new PrefetchFragmentsConfigException(LIVECONTEXT_FRAGMENTS + "." + PREFETCHED_VIEWS, Map.class, prefetchedViews);
    }

    Object defaults = ((Map) prefetchedViews).get(DEFAULTS);
    if (defaults == null) {
      return emptyList();
    } else if (!(defaults instanceof List)) {
      throw new PrefetchFragmentsConfigException(LIVECONTEXT_FRAGMENTS + "." + PREFETCHED_VIEWS + "." + DEFAULTS, List.class, defaults);
    }
    //noinspection unchecked
    return (List<String>) defaults;
  }

  @NonNull
  List<String> getPredefinedViewsForContent(@NonNull Content content, @NonNull Page page) {
    Type t = Types.getTypeOf(content);
    String lookup = (String) dispatcher.lookup(t);
    if (lookup == null) {
      return emptyList();
    }

    List<Map<String, String>> viewsForContentPagesConfigMap = getViewsConfigMapFor(page, CONTENT_TYPES);

    return viewsForContentPagesConfigMap.stream()
            .filter(Map.class::isInstance)
            .map(Map.class::cast)
            .filter(map -> map.get(TYPE).equals(lookup))
            .map(map -> map.get(PREFETCHED_VIEWS))
            .filter(List.class::isInstance)
            .map(List.class::cast)
            .findFirst()
            .orElseGet(Collections::emptyList);
  }

  @NonNull
  List<String> getPredefinedViewsForLayout(@NonNull Page page) {
    Content layoutContent = page.getPageGrid().getLayout();
    if (layoutContent == null) {
      return emptyList();
    }
    List<Map<String, String>> viewsForLayoutsConfigMap = getViewsConfigMapFor(page, LAYOUTS);

    return viewsForLayoutsConfigMap.stream()
            .filter(Map.class::isInstance)
            .map(Map.class::cast)
            .filter(map -> PrefetchFragmentsConfigReader.isLayoutConfigMatching(map, layoutContent))
            .map(map -> map.get(PREFETCHED_VIEWS))
            .filter(List.class::isInstance)
            .map(List.class::cast)
            .findFirst()
            .orElseGet(Collections::emptyList);
  }

  private static boolean isLayoutConfigMatching(@NonNull Map configMap, @NonNull Content lookupLayout) {
    Object layout = configMap.get(LAYOUT_KEY);
    return layout instanceof Content && layout.equals(lookupLayout);
  }

  @NonNull
  List<String> getConfiguredContentTypes(@NonNull Page page) {
    List<Map<String, String>> viewsForContentPagesConfigMap = getViewsConfigMapFor(page, CONTENT_TYPES);

    return viewsForContentPagesConfigMap.stream()
            .map(map -> map.get(TYPE))
            .filter(String.class::isInstance)
            .map(String.class::cast)
            .collect(toList());
  }

  @NonNull
  private List<Map<String, String>> getViewsConfigMapFor(@NonNull Page page, @NonNull String lookupKey) {
    Map<String, Object> livecontextFragmentsConfig = settingsService.settingAsMap(LIVECONTEXT_FRAGMENTS, String.class, Object.class,
            getPageContextContent(page).orElse(null));

    Object prefetchedViews = livecontextFragmentsConfig.get(PREFETCHED_VIEWS);
    if (prefetchedViews == null) {
      return emptyList();
    } else if (!(prefetchedViews instanceof Map)) {
      throw new PrefetchFragmentsConfigException(LIVECONTEXT_FRAGMENTS + "." + PREFETCHED_VIEWS, Map.class, prefetchedViews);
    }

    Object viewsForContentPages = ((Map) prefetchedViews).get(lookupKey);
    if (viewsForContentPages == null) {
      return emptyList();
    } else if (!(viewsForContentPages instanceof List)) {
      throw new PrefetchFragmentsConfigException(LIVECONTEXT_FRAGMENTS + "." + PREFETCHED_VIEWS + "." + CONTENT_TYPES, List.class, viewsForContentPages);
    }
    return (List<Map<String, String>>) viewsForContentPages;
  }

  Cache getCache() {
    return cache;
  }
}
