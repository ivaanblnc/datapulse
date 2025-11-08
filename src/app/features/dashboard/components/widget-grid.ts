import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { LayoutManagerService } from '../../../core/services/layout-manager.service';

@Component({
  selector: 'app-widget-grid',
  imports: [UpperCasePipe],
  templateUrl: './widget-grid.html',
  styleUrl: './widget-grid.scss',
})
export class WidgetGrid {
  constructor(public layoutManager: LayoutManagerService) {}
  addDemoWidget() {
    this.layoutManager.addWidget('crypto');
  }
  removeWidget(id: string) {
    this.layoutManager.removeWidget(id);
  }
}
