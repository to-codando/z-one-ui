# Fam-container


![Componente Famcontainer](/images/fam-container/fam-container.png)

## Definição

O componente de container é apenas um wrapper para o conteúdo que deve ser renderizado.

Para definir um container basta fornecer para sua **literal template tag** um slot contendo os elementos html que devem ser renderizados.

```js
  <${Famcontainer}>
    <slot target="content">
      <h1> Esse element html será renderizado dentro do container </h1>
    </slot>
  </>
```

## Variáveis de estilo

O componente **Fam-container** não recebe dados através de propriedades, no entento, é possível definir parte do seu comportamento visual através de variáveis css presentes no arquiv **var.css**.


```css
  max-width: var(--fam-container-max-width);
  margin-left: var(--fam-container-margin-left);
  margin-right: var(--fam-container-margin-right);

  border-radius: var(--fam-container-border-radius);
  border-width: var(--fam-container-border-width);
  border-color: var(--fam-container-border-color);
  border-style: var(--fam-container-border-style);

  background: var(--fam-container-background);

```

## Tipos de container

Atualmente existem apenas 1 tipo de comportamento visual para a container:

> As bordas do container são meramente ilustrativas, não se aplicando no contexto real.

* Padrão

![Componente Famcontainer](/images/fam-container/fam-container.png)






