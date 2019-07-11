# Exercício SF Labs

#### Realizar operações básicas de uma rest API 
Criar as rotas:
- CREATE: Criar um usuário 
- READ: Recuperar um usuário
- UPDATE: Atualizar um usuário
- DELETE: Deletar um usuário
  
# Ferramentas utilizadas
- NodeJS express (download em https://nodejs.org/en/download/)
- Postman (download em https://www.getpostman.com/downloads/)
- MongoDB (download em https://docs.mongodb.com/manual/installation/)

# Links úteis que ajudaram no desenvolvimento

- https://www.youtube.com/watch?v=BN_8bCfVp88
- https://mongoosejs.com/docs/deprecations.html#-findandmodify-

# Execução do projeto

1. Abrir o diretório do projeto pelo terminal
2. Executar o seguinte comando para iniciar o servidor:
<code> node src/index.js </code>
3. Testar via Postman as requisições GET,POST,PUT,DELETE com a url http://localhost:3000/usuario/

# Considerações

- A coleção de usuários possui os seguintes campos (a serem incluidos no Json):
1. nome
2. email
3. senha
- Além disso possui o campo 'criadoEm' que é um atributo padrão que automaticamente se preenche com a data e horário de criação do registro
