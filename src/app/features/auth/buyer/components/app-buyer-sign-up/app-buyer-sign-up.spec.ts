import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBuyerSignUp } from './app-buyer-sign-up';

describe('AppBuyerSignUp', () => {
  let component: AppBuyerSignUp;
  let fixture: ComponentFixture<AppBuyerSignUp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppBuyerSignUp],
    }).compileComponents();

    fixture = TestBed.createComponent(AppBuyerSignUp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
