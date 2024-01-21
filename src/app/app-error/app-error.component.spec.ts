import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppErrorComponent } from './app-error.component';

describe('AppErrorComponent', () => {
  let component: AppErrorComponent;
  let fixture: ComponentFixture<AppErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppErrorComponent]
    });
    fixture = TestBed.createComponent(AppErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
