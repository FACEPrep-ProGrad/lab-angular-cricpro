import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrioproFooterComponent } from './criopro-footer.component';

describe('CrioproFooterComponent', () => {
  let component: CrioproFooterComponent;
  let fixture: ComponentFixture<CrioproFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrioproFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrioproFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
