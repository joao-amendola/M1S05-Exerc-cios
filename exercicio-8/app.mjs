import Usuario from './Usuario.mjs'

console.log('m1-s05-e8')

const cUsuario = document.getElementById('campo-usuario')
const cSenha = document.getElementById('campo-senha')
const bAcessar = document.getElementById('botao-acessar')
const pMensagem = document.getElementById('p-mensagem')

const u1 = new Usuario(
  'João',
  'joao_amendola@estudante.sesisenai.org.br',
  'notMyPassword'
)

bAcessar.addEventListener('click', () => {
  const usuario = cUsuario.value
  const senha = cSenha.value
  if (u1.autenticar(usuario, senha)) {
    pMensagem.innerHTML = 'Login realizado!'
  } else {
    pMensagem.innerHTML = 'Credenciais inválidas!'
  }
})