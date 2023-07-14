import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatisticasMidiaKitComponent } from './estatisticas-midia-kit.component';

describe('EstatisticasMidiaKitComponent', () => {
  let component: EstatisticasMidiaKitComponent;
  let fixture: ComponentFixture<EstatisticasMidiaKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstatisticasMidiaKitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstatisticasMidiaKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
