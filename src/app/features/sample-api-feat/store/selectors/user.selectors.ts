import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../reducers/user.reducer';

// ユーザー関連の状態を取得するselector
export const selectUserState = createFeatureSelector<UserState>('user');

// ユーザーデータを取得
export const selectUserData = createSelector(
  selectUserState,
  (state) => state.userData,
);

// エラーメッセージを取得
export const selectUserError = createSelector(
  selectUserState,
  (state) => state.error,
);
