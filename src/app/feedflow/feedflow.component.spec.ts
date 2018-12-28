import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedflowComponent } from './feedflow.component';

describe('FeedflowComponent', () => {
  let component: FeedflowComponent;
  let fixture: ComponentFixture<FeedflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
