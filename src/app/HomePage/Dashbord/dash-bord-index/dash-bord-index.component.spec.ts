import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBordIndexComponent } from './dash-bord-index.component';

describe('DashBordIndexComponent', () => {
  let component: DashBordIndexComponent;
  let fixture: ComponentFixture<DashBordIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashBordIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashBordIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
