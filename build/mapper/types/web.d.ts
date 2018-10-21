import { SP } from "gd-sprest-def";
import { IBase } from "../../utils/types";
import { Types } from "../..";
import { IAppTiles, ITenantAppCatalog, IWebResult, IWebResults, IWebs } from ".";
/**
 * Web Methods
 */
export interface IWebMethods {
    /**
     * Applies the theme specified by the contents of each of the files specified in the arguments to the site.
     * @param colorpaletteurl - The server-relative URL of the color palette file.
     * @param fontschemeurl - The server-relative URL of the font scheme.
     * @param backgroundimageurl - The server-relative URL of the background image.
     * @param sharegenerated - True to store the generated theme files in the root site, or false to store them in this site.
     */
    applyTheme(colorpaletteurl: any, fontschemeurl: any, backgroundimageurl: any, sharegenerated: any): IBase;
    /**
     * Applies the specified site definition or site template to the Web site that has no template applied to it.
     * @param name - The site definition or web template name to apply.
     */
    applyWebTemplate(name: any): IBase;
    /**
     * Creates unique role assignments for the securable object.
     * @param copyRoleAssignments - True to copy the role assignments from the parent securable object; false to remove the inherited role assignments except one that contains the current user.
     * @param clearSubScopes - True to make all child securable objects inherit role assignments from the current object; false (default) to leave role assignments unchanged for child securable objects that do not inherit role assignments from their parent object.
     */
    breakRoleInheritance(copyRoleAssignments: any, clearSubScopes: any): IBase;
    /**
     * Deletes the web.
     */
    delete(): IBase;
    /**
     * Checks whether the push notification subscriber exist for the current user with the given device application instance ID.
     * @param id - The ID of the device app instance.
     */
    doesPushNotificationSubscriberExist(id: any): IBase;
    /**
     * Returns whether the current user has the given set of permissions.
     * @param high - The highest permission range value.
     * @param low - The lowest permission range value.
     */
    doesUserHavePermissions(high: any, low: any): IBase;
    /**
     * Checks whether the specified login name belongs to a valid user in the site. If the user doesn't exist, it will add the user to the site.
     */
    ensureUser(loginName: string): IBase<Types.SP.IUser, Types.SP.IUserResult, Types.SP.IUserQueryResult>;
    /**
     * Sends data to an OData service.
     * @param inputStream - The OData input object. Used for create or update operations only.
     */
    executeRemoteLOB(inputStream: any): IBase;
    /**
     * The app BDC catalog.
     */
    getAppBdcCatalog(): IBase;
    /**
     * The app BDC catalog for the specified app instance.
     * @param id - The ID of the app instance.
     */
    getAppBdcCatalogForAppInstance(id: any): IBase;
    /**
     * Retrieves an AppInstance installed on this Site.
     * @param id - The ID of the app instance.
     */
    getAppInstanceById(id: any): IBase;
    /**
     * Retrieves all AppInstances installed on this site that are instances of the specified App.
     * @param id - The product ID of the app.
     */
    getAppInstancesByProductId(id: any): IBase;
    /**
     * Returns a collection of site templates available for the site.
     * @param lcid - The LCID of the site templates to get.
     * @param doIncludeCrossLanguage - True to include language-neutral site templates; otherwise false.
     */
    getAvailableWebTemplates(lcid: any, doIncludeCrossLanguage: any): IBase;
    /**
     * Returns the list gallery on the site.
     * @param galleryType - The gallery type. Represents a ListTemplateType value such as WebTemplateCatalog = 111, WebPartCatalog = 113 ListTemplateCatalog = 114, MasterPageCatalog = 116, SolutionCatalog = 121, ThemeCatalog = 123, DesignCatalog = 124, AppDataCatalog = 125.
     */
    getCatalog(galleryType: any): Types.SP.IList & IBase<Types.SP.IList, Types.SP.IListResult, Types.SP.IListQueryResult>;
    /**
     * Returns the collection of all changes from the change log that have occurred within the scope of the site, based on the specified query.
     * @param query - The change query.
     */
    getChanges(query: any): IBase;
    /**
     * The context information for the site. Static method.
     */
    getContextWebInformation(): IBase;
    /**
     * The custom list templates for the site.
     */
    getCustomListTemplates(): IBase;
    /**
     * The document libraries on a site. Static method. (SharePoint Online only)
     * @param url - The full URL of the site.
     */
    getDocumentLibraries(url: any): IBase;
    /**
     * The specified external content type in a line-of-business (LOB) system application.
     * @param namespace - The namespace of the external content type.
     * @param name - The name of the external content type.
     */
    getEntity(namespace: any, name: any): IBase;
    /**
     * Returns the file object located at the specified server-relative URL.
     * @param url - The server relative url of the file.
     */
    getFileByServerRelativeUrl(url: any): Types.SP.IFile & IBase<Types.SP.IFile, Types.SP.IFileResult, Types.SP.IFileQueryResult>;
    /**
     * Returns the folder object located at the specified server-relative URL.
     * @param url - The server relative url of the folder.
     */
    getFolderByServerRelativeUrl(url: any): Types.SP.IFolder & IBase<Types.SP.IFolder, Types.SP.IFolderResult, Types.SP.IFolderQueryResult>;
    /**
     * The list at the specified site-relative URL.
     * @param url - The server relative url of the list.
     */
    getList(url: any): Types.SP.IList & IBase<Types.SP.IList, Types.SP.IListResult, Types.SP.IListQueryResult>;
    /**
     * The push notification subscriber over the site for the specified device application instance ID.
     * @param id - The ID of the device app instance.
     */
    getPushNotificationSubscriber(id: any): IBase;
    /**
     * Queries for the push notification subscribers over the site for the specified value of custom arguments. Null or empty custom arguments will return subscribers without any filtering.
     * @param args - Arguments to filter the results. Passed arguments are compared to the subscribers' custom arguments in the store. Pass null or empty arguments to return unfiltered results.
     */
    getPushNotificationSubscribersByArgs(args: any): IBase;
    /**
     * Queries for the push notification subscribers over the site for the specified user.
     * @param loginName - The login name of the user.
     */
    getPushNotificationSubscribersByUser(loginName: any): IBase;
    /**
     * Returns the collection of child sites of the current site based on the specified query. (SharePoint Online only)
     * @param nWebTemplateFilter - The ID of the template used in the site definition of the sites.
     * @param nConfigurationFilter - The ID of the site template used to provision the sites.
     */
    getSubwebsFilteredForCurrentUser(nWebTemplateFilter: any, nConfigurationFilter: any): IBase<Types.SP.Results.IResults<SP.WebInformation>>;
    /**
     * Returns the user corresponding to the specified member identifier for the current site.
     * @param id - The user id.
     */
    getUserById(id: any): Types.SP.IUser & IBase<Types.SP.IUser, Types.SP.IUserResult, Types.SP.IUserQueryResult>;
    /**
     * The effective permissions that the specified user has within the current application scope.
     * @param loginName - The user login name.
     */
    getUserEffectivePermissions(loginName: any): IBase;
    /**
     * The site URL from a page URL. Static method.
     * @param url - The full URL of the SharePoint page, with URL encoded characters as needed.
     */
    getWebUrlFromPageUrl(url: any): any;
    /**
     * Uploads and installs an app package to this site.
     * @param appPackageStream - The app package stream.
     */
    loadAndInstallApp(appPackageStream: any): IBase;
    /**
     * Uploads and installs an App package on the site in a specified locale.
     * @param appPackageStream - The app package stream.
     * @param installationLocaleLCID - The LCID of the locale to use to create the app instance.
     */
    loadAndInstallAppInSpecifiedLocale(appPackageStream: any, installationLocaleLCID: any): IBase;
    /**
     * Uploads an App package and creates an instance from it.
     * @param appPackageStream - The app package stream.
     * @param installationLocaleLCID - The LCID of the locale to use to create the app instance.
     */
    loadApp(appPackageStream: any, installationLocaleLCID: any): IBase;
    /**
     * Returns the name of the image file for the icon that is used to represent the specified file.
     * @param filename - The file name. If this parameter is empty, the server returns an empty string.
     * @param progid - The ProgID of the application that was used to create the file, in the form OLEServerName.ObjectName (for example, Excel.Sheet or PowerPoint.Slide). This is the ID used by the Windows registry to uniquely identify an object.
     * @param size - The size of the icon: 16x16 pixels = 0, 32x32 pixels = 1.
     */
    mapToIcon(filename: any, progid: any, size: any): IBase;
    /**
     * Processes a notification from an external system.
     * @param stream - The notification message from the external system.
     */
    processExternalNotification(stream: any): IBase;
    /**
     * Registers the subscriber for push notifications over the site. If the registration already exists, the service token is updated with the new value.
     * @param deviceAppInstanceId - The ID of the device app instance.
     * @param serviceToken - The token provided by the notification service to the device to receive notifications.
     */
    registerPushNotificationSubscriber(deviceAppInstanceId: any, serviceToken: any): IBase;
    /**
     * Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
     */
    resetRoleInheritance(): IBase;
    /**
     * Unregisters the subscriber for push notifications from the site.
     * @param id - The ID of the device app instance.
     */
    unregisterPushNotificationSubscriber(id: any): IBase;
    /**
     * Updates it's properties.
     * @param data - The list properties to update.
     */
    update(data: any): IBase;
}
/**
 * Web Query Properties
 */
