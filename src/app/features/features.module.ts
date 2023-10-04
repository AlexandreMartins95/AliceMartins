import { NgModule } from '@angular/core';
import { MenuMidiaKitComponent } from './menu-midia-kit/menu-midia-kit.component';
import { HomeMidiaKitComponent } from './home-midia-kit/home-midia-kit.component';
import { SobreMidiaKitComponent } from './sobre-midia-kit/sobre-midia-kit.component';
import { TrabalhosMidiaKitComponent } from './trabalhos-midia-kit/trabalhos-midia-kit.component';
import { FotosMidiaKitComponent } from './fotos-midia-kit/fotos-midia-kit.component';
import { CarrosselComponent } from './fotos-midia-kit/carrossel/carrossel.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EstatisticasMidiaKitComponent } from './estatisticas-midia-kit/estatisticas-midia-kit.component';
import { ContatoMidiaKitComponent } from './contato-midia-kit/contato-midia-kit.component';
import { PublisMidiaKitComponent } from './publis-midia-kit/publis-midia-kit.component';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SplitButtonModule } from 'primeng/splitbutton';

@NgModule({
  declarations: [
    MenuMidiaKitComponent,
    HomeMidiaKitComponent,
    SobreMidiaKitComponent,
    TrabalhosMidiaKitComponent,
    FotosMidiaKitComponent,
    CarrosselComponent,
    EstatisticasMidiaKitComponent,
    ContatoMidiaKitComponent,
    PublisMidiaKitComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AccordionModule,
    ButtonModule,
    PanelMenuModule,
    SplitButtonModule,
  ],
  exports: [
    MenuMidiaKitComponent,
    HomeMidiaKitComponent,
    SobreMidiaKitComponent,
    TrabalhosMidiaKitComponent,
    FotosMidiaKitComponent,
    CarrosselComponent,
    EstatisticasMidiaKitComponent,
    ContatoMidiaKitComponent,
    PublisMidiaKitComponent,

    AccordionModule,
  ],
  providers: [],
})
export class FeaturesModule {}
