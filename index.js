const BluePrint = require('svelte-blueprint/src/BluePrint')
const fs = require('fs')

const defaultOptions = {
    src: 'src/Components',
    dst: 'src/Docs'
}

const svelteBlueprint = (opts={ }) => {
    const hook = 'buildStart'

    return {
        name: 'svelte-blueprint',
        [hook]: async() => {
            const options = {
                ...defaultOptions,
                ...opts
            }

            const sourcePath = options.src
            const dstPath = options.dst + '/Pages'

            if(!fs.existsSync(sourcePath)) throw new Error(`The path ${sourcePath} does not exists`)
            if(!fs.existsSync(dstPath)) fs.mkdirSync(dstPath, {recursive: true})

            const sd = new BluePrint(sourcePath, dstPath)
            if(options.template) sd.setTemplate(options.template)

            // Create the first time
            sd.doDir()
        }
    }
}

export default svelteBlueprint
