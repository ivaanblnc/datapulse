import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark' | 'system';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly STORAGE_KEY = 'datapulse-theme';
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  
  currentTheme = signal<Theme>('light');

  constructor() {
    // Inicializar tema desde localStorage solo en el navegador
    if (this.isBrowser) {
      const initialTheme = this.getInitialTheme();
      this.currentTheme.set(initialTheme);
    }

    effect(() => {
      if (!this.isBrowser) return;
      
      const theme = this.currentTheme();
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem(this.STORAGE_KEY, theme);
    });
  }

  private getInitialTheme(): Theme {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY) as Theme;
      return stored || 'light';
    } catch {
      return 'light';
    }
  }

  toggle() {
    this.currentTheme.update(t => t === 'light' ? 'dark' : 'light');
  }

  setTheme(theme: Theme) {
    this.currentTheme.set(theme);
  }
}
