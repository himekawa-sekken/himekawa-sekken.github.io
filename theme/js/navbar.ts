import onReady from "./onReady";

type navbarOption = {
    observationTargetId: string
    hidingTargetId: string
}

export class NavbarHiding {
    private option: navbarOption
    private observationTargetElement: HTMLElement
    private hidingTargetElement: HTMLElement
    private observer: IntersectionObserver
    private showing: boolean

    constructor(option: navbarOption = {
        observationTargetId: 'pre_content',
        hidingTargetId: 'nav'
    }) {
        this.option = option

        if(IntersectionObserver !== undefined){
            this.observer = new IntersectionObserver((entries, observer) => {
                for (const entry of entries) {
                    if (entry.intersectionRatio > 0.4 && !this.showing) this.show()
                    else if (entry.intersectionRatio < 0.4 && this.showing) this.hide()
                }
            }, {
                threshold: [0.3, 0.35, 0.4, 0.45, 0.5]
            })
        } else {
            console.error('NavbarHiding: IntersectionObserverが使えません。')
        }
        onReady(this.registerer.bind(this))
        document.addEventListener('pjax:content', this.registerer.bind(this))
    }

    registerer() {
        if(!this.observer && !this.observationTargetElement) this.observer.unobserve(this.observationTargetElement)

        this.observationTargetElement = document.getElementById(this.option.observationTargetId)
        this.hidingTargetElement = document.getElementById(this.option.hidingTargetId)

        if(!this.observationTargetElement) console.error('NavbarHiding: observationTargetIdが間違っているか、見当たりません。')
        if(!this.hidingTargetElement) console.error('NavbarHiding: hidingTargetIdが間違っているか、見当たりません。')

        if(this.observationTargetElement.childNodes.length > 0 && this.observer) this.observer.observe(this.observationTargetElement)
    }

    show() {
        this.showing = true
        this.hidingTargetElement.style.opacity = '0'
        this.hidingTargetElement.style.visibility = 'hidden'
        this.hidingTargetElement.classList.add('show')
    }

    hide() {
        this.showing = false
        this.hidingTargetElement.style.opacity = ''
        this.hidingTargetElement.style.visibility = ''
        this.hidingTargetElement.classList.remove('show')
    }
}
