import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UserActions from './store/actions/user.actions';
import {
  selectUserData,
  selectUserError,
} from './store/selectors/user.selectors';
import { MockUserData } from './store/model/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'sample-api-feat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sample-api-feat.component.html',
  styleUrl: './sample-api-feat.component.scss',
})
export class SampleApiFeatComponent {
  // Observable<MockUserData[]> を明示的に指定
  storeUsers$: Observable<MockUserData[]>;
  // Observable<string | null> を明示的に指定
  userError$: Observable<string | null>;

  constructor(private store: Store) {
    // コンストラクタ内で初期化時storeから取得
    this.storeUsers$ = this.store.select<MockUserData[]>(selectUserData);
    this.userError$ = this.store.select<string | null>(selectUserError);
  }

  // loadUserData をstoreに通知
  loadAndSaveToStore(): void {
    this.store.dispatch(UserActions.loadUserData());
  }
}
