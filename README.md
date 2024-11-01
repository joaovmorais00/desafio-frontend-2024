
# PokemonWeather

  

- Este projeto fez parte de um desafio técnico para avaliar qualidades técnicas de front-end. 
- Foi utilizado o framework Angular v18 no desenvolvimento do software.
- As api's utilizadas foram:
	- [OpenWeatherMap](https://openweathermap.org/api), para consulta de cidades e condições climáticas.
	- [PokéAPI](https://pokeapi.co/docs/v2), para consultar Pokémons.

  

## Descrição do projeto

  

O projeto consiste em uma aplicação web que:

 1. Realiza uma pesquisa de cidades a partir do texto digitado em um campo de busca.
 2. Mediante a cidade selecionada pelo usuário, é exibida a temperatura atual da mesma e, caso esteja chovendo, é exibido um texto com essa informação.
 3. A partir das informações de clima da cidade, é criada uma lista baseada nos seguintes critérios:
	 -   Para lugares onde a temperatura for menor  **(<) que 5ºC**, a lista irá conter pokémons do tipo  **gelo (ice)**.
	-    Para lugares onde a temperatura estiver entre  **(>=) 5ºC e (<) 10ºC**,a lista irá conter pokémons do tipo  **água (water)**.
	-    Para lugares onde a temperatura estiver entre  **(>=) 12ºC e (<) 15ºC**, a lista irá conter pokémons do tipo  **grama (grass)**.
	-    Para lugares onde a temperatura estiver entre  **(>=) 15ºC e (<) 21ºC**, a lista irá conter pokémons do tipo  **terra (ground)**.
	-    Para lugares onde a temperatura estiver entre  **(>=) 23ºC e (<) 27ºC**, a lista irá conter pokémons do tipo  **inseto (bug)**.
	-    Para lugares onde a temperatura estiver entre  **(>=) 27ºC e 33ºC inclusive**, a lista irá conter pokémons do tipo  **pedra (rock)**.
	-    Para lugares onde a temperatura for  **maior que 33ºC**, a lista irá conter pokémons do tipo  **fogo (fire)**.
	-   **Para qualquer outra temperatura**, a lista irá conter pokémons do tipo  **normal**.
	-   E, no caso em que  **esteja chovendo na região**  a lista irá conter pokémons do tipo  **elétrico (electric)**, independente da temperatura.

4. Com base na lista citada, um pokémon é escolhido aleatoriamente, então seu nome e imagem são exibidos.

  

## Executando o projeto

  
### Primeira execução:
 1. Baixe o repositório.
 2. Acesse o arquivo pokemon-weather/src/environments com algum editor de texto, substitua o texto `{API_KEY}` por sua chave gerada no site da API  [OpenWeatherMap](https://openweathermap.org/api) e salve a alteração.
 3. Abra a pasta pokemon-weather/ a partir do terminal e execute o comando: `npm install`.
 4. Execute o comando: `npm start`.
 5. Pelo navegador acesse a porta indicada no terminal, normalmente (http://localhost:4200/).

### Próximas execuções:

 1. Abra a pasta pokemon-weather/ a partir do terminal e execute o comando: `npm start`.

  
