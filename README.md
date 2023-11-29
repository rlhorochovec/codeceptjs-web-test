# codeceptjs-web-test
[![codeceptjs-web-test](https://github.com/rlhorochovec/codeceptjs-web-test/actions/workflows/ci.yml/badge.svg)](https://github.com/rlhorochovec/codeceptjs-web-test/actions/workflows/ci.yml)

Projeto de automação de testes web utilizando CodeceptJS, Cucumber e Allure Report, executando via GitHub Actions e publicando o relatório da execução no GitHub Pages.

## Dependências
- CodeceptJS: 3.5.7
- Playwright: 1.39.0
- Allure CodeceptJS: 2.9.2

## Instalação
Instale codeceptjs-web-test com npm

```bash
  cd codeceptjs-web-test
  npm install
  npm install playwright
```

## Rodando os testes
Para rodar os testes, rode o seguinte comando

```bash
  npx codeceptjs run --plugins allure
```

## Relatório dos testes
Gerar o Allure Report

```bash
  allure serve allure-results
```

Apagar o Allure Report de execuções anteriores

```bash
  allure generate --clean --output allure-results
```

Visualizar o Allure Report publicado
[Visualizar](https://rlhorochovec.github.io/codeceptjs-web-test/)

## Demonstração
[Assistir vídeo da execução](https://youtu.be/vIJ_hhnVuFI)

## Screenshots
<img src="https://github.com/rlhorochovec/codeceptjs-web-test/blob/develop/Screenshots/allure_overview.png" width="400" /> <img src="https://github.com/rlhorochovec/codeceptjs-web-test/blob/develop/Screenshots/allure_suites.png" width="400" />