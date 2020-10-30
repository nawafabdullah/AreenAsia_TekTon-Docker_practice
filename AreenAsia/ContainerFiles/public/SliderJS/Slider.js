var _0x223a = [
    ".hi-prev",
    "each",
    "animate",
    "extend",
    "shift",
    "$opacity",
    "interval",
    "$zIndex",
    "css",
    "speed",
    ".hi-next",
    "find",
    "push",
    "unshift",
    "finish",
    "img",
    "click",
    "opacity",
];
(function (_0x37fdc4, _0x223a38) {
    var _0x2fae13 = function (_0xf45a66) {
        while (--_0xf45a66) {
            _0x37fdc4["push"](_0x37fdc4["shift"]());
        }
    };
    _0x2fae13(++_0x223a38);
})(_0x223a, 0xc1);
var _0x2fae = function (_0x37fdc4, _0x223a38) {
    _0x37fdc4 = _0x37fdc4 - 0x0;
    var _0x2fae13 = _0x223a[_0x37fdc4];
    return _0x2fae13;
};
(function (_0xf45a66) {
    var _0x9ebba6 = function (_0x10e971, _0x42f60a) {
        var _0x31f05c = _0x2fae,
            _0x33157a = _0xf45a66(_0x10e971),
            _0x2ef33f = { speed: 0x7d0, interval: 0x7d0 };
        _0xf45a66[_0x31f05c("0x8")](!![], _0x2ef33f, _0x42f60a);
        var _0xd30581 = [
            {
                $zIndex: 0x1,
                width: 0x78,
                height: 0x96,
                top: 0x45,
                left: 0x86,
                $opacity: 0.2,
            },
            {
                $zIndex: 0x2,
                width: 0x82,
                height: 0xaa,
                top: 0x3b,
                left: 0x0,
                $opacity: 0.4,
            },
            {
                $zIndex: 0x3,
                width: 0xaa,
                height: 0xda,
                top: 0x23,
                left: 0x6e,
                $opacity: 0.7,
            },
            {
                $zIndex: 0x4,
                width: 0xe0,
                height: 0x120,
                top: 0x0,
                left: 0x107,
                $opacity: 0x1,
            },
            {
                $zIndex: 0x3,
                width: 0xaa,
                height: 0xda,
                top: 0x23,
                left: 0x1d6,
                $opacity: 0.7,
            },
            {
                $zIndex: 0x2,
                width: 0x82,
                height: 0xaa,
                top: 0x3b,
                left: 0x26c,
                $opacity: 0.4,
            },
            {
                $zIndex: 0x1,
                width: 0x78,
                height: 0x96,
                top: 0x45,
                left: 0x1f4,
                $opacity: 0.2,
            },
        ],
            _0x3f508d = _0x33157a[_0x31f05c("0x10")]("li"),
            _0x5157ff = null;
        _0x33157a[_0x31f05c("0x10")](_0x31f05c("0xf"))["on"](
            _0x31f05c("0x3"),
            function () {
                _0x4cfcc8();
            }
        ),
            _0x33157a[_0x31f05c("0x10")](_0x31f05c("0x5"))["on"](
                _0x31f05c("0x3"),
                function () {
                    var _0x1e7dfe = _0x31f05c;
                    _0xd30581[_0x1e7dfe("0x11")](_0xd30581[_0x1e7dfe("0x9")]()),
                        _0x1a6c3c();
                }
            ),
            _0x33157a["on"]("mouseenter", function () {
                clearInterval(_0x5157ff), (_0x5157ff = null);
            })["on"]("mouseleave", function () {
                _0x50379a();
            }),
            _0x1a6c3c(),
            _0x50379a();
        function _0x1a6c3c() {
            var _0x561c3a = _0x31f05c;
            _0x3f508d[_0x561c3a("0x6")](function (_0x7f4785, _0x2db69e) {
                var _0x39d7f6 = _0x561c3a,
                    _0x353d80 = _0xd30581[_0x7f4785];
                _0xf45a66(_0x2db69e)
                [_0x39d7f6("0xd")]("zIndex", _0x353d80[_0x39d7f6("0xc")])
                [_0x39d7f6("0x1")]()
                [_0x39d7f6("0x7")](_0x353d80, _0x2ef33f[_0x39d7f6("0xe")])
                [_0x39d7f6("0x10")](_0x39d7f6("0x2"))
                ["css"](_0x39d7f6("0x4"), _0x353d80[_0x39d7f6("0xa")]);
            });
        }
        function _0x4cfcc8() {
            var _0x3647cb = _0x31f05c;
            _0xd30581[_0x3647cb("0x0")](_0xd30581["pop"]()), _0x1a6c3c();
        }
        function _0x50379a() {
            var _0x13257a = _0x31f05c;
            _0x5157ff = setInterval(_0x4cfcc8, _0x2ef33f[_0x13257a("0xb")]);
        }
    };
    _0xf45a66["fn"]["hiSlide"] = function (_0x5b62de) {
        var _0x14df62 = _0x2fae;
        return (
            _0xf45a66(this)[_0x14df62("0x6")](function (_0x51c965, _0x37889a) {
                _0x9ebba6(_0x37889a, _0x5b62de);
            }),
            this
        );
    };
})(jQuery);
