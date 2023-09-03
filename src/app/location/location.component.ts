import { Component, OnInit, OnDestroy } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import axios from 'axios';
import { Observable, Subscription } from 'rxjs';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, query, where } from '@angular/fire/firestore';
import * as moment from 'moment';
import { getDocs } from 'firebase/firestore';
import { ActivatedRoute } from '@angular/router';

interface Item {
  product: string,
  price: number,
  qty: string
}

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit, OnDestroy {
  items: any = []
  msg = null
  routeSub:any = null
  finalUser: any = null
  constructor(
    private firestore: Firestore,
    private route: ActivatedRoute
  ) { 
    
  }
  subcribtion: any
  locations = 0
  ngOnInit() {
    // this.requestPermission()
    this.routeSub = this.route.params.subscribe(params => {
      console.log //log the value of id
      this.finalUser = params['id']
      this.getItems()
    });
    
  }
  addItems(){
    const itemCollection = collection(this.firestore, 'items');
    let user = JSON.parse(localStorage.getItem("user") || '{}')
    let items = {
      message: this.msg,
      createdAt: new Date().getTime(),
      price: 3.00 ,
      user: user.id,
      connectionid: Number(user.id) + Number(this.finalUser)  + "user"
    }
    console.log(items)
    this.msg = null
    addDoc(itemCollection, items ).then(res => {
    }).catch(err => {
      console.log(err)
    })
  }

  async getItems(){
    let user = JSON.parse(localStorage.getItem("user") || '{}')
    console.log(this.finalUser)
    const itemCollection = collection(this.firestore, 'items');
    const q = query(itemCollection, where("user", "==", user.id), where("connectionid", "==", Number(user.id) + Number(this.finalUser) + "user"));
     collectionData(q).subscribe(res => {
        this.items = res
        console.log(this.items)
        this.items.sort((a: any, b: any) => {
          return a.createdAt - b.createdAt
        })
      })
  }

  isMyMsg(id: any){
    let user = JSON.parse(localStorage.getItem("user") || '{}')
    return user.id == id
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

  setDate(date: any){
   return moment(date).format('LT'); 
  }

  ngOnDestroy(): void {
      clearInterval(this.subcribtion);
  }
  

}
