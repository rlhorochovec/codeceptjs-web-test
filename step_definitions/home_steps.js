const {I, HomePage} = inject();

Then('apresentará a home do {string}', (logado) => {
  HomePage.validaHome(logado)
});