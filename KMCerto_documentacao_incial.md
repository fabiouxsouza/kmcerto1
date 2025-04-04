# KMCerto - Definição de Requisitos (MVP)

## 1. Funcionalidades Principais

### 1.1. Registro de Despesas

* **Descrição:** Permite ao usuário registrar suas despesas diárias e recorrentes.
* **Campos:**
    * Tipo: (Selecionar de uma lista: Combustível, Manutenção, Alimentação, Financiamento, Pedágio, Pro-labore, Outros)
    * Valor: (Número decimal)
    * Data: (Data)
    * Descrição: (Texto opcional)
    * Comprovante: (Upload de imagem - Opcional no MVP)
* **Observações:**
    * A lista de tipos de despesas deve ser fácil de atualizar no futuro.

### 1.2. Controle de Horas Trabalhadas

* **Descrição:** Permite ao usuário registrar suas horas de trabalho diárias.
* **Campos:**
    * Hora de Início: (Hora)
    * Hora de Fim: (Hora)
    * Pausas: (Tempo total em minutos)
    * Data: (Data)
* **Observações:**
    * O sistema deve calcular automaticamente o tempo total trabalhado.

... (Continuação para as outras funcionalidades)

## 2. Requisitos Técnicos

* Aplicação web responsiva.
* Front-end: React.js
* Back-end: Node.js com Express
* Banco de Dados: Firebase Firestore

## 3. Restrições

* Custo zero de implantação (MVP).
* Fácil de manter e escalar.

## 4. Extras (Ideias)

* Modo Noturno
* Botões grandes para uso no carro
* Relatórios personalizados