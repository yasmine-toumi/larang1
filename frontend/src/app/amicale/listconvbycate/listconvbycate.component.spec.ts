import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListconvbycateComponent } from './listconvbycate.component';

describe('ListconvbycateComponent', () => {
  let component: ListconvbycateComponent;
  let fixture: ComponentFixture<ListconvbycateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListconvbycateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListconvbycateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
