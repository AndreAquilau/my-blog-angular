import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDescComponent } from './my-desc.component';

describe('MyDescComponent', () => {
  let component: MyDescComponent;
  let fixture: ComponentFixture<MyDescComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyDescComponent]
    });
    fixture = TestBed.createComponent(MyDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
