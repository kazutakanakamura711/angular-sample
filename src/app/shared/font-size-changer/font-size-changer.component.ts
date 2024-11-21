import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store'; // Storeをインポート
import { Observable } from 'rxjs'; // 状態を監視
import {
  FontSize,
  FontSizeState,
} from '../../store/font-size.reducer/font-size.reducer';
import { selectFontSizeType } from '../../store/font-size.reducer/font-size.selectors';
import { updateFontSize } from '../../store/font-size.reducer/font-size.actions';

@Component({
  selector: 'font-size-changer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './font-size-changer.component.html',
  styleUrl: './font-size-changer.component.scss',
})
export class FontSizeChangerComponent {
  @Input() isDarkTheme?: boolean;

  // 状態を監視するObservable
  fontSizeType$: Observable<FontSize>;

  constructor(private store: Store<FontSizeState>) {
    this.fontSizeType$ = this.store.select(selectFontSizeType);
  }

  // フォントサイズを変更
  changeFontSize(size: FontSize): void {
    this.store.dispatch(updateFontSize({ fontSize: size }));
  }
}
