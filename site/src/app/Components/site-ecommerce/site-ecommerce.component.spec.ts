import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteEcommerceComponent } from './site-ecommerce.component';

describe('SiteEcommerceComponent', () => {
  let component: SiteEcommerceComponent;
  let fixture: ComponentFixture<SiteEcommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteEcommerceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
