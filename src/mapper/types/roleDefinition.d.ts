import { SP } from "gd-sprest-def";
import { IBaseLib } from "../../utils/types/base";

/**
 * Role Definition Methods
 */
export interface IRoleDefinitionMethods {
    /**
     * Deletes the role definition.
     */
    delete(): IBaseLib;
}

/**
 * Role Definition Query Properties
 */
export interface IRoleDefinitionQueryProps { }

/**
 * Role Definition Query Result
 */
export interface IRoleDefinitionQueryResult extends IRoleDefinitionMethods, SP.RoleDefinition { }

/**
 * Role Definition Result
 */
export interface IRoleDefinitionResult extends IRoleDefinitionMethods, SP.RoleDefinition, IRoleDefinitionQueryProps, IBaseLib<IRoleDefinition, IRoleDefinitionResult, IRoleDefinitionQueryResult> { }

/**
 * Role Definition
 */
export interface IRoleDefinition extends IRoleDefinitionMethods, IRoleDefinitionQueryProps, IBaseLib<IRoleDefinition, IRoleDefinitionResult, IRoleDefinitionQueryResult> { }