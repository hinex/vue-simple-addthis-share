# Simple AddThis share component for vue

Solves the problem with navigating through pages and URLs. Without extra shit. Just install and use.

### Install

```bash
npm install vue-simple-addthis-share --save
```

### Usage

```js
import AddThis from 'vue-simple-addthis-share'
```

#### Simple usage:

```html
<template>
  <AddThis publicId="ra-somehash" />
</template>
```

#### Custom props

You can pass AddThis attributes like a pros for title, media etc ([AddThis props documentation](https://www.addthis.com/academy/setting-the-url-title-to-share/)).

```html
<template>
  <AddThis 
    publicId="ra-somehash" 
    data-url="THE URL"
    data-title="THE TITLE"
    data-description="THE DESCRIPTION"
    data-media="THE IMAGE"
  />
</template>
```
