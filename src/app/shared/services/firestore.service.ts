import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  item: any;
  weeks: {id: string, text: string}[];
  subjects: string[];
  user: {name: string, lastname: string};
  works: {img: string, subject: string, title: string, week: string, fileUrl: string}[];

  constructor(firestore: AngularFirestore) {
    this.item = firestore.collection('users')
    .doc('olaya.sofia@gmail.com')
    .valueChanges();

  }

  getData(): Observable<any> {
    return this.item;
  }

  async getWeeks() {
    if (!this.weeks) {
      console.log('Before');
      this.weeks = await this.item.weeks;
      console.log('After', this.weeks);
    }
    return this.weeks;
  }

  getUser() {
    if (!this.user) {
      this.user = {name: this.item.name, lastname: this.item.lastname}
    }
    return this.user;
  }

  getWorks() {
    if (!this.works) {
      this.works = this.item.works;
    }
    return this.works;
  }

  getSubjects() {
    if (!this.subjects) {
      this.subjects = this.item.subjects;
    }
    return this.subjects;
  }
}
