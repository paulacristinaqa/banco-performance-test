# Banco Performance Tests

Testes de performance desenvolvidos em **JavaScript utilizando K6** para
avaliar a estabilidade, latência e capacidade de carga de endpoints de
uma API bancária.

Este projeto foi criado com foco em **engenharia de qualidade (QA)** e
**testes de performance automatizados**, servindo também como material
de estudo e portfólio técnico.

------------------------------------------------------------------------

# Introdução

Este repositório contém uma suíte de testes de performance desenvolvida
com **K6** para validar o comportamento de APIs sob diferentes níveis de
carga.

Os testes simulam múltiplos usuários realizando operações comuns em
sistemas bancários, permitindo avaliar:

-   tempo de resposta da API
-   taxa de erro
-   comportamento sob carga crescente
-   estabilidade da aplicação
-   gargalos de performance

Todos os testes utilizam uma variável de ambiente chamada:

BASE_URL

Ela define o endereço base da API que será testada, permitindo executar
os mesmos testes em diferentes ambientes (local, staging, produção,
etc).

------------------------------------------------------------------------

# Tecnologias utilizadas

Este projeto utiliza as seguintes tecnologias:

-   **JavaScript (ES6)**
-   **K6** --- ferramenta de testes de carga e performance
-   **Git / GitHub** para versionamento



| Tecnologia | Função |
|---|---|
| K6 | Execução de testes de carga |
| JavaScript | Escrita dos scripts de teste |
| Git | Versionamento |
| GitHub | Hospedagem do repositório |

------------------------------------------------------------------------

# Estrutura do repositório

A estrutura do projeto foi organizada para facilitar manutenção,
reutilização de código e expansão futura da suíte de testes.

    banco-performance-test
    ├── config/    │   
    │   └── config.local.json
    │
    ├── fixtures/
    │   ├── postLogin.json
    │   ├── postTransfers.json
    │   └── ...
    │
    ├── tests/
    │   ├── login.test.js
    │   ├── transfers.test.js
    │   └── ...
    ├── utils/    
    │   └── variaveis.js
    │
    ├── helpers/    
    │   └── autenticacao.js
    │
    ├── .gitignore/
    ├── html-report.html/
    ├── package.json/        │
    └── README.md

------------------------------------------------------------------------

# Objetivo de cada grupo de arquivos

### tests/

Contém os **scripts principais de teste de performance**.

Cada arquivo representa um cenário de teste específico, como por
exemplo:

-   login de usuários
-   transferências bancárias

Esses testes simulam múltiplos usuários acessando a API simultaneamente.

------------------------------------------------------------------------

### utils/

Contém **funções reutilizáveis** utilizadas pelos testes.

Exemplos:

-   variáveis do projeto

Esse padrão reduz duplicação de código entre testes.

------------------------------------------------------------------------

------------------------------------------------------------------------

### reports/

Diretório destinado ao armazenamento de **relatórios exportados dos
testes de performance**.

Esses relatórios podem ser gerados automaticamente pelo K6 após a
execução dos testes.

------------------------------------------------------------------------

# Instalação do projeto

## 1 --- Clonar o repositório

``` bash
git clone https://github.com/paulacristinaqa/banco-performance-test.git
```

Entrar na pasta do projeto:

``` bash
cd banco-performance-test
```

------------------------------------------------------------------------

## 2 --- Instalar o K6

Caso ainda não tenha o K6 instalado.

### Linux

``` bash
sudo apt install k6
```

### MacOS

``` bash
brew install k6
```

### Windows

``` bash
choco install k6
```

Documentação oficial:

https://k6.io/docs/get-started/installation/

------------------------------------------------------------------------

# Execução dos testes

Antes de executar os testes é necessário definir a variável de ambiente:

BASE_URL

Exemplo:

``` bash
export BASE_URL=http://localhost:3000
```

ou

``` bash
BASE_URL=http://localhost:3000
```

------------------------------------------------------------------------

# Executando um teste

Exemplo executando o teste de login:

``` bash
k6 run tests/login.test.js
```

------------------------------------------------------------------------

# Dashboard em tempo real

O K6 permite acompanhar os resultados dos testes em **tempo real através
de um dashboard web**.

Exemplo:

``` bash
K6_WEB_DASHBOARD=true k6 run tests/login.test.js
```

------------------------------------------------------------------------

# Exportando relatório HTML

Também é possível exportar o relatório gerado pelo K6 para um arquivo
HTML.

Exemplo:

``` bash
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html=report.html k6 run tests/login.test.js
```

Após a execução do teste, será gerado o arquivo:

html-report.html

Esse arquivo pode ser aberto em qualquer navegador para análise
detalhada da execução.

------------------------------------------------------------------------

# Boas práticas adotadas

Este projeto segue algumas boas práticas de engenharia de testes:

-   separação entre testes, utilitários e dados
-   uso de variáveis de ambiente
-   reutilização de funções
-   organização modular da suíte de testes
-   geração de relatórios para análise posterior

------------------------------------------------------------------------

# Objetivo do projeto

Este repositório foi criado com finalidade de:

-   estudo de **testes de performance com K6**
-   demonstração de habilidades de **QA e Performance Testing**
-   composição de **portfólio técnico**

------------------------------------------------------------------------

# Autor

Paula Cristina\
QA Engineer \| Software Engineer \| Backend Developer
