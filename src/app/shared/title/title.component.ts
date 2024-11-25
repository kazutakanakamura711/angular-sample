import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { EditingUser } from '../concurrent-edit/concurrent-edit.component';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent {
  @Input() title: string = '';
  @Input() editingUsers: EditingUser[] = [];
}
