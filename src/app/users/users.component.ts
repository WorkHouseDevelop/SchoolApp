import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, deleteDoc , doc} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Geolocation } from '@capacitor/geolocation';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  segment = "chat"
  constructor(
    private firestore: Firestore,
    private router: Router 
  ) { }
  users: any = []
  name = null
  longitude: any = null
  latitude: any = null
  days: any = []
  mapsCoords = {
    lat: 18.536265, 
    lng: -69.890477
  }
  markers: any = []
  ngOnInit(): void {
    this.getItems()
    Geolocation.requestPermissions().then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })

  }
  segmentChanged(e: any){
    this.segment = e.detail.value
   }
  getItems(){
    const itemCollection = collection(this.firestore, 'users')
  console.log(itemCollection)
    

     collectionData(itemCollection).subscribe(res => {
      let user = localStorage.getItem("user")
      if(user){
        let data = JSON.parse(user)
        this.users = res.filter(x => data.id != x.id )
        console.log(res)
        this.markers = res
      }

      })
  }

  async getCurrentLocation(){
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current position:', coordinates);
    this.latitude = coordinates.coords.latitude
    this.longitude = coordinates.coords.longitude
  }
  navigateChat(id: any){
    this.router.navigate([`chat/${id}`])
  }
 
   saveUser(){
    console.log(this.days)
      const itemCollection = collection(this.firestore, 'users');
      let user = {
        name: this.name,
        latitude: this.latitude,
        longitude: this.longitude,
        days: this.days,
        id: new Date().getTime(),
      }
      addDoc(itemCollection, user ).then(res => {
        console.log(res)
        this.latitude = null
        this.longitude = null
        this.days = []
      }).catch(err => {
        console.log(err)
      })

   }
   onMouseOver(infoWindow: any) {
    infoWindow.open();
}
addDays(day: any){
  let index = this.days.findIndex((d: any) => d == day)
  if(index >= 0){
    this.days.splice(index, 1)
  }else{
    this.days.push(day)

  }
}
                                   
deleteUser(id: any){

  const itemCollection = collection(this.firestore, 'users');
  console.log(id)
  const docRef = doc(this.firestore, "users", "1HqBmwSqlIG4O0FwXze5");

  deleteDoc(docRef)
}

}
