
import onReady from './onReady'
import { fainit } from './fainit'
import { scrolltoshow } from './scrolltoshow'
import { gototop } from './gototop'

import { Sidebar } from './sidebar'
import { sw } from './sw';
import { pjaxinit } from './pjax';
import { detectOldBrowser } from './old-browsers';
import { pjaxLoaded } from './pjax-ready-others';

import { BgYouTube } from './bg-youtube';
import { NavbarHiding } from './navbar';
import { loading } from './loading';

function contentLoaded(){
    fainit()
    scrolltoshow()
    gototop()
}

new loading()
let apid: string
if (window.hssLoading) apid = window.hssLoading.append()

onReady(contentLoaded)
document.addEventListener('pjax:content', contentLoaded)

sw()
document.addEventListener('pjax:content', sw)

new Sidebar()

new BgYouTube('Q2eOixIOIT8', 'ytwrapper')

new NavbarHiding()

pjaxinit()

detectOldBrowser()

window.addEventListener('pjax:load', pjaxLoaded)

if (apid && window.hssLoading) window.hssLoading.complete(apid)