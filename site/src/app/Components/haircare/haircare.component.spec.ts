import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaircareComponent } from './haircare.component';

describe('HaircareComponent', () => {
  let component: HaircareComponent;
  let fixture: ComponentFixture<HaircareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaircareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaircareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
