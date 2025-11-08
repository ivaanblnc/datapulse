import { Component } from '@angular/core';
import {ThemeService} from '../../core/services/theme.service';
import { CommonModule } from '@angular/common';
import { WidgetGrid } from './components/widget-grid';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  standalone: true,
  imports: [WidgetGrid],
})
export class Dashboard 
{
  constructor(public themeService: ThemeService) {}
}
