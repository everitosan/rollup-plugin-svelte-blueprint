# Rollup plugin for svelete-blueprint

## This is a plugin for Rollup and the library [svelete-blueprint](https://www.npmjs.com/package/svelte-blueprint)

### How to use.

Install svelte-blueprint and rollup-plugin-svelte-blueprint.

```bash
$ npm i -D svelte-blueprint rollup-plugin-svelte-blueprint
```

Inside the rollup.config.js you should import the plugin and modify  the **plugins** and **watch** sections.

```js
import svelteBlueprint from 'rollup-plugin-svelte-blueprint'

...

export default {
  ...

  plugins: [
    ...,
    svelteBlueprint({
      src: 'src/Components',
      dst: 'src/Docs',
      template: '../Template.svelte' // [optional] Relative to src/Docs/Pages
    }),
    ...
  ],
  watch: {
    ...,
    exclude: ['src/Docs/**']
  }
}

```

### Notes:
- src: Source directory for components to workon
- dst: Destination path where the documentation files will be placed
- template: Template to replace the default included in this library
