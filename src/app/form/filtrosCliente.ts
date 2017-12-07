export class FiltrosCliente {
  nome: any;
  
  cargaPorParametros(parametros: any): void {
    this.nome = parametros.nome;
  }

  converterParaParametros(): any {
    const parametros: any = {
      nome: this.nome,
 
    };

       return parametros;
  }

  cargaPorFormulario(values: any): void {
    this.nome = values.nome;
 
  }

  converterParaValoresFormulario(): any {
    const parametros: any = {
      nome: this.nome,
      
    };
   
    return parametros;
  }
 
}
