var arr = ['loan.smallinfo.in', 'smallinfo.in', 'www.filmypoints.in'],
    ele = ['div[id*="div-gpt-ad"]', 'div[id="aniBox"]', 'div[id*="gpt-passback"]', 'footer', 'h3', 'h4', 'h5', 'h6', 'div#wpsafe-generate', 'ul', 'ins', 'div[id*="floating_ads"]', 'nav', 'h2', 'p', 'ol', '#cookie-pop', 'div a img', 'div[id*="floating_ads"]', 'div#closebtn_Mobile_Only'];

function r(e) {
    function a(e) {
        if (document.querySelector(e)) {
            document.querySelectorAll(e).forEach(a => {
                a.remove();
            })
        }
    }
    return a(e)
}

function count_script() {
    let i = setInterval(() => {
        if (arr.includes(window.location.host)) {
            clearInterval(i);
            setTimeout(() => {
                if (document.querySelector('script')) {
                    document.querySelectorAll("script").forEach(e => {
                        if (!window.location.href.includes(".php")) {
                            if (e.outerText.replaceAll(" ", "").replaceAll("\n", "")
                                .includes("varcount=")) {
                                var s, h;
                                e.remove();
                                s = document.createElement("script");
                                h = document.getElementsByTagName("head")[0];
                                t = document.createTextNode(
                                    'window.onload=function(){document.getElementById("wpsafe-snp")&&(document.getElementById("wpsafe-snp").style.display="none")};var count=0,counter=setInterval(timer,0);function timer(){if(--count<=0)return document.getElementById("wpsafe-wait1")&&(document.getElementById("wpsafe-wait1").style.display="none"),document.getElementById("wpsafe-generate")&&(document.getElementById("wpsafe-generate").style.display="block"),document.getElementById("wpsafe-snp")&&(document.getElementById("wpsafe-snp").style.display="block"),void clearInterval(counter);document.getElementById("wpsafe-time")&&(document.getElementById("wpsafe-time").innerHTML=count)}'
                                );
                                s.appendChild(t);
                                h.appendChild(s);
                            }
                        }
                    })
                }
            }, 500);
        }
    }, 50)
}

function last_page() {
    let i = setInterval(() => {
        if (document.querySelector("div a[class*='get-link']") && document.querySelector(
            "div a[class*='get-link']").innerHTML == 'Get Link') {
            clearInterval(i);
            setTimeout(() => {
                document.querySelector("div a[class*='get-link']").click();
                setTimeout(() => {
                    window.location = "https://h2244r.github.io/lb";
                }, 50);
            }, 50);
        }
    }, 1200)
}

function auto_run() {
    let i = setInterval(() => {
        if (arr.includes(window.location.host) && document.querySelector('#btn6')) {
            clearInterval(i);
            setTimeout(() => {
                document.querySelector('#btn6').click();
                setTimeout(() => {
                    document.querySelector('#btn6').click();
                }, 50);
            }, 500);
        }
    }, 500);
}

setTimeout(() => {
    count_script();
    setTimeout(() => {
        setInterval(() => {
            if (!window.location.href.includes('.php') && window.location.host != 'h2244r.github.io') {
                ele.forEach(e => {
                    r(e);
                })
            }
        }, 10)
        setTimeout(() => {
            auto_run();
            setTimeout(() => {
                last_page();
            }, 10);
        }, 10);
    }, 10);
}, 10);
