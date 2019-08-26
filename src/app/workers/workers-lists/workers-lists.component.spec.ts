import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersListsComponent } from './workers-lists.component';

describe('WorkersListsComponent', () => {
  let component: WorkersListsComponent;
  let fixture: ComponentFixture<WorkersListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkersListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
