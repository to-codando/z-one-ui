# Fam-tooltip


![Componente FamTooltip](/images/fam-tooltip/fam-tooltip.png)

## Definição

O componente tooltip é apenas um wrapper para o texto que deve ser renderizado.

Definir um tooltip é fácil, forneça para sua **literal template tag** um elemento HTML contendo um texto.

```js
  <${FamTooltip}>
    <slot target="content">
      <p>Esse é o texto do Tooltip</p>
    </slot>
  </>
```

## Propriedades

O componente **FamTooltip** não recebe dados através de propriedades, no entento, é possível fornecer atributos a seus elementos HTML para definir o comportamento visual do texto.








