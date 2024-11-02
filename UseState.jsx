useState: A base para gerenciar estado em componentes funcionais React
O useState é um dos hooks mais fundamentais do React, utilizado para gerenciar o estado dentro de componentes funcionais. Ele nos permite criar variáveis que podem mudar ao longo do tempo, desencadeando re-renderizações quando seu valor é alterado.
Como funciona o useState?
O useState retorna um array com dois elementos:
 * O valor atual do estado: É a variável que você vai usar em seu componente.
 * Uma função para atualizar o estado: Essa função é usada para modificar o valor do estado.
Exemplo:
import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>
        Clique para incrementar
      </button>
    </div>
  );
}

Explicando o código:
 * useState(0): Inicializa o estado com o valor 0.
 * contador: Variável que armazena o valor atual do contador.
 * setContador: Função para atualizar o valor do contador. Ao chamar setContador(contador + 1), o valor do contador é incrementado em 1 e o componente é re-renderizado.
Por que usar o useState?
 * Gerenciar dados que mudam ao longo do tempo: Campos de formulário, resultados de buscas, dados de APIs, etc.
 * Criar componentes interativos: Botões, inputs, modais, etc.
 * Manter o estado local dentro de componentes funcionais: Sem a necessidade de usar classes.
Características importantes:
 * Imutabilidade: O estado é imutável. Para alterar um valor, você deve criar um novo valor e passar para a função de atualização.
 * Re-renderização: Quando o estado muda, o componente e seus filhos são re-renderizados.
 * Chamada única: O useState deve ser chamado apenas na parte superior do componente.
Considerações:
 * Múltiplos estados: Você pode usar useState múltiplas vezes em um componente para gerenciar diferentes estados.
 * Estado inicial: O valor inicial passado para useState pode ser qualquer tipo de dado, incluindo funções, objetos e arrays.
 * Dependências: Em alguns casos, você pode querer que o estado dependa de outros valores. O React oferece o useEffect para lidar com essas situações.
Em resumo:
O useState é uma ferramenta fundamental para criar componentes React dinâmicos e interativos. Ele permite que você gerencie o estado local de seus componentes de forma simples e eficiente.
Gostaria de ver mais exemplos ou tem alguma dúvida específica sobre o useState?
Possíveis tópicos para explorar:
 * useState com objetos e arrays
 * useEffect e useState juntos
 * Otimizando re-renderizações
 * Comparando useState com o estado em classes
 * https://github.com/Igor-Gabriel-Santos/QUALQUERCOISAAI
 * https://github.com/Rahgomes/-100DaysOfCode
