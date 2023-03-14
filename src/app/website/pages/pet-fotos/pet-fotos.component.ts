import { Component } from '@angular/core';

@Component({
  selector: 'app-pet-fotos',
  templateUrl: './pet-fotos.component.html',
  styleUrls: ['./pet-fotos.component.scss'],
})
export class PetFotosComponent {
  urls: string[] = [
    '../../../../assets/imgs/pet-fotos/bello.jpg',
    '../../../../assets/imgs/pet-fotos/bombon.jpg',
    '../../../../assets/imgs/pet-fotos/chiquitinas.jpg',
    '../../../../assets/imgs/pet-fotos/copito.jpg',
    '../../../../assets/imgs/pet-fotos//corte-perrito.jpg',
    '../../../../assets/imgs/pet-fotos/fido.jpg',
    '../../../../assets/imgs/pet-fotos/frida.jpg',
    '../../../../assets/imgs/pet-fotos/ghost.jpg',
    '../../../../assets/imgs/pet-fotos/lomu.jpg',
    '../../../../assets/imgs/pet-fotos/martin.jpg',
    '../../../../assets/imgs/pet-fotos/phill-y-sam.jpg',
    '../../../../assets/imgs/pet-fotos/tobi.jpg',
    '../../../../assets/imgs/pet-fotos/zetaa.jpg',
  ];
}
