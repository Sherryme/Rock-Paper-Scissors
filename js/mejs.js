!
function(N, M) {
    function L() {
        var a = I.getBoundingClientRect().width;
        a / F > 540 && (a = 540 * F);
        var d = a / 10;
        I.style.fontSize = d + "px",
        D.rem = N.rem = d
    }
    var K, J = N.document,
    I = J.documentElement,
    H = J.querySelector('meta[name="viewport"]'),
    G = J.querySelector('meta[name="flexible"]'),
    F = 0,
    E = 0,
    D = M.flexible || (M.flexible = {});
    if (H) {
        var C = H.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
        C && (E = parseFloat(C[1]), F = parseInt(1 / E))
    } else {
        if (G) {
            var B = G.getAttribute("content");
            if (B) {
                var A = B.match(/initial\-dpr=([\d\.]+)/),
                z = B.match(/maximum\-dpr=([\d\.]+)/);
                A && (F = parseFloat(A[1]), E = parseFloat((1 / F).toFixed(2))),
                z && (F = parseFloat(z[1]), E = parseFloat((1 / F).toFixed(2)))
            }
        }
    }
    if (!F && !E) {
        var y = N.navigator.userAgent,
        x = ( !! y.match(/android/gi), !!y.match(/iphone/gi)),
        w = x && !!y.match(/OS 9_3/),
        v = N.devicePixelRatio;
        F = x && !w ? v >= 3 && (!F || F >= 3) ? 3 : v >= 2 && (!F || F >= 2) ? 2 : 1 : 1,
        E = 1 / F
    }
    if (I.setAttribute("data-dpr", F), !H) {
        if (H = J.createElement("meta"), H.setAttribute("name", "viewport"), H.setAttribute("content", "initial-scale=" + E + ", maximum-scale=" + E + ", minimum-scale=" + E + ", user-scalable=no"), I.firstElementChild) {
            I.firstElementChild.appendChild(H)
        } else {
            var u = J.createElement("div");
            u.appendChild(H),
            J.write(u.innerHTML)
        }
    }
    N.addEventListener("resize",
    function() {
        clearTimeout(K),
        K = setTimeout(L, 300)
    },
    !1),
    N.addEventListener("pageshow",
    function(b) {
        b.persisted && (clearTimeout(K), K = setTimeout(L, 300))
    },
    !1),
    "complete" === J.readyState ? J.body.style.fontSize = 12 * F + "px": J.addEventListener("DOMContentLoaded",
    function() {
        J.body.style.fontSize = 12 * F + "px"
    },
    !1),
    L(),
    D.dpr = N.dpr = F,
    D.refreshRem = L,
    D.rem2px = function(d) {
        var c = parseFloat(d) * this.rem;
        return "string" == typeof d && d.match(/rem$/) && (c += "px"),
        c
    },
    D.px2rem = function(d) {
        var c = parseFloat(d) / this.rem;
        return "string" == typeof d && d.match(/px$/) && (c += "rem"),
        c
    }
} (window, window.lib || (window.lib = {}));
$(function() {
    var prizeList = [{
        "prizeid": "1",
        "prizename": "Scissor"
    },
    {
        "prizeid": "2",
        "prizename": "Paper"
    },
    {
        "prizeid": "3",
        "prizename": "Rock"
    },
    ];
    var rotateDd = $('.rotate_box dd');
    var ddHei = rotateDd.height();
    rotateDd.css('backgroundSize', prizeList.length * ddHei + 'px 100% ');
    $('.rotate_btn').click(function() {
        var _this = $(this);
        if (!_this.hasClass('act')) { ! _this.addClass('act');
            $('.rotate_box dd').rotate(methods.getRandom())
        }
    }) 
    $.fn.extend({
        rotate: function(num, callback) {
            var zjNum = num;
            console.log(zjNum);
            $(this).each(function(index) {
                var f = $(this);
                setTimeout(function() {
                    f.animate({
                        backgroundPositionX: -(ddHei * prizeList.length * 5 + zjNum * ddHei)
                    },
                    {
                        duration: 6000 + index * 1000,
                        easing: 'easeInOutCirc',
                        complete: function() {
                            $('.rotate_btn').removeClass('act');
                                if (callback) {
                                    setTimeout(function() {
                                        callback();
                                    },
                                    1000)
                                }
                            // if (index === 0) {
                                
                            // }
                            f.css('backgroundPositionX', -(zjNum * ddHei))
                        }
                    })
                },
                index * 1000)
            })
        }
    }) 
    var methods = {        
        //随机动画，想改为根据按下后不松手时长生成
        getRandom: function() {
            var val = Math.floor(Math.random() * 3);
            // var arr = [],
            // _num = num;            
            // do {
            //     var val = Math.floor(Math.random() * 3);
            //     arr.push(val);
            //     _num--
            // } while ( _num > 0 );
            return val;
        },
        getDataIndex: function(val) {
            var prizeMsg = val,
            _index, arr = [];
            for (var i = 0; i < prizeList.length; i++) {
                $.each(prizeList[i],
                function() {
                    if (prizeList[i]['prizeid'] === prizeMsg['prizeid']) {
                        _index = i;
                    }
                })
            }
            for (var y = 0; y < 2; y++) {
                arr.push(_index);
            }
            return arr;
        }
    }
})