import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioImageDetailComponent } from './portfolio-image-detail.component';

describe('PortfolioImageDetailComponent', () => {
  let component: PortfolioImageDetailComponent;
  let fixture: ComponentFixture<PortfolioImageDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioImageDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioImageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
