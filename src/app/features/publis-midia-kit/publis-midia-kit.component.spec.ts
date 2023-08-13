import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisMidiaKitComponent } from './publis-midia-kit.component';

describe('PublisMidiaKitComponent', () => {
  let component: PublisMidiaKitComponent;
  let fixture: ComponentFixture<PublisMidiaKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisMidiaKitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublisMidiaKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
