import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocummentComponent } from './documment.component';

describe('DocummentComponent', () => {
  let component: DocummentComponent;
  let fixture: ComponentFixture<DocummentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocummentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocummentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
