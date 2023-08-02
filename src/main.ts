import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ItemlistComponent } from './itemlist/itemlist.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ItemlistComponent],
  templateUrl: './main.html',
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideAnimations()],
});
