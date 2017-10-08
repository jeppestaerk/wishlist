import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';


export class Wish {
  title: string;
  body: string;
  price: number;
  link: string;
  image: string;
}

const WISHES: Wish[] = [
  { title: 'Intelligent LED-pære',
    body: 'Philips Hue E27 Dimming startpakke',
    price: 279,
    link: 'https://www.av-cables.dk/philips-hue-startpakke/philips-hue-e27-dimming-startpakke.html',
    image: 'assets/philips-hue-e27-dimming-pack.png'},

  { title: 'Mobil oplader kabel',
    body: 'Dash Type-C Cable 150 cm',
    price: 169,
    link: 'https://oneplus.net/dk/dash-type-c-cable',
    image: 'assets/dash-type-c-cable.png'},

  { title: 'Parfume',
    body: 'Yves Saint Laurent L\'Homme',
    price: 400,
    link: 'http://www.magasin.dk/lhomme-eau-de-toilette/VA7800303-00000001_061.html',
    image: 'assets/ysl-lhomme.png'},

  { title: 'Trådløs lyd',
    body: 'Chromecast Audio',
    price: 319,
    link: 'https://www.av-cables.dk/traadloes-lyd/chromecast-audio.html',
    image: 'assets/chromecast-audio.png'},

  { title: 'Skægtrimmer',
    body: 'Remington MB4110 Skægtrimmer',
    price: 449,
    link: 'https://www.made4men.dk/remington-mb4110-skaegtrimmer.html',
    image: 'assets/remington-mg4110.png'},

  { title: 'Hovedpude',
    body: 'Pude Dunlopillo TempSmart 40x60x12',
    price: 700,
    link: 'https://jysk.dk/sovevaerelse/puder/specialpuder/gold/pude-dunlopillo-tempsmart-40x60x12',
    image: 'assets/dunlopillo-tempsmart.png'}
];

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css'],
  animations: [
    trigger('flyIn', [
      state('in', style({transform: 'translateY(0%)'})),
      transition('void => *', [
        style({transform: 'translateY(240%)'}),
        animate('500ms 500ms ease-in-out')
      ])
    ])
  ]
})
export class WishComponent {
  wishes = WISHES;
}
