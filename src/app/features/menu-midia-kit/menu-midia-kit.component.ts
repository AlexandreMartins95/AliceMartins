import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'menu-midia-kit',
  templateUrl: './menu-midia-kit.component.html',
  styleUrls: ['./menu-midia-kit.component.scss'],
})
export class MenuMidiaKitComponent {
  @Output() mudarSessao = new EventEmitter<string>();

  scrollTo(pagina: string) {
    this.mudarSessao.emit(pagina);
  }
}
