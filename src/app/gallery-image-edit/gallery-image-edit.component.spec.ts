import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryImageEditComponent } from './gallery-image-edit.component';

describe('GalleryImageEditComponent', () => {
  let component: GalleryImageEditComponent;
  let fixture: ComponentFixture<GalleryImageEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryImageEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryImageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
