import { AbstractControl, ValidationErrors } from '@angular/forms';

// 必須チェック
export const checkRequiredForText = (
  control: AbstractControl,
): ValidationErrors | null => {
  const value = control.value?.trim() || '';
  if (!value) {
    return { required: 'この項目は必須です。' };
  }
  return null;
};

// 文字数チェック
export const checkNumChars =
  (
    minLength?: number,
    maxLength?: number,
  ): ((control: AbstractControl) => ValidationErrors | null) =>
  (control: AbstractControl): ValidationErrors | null => {
    const value = control.value || '';
    if (minLength != null && value.length < minLength) {
      return {
        minlength: `この項目は${minLength}文字以上で入力してください。`,
      };
    }
    if (maxLength != null && value.length > maxLength) {
      return {
        maxlength: `この項目は${maxLength}文字以下で入力してください。`,
      };
    }
    return null;
  };
