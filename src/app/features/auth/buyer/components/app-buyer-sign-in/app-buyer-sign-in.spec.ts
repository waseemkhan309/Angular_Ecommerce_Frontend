import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBuyerSignIn } from './app-buyer-sign-in';

describe('AppBuyerSignIn', () => {
  let component: AppBuyerSignIn;
  let fixture: ComponentFixture<AppBuyerSignIn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppBuyerSignIn],
    }).compileComponents();

    fixture = TestBed.createComponent(AppBuyerSignIn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
