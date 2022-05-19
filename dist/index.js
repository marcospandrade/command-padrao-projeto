"use strict";
class Salvar {
    handleSalvarBanco() {
        console.log('Salvo no banco');
    }
}
class Deletar {
    handleDeletarBanco() {
        console.log('Deletado do banco');
    }
}
class SalvarCommand {
    constructor(s) {
        this.s = s;
    }
    handleSalvar() {
        console.log('Salvando...');
        this.s.handleSalvarBanco();
    }
    execute() {
        console.log('Inicio Salvar');
        this.handleSalvar();
    }
}
class DeletarCommand {
    constructor(d) {
        this.d = d;
    }
    handleDeletar() {
        console.log('Deletando...');
        this.d.handleDeletarBanco();
    }
    execute() {
        console.log('Inicio Delete');
        this.handleDeletar();
    }
}
class DTOInvoker {
    constructor() {
        this.comand = {
            execute: () => console.log('Not implemented')
        };
    }
    setCommand(command) {
        this.comand = command;
    }
    executarComando() {
        this.comand.execute();
    }
}
function main() {
    const SalvarRec = new Salvar();
    const DeletarRec = new Deletar();
    const DTO = new DTOInvoker();
    DTO.setCommand(new SalvarCommand(SalvarRec));
    DTO.executarComando();
    DTO.setCommand(new DeletarCommand(DeletarRec));
    DTO.executarComando();
    console.log('\n');
}
main();
