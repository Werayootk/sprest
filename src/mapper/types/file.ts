import { SP } from "gd-sprest-def";
import { IBase } from "../../utils/types";
import { Types } from "../..";
import { IFileVersionResult, IFileVersions } from ".";

/**
 * File Methods
 */
export interface IFileMethods {
    /**
     * Approves the file submitted for content approval with the specified comment.
     * @param comment - The comment for the approval. It's length must be <= 1023.
     */
    approve(comment): IBase;

    /**
     * Stops the chunk upload session without saving the uploaded data. If the file doesn’t already exist in the library, the partially uploaded file will be deleted. Use this in response to user action (as in a request to cancel an upload) or an error or exception.
     * Use the uploadId value that was passed to the StartUpload method that started the upload session.
     * This method is currently available only on Office 365.
     * @param uploadId - The unique id of the upload session.
     */
    cancelupload(uploadId): IBase;

    /**
     * Checks the file in to a document library based on the check-in type.
     * @param comment - The comment for the check-in. Its length must be <= 1023.
     * @param checkInType - The check-in type: MinorCheckIn - 0; MajorCheckIn - 1; OverwriteCheckIn - 2
     */
    checkin(comment, checkInType): IBase;

    /**
     * Checks out the file from a document library based on the check-out type.
     */
    checkout(): IBase;

    /**
     * Returns the file content.
     */
    content(): IBase;

    /**
     * Continues the chunk upload session with an additional fragment. The current file content is not changed.
     * Use the uploadId value that was passed to the StartUpload method that started the upload session.
     * This method is currently available only on Office 365.
     * @param uploadId - The unique id of the upload session.
     * @param fileOffset - The size of the offset into the file where the fragment starts.
     */
    continueUpload(uploadId, fileOffset): IBase;

    /**
     * Copies the file to the destination URL.
     * @param strNewUrl - The absolute URL or server relative URL of the destination file path to copy to.
     * @param bOverWrite - True to overwrite a file with the same name in the location.
     */
    copyTo(strNewUrl, bOverWrite): IBase;

    /**
     * Deletes the File.
     */
    delete(): IBase;

    /**
     * Denies approval for a file that was submitted for content approval.
     * Only documents in lists that are enabled for content approval can be denied.
     * @param comment - The comment for the denial. It's length must be <= 1023.
     */
    deny(comment): IBase;

    /**
     * Uploads the last file fragment and commits the file. The current file content is changed when this method completes.
     * Use the uploadId value that was passed to the StartUpload method that started the upload session.
     * This method is currently available only on Office 365.
     * @param uploadId - The unique id of the upload session.
     * @param fileOffset - The size of the offset into the file where the fragment starts.
     */
    finishUpload(uploadId, fileOffset): IBase;

    /**
     * Specifies the control set used to access, modify, or add Web Parts associated with this Web Part Page and view.
     * An exception is thrown if the file is not an ASPX page.
     * @param scope - The webpart personalization scope: User - 0; Shared - 1
     */
    getlimitedwebpartmanager(scope): IBase;

    /**
     * Moves the file to the specified destination URL.
     * @param newUrl - The absolute url or server relative url of the destination file path to move to.
     * @param flags - The move operation: Overwrite - 1; AllowBrokenThickets (Move even if supporting files are separated from the file) - 8;
     */
    moveTo(newUrl, flags): IBase;

    /**
     * Opens the file as a stream.
     */
    openBinaryStream(): IBase;

    /**
     * Submits the file for content approval with the specified comment.
     * @param comment - The comment for the published file. It's length must be <= 1023.
     */
    publish(comment): IBase;

    /**
     * Moves the file to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    recycle(): IBase;

    /**
     * Saves the file as a stream.
     * @param stream - The binary stream of the file.
     */
    saveBinaryStream(stream): IBase;

    /**
     * Starts a new chunk upload session and uploads the first fragment. The current file content is not changed when this method completes.
     * The method is idempotent (and therefore does not change the result) as long as you use the same values for uploadId and stream.
     * The upload session ends either when you use the CancelUpload method or when you successfully complete the upload session by passing the rest of the file contents through the ContinueUpload and FinishUpload methods.
     * @param uploadId - The unique id of the upload session.
     */
    startUpload(uploadId): IBase;

    /**
     * Reverts an existing checkout for the file.
     */
    undoCheckOut(): IBase;

    /**
     * Removes the file from content approval or unpublish a major version.
     * @param comment - The comment for the unpublish operation. Its length must be <= 1023.
     */
    unpublish(comment): IBase;

    /**
     * Updates it's properties.
     * @param data - The file properties to update.
     */
    update(data): IBase;
}

/**
 * File Query Properties
 */
export interface IFileQueryProps {
    /**
     * Gets a value that specifies the user who added the file.
     */
    Author(): Types.SP.IUser;

    /**
     * Gets a value that returns the user who has checked out the file.
     */
    CheckedOutByUser(): Types.SP.IUser;

    EffectiveInformationRightsManagementSettings(): IBase;

    InformationRightsManagementSettings(): IBase;

    /**
     * Gets a value that specifies the list item field values for the list item corresponding to the file.
     */
    ListItemAllFields(): IBase;

    /**
     * Gets a value that returns the user that owns the current lock on the file.
     */
    LockedByUser(): Types.SP.IUser;

    /**
     * Gets a value that returns the user who last modified the file.
     */
    ModifiedBy(): Types.SP.IUser;

    /**
     * Property Bag
     */
    Properties(): IBase<Types.SP.IPropertyValues>;

    VersionEvents(): IBase;

    /**
     * Gets a value that returns a collection of file version objects that represent the versions of the file.
     */
    Versions(): IBase<IFileVersions>;
}

/**
 * File Query Result
 */
export interface IFileQueryResult extends IFileMethods, SP.File {
    /**
     * Gets a value that specifies the user who added the file.
     */
    Author: Types.SP.IUserResult;

    /**
     * Gets a value that returns the user who has checked out the file.
     */
    CheckedOutByUser: Types.SP.IUserResult;

    EffectiveInformationRightsManagementSettings: IBase;

    InformationRightsManagementSettings: SP.InformationRightsManagementSettings;

    /**
     * Gets a value that specifies the list item field values for the list item corresponding to the file.
     */
    ListItemAllFields: Types.SP.IListItemResult;

    /**
     * Gets a value that returns the user that owns the current lock on the file.
     */
    LockedByUser: Types.SP.IUserResult;

    /**
     * Gets a value that returns the user who last modified the file.
     */
    ModifiedBy: Types.SP.IUserResult;

    /**
     * Property Bag
     */
    Properties: Types.SP.IPropertyValues;

    VersionEvents: Types.SP.Results.IResults<any>;

    /**
     * Gets a value that returns a collection of file version objects that represent the versions of the file.
     */
    Versions: Types.SP.Results.IResults<IFileVersionResult>;
}

/**
 * File Result
 */
export interface IFileResult extends IFileMethods, SP.File, IFileQueryProps, IBase<IFile, IFileResult, IFileQueryResult> { }

/**
 * File
 */
export interface IFile extends IFileMethods, IFileQueryProps, IBase<IFile, IFileResult, IFileQueryResult> { }