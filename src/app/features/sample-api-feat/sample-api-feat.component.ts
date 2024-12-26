import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sample-api-feat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sample-api-feat.component.html',
  styleUrl: './sample-api-feat.component.scss',
})
export class SampleApiFeatComponent implements OnInit {
  userData: { id: string; name: string; isPermission: boolean } | null = null;
  error: string | null = null;

  constructor() {}

  ngOnInit(): void {
    // fetchを実行してデータを取得
    fetch('https://api.example.com/user')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        this.userData = data; // データを保存
      })
      .catch((error) => {
        this.error = error.message; // エラーを保存
      });
  }
}
