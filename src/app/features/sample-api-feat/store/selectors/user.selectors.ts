import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../reducers/user.reducer';

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectUserData = createSelector(
  selectUserState,
  (state) => state?.userData || null, // `state` が undefined の場合も処理
);
