# Fam-List


![Imagem FamList](/images/fam-list/fam-list.png)


## Definição
O componente de list é apenas um **literal template tag** que garante a construção e exibição do que deve ser apresentado como uma lista.
para definir uma lista , basta fornecer os elementos que devem compor essa lista.


```javascript
 <${FamList} data=${state.cars}/>
```

## Propriedades

O componente **FamList**  recebe dados através de propriedades.

### Propriedades e tipos

| Propriedade   |  Tipo                               |
----------------|-------------------------------------|
| data          |  array                              |


### Propriedades e responsabilidades

Entender as responsabiliddes de cada uma das propriedades que o componente pode receber é fundamental para conseguir trabalhar com o componente de lista e configura-lo da maneira correta.

  | Propriedade    | Objetivo                                                         |
  |----------------|------------------------------------------------------------------|
  | data           | Definir os itens a serem renderizados na lista                   |