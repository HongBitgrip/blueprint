package com.coremedia.livecontext.context;

import com.coremedia.blueprint.base.livecontext.ecommerce.common.CurrentCommerceConnection;
import com.coremedia.cache.Cache;
import com.coremedia.cache.CacheKey;
import com.coremedia.cap.multisite.Site;
import com.coremedia.livecontext.ecommerce.catalog.CatalogService;
import com.coremedia.livecontext.ecommerce.catalog.Category;
import com.coremedia.livecontext.ecommerce.catalog.Product;
import com.coremedia.livecontext.ecommerce.common.CommerceBean;
import com.coremedia.livecontext.ecommerce.common.CommerceConnection;
import com.coremedia.livecontext.ecommerce.common.StoreContextProvider;
import com.coremedia.livecontext.navigation.LiveContextNavigationFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Required;

import edu.umd.cs.findbugs.annotations.NonNull;
import edu.umd.cs.findbugs.annotations.Nullable;
import java.util.concurrent.TimeUnit;

public class LiveContextResolveContextStrategy implements ResolveContextStrategy {
  private static final Logger LOG = LoggerFactory.getLogger(LiveContextResolveContextStrategy.class);

  private static final long DEFAULT_CACHED_IN_SECONDS = 24 * 60 * 60L;

  private LiveContextNavigationFactory liveContextNavigationFactory;
  private long cachedInSeconds = DEFAULT_CACHED_IN_SECONDS;
  private Cache cache;

  @Nullable
  protected Category findNearestCategoryFor(@NonNull CommerceBean commerceBean) {
    if (commerceBean instanceof Product){
      return ((Product) commerceBean).getCategory();
    } else if (commerceBean instanceof Category){
      return (Category) commerceBean;
    }
    return null;
  }

  @Required
  public void setCache(Cache cache) {
    this.cache = cache;
  }

  protected CatalogService getCatalogService() {
    return getCommerceConnection().getCatalogService();
  }

  protected StoreContextProvider getStoreContextProvider() {
    return getCommerceConnection().getStoreContextProvider();
  }

  @NonNull
  protected CommerceConnection getCommerceConnection() {
    return CurrentCommerceConnection.get();
  }

  @Required
  public void setLiveContextNavigationFactory(LiveContextNavigationFactory liveContextNavigationFactory) {
    this.liveContextNavigationFactory = liveContextNavigationFactory;
  }

  public void setCachedInSeconds(long cachedInSeconds) {
    this.cachedInSeconds = cachedInSeconds;
  }

  @Nullable
  @Override
  public LiveContextNavigation resolveContext(@NonNull Site site, @NonNull CommerceBean commerceBean) {
    // cache is required for performance concerns in production use,
    // functionally it also works without. Maybe useful for testing.
    return cache!=null ? cache.get(new CommerceContextProviderCacheKey(site, commerceBean)) : resolveContextUncached(site, commerceBean);
  }

  @Nullable
  private LiveContextNavigation resolveContextUncached(Site site, CommerceBean commerceBean) {
    Cache.cacheFor(cachedInSeconds, TimeUnit.SECONDS);

    Category category = findNearestCategoryFor(commerceBean);
    if (category == null) {
      LOG.warn("Could not find a category for external descriptor {}", commerceBean);
      return null;
    }

    return liveContextNavigationFactory.createNavigation(category, site);
  }


  // --- inner classes ----------------------------------------------

  private class CommerceContextProviderCacheKey extends CacheKey<LiveContextNavigation> {
    private final CommerceBean commerceBean;
    private final Site site;

    CommerceContextProviderCacheKey(@NonNull Site site, @NonNull CommerceBean commerceBean) {
      this.site = site;
      this.commerceBean = commerceBean;
    }

    @Override
    public LiveContextNavigation evaluate(Cache cache) {
      return resolveContextUncached(site, commerceBean);
    }

    @Override
    public boolean equals(Object o) {
      if (this == o) {
        return true;
      }
      if (o == null || getClass() != o.getClass()) {
        return false;
      }

      CommerceContextProviderCacheKey that = (CommerceContextProviderCacheKey) o;

      if (!commerceBean.equals(that.commerceBean)) {
        return false;
      }
      return site.equals(that.site);
    }

    @Override
    public int hashCode() {
      int result = commerceBean.hashCode();
      result = 31 * result + site.hashCode();
      return result;
    }
  }
}
