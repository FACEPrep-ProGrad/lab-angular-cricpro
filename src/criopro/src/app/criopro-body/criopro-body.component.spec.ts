import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrioproBodyComponent } from './criopro-body.component';

describe('CrioproBodyComponent', () => {
  let component: CrioproBodyComponent;
  let fixture: ComponentFixture<CrioproBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrioproBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrioproBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
