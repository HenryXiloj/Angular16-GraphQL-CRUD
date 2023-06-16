import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAuthorComponent } from './dialog-author.component';

describe('DialogAuthorComponent', () => {
  let component: DialogAuthorComponent;
  let fixture: ComponentFixture<DialogAuthorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogAuthorComponent]
    });
    fixture = TestBed.createComponent(DialogAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
