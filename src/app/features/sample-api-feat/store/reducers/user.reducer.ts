import { createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import { MockUserData } from '../../types';

export interface UserState {
  userData: MockUserData[];
}

export const initialState: UserState = {
  userData: [], // 初期状態を空配列に設定
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.saveUserData, (state, { userData }) => ({
    ...state,
    userData,
  })),
);
