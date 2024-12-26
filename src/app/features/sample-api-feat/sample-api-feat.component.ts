import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UserActions from './store/actions/user.actions';
import { selectUserData } from './store/selectors/user.selectors';
import { MockUserData } from './types';

@Component({
  selector: 'sample-api-feat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sample-api-feat.component.html',
  styleUrl: './sample-api-feat.component.scss',
})
export class SampleApiFeatComponent {
  storeUsers$;

  constructor(private store: Store) {
    this.storeUsers$ = this.store.select<MockUserData[]>(selectUserData);
  }

  loadAndSaveToStore(): void {
    fetch('https://api.example.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: MockUserData[]) => {
        console.log('API Data:', data);
        this.store.dispatch(UserActions.saveUserData({ userData: data }));
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }
}
