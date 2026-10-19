import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthBuyerPage } from './auth-buyer-page';

describe('AuthBuyerPage', () => {
  let component: AuthBuyerPage;
  let fixture: ComponentFixture<AuthBuyerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthBuyerPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthBuyerPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
