# Keep UP

Faça match com o imóvel de seus sonhos.

## Equipe

## Descrição do projeto

O projeto Keep Up tem como objetivo melhorar a experiência de locação de imóveis
para o locatário e para o proprietário através da atribuição de pontuações aos
imóveis.

Consideramos relevante trabalhar com três pontuações, cada uma avaliando
interesses indepentendes:

1. Score de infraestrutura: predominantemente manual, esta é uma pontuação que
obtida através do preenchimento de um formulário por parte de um avaliador
homologado pela imobiliária. Além disso, podem ser considerados dados de
cadastro do imóvel como por exemplo estado da documentação.
2. Score de localização: predominantemente automático, irá utilizar dados
obtidos através de robôs de fontes como por exemplo a Google Places API ou os
sistemas Nova Vista e Porthus de gestão de imóveis.
3. Score de match: através do preenchimento de um cadastro de perfil do cliente,
o sistema poderá indicar um valor de 0 a 100% de quanto o imóvel é adequado a
este perfil.

O sistema será composto por quatro subsistemas:

1. Plataforma Keep Up: um banco de dados que registrará as avaliações feitas
por avaliadores e os perfis dos clientes.
2. Site do avaliador: um site ou aplicativo a ser utilizado pelo avaliador para
avaliar imóveis.
3. Site do cliente: um site ou aplicativo a ser utilizado pelo cliente para
listar e visualizar imóveis, com a possibilidade de ordenar conforme os três
scores.
4. Robô: um conjunto de scripts que buscará dados em fontes externas (APIs,
ova Vista, Porthus, etc) para poder calcular o score de localização.

## Conteúdo do projeto

Este repositório apresenta um protótipo do site do avaliador na pasta
`front_avaliador` feito em node. Capturas de tela deste protótipo encontram-se
na pasta `prototipo_avaliador`.

Também apresenta um conjunto de telas demonstrando um conceito de como seria
o site do cliente na pasta `prototipo_cliente`.

Mais detalhes e alguns diagramas demonstrando a arquitetura e os processos
previstos para este sistema podem ser vistos nesta [apresentação](https://docs.google.com/presentation/d/17ra3E370K8fQLP2732Q9uRQcJJgRl2HJYEjtKm5H1Wo/edit?usp=sharing)


## Como executar o Projeto:
### 2. Fazer clone do repositório dispónivel em: -> https://github.com/RafaelEstevam/keepUp.

**Execute o seguinte comando no cmd do Windows:** 

    $git clone https://github.com/RafaelEstevam/keepUp.git

## 3. Abrir a pasta do projeto:

**Execute o seguinte comando no cmd do Windows:** 

    $ cd keepUp/front/
    
## 4. Instalar as dependencias do projeto.
 
**Execute o seguinte comando no cmd do Windows:** 

    ~/Documents/Git/keepUp/front (master)
    $ npm install

## 5. Executado o projeto 

**Execute o seguinte comando no cmd do Windows:** 

    ~/Documents/Git/keepUp/front (master)
    $ npm start

## 5. Executado o projeto 

### O projeto será executado o seu navegador padrão no enderço: **http://localhost:3000/** 












