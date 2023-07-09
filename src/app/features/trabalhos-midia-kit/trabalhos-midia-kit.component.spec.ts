import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabalhosMidiaKitComponent } from './trabalhos-midia-kit.component';

describe('TrabalhosMidiaKitComponent', () => {
  let component: TrabalhosMidiaKitComponent;
  let fixture: ComponentFixture<TrabalhosMidiaKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabalhosMidiaKitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabalhosMidiaKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
