import { Component, OnInit } from '@angular/core';
interface ComunidadeSelecionada {
  nome: string;
  codigo_estrutura: string;
}

interface GrupoSelecionado {
  nome: string;
  codigo_estrutura: string;
  codigo_comunidade: string;
}

interface MeuObjeto {
  comunidadesSelecionadas: ComunidadeSelecionada[];
  gruposSelecionados: GrupoSelecionado[];
}
@Component({
  selector: 'home-midia-kit',
  templateUrl: './home-midia-kit.component.html',
  styleUrls: ['./home-midia-kit.component.scss'],
})
export class HomeMidiaKitComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
