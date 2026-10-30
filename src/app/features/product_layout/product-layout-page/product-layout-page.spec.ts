import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLayoutPage } from './product-layout-page';

describe('ProductLayoutPage', () => {
  let component: ProductLayoutPage;
  let fixture: ComponentFixture<ProductLayoutPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductLayoutPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductLayoutPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
