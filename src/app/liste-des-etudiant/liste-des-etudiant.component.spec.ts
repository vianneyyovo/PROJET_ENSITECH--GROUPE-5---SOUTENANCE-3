import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesEtudiantComponent } from './liste-des-etudiant.component';

describe('ListeDesEtudiantComponent', () => {
  let component: ListeDesEtudiantComponent;
  let fixture: ComponentFixture<ListeDesEtudiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDesEtudiantComponent]
    });
    fixture = TestBed.createComponent(ListeDesEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
