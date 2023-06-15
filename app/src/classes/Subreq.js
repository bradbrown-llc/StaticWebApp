export default class Subreq {
    constructor() {
        ['gas', 'work', 'dest', 'input', 'output'].forEach(key =>
            this[key] = undefined)
    }
}