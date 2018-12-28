import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusnwallComponent } from './statusnwall.component';

describe('StatusnwallComponent', () => {
  let component: StatusnwallComponent;
  let fixture: ComponentFixture<StatusnwallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusnwallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusnwallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
