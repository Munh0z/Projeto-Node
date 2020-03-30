const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_finance', { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório"
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior do que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' nao é válido para o atributo '{PATH}'."