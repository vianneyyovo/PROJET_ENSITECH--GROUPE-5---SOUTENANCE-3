import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierInfoEtudiantComponent } from './modifier-info-etudiant.component';

describe('ModifierInfoEtudiantComponent', () => {
  let component: ModifierInfoEtudiantComponent;
  let fixture: ComponentFixture<ModifierInfoEtudiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierInfoEtudiantComponent]
    });
    fixture = TestBed.createComponent(ModifierInfoEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
