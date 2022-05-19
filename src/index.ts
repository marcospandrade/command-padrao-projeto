interface ICommand {
    execute(): void;
}

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

class SalvarCommand implements ICommand {
    constructor(private s: Salvar) {}

    handleSalvar() {
        console.log('Salvando...');
        this.s.handleSalvarBanco();
    }

    execute(): void {
        console.log('Inicio Salvar');
        this.handleSalvar();
    }
}

class DeletarCommand implements ICommand {
    constructor(private d: Deletar) {}

    handleDeletar() {
        console.log('Deletando...');
        this.d.handleDeletarBanco();
    }

    execute(): void {
        console.log('Inicio Delete');
        this.handleDeletar();
    }
}

class DTOInvoker {
    comand: ICommand = {
        execute: () => console.log('Not implemented')
    };

    setCommand(command: ICommand) {
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
