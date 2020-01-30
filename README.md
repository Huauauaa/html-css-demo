# html-css-pro
css sass less

## cli
`sass index.scss index.css`

### 4.1 Nested Rules
### 4.2 Referencing Parent Selectors &
scss
```css
.foo {
  font-size: 10px;
  &-header {
    color: red;
  }
  &-main {
    text-align: center;
  }
}
```
css
```css
.foo {
  font-size: 10px;
}
.foo-header {
  color: red;
}
.foo-main {
  text-align: center;
}
```

### 4.3 Nested Properties
```
.funky {
  font: {
    family: fantasy;
    size: 30em;
    weight: bold;
  }
}
```
```
.funky {
  font-family: fantasy;
  font-size: 30em;
  font-weight: bold; }
```

### 4.4 Placeholder Selectors: %foo
TODO: 

### 4.5 Comments: /* */ and //



