export const scrolltoshow = async (): Promise<void> => {
    const els = Array.from(document.getElementsByClassName('scrollts'))
    if(IntersectionObserver !== undefined){
        const observer = new IntersectionObserver((entries, observer) => {
            for (const entry of entries) {
                if(entry.isIntersecting){
                    entry.target.classList.add('show')
                    observer.unobserve(entry.target)
                }
            }
        }, {
            threshold: 0,
            rootMargin: '-30% 0px'
        })
        const observer_nomargin = new IntersectionObserver((entries, observer) => {
            for (const entry of entries) {
                if(entry.isIntersecting){
                    entry.target.classList.add('show')
                    observer.unobserve(entry.target)
                }
            }
        }, {
            threshold: 0,
            rootMargin: '0px'
        })
        for(const el of els){
            if(el.classList.contains('scrollts-nomargin')) observer_nomargin.observe(el)
            else observer.observe(el)
        }
    } else {
        console.log('v')
        for(const el of els){
            el.classList.add('show')
        }
    }
}
