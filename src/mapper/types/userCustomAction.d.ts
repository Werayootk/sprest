import { SP } from "gd-sprest-def";
import { IBase } from "../../utils/base/types";
import { IUserCustomActionMethods, } from ".";

/**
 * User Custom Action Methods
 */
export interface IUserCustomActionMethods {
    /**
     * Deletes the user custom action.
     */
    delete(): IBase;
}

/**
 * User Custom Action Query Properties
 */
export interface IUserCustomActionQueryProps { }

/**
 * User Custom Action Query Result
 */
export interface IUserCustomActionQueryResult extends IUserCustomActionMethods, SP.UserCustomAction { }

/**
 * User Custom Action Result
 */
export interface IUserCustomActionResult extends IUserCustomActionMethods, SP.UserCustomAction, IUserCustomActionQueryProps, IBase<IUserCustomAction, IUserCustomActionResult, IUserCustomActionQueryResult> { }

/**
 * User Custom Action
 */
export interface IUserCustomAction extends IUserCustomActionMethods, IUserCustomActionQueryProps, IBase<IUserCustomAction, IUserCustomActionResult, IUserCustomActionQueryResult> { }