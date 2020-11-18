$(document).ready(function() {
    checkIE();
    swiperInit();
    tabActive();
    tabActiveHome();
    tabActiveFruit();
    tabActiveLogin();
    toggleSupportClient();
    projectDetailSlide();
    productPromotionDetail();
    quantityNumber();
    showBackToTop();
    checkBrowser();
});

$('.collapse').click(function(e) {
    e.preventDefault();
    $("a:first-of-type").removeClass('click');

    var $this = $(this);
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .collapse-inner').removeClass('show');
        $this.parent().parent().find('li .collapse-inner').slideUp(350);
        $this.toggleClass('click');
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});

$('.menu-dropdown').click(function(e) {
    e.preventDefault();
    $("i").removeClass('click');

    var $this = $(this);
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .dropdown-inner').removeClass('show');
        $this.parent().parent().find('li .dropdown-inner').slideUp(350);
        $this.toggleClass('click');
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});

$('.header_bars').click(function() {
    $(this).toggleClass("click");
    $('body').toggleClass('no-scroll');
    $('.menu_mobile').toggleClass("show");
    $('.overlay').toggleClass("show");
});
$('.Language-show').click(function() {
    $(this).toggleClass("click");
    $('.Language-hide').toggleClass("show");
});
$('.overlay').click(function() {
    $(this).toggleClass("click");
    $('body').toggleClass('no-scroll');
    $('.menu_mobile').toggleClass("show");
    $('.overlay').toggleClass("show");
});

$('.addtocart, .add-to-cart').click(function() {
    $(this).toggleClass("click");
    $('.drop-menu').toggleClass("show");
});

window.onload = function() {
    $(".mask, .modal-ads").addClass('active');
};
$('.mask, .close').click(function() {
    $(this).toggleClass("click");
    $('.mask').toggleClass("active");
    $('.modal-ads').toggleClass("active");
});

$('.product-list').click(function() {
    $(".product-list").removeClass('click');

    var $this = $(this);
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(250);
    } else {
        $this.parent().parent().find('li .product-list_inner').removeClass('show');
        $this.parent().parent().find('li .product-list_inner').slideUp(250);
        $this.toggleClass('click');
        $this.next().toggleClass('show');
        $this.next().slideToggle(250);
    }
});
// Toggle
function toggleSupportClient() {
    var coll = document.getElementsByClassName("togglesupport");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }

}

function showBackToTop() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('#back-to-top').addClass('active');
        } else {
            $('#back-to-top').removeClass('active');
        }
    });

    $("#back-to-top").on("click", function(e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: 0
        })
    })
}

function quantityNumber() {
    $(".qty-minus").click(function() {
        let minus = $(this).parents('.input-group').find('input').val();
        console.log('top')
        console.log(minus)
        if (minus > 0) {
            $(this).parents('.input-group').find('input').val(minus - 1);
        } else {
            $(this).parents('.input-group').find('input').val(0);
        }
    });
    $(".qty-plus").on("click", function() {
        let plus = Number($(this).parents('.input-group').find('input').val());
        console.log('bottom')
        console.log(plus)
        $(this).parents('.input-group').find('input').val(plus + 1);
    });
}

function tabActive() {
    $(".tab-navigation li a").on("click", function() {
        $(this)
            .parents(".tab-navigation")
            .find("li")
            .removeClass("active");
        $(this)
            .parents("li")
            .addClass("active");

        var display = $(this).attr("data-type");
        $(".tab-item").removeClass("active");
        $("#" + display).addClass("active");

        let maxHeight = 400;
        let contentTab = $(".tab-wrapper .tab-item.active");
        // console.log(contentTab.height())
        if (contentTab.height() < maxHeight) {
            $(contentTab).find('.btn-view-more').hide()
        }
    });
}

function tabActiveHome() {
    $(".tab-navigation-2 li a").on("click", function() {
        $(this)
            .parents(".tab-navigation-2")
            .find("li")
            .removeClass("active");
        $(this)
            .parents("li")
            .addClass("active");

        var display = $(this).attr("data-type");
        $(".tab-item-2").removeClass("active");
        $("#" + display).addClass("active");

        let maxHeight = 400;
        let contentTab = $(".tab-wrapper-2 .tab-item-2.active");
        // console.log(contentTab.height())
        if (contentTab.height() < maxHeight) {
            $(contentTab).find('.btn-view-more').hide()
        }
    });
}

function tabActiveFruit() {
    $(".tab-navigation-3 li a").on("click", function() {
        $(this)
            .parents(".tab-navigation-3")
            .find("li")
            .removeClass("active");
        $(this)
            .parents("li")
            .addClass("active");

        var display = $(this).attr("data-type");
        $(".tab-item-3").removeClass("active");
        $("#" + display).addClass("active");

        let maxHeight = 400;
        let contentTab = $(".tab-wrapper-3 .tab-item-3.active");
        // console.log(contentTab.height())
        if (contentTab.height() < maxHeight) {
            $(contentTab).find('.btn-view-more').hide()
        }
    });
}

