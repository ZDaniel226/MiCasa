import { Component } from '@angular/core';
import { Database, object, ref, set } from '@angular/fire/database';
import { take } from 'rxjs/operators';

interface Room {
  name: string;
  light: boolean;
  color: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  rooms: Room[] = [
    { name: 'cocina', light: false, color: 'gray' },
    { name: 'comedor', light: false, color: 'gray' },
    { name: 'sala', light: false, color: 'gray' },
    { name: 'atico', light: false, color: 'gray' },
    { name: 'dormitorio', light: false, color: 'gray' },
    { name: 'baño', light: false, color: 'gray' }
  ];

  constructor(private database: Database) { }

  ngOnInit() {
    this.rooms.forEach(room => {
      const roomRef = ref(this.database, `/casa/${room.name.toLowerCase()}`);
      object(roomRef).subscribe(attributes => {
        const lightValue = attributes.snapshot.val();
        room.light = lightValue;
        room.color = lightValue ? 'yellow' : 'gray';
      });
    });
  }

  toggleLight(room: Room) {
    const roomRef = ref(this.database, `/casa/${room.name.toLowerCase()}`);
    object(roomRef).pipe(
      take(1)
    ).subscribe(attributes => {
      const currentValue = attributes.snapshot.val();
      set(roomRef, !currentValue).then(() => {
        room.light = !currentValue;
        room.color = room.light ? 'yellow' : 'gray';
      });
    });
  }
}