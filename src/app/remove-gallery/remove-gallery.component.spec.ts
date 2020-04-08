import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveGalleryComponent } from './remove-gallery.component';

describe('RemoveGalleryComponent', () => {
  let component: RemoveGalleryComponent;
  let fixture: ComponentFixture<RemoveGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