export interface IWebQueryProps {
    /**
     * Property Bag
     */
    AllProperties(): IBase<Types.SP.IPropertyValues>;
    /**
     * Gets a collection of metadata for the Web site.
     */
    AllProperties(): IBase;
    AppTiles(): IAppTiles;
    /**
     * Gets or sets the group of users who have been given contribute permissions to the Web site.
     */
    AssociatedMemberGroup(): Types.SP.IGroup;
    /**
     * Gets or sets the associated owner group of the Web site.
     */
    AssociatedOwnerGroup(): Types.SP.IGroup;
    /**
     * Gets or sets the associated visitor group of the Web site.
     */
    AssociatedVisitorGroup(): Types.SP.IGroup;
    Author(): Types.SP.IUser;
    /**
     * Gets the collection of all content types that apply to the current scope, including those of the current Web site, as well as any parent Web sites.
     */
    AvailableContentTypes(): IBase<Types.SP.IContentTypes>;
    /**
     * Gets a value that specifies the collection of all fields available for the current scope, including those of the current site, as well as any parent sites.
     */
    AvailableFields(): IBase<Types.SP.IFields>;
    ClientWebParts(): IBase;
    /**
     * Gets the content types that are associated with the web.
     */
    ContentTypes(): Types.SP.IContentTypes;
    /**
     * Gets the content type that are associated with the web.
     * @param id - The id of the content type.
     */
    ContentTypes(id: string): Types.SP.IContentType;
    /**
     * Gets the current user of the site.
     */
    CurrentUser(): Types.SP.IUser;
    DataLeakagePreventionStatusInfo(): IBase;
    DescriptionResource(): IBase<SP.ResourcePath>;
    /**
     * Gets the event receivers associated with the web.
    */
    EventReceivers(): Types.SP.IEventReceivers;
    /**
     * Gets the event receiver associated with the web.
     * @param id - The id of the event receiver.
    */
    EventReceivers(id: string): Types.SP.IEventReceiver;
    /**
     * Gets the site features.
     */
    Features(): Types.SP.IFeatures;
    /**
     * Gets the site features.
     * @param id - The id of the feature.
     */
    Features(id: string): IBase<Types.SP.IFeature>;
    /**
     * Gets the fields in the web.
     */
    Fields(): Types.SP.IFields;
    /**
     * Gets the field in the web.
     * @param internalNameOrTitle - The internal name or title of the field.
     */
    Fields(internalNameOrTitle: string): Types.SP.IField;
    /**
     * Gets the folders contained in the root folder.
     */
    Folders(): Types.SP.IFolders;
    /**
     * Gets the folder contained in the root folder.
     * @param url - The url of the sub-folder within the current folder.
     */
    Folders(url: string): Types.SP.IFolder;
    /**
     * Gets the lists in the Web.
     */
    Lists(): Types.SP.ILists;
    /**
     * Gets the list in the Web.
     * @param name - The list name.
     */
    Lists(name: string): Types.SP.IList;
    /**
     * Gets the list definitions and list templates available for creating lists on the site.
     */
    ListTemplates(): IBase;
    /**
     * Gets the list definition or list template available for creating lists on the site.
     * @param name - The list template form name.
     */
    ListTemplates(name: string): IBase;
    /**
     * Gets a value that specifies the navigation structure on the site, including the Quick Launch area and the top navigation bar.
     */
    Navigation(): IBase<SP.Navigation>;
    /**
     * Gets the parent website of the specified website.
     */
    ParentWeb(): IWeb;
    /**
     * Gets the collection of push notification subscribers over the site.
     */
    PushNotificationSubscribers(): IBase;
    /**
     * Specifies the collection of recycle bin items of the recycle bin of the site.
     */
    RecycleBin(): IBase;
    /**
     * Gets the regional settings that are currently implemented on the website.
     */
    RegionalSettings(): IBase;
    /**
     * Gets the role definitions for the web.
     */
    RoleDefinitions(): Types.SP.IRoleDefinitions;
    /**
     * Gets the role definitions for the web.
     * @param name - The role definition name.
     */
    RoleDefinitions(name: string): Types.SP.IRoleDefinition;
    /**
     * Gets the root folder in the web.
     */
    RootFolder(): Types.SP.IFolder;
    /**
     * Gets the file in the web's root folder.
     * @param url - (Optional) The url of the file within the root folder.
     */
    RootFolder(url: string): Types.SP.IFile;
    /**
     * Gets the site groups for the web.
     */
    SiteGroups(): Types.SP.ISiteGroups;
    /**
     * Gets the site groups for the web.
     * @param name - The group name.
     */
    SiteGroups(name: string): Types.SP.IGroup;
    /**
     * Gets the UserInfo list of the site collection that contains the Web site.
     */
    SiteUserInfoList(): IBase;
    /**
     * Gets the collection of all users that belong to the site collection.
     */
    SiteUsers(): Types.SP.IUsers;
    /**
     * Gets the collection of all users that belong to the site collection.
     * @param id - The user id.
     */
    SiteUsers(id: any): Types.SP.IUser;
    /** Gets the tenant app catalog. */
    TenantAppCatalog(): ITenantAppCatalog;
    /**
     * The theming information for this site. This includes information like colors, fonts, border radii sizes etc.
     */
    ThemeInfo(): IBase;
    TitleResource(): IBase<SP.ResourcePath>;
    /**
     * Gets the user custom actions for the web.
     */
    UserCustomActions(): Types.SP.IUserCustomActions;
    /**
     * Gets the user custom action for the web.
     * @param id - The id of the user custom action.
     */
    UserCustomActions(id: string): Types.SP.IUserCustomAction;
    /**
     * Represents key properties of the subsites of a site.
     */
    WebInfos(): IBase;
    /**
     * Gets a Web site collection object that represents all Web sites immediately beneath the Web site, excluding children of those Web sites.
     */
    Webs(): IWebs;
    /**
     * Gets a value that specifies the collection of all workflow associations for the site.
     */
    WorkflowAssociations(): IBase;
    /**
     * Gets a value that specifies the collection of workflow templates associated with the site.
     */
    WorkflowTemplates(): IBase;
}
/**
 * Web Query Result
 */
