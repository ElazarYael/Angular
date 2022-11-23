import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XandOComponent } from './xand-o.component';

describe('XandOComponent', () => {
  let component: XandOComponent;
  let fixture: ComponentFixture<XandOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XandOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XandOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
