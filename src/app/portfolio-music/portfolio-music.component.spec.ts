import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMusicComponent } from './portfolio-music.component';

describe('PortfolioMusicComponent', () => {
  let component: PortfolioMusicComponent;
  let fixture: ComponentFixture<PortfolioMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
