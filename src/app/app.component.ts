import { Component, Inject, ElementRef, ViewChild, NgZone } from '@angular/core';


import { ApiService, Maps } from './api.sevice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'maps';

  @ViewChild("search")                           //************ */ PLEASE CHECK TSCONFIG.APP.JSON *************//
  public searchElementRef: ElementRef;

  constructor(apiService: ApiService, private ngZone: NgZone) {
    apiService.api.then(maps => {
      this.initAutocomplete(maps);
    });
  }

  initAutocomplete(maps: Maps) {
    let autocomplete = new maps.places.Autocomplete(this.searchElementRef.nativeElement);
    autocomplete.addListener("place_changed", () => {
      this.ngZone.run(() => {
      });
    });
  }

}