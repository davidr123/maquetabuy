import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrComponent } from './bootstr.component';

describe('BootstrComponent', () => {
  let component: BootstrComponent;
  let fixture: ComponentFixture<BootstrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
