import { Component, OnInit } from '@angular/core';

export interface DangerousAnimals {
  position: number;
  animal: string;
  deaths: string;
  description: string;
}

const DATA: DangerousAnimals[] = [
  {
    position: 1,
    animal: 'Mosquitoes',
    deaths: '750,000 deaths a year',
    description:
      'Pesky bugs that suck blood and transmit viruses from person to person.',
  },
  {
    position: 2,
    animal: 'Snakes',
    deaths: '100,000 deaths a year',
    description: 'Snakes kill through venomous bites 100,000 times per year.',
  },
  {
    position: 3,
    animal: 'Rabid Dogs',
    deaths: '35,000 deaths a year',
    description: '99% of all rabies deaths are caused by dogs.',
  },
  {
    position: 4,
    animal: 'Freshwater Snails',
    deaths: '20,000 deaths a year',
    description:
      'They carry parasitic worms that infect people with a deadly disease called schistosomiasis.',
  },
  {
    position: 5,
    animal: 'Assassin Bugs',
    deaths: '12,000 deaths a year',
    description:
      'AKA the Kissing Bug, they spread the deadly Chagas disease by biting the victims face.',
  },
];

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss'],
})
export class BasicTableComponent {
  displayedColumns: string[] = ['position', 'animal', 'deaths', 'description'];
  dataSource = DATA;
}
