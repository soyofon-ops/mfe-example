import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCard } from './angular-card';

describe('AngularCard', () => {
  let component: AngularCard;
  let fixture: ComponentFixture<AngularCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
