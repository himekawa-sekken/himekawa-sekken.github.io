import onReady from "./onReady";

function gototo(){
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
    return false
}
export const gototop = async (): Promise<void> => {
    for(const el of Array.from(document.getElementsByClassName('trigger-gototop'))){
        el.addEventListener('click', gototo)
    }
}
