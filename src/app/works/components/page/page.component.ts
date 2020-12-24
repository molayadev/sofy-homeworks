import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from '../../../shared/services/firestore.service';
import { CardWork } from '../../../shared/components/card-trabajo/card-trabajo.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  cols = 1;
  cardWorks: CardWork[];
  works: {img: string, subject: string, title: string, week: string, fileUrl: string, done: boolean}[];
  weeks: {id: string, text: string}[];
  subjects: string[];
  item: { week: string, subject?: string, worksByWeek: CardWork[], worksBySubject: CardWork[]}[];
  toShow: { byWeek: {key: string, works: CardWork[]}[] , bySubject: {key: string, works: CardWork[]}[] };
  user: {name: string, lastname: string, avatarImg?: any};
  private defaultAvatarImg: string;
  showBySubject = false;
  constructor(
    private sanitizer: DomSanitizer,
    private firestore: FirestoreService,
    private router: Router,
    private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.firestore.getData().subscribe(data => {
      this.works = [...data.works];
      this.weeks = data.weeks;
      this.defaultAvatarImg = data.avatarImg ? data.avatarImg : 'https://api.adorable.io/avatars/90/ubicapo.png';
      const avatarImg = this.sanitizer.bypassSecurityTrustResourceUrl(this.defaultAvatarImg);
      this.user = {name: data.name, lastname: data.lastname, avatarImg};
      this.subjects = [...data.subjects];
      console.log('SUBJECTS: ', this.subjects, this.showBySubject);
      const byWeek = data.weeks.map(element => {
        const week = element.id;
        const dataWeeks = this.getWorksByWeek(week);
        return {key: element.text, works: dataWeeks};
      });
      console.log('BY WEEK: ', byWeek, this.showBySubject);
      const bySubject = this.subjects.map(element => {
        const subject = element;
        const dataSubject = this.getWorksBySubject(subject);
        return {key: subject, works: dataSubject};
      });
      console.log('BY WEEK: ', bySubject, this.showBySubject);
      this.toShow = {byWeek, bySubject};
      console.log(this.toShow, '.asda.asdasdadsasdasd', this.works);
    });
  }

  getFilteredSections(): string[] {
    if (this.showBySubject) {
      return this.subjects;
    }
    return this.weeks.map(obj => obj.text);
  }

  getFilteredWorks(index: number): CardWork[] {
    if (this.showBySubject) {
      return this.getWorksBySubject(this.subjects[index]);
    }
    return this.getWorksByWeek(this.weeks[index].id);
  }

  getWeekTitle(id: string) {
    return this.weeks.filter(week => week.id === id)[0].text;
  }
  goToPage(id: string) {
    this.router.navigate([id], { relativeTo: this.route } );
  }

  getWorksBySubject(subject: string) {
    return this.works.filter(work => work.subject === subject).map( item => {
      const cardWork: CardWork = { title: this.getWeekTitle(item.week), img: item.img, done: item.done,
        subtitle: item.title, description: item.subject, fileUrl: item.fileUrl ? item.fileUrl : '#', avatarImg: this.defaultAvatarImg};
      return cardWork;
    });
  }

  getWorksByWeek(week: string) {
    console.log(this.works);
    return this.works.filter(work => work.week === week).map( item => {
      const cardWork: CardWork = { title: item.subject, img: item.img, done: item.done,
        subtitle: item.title, description: item.subject, fileUrl: item.fileUrl ? item.fileUrl : '#', avatarImg: this.defaultAvatarImg};
      return cardWork;
    });
  }

  getWorksFromWeek(id: string) {
    return this.works.filter(obj => obj.week === id);
  }

  onLastPageReached() {
    console.log('Ultima pagina alcanzada');
  }

  onPageChanges(event: any) {
    console.log('Cambio', event);

  }

}
