function l(m) {
    console.log(m);
}

function d(m) {
    console.dir(m);
}

var site = new Site();

// Flip Text

function Jackpot(element, delay, speed, offset) {
    this.index = 0;
    this.offset = offset ? offset : 0;
    this.container = document.getElementsByClassName(element)[0];
    this.items = this.container.innerText.split("|");
    this.delay = delay;
    this.speed = speed;

    this.flip = () => {
        let current = this.items[this.index],
            next = this.items[this.index + 1],
            prev = this.items[this.index - 1],
            last = this.items[this.items.length - 1],
            first = this.items[0];

        if (prev === undefined) {
            prev = last;
        }
        if (next === undefined) {
            next = first;
        }

        let prevEl = document.createElement("span");
        prevEl.innerHTML = prev;
        prevEl.className = "top";

        let currentEl = document.createElement("span");
        currentEl.innerHTML = current;
        currentEl.className = "active";

        let nextEl = document.createElement("span");
        nextEl.innerHTML = next;
        nextEl.className = "bottom";

        this.container.innerHTML = "";
        this.container.appendChild(prevEl);
        this.container.appendChild(currentEl);
        this.container.appendChild(nextEl);

        let wordSize = "width:" + currentEl.clientWidth + "px;";
        // "px; height:" +
        // currentEl.clientHeight * 0.83 +
        // "px;";
        this.container.setAttribute("style", wordSize);

        setTimeout(function() {
            prevEl.className = "bottom";
            currentEl.className = "top";
            nextEl.className = "active";
        }, this.delay - this.speed - this.offset);

        this.index >= this.items.length - 1 ? (this.index = 0) : this.index++;
    };

    this.run = () => {
        this.flip();
        let that = this;
        setInterval(function() {
            that.flip();
        }, this.delay - this.offset);
    };
}

