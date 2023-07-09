import { Component, OnInit, OnDestroy } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import axios from 'axios';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit, OnDestroy {

  constructor() { }
  subcribtion: any
  locations = 0
  ngOnInit() {
    this.requestPermission()
  }

  async requestPermission(){
    let result = await Geolocation.requestPermissions()
    console.log(result)
  }

  async startSendLocation(){
    let coords = await Geolocation.getCurrentPosition()
    this.subcribtion =  setInterval(() => {
      let data = null
      data = localStorage.getItem("location")
      if(data){
        data = JSON.parse(data)
        this.locations = data.length
      }else{
        data = []
      }
      data.push({lat: coords.coords.latitude, lng: coords.coords.longitude})

      localStorage.setItem("location", JSON.stringify(data))
    }, 5000)
  }

  ngOnDestroy(): void {
      clearInterval(this.subcribtion);
  }
  

}
