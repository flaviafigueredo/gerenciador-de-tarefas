# Aplicação de Lista de Tarefas

## Descrição
Esta é uma aplicação simples de lista de tarefas desenvolvida com JavaScript. Permite aos usuários adicionar tarefas, marcá-las como concluídas e removê-las da lista. A aplicação utiliza módulos ES6 do JavaScript para melhor organização e manutenção.

## Recursos
- Adicionar novas tarefas
- Marcar tarefas como concluídas
- Remover automaticamente tarefas concluídas da lista após 1 segundo
- Uso de recursos ES6 do JavaScript, como módulos e arrow functions
- Delegação de eventos para manipulação da conclusão das tarefas

## Arquivos
- **index.html**: O principal arquivo HTML da aplicação.
- **styles.css**: Contém o estilo da aplicação.
- **index.js**: Arquivo JavaScript principal que gerencia as interações com as tarefas.
- **tasks.js**: Módulo JavaScript que lida com as operações de tarefas.

## Configuração
Clone o repositório

        git clone <url-do-repositório>

Navegue até o diretório do projeto

        cd <diretório-do-projeto>

Abra o **index.html** no seu navegador

Você pode abrir o arquivo **index.html** diretamente em um navegador para visualizar e interagir com a aplicação.

## Uso
Adicionar uma Tarefa:

- Insira a descrição da tarefa no campo de entrada.
- Clique no botão "Adicionar tarefa" ou pressione Enter para adicionar a tarefa à lista.

Concluir uma Tarefa:

- Clique na caixa de seleção ao lado da tarefa para marcá-la como concluída.
- A tarefa será marcada com a mensagem "Tarefa concluída!" e removida da lista após 1 segundo.