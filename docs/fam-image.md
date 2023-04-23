# Fam-Image

O componente de imagem é apenas um **literal template tag** que garante a construção e exibição do que deve ser apresentado como um imagem.

![Imagem fallback preta e branca](/images/fam-image/fam-image-black-and-white.png)


## Definição

Para definir um imagem, basta fornecer para sua **literal template tag** as propriedades necessárias **src**, **fallbackSrc** e **alt**.


```javascript
  <${FamImage} 
    src="/assets/images/oclock.jpg" 
    fallbackSrc="/assets/images/fallback-black.png"
    alt="relógio branco" 
  />
```


![Imagem fallback preta e branca](/images/fam-image/image-oclock.png)

## Propriedades

As propriedades fornecidas garantem o comportamento correto do componente e mesmo quando uma imagem não é carrega corretamente, ainda há a possibilidade de exibir uma imagem alternativa evitando um comportamento visual desagradável.

Atualmente as propriedades do componente são:

   | Propriedade | Objetivo                                                     |
   |-------------|--------------------------------------------------------------|
   | src         | Definir ndereço da imagem a ser                              |  
   | fallbackSrc | Definir caminho da imagem a ser carregada alternativamente   |
   | alt         | Definir legenda da imagem                                    | 



## Tipos de imagem fallback

Defina qualquer imagem como fallback, seguindo o exemplo abaixo.

* Fallback black

![Primário, secundário, terciário](/images/fam-image/image-black.png)

* Fallback light

![Primário, secundário, terciário](/images/fam-image/image-white.png)


