import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerUnCoursComponent } from './creer-un-cours.component';

describe('CreerUnCoursComponent', () => {
  let component: CreerUnCoursComponent;
  let fixture: ComponentFixture<CreerUnCoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreerUnCoursComponent]
    });
    fixture = TestBed.createComponent(CreerUnCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
