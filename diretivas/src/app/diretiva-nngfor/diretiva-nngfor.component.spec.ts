import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNngforComponent } from './diretiva-nngfor.component';

describe('DiretivaNngforComponent', () => {
  let component: DiretivaNngforComponent;
  let fixture: ComponentFixture<DiretivaNngforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivaNngforComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretivaNngforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
