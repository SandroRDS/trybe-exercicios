const date = document.getElementById('date');
date.DatePickerX.init({
  mondayFirst: false,
  format: 'dd/mm/yyyy',
});

// Função para adicionar validação de todos os campos
const adicionarValidacoes = (validate, objValidations) => {
  for( [seletor, arrRegras] of Object.entries(objValidations)) {
    validate.addField(seletor, arrRegras);
  }
}

// Instanciando o Objeto da lib Just Validate
const validate = new window.JustValidate('#main-form', {
  tooltip: { position: 'bottom' },
  errorFieldCssClass: 'is-invalid',
  successFieldCssClass: 'is-valid',
});

// Regras
const ruleReq       = ()      => ( {rule: 'required'} ); // Campo Obrigatório
const ruleEmail     = ()      => ( {rule: 'email'} ); // Campo de Email
const ruleMinLength = (value) => ( {rule: 'minLength', value} ); // Tamanho Mínimo
const ruleMaxLength = (value) => ( {rule: 'maxLength', value} ); // Tamanho Máximo

// Validação de Campos de Texto
const objValidations = {};
objValidations['#fullName'] = [ruleReq(), ruleMinLength(10), ruleMaxLength(50)];
objValidations['#email']    = [ruleReq(), ruleEmail(), ruleMinLength(5)];
objValidations['#question'] = [ruleReq(), ruleMinLength(5)];
objValidations['#date']     = [ruleReq()];
adicionarValidacoes(validate, objValidations);

// Validação de Radio Buttons
const destinationRadios = document.querySelector('#radio-group');
validate.addRequiredGroup(destinationRadios, 'Você deve escolher uma das opções!');

// Validação de Checkbox obrigatória
const agreementGroup = document.querySelector('#agreement').parentElement;
validate.addRequiredGroup(agreementGroup, 'Você deve concordar com os direitos de imagem da viagem.');

// Retirar a mensagem de erro após adicionar uma data
date.addEventListener('change', () => validate.revalidateField('#date'));