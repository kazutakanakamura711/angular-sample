import { createAction, props } from '@ngrx/store';
import { MockUserData } from '../model/user.model';

// effectでAPIを呼び出す
export const loadUserData = createAction('[User API] Load User Data');

// APIから取得したデータをストアに保存する
export const saveUserData = createAction(
  '[User API] Save User Data',
  props<{ userData: MockUserData[] }>(),
);

// API呼び出し失敗時のエラー処理
export const loadUserDataFailure = createAction(
  '[User API] Load User Data Failure',
  props<{ error: string }>(),
);
