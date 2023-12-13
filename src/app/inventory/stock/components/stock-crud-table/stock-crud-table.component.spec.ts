import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCrudTableComponent } from './stock-crud-table.component';

describe('StockCrudTableComponent', () => {
  let component: StockCrudTableComponent;
  let fixture: ComponentFixture<StockCrudTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockCrudTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockCrudTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
