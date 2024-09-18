# CocoBambuReads

## Descrição

CocoBambuReads é uma aplicação desenvolvida em Angular 18 que permite aos usuários explorar uma coleção de livros usando a API do Google Books. Os usuários podem buscar livros por título ou autor, favoritar livros, adicionar anotações, avaliações e tags, e filtrar seus favoritos por tags.

## Como Executar o Projeto

### Pré-requisitos

- Node.js
- Angular CLI

### Passos para Execução

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/yourusername/CocoBambuReads.git
   cd CocoBambuReads
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento:**

   ```bash
   ng serve
   ```

   Navegue até `http://localhost:4200/`.

4. **Script npm**

   ```bash
   npm run start
   ```


## Funcionalidades

1. **Busca de Livros:** Permite realizar buscas por título ou autor.
2. **Detalhes dos Livros:** Exibe título, autor(es), descrição e capa dos livros.
3. **Favoritar Livros:** Adicione livros a uma lista de favoritos.
4. **Anotações e Avaliações:** Adicione notas pessoais e uma avaliação (nota de 1 a 5) aos livros favoritados.
5. **Filtros:** Filtre os livros favoritados por tags.

## Imagens

### Tela de Busca
O usuário consegue buscar por livros ou autor.
![Tela de Busca](https://github.com/user-attachments/assets/a4096170-c055-4ecf-8d6c-ea4da4a46d81)

Lista de resultados.
![Lista de Resultados](https://github.com/user-attachments/assets/2b15f92d-2506-475c-a93b-9c77b1d9d2cb)

### Detalhes do Livro
Ao clicar em preview o usuário consegue obter detalhes dos livros e adicionar aos favoritos.
![Detalhes do Livro](https://github.com/user-attachments/assets/39d0b566-75cd-4d87-bdee-dc38c5b543b2)

### Lista de Favoritos
![Lista de Favoritos](https://github.com/user-attachments/assets/aeb3a7a4-8543-411b-bac4-78fd804de972)

### Anotações e Avaliações
Ao clicar no lápis o usuário consegue criar uma nova anotação ou editar. Também consegue avaliar de 1 a 5 clicando na estrela correspondente.
![Anotações e Avaliações](https://github.com/user-attachments/assets/97b8de36-9783-4c15-b527-2d0ef79065c2)

### Filtro por Tags
O usuário consegue adicionar tags no ícone de mais e filtrar pelas mesmas tags.
![Adicionar Tags](https://github.com/user-attachments/assets/7055eda6-b62a-4300-b5e0-947e1cfa0c88)

E a busca com as tags.
![Busca com Tags](https://github.com/user-attachments/assets/151cdac1-e136-4910-b9c3-e2718e89e471)

## Tecnologias Utilizadas

- Angular 18
- Google Books API
- RxJS
- Bootstrap

## Uso de RxJS

Os seguintes operadores RxJS foram utilizados no projeto:

- `map`: Para transformar os dados da API antes de usá-los.
- `switchMap`: Para lidar com mudanças de busca.
- `catchError`: Para tratar erros durante a chamada da API.

## Estrutura do Código

### Scaffolding

Use os seguintes comandos para gerar novos componentes, diretivas, pipes, serviços, classes, guards, interfaces, enums ou módulos:

```bash
ng generate component component-name
ng generate directive|pipe|service|class|guard|interface|enum|module
```

### Build

Para construir o projeto, execute:

```bash
ng build
```

Os artefatos de build serão armazenados no diretório `dist/`.

## Testes

### Testes Unitários

Para executar os testes unitários via [Karma](https://karma-runner.github.io), execute:

```bash
ng test
```

## Scripts npm

Adicionei os seguintes scripts ao seu `package.json` para facilitar a execução de tarefas comuns:

```json
"scripts": {
  "start": "ng serve",
  "build": "ng build",
  "test": "ng test",
  "lint": "ng lint",
  "e2e": "ng e2e",
  "prepare": "husky install"
}
```

#### Como Executei os Testes

Para executar os testes unitários para o serviço `FavoritesBookService` no projeto Angular, segui os seguintes passos:

1. **Preparação do Ambiente**: 
   - Certifiquei-me de ter o Angular CLI instalado globalmente usando o comando `npm install -g @angular/cli`.
   - Naveguei até a pasta do meu projeto Angular e instalei todas as dependências necessárias com `npm install`.

2. **Configuração dos Testes**: 
   - Adicionei testes unitários para `FavoritesBookService` usando o Jasmine e Karma.

3. **Execução dos Testes**: 
   - Usei o comando `ng test` para iniciar o Karma, que abriu uma janela do navegador para executar os testes e exibir os resultados.
   - Os resultados dos testes foram verificados tanto no terminal quanto no navegador, garantindo que todos os casos de teste passaram conforme esperado.

### Melhorias Futuras

Embora o projeto atual já ofereça um grande desafio, existem algumas funcionalidades que poderiam ser implementadas para aumentar ainda mais suas capacidades:

1. **Autenticação e Autorização**:
   - Implementar um sistema de autenticação para que os usuários possam criar contas e salvar suas listas de livros favoritos de forma segura.
   - Adicionar autorização para que apenas usuários autenticados possam adicionar, remover ou atualizar livros favoritos.
   - Utilizar o Google Auth para facilitar o login dos usuários, proporcionando uma integração simples e segura com contas do Google.

2. **Sincronização com Nuvem**:
   - Permitir a sincronização dos livros favoritos com um backend na nuvem, utilizando serviços como Firebase ou AWS, para garantir que os dados sejam preservados mesmo se o usuário trocar de dispositivo.

3. **Integração com Outras APIs**:
   - Integrar com outras APIs de livros, como Goodreads ou Open Library, para fornecer uma experiência de pesquisa de livros mais rica e diversificada.

4. **Recomendações Personalizadas com API de IA**:
   - Implementar um sistema de recomendação de livros utilizando uma API de inteligência artificial, como a OpenAI GPT-3 ou a Amazon Personalize. 
   - Usar os dados dos livros favoritos do usuário para treinar o modelo e fornecer recomendações personalizadas.

5. **Avaliações e Comentários**:
   - Permitir que os usuários adicionem avaliações e comentários aos livros favoritos, compartilhando suas opiniões com outros usuários.
   - Implementar um sistema de classificação para destacar os livros mais bem avaliados.

6. **Filtros e Ordenação Avançados**:
   - Adicionar opções avançadas de filtro e ordenação, permitindo que os usuários encontrem livros favoritos com mais facilidade com base em critérios como data de publicação, gênero, autor, etc.

7. ** Persistência de Dados:

A persistência de dados foi feita com Local Storage para facilitar para que a avaliação seja mais fácil, assim o usuário não precisa configurar um servidor, evitando conflitos. No entanto, para uma aplicação pequena, poderia ser utilizado o Firebase, mas poderia   apresentar problemas com a API key. Para uma aplicação maior, seria recomendável desenvolver um backend dedicado para gerenciar a persistência de dados de forma mais robusta e segura.

### Melhorias de Arquitetura

Para garantir a escalabilidade e a manutenção do projeto, pode se usar arquitetura de microsserviços por conta da massividade dos dados que aplicação teria:

1. **Arquitetura de Microsserviços**:
   - Dividir a aplicação em microsserviços, cada um responsável por uma funcionalidade específica (autenticação, gerenciamento de livros favoritos, recomendações, etc.). Isso facilita a escalabilidade e a manutenção, permitindo que cada serviço seja desenvolvido, implantado e escalado independentemente.

2. **Desacoplamento de Serviços**:
   - Utilizar APIs RESTful para comunicação entre diferentes partes da aplicação, garantindo que cada serviço seja desacoplado e independente. Isso melhora a modularidade e facilita a substituição ou atualização de componentes individuais sem afetar o restante do sistema.

Com essas melhorias arquiteturais e funcionais, o projeto pode evoluir significativamente, proporcionando uma experiência mais rica e robusta para os usuários, além de facilitar a escalabilidade e manutenção do sistema.

## Contribuição

Para contribuir com o projeto, siga estes passos:

1. Fork o projeto.
2. Crie uma nova branch (`git checkout -b feature/AmazingFeature`).
3. Faça commit das suas alterações (`git commit -m 'Add some AmazingFeature'`).
4. Push para a branch (`git push origin feature/AmazingFeature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
