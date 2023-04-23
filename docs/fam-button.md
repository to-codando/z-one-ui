# FamButton

O componente de botão é apenas um wrapper para o que deve ser apresentado como um botão.

![Primário, secundário, terciário](/images/fam-button/buttons.png)


## Definição

Para definir um botão, basta fornecer para sua **literal template tag** um **slot** com a propriedade **target=content** e dentro do slot inserir os elementos html que farão parte do botão.

```javascript
  <${FamButton}>
    <slot target="content">
      <span type="tertiary-disabled">
        <i>me clica</i>
      </span>
    </slot>
  </>
```

## Propriedades

O componente não recebe propriedades, no entanto, é possível definir estilos visuais através de atributos fornecidos aos elementos do botão.

## Tipos de botão primário

Para definir estilos de botão basta definir a propriedade **type** no primeiro elemento fornecido ao slot do botão com um dos seguintes valores:

* primary 
* primary-disabled 
* primary-hole 
* primary-hole-disabled

### Botão primário

* Tipos visuais

<!-- tabs:start -->

#### **Padrão**


![Primário, secundário, terciário](/images/fam-button/primary.png)

#### **Padrão desativado**

![Primário, secundário, terciário](/images/fam-button/primary-disabled.png)

#### **Vazado**

![Primário, secundário, terciário](/images/fam-button/primary-hole.png)

#### **Vazado desativado**

![Primário, secundário, terciário](/images/fam-button/primary-hole-disabled.png)



<!-- tabs:end -->

* Código

<!-- tabs:start -->

#### **Padrão**


```javascript
  <${FamButton}>
    <slot target="content">
      <span type="primary">
        <i>me clica</i>
      </span>
    </slot>
  </>
```

#### **Padrão desativado**

```javascript
  <${FamButton}>
    <slot target="content">
      <span type="primary-disabled">
        <i>me clica</i>
      </span>
    </slot>
  </>
```

#### **Vazado**

```javascript
  <${FamButton}>
    <slot target="content">
      <span type="primary-hole">
        <i>me clica</i>
      </span>
    </slot>
  </>
```

#### **Vazado desativado**

```javascript
  <${FamButton}>
    <slot target="content">
      <span type="primary-hole-disabled">
        <i>me clica</i>
      </span>
    </slot>
  </>
```
<!-- tabs:end -->

Abaixo encontram-se todos os tipos de botões primários suportados atualmente:

![Primário, secundário, terciário](/images/fam-button/buttons-primary.png)


## Tipos de botão secundário

Para definir estilos de botão basta definir a propriedade **type** no primeiro elemento fornecido ao slot do botão com um dos seguintes valores:

* secondary 
* secondary-disabled 
* secondary-hole 
* secondary-hole-disabled

### Botão secundário

* Tipos visuais

<!-- tabs:start -->

#### **Padrão**


![Primário, secundário, terciário](/images/fam-button/secondary.png)

#### **Padrão desativado**

![Primário, secundário, terciário](/images/fam-button/secondary-disabled.png)

#### **Vazado**

![Primário, secundário, terciário](/images/fam-button/secondary-hole.png)

#### **Vazado desativado**

![Primário, secundário, terciário](/images/fam-button/secondary-hole-disabled.png)



<!-- tabs:end -->

* Código

<!-- tabs:start -->

#### **Padrão**


```javascript
  <${FamButton}>
    <slot target="content">
      <span type="secondary">
        <i>me clica</i>
      </span>
    </slot>
  </>
```

#### **Padrão desativado**

```javascript
  <${FamButton}>
    <slot target="content">
      <span type="secondary-disabled">
        <i>me clica</i>
      </span>
    </slot>
  </>
```

#### **Vazado**

```javascript
  <${FamButton}>
    <slot target="content">
      <span type="secondary-hole">
        <i>me clica</i>
      </span>
    </slot>
  </>
```

#### **Vazado desativado**

```javascript
  <${FamButton}>
    <slot target="content">
      <span type="secondary-hole-disabled">
        <i>me clica</i>
      </span>
    </slot>
  </>
```
<!-- tabs:end -->

Abaixo encontram-se todos os tipos de botões secundários suportados atualmente:

![Primário, secundário, terciário](/images/fam-button/buttons-secondary.png)


## Tipos de botão terciário

Para definir estilos de botão basta definir a propriedade **type** no primeiro elemento fornecido ao slot do botão com um dos seguintes valores:

* tertiary 
* tertiary-disabled 
* tertiary-hole 
* tertiary-hole-disabled

### Botão terciário

* Tipos visuais

<!-- tabs:start -->

#### **Padrão**


![tertiary](/images/fam-button/tertiary.png)

#### **Padrão desativado**

![tertiary destativado](/images/fam-button/tertiary-disabled.png)

#### **Vazado**

![tertiary hole](/images/fam-button/tertiary-hole.png)

#### **Vazado desativado**

![tertiary hole e disabled](/images/fam-button/tertiary-hole-disabled.png)



<!-- tabs:end -->

* Código

<!-- tabs:start -->

#### **Padrão**


```javascript
  <${FamButton}>
    <slot target="content">
      <span type="tertiary">
        <i>me clica</i>
      </span>
    </slot>
  </>
```

#### **Padrão desativado**

```javascript
  <${FamButton}>
    <slot target="content">
      <span type="tertiary-disabled">
        <i>me clica</i>
      </span>
    </slot>
  </>
```

#### **Vazado**

```javascript
  <${FamButton}>
    <slot target="content">
      <span type="tertiary-hole">
        <i>me clica</i>
      </span>
    </slot>
  </>
```

#### **Vazado desativado**

```javascript
  <${FamButton}>
    <slot target="content">
      <span type="tertiary-hole-disabled">
        <i>me clica</i>
      </span>
    </slot>
  </>
```
<!-- tabs:end -->

Abaixo encontram-se todos os tipos de botões terciários suportados atualmente:

![Primário, secundário, terciário](/images/fam-button/buttons-tertiary.png)