# TestFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

- O padrão de commits utilizado deverá ser o de commits semânticos, e deverão ser em inglês, segue uma lista de tipos do padrão de commits semâmticos:
```
test: indica qualquer tipo de criação ou alteração de códigos de teste. 
    - Exemplo: Criação de testes unitários.
feat: indica o desenvolvimento de uma nova feature ao projeto. 
    - Exemplo: Acréscimo de um serviço, funcionalidade, endpoint, etc.
refactor: usado quando houver uma refatoração de código que não tenha qualquer tipo de impacto na lógica/regras de negócio do sistema. 
    - Exemplo: Mudanças de código após um code review
style: empregado quando há mudanças de formatação e estilo do código que não alteram o sistema de nenhuma forma.
    - Exemplo: Mudar o style-guide, mudar de convenção lint, arrumar indentações, remover espaços em brancos, remover comentários, etc..
fix: utilizado quando há correção de erros que estão gerando bugs no sistema.
    - Exemplo: Aplicar tratativa para uma função que não está tendo o comportamento esperado e retornando erro.
chore: indica mudanças no projeto que não afetem o sistema ou arquivos de testes. São mudanças de desenvolvimento.
    - Exemplo: Mudar regras do eslint, adicionar prettier, adicionar mais extensões de arquivos ao .gitignore
docs: usado quando há mudanças na documentação do projeto.
    - Exemplo: adicionar informações na documentação da API, mudar o README, etc.
build: utilizada para indicar mudanças que afetam o processo de build do projeto ou dependências externas.
    - Exemplo: Gulp, adicionar/remover dependências do npm, etc.
perf: indica uma alteração que melhorou a performance do sistema.
    - Exemplo: alterar ForEach por while, melhorar a query ao banco, etc.
ci: utilizada para mudanças nos arquivos de configuração de CI.
    - Exemplo: Circle, Travis, BrowserStack, etc.
revert: indica a reverão de um commit anterior.
```
- O padrão de variáveis será camel case (camelCase) e todas deverão ser em inglês.
=======