# jquery.clickable-tr

A simple jQuery plugin for making table rows clickable.


## Installation

Include script *after* the jQuery library (unless you are packaging scripts somehow else):

```html
<script src="/path/to/jquery.clickable-tr.js"></script>
```

**Do not include the script directly from GitHub (http://raw.github.com/...).**

## Usage

Add `data-href` attribute into `<tr>` to make a table row clickable.

```html
<tr data-href="/path/to/somewhere">...</tr>
```

Add the below style to change a mouse cursor.

```css
.clickable {
    cursor: pointer;
}
```

## Authors

[Hikaru Horie](https://github.com/hikaruhorie)
