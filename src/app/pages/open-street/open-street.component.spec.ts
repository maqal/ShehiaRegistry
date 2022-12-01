import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenStreetComponent } from './open-street.component';

describe('OpenStreetComponent', () => {
  let component: OpenStreetComponent;
  let fixture: ComponentFixture<OpenStreetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenStreetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenStreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
