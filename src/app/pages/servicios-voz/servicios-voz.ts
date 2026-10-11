import {Component} from '@angular/core';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {PlayerComponent} from '../../components/player-component/player-component';
import {PlaylistComponent} from '../../components/playlist-component/playlist-component';

interface Service {
  icon: string;
  text: string;
}

interface Brand {
  name: string;
  logo: string;
}

@Component({
  selector: 'app-servicios-voz',
  imports: [NzIconDirective, PlayerComponent, PlaylistComponent],
  templateUrl: './servicios-voz.html',
  styleUrl: './servicios-voz.css',
})
export class ServiciosVoz {
  services: Service[] = [
    {icon: 'sound', text: 'Spots publicitarios (radio, TV, redes sociales)'},
    {icon: 'audio', text: 'Podcasts narrados'},
    {icon: 'video-camera', text: 'Voice over para videos corporativos'},
    {icon: 'book', text: 'Audiolibros'},
    {icon: 'notification', text: 'Vestiduras para estaciones de radio'},
    {icon: 'mobile', text: 'Voz para reels, TikTok y anuncios digitales'},
    {icon: 'phone', text: 'Voz para IVR y contestadores telefónicos'},
  ];

  brands: Brand[] = [
    {name: 'Liverpool', logo: '/brands/brand-liverpool.png'},
    {name: 'Aga', logo: '/brands/brand-aga.png'},
    {name: 'Caballitos', logo: '/brands/brand-caballitos.png'},
    {name: 'Farmacias Guadalajara', logo: '/brands/brand-farmacias-guadalajara.png'},
    {name: 'Molina Vainilla', logo: '/brands/brand-molina-vainilla.png'},
    {name: 'Sello Rojo', logo: '/brands/brand-sello-rojo.png'},
    {name: 'Skarch', logo: '/brands/brand-skarch.png'},
  ];

  waveBars: number[] = this.buildWave();

  private buildWave(): number[] {
    const bars: number[] = [];
    for (let i = 0; i < 86; i++) {
      const envelope = Math.abs(Math.sin(i * 0.17)) * 18;
      bars.push(4 + envelope + Math.abs(Math.sin(i * 1.7)) * 12);
    }
    return bars;
  }
}
