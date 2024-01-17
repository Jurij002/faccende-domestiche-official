import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioPulizieComponent } from './calendario-pulizie.component';

describe('CalendarioPulizieComponent', () => {
  let component: CalendarioPulizieComponent;
  let fixture: ComponentFixture<CalendarioPulizieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarioPulizieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalendarioPulizieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
