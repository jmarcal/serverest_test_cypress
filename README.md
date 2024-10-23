# Cypress - API - Front - Serverest
## Projeto de exemplo na API e Front Serverest

### Serverest:

Essa página documenta todas as rotas e como acessá-las: https://serverest.dev/
Essa página dá acesso ao front da aplicação: https://front.serverest.dev/login

Para mais detalhes do ServeRest (como executar localmente, etc) acesse o GitHub do projeto.
Github: https://github.com/ServeRest/ServeRest

## Cenários de Testes automatizados - Front

#### CADASTRO
    ✓ CT001 - Realizar o cadastro com sucesso

    ✓ CT002 - Realizar o cadastro com e-mail já cadastrado

    ✓ CT003 - Realizar login com sucesso

####  Cenários de Testes automatizados - API
    ✓ CT001 - Deve realizar o cadastro do produto com sucesso

    ✓ CT001 - Deve realizar o cadastro com sucesso

    ✓ CT001 - Deve realizar login com sucesso


## Clonando e executando em sua máquina

### Pré-requisito:

-Node.js - Você encontra em: https://nodejs.org/en/

-Visual Studio Code ou qualquer editor de texto. Você encontra em: https://code.visualstudio.com/download

-Git: você encontra em: https://git-scm.com/downloads


Via terminal, rode os seguintes comandos:
```  
git clone https://github.com/jmarcal/serverest_test_cypress.git
```
```

#### Para instalar as dependencias:
```
npm install 
```

#### Suba o ambiente localhost
```
npx run start
```
Ou

```
npx serverest
```

Após a execução, basta acessar a documentação http://localhost:3000/ 

IMPORTANTE: Não feche o terminal com a execução do Serverest enquanto estiver usando.

#### Para executar em moodo Headlesss, via console
```
npx cypress run
```

#### Para executar no front
```
npx cypress open 
```
### Materiais de apoio:
-Cypress: Framework de automação: https://cypress.io/




