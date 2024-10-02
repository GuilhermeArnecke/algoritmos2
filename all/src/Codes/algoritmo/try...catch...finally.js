try {
  // linhas - na primeira teve o banco de dados
  // linhas - na segunda tratei os dados
  // linhas - modifiquei os dados
  //POSSO COLOCAR UM THROW AQUI DENTRO
} catch {
  // trato meu erro... (pra eu trartar meu erro eu preciso saber qual é kkk)
  // tipo retornar uma mensagem de erro bonitinha
} finally {
  // Desaloca da memória para ficar leve.
  // Independente de qual dos dois anteriores ele fez, vai executar isso por fim
  // Muito usado no Delphi por conta de ser usado muito para remover coisas da memória
  // Motivo de Delphi ser uma bosta, ele precisa eliminar da memória constantemente.
}
// linhas a seguir . . . . Indiferente se deu uma exceção ali dentro do catch,
// indiferentemente se de erro vai tentar seguir a vida normalmente.

// THROW SERVE PARA LANÇAR UMA NOVA EXCESSÃO


try {
  throw 'erro interno'
} catch (err) {
  console.log(err);
  throw err;
}
console.log('tudo certo!')
//THROW ELE VAI AVISAR O QUE TIVER A SEGUIR PARA EVITAR QUE SEJA EXECUTADO SE DER ERRO