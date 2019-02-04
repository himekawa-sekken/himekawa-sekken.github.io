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


function contentLoaded(){
    fainit()
    scrolltoshow()
    gototop()
}

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
