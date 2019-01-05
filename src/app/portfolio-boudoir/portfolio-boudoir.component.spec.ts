import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioBoudoirComponent } from './portfolio-boudoir.component';

describe('PortfolioBoudoirComponent', () => {
  let component: PortfolioBoudoirComponent;
  let fixture: ComponentFixture<PortfolioBoudoirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioBoudoirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioBoudoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
