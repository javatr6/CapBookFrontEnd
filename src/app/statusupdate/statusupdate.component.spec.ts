import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusupdateComponent } from './statusupdate.component';

describe('StatusupdateComponent', () => {
  let component: StatusupdateComponent;
  let fixture: ComponentFixture<StatusupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