// Site
function Site() {
    // Vars
    this.isMobile = false;

    this.main = document.querySelector("main");
    this.body = document.getElementsByTagName("body");
    this.emblem = document.querySelector(".header_emblem");
    this.header = document.querySelector("header.header");
    this.headerHeight = document.querySelector("header.header").clientHeight;
    this.menuItems = document.querySelectorAll(".header_menuitem");

    this.initialLoad = false;
    this.lastScrollTop = 0;
    this.navItems = document.querySelectorAll(".header_menuitem");

    this.footer = document.querySelector("footer.footer");

    // Methods

    // init
    this.init = function() {
        if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
                navigator.userAgent
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                navigator.userAgent.substr(0, 4)
            )
        ) {
            this.isMobile = true;
        }

        this.scrollReveal();

        l("site.init");
        if (!this.isMobile) {
            TweenMax.from(this.header, 1, {
                y: -this.headerHeight,
                ease: Power4.easeInOut,
                delay: 0
            });
            TweenMax.from(this.body, 1, {
                opacity: 0,
                ease: Power4.easeInOut
            });
            TweenMax.from(this.emblem, 1, {
                opacity: 0,
                y: -20,
                ease: Power4.easeOut,
                delay: 1
            });
            TweenMax.staggerFrom(
                this.menuItems,
                1,
                {
                    opacity: 0,
                    y: -10,
                    ease: Power4.easeOut,
                    delay: 1.25
                },
                0.2
            );
        } else {
            TweenMax.from(this.body, 1, {
                opacity: 0,
                ease: Power4.easeInOut
            });
            TweenMax.from(this.emblem, 1, {
                opacity: 0,
                y: -20,
                ease: Power4.easeOut,
                delay: 0.5
            });
            TweenMax.staggerFrom(
                this.menuItems,
                1,
                {
                    opacity: 0,
                    y: -10,
                    ease: Power4.easeOut,
                    delay: 1
                },
                0.2
            );
        }

        this.router();
    };

    this.update = function() {
        l("site.update");
    };

    this.resize = function() {
        // l("site.resize");
        // this.menuHeight();
        // if(window.location.pathname == '/' || window.location.pathname == '/work') {
        //   document.querySelector('.work_introvideo').style.height = window.innerHeight + this.headerHeight;
        // }
    };

    // handle routing
    this.router = function() {
        l("site.router");

        switch (window.location.pathname) {
            case "/":
                this.home();
                break;
            case "/work":
                this.home();
                break;
            case "/about":
                this.about();
                break;
            case "/clients":
                this.clients();
                break;
            default:
                if (window.location.pathname.indexOf("work/") > 0) {
                    this.casestudy();
                } else {
                    l("unassigned");
                }
        }
    };

    this.jumpToTop = function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    this.updateTitle = function(html) {
        document.title = html.match(/<title>(.*?)<\/title>/)[1].trim();
    };

    // load page
    this.load = function(e) {
        e.preventDefault();
        let page;
        l("load");
        l(e);
        if (e.target.localName == "a") {
            page = e.target.href;
            this.navItems.forEach(function(item) {
                item.classList.remove("active");
            });
            e.target.parentElement.classList.add("active");
        } else {
            page = e.target.parentElement.href;
        }

        this.jumpToTop();

        var request = new Request(page, {
            method: "GET",
            mode: "no-cors",
            redirect: "follow",
            headers: new Headers({
                "Content-Type": "text/plain"
            })
        });

        fetch(request)
            .then(res => res.text())
            .then(text => {
                site.updateTitle(text);
                history.pushState({}, "", page);
                site.main.classList.add("out");
                return text;
            })
            .then(text => {
                let pageData =
                        "<main" +
                        text.split("<main")[1].split("/main>")[0] +
                        "/main>",
                    fragment = document
                        .createRange()
                        .createContextualFragment(pageData),
                    className = page.split("/").pop();

                setTimeout(function() {
                    // console.log(site.main.classList);
                    site.main.classList = "";
                    site.main.classList = className;
                    site.main.innerHTML = "";
                    site.main.innerHTML = fragment.firstChild.innerHTML;
                    site.scrollReveal();
                    site.router();
                }, 300);
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    this.scrollReveal = function() {
        ScrollReveal({ reset: false }).reveal(".anim", {
            delay: 300,
            interval: 50,
            // useDelay: "onload",
            distance: "10px",
            easing: "cubic-bezier(0.5, 0, 0, 1)"
        });
    };

    // home
    this.home = function() {
        l("site.home");
        site.menuHeight();

        var video = document.querySelector(".work_video");

        video.onloadeddata = function() {
            // console.log("video loaded");
            video.setAttribute("paused", false);
            video.setAttribute("autoplay", true);
            video.classList.remove("out");
            video.play();
        };

        if (site.initialLoad === true) {
            l("jump to content");
            // window.location.href = "#casestudies";
            var offset = document.getElementById("casestudies").offsetTop - 90;
            window.scroll({ top: offset, left: 0, behavior: "smooth" });
        }

        site.workTransIn();

        var flip = new Jackpot("flip", 700, 300);
        flip.run();

        $(".duotone").duotone();

        setTimeout(function() {
            l("updated footer home");
            $(".footer_worklink").addClass("hide");
            $(".footer_clientslink").removeClass("hide");
            $(".footer_aboutlink").removeClass("hide");
        }, 200);

        site.initialLoad = true;

        site.footer.classList.add("footer-home");
    };

    // clients
    this.clients = function() {
        l("site.clients");
        site.menuHeight();

        // var clientTitle = document.querySelector(".clients_title");
        // TweenMax.from(clientTitle, 1, {
        //     opacity: 0,
        //     y: -10,
        //     ease: Power4.easeOut,
        //     delay: 0
        // });
        // var clientList = document.querySelectorAll(".clients ul li");
        // // l(clientList);
        // TweenMax.staggerFrom(
        //     clientList,
        //     1,
        //     {
        //         opacity: 0,
        //         y: -10,
        //         ease: Power4.easeOut,
        //         delay: 0.5
        //     },
        //     0.05
        // );

        setTimeout(function() {
            l("updated footer clients");
            $(".footer_worklink").removeClass("hide");
            $(".footer_clientslink").addClass("hide");
            $(".footer_aboutlink").removeClass("hide");
        }, 200);

        site.footer.classList.remove("footer-home");
    };

    // about
    this.about = function() {
        l("site.about");
        site.menuHeight();
        site.map();

        var aboutIntro = this.spanify(document.querySelector(".about h1"));
        TweenMax.staggerFrom(
            aboutIntro,
            1,
            {
                opacity: 0,
                y: -10,
                ease: Power4.easeOut,
                delay: 1
            },
            0.15
        );

        //     if (site.isMobile) {
        //       var newTitle =
        //         document.querySelector(".t-big").innerHTML.split("<br>")[0] +
        //         document.querySelector(".t-big").innerHTML.split("<br>")[1];
        //       document.querySelector(".t-big").innerHTML = newTitle;
        //     }

        site.imageGrid();
        setTimeout(function() {
            l("updated footer about");
            $(".footer_worklink").removeClass("hide");
            $(".footer_clientslink").removeClass("hide");
            $(".footer_aboutlink").addClass("hide");
        }, 200);
        site.footer.classList.remove("footer-home");
    };

    // casestudy
    this.casestudy = function() {
        l("site.casestudy");
        site.menuHeight();

        var nodeList = document.querySelectorAll(".slider_carousel");

        for (var i = 0, t = nodeList.length; i < t; i++) {
            var flkty = Flickity.data(nodeList[i]);
            if (!flkty) {
                // Check if element had flickity options specified in data attribute.
                var flktyData = nodeList[i].getAttribute("data-flickity");
                if (flktyData) {
                    var flktyOptions = JSON.parse(flktyData);
                    new Flickity(nodeList[i], flktyOptions);
                } else {
                    new Flickity(nodeList[i]);
                }
            }
        }
        setTimeout(function() {
            l("updated footer case");
            $(".footer_worklink").removeClass("hide");
            $(".footer_clientslink").addClass("hide");
            $(".footer_aboutlink").removeClass("hide");
        }, 200);
        site.footer.classList.remove("footer-home");
    };

    // Utils

    // work page incoming anims
    this.workTransIn = function() {
        var welcome = document.querySelector(".work_welcome");
        TweenMax.from(welcome, 1, {
            opacity: 0,
            y: 15,
            ease: Power4.easeOut,
            delay: 2
        });
        var tagline = this.spanify(document.querySelector(".work_tagline"));
        TweenMax.staggerFrom(
            tagline,
            1,
            {
                opacity: 0,
                y: -10,
                ease: Power4.easeOut,
                delay: 1
            },
            0.15
        );
    };

    this.showreel = function(event) {
        console.log(event);
        event.preventDefault();
        let modal = document.getElementsByClassName("showreelmodal")[0]
            .classList;
        modal.add("active");
        $("body").addClass("locked");
        document.getElementById("showreel").play();
    };

    this.closereel = function(event) {
        console.log(event);
        let modal = document.getElementsByClassName("showreelmodal")[0]
            .classList;
        modal.remove("active");
        $("body").removeClass("locked");
        document.getElementById("showreel").pause();
    };

    // wrap words in spams
    this.spanify = function(element) {
        var withSpans = "",
            words = element.innerHTML.split(/[\n\r\s]+/);
        words.forEach(function(word) {
            withSpans += "<span>" + word + "</span> ";
        });
        element.innerHTML = withSpans;
        return document.querySelectorAll("." + element.className + " span");
    };

    // menu reveal on scroll up
    this.menuReveal = function() {
        if (!site.isMobile) {
            if (window.pageYOffset < 150) {
                site.header.classList.remove("js-hidenav");
            } else {
                var st =
                    window.pageYOffset || document.documentElement.scrollTop;
                if (st > this.lastScrollTop) {
                    site.header.classList.add("js-hidenav");
                } else {
                    site.header.classList.remove("js-hidenav");
                }
                this.lastScrollTop = st <= 0 ? 0 : st;
            }
        }
    };

    // parallax
    this.parallax = function() {
        if (!site.isMobile) {
            l("parallax");
            $(".casestudies").css("padding-bottom", "20px");
            let scrolled = window.pageYOffset;
            let items = document.querySelectorAll(
                ".casestudies_thumbs div:nth-child(even)"
            );
            items.forEach((el, i) => {
                el.style.transform =
                    "translateY(" + (350 + -(scrolled * 0.125)) + "px)";
            });
        } else {
            $;
        }
    };

    this.imageGrid = function() {
        var imagegrid = document
            .querySelector(".about_imagearray")
            .innerHTML.split(", ");
        imagegrid.splice(-1, 1);

        var iG = document.querySelectorAll(".imagegrid div");

        iG.forEach(function(el, index) {
            // l(el);
            // l(index);
            var image = '<img src="' + imagegrid.shift() + '">';
            el.innerHTML = image;

            el.addEventListener("mouseenter", function() {
                var current = this.children[0].getAttribute("src");
                imagegrid.push(current);
                var newImg = imagegrid.shift();
                var newPic = document
                    .createRange()
                    .createContextualFragment(
                        '<img class="fadeout" src="' + newImg + '">'
                    );

                this.appendChild(newPic);

                var that = this;
                setTimeout(function() {
                    that.children[0].classList.add("fadeout");
                    that.children[1].classList.remove("fadeout");
                }, 10);

                setTimeout(function() {
                    that.removeChild(that.children[0]);
                }, 300);
            });
        });
    };

    // limit scroll events firing
    this.throttle = function(callback, limit) {
        var tick = false;
        return function() {
            if (!tick) {
                callback.call();
                tick = true;
                setTimeout(function() {
                    tick = false;
                }, limit);
            }
        };
    };

    // menu height
    this.menuHeight = function() {
        // l('site.menuHeight')
        // this.main.style = 'margin-top: ' + (this.headerHeight - 1) + 'px';
    };

    // map
    this.map = function() {
        l("site.map");
        var lat = document.getElementById("map").dataset.lat,
            long = document.getElementById("map").dataset.long,
            markerGraphic = "../assets/icons/marker.svg",
            map = new google.maps.Map(document.getElementById("map"), {
                zoom: 16,
                center: new google.maps.LatLng(lat, long),
                mapTypeId: "roadmap",
                zoomControl: false,
                disableDefaultUI: true,
                styles: [
                    {
                        elementType: "geometry",
                        stylers: [
                            {
                                color: "#e3e9ef"
                            }
                        ]
                    },
                    {
                        elementType: "labels.icon",
                        stylers: [
                            {
                                visibility: "off"
                            }
                        ]
                    },
                    {
                        elementType: "labels.text.fill",
                        stylers: [
                            {
                                color: "#474b5b"
                            }
                        ]
                    },
                    {
                        elementType: "labels.text.stroke",
                        stylers: [
                            {
                                color: "#f5f5f5"
                            }
                        ]
                    },
                    {
                        featureType: "administrative",
                        elementType: "geometry",
                        stylers: [
                            {
                                visibility: "off"
                            }
                        ]
                    },
                    {
                        featureType: "administrative.land_parcel",
                        elementType: "labels.text.fill",
                        stylers: [
                            {
                                color: "#474b5b"
                            }
                        ]
                    },
                    {
                        featureType: "poi",
                        stylers: [
                            {
                                visibility: "off"
                            }
                        ]
                    },
                    {
                        featureType: "poi",
                        elementType: "geometry",
                        stylers: [
                            {
                                color: "#eeeeee"
                            }
                        ]
                    },
                    {
                        featureType: "poi",
                        elementType: "labels.text.fill",
                        stylers: [
                            {
                                color: "#757575"
                            }
                        ]
                    },
                    {
                        featureType: "poi.park",
                        elementType: "geometry",
                        stylers: [
                            {
                                color: "#e5e5e5"
                            }
                        ]
                    },
                    {
                        featureType: "poi.park",
                        elementType: "labels.text.fill",
                        stylers: [
                            {
                                color: "#9e9e9e"
                            }
                        ]
                    },
                    {
                        featureType: "road",
                        elementType: "geometry",
                        stylers: [
                            {
                                color: "#ffffff"
                            }
                        ]
                    },
                    {
                        featureType: "road",
                        elementType: "labels.icon",
                        stylers: [
                            {
                                visibility: "off"
                            }
                        ]
                    },
                    {
                        featureType: "road.arterial",
                        elementType: "labels.text.fill",
                        stylers: [
                            {
                                color: "#474b5b"
                            }
                        ]
                    },
                    {
                        featureType: "road.highway",
                        elementType: "geometry",
                        stylers: [
                            {
                                color: "#dadada"
                            }
                        ]
                    },
                    {
                        featureType: "road.highway",
                        elementType: "labels.text.fill",
                        stylers: [
                            {
                                color: "#474b5b"
                            }
                        ]
                    },
                    {
                        featureType: "road.local",
                        elementType: "labels.text.fill",
                        stylers: [
                            {
                                color: "#474b5b"
                            }
                        ]
                    },
                    {
                        featureType: "transit",
                        stylers: [
                            {
                                visibility: "off"
                            }
                        ]
                    },
                    {
                        featureType: "transit.line",
                        elementType: "geometry",
                        stylers: [
                            {
                                color: "#e5e5e5"
                            }
                        ]
                    },
                    {
                        featureType: "transit.station",
                        elementType: "geometry",
                        stylers: [
                            {
                                color: "#eeeeee"
                            }
                        ]
                    },
                    {
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [
                            {
                                color: "#474b5b"
                            }
                        ]
                    },
                    {
                        featureType: "water",
                        elementType: "labels.text.fill",
                        stylers: [
                            {
                                color: "#ffffff"
                            }
                        ]
                    }
                ]
            });

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(lat - 0.0003, long),
            icon: markerGraphic,
            map: map
        });
        google.maps.event.addListener(marker, "click", function() {
            window.location.href = this.url;
        });
    };

    this.openMap = function(e) {
        l("site.openMap");
        e.preventDefault();
        var maplink = $(this).data("maplink");
        window.open(maplink, "_blank");
    };
} // </Site>

// Event Listeners
document.addEventListener("DOMContentLoaded", site.init());
window.addEventListener("scroll", site.throttle(site.menuReveal, 150));
window.addEventListener("scroll", site.parallax);
$(document).on("click", ".about_mapgraphic", site.openMap);

// Event Triggers
window.onresize = site.resize();
window.onpopstate = function() {
    l("popped");
    site.initialLoad = true;
    site.load(event);
};
