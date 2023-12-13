import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockInfoHeaderComponent } from './stock-info-header.component';

describe('StockInfoHeaderComponent', () => {
  let component: StockInfoHeaderComponent;
  let fixture: ComponentFixture<StockInfoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockInfoHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockInfoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
