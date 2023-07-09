import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreMidiaKitComponent } from './sobre-midia-kit.component';

describe('SobreMidiaKitComponent', () => {
  let component: SobreMidiaKitComponent;
  let fixture: ComponentFixture<SobreMidiaKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreMidiaKitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreMidiaKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
