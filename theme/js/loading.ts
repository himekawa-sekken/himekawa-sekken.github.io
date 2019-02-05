import { getUniqueStr } from "./getUniqueStr";
import { setTimeout } from "timers";
declare global {
    interface Window {
        hssLoading: loading
    }
}

export class loading {
    private loadingId: string
    private loading: HTMLElement
    private waiting: string[] = []
    private completed: string[] = []
    private deleteTimeout: number
    private opened: boolean = false
    constructor (loadingId: string = 'loading', openTimeout: number = 5000, deleteTimeout: number = 1000) {
        if (window.hssLoading) console.log('hssLoading: 上書きします。')
        window.hssLoading = this
        this.loadingId = loadingId
        this.deleteTimeout = deleteTimeout
        setTimeout(this.open.bind(this), openTimeout)
    }

    public append() {
        const id = getUniqueStr()
        this.waiting.push(id)
        return id
    }

    public complete(id: string) {
        const i = this.waiting.findIndex(e => e == id)
        if (!i) {
            console.log('hssLoading.complete: 指定されたIDは存在しませんでした。')
            return
        } else this.completed = this.completed.concat(this.waiting.splice(i, 1))
        if (this.waiting.length == 0) setTimeout(this.open.bind(this), 100)
        return id
    }

    private open() {
        if (this.opened) return
        if (this.waiting.length != 0) return
        this.loading = document.getElementById(this.loadingId)
        this.loading.classList.add('open')
        this.opened = true
        setTimeout(this.delete.bind(this), this.deleteTimeout)
    }
    private delete() {
        this.loading.parentElement.removeChild(this.loading)
        console.log('hssLoading: see you')
        window.hssLoading = undefined
    }
}