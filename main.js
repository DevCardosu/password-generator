// Seleciona os elementos
const passwordOutput = document.getElementById('password-output');
const generateButton = document.getElementById('generate-button');
const copyButton = document.getElementById('copy-button');
const lengthInput = document.getElementById('length');
const uppercaseInput = document.getElementById('include-uppercase');
const lowercaseInput = document.getElementById('include-lowercase');
const numbersInput = document.getElementById('include-numbers');
const symbolsInput = document.getElementById('include-symbols');

// Conjunto de caracteres
const chars = {
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lower: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};

// Função principal
function generatePassword() {
  const length = Number(lengthInput.value) || 12;

  let availableChars = '';
  if (uppercaseInput.checked) availableChars += chars.upper;
  if (lowercaseInput.checked) availableChars += chars.lower;
  if (numbersInput.checked) availableChars += chars.numbers;
  if (symbolsInput.checked) availableChars += chars.symbols;

  if (!availableChars) {
    alert('Selecione pelo menos um tipo de caractere!');
    return;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * availableChars.length);
    password += availableChars[random];
  }

  passwordOutput.textContent = password;
}

// Copiar senha
function copyPassword() {
  const password = passwordOutput.textContent;
  if (!password || password === 'SuaSenhaAqui') {
    alert('Gere uma senha antes de copiar!');
    return;
  }

  navigator.clipboard.writeText(password)
    .then(() => alert('Senha copiada para a área de transferência!'))
    .catch(() => alert('Falha ao copiar a senha.'));
}

// Eventos
generateButton.addEventListener('click', generatePassword);
copyButton.addEventListener('click', copyPassword);

// Gera uma senha inicial ao carregar
generatePassword();
