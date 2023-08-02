import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css'],
  standalone: true,
  imports: [MatCheckboxModule, NgFor, NgIf],
})
export class ItemlistComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  allChecked: boolean = false;

  itemlist: any[] = [
    'Changjinhu (2021)',
    'Dune (2021)',
    'Shang-Chi and the Legend of the Ten Rings (2021)',
    'Free Guy (2021)',
    'The Many Saints of Newark (2021)',
    'Finch (2021)',
    'Candyman (2021)',
    'No Time to Die (2021)',
    'Halloween Kills (2021)',
  ].map((each: string) => {
    return {
      name: each,
      checked: false,
    };
  });

  isAllChecked(): boolean {
    return this.itemlist.reduce((acc, item) => acc && item.checked, true);
  }

  toggle(item: { name: string; checked: boolean }): void {
    item.checked = !item.checked;
    if (this.isAllChecked()) {
      this.allChecked = true;
    } else {
      this.allChecked = false;
    }
  }

  toggleAll() {
    if (this.allChecked)
      this.itemlist.forEach((each) => (each.checked = false));
    else this.itemlist.forEach((each) => (each.checked = true));

    this.allChecked = !this.allChecked;
  }
}
