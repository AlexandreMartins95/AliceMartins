import { NgModule } from '@angular/core';
import { MenuMidiaKitComponent } from './menu-midia-kit/menu-midia-kit.component';
import { HomeMidiaKitComponent } from './home-midia-kit/home-midia-kit.component';
import { SobreMidiaKitComponent } from './sobre-midia-kit/sobre-midia-kit.component';

@NgModule({
  declarations: [
    MenuMidiaKitComponent,
    HomeMidiaKitComponent,
    SobreMidiaKitComponent,
  ],
  imports: [],
  exports: [
    MenuMidiaKitComponent,
    HomeMidiaKitComponent,
    SobreMidiaKitComponent,
  ],
  providers: [],
})
export class FeaturesModule {}
