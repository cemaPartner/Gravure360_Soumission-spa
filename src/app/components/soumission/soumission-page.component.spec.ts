import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoumissionPageComponent } from './soumission-page.component';

describe('SoumissionPageComponent', () => {
  let component: SoumissionPageComponent;
  let fixture: ComponentFixture<SoumissionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoumissionPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoumissionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
