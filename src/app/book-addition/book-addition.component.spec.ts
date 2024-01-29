import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAdditionComponent } from './book-addition.component';

describe('BookAdditionComponent', () => {
  let component: BookAdditionComponent;
  let fixture: ComponentFixture<BookAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookAdditionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});