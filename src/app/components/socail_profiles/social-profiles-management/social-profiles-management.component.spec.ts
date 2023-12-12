import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialProfilesManagementComponent } from './social-profiles-management.component';

describe('SocialProfilesManagementComponent', () => {
  let component: SocialProfilesManagementComponent;
  let fixture: ComponentFixture<SocialProfilesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialProfilesManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialProfilesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
