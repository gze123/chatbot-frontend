// Section 1
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import {User} from "../state/user.model";

// Section 2
export const ADD_USER       = '[USER] Add'
export const REMOVE_USER    = '[USER] Remove'

// Section 3
export class UserAction implements  Action {
  readonly type;
  payload: any;
}

export class AddUser implements Action {
  readonly type = ADD_USER

  constructor(public payload: User) {}
}

export class RemoveUser implements Action {
  readonly type = REMOVE_USER

  constructor(public payload: number) {}
}

// Section 4
export type UserActions = AddUser | RemoveUser
