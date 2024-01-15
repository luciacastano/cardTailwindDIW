import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBuyComponent } from './btn-buy.component';

describe('BtnBuyComponent', () => {
  let component: BtnBuyComponent;
  let fixture: ComponentFixture<BtnBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnBuyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
