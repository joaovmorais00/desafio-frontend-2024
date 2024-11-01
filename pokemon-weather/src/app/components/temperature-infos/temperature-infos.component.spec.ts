import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureInfosComponent } from './temperature-infos.component';

describe('TemperatureInfosComponent', () => {
  let component: TemperatureInfosComponent;
  let fixture: ComponentFixture<TemperatureInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemperatureInfosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemperatureInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
