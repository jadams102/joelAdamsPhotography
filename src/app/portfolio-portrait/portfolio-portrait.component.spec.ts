import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPortraitComponent } from './portfolio-portrait.component';

describe('PortfolioPortraitComponent', () => {
  let component: PortfolioPortraitComponent;
  let fixture: ComponentFixture<PortfolioPortraitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioPortraitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioPortraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
