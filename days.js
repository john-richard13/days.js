//Perguntando ao usuário qual é o dia da semana

// Solicita que o nome do usuario seja inserido
let nome = prompt('Por favor, insira seu nome:');
console.log('Nome inserido:', nome);
// Saudação personalizada usando o nome inserido
alert(`Olá, ${nome}! Seja bem vindo ao nosso site.`);

let day = prompt('Por favor, insira o dia da semana (ex: segunda, terça, quarta, etc.):');
day = day.toLowerCase();
console.log('Dia da semana inserido:', day);

if (day === 'sábado' || day === 'domingo') {
    alert('Hoje é fim de semana! Aproveite para descansar.');
} else {
    alert('Hoje é dia de semana! Hora de trabalhar ou estudar.');
}
