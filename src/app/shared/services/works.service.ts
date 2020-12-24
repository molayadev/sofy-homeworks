import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class WorksService {
  works: IWork[] = WORKS;
  item: any;
  constructor(private firestore: AngularFirestore) {
    this.item = firestore.collection('users').doc('olaya.sofia@gmail.com').valueChanges();
  }

  getWorks() {
    return this.works;
  }

  getStoredData() {
    return this.item;
  }

  getWorkById(id: string) {
    return this.works.filter(item => item.id === id).shift();
  }
}

export enum SubjectsType {
  MATHS = 'Matemáticas',
  SPANISH = 'Lengua',
  ENGLISH = 'Inglés'
}

export enum WeeksType {
  ONE,
  TWO,
  THREE
}
export const WEEKS: {id: string, subjects: string[], title: string, works: IWork[]}[] = [
  {
    id: '1', title: 'Semana 1', subjects: ['1', '2', '3'],
  works: [{id: '1', subject: 'Matemáticas'}, {id: '2', subject: 'Lengua'}]},
  {
    id: '2', title: 'Semana 2', subjects: ['1', '3', '4'],
  works: [{id: '3', subject: 'Matemáticas'}, {id: '4', subject: 'Lengua'}, {id: '5', subject: 'Inglés'}]
  },
  {id: '3', title: 'Semana 3', subjects: ['1', '4'], works: [{id: '1', subject: 'Matemáticas'}, {id: '2', subject: 'Lengua'}]},
  {id: '4', title: 'Semana 4', subjects: ['1', '2'], works: [{id: '1', subject: 'Matemáticas'}, {id: '2', subject: 'Lengua'}]},
];

export const SUBJECTS: {id: string, title: string }[] = [
  {id: '1', title: 'Matemáticas'},
  {id: '1', title: 'Lengua'},
  {id: '1', title: ''},
]

export const WORKS: IWork[] = [
  {
    id: '1', week: 'Semana 1', subject: 'Matemáticas', author: 'Sofia Olaya',
      works: [
        {title: 'Parte 1', imgSrc: './assets/img/IMG_1.jpg', cols: 1, rows: 1},
        {title: 'Parte 2', imgSrc: './assets/img/IMG_2.jpg', cols: 1, rows: 1},
    ]
  },
  {
    id: '2', week: 'Semana 1', subject: 'Lengua', author: 'Sofia Olaya',
      works: [
        {title: 'Parte 1', imgSrc: './assets/img/study2.jpeg', cols: 1, rows: 1},
        {title: 'Parte 2', imgSrc: './assets/img/study2.jpeg', cols: 1, rows: 1},
    ]
  },
  {
    id: '3', week: 'Semana 2', subject: 'Matemáticas', author: 'Sofia Olaya',
      works: [
        {title: 'Parte 1', imgSrc: './assets/img/study1.jpeg', cols: 1, rows: 1},
        {title: 'Parte 2', imgSrc: './assets/img/study1.jpeg', cols: 1, rows: 1},
    ]
  }
];

export interface IWorkItem {
  title: string;
  imgSrc: string;
  description?: string;
  cols: number;
  rows: number;
}

export interface IWork {
  id: string;
  works?: IWorkItem [];
  subject?: string;
  author?: string;
  week?: string;
}
