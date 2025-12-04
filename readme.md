# 🎮 Ranked Match Calculator

> Sistema de classificação de jogadores baseado em vitórias e derrotas em partidas ranqueadas

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![DIO](https://img.shields.io/badge/DIO-Project-blue?style=for-the-badge)](https://www.dio.me/)

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como parte do desafio da **Digital Innovation One (DIO)**, com o objetivo de criar uma calculadora que determina o nível de ranqueamento de um jogador baseado em seu histórico de vitórias e derrotas.

O sistema calcula o saldo de partidas (vitórias - derrotas) e classifica o jogador em diferentes níveis, desde **Ferro** até **Imortal**.

## 🎯 Objetivo

Criar uma função que:
- Recebe como parâmetros a quantidade de vitórias e derrotas
- Calcula o saldo de ranqueadas (vitórias - derrotas)
- Retorna o nível do jogador baseado na quantidade de vitórias
- Exibe uma mensagem formatada com o resultado

## 🏆 Níveis de Ranqueamento

| Vitórias | Nível |
|----------|-------|
| < 10 | ⚫ Ferro |
| 11 - 20 | 🟤 Bronze |
| 21 - 50 | ⚪ Prata |
| 51 - 80 | 🟡 Ouro |
| 81 - 90 | 💎 Diamante |
| 91 - 100 | 🟣 Lendário |
| ≥ 101 | ⭐ Imortal |

## 🛠️ Tecnologias Utilizadas

- **JavaScript** - Linguagem de programação
- **Node.js** - Ambiente de execução

## 📚 Conceitos Aplicados

- ✅ Variáveis
- ✅ Operadores aritméticos
- ✅ Estruturas de decisão (if/else)
- ✅ Funções
- ✅ Laços de repetição (for)
- ✅ Arrays e Objetos
- ✅ Template Strings

## 🚀 Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado na máquina

### Passos

1. Clone este repositório:
```bash
git clone https://github.com/seu-usuario/ranked-match-calculator.git
```

2. Navegue até o diretório do projeto:
```bash
cd ranked-match-calculator
```

3. Execute o arquivo JavaScript:
```bash
node calculadora.js
```

## 💻 Exemplo de Uso

```javascript
// Calculando o nível de um jogador
const vitorias = 85;
const derrotas = 15;

exibirResultado(vitorias, derrotas);
// Saída: "O Herói tem de saldo de 70 está no nível de Diamante"
```

## 📊 Exemplo de Saída

```
=== CALCULADORA DE PARTIDAS RANKEADAS ===

O Herói tem de saldo de 3 está no nível de Ferro
O Herói tem de saldo de 10 está no nível de Bronze
O Herói tem de saldo de 25 está no nível de Prata
O Herói tem de saldo de 45 está no nível de Ouro
O Herói tem de saldo de 70 está no nível de Diamante
O Herói tem de saldo de 85 está no nível de Lendário
O Herói tem de saldo de 95 está no nível de Imortal

=== SIMULAÇÃO COM LAÇO DE REPETIÇÃO ===

Jogador 1: O Herói tem de saldo de 5 está no nível de Ferro
Jogador 2: O Herói tem de saldo de 11 está no nível de Bronze
Jogador 3: O Herói tem de saldo de 30 está no nível de Prata
Jogador 4: O Herói tem de saldo de 45 está no nível de Ouro
Jogador 5: O Herói tem de saldo de 120 está no nível de Imortal
```

## 🎨 Estrutura do Projeto

```
ranked-match-calculator/
│
├── calculadora.js      # Código principal da calculadora
├── README.md           # Documentação do projeto
└── LICENSE             # Licença do projeto (opcional)
```

## 🔄 Possíveis Melhorias

- [ ] Interface web com HTML/CSS
- [ ] Validação de entrada de dados
- [ ] Histórico de partidas
- [ ] Gráficos de progressão
- [ ] Sistema de ranking global
- [ ] Persistência de dados (banco de dados)
- [ ] API REST para integração

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com 💜 como parte do desafio da [Digital Innovation One](https://www.dio.me/)

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir uma **issue** ou enviar um **pull request**.

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!

**#DIO #JavaScript #Desafio #Programação**