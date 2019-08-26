import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryListItemsComponent } from './library-list-items.component';

describe('LibraryListItemsComponent', () => {
  let component: LibraryListItemsComponent;
  let fixture: ComponentFixture<LibraryListItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryListItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
