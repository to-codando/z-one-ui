# FamButton

O componente de botão é apenas um wrapper para o que deve ser apresentado como um botão.

![Primário, secundário, terciário](/images/fam-button/buttons.png)


## Definindo um botão

Para definir um botão, basta fornecer para sua **literal template tag** um **slot** com a propriedade **target=content** e dentro do slot inserir os elementos html que farão parte do botão.

```javascript
 <${FamButton}>
      <slot target="content">
        <span style="tertiary:disabled">
          <i>me clica</i>
        </span>
      </slot>
    </>
```

## Propriedades

O componente não recebe propriedades, no entanto, é possível definir estilos visuais através de atributos fornecidos aos elementos do botão.

## Estilos

Para definir estilos de botão basta definir a propriedade **style** no primeiro elemento fornecido ao slot do botão.

A propriedade **style** aceita os seguintes valores:


**Botão primário**

* primary
* primary :disabled
* primary :hole
* primary :hole :disabled

![Primário, secundário, terciário](/images/fam-button/buttons-primary.png)

**Botão secundário**

* secondary
* secondary :disabled
* secondary :hole
* secondary :hole :disabled

![Primário, secundário, terciário](/images/fam-button/buttons-secondary.png)

**Botão terciário**

* tertiary
* tertiary :disabled
* tertiary :hole
* tertiary :hole :disabled  

![Primário, secundário, terciário](/images/fam-button/buttons-tertiary.png)
