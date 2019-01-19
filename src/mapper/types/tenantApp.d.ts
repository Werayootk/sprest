import { IBaseLib } from "../../utils/types/base";

/**
 * Methods
 */
export interface ITenantAppMethods {
    /**
     * Deploy solution package in tenant app catalog
     * Enable solution to be available to install to specific sites. This API is designed to be executed in the context of the tenant app catalog site.
     */
    deploy(): IBaseLib;

    /**
     * Install solution package from tenant app catalog to SharePoint site
     * Install a solution package with specific identifier from tenant app catalog to the site based on URL context. This REST call can be executed in the context of the site where the install operation should happen.
     */
    install(): IBaseLib;

    /**
     * Remove solution package from tenant app catalog
     * Remove the solution package from the tenant app catalog. This API is designed to be executed in the context of the tenant app catalog site.
     */
    remove(): IBaseLib;

    /**
     * Retract solution package in the tenant app catalog
     * Retract solution to be available from the sites. This API is designed to be executed in the context of the tenant app catalog site.
     */
    retract(): IBaseLib;

    /**
     * Uninstall solution package from SharePoint site
     * Uninstall a solution package from the site. This REST call can be executed in the context of the site where the uninstall operation should happen.
     */
    uninstall(): IBaseLib;

    /**
     * Upgrade solution package in SharePoint site
     * Upgrade a solution package from the site to a newer version available in the tenant app catalog. This REST call can be executed in the context of the site where the upgrade operation should happen.
     */
    upgrade(): IBaseLib;
}

/**
 * Properties
 */
export interface ITenantAppProps {
    /** The app version. */
    AppCatalogVersion: string;

    /** Flag indicating an upgrade is available. */
    CanUpgrade: boolean;

    /** Flag indicating if the current version is deployed. */
    CurrentVersionDeployed: boolean;

    /** Flag indicating if the app is deployed. */
    Deployed: boolean;

    /** The app id. */
    ID: string;

    /** The installed version. */
    InstalledVersion: string;

    /** Flag indicating if this is a client-side solution. */
    IsClientSideSolution: boolean;

    /** The app title. */
    Title: string;
}

/**
 * Tenant App Result
 */
export interface ITenantAppResult extends ITenantAppMethods, ITenantAppProps, IBaseLib<ITenantApp, ITenantAppResult> { }

/**
 * Tenant App
 */
export interface ITenantApp extends ITenantAppMethods, IBaseLib<ITenantApp, ITenantAppResult> { }