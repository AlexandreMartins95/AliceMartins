import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMidiaKitComponent } from './menu-midia-kit.component';

describe('MenuMideaKitComponent', () => {
  let component: MenuMidiaKitComponent;
  let fixture: ComponentFixture<MenuMidiaKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuMidiaKitComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuMidiaKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
