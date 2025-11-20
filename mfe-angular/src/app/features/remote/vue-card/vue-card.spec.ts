import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueCard } from './vue-card';

describe('VueCard', () => {
  let component: VueCard;
  let fixture: ComponentFixture<VueCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VueCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VueCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
