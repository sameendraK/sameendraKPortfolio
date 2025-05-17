import { Component, HostListener } from '@angular/core';
import { DataService } from './services/data.service';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './directives/tooltip.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,TooltipDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dataService: DataService) {
  }
  selectedIndex: number | null = null;


  toggleTooltip(index: number): void {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }

  onOutsideClick() {
    this.closeTooltip()
  }

  closeTooltip() { }


}
