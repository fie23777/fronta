import { Component, OnInit, Output, Input, EventEmitter, SimpleChanges } from '@angular/core';
import { FiltrosCliente } from '../form/filtrosCliente';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Cliente } from '../cliente/cliente';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

   @Input() filtros: FiltrosCliente;

  
  @Output() aoPesquisar: EventEmitter<FiltrosCliente>;

  exibirFiltros: boolean;
  filtrosForm: FormGroup;
  exibirConteudo: { [logId: string]: boolean };
  
  constructor(
    private formBuilder: FormBuilder) {
    this.aoPesquisar = new EventEmitter<FiltrosCliente>();
    this.exibirFiltros = false;
  
    this.criarFormularioFiltros();
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes.filtros) {
      const filtros = <FiltrosCliente>changes.filtros.currentValue;
        if (this.exibirFiltros) {
        const dadosFormulario = filtros.converterParaValoresFormulario();
        this.filtrosForm.patchValue(dadosFormulario);
      }
    }
  }

  ngOnInit(): void {
    this.exibirConteudo = {};
      }

  onChange() {
  
}

  alternarExibicaoFiltros(): void {
    this.exibirFiltros = !this.exibirFiltros;
  }


  pesquisar(filtrosForm: FormGroup): void {
    const filtros = new FiltrosCliente();
    filtros.cargaPorFormulario(filtrosForm.value);
    this.aoPesquisar.emit(filtros);
  }

  cancelarFiltros(): void {
    this.exibirFiltros = false;
    this.limparFiltrosForm();
    this.aoPesquisar.emit(new FiltrosCliente());
  }

 
 
  private criarFormularioFiltros(): void {
    this.filtrosForm = this.formBuilder
      .group({
        nome: undefined,
    });

    this.limparFiltrosForm();
  }

  private limparFiltrosForm(): void {
    this.filtrosForm.reset();
    this.filtrosForm.patchValue(new FiltrosCliente().converterParaValoresFormulario());
  }


}
