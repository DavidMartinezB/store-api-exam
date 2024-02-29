import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsFilteredComponent } from './items-filtered.component';

describe('ItemsFilteredComponent', () => {
  let component: ItemsFilteredComponent;
  let fixture: ComponentFixture<ItemsFilteredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsFilteredComponent]
    });
    fixture = TestBed.createComponent(ItemsFilteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
