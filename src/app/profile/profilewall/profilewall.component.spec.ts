import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilewallComponent } from './profilewall.component';

describe('ProfilewallComponent', () => {
  let component: ProfilewallComponent;
  let fixture: ComponentFixture<ProfilewallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilewallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
