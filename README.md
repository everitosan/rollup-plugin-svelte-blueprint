# Rollup plugin for svelete-blueprint

## This is a plugin for Rollup and the library [svelete-blueprint](https://www.npmjs.com/package/svelte-blueprint)

### How to use.

Install svelete-blueprint and rollup-plugin-svelte-blueprint.

```bash
$ npm i -D svelete-blueprint rollup-plugin-svelte-blueprint
```

Inside the rollup.config.js you should import the plugin and modify  the **plugins** and **watch** sections.

```js
import svelteBlueprint from './svelte-blueprint-rollup'

...

export default {
  ...

  plugins: [
    ...,
    svelteBlueprint({
      src: 'src/Components'
      dst: 'src/Docs'
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
