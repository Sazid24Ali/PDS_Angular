import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduDetailsManagementComponent } from './edu-details-management.component';

describe('EduDetailsManagementComponent', () => {
  let component: EduDetailsManagementComponent;
  let fixture: ComponentFixture<EduDetailsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EduDetailsManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EduDetailsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
