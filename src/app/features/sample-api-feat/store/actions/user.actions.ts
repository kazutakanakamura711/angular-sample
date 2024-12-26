import { createAction, props } from '@ngrx/store';
import { MockUserData } from '../../types';

export const saveUserData = createAction(
  '[User API] Save User Data',
  props<{
    userData: MockUserData[];
  }>(),
);
