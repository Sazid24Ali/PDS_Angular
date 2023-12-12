import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XDocsManagementComponent } from './x-docs-management.component';

describe('XDocsManagementComponent', () => {
  let component: XDocsManagementComponent;
  let fixture: ComponentFixture<XDocsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [XDocsManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(XDocsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
