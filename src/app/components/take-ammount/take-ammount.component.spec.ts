import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeAmmountComponent } from './take-ammount.component';

describe('TakeAmmountComponent', () => {
  let component: TakeAmmountComponent;
  let fixture: ComponentFixture<TakeAmmountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TakeAmmountComponent]
    });
    fixture = TestBed.createComponent(TakeAmmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
