# Fam-tagline


![Componente FamTagline](/images/fam-tagline/fam-tagline-title.png)

## Definição

O componente de tagline é apenas um wrapper para o título que deve ser renderizado.

Para definir um tagline basta fornecer para sua **literal template tag** os elementos que devem compor a tagline.

```js
  <${FamTagline}>
    <slot target="content">
      <h1> Esse é um título do componente de título </h1>
    </slot>
  </>
```



## Propriedades

O componente **FamTagline** não recebe dados através de propriedades, no entento, é possível fornecer atributos a seus elementos HTML para definir o comportamento visual do título.

## Tipos de títulos

Atualmente existem apenas 1 tipo de comportamento visual para a tagline:


* Padrão

![Componente FamTagline](/images/fam-tagline/fam-tagline.png)






