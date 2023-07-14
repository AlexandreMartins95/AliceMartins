import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoMidiaKitComponent } from './contato-midia-kit.component';

describe('ContatoMidiaKitComponent', () => {
  let component: ContatoMidiaKitComponent;
  let fixture: ComponentFixture<ContatoMidiaKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatoMidiaKitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatoMidiaKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
