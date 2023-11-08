const { I } = inject();

module.exports = {
    baseUrl: '/',

    fields: {
        user: 'input[id=login]',
        password: 'input[id=senha]'
    },

    buttons: {
        enter: 'xpath = //*[text()="Entrar"]'
    },

    text: {
        message: '#erro'
    },

    efetuaLogin(usuario, senha) {
        I.amOnPage(this.baseUrl)
        I.waitForElement(this.fields.user)
        I.fillField(this.fields.user, usuario)
        I.fillField(this.fields.password, senha)
    },

    clicaEntrar() {
        I.click(this.buttons.enter)
    },

    validaMensagem(mensagem) {
        I.waitForText(mensagem)
    }
}