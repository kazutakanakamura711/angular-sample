import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

// 必須チェック
export const checkRequiredForText: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const requiredValidator = Validators.required(control);
  if (requiredValidator?.['required']) {
    return { required: 'この項目は必須です。' };
  }
  return null;
};

// 文字数チェック
export const checkNumChars = (
  minLength?: number,
  maxLength?: number,
): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    if (
      minLength != null &&
      Validators.minLength(minLength)(control)?.['minlength']
    ) {
      return {
        minlength: `この項目は${minLength}文字以上で入力してください。`,
      };
    }

    if (
      maxLength != null &&
      Validators.maxLength(maxLength)(control)?.['maxlength']
    ) {
      return {
        maxlength: `この項目は${maxLength}文字以下で入力してください。`,
      };
    }

    return null;
  };
};

// メールアドレスチェック
export const checkEmailFormat: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const emailValidator = Validators.email(control);
  if (emailValidator) {
    return { email: '有効なメールアドレスを入力してください。' };
  }
  return null;
};
