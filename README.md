# Desafio do Zoológico Recintos

Este projeto faz parte do desafio técnico para o **Programa de Estágio START DB 2024**. O objetivo é construir uma lógica para ajudar a gerenciar habitats de animais (recintos) em um zoológico, garantindo que os animais estejam confortáveis ​​e sigam as regras específicas para biomas e alocação de espaço.

## Estrutura do Projeto

O projeto inclui os seguintes arquivos principais:
- `src/recintos-zoo.js`: Contém a lógica principal para determinar recintos adequados para novos animais.
- `src/recintos-zoo.test.js`: Contém testes para validar a implementação.
- `package.json`: gerencia as dependências do projeto.

## Descrição do desafio

### Declaração do problema
O zoológico tem vários recintos (cercados), cada um com biomas e limites de espaço específicos. Novos animais devem ser colocados em um recinto adequado onde se sintam confortáveis. Você precisa implementar uma função que encontre esses recintos adequados com base nas seguintes regras:

### Informações do recinto
- Cada recinto tem um **bioma**, **espaço total** e **animais atuais**.
- Novos animais devem se encaixar em termos de compatibilidade de espaço e bioma.
- Carnívoros (como leões e leopardos) só podem ficar com suas próprias espécies.
- Algumas espécies, como o **hipopótamo**, toleram outras espécies, mas apenas sob condições específicas.
- Regras adicionais incluem cálculos de espaço quando várias espécies compartilham o mesmo recinto e restrições comportamentais dos animais (como macacos que precisam de companhia).

### Requisitos
- O sistema deve lidar com tipos e quantidades de animais, validar entradas e retornar recintos ou mensagens de erro adequados.

### Exemplo:
Se a entrada for:
```javascript
new RecintosZoo().analisaRecintos('MACACO', 2);
```
A saída esperada seria uma lista de recintos onde cabem dois macacos, incluindo o espaço restante em cada recinto:
```json
{
recintosViaveis: [
"Recinto 1 (espaço livre: 5 total: 10)",
"Recinto 2 (espaço livre: 3 total: 5)",
"Recinto 3 (espaço livre: 2 total: 7)"
]
}
```

## Como executar o projeto

### Pré-requisitos
- **Node.js** instalado na sua máquina.
- **npm** (vem com o Node.js) para gerenciar dependências.

### Instruções de configuração
1. Clone o repositório para sua máquina local:
```bash
git clone https://github.com/jhonatan-goncalves-pereira/desafio-jhonatan-goncalves-pereira-2024.git
```
2. Navegue até o diretório do projeto:
```bash
cd desafio-jhonatan-goncalves-pereira-2024-main
```
3. Instale as dependências:
```bash
npm install
```

### Executando a solução
Para analisar recintos para um animal e quantidade específicos, você pode modificar o `recintos-zoo.js` ou criar um script para usar a classe `RecintosZoo`.

### Executando testes
Este projeto usa o Jest para testes. Você pode executar os testes usando o seguinte comando:
```bash
npm test
```
Os testes garantem que sua implementação esteja correta e atenda aos requisitos do desafio.

### Resultados da validação
Após executar `npm test`, todos os casos de teste devem passar, confirmando que a solução funciona para entradas válidas e inválidas, bem como várias combinações de animais e recinto.