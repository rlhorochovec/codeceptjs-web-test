Feature: Login
  Eu como usuário do sistema
  Desejo realizar o login no sistema
  Para realizar minhas tarefas

  @LoginInvalido
  Scenario Outline: Login inválido
    Given inseri usuário "<usuario>" e senha "<senha>"
    When clicar no botão Entrar
    Then apresentará uma mensagem de "<mensagem>"
    Examples:
      | usuario | senha  | mensagem                       |
      | admin   |        | Informe a senha!               |
      |         | user   | Informe o usuário!             |
      | admin   | user   | Usuário e/ou senha incorretos! |
      |         |        | Informe usuário e senha!       |

  @LoginValido
  Scenario Outline: Login válido
    Given inseri usuário "<usuario>" e senha "<senha>"
    When clicar no botão Entrar
    Then apresentará a home do "<logado>"
    Examples:
      | usuario | senha  | logado        |
      | admin   | admin  | Administrador |
      | user    | user   | Usuário       |

  @LoginFailed
  Scenario: Login failed
    Given inseri usuário "user" e senha "user"
    When clicar no botão Entrar
    Then apresentará a home do "FALHA PROPOSITAL"