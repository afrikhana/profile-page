import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcityHeaderComponent } from './opcity-header.component';

describe('OpcityHeaderComponent', () => {
  let component: OpcityHeaderComponent;
  let fixture: ComponentFixture<OpcityHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpcityHeaderComponent]
    });
    fixture = TestBed.createComponent(OpcityHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
