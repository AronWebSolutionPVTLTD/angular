import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcreateuserComponent } from './showcreateuser.component';

describe('ShowcreateuserComponent', () => {
  let component: ShowcreateuserComponent;
  let fixture: ComponentFixture<ShowcreateuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcreateuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcreateuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
