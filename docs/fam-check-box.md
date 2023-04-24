# Fam-check-box


![Componente FamCheckBox](/images/fam-check-box/fam-check-box.png)

## Definição

Para definir um componente checkbox é fácil, apenas use o código abaixo.

```js
  <${FamCheckBox}
    label="checkbox label" 
    isChecked=${true} 
    handler=${(event) => event)}
   />
```

## Propriedades

O componente **checkbox** recebe dados através de propriedades que definem o **label**, o estado do input (**checked**, **unchecked**) e um **handler** que pode ser executado quando o estado do componente mudar.


| Propriedade | Objetivo                                                                | 
|-------------|-------------------------------------------------------------------------|
| label       | definir o label do input checkbox                                       | 
| ischecked   | definir o estado do input (**checked**, **unchecked**)                  |
| handler     | definir um callback a ser executado quando o estado do componente mudar |







