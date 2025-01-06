import { createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import { MockUserData } from '../model/user.model';

export interface UserState {
  userData: MockUserData[];
  error: string | null;
}

// 初期状態
export const initialState: UserState = {
  userData: [],
  error: null,
};

// ユーザー関連のreducer
export const userReducer = createReducer(
  initialState,
  // データを保存し、エラーをクリア
  on(UserActions.saveUserData, (state, { userData }) => ({
    ...state,
    userData,
    error: null,
  })),
  // エラーを保存
  on(UserActions.loadUserDataFailure, (state, { error }) => ({
    ...state,
    error,
  })),
);
