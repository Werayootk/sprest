/// <reference path="../definitions/peoplePicker.d.ts" />
import {Base} from "../utils";
import {RequestType} from ".";
import {
    IPeoplePicker,
    TargetInfoSettings
} from "../definitions";

/*********************************************************************************************************************************/
// People Picker
/*********************************************************************************************************************************/
class _PeoplePicker extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    constructor(targetInfo?:TargetInfoSettings) {
        // Call the base constructor
        super(targetInfo);

        // Default the properties
        this.defaultToWebFl = true;
        this.responses = [];
        this.targetInfo.endpoint = "SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface";

        // Add the methods
        this.addMethods(this, { __metadata: { type: "peoplepicker" } } );
    }
}
export const PeoplePicker:IPeoplePicker = <any>_PeoplePicker;

/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
const Library = {
    clientPeoplePickerResolveUser: {
        argNames: ["queryParams"],
        metadataType: "SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters",
        name: "SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.ClientPeoplePickerResolveUser",
        replaceEndpointFl: true,
        requestType: RequestType.PostWithArgsInBody
    },

    clientPeoplePickerSearchUser: {
        argNames: ["queryParams"],
        metadataType: "SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters",
        name: "SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.ClientPeoplePickerSearchUser",
        replaceEndpointFl: true,
        requestType: RequestType.PostWithArgsInBody
    }
};
export default Library;