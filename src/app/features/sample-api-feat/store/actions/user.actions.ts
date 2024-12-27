import { createAction, props } from '@ngrx/store';
import { MockUserData } from '../model/user.model';

export const saveUserData = createAction(
  '[User API] Save User Data',
  props<{
    userData: MockUserData[];
  }>(),
);
