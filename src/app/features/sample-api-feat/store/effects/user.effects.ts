import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as UserActions from '../actions/user.actions';
import { MockUserData } from '../model/user.model';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
  ) {}

  loadUserData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUserData),
      mergeMap(() =>
        this.http.get<MockUserData[]>('https://api.example.com/users').pipe(
          // API 成功時: データを `saveUserData` アクションとしてディスパッチ
          map((userData) => {
            // データをストアに保存
            return UserActions.saveUserData({ userData });
          }),
          // API 失敗時: エラー情報を `loadUserDataFailure` アクションとしてディスパッチ
          catchError((error) => {
            // エラーをコンソールに出力
            console.error('Error in Effect:', error);
            return of(
              // エラーメッセージを含むアクションを返す
              UserActions.loadUserDataFailure({
                error: error.message || 'Unknown error occurred',
              }),
            );
          }),
        ),
      ),
    ),
  );
}
