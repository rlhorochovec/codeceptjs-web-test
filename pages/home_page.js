const assert = require('assert');
const { I } = inject();

module.exports = {
    text: {
        titulo: '#h2'
    },

    validaHome(logado) {
        I.seeTextEquals(logado, this.text.titulo)
    }
}