module GD {
    Library.roleassignment = {
        /*********************************************************************************************************************************/
        // Properties
        /*********************************************************************************************************************************/
        properties: [
            "Member", "RoleDefinitionBindings|roledefinitions"
        ],

        /*********************************************************************************************************************************/
        // Methods
        /*********************************************************************************************************************************/

        // Deletes the object
        delete: {
            requestType: Types.RequestType.Delete
        }
    };
}
