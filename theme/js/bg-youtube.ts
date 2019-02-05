import onReady from "./onReady"
import YP from 'youtube-player'

export class BgYouTube {
    private vid: string
    private eid: string
    private wrapper: HTMLElement
    public player: any
    public pid: string

    constructor(videoId: string, wrapperId: string = 'ytwrapper') {
        this.vid = videoId
        this.eid = wrapperId
        if (window.hssLoading) this.pid = window.hssLoading.append()
        onReady(this.registerOnReady.bind(this))
    }

    private async registerOnReady() {
        const targetIdName = `HSB_${this.vid}`

        this.wrapper = document.getElementById(this.eid)

        this.wrapper.style.transform = 'opacity .25s ease'
        this.wrapper.style.opacity = '0'

        const target = document.createElement('div')
        target.setAttribute('id', targetIdName)
        this.wrapper.appendChild(target)

        this.player = YP(targetIdName, {
            videoId: this.vid,
            playerVars: {
                controls: 0,
                loop: 1,
                playlist: this.vid,
                disablekb: 1,
                showinfo: 0,
                modestbranding: 1
            }
        })
        this.player.setVolume(0)
        this.player.playVideo()
        this.player.on('stateChange', (e) => {
            if (window.hssLoading) window.hssLoading.complete(this.pid)
            if (e.data == 1) this.wrapper.style.opacity = '1'
        })
    }
}
