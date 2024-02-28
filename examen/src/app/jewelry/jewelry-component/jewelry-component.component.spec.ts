import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelryComponentComponent } from './jewelry-component.component';

describe('JewelryComponentComponent', () => {
  let component: JewelryComponentComponent;
  let fixture: ComponentFixture<JewelryComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JewelryComponentComponent]
    });
    fixture = TestBed.createComponent(JewelryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
