import { Component } from '@angular/core';
import { InputComponent } from '../../shared/input/input.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  checkRequiredForText,
  checkNumChars,
  checkEmailFormat,
} from '../../utilities/validation/common.validation';

@Component({
  selector: 'validation-feat', // このコンポーネントのセレクタ名
  standalone: true, // スタンドアロンコンポーネントとして動作
  imports: [InputComponent, FormsModule, CommonModule, ReactiveFormsModule], // 必要なモジュールのインポート
  templateUrl: './validation-feat.component.html', // HTMLテンプレートファイル
  styleUrl: './validation-feat.component.scss', // スタイルファイル
})
export class ValidationFeatComponent {
  // フォームグループのインスタンス
  userForm: FormGroup;

  // 送信後かどうかを判定するフラグ
  submitted = false;

  constructor(private fb: FormBuilder) {
    // フォームグループを作成し、送信時にのみバリデーションを実行するよう設定
    this.userForm = this.fb.group({
      name: this.fb.control('', {
        validators: [
          checkRequiredForText, // 必須チェック
          checkNumChars(2, 10), // 文字数チェック（2文字以上10文字以下）
        ],
        updateOn: 'submit', // 送信時にのみバリデーションを実行
      }),
      email: this.fb.control('', {
        validators: [
          checkRequiredForText, // 必須チェック
          checkEmailFormat, // メールアドレス形式のチェック
        ],
        updateOn: 'submit', // 送信時にのみバリデーションを実行
      }),
    });
  }

  // フォームの送信処理
  onSubmit() {
    this.submitted = true; // 送信後であることを示すフラグを設定

    // フォーム全体のバリデーションをトリガー
    if (!this.userForm.valid) {
      this.userForm.markAllAsTouched(); // 全てのフィールドをタッチ済みに設定し、エラーを表示
      return; // フォームが無効なら処理を中断
    }

    // フォームが有効な場合、送信処理を実行
    console.log('送信しました。', this.userForm.value); // フォームの値をログに出力
  }

  // 指定したフォームコントロールにエラーがあるかを判定
  hasError(controlName: string, errorName: string): boolean {
    const control = this.userForm.get(controlName); // 指定されたコントロールを取得
    return (
      this.submitted && // フォームが送信された後
      !!control?.invalid && // コントロールが無効であり
      !!control?.hasError(errorName) // 指定されたエラーが存在する場合
    );
  }
}
