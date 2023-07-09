import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMidiaKitComponent } from './home-midia-kit.component';

describe('HomeMidiaKitComponent', () => {
  let component: HomeMidiaKitComponent;
  let fixture: ComponentFixture<HomeMidiaKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMidiaKitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMidiaKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
