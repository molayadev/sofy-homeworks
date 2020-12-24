import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTrabajoComponent } from './card-trabajo.component';

describe('CardTrabajoComponent', () => {
  let component: CardTrabajoComponent;
  let fixture: ComponentFixture<CardTrabajoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTrabajoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
