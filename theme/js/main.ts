
import { fainit } from "./fainit"
import { gototop } from "./gototop"
import onReady from "./onReady"
import { scrolltoshow } from "./scrolltoshow"

import { detectOldBrowser } from "./old-browsers"
import { pjaxinit } from "./pjax"
import { pjaxLoaded } from "./pjax-ready-others"
import { Sidebar } from "./sidebar"
import { sw } from "./sw"

import { BgYouTube } from "./bg-youtube"
import { Loading } from "./loading"
import { NavbarHiding } from "./navbar"

function contentLoaded() {
    fainit()
    scrolltoshow()
    gototop()
}

new Loading()
let apid: string
if (window.hssLoading) apid = window.hssLoading.append()

onReady(contentLoaded)
document.addEventListener("pjax:content", contentLoaded)

sw()
document.addEventListener("pjax:content", sw)

new Sidebar()

new BgYouTube("Q2eOixIOIT8", "ytwrapper")

new NavbarHiding()

pjaxinit()

detectOldBrowser()

window.addEventListener("pjax:load", pjaxLoaded)

if (apid && window.hssLoading) window.hssLoading.complete(apid)
