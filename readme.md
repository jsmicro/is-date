# JSMicro - Is Date

### **`isDate(object)`**

Check does the given Javascript Object (array, object, string, etc) is a date.

### **`isNotDate(object)`**

Check does the given Javascript Date (array, object, string, etc) is not a date.

## Browser Usage

```bash
bower install --save jsmicro-is-date
```

```html
<script type="text/javascript" src="bower_components/jsmicro-is-date/index.js">
<script type="text/javascript">
    var obj = new Date();
    var nbr = 200;

    // Available in the window object.
    isDate(obj);      // true
    isDate(nbr);      // false
    isNotDate(nbr);   // true
</script>
```

## NodeJS Usage

```bash
npm install --save @jsmicro/is-date
```

```js
const obj = require('@jsmicro/is-date');

// Available in the global object.
isDate(new Date()); // true
isDate(23322333); // false
isNotDate(23234); // true

// Also available in the export object.
obj.isDate(new Date()); // true
obj.isDate(23322333); // false
obj.isNotDate(23333); // true
```

## Changelogs

#### **`v1.0.1 - May 21, 2016`**

* Added .npmignore

#### **`v1.0.0 - May 19, 2016`**

* Initial release.

### [The MIT License (MIT)](https://mahdaen.mit-license.org/)
