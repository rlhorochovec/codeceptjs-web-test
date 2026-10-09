const assert = require('assert');
const { I } = inject();

module.exports = {
    text: {
        titulo: 'xpath = //*/div/div/div/h1'
    },

    validaHome(logado) {
        I.seeTextEquals(logado, this.text.titulo)
    }
}