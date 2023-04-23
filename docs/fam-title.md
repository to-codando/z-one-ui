# Fam-title


![Componente FamTitle](/images/fam-title/fam-title.png)

## Definição

O componente de título é apenas um wrapper para o título que deve ser renderizado.

Para definir um título basta fornecer para sua **literal template tag** os elementos que devem compor o título.

```js
  <${FamTitle}>
    <slot target="content">
      <h1> Esse é um título do componente de título </h1>
    </slot>
  </>
```



## Propriedades

O componente **FamTitle** não recebe dados através de propriedades, no entento, é possível fornecer atributos a seus elementos HTML para definir o comportamento visual do título.

## Tipos de títulos

Atualmente existem 3 tipos de títulos suportados:


* H1 - Título grande

![Componente FamTitle](/images/fam-title/fam-title-h1.png)

* H2 - Título médio

![Componente FamTitle](/images/fam-title/fam-title-h2.png)

* H3 - Título pequeno

![Componente FamTitle](/images/fam-title/fam-title-h3.png)




