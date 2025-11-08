import { Injectable,computed,signal,effect } from '@angular/core';

interface WidgetLayout {
    id: string;
    type: string;
    config: Record<string, any>;
    position: {x:number,y:number};
}

@Injectable({ providedIn: 'root' })
export class LayoutManagerService {
    private widgets = signal<WidgetLayout[]>([]);

    readonly allWidgets = this.widgets.asReadonly();
    readonly widgetCount = computed(() => this.widgets().length);
    readonly isEmpty = computed(() => this.widgetCount() === 0);

    //Mock up of widgets (initial development)
    addWidget(type: string)
    {
        this.widgets.update(widgets => [...widgets, 
        {
            id: crypto.randomUUID(),
            type,
            config: {},
            position: {x:0,y:0},
        }
    ]);
    }
    removeWidget(id: string) {
        this.widgets.update(widgets => widgets.filter(w => w.id !== id));
      }
}   