![npm downloads total](https://img.shields.io/npm/dt/spinner-material.svg) ![npm version](https://img.shields.io/npm/v/spinner-material.svg) ![npm license](https://img.shields.io/npm/l/spinner-material.svg)

# spinner-material
A flashy material-design inspired spinner with a custom element and css.

![Example of Spinner](https://raw.githubusercontent.com/icarus-sullivan/spinner-material/master/example.gif)

### Installation
```
npm install --save spinner-material
```
or
```
yarn add spinner-material
```

### Initialization
The module registers a custom element on the window and is immediately invoked. To use the custom element, the module needs to be imported at least once somewhere in your stack. 

#### Webpack 

```javascript 
module.exports = {
  entry: ['spinner-material', './index.js'],
}
```

#### Inline 
```javascript
import 'spinner-material';

// or

require('spinner-material');
```

### Usage

|Property|Type|Default|
|-----|-----|-----|
|radius |String |40 
|color |String |#333333 
|stroke |String |5 
|visible|String |true 

```html
<div>
  <spinner-material stroke="4" color="purple" radius="40" />
</div>
```

