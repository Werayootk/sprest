/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Users
    // The SPUserCollection object.
    /*********************************************************************************************************************************/
    export class Users extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(...args) {
            // Call the base constructor
            super(Base.getInputParmeters.apply(null, args));

            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/users";

            // See if we are executing the request
            if(this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "users" } } );
            }
        }
    }

    export class Users_Async extends Users {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(...args) {
            // Call the base constructor
            super(Base.getAsyncInputParmeters.apply(null, args));
        }
    }

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.users = {
        // Gets the user with the specified email address.
        getByEmail: {
            argNames: ["email"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Gets the user with the specified member identifier (ID).
        getById: {
            argNames: ["id"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Gets the user with the specified login name.
        getByLoginName: {
            argNames: ["loginName"],
            requestType: RequestType.GetWithArgsInQS
        },

        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: RequestType.OData
        },

        // Removes the user with the specified ID.
        removeById: {
            argNames: ["id"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        // Removes the user with the specified login name.
        removeByLoginName: {
            argNames: ["loginName"],
            requestType: RequestType.PostWithArgsValueOnly
        }
    }
}
