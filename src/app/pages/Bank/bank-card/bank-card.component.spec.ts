import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankCardComponent } from './bank-card.component';

describe('BankCardComponent', () => {
  let component: BankCardComponent;
  let fixture: ComponentFixture<BankCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankCardComponent]
    });
    fixture = TestBed.createComponent(BankCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
