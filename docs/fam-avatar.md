# Fam-Avatar

O componente avatar é um **literal template tag** que garante a construção e exibição de uma imagem.

![Imagem fallback preta e branca](/images/fam-avatar/fam-avatar-black-and-white.png)


## Definição

Para definir um avatar, basta fornecer para sua **literal template tag** as propriedades necessárias **src**, **fallbackSrc**, **size** e **alt**.


```javascript
  <${FamAvatar} 
    src="/assets/images/avatar.jpg" 
    fallbackSrc="/assets/images/avatar-white.png"
    size="4"
    alt="avatar" 
  />
```


![Imagem fallback preta e branca](/images/fam-avatar/image-oclock.png)

## Propriedades

As propriedades fornecidas garantem o comportamento correto do componente e mesmo quando uma imagem não é carrega corretamente, ainda há a possibilidade de exibir uma imagem alternativa evitando um comportamento visual desagradável.

Atualmente as propriedades do componente são:

   | Propriedade | Objetivo                                                     |
   |-------------|--------------------------------------------------------------|
   | src         | Definir ndereço da imagem a ser                              |  
   | fallbackSrc | Definir caminho da imagem a ser carregada alternativamente   |
   | size        | Definir o tambanho da imagem **(tamanhos: 1 e 12 )**         | 
   | alt         | Definir legenda da imagem                                    | 



## Tipos de imagem fallback

Defina qualquer imagem como fallback, para obter comportamento semelhante ao exemplo abaixo.

* Fallback black

![Primário, secundário, terciário](/images/fam-avatar/fam-avatar-black.png)

* Fallback light

![Primário, secundário, terciário](/images/fam-avatar/fam-avatar-white.png)


