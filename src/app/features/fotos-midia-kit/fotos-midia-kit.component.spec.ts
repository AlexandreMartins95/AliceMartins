import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosMidiaKitComponent } from './fotos-midia-kit.component';

describe('FotosMidiaKitComponent', () => {
  let component: FotosMidiaKitComponent;
  let fixture: ComponentFixture<FotosMidiaKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotosMidiaKitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotosMidiaKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
