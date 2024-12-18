import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store'; // Storeをインポート
import { Observable } from 'rxjs'; // 状態を監視
import {
  FontSize,
  FontSizeState,
} from '../../store/reducers/font-size.reducer';
import { selectFontSizeType } from '../../store/selectors/font-size.selectors';
import { updateFontSize } from '../../store/actions/font-size.actions';

@Component({
  selector: 'font-size-changer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './font-size-changer.component.html',
  styleUrl: './font-size-changer.component.scss',
})
export class FontSizeChangerComponent {
  // FontSizeChangerの表示/非表示を管理
  isFontSizeChangerVisible = false;

  @Input() isDarkTheme?: boolean;

  // 状態を監視するObservable
  fontSizeType$: Observable<FontSize>;

  constructor(private store: Store<FontSizeState>) {
    this.fontSizeType$ = this.store.select(selectFontSizeType);
  }

  ngOnInit(): void {
    this.fontSizeType$.subscribe((state) => {
      console.log('Current font size state:', state);
    });
  }

  // FontSizeChangerの表示切り替え
  toggleFontSizeChanger(): void {
    this.isFontSizeChangerVisible = !this.isFontSizeChangerVisible;
  }

  // フォントサイズを変更
  changeFontSize(size: FontSize): void {
    this.store.dispatch(updateFontSize({ fontSize: size }));
  }
}
