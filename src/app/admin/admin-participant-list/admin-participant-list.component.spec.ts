import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParticipantListComponent } from './admin-participant-list.component';

describe('AdminParticipantListComponent', () => {
  let component: AdminParticipantListComponent;
  let fixture: ComponentFixture<AdminParticipantListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminParticipantListComponent]
    });
    fixture = TestBed.createComponent(AdminParticipantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
