import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBordApplayForJobPopupComponent } from './dash-bord-applay-for-job-popup.component';

describe('DashBordApplayForJobPopupComponent', () => {
  let component: DashBordApplayForJobPopupComponent;
  let fixture: ComponentFixture<DashBordApplayForJobPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashBordApplayForJobPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashBordApplayForJobPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
