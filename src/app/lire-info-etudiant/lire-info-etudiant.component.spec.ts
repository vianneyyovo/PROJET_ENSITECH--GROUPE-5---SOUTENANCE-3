import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LireInfoEtudiantComponent } from './lire-info-etudiant.component';

describe('LireInfoEtudiantComponent', () => {
  let component: LireInfoEtudiantComponent;
  let fixture: ComponentFixture<LireInfoEtudiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LireInfoEtudiantComponent]
    });
    fixture = TestBed.createComponent(LireInfoEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
