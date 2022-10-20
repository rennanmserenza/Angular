import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoControlErroReadonlyComponent } from './campo-control-erro-readonly.component';

describe('CampoControlErroReadonlyComponent', () => {
  let component: CampoControlErroReadonlyComponent;
  let fixture: ComponentFixture<CampoControlErroReadonlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampoControlErroReadonlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampoControlErroReadonlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
