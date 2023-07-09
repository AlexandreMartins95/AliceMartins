import { NgModule } from '@angular/core';
import { MenuMidiaKitComponent } from './menu-midia-kit/menu-midia-kit.component';
import { HomeMidiaKitComponent } from './home-midia-kit/home-midia-kit.component';
import { SobreMidiaKitComponent } from './sobre-midia-kit/sobre-midia-kit.component';
import { TrabalhosMidiaKitComponent } from './trabalhos-midia-kit/trabalhos-midia-kit.component';

@NgModule({
  declarations: [
    MenuMidiaKitComponent,
    HomeMidiaKitComponent,
    SobreMidiaKitComponent,
    TrabalhosMidiaKitComponent,
  ],
  imports: [],
  exports: [
    MenuMidiaKitComponent,
    HomeMidiaKitComponent,
    SobreMidiaKitComponent,
    TrabalhosMidiaKitComponent,
  ],
  providers: [],
})
export class FeaturesModule {}
