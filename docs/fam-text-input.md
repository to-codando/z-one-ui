# FamTextInput

O compontente FamTextInput é apenas uma função que recebe propriedades como valores e renderiza uma **literal template tag** como um componente HTML.

![Todos os tipos de fam-text-input](/images/fam-text-input/fam-text-input-all.png)


## Definição

Para definir um compo de texto, basta fornecer sua **literal template tag** e as propriedades básicas exigidas pelo componente para que o mesmo seja renderizado corretamente.

```javascript
  <${FamTextInput}  
    type="text"
    label="Name"
    handler=${() => console.log("ok")}
    value="Juan Valdez"
    debounceTime="500"
  />
```

## Propriedades

Através de suas propriedades é possível enviar valores e instruções ao componente. Também é possível detectar eventos de digitação e executar ações através de ouvintes e eventos.

### Propriedades e tipos

| Propriedade   |  Tipo                               |
----------------|-------------------------------------|
| type          |  string                             |
| label         |  string                             |
| handler       |  função                             |
| value         |  text, boolean, undefined ou null   |
| debounceTime  |  text ou number                     |
| isValid       |  boolean                            |
| error         |  text                               |


### Propriedades e responsabilidades

Entender as responsabiliddes de cada uma das propriedades que o componente pode receber é fundamental para conseguir trabalhar com os campos de textos e configura-los de maneira a interagir corretamente com o contexto em volta.

  | Propriedade    | Objetivo                                                         |
  |----------------|------------------------------------------------------------------|
  | type           | Definir o tipo de campo                                          |  
  | label          | Definir legenda do campo                                         |
  | value          | Definir o valor do campo                                         | 
  | handler        | Definir um callback para executar quando o campo for modificado  | 
  | debounceTime   | Definir o intervalo de cancelamento da execução do callback      | 
  | isValid        | Definir se o campo é válido ou inválido                          | 
  | error          | Definir a mensagem de erro do campo inválido                     | 


## Tipos de campo

Atualmente é possível definir **6** (seis) tipos de campos de texto:

| Tipo               |  Objetivo                                     |
---------------------|-----------------------------------------------|
| type=**text**      |  Definir um campo de texto                    |
| type=**email**     |  Definir um campo de email                    |
| type=**password**  |  Definir um campo de senha                    |
| type=**tel**       |  Definir um campo de telefone                 |
| type=**number**    |  Definir um campo de número                   |
| type=**date**      |  Definir um campo de data                     |



### Campo padrão

Um campo padrão é apenas um campo de texto comum, com uma interface visual padronizada. Portanto, para definir um campo padrão basta definir suas propriedades como no exemplo abaixo:


![Campo de texto padrão](/images/fam-text-input/fam-text-input-all-default.png)

```javascript
  <${FamTextInput}  
    type="text"
    label="Name"
    handler=${() => console.log("ok")}
    value="Juan Valdez"
    debounceTime="500"
  />
```

### Campo válido

Para definir o estilo visual de um campo de texto como válido é possível utilizar a propriedade **isValid** com o valor **true**, dessa forma, as variáveis css de estilo aplicarão a estilização visual adequada ao campo de texto, o destacando como um campo válido.

![Campo de texto válido](/images/fam-text-input/fam-text-input-all-valid.png)

```javascript
  <${FamTextInput}  
    type="text"
    label="E-mail"
    handler=${() => console.log("ok")}
    value="Juan Valdez"
    isValid=${true}
    debounceTime="500"
  />
```

### Campo inválido

Para definir o estilo visual do campo de texto como inválido as regras são as mesmas do tópico anterior, mas, o valor da propriedade **isValid** deve ser definido como **false**.

![Campo de texto inválido](/images/fam-text-input/fam-text-input-all-invalid.png)

```javascript
  <${FamTextInput}  
    type="text"
    label="password"
    handler=${() => console.log("ok")}
    value="Juan Valdez"
    isValid=${false}
    debounceTime="500"
  />
```

### Campo com mensagem de erro

Para definir um campo como inválido e apresentar uma mensagem de erro, além de definir a propriedade **isValid** como **false** é necessário definir a propriedade **error** com uma mensagem de texto que represente o erro ocorrido.

![Campo de texto inválido](/images/fam-text-input/fam-text-input-all-invalid-error.png)

```javascript
  <${FamTextInput}  
    type="text"
    label="password"
    handler=${() => console.log("ok")}
    value="Juan Valdez"
    isValid=${false}
    error="Invalid field!"
    debounceTime="500"
  />
```

