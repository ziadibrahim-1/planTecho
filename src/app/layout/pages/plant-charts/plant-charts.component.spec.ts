import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantChartsComponent } from './plant-charts.component';

describe('PlantChartsComponent', () => {
  let component: PlantChartsComponent;
  let fixture: ComponentFixture<PlantChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantChartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
