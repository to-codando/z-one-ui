# Fam-card


![Componente FamCard](/images/fam-card/fam-card.png)

## Definição

O componente de **card** é apenas um wrapper para o card que deve ser renderizado.

Para definir um **card** basta fornecer para sua **literal template tag** os elementos que devem compor o card.

```js
  <${FamCard}>
      <slot target="content">
        <${FamImage} 
            src="/assets/images/fam-avatarx.jpg" 
            fallbackSrc="/assets/images/fallback-black.png"
            size="4"
            alt="avatar" 
          />    
      </slot>
    </>
```



## Propriedades

O componente **FamCard** não recebe dados através de propriedades, no entento, é possível fornecer atributos a seus elementos HTML para definir o comportamento visual do card.





