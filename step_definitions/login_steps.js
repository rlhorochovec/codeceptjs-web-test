const {I, LoginPage} = inject();

Given('inseri usuário {string} e senha {string}', (usuario, senha) => {
  LoginPage.efetuaLogin(usuario, senha)
});

When('clicar no botão Entrar', () => {
  LoginPage.clicaEntrar()
});

Then('apresentará uma mensagem de {string}', (mensagem) => {
  LoginPage.validaMensagem(mensagem)
});