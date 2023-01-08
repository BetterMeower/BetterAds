let ads = document.getElementsByClassName('BetterAd')
let warn = 0

ads.forEach(e => {
    if (e.tagName === "iframe") {
        e.src = "https://adservice.bettermeower.app/generate"
        e.style = "border:none; width:728px; height:90px; overflow:hidden;"
        e.scrolling = "no"
    } else {
        warn++
        console.warn(`${warn} elements were found with the BetterAds class, but not an iframe.`);
    }
})
