package com.coremedia.blueprint.assets.cae.handlers;

import com.coremedia.blueprint.assets.cae.CategoryOverview;
import com.coremedia.blueprint.cae.view.DynamicIncludePredicate;
import com.coremedia.blueprint.cae.view.DynamicIncludeProvider;
import com.coremedia.blueprint.cae.view.HashBasedFragmentHandler;
import com.coremedia.objectserver.view.RenderNode;

import edu.umd.cs.findbugs.annotations.Nullable;
import java.util.Arrays;
import java.util.List;

public class PaginatedCategoryAssetsPredicate implements DynamicIncludePredicate, DynamicIncludeProvider {

  private static final List<String> VALID_PARAMS = Arrays.asList(
          DownloadPortalHandler.CATEGORY_REQUEST_PARAMETER_NAME,
          DownloadPortalHandler.PAGE_REQUEST_PARAMETER_NAME
  );

  @Override
  public boolean apply(@Nullable RenderNode input) {
    return null != input
            && input.getBean() instanceof CategoryOverview
            && DownloadPortalHandler.ASSETS_VIEW.equals(input.getView());
  }

  @Override
  public HashBasedFragmentHandler getDynamicInclude(Object delegate, String view) {
    return new HashBasedFragmentHandler(delegate, DownloadPortalHandler.ASSETS_VIEW, VALID_PARAMS);
  }
}
