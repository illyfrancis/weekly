# Style guide

> Just putting some thoughts together... work in progress

## JavaScript

For JavaScript, generally follow [google's style guide](https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml) but not always.

There is a ECS JS formatter defined *{need svn location}*.

### Naming

Prefix jQuery object with `$`. For example in a Backbone view when selecting an element via `this.$('selector')`, it should be named like `$component`.

```
  var $component = this.$('selector');
```

### Quotes

Use single `'` not `"` as default.

> Opposite to HTML.

### Indentation

Use 2 spaces. No tabs.

## HTML, CSS

For classes, avoid camel-case and use hyphen `-` instead.

Prefer `<div class="group-by">` to `<div class="groupBy">`

### Quotes

Use single `"` not `'` as default.

> Opposite to JavaScript

