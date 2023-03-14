import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
  constructor(private renderer: Renderer2) {}
  ngOnInit(): void {
    this.iniciarMap();
  }

  @ViewChild('map', { static: true }) mapDiv!: ElementRef;

  map!: google.maps.Map;
  markers!: google.maps.Marker;
  ops: google.maps.MapOptions = {
    center: new google.maps.LatLng(-2.0655760649604495, -79.91265409259252),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    streetViewControl: false
  };
  iniciarMap() {
    this.map = new google.maps.Map(
      this.renderer.selectRootElement(this.mapDiv.nativeElement),
      this.ops
    );
    this.markers = new google.maps.Marker({
      map: this.map,
      position: this.map.getCenter(),
      title: "Pelupet's",
    });
  }
}
