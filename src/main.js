import { v4 as uuidv4 } from 'uuid'

export function activate() {
    nova.commands.register('uuid.generateUUID', (editor) => {
        editor.insert(uuidv4())
    })
}

export function deactivate() {}