export interface IWebQueryResult extends IWebMethods, SP.Web {
    /**
     * A collection of metadata for the Web site.
     */
    AllProperties?: Array<string>;
    AppTiles?: Types.SP.IAppTiles;
    /**
     * The group of users who have been given contribute permissions to the Web site.
     */
    AssociatedMemberGroup: Types.SP.IGroupResult;
    /**
     * The associated owner group of the Web site.
     */
    AssociatedOwnerGroup: Types.SP.IGroupResult;
    /**
     * The associated visitor group of the Web site.
     */
    AssociatedVisitorGroup: Types.SP.IGroupResult;
    /** */
    Author: Types.SP.IUserResult;
    /**
     * The collection of all content types that apply to the current scope, including those of the current Web site, as well as any parent Web sites.
     */
    AvailableContentTypes: Types.SP.Results.IResults<Types.SP.IContentTypeResult>;
    /**
     * A value that specifies the collection of all fields available for the current scope, including those of the current site, as well as any parent sites.
     */
    AvailableFields: Types.SP.Results.IResults<Types.SP.IFieldResult>;
    ClientWebParts: IBase;
    /**
     * Gets the content types that are associated with the web.
     */
    ContentTypes: Types.SP.IContentTypeResults;
    /**
     * Gets the current user of the site.
     */
    CurrentUser: Types.SP.IUserResult;
    DescriptionResource: SP.ResourcePath;
    /**
     * Gets the URL where the current user can download SharePoint Designer.
     */
    DesignerDownloadUrlForCurrentUser: string;
    /**
     * Gets the event receivers associated with the web.
    */
    EventReceivers: Types.SP.IEventReceiverResults;
    /**
     * Gets the site features.
     */
    Features: Types.SP.Results.IResults<Types.SP.IFeature>;
    /**
     * The fields in the web.
     */
    Fields: Types.SP.IFieldResults;
    /**
     * The folders contained in the root folder.
     */
    Folders: Types.SP.IFolderResults;
    /**
     * Gets the lists in the Web.
     */
    Lists: Types.SP.IListResults;
    /**
     * The list definitions and list templates available for creating lists on the site.
     */
    ListTemplates: Types.SP.Results.IResults<SP.ListTemplate>;
    /**
     * Gets a value that specifies the navigation structure on the site, including the Quick Launch area and the top navigation bar.
     */
    Navigation: SP.Navigation;
    /**
     * Gets the parent website of the specified website.
     */
    ParentWeb: IWebResult;
    /**
     * Gets the collection of push notification subscribers over the site.
     */
    PushNotificationSubscribers(): IBase;
    /**
     * Specifies the collection of recycle bin items of the recycle bin of the site.
     */
    RecycleBin: Types.SP.Results.IResults<SP.RecycleBinItem>;
    /**
     * Gets the regional settings that are currently implemented on the website.
     */
    RegionalSettings: SP.RegionalSettings;
    /**
     * Gets the role definitions for the web.
     */
    RoleDefinitions: Types.SP.IRoleDefinitionResults;
    /**
     * Gets the root folder in the web.
     */
    RootFolder: Types.SP.IFolderResult;
    /**
     * Gets the site groups for the web.
     */
    SiteGroups: Types.SP.ISiteGroupResults;
    /**
     * Gets the UserInfo list of the site collection that contains the Web site.
     */
    SiteUserInfoList: Types.SP.IListResult;
    /**
     * The collection of all users that belong to the site collection.
     */
    SiteUsers: Types.SP.IUserResults;
    /** Gets the tenant app catalog. */
    TenantAppCatalog: ITenantAppCatalog;
    /**
     * The theming information for this site. This includes information like colors, fonts, border radii sizes etc.
     */
    ThemeInfo: SP.ThemeInfo;
    TitleResource: SP.ResourcePath;
    /**
     * Gets the user custom actions for the web.
     */
    UserCustomActions: Types.SP.IUserCustomActionResults;
    /**
     * Represents key properties of the subsites of a site.
     */
    WebInfos: Types.SP.Results.IResults<SP.WebInformation>;
    /**
     * A Web site collection object that represents all Web sites immediately beneath the Web site, excluding children of those Web sites.
     */
    Webs: IWebResults;
    /**
     * A value that specifies the collection of all workflow associations for the site.
     */
    WorkflowAssociations: Types.SP.Results.IResults<any>;
    /**
     * A value that specifies the collection of workflow templates associated with the site.
     */
    WorkflowTemplates: Types.SP.Results.IResults<SP.Workflow.WorkflowTemplate>;
}
/**
 * Web Result
 */
export interface IWebResult extends IWebMethods, SP.Web, IWebQueryProps, IBase<IWeb, IWebResult, IWebQueryResult> {
}
/**
 * Web
 */
export interface IWeb extends IWebMethods, IWebQueryProps, IBase<IWeb, IWebResult, IWebQueryResult> {
}
