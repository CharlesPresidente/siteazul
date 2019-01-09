import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMenuMComponent } from './app-menu-m.component';

describe('AppMenuMComponent', () => {
  let component: AppMenuMComponent;
  let fixture: ComponentFixture<AppMenuMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMenuMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMenuMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
