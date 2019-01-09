import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecorrenciaComponent } from './recorrencia.component';

describe('RecorrenciaComponent', () => {
  let component: RecorrenciaComponent;
  let fixture: ComponentFixture<RecorrenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecorrenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
