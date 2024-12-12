import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateCoursesComponent } from './associate-courses.component';

describe('AssociateCoursesComponent', () => {
  let component: AssociateCoursesComponent;
  let fixture: ComponentFixture<AssociateCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssociateCoursesComponent]
    });
    fixture = TestBed.createComponent(AssociateCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
