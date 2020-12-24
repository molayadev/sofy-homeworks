import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-card-trabajo',
  templateUrl: './card-trabajo.component.html',
  styleUrls: ['./card-trabajo.component.scss']
})
export class CardTrabajoComponent implements OnInit {
  @Input() work: ICardWork = new CardWork();
  avatarImg: any;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.avatarImg = this.safeUrl(this.work.avatarImg);
  }

  safeUrl(url: string) {
    if (!url) {
      return undefined;
    }
    return this.sanitizer.bypassSecurityTrustStyle('"background-image": "url(' + url + ')"');
  }

}

export interface ICardWork {
  img: string;
  title: string;
  subtitle: string;
  description: string;
  done?: boolean;
  fileUrl?: string;
  avatarImg?: string;
}

export class CardWork implements ICardWork {
  img: string;
  title: string;
  subtitle: string;
  description: string;
  done = false;
  fileUrl?: string;
  avatarImg?: any;
  constructor() {
    this.avatarImg = './assets/img/img2_avatar.png';
    this.img = './assets/img/study1.jpeg';
    this.subtitle = 'Cervantes';
    this.title = 'Talleres';
    this.description = 'Tarea de matemáticas de la semana x';
    this.fileUrl = '#';
  }
}
