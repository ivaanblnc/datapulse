import { Component } from '@angular/core';
import {ThemeService} from '../../core/services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  standalone: true,
})
export class Dashboard 
{
  constructor(public themeService: ThemeService) {}
}