function tabActiveLogin() {
    $(".tab-navigation-login li a").on("click", function() {
        $(this)
            .parents(".tab-navigation-login")
            .find("li")
            .removeClass("active");
        $(this)
            .parents("li")
            .addClass("active");

        var display = $(this).attr("data-type");
        $(".tab-item-login").removeClass("active");
        $("#" + display).addClass("active");

        let maxHeight = 400;
        let contentTab = $(".tab-wrapper-login .tab-item-login.active");
        // console.log(contentTab.height())
        if (contentTab.height() < maxHeight) {
            $(contentTab).find('.btn-view-more').hide()
        }
    });
}
// Slide project-detail
function projectDetailSlide() {
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            576: {
                slidesPerView: 3,
            },
            1000: {
                slidesPerView: 4,
            }
        }
    });
    var galleryTop = new Swiper('.gallery-top', {
        thumbs: {
            swiper: galleryThumbs
        },
        navigation: {
            nextEl: '.nav-next',
            prevEl: '.nav-prev',
        },
    });
}

function productPromotionDetail() {
    var brandSwiper = new Swiper(".block_product-detail-2 .swiper-container", {
        // Optional parameters
        speed: 1000,
        spaceBetween: 30,
        autoplay: {
            delay: 2000,
        },
        navigation: {
            nextEl: ".block_product-detail-2 .nav-arrow-next",
            prevEl: ".block_product-detail-2 .nav-arrow-prev",
        },
        breakpointsInverse: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            400: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1025: {
                slidesPerView: 4,
            },
            1440: {
                slidesPerView: 5,
            },
            1600: {
                slidesPerView: 5,
            },
        },
    });
}

function swiperInit() {
    var homerSwiper = new Swiper(".home-banner .swiper-container", {
        // Optional parameters
        speed: 1205,
        slidesPerView: 1,
        autoplay: {
            delay: 3000
        },
        pagination: {
            el: ".home-banner-pagination",
            type: "bullets",
            clickable: "true"
        }
    });
    var brandSwiper = new Swiper(".block_product-detail-4 .swiper-container", {
        // Optional parameters
        speed: 1000,
        spaceBetween: 30,
        autoplay: {
            delay: 2000,
        },
        navigation: {
            nextEl: ".block_product-detail-4 .nav-arrow-next",
            prevEl: ".block_product-detail-4 .nav-arrow-prev",
        },
        breakpointsInverse: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            400: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1025: {
                slidesPerView: 5,
            },
            1440: {
                slidesPerView: 5,
            },
            1600: {
                slidesPerView: 5,
            },
        },
    });
    var brandSwiper = new Swiper(".block_s-2 .swiper-container", {
        // Optional parameters
        speed: 1000,
        spaceBetween: 30,
        autoplay: {
            delay: 2000,
        },
        navigation: {
            nextEl: ".block_s-2 .nav-arrow-next",
            prevEl: ".block_s-2 .nav-arrow-prev",
        },
        breakpointsInverse: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            400: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            1025: {
                slidesPerView: 5,
            },
            1440: {
                slidesPerView: 5,
            },
            1600: {
                slidesPerView: 5,
            },
        },
    });
    $(".trinity-item-swiper .swiper-container").each(function(index, element) {
        var $this = $(this);
        $this.addClass("instance-" + index);
        $this
            .parent()
            .find(".nav-arrow-prev")
            .addClass("btn-prev-" + index);
        $this
            .parent()
            .find(".nav-arrow-next")
            .addClass("btn-next-" + index);

        var productHomeTabswiper = new Swiper(".instance-" + index, {
            slidesPerColumn: 1,
            speed: 750,
            observer: true,
            spaceBetween: 20,
            observeParents: true,
            breakpointsInverse: true,
            breakpoints: {
                200: {
                    slidesPerView: 1,
                },
                375: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 2,
                },
                769: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 5,
                },
            },
            navigation: {
                nextEl: ".btn-next-" + index,
                prevEl: ".btn-prev-" + index,
            },
        });
    });
    var brandSwiper = new Swiper(".block_s-4 .slide-fruit", {
        // Optional parameters
        speed: 1000,
        spaceBetween: 5,
        autoplay: {
            delay: 2000,
        },
        navigation: {
            nextEl: ".block_s-4 .nav-arrow-next",
            prevEl: ".block_s-4 .nav-arrow-prev",
        },
        breakpointsInverse: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            400: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1025: {
                slidesPerView: 2,
            },
            1440: {
                slidesPerView: 3,
            },
            1600: {
                slidesPerView: 2,
            },
        },
    });
    var brandSwiper = new Swiper(".block_s-5 .swiper-container", {
        // Optional parameters
        speed: 1000,
        spaceBetween: 30,
        autoplay: {
            delay: 2000,
        },
        navigation: {
            nextEl: ".block_s-5 .nav-arrow-next",
            prevEl: ".block_s-5 .nav-arrow-prev",
        },
        breakpointsInverse: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            400: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1025: {
                slidesPerView: 3,
            },
            1440: {
                slidesPerView: 4,
            },
            1600: {
                slidesPerView: 4,
            },
        },
    });
}

function checkIE() {
    var isIE = /*@cc_on!@*/ false || !!document.documentMode
    if (isIE == true) {
        $('body').addClass('is-browser-IE')
    } else {
        $('body').removeClass('is-browser-IE')
    }
}

function checkBrowser() {
    var isIE = /*@cc_on!@*/ false || !!document.documentMode;
    // console.log(isIE)
    if (isIE == true) {
        // console.log(1)
        alert("Website hiển thị tốt nhất trên các phiên bản trình duyệt Chorme và FireFox!")
    } else {
        // console.log(0)
    }
}