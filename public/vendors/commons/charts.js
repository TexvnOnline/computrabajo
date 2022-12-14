function IsDesktopSize() {
    return $(window).width() > 768;
}
function LoadCharts(n) {
    var t = $(".graf");
    t = n ? t.filter(".desktopOnly") : t.not(".desktopOnly");
    t.each(function (n, t) {
        var i, r;
        if (((jsonData = $(t).find(".canvas_data").val()), !jsonData))
            return !0;
        i = JSON.parse(jsonData);
        $(t).find(".it-minValue").text(i.salaryArray[0]);
        $(t)
            .find(".it-maxValue")
            .text(i.salaryArray[i.salaryArray.length - 1]);
        r = $(t).find(".canvas_visual")[0];
        makeSalariesChart(r, i, [
            _chartResources.LIT_LABEL_GRAPH_2 || "sources",
        ]);
    });
    n && (_chartDesktopOnlyLoaded = !0);
    ChartPies();
}
function makeSalariesChart(n, t, i) {
    var u =
            Math.max.apply(Math, t.sourceArray) +
            Math.max.apply(Math, t.sourceArray) * 0.1,
        r = $.map(t.sourceArray, function (n) {
            return "rgba(255, 165, 0, " + n / u + ")";
        }),
        e = 3.5,
        f = $.map(t.sourceArray, function (n) {
            return (n * e) / u;
        }),
        o = new Chart.Bar(n, {
            type: "bar",
            data: {
                labels: $.map(t.sourceArray, function (n) {
                    return n == 0 ? "" : n + i[0];
                }),
                datasets: [
                    {
                        type: "bar",
                        data: t.sourceArray,
                        backgroundColor: r,
                        borderColor: r,
                        borderWidth: 1,
                        hoverBorderWidth: 0,
                    },
                    {
                        type: "line",
                        data: t.sourceArray,
                        fill: "top",
                        backgroundColor: "transparent",
                        borderColor: "rgba(255, 165, 0, 0.9)",
                        borderWidth: 1,
                        pointBackgroundColor: "rgba(255, 255, 255, 1)",
                        pointRadius: f,
                        pointStyle: "rect",
                        pointHoverBorderColor: r,
                        pointHoverBackgroundColor: r,
                        pointHoverRadius: f,
                        spanGaps: !1,
                    },
                ],
            },
            options: {
                responsive: !0,
                showToolTips: !0,
                maintainAspectRatio: !1,
                legend: { display: !1 },
                scales: {
                    yAxes: [
                        {
                            ticks: { display: !1, max: u },
                            gridLines: {
                                offsetGridLines: !1,
                                color: "transparent",
                                borderColor: "#5E5E5E",
                            },
                        },
                    ],
                    xAxes: [
                        {
                            ticks: { display: !1 },
                            gridLines: {
                                offsetGridLines: !1,
                                color: "transparent",
                                borderColor: "#5E5E5E",
                            },
                        },
                    ],
                },
                tooltips: {
                    enabled: !1,
                    mode: "index",
                    position: "nearest",
                    custom: function (n) {
                        var t, i, r, u, f;
                        if (n) {
                            if (
                                ((t =
                                    document.getElementById("chartjs-tooltip")),
                                t ||
                                    ((t = document.createElement("div")),
                                    (t.id = "chartjs-tooltip"),
                                    (t.innerHTML = "<table></table>"),
                                    this._chart.canvas.parentNode.appendChild(
                                        t
                                    )),
                                n.opacity === 0 ||
                                    n.body == null ||
                                    n.body[0].lines.length === 0)
                            ) {
                                t.style.opacity = 0;
                                return;
                            }
                            t.classList.remove(
                                "above",
                                "below",
                                "no-transform"
                            );
                            n.yAlign
                                ? t.classList.add(n.yAlign)
                                : t.classList.add("no-transform");
                            n.body &&
                                ((i = "<tbody>"),
                                (i +=
                                    '<tr><td style="text-align:center;">' +
                                    n.body[0].lines[0] +
                                    "</td></tr>"),
                                (i += "</tbody>"),
                                (r = t.querySelector("table")),
                                (r.innerHTML = i));
                            u = this._chart.canvas.offsetTop;
                            f = this._chart.canvas.offsetLeft;
                            t.style.opacity = 0.85;
                            t.style.left = f + n.caretX + "px";
                            t.style.top = u + n.caretY - 42 + "px";
                            t.style.fontFamily = "Helvetica,Arial,sans-serif";
                            t.style.fontSize = "9pt";
                            t.style.fontStyle = n._fontStyle;
                            t.style.padding = "2px 6px";
                        }
                    },
                    callbacks: {
                        label: function (n) {
                            return n.xLabel;
                        },
                        title: function () {
                            return;
                        },
                    },
                },
            },
        });
}
function ChartPies() {
    var n = $(".graf_pie");
    n.each(function (n, t) {
        if (((jsonData = $(t).find(".canvas_data").val()), !jsonData))
            return !0;
        var i = JSON.parse(jsonData),
            r = $(t).find(".canvas_visual")[0];
        renderizeChartPie(r, i);
    });
}
function renderizeChartPie(n, t) {
    var i = new Chart(n, {
        type: "pie",
        data: {
            datasets: [
                {
                    data: t.sourceArray,
                    backgroundColor: ["#91b54e", "#edeef1"],
                    hoverBackgroundColor: ["#91b54e", "#edeef1"],
                    borderWidth: 1,
                    borderColor: ["#fff", "#fff"],
                    hoverBorderColor: ["#fff", "#fff"],
                },
            ],
        },
        options: {
            cutoutPercentage: 75,
            legend: { display: !1 },
            maintainAspectRatio: !1,
            rotation: !0 * Math.PI,
            circumference: !0 * Math.PI,
            tooltips: {
                enabled: !1,
                xPadding: 12,
                yPadding: 8,
                cornerRadius: 3,
                displayColors: !1,
            },
        },
    });
}
!(function (n) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = n())
        : "function" == typeof define && define.amd
        ? define([], n)
        : (("undefined" != typeof window
              ? window
              : "undefined" != typeof global
              ? global
              : "undefined" != typeof self
              ? self
              : this
          ).Chart = n());
})(function () {
    return (function n(t, i, r) {
        function u(f, o) {
            var h, c, s;
            if (!i[f]) {
                if (!t[f]) {
                    if (
                        ((h = "function" == typeof require && require), !o && h)
                    )
                        return h(f, !0);
                    if (e) return e(f, !0);
                    c = new Error("Cannot find module '" + f + "'");
                    throw ((c.code = "MODULE_NOT_FOUND"), c);
                }
                s = i[f] = { exports: {} };
                t[f][0].call(
                    s.exports,
                    function (n) {
                        var i = t[f][1][n];
                        return u(i || n);
                    },
                    s,
                    s.exports,
                    n,
                    t,
                    i,
                    r
                );
            }
            return i[f].exports;
        }
        for (
            var e = "function" == typeof require && require, f = 0;
            f < r.length;
            f++
        )
            u(r[f]);
        return u;
    })(
        {
            1: [function () {}, {}],
            2: [
                function (n, t) {
                    function u(n) {
                        var t;
                        if (n) {
                            var f = [0, 0, 0],
                                e = 1,
                                u = n.match(/^#([a-fA-F0-9]{3})$/i);
                            if (u)
                                for (u = u[1], t = 0; t < f.length; t++)
                                    f[t] = parseInt(u[t] + u[t], 16);
                            else if ((u = n.match(/^#([a-fA-F0-9]{6})$/i)))
                                for (u = u[1], t = 0; t < f.length; t++)
                                    f[t] = parseInt(
                                        u.slice(2 * t, 2 * t + 2),
                                        16
                                    );
                            else if (
                                (u = n.match(
                                    /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i
                                ))
                            ) {
                                for (t = 0; t < f.length; t++)
                                    f[t] = parseInt(u[t + 1]);
                                e = parseFloat(u[4]);
                            } else if (
                                (u = n.match(
                                    /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i
                                ))
                            ) {
                                for (t = 0; t < f.length; t++)
                                    f[t] = Math.round(
                                        2.55 * parseFloat(u[t + 1])
                                    );
                                e = parseFloat(u[4]);
                            } else if ((u = n.match(/(\w+)/))) {
                                if ("transparent" == u[1]) return [0, 0, 0, 0];
                                if (!(f = r[u[1]])) return;
                            }
                            for (t = 0; t < f.length; t++)
                                f[t] = i(f[t], 0, 255);
                            return (
                                (e = e || 0 == e ? i(e, 0, 1) : 1),
                                (f[3] = e),
                                f
                            );
                        }
                    }
                    function f(n) {
                        var t, r;
                        if (
                            n &&
                            ((t = n.match(
                                /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/
                            )),
                            t)
                        )
                            return (
                                (r = parseFloat(t[4])),
                                [
                                    i(parseInt(t[1]), 0, 360),
                                    i(parseFloat(t[2]), 0, 100),
                                    i(parseFloat(t[3]), 0, 100),
                                    i(isNaN(r) ? 1 : r, 0, 1),
                                ]
                            );
                    }
                    function h(n) {
                        var t, r;
                        if (
                            n &&
                            ((t = n.match(
                                /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/
                            )),
                            t)
                        )
                            return (
                                (r = parseFloat(t[4])),
                                [
                                    i(parseInt(t[1]), 0, 360),
                                    i(parseFloat(t[2]), 0, 100),
                                    i(parseFloat(t[3]), 0, 100),
                                    i(isNaN(r) ? 1 : r, 0, 1),
                                ]
                            );
                    }
                    function c(n, t) {
                        return (
                            void 0 === t && (t = void 0 !== n[3] ? n[3] : 1),
                            "rgba(" +
                                n[0] +
                                ", " +
                                n[1] +
                                ", " +
                                n[2] +
                                ", " +
                                t +
                                ")"
                        );
                    }
                    function l(n, t) {
                        return (
                            "rgba(" +
                            Math.round((n[0] / 255) * 100) +
                            "%, " +
                            Math.round((n[1] / 255) * 100) +
                            "%, " +
                            Math.round((n[2] / 255) * 100) +
                            "%, " +
                            (t || n[3] || 1) +
                            ")"
                        );
                    }
                    function a(n, t) {
                        return (
                            void 0 === t && (t = void 0 !== n[3] ? n[3] : 1),
                            "hsla(" +
                                n[0] +
                                ", " +
                                n[1] +
                                "%, " +
                                n[2] +
                                "%, " +
                                t +
                                ")"
                        );
                    }
                    function i(n, t, i) {
                        return Math.min(Math.max(t, n), i);
                    }
                    function e(n) {
                        var t = n.toString(16).toUpperCase();
                        return t.length < 2 ? "0" + t : t;
                    }
                    var r = n(6),
                        o,
                        s;
                    t.exports = {
                        getRgba: u,
                        getHsla: f,
                        getRgb: function (n) {
                            var t = u(n);
                            return t && t.slice(0, 3);
                        },
                        getHsl: function (n) {
                            var t = f(n);
                            return t && t.slice(0, 3);
                        },
                        getHwb: h,
                        getAlpha: function (n) {
                            var t = u(n);
                            return t
                                ? t[3]
                                : (t = f(n))
                                ? t[3]
                                : (t = h(n))
                                ? t[3]
                                : void 0;
                        },
                        hexString: function (n) {
                            return "#" + e(n[0]) + e(n[1]) + e(n[2]);
                        },
                        rgbString: function (n, t) {
                            return t < 1 || (n[3] && n[3] < 1)
                                ? c(n, t)
                                : "rgb(" +
                                      n[0] +
                                      ", " +
                                      n[1] +
                                      ", " +
                                      n[2] +
                                      ")";
                        },
                        rgbaString: c,
                        percentString: function (n, t) {
                            if (t < 1 || (n[3] && n[3] < 1)) return l(n, t);
                            var i = Math.round((n[0] / 255) * 100),
                                r = Math.round((n[1] / 255) * 100),
                                u = Math.round((n[2] / 255) * 100);
                            return "rgb(" + i + "%, " + r + "%, " + u + "%)";
                        },
                        percentaString: l,
                        hslString: function (n, t) {
                            return t < 1 || (n[3] && n[3] < 1)
                                ? a(n, t)
                                : "hsl(" +
                                      n[0] +
                                      ", " +
                                      n[1] +
                                      "%, " +
                                      n[2] +
                                      "%)";
                        },
                        hslaString: a,
                        hwbString: function (n, t) {
                            return (
                                void 0 === t &&
                                    (t = void 0 !== n[3] ? n[3] : 1),
                                "hwb(" +
                                    n[0] +
                                    ", " +
                                    n[1] +
                                    "%, " +
                                    n[2] +
                                    "%" +
                                    (void 0 !== t && 1 !== t ? ", " + t : "") +
                                    ")"
                            );
                        },
                        keyword: function (n) {
                            return o[n.slice(0, 3)];
                        },
                    };
                    o = {};
                    for (s in r) o[r[s]] = s;
                },
                { 6: 6 },
            ],
            3: [
                function (n, t) {
                    var u = n(5),
                        r = n(2),
                        i = function (n) {
                            return n instanceof i
                                ? n
                                : this instanceof i
                                ? ((this.valid = !1),
                                  (this.values = {
                                      rgb: [0, 0, 0],
                                      hsl: [0, 0, 0],
                                      hsv: [0, 0, 0],
                                      hwb: [0, 0, 0],
                                      cmyk: [0, 0, 0, 0],
                                      alpha: 1,
                                  }),
                                  void ("string" == typeof n
                                      ? (t = r.getRgba(n))
                                          ? this.setValues("rgb", t)
                                          : (t = r.getHsla(n))
                                          ? this.setValues("hsl", t)
                                          : (t = r.getHwb(n)) &&
                                            this.setValues("hwb", t)
                                      : "object" == typeof n &&
                                        (void 0 !== (t = n).r ||
                                        void 0 !== t.red
                                            ? this.setValues("rgb", t)
                                            : void 0 !== t.l ||
                                              void 0 !== t.lightness
                                            ? this.setValues("hsl", t)
                                            : void 0 !== t.v ||
                                              void 0 !== t.value
                                            ? this.setValues("hsv", t)
                                            : void 0 !== t.w ||
                                              void 0 !== t.whiteness
                                            ? this.setValues("hwb", t)
                                            : (void 0 === t.c &&
                                                  void 0 === t.cyan) ||
                                              this.setValues("cmyk", t))))
                                : new i(n);
                            var t;
                        };
                    i.prototype = {
                        isValid: function () {
                            return this.valid;
                        },
                        rgb: function () {
                            return this.setSpace("rgb", arguments);
                        },
                        hsl: function () {
                            return this.setSpace("hsl", arguments);
                        },
                        hsv: function () {
                            return this.setSpace("hsv", arguments);
                        },
                        hwb: function () {
                            return this.setSpace("hwb", arguments);
                        },
                        cmyk: function () {
                            return this.setSpace("cmyk", arguments);
                        },
                        rgbArray: function () {
                            return this.values.rgb;
                        },
                        hslArray: function () {
                            return this.values.hsl;
                        },
                        hsvArray: function () {
                            return this.values.hsv;
                        },
                        hwbArray: function () {
                            var n = this.values;
                            return 1 !== n.alpha
                                ? n.hwb.concat([n.alpha])
                                : n.hwb;
                        },
                        cmykArray: function () {
                            return this.values.cmyk;
                        },
                        rgbaArray: function () {
                            var n = this.values;
                            return n.rgb.concat([n.alpha]);
                        },
                        hslaArray: function () {
                            var n = this.values;
                            return n.hsl.concat([n.alpha]);
                        },
                        alpha: function (n) {
                            return void 0 === n
                                ? this.values.alpha
                                : (this.setValues("alpha", n), this);
                        },
                        red: function (n) {
                            return this.setChannel("rgb", 0, n);
                        },
                        green: function (n) {
                            return this.setChannel("rgb", 1, n);
                        },
                        blue: function (n) {
                            return this.setChannel("rgb", 2, n);
                        },
                        hue: function (n) {
                            return (
                                n && (n = (n %= 360) < 0 ? 360 + n : n),
                                this.setChannel("hsl", 0, n)
                            );
                        },
                        saturation: function (n) {
                            return this.setChannel("hsl", 1, n);
                        },
                        lightness: function (n) {
                            return this.setChannel("hsl", 2, n);
                        },
                        saturationv: function (n) {
                            return this.setChannel("hsv", 1, n);
                        },
                        whiteness: function (n) {
                            return this.setChannel("hwb", 1, n);
                        },
                        blackness: function (n) {
                            return this.setChannel("hwb", 2, n);
                        },
                        value: function (n) {
                            return this.setChannel("hsv", 2, n);
                        },
                        cyan: function (n) {
                            return this.setChannel("cmyk", 0, n);
                        },
                        magenta: function (n) {
                            return this.setChannel("cmyk", 1, n);
                        },
                        yellow: function (n) {
                            return this.setChannel("cmyk", 2, n);
                        },
                        black: function (n) {
                            return this.setChannel("cmyk", 3, n);
                        },
                        hexString: function () {
                            return r.hexString(this.values.rgb);
                        },
                        rgbString: function () {
                            return r.rgbString(
                                this.values.rgb,
                                this.values.alpha
                            );
                        },
                        rgbaString: function () {
                            return r.rgbaString(
                                this.values.rgb,
                                this.values.alpha
                            );
                        },
                        percentString: function () {
                            return r.percentString(
                                this.values.rgb,
                                this.values.alpha
                            );
                        },
                        hslString: function () {
                            return r.hslString(
                                this.values.hsl,
                                this.values.alpha
                            );
                        },
                        hslaString: function () {
                            return r.hslaString(
                                this.values.hsl,
                                this.values.alpha
                            );
                        },
                        hwbString: function () {
                            return r.hwbString(
                                this.values.hwb,
                                this.values.alpha
                            );
                        },
                        keyword: function () {
                            return r.keyword(
                                this.values.rgb,
                                this.values.alpha
                            );
                        },
                        rgbNumber: function () {
                            var n = this.values.rgb;
                            return (n[0] << 16) | (n[1] << 8) | n[2];
                        },
                        luminosity: function () {
                            for (
                                var i, r = this.values.rgb, n = [], t = 0;
                                t < r.length;
                                t++
                            )
                                (i = r[t] / 255),
                                    (n[t] =
                                        i <= 0.03928
                                            ? i / 12.92
                                            : Math.pow(
                                                  (i + 0.055) / 1.055,
                                                  2.4
                                              ));
                            return (
                                0.2126 * n[0] + 0.7152 * n[1] + 0.0722 * n[2]
                            );
                        },
                        contrast: function (n) {
                            var t = this.luminosity(),
                                i = n.luminosity();
                            return t > i
                                ? (t + 0.05) / (i + 0.05)
                                : (i + 0.05) / (t + 0.05);
                        },
                        level: function (n) {
                            var t = this.contrast(n);
                            return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : "";
                        },
                        dark: function () {
                            var n = this.values.rgb;
                            return (
                                (299 * n[0] + 587 * n[1] + 114 * n[2]) / 1e3 <
                                128
                            );
                        },
                        light: function () {
                            return !this.dark();
                        },
                        negate: function () {
                            for (var t = [], n = 0; n < 3; n++)
                                t[n] = 255 - this.values.rgb[n];
                            return this.setValues("rgb", t), this;
                        },
                        lighten: function (n) {
                            var t = this.values.hsl;
                            return (
                                (t[2] += t[2] * n),
                                this.setValues("hsl", t),
                                this
                            );
                        },
                        darken: function (n) {
                            var t = this.values.hsl;
                            return (
                                (t[2] -= t[2] * n),
                                this.setValues("hsl", t),
                                this
                            );
                        },
                        saturate: function (n) {
                            var t = this.values.hsl;
                            return (
                                (t[1] += t[1] * n),
                                this.setValues("hsl", t),
                                this
                            );
                        },
                        desaturate: function (n) {
                            var t = this.values.hsl;
                            return (
                                (t[1] -= t[1] * n),
                                this.setValues("hsl", t),
                                this
                            );
                        },
                        whiten: function (n) {
                            var t = this.values.hwb;
                            return (
                                (t[1] += t[1] * n),
                                this.setValues("hwb", t),
                                this
                            );
                        },
                        blacken: function (n) {
                            var t = this.values.hwb;
                            return (
                                (t[2] += t[2] * n),
                                this.setValues("hwb", t),
                                this
                            );
                        },
                        greyscale: function () {
                            var n = this.values.rgb,
                                t = 0.3 * n[0] + 0.59 * n[1] + 0.11 * n[2];
                            return this.setValues("rgb", [t, t, t]), this;
                        },
                        clearer: function (n) {
                            var t = this.values.alpha;
                            return this.setValues("alpha", t - t * n), this;
                        },
                        opaquer: function (n) {
                            var t = this.values.alpha;
                            return this.setValues("alpha", t + t * n), this;
                        },
                        rotate: function (n) {
                            var t = this.values.hsl,
                                i = (t[0] + n) % 360;
                            return (
                                (t[0] = i < 0 ? 360 + i : i),
                                this.setValues("hsl", t),
                                this
                            );
                        },
                        mix: function (n, t) {
                            var i = this,
                                r = n,
                                e = void 0 === t ? 0.5 : t,
                                u = 2 * e - 1,
                                o = i.alpha() - r.alpha(),
                                f =
                                    ((u * o == -1 ? u : (u + o) / (1 + u * o)) +
                                        1) /
                                    2,
                                s = 1 - f;
                            return this.rgb(
                                f * i.red() + s * r.red(),
                                f * i.green() + s * r.green(),
                                f * i.blue() + s * r.blue()
                            ).alpha(i.alpha() * e + r.alpha() * (1 - e));
                        },
                        toJSON: function () {
                            return this.rgb();
                        },
                        clone: function () {
                            var n,
                                u,
                                f = new i(),
                                r = this.values,
                                e = f.values,
                                t;
                            for (t in r)
                                r.hasOwnProperty(t) &&
                                    ((n = r[t]),
                                    "[object Array]" ===
                                    (u = {}.toString.call(n))
                                        ? (e[t] = n.slice(0))
                                        : "[object Number]" === u
                                        ? (e[t] = n)
                                        : console.error(
                                              "unexpected color value:",
                                              n
                                          ));
                            return f;
                        },
                    };
                    i.prototype.spaces = {
                        rgb: ["red", "green", "blue"],
                        hsl: ["hue", "saturation", "lightness"],
                        hsv: ["hue", "saturation", "value"],
                        hwb: ["hue", "whiteness", "blackness"],
                        cmyk: ["cyan", "magenta", "yellow", "black"],
                    };
                    i.prototype.maxes = {
                        rgb: [255, 255, 255],
                        hsl: [360, 100, 100],
                        hsv: [360, 100, 100],
                        hwb: [360, 100, 100],
                        cmyk: [100, 100, 100, 100],
                    };
                    i.prototype.getValues = function (n) {
                        for (
                            var i = this.values, r = {}, t = 0;
                            t < n.length;
                            t++
                        )
                            r[n.charAt(t)] = i[n][t];
                        return 1 !== i.alpha && (r.a = i.alpha), r;
                    };
                    i.prototype.setValues = function (n, t) {
                        var i,
                            s,
                            r = this.values,
                            o = this.spaces,
                            c = this.maxes,
                            f = 1,
                            h,
                            e;
                        if (((this.valid = !0), "alpha" === n)) f = t;
                        else if (t.length)
                            (r[n] = t.slice(0, n.length)), (f = t[n.length]);
                        else if (void 0 !== t[n.charAt(0)]) {
                            for (i = 0; i < n.length; i++)
                                r[n][i] = t[n.charAt(i)];
                            f = t.a;
                        } else if (void 0 !== t[o[n][0]]) {
                            for (h = o[n], i = 0; i < n.length; i++)
                                r[n][i] = t[h[i]];
                            f = t.alpha;
                        }
                        if (
                            ((r.alpha = Math.max(
                                0,
                                Math.min(1, void 0 === f ? r.alpha : f)
                            )),
                            "alpha" === n)
                        )
                            return !1;
                        for (i = 0; i < n.length; i++)
                            (s = Math.max(0, Math.min(c[n][i], r[n][i]))),
                                (r[n][i] = Math.round(s));
                        for (e in o) e !== n && (r[e] = u[n][e](r[n]));
                        return !0;
                    };
                    i.prototype.setSpace = function (n, t) {
                        var i = t[0];
                        return void 0 === i
                            ? this.getValues(n)
                            : ("number" == typeof i &&
                                  (i = Array.prototype.slice.call(t)),
                              this.setValues(n, i),
                              this);
                    };
                    i.prototype.setChannel = function (n, t, i) {
                        var r = this.values[n];
                        return void 0 === i
                            ? r[t]
                            : i === r[t]
                            ? this
                            : ((r[t] = i), this.setValues(n, r), this);
                    };
                    "undefined" != typeof window && (window.Color = i);
                    t.exports = i;
                },
                { 2: 2, 5: 5 },
            ],
            4: [
                function (n, t) {
                    function u(n) {
                        var i,
                            s,
                            u = n[0] / 255,
                            f = n[1] / 255,
                            e = n[2] / 255,
                            r = Math.min(u, f, e),
                            t = Math.max(u, f, e),
                            o = t - r;
                        return (
                            t == r
                                ? (i = 0)
                                : u == t
                                ? (i = (f - e) / o)
                                : f == t
                                ? (i = 2 + (e - u) / o)
                                : e == t && (i = 4 + (u - f) / o),
                            (i = Math.min(60 * i, 360)) < 0 && (i += 360),
                            (s = (r + t) / 2),
                            [
                                i,
                                100 *
                                    (t == r
                                        ? 0
                                        : s <= 0.5
                                        ? o / (t + r)
                                        : o / (2 - t - r)),
                                100 * s,
                            ]
                        );
                    }
                    function c(n) {
                        var t,
                            o,
                            r = n[0],
                            u = n[1],
                            f = n[2],
                            s = Math.min(r, u, f),
                            i = Math.max(r, u, f),
                            e = i - s;
                        return (
                            (o = 0 == i ? 0 : (e / i) * 100),
                            i == s
                                ? (t = 0)
                                : r == i
                                ? (t = (u - f) / e)
                                : u == i
                                ? (t = 2 + (f - r) / e)
                                : f == i && (t = 4 + (r - u) / e),
                            (t = Math.min(60 * t, 360)) < 0 && (t += 360),
                            [t, o, (i / 255) * 100]
                        );
                    }
                    function f(n) {
                        var i = n[0],
                            r = n[1],
                            t = n[2];
                        return [
                            u(n)[0],
                            ((100 * 1) / 255) * Math.min(i, Math.min(r, t)),
                            100 *
                                (t =
                                    1 -
                                    (1 / 255) * Math.max(i, Math.max(r, t))),
                        ];
                    }
                    function e(n) {
                        var t,
                            i = n[0] / 255,
                            r = n[1] / 255,
                            u = n[2] / 255;
                        return [
                            100 *
                                ((1 - i - (t = Math.min(1 - i, 1 - r, 1 - u))) /
                                    (1 - t) || 0),
                            100 * ((1 - r - t) / (1 - t) || 0),
                            100 * ((1 - u - t) / (1 - t) || 0),
                            100 * t,
                        ];
                    }
                    function o(n) {
                        return nt[JSON.stringify(n)];
                    }
                    function y(n) {
                        var t = n[0] / 255,
                            i = n[1] / 255,
                            r = n[2] / 255;
                        return [
                            100 *
                                (0.4124 *
                                    (t =
                                        t > 0.04045
                                            ? Math.pow((t + 0.055) / 1.055, 2.4)
                                            : t / 12.92) +
                                    0.3576 *
                                        (i =
                                            i > 0.04045
                                                ? Math.pow(
                                                      (i + 0.055) / 1.055,
                                                      2.4
                                                  )
                                                : i / 12.92) +
                                    0.1805 *
                                        (r =
                                            r > 0.04045
                                                ? Math.pow(
                                                      (r + 0.055) / 1.055,
                                                      2.4
                                                  )
                                                : r / 12.92)),
                            100 * (0.2126 * t + 0.7152 * i + 0.0722 * r),
                            100 * (0.0193 * t + 0.1192 * i + 0.9505 * r),
                        ];
                    }
                    function p(n) {
                        var u = y(n),
                            i = u[0],
                            t = u[1],
                            r = u[2];
                        return (
                            (t /= 100),
                            (r /= 108.883),
                            (i =
                                (i /= 95.047) > 0.008856
                                    ? Math.pow(i, 1 / 3)
                                    : 7.787 * i + 16 / 116),
                            [
                                116 *
                                    (t =
                                        t > 0.008856
                                            ? Math.pow(t, 1 / 3)
                                            : 7.787 * t + 16 / 116) -
                                    16,
                                500 * (i - t),
                                200 *
                                    (t -
                                        (r =
                                            r > 0.008856
                                                ? Math.pow(r, 1 / 3)
                                                : 7.787 * r + 16 / 116)),
                            ]
                        );
                    }
                    function l(n) {
                        var i,
                            e,
                            t,
                            s,
                            u,
                            h = n[0] / 360,
                            o = n[1] / 100,
                            r = n[2] / 100,
                            f;
                        if (0 == o) return [(u = 255 * r), u, u];
                        for (
                            i =
                                2 * r -
                                (e = r < 0.5 ? r * (1 + o) : r + o - r * o),
                                s = [0, 0, 0],
                                f = 0;
                            f < 3;
                            f++
                        )
                            (t = h + (1 / 3) * -(f - 1)) < 0 && t++,
                                t > 1 && t--,
                                (u =
                                    6 * t < 1
                                        ? i + 6 * (e - i) * t
                                        : 2 * t < 1
                                        ? e
                                        : 3 * t < 2
                                        ? i + (e - i) * (2 / 3 - t) * 6
                                        : i),
                                (s[f] = 255 * u);
                        return s;
                    }
                    function a(n) {
                        var r = n[0] / 60,
                            u = n[1] / 100,
                            t = n[2] / 100,
                            s = Math.floor(r) % 6,
                            o = r - Math.floor(r),
                            i = 255 * t * (1 - u),
                            f = 255 * t * (1 - u * o),
                            e = 255 * t * (1 - u * (1 - o));
                        t *= 255;
                        switch (s) {
                            case 0:
                                return [t, e, i];
                            case 1:
                                return [f, t, i];
                            case 2:
                                return [i, t, e];
                            case 3:
                                return [i, f, t];
                            case 4:
                                return [e, i, t];
                            case 5:
                                return [t, i, f];
                        }
                    }
                    function s(n) {
                        var e,
                            i,
                            f,
                            u,
                            h = n[0] / 360,
                            t = n[1] / 100,
                            o = n[2] / 100,
                            s = t + o;
                        switch (
                            (s > 1 && ((t /= s), (o /= s)),
                            (f = 6 * h - (e = Math.floor(6 * h))),
                            0 != (1 & e) && (f = 1 - f),
                            (u = t + f * ((i = 1 - o) - t)),
                            e)
                        ) {
                            default:
                            case 6:
                            case 0:
                                r = i;
                                g = u;
                                b = t;
                                break;
                            case 1:
                                r = u;
                                g = i;
                                b = t;
                                break;
                            case 2:
                                r = t;
                                g = i;
                                b = u;
                                break;
                            case 3:
                                r = t;
                                g = u;
                                b = i;
                                break;
                            case 4:
                                r = u;
                                g = t;
                                b = i;
                                break;
                            case 5:
                                r = i;
                                g = t;
                                b = u;
                        }
                        return [255 * r, 255 * g, 255 * b];
                    }
                    function h(n) {
                        var i = n[0] / 100,
                            r = n[1] / 100,
                            u = n[2] / 100,
                            t = n[3] / 100;
                        return [
                            255 * (1 - Math.min(1, i * (1 - t) + t)),
                            255 * (1 - Math.min(1, r * (1 - t) + t)),
                            255 * (1 - Math.min(1, u * (1 - t) + t)),
                        ];
                    }
                    function it(n) {
                        var r,
                            t,
                            i,
                            u = n[0] / 100,
                            f = n[1] / 100,
                            e = n[2] / 100;
                        return (
                            (t = -0.9689 * u + 1.8758 * f + 0.0415 * e),
                            (i = 0.0557 * u + -0.204 * f + 1.057 * e),
                            (r =
                                (r = 3.2406 * u + -1.5372 * f + -0.4986 * e) >
                                0.0031308
                                    ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055
                                    : (r *= 12.92)),
                            (t =
                                t > 0.0031308
                                    ? 1.055 * Math.pow(t, 1 / 2.4) - 0.055
                                    : (t *= 12.92)),
                            (i =
                                i > 0.0031308
                                    ? 1.055 * Math.pow(i, 1 / 2.4) - 0.055
                                    : (i *= 12.92)),
                            [
                                255 * (r = Math.min(Math.max(0, r), 1)),
                                255 * (t = Math.min(Math.max(0, t), 1)),
                                255 * (i = Math.min(Math.max(0, i), 1)),
                            ]
                        );
                    }
                    function rt(n) {
                        var i = n[0],
                            t = n[1],
                            r = n[2];
                        return (
                            (t /= 100),
                            (r /= 108.883),
                            (i =
                                (i /= 95.047) > 0.008856
                                    ? Math.pow(i, 1 / 3)
                                    : 7.787 * i + 16 / 116),
                            [
                                116 *
                                    (t =
                                        t > 0.008856
                                            ? Math.pow(t, 1 / 3)
                                            : 7.787 * t + 16 / 116) -
                                    16,
                                500 * (i - t),
                                200 *
                                    (t -
                                        (r =
                                            r > 0.008856
                                                ? Math.pow(r, 1 / 3)
                                                : 7.787 * r + 16 / 116)),
                            ]
                        );
                    }
                    function w(n) {
                        var r,
                            i,
                            u,
                            t,
                            f = n[0],
                            e = n[1],
                            o = n[2];
                        return (
                            f <= 8
                                ? (t =
                                      ((i = (100 * f) / 903.3) / 100) * 7.787 +
                                      16 / 116)
                                : ((i = 100 * Math.pow((f + 16) / 116, 3)),
                                  (t = Math.pow(i / 100, 1 / 3))),
                            [
                                (r =
                                    r / 95.047 <= 0.008856
                                        ? (r =
                                              (95.047 *
                                                  (e / 500 + t - 16 / 116)) /
                                              7.787)
                                        : 95.047 * Math.pow(e / 500 + t, 3)),
                                i,
                                (u =
                                    u / 108.883 <= 0.008859
                                        ? (u =
                                              (108.883 *
                                                  (t - o / 200 - 16 / 116)) /
                                              7.787)
                                        : 108.883 * Math.pow(t - o / 200, 3)),
                            ]
                        );
                    }
                    function k(n) {
                        var t,
                            u = n[0],
                            i = n[1],
                            r = n[2];
                        return (
                            (t = (180 * Math.atan2(r, i)) / Math.PI) < 0 &&
                                (t += 360),
                            [u, Math.sqrt(i * i + r * r), t]
                        );
                    }
                    function ut(n) {
                        return it(w(n));
                    }
                    function d(n) {
                        var t,
                            r = n[0],
                            i = n[1];
                        return (
                            (t = (n[2] / 180) * Math.PI),
                            [r, i * Math.cos(t), i * Math.sin(t)]
                        );
                    }
                    function i(n) {
                        return v[n];
                    }
                    var v, nt, tt;
                    t.exports = {
                        rgb2hsl: u,
                        rgb2hsv: c,
                        rgb2hwb: f,
                        rgb2cmyk: e,
                        rgb2keyword: o,
                        rgb2xyz: y,
                        rgb2lab: p,
                        rgb2lch: function (n) {
                            return k(p(n));
                        },
                        hsl2rgb: l,
                        hsl2hsv: function (n) {
                            var r = n[0],
                                i = n[1] / 100,
                                t = n[2] / 100;
                            return 0 === t
                                ? [0, 0, 0]
                                : [
                                      r,
                                      100 *
                                          ((2 *
                                              (i *=
                                                  (t *= 2) <= 1 ? t : 2 - t)) /
                                              (t + i)),
                                      50 * (t + i),
                                  ];
                        },
                        hsl2hwb: function (n) {
                            return f(l(n));
                        },
                        hsl2cmyk: function (n) {
                            return e(l(n));
                        },
                        hsl2keyword: function (n) {
                            return o(l(n));
                        },
                        hsv2rgb: a,
                        hsv2hsl: function (n) {
                            var i,
                                t,
                                f = n[0],
                                r = n[1] / 100,
                                u = n[2] / 100;
                            return (
                                (i = r * u),
                                [
                                    f,
                                    100 *
                                        (i =
                                            (i /=
                                                (t = (2 - r) * u) <= 1
                                                    ? t
                                                    : 2 - t) || 0),
                                    100 * (t /= 2),
                                ]
                            );
                        },
                        hsv2hwb: function (n) {
                            return f(a(n));
                        },
                        hsv2cmyk: function (n) {
                            return e(a(n));
                        },
                        hsv2keyword: function (n) {
                            return o(a(n));
                        },
                        hwb2rgb: s,
                        hwb2hsl: function (n) {
                            return u(s(n));
                        },
                        hwb2hsv: function (n) {
                            return c(s(n));
                        },
                        hwb2cmyk: function (n) {
                            return e(s(n));
                        },
                        hwb2keyword: function (n) {
                            return o(s(n));
                        },
                        cmyk2rgb: h,
                        cmyk2hsl: function (n) {
                            return u(h(n));
                        },
                        cmyk2hsv: function (n) {
                            return c(h(n));
                        },
                        cmyk2hwb: function (n) {
                            return f(h(n));
                        },
                        cmyk2keyword: function (n) {
                            return o(h(n));
                        },
                        keyword2rgb: i,
                        keyword2hsl: function (n) {
                            return u(i(n));
                        },
                        keyword2hsv: function (n) {
                            return c(i(n));
                        },
                        keyword2hwb: function (n) {
                            return f(i(n));
                        },
                        keyword2cmyk: function (n) {
                            return e(i(n));
                        },
                        keyword2lab: function (n) {
                            return p(i(n));
                        },
                        keyword2xyz: function (n) {
                            return y(i(n));
                        },
                        xyz2rgb: it,
                        xyz2lab: rt,
                        xyz2lch: function (n) {
                            return k(rt(n));
                        },
                        lab2xyz: w,
                        lab2rgb: ut,
                        lab2lch: k,
                        lch2lab: d,
                        lch2xyz: function (n) {
                            return w(d(n));
                        },
                        lch2rgb: function (n) {
                            return ut(d(n));
                        },
                    };
                    v = {
                        aliceblue: [240, 248, 255],
                        antiquewhite: [250, 235, 215],
                        aqua: [0, 255, 255],
                        aquamarine: [127, 255, 212],
                        azure: [240, 255, 255],
                        beige: [245, 245, 220],
                        bisque: [255, 228, 196],
                        black: [0, 0, 0],
                        blanchedalmond: [255, 235, 205],
                        blue: [0, 0, 255],
                        blueviolet: [138, 43, 226],
                        brown: [165, 42, 42],
                        burlywood: [222, 184, 135],
                        cadetblue: [95, 158, 160],
                        chartreuse: [127, 255, 0],
                        chocolate: [210, 105, 30],
                        coral: [255, 127, 80],
                        cornflowerblue: [100, 149, 237],
                        cornsilk: [255, 248, 220],
                        crimson: [220, 20, 60],
                        cyan: [0, 255, 255],
                        darkblue: [0, 0, 139],
                        darkcyan: [0, 139, 139],
                        darkgoldenrod: [184, 134, 11],
                        darkgray: [169, 169, 169],
                        darkgreen: [0, 100, 0],
                        darkgrey: [169, 169, 169],
                        darkkhaki: [189, 183, 107],
                        darkmagenta: [139, 0, 139],
                        darkolivegreen: [85, 107, 47],
                        darkorange: [255, 140, 0],
                        darkorchid: [153, 50, 204],
                        darkred: [139, 0, 0],
                        darksalmon: [233, 150, 122],
                        darkseagreen: [143, 188, 143],
                        darkslateblue: [72, 61, 139],
                        darkslategray: [47, 79, 79],
                        darkslategrey: [47, 79, 79],
                        darkturquoise: [0, 206, 209],
                        darkviolet: [148, 0, 211],
                        deeppink: [255, 20, 147],
                        deepskyblue: [0, 191, 255],
                        dimgray: [105, 105, 105],
                        dimgrey: [105, 105, 105],
                        dodgerblue: [30, 144, 255],
                        firebrick: [178, 34, 34],
                        floralwhite: [255, 250, 240],
                        forestgreen: [34, 139, 34],
                        fuchsia: [255, 0, 255],
                        gainsboro: [220, 220, 220],
                        ghostwhite: [248, 248, 255],
                        gold: [255, 215, 0],
                        goldenrod: [218, 165, 32],
                        gray: [128, 128, 128],
                        green: [0, 128, 0],
                        greenyellow: [173, 255, 47],
                        grey: [128, 128, 128],
                        honeydew: [240, 255, 240],
                        hotpink: [255, 105, 180],
                        indianred: [205, 92, 92],
                        indigo: [75, 0, 130],
                        ivory: [255, 255, 240],
                        khaki: [240, 230, 140],
                        lavender: [230, 230, 250],
                        lavenderblush: [255, 240, 245],
                        lawngreen: [124, 252, 0],
                        lemonchiffon: [255, 250, 205],
                        lightblue: [173, 216, 230],
                        lightcoral: [240, 128, 128],
                        lightcyan: [224, 255, 255],
                        lightgoldenrodyellow: [250, 250, 210],
                        lightgray: [211, 211, 211],
                        lightgreen: [144, 238, 144],
                        lightgrey: [211, 211, 211],
                        lightpink: [255, 182, 193],
                        lightsalmon: [255, 160, 122],
                        lightseagreen: [32, 178, 170],
                        lightskyblue: [135, 206, 250],
                        lightslategray: [119, 136, 153],
                        lightslategrey: [119, 136, 153],
                        lightsteelblue: [176, 196, 222],
                        lightyellow: [255, 255, 224],
                        lime: [0, 255, 0],
                        limegreen: [50, 205, 50],
                        linen: [250, 240, 230],
                        magenta: [255, 0, 255],
                        maroon: [128, 0, 0],
                        mediumaquamarine: [102, 205, 170],
                        mediumblue: [0, 0, 205],
                        mediumorchid: [186, 85, 211],
                        mediumpurple: [147, 112, 219],
                        mediumseagreen: [60, 179, 113],
                        mediumslateblue: [123, 104, 238],
                        mediumspringgreen: [0, 250, 154],
                        mediumturquoise: [72, 209, 204],
                        mediumvioletred: [199, 21, 133],
                        midnightblue: [25, 25, 112],
                        mintcream: [245, 255, 250],
                        mistyrose: [255, 228, 225],
                        moccasin: [255, 228, 181],
                        navajowhite: [255, 222, 173],
                        navy: [0, 0, 128],
                        oldlace: [253, 245, 230],
                        olive: [128, 128, 0],
                        olivedrab: [107, 142, 35],
                        orange: [255, 165, 0],
                        orangered: [255, 69, 0],
                        orchid: [218, 112, 214],
                        palegoldenrod: [238, 232, 170],
                        palegreen: [152, 251, 152],
                        paleturquoise: [175, 238, 238],
                        palevioletred: [219, 112, 147],
                        papayawhip: [255, 239, 213],
                        peachpuff: [255, 218, 185],
                        peru: [205, 133, 63],
                        pink: [255, 192, 203],
                        plum: [221, 160, 221],
                        powderblue: [176, 224, 230],
                        purple: [128, 0, 128],
                        rebeccapurple: [102, 51, 153],
                        red: [255, 0, 0],
                        rosybrown: [188, 143, 143],
                        royalblue: [65, 105, 225],
                        saddlebrown: [139, 69, 19],
                        salmon: [250, 128, 114],
                        sandybrown: [244, 164, 96],
                        seagreen: [46, 139, 87],
                        seashell: [255, 245, 238],
                        sienna: [160, 82, 45],
                        silver: [192, 192, 192],
                        skyblue: [135, 206, 235],
                        slateblue: [106, 90, 205],
                        slategray: [112, 128, 144],
                        slategrey: [112, 128, 144],
                        snow: [255, 250, 250],
                        springgreen: [0, 255, 127],
                        steelblue: [70, 130, 180],
                        tan: [210, 180, 140],
                        teal: [0, 128, 128],
                        thistle: [216, 191, 216],
                        tomato: [255, 99, 71],
                        turquoise: [64, 224, 208],
                        violet: [238, 130, 238],
                        wheat: [245, 222, 179],
                        white: [255, 255, 255],
                        whitesmoke: [245, 245, 245],
                        yellow: [255, 255, 0],
                        yellowgreen: [154, 205, 50],
                    };
                    nt = {};
                    for (tt in v) nt[JSON.stringify(v[tt])] = tt;
                },
                {},
            ],
            5: [
                function (n, t) {
                    var f = n(4),
                        i = function () {
                            return new u();
                        },
                        r,
                        u;
                    for (r in f) {
                        i[r + "Raw"] = (function (n) {
                            return function (t) {
                                return (
                                    "number" == typeof t &&
                                        (t =
                                            Array.prototype.slice.call(
                                                arguments
                                            )),
                                    f[n](t)
                                );
                            };
                        })(r);
                        var e = /(\w+)2(\w+)/.exec(r),
                            o = e[1],
                            s = e[2];
                        (i[o] = i[o] || {})[s] = i[r] = (function (n) {
                            return function (t) {
                                var i, r;
                                if (
                                    ("number" == typeof t &&
                                        (t =
                                            Array.prototype.slice.call(
                                                arguments
                                            )),
                                    (i = f[n](t)),
                                    "string" == typeof i || void 0 === i)
                                )
                                    return i;
                                for (r = 0; r < i.length; r++)
                                    i[r] = Math.round(i[r]);
                                return i;
                            };
                        })(r);
                    }
                    u = function () {
                        this.convs = {};
                    };
                    u.prototype.routeSpace = function (n, t) {
                        var i = t[0];
                        return void 0 === i
                            ? this.getValues(n)
                            : ("number" == typeof i &&
                                  (i = Array.prototype.slice.call(t)),
                              this.setValues(n, i));
                    };
                    u.prototype.setValues = function (n, t) {
                        return (
                            (this.space = n),
                            (this.convs = {}),
                            (this.convs[n] = t),
                            this
                        );
                    };
                    u.prototype.getValues = function (n) {
                        var t = this.convs[n],
                            r,
                            u;
                        return (
                            t ||
                                ((r = this.space),
                                (u = this.convs[r]),
                                (t = i[r][n](u)),
                                (this.convs[n] = t)),
                            t
                        );
                    };
                    ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (
                        n
                    ) {
                        u.prototype[n] = function () {
                            return this.routeSpace(n, arguments);
                        };
                    });
                    t.exports = i;
                },
                { 4: 4 },
            ],
            6: [
                function (n, t) {
                    "use strict";
                    t.exports = {
                        aliceblue: [240, 248, 255],
                        antiquewhite: [250, 235, 215],
                        aqua: [0, 255, 255],
                        aquamarine: [127, 255, 212],
                        azure: [240, 255, 255],
                        beige: [245, 245, 220],
                        bisque: [255, 228, 196],
                        black: [0, 0, 0],
                        blanchedalmond: [255, 235, 205],
                        blue: [0, 0, 255],
                        blueviolet: [138, 43, 226],
                        brown: [165, 42, 42],
                        burlywood: [222, 184, 135],
                        cadetblue: [95, 158, 160],
                        chartreuse: [127, 255, 0],
                        chocolate: [210, 105, 30],
                        coral: [255, 127, 80],
                        cornflowerblue: [100, 149, 237],
                        cornsilk: [255, 248, 220],
                        crimson: [220, 20, 60],
                        cyan: [0, 255, 255],
                        darkblue: [0, 0, 139],
                        darkcyan: [0, 139, 139],
                        darkgoldenrod: [184, 134, 11],
                        darkgray: [169, 169, 169],
                        darkgreen: [0, 100, 0],
                        darkgrey: [169, 169, 169],
                        darkkhaki: [189, 183, 107],
                        darkmagenta: [139, 0, 139],
                        darkolivegreen: [85, 107, 47],
                        darkorange: [255, 140, 0],
                        darkorchid: [153, 50, 204],
                        darkred: [139, 0, 0],
                        darksalmon: [233, 150, 122],
                        darkseagreen: [143, 188, 143],
                        darkslateblue: [72, 61, 139],
                        darkslategray: [47, 79, 79],
                        darkslategrey: [47, 79, 79],
                        darkturquoise: [0, 206, 209],
                        darkviolet: [148, 0, 211],
                        deeppink: [255, 20, 147],
                        deepskyblue: [0, 191, 255],
                        dimgray: [105, 105, 105],
                        dimgrey: [105, 105, 105],
                        dodgerblue: [30, 144, 255],
                        firebrick: [178, 34, 34],
                        floralwhite: [255, 250, 240],
                        forestgreen: [34, 139, 34],
                        fuchsia: [255, 0, 255],
                        gainsboro: [220, 220, 220],
                        ghostwhite: [248, 248, 255],
                        gold: [255, 215, 0],
                        goldenrod: [218, 165, 32],
                        gray: [128, 128, 128],
                        green: [0, 128, 0],
                        greenyellow: [173, 255, 47],
                        grey: [128, 128, 128],
                        honeydew: [240, 255, 240],
                        hotpink: [255, 105, 180],
                        indianred: [205, 92, 92],
                        indigo: [75, 0, 130],
                        ivory: [255, 255, 240],
                        khaki: [240, 230, 140],
                        lavender: [230, 230, 250],
                        lavenderblush: [255, 240, 245],
                        lawngreen: [124, 252, 0],
                        lemonchiffon: [255, 250, 205],
                        lightblue: [173, 216, 230],
                        lightcoral: [240, 128, 128],
                        lightcyan: [224, 255, 255],
                        lightgoldenrodyellow: [250, 250, 210],
                        lightgray: [211, 211, 211],
                        lightgreen: [144, 238, 144],
                        lightgrey: [211, 211, 211],
                        lightpink: [255, 182, 193],
                        lightsalmon: [255, 160, 122],
                        lightseagreen: [32, 178, 170],
                        lightskyblue: [135, 206, 250],
                        lightslategray: [119, 136, 153],
                        lightslategrey: [119, 136, 153],
                        lightsteelblue: [176, 196, 222],
                        lightyellow: [255, 255, 224],
                        lime: [0, 255, 0],
                        limegreen: [50, 205, 50],
                        linen: [250, 240, 230],
                        magenta: [255, 0, 255],
                        maroon: [128, 0, 0],
                        mediumaquamarine: [102, 205, 170],
                        mediumblue: [0, 0, 205],
                        mediumorchid: [186, 85, 211],
                        mediumpurple: [147, 112, 219],
                        mediumseagreen: [60, 179, 113],
                        mediumslateblue: [123, 104, 238],
                        mediumspringgreen: [0, 250, 154],
                        mediumturquoise: [72, 209, 204],
                        mediumvioletred: [199, 21, 133],
                        midnightblue: [25, 25, 112],
                        mintcream: [245, 255, 250],
                        mistyrose: [255, 228, 225],
                        moccasin: [255, 228, 181],
                        navajowhite: [255, 222, 173],
                        navy: [0, 0, 128],
                        oldlace: [253, 245, 230],
                        olive: [128, 128, 0],
                        olivedrab: [107, 142, 35],
                        orange: [255, 165, 0],
                        orangered: [255, 69, 0],
                        orchid: [218, 112, 214],
                        palegoldenrod: [238, 232, 170],
                        palegreen: [152, 251, 152],
                        paleturquoise: [175, 238, 238],
                        palevioletred: [219, 112, 147],
                        papayawhip: [255, 239, 213],
                        peachpuff: [255, 218, 185],
                        peru: [205, 133, 63],
                        pink: [255, 192, 203],
                        plum: [221, 160, 221],
                        powderblue: [176, 224, 230],
                        purple: [128, 0, 128],
                        rebeccapurple: [102, 51, 153],
                        red: [255, 0, 0],
                        rosybrown: [188, 143, 143],
                        royalblue: [65, 105, 225],
                        saddlebrown: [139, 69, 19],
                        salmon: [250, 128, 114],
                        sandybrown: [244, 164, 96],
                        seagreen: [46, 139, 87],
                        seashell: [255, 245, 238],
                        sienna: [160, 82, 45],
                        silver: [192, 192, 192],
                        skyblue: [135, 206, 235],
                        slateblue: [106, 90, 205],
                        slategray: [112, 128, 144],
                        slategrey: [112, 128, 144],
                        snow: [255, 250, 250],
                        springgreen: [0, 255, 127],
                        steelblue: [70, 130, 180],
                        tan: [210, 180, 140],
                        teal: [0, 128, 128],
                        thistle: [216, 191, 216],
                        tomato: [255, 99, 71],
                        turquoise: [64, 224, 208],
                        violet: [238, 130, 238],
                        wheat: [245, 222, 179],
                        white: [255, 255, 255],
                        whitesmoke: [245, 245, 245],
                        yellow: [255, 255, 0],
                        yellowgreen: [154, 205, 50],
                    };
                },
                {},
            ],
            7: [
                function (n, t) {
                    var i = n(29)(),
                        r,
                        u;
                    i.helpers = n(45);
                    n(27)(i);
                    i.defaults = n(25);
                    i.Element = n(26);
                    i.elements = n(40);
                    i.Interaction = n(28);
                    i.layouts = n(30);
                    i.platform = n(48);
                    i.plugins = n(31);
                    i.Ticks = n(34);
                    n(22)(i);
                    n(23)(i);
                    n(24)(i);
                    n(33)(i);
                    n(32)(i);
                    n(35)(i);
                    n(55)(i);
                    n(53)(i);
                    n(54)(i);
                    n(56)(i);
                    n(57)(i);
                    n(58)(i);
                    n(15)(i);
                    n(16)(i);
                    n(17)(i);
                    n(18)(i);
                    n(19)(i);
                    n(20)(i);
                    n(21)(i);
                    n(8)(i);
                    n(9)(i);
                    n(10)(i);
                    n(11)(i);
                    n(12)(i);
                    n(13)(i);
                    n(14)(i);
                    r = n(49);
                    for (u in r)
                        r.hasOwnProperty(u) && i.plugins.register(r[u]);
                    i.platform.initialize();
                    t.exports = i;
                    "undefined" != typeof window && (window.Chart = i);
                    i.Legend = r.legend._element;
                    i.Title = r.title._element;
                    i.pluginService = i.plugins;
                    i.PluginBase = i.Element.extend({});
                    i.canvasHelpers = i.helpers.canvas;
                    i.layoutService = i.layouts;
                },
                {
                    10: 10,
                    11: 11,
                    12: 12,
                    13: 13,
                    14: 14,
                    15: 15,
                    16: 16,
                    17: 17,
                    18: 18,
                    19: 19,
                    20: 20,
                    21: 21,
                    22: 22,
                    23: 23,
                    24: 24,
                    25: 25,
                    26: 26,
                    27: 27,
                    28: 28,
                    29: 29,
                    30: 30,
                    31: 31,
                    32: 32,
                    33: 33,
                    34: 34,
                    35: 35,
                    40: 40,
                    45: 45,
                    48: 48,
                    49: 49,
                    53: 53,
                    54: 54,
                    55: 55,
                    56: 56,
                    57: 57,
                    58: 58,
                    8: 8,
                    9: 9,
                },
            ],
            8: [
                function (n, t) {
                    "use strict";
                    t.exports = function (n) {
                        n.Bar = function (t, i) {
                            return (i.type = "bar"), new n(t, i);
                        };
                    };
                },
                {},
            ],
            9: [
                function (n, t) {
                    "use strict";
                    t.exports = function (n) {
                        n.Bubble = function (t, i) {
                            return (i.type = "bubble"), new n(t, i);
                        };
                    };
                },
                {},
            ],
            10: [
                function (n, t) {
                    "use strict";
                    t.exports = function (n) {
                        n.Doughnut = function (t, i) {
                            return (i.type = "doughnut"), new n(t, i);
                        };
                    };
                },
                {},
            ],
            11: [
                function (n, t) {
                    "use strict";
                    t.exports = function (n) {
                        n.Line = function (t, i) {
                            return (i.type = "line"), new n(t, i);
                        };
                    };
                },
                {},
            ],
            12: [
                function (n, t) {
                    "use strict";
                    t.exports = function (n) {
                        n.PolarArea = function (t, i) {
                            return (i.type = "polarArea"), new n(t, i);
                        };
                    };
                },
                {},
            ],
            13: [
                function (n, t) {
                    "use strict";
                    t.exports = function (n) {
                        n.Radar = function (t, i) {
                            return (i.type = "radar"), new n(t, i);
                        };
                    };
                },
                {},
            ],
            14: [
                function (n, t) {
                    "use strict";
                    t.exports = function (n) {
                        n.Scatter = function (t, i) {
                            return (i.type = "scatter"), new n(t, i);
                        };
                    };
                },
                {},
            ],
            15: [
                function (n, t) {
                    "use strict";
                    var r = n(25),
                        u = n(40),
                        i = n(45);
                    r._set("bar", {
                        hover: { mode: "label" },
                        scales: {
                            xAxes: [
                                {
                                    type: "category",
                                    categoryPercentage: 0.8,
                                    barPercentage: 0.9,
                                    offset: !0,
                                    gridLines: { offsetGridLines: !0 },
                                },
                            ],
                            yAxes: [{ type: "linear" }],
                        },
                    });
                    r._set("horizontalBar", {
                        hover: { mode: "index", axis: "y" },
                        scales: {
                            xAxes: [{ type: "linear", position: "bottom" }],
                            yAxes: [
                                {
                                    position: "left",
                                    type: "category",
                                    categoryPercentage: 0.8,
                                    barPercentage: 0.9,
                                    offset: !0,
                                    gridLines: { offsetGridLines: !0 },
                                },
                            ],
                        },
                        elements: { rectangle: { borderSkipped: "left" } },
                        tooltips: {
                            callbacks: {
                                title: function (n, t) {
                                    var i = "";
                                    return (
                                        n.length > 0 &&
                                            (n[0].yLabel
                                                ? (i = n[0].yLabel)
                                                : t.labels.length > 0 &&
                                                  n[0].index <
                                                      t.labels.length &&
                                                  (i = t.labels[n[0].index])),
                                        i
                                    );
                                },
                                label: function (n, t) {
                                    return (
                                        (t.datasets[n.datasetIndex].label ||
                                            "") +
                                        ": " +
                                        n.xLabel
                                    );
                                },
                            },
                            mode: "index",
                            axis: "y",
                        },
                    });
                    t.exports = function (n) {
                        n.controllers.bar = n.DatasetController.extend({
                            dataElementType: u.Rectangle,
                            initialize: function () {
                                var t;
                                n.DatasetController.prototype.initialize.apply(
                                    this,
                                    arguments
                                );
                                (t = this.getMeta()).stack =
                                    this.getDataset().stack;
                                t.bar = !0;
                            },
                            update: function (n) {
                                var t,
                                    i,
                                    r = this.getMeta().data;
                                for (
                                    this._ruler = this.getRuler(),
                                        t = 0,
                                        i = r.length;
                                    t < i;
                                    ++t
                                )
                                    this.updateElement(r[t], t, n);
                            },
                            updateElement: function (n, t, r) {
                                var f = this,
                                    s = f.chart,
                                    h = f.getMeta(),
                                    e = f.getDataset(),
                                    u = n.custom || {},
                                    o = s.options.elements.rectangle;
                                n._xScale = f.getScaleForId(h.xAxisID);
                                n._yScale = f.getScaleForId(h.yAxisID);
                                n._datasetIndex = f.index;
                                n._index = t;
                                n._model = {
                                    datasetLabel: e.label,
                                    label: s.data.labels[t],
                                    borderSkipped: u.borderSkipped
                                        ? u.borderSkipped
                                        : o.borderSkipped,
                                    backgroundColor: u.backgroundColor
                                        ? u.backgroundColor
                                        : i.valueAtIndexOrDefault(
                                              e.backgroundColor,
                                              t,
                                              o.backgroundColor
                                          ),
                                    borderColor: u.borderColor
                                        ? u.borderColor
                                        : i.valueAtIndexOrDefault(
                                              e.borderColor,
                                              t,
                                              o.borderColor
                                          ),
                                    borderWidth: u.borderWidth
                                        ? u.borderWidth
                                        : i.valueAtIndexOrDefault(
                                              e.borderWidth,
                                              t,
                                              o.borderWidth
                                          ),
                                };
                                f.updateElementGeometry(n, t, r);
                                n.pivot();
                            },
                            updateElementGeometry: function (n, t, i) {
                                var r = this,
                                    u = n._model,
                                    h = r.getValueScale(),
                                    o = h.getBasePixel(),
                                    f = h.isHorizontal(),
                                    c = r._ruler || r.getRuler(),
                                    s = r.calculateBarValuePixels(r.index, t),
                                    e = r.calculateBarIndexPixels(
                                        r.index,
                                        t,
                                        c
                                    );
                                u.horizontal = f;
                                u.base = i ? o : s.base;
                                u.x = f ? (i ? o : s.head) : e.center;
                                u.y = f ? e.center : i ? o : s.head;
                                u.height = f ? e.size : void 0;
                                u.width = f ? void 0 : e.size;
                            },
                            getValueScaleId: function () {
                                return this.getMeta().yAxisID;
                            },
                            getIndexScaleId: function () {
                                return this.getMeta().xAxisID;
                            },
                            getValueScale: function () {
                                return this.getScaleForId(
                                    this.getValueScaleId()
                                );
                            },
                            getIndexScale: function () {
                                return this.getScaleForId(
                                    this.getIndexScaleId()
                                );
                            },
                            _getStacks: function (n) {
                                for (
                                    var i,
                                        u = this.chart,
                                        f =
                                            this.getIndexScale().options
                                                .stacked,
                                        e =
                                            void 0 === n
                                                ? u.data.datasets.length
                                                : n + 1,
                                        r = [],
                                        t = 0;
                                    t < e;
                                    ++t
                                )
                                    (i = u.getDatasetMeta(t)).bar &&
                                        u.isDatasetVisible(t) &&
                                        (!1 === f ||
                                            (!0 === f &&
                                                -1 === r.indexOf(i.stack)) ||
                                            (void 0 === f &&
                                                (void 0 === i.stack ||
                                                    -1 ===
                                                        r.indexOf(i.stack)))) &&
                                        r.push(i.stack);
                                return r;
                            },
                            getStackCount: function () {
                                return this._getStacks().length;
                            },
                            getStackIndex: function (n, t) {
                                var i = this._getStacks(n),
                                    r = void 0 !== t ? i.indexOf(t) : -1;
                                return -1 === r ? i.length - 1 : r;
                            },
                            getRuler: function () {
                                for (
                                    var n = this.getIndexScale(),
                                        o = this.getStackCount(),
                                        s = this.index,
                                        f = n.isHorizontal(),
                                        e = f ? n.left : n.top,
                                        h = e + (f ? n.width : n.height),
                                        r = [],
                                        t = 0,
                                        u = this.getMeta().data.length;
                                    t < u;
                                    ++t
                                )
                                    r.push(n.getPixelForValue(null, t, s));
                                return {
                                    min: i.isNullOrUndef(n.options.barThickness)
                                        ? (function (n, t) {
                                              for (
                                                  var e,
                                                      f,
                                                      r = n.isHorizontal()
                                                          ? n.width
                                                          : n.height,
                                                      o = n.getTicks(),
                                                      i = 1,
                                                      u = t.length;
                                                  i < u;
                                                  ++i
                                              )
                                                  r = Math.min(
                                                      r,
                                                      t[i] - t[i - 1]
                                                  );
                                              for (
                                                  i = 0, u = o.length;
                                                  i < u;
                                                  ++i
                                              )
                                                  (f = n.getPixelForTick(i)),
                                                      (r =
                                                          i > 0
                                                              ? Math.min(
                                                                    r,
                                                                    f - e
                                                                )
                                                              : r),
                                                      (e = f);
                                              return r;
                                          })(n, r)
                                        : -1,
                                    pixels: r,
                                    start: e,
                                    end: h,
                                    stackCount: o,
                                    scale: n,
                                };
                            },
                            calculateBarValuePixels: function (n, t) {
                                var i,
                                    f,
                                    u,
                                    e,
                                    o,
                                    l,
                                    s = this.chart,
                                    p = this.getMeta(),
                                    r = this.getValueScale(),
                                    a = s.data.datasets,
                                    h = r.getRightValue(a[n].data[t]),
                                    v = r.options.stacked,
                                    y = p.stack,
                                    c = 0;
                                if (v || (void 0 === v && void 0 !== y))
                                    for (i = 0; i < n; ++i)
                                        (f = s.getDatasetMeta(i)).bar &&
                                            f.stack === y &&
                                            f.controller.getValueScaleId() ===
                                                r.id &&
                                            s.isDatasetVisible(i) &&
                                            ((u = r.getRightValue(
                                                a[i].data[t]
                                            )),
                                            ((h < 0 && u < 0) ||
                                                (h >= 0 && u > 0)) &&
                                                (c += u));
                                return (
                                    (e = r.getPixelForValue(c)),
                                    {
                                        size: (l =
                                            ((o = r.getPixelForValue(c + h)) -
                                                e) /
                                            2),
                                        base: e,
                                        head: o,
                                        center: o + l / 2,
                                    }
                                );
                            },
                            calculateBarIndexPixels: function (n, t, r) {
                                var tt,
                                    c,
                                    v,
                                    l,
                                    y,
                                    p,
                                    w,
                                    it,
                                    f,
                                    b,
                                    k,
                                    rt,
                                    s,
                                    u,
                                    e,
                                    o,
                                    d,
                                    a = r.scale.options,
                                    h =
                                        "flex" === a.barThickness
                                            ? ((f = t),
                                              (k = a),
                                              (s = (b = r).pixels),
                                              (u = s[f]),
                                              (e = f > 0 ? s[f - 1] : null),
                                              (o =
                                                  f < s.length - 1
                                                      ? s[f + 1]
                                                      : null),
                                              (d = k.categoryPercentage),
                                              null === e &&
                                                  (e =
                                                      u -
                                                      (null === o
                                                          ? b.end - u
                                                          : o - u)),
                                              null === o && (o = u + u - e),
                                              (rt = u - ((u - e) / 2) * d),
                                              {
                                                  chunk:
                                                      (((o - e) / 2) * d) /
                                                      b.stackCount,
                                                  ratio: k.barPercentage,
                                                  start: rt,
                                              })
                                            : ((tt = t),
                                              (c = r),
                                              (p = (v = a).barThickness),
                                              (w = c.stackCount),
                                              (it = c.pixels[tt]),
                                              i.isNullOrUndef(p)
                                                  ? ((l =
                                                        c.min *
                                                        v.categoryPercentage),
                                                    (y = v.barPercentage))
                                                  : ((l = p * w), (y = 1)),
                                              {
                                                  chunk: l / w,
                                                  ratio: y,
                                                  start: it - l / 2,
                                              }),
                                    ut = this.getStackIndex(
                                        n,
                                        this.getMeta().stack
                                    ),
                                    g = h.start + h.chunk * ut + h.chunk / 2,
                                    nt = Math.min(
                                        i.valueOrDefault(
                                            a.maxBarThickness,
                                            1 / 0
                                        ),
                                        h.chunk * h.ratio
                                    );
                                return {
                                    base: g - nt / 2,
                                    head: g + nt / 2,
                                    center: g,
                                    size: nt,
                                };
                            },
                            draw: function () {
                                var t = this.chart,
                                    u = this.getValueScale(),
                                    r = this.getMeta().data,
                                    f = this.getDataset(),
                                    e = r.length,
                                    n = 0;
                                for (
                                    i.canvas.clipArea(t.ctx, t.chartArea);
                                    n < e;
                                    ++n
                                )
                                    isNaN(u.getRightValue(f.data[n])) ||
                                        r[n].draw();
                                i.canvas.unclipArea(t.ctx);
                            },
                            setHoverStyle: function (n) {
                                var u =
                                        this.chart.data.datasets[
                                            n._datasetIndex
                                        ],
                                    f = n._index,
                                    t = n.custom || {},
                                    r = n._model;
                                r.backgroundColor = t.hoverBackgroundColor
                                    ? t.hoverBackgroundColor
                                    : i.valueAtIndexOrDefault(
                                          u.hoverBackgroundColor,
                                          f,
                                          i.getHoverColor(r.backgroundColor)
                                      );
                                r.borderColor = t.hoverBorderColor
                                    ? t.hoverBorderColor
                                    : i.valueAtIndexOrDefault(
                                          u.hoverBorderColor,
                                          f,
                                          i.getHoverColor(r.borderColor)
                                      );
                                r.borderWidth = t.hoverBorderWidth
                                    ? t.hoverBorderWidth
                                    : i.valueAtIndexOrDefault(
                                          u.hoverBorderWidth,
                                          f,
                                          r.borderWidth
                                      );
                            },
                            removeHoverStyle: function (n) {
                                var r =
                                        this.chart.data.datasets[
                                            n._datasetIndex
                                        ],
                                    u = n._index,
                                    t = n.custom || {},
                                    f = n._model,
                                    e = this.chart.options.elements.rectangle;
                                f.backgroundColor = t.backgroundColor
                                    ? t.backgroundColor
                                    : i.valueAtIndexOrDefault(
                                          r.backgroundColor,
                                          u,
                                          e.backgroundColor
                                      );
                                f.borderColor = t.borderColor
                                    ? t.borderColor
                                    : i.valueAtIndexOrDefault(
                                          r.borderColor,
                                          u,
                                          e.borderColor
                                      );
                                f.borderWidth = t.borderWidth
                                    ? t.borderWidth
                                    : i.valueAtIndexOrDefault(
                                          r.borderWidth,
                                          u,
                                          e.borderWidth
                                      );
                            },
                        });
                        n.controllers.horizontalBar = n.controllers.bar.extend({
                            getValueScaleId: function () {
                                return this.getMeta().xAxisID;
                            },
                            getIndexScaleId: function () {
                                return this.getMeta().yAxisID;
                            },
                        });
                    };
                },
                { 25: 25, 40: 40, 45: 45 },
            ],
            16: [
                function (n, t) {
                    "use strict";
                    var r = n(25),
                        u = n(40),
                        i = n(45);
                    r._set("bubble", {
                        hover: { mode: "single" },
                        scales: {
                            xAxes: [
                                {
                                    type: "linear",
                                    position: "bottom",
                                    id: "x-axis-0",
                                },
                            ],
                            yAxes: [
                                {
                                    type: "linear",
                                    position: "left",
                                    id: "y-axis-0",
                                },
                            ],
                        },
                        tooltips: {
                            callbacks: {
                                title: function () {
                                    return "";
                                },
                                label: function (n, t) {
                                    var i =
                                            t.datasets[n.datasetIndex].label ||
                                            "",
                                        r =
                                            t.datasets[n.datasetIndex].data[
                                                n.index
                                            ];
                                    return (
                                        i +
                                        ": (" +
                                        n.xLabel +
                                        ", " +
                                        n.yLabel +
                                        ", " +
                                        r.r +
                                        ")"
                                    );
                                },
                            },
                        },
                    });
                    t.exports = function (n) {
                        n.controllers.bubble = n.DatasetController.extend({
                            dataElementType: u.Point,
                            update: function (n) {
                                var t = this,
                                    r = t.getMeta().data;
                                i.each(r, function (i, r) {
                                    t.updateElement(i, r, n);
                                });
                            },
                            updateElement: function (n, t, i) {
                                var u = this,
                                    h = u.getMeta(),
                                    a = n.custom || {},
                                    f = u.getScaleForId(h.xAxisID),
                                    e = u.getScaleForId(h.yAxisID),
                                    r = u._resolveElementOptions(n, t),
                                    o = u.getDataset().data[t],
                                    s = u.index,
                                    c = i
                                        ? f.getPixelForDecimal(0.5)
                                        : f.getPixelForValue(
                                              "object" == typeof o ? o : NaN,
                                              t,
                                              s
                                          ),
                                    l = i
                                        ? e.getBasePixel()
                                        : e.getPixelForValue(o, t, s);
                                n._xScale = f;
                                n._yScale = e;
                                n._options = r;
                                n._datasetIndex = s;
                                n._index = t;
                                n._model = {
                                    backgroundColor: r.backgroundColor,
                                    borderColor: r.borderColor,
                                    borderWidth: r.borderWidth,
                                    hitRadius: r.hitRadius,
                                    pointStyle: r.pointStyle,
                                    radius: i ? 0 : r.radius,
                                    skip: a.skip || isNaN(c) || isNaN(l),
                                    x: c,
                                    y: l,
                                };
                                n.pivot();
                            },
                            setHoverStyle: function (n) {
                                var r = n._model,
                                    t = n._options;
                                r.backgroundColor = i.valueOrDefault(
                                    t.hoverBackgroundColor,
                                    i.getHoverColor(t.backgroundColor)
                                );
                                r.borderColor = i.valueOrDefault(
                                    t.hoverBorderColor,
                                    i.getHoverColor(t.borderColor)
                                );
                                r.borderWidth = i.valueOrDefault(
                                    t.hoverBorderWidth,
                                    t.borderWidth
                                );
                                r.radius = t.radius + t.hoverRadius;
                            },
                            removeHoverStyle: function (n) {
                                var t = n._model,
                                    i = n._options;
                                t.backgroundColor = i.backgroundColor;
                                t.borderColor = i.borderColor;
                                t.borderWidth = i.borderWidth;
                                t.radius = i.radius;
                            },
                            _resolveElementOptions: function (n, t) {
                                for (
                                    var u,
                                        e = this.chart,
                                        f = e.data.datasets[this.index],
                                        h = n.custom || {},
                                        c = e.options.elements.point,
                                        l = i.options.resolve,
                                        a = f.data[t],
                                        o = {},
                                        v = {
                                            chart: e,
                                            dataIndex: t,
                                            dataset: f,
                                            datasetIndex: this.index,
                                        },
                                        y = [
                                            "backgroundColor",
                                            "borderColor",
                                            "borderWidth",
                                            "hoverBackgroundColor",
                                            "hoverBorderColor",
                                            "hoverBorderWidth",
                                            "hoverRadius",
                                            "hitRadius",
                                            "pointStyle",
                                        ],
                                        r = 0,
                                        s = y.length;
                                    r < s;
                                    ++r
                                )
                                    o[(u = y[r])] = l([h[u], f[u], c[u]], v, t);
                                return (
                                    (o.radius = l(
                                        [
                                            h.radius,
                                            a ? a.r : void 0,
                                            f.radius,
                                            c.radius,
                                        ],
                                        v,
                                        t
                                    )),
                                    o
                                );
                            },
                        });
                    };
                },
                { 25: 25, 40: 40, 45: 45 },
            ],
            17: [
                function (n, t) {
                    "use strict";
                    var r = n(25),
                        u = n(40),
                        i = n(45);
                    r._set("doughnut", {
                        animation: { animateRotate: !0, animateScale: !1 },
                        hover: { mode: "single" },
                        legendCallback: function (n) {
                            var t = [],
                                i;
                            t.push('<ul class="' + n.id + '-legend">');
                            var u = n.data,
                                r = u.datasets,
                                f = u.labels;
                            if (r.length)
                                for (i = 0; i < r[0].data.length; ++i)
                                    t.push(
                                        '<li><span style="background-color:' +
                                            r[0].backgroundColor[i] +
                                            '"></span>'
                                    ),
                                        f[i] && t.push(f[i]),
                                        t.push("</li>");
                            return t.push("</ul>"), t.join("");
                        },
                        legend: {
                            labels: {
                                generateLabels: function (n) {
                                    var t = n.data;
                                    return t.labels.length && t.datasets.length
                                        ? t.labels.map(function (r, u) {
                                              var h = n.getDatasetMeta(0),
                                                  e = t.datasets[0],
                                                  c = h.data[u],
                                                  f = (c && c.custom) || {},
                                                  o = i.valueAtIndexOrDefault,
                                                  s = n.options.elements.arc;
                                              return {
                                                  text: r,
                                                  fillStyle: f.backgroundColor
                                                      ? f.backgroundColor
                                                      : o(
                                                            e.backgroundColor,
                                                            u,
                                                            s.backgroundColor
                                                        ),
                                                  strokeStyle: f.borderColor
                                                      ? f.borderColor
                                                      : o(
                                                            e.borderColor,
                                                            u,
                                                            s.borderColor
                                                        ),
                                                  lineWidth: f.borderWidth
                                                      ? f.borderWidth
                                                      : o(
                                                            e.borderWidth,
                                                            u,
                                                            s.borderWidth
                                                        ),
                                                  hidden:
                                                      isNaN(e.data[u]) ||
                                                      h.data[u].hidden,
                                                  index: u,
                                              };
                                          })
                                        : [];
                                },
                            },
                            onClick: function (n, t) {
                                for (
                                    var r,
                                        u = t.index,
                                        f = this.chart,
                                        i = 0,
                                        e = (f.data.datasets || []).length;
                                    i < e;
                                    ++i
                                )
                                    (r = f.getDatasetMeta(i)).data[u] &&
                                        (r.data[u].hidden = !r.data[u].hidden);
                                f.update();
                            },
                        },
                        cutoutPercentage: 50,
                        rotation: -0.5 * Math.PI,
                        circumference: 2 * Math.PI,
                        tooltips: {
                            callbacks: {
                                title: function () {
                                    return "";
                                },
                                label: function (n, t) {
                                    var r = t.labels[n.index],
                                        u =
                                            ": " +
                                            t.datasets[n.datasetIndex].data[
                                                n.index
                                            ];
                                    return (
                                        i.isArray(r)
                                            ? ((r = r.slice())[0] += u)
                                            : (r += u),
                                        r
                                    );
                                },
                            },
                        },
                    });
                    r._set("pie", i.clone(r.doughnut));
                    r._set("pie", { cutoutPercentage: 0 });
                    t.exports = function (n) {
                        n.controllers.doughnut = n.controllers.pie =
                            n.DatasetController.extend({
                                dataElementType: u.Arc,
                                linkScales: i.noop,
                                getRingIndex: function (n) {
                                    for (var i = 0, t = 0; t < n; ++t)
                                        this.chart.isDatasetVisible(t) && ++i;
                                    return i;
                                },
                                update: function (n) {
                                    var u = this,
                                        t = u.chart,
                                        o = t.chartArea,
                                        s = t.options,
                                        w = s.elements.arc,
                                        b = o.right - o.left - w.borderWidth,
                                        k = o.bottom - o.top - w.borderWidth,
                                        d = Math.min(b, k),
                                        v = { x: 0, y: 0 },
                                        y = u.getMeta(),
                                        p = s.cutoutPercentage,
                                        g = s.circumference;
                                    if (g < 2 * Math.PI) {
                                        var r = s.rotation % (2 * Math.PI),
                                            f =
                                                (r +=
                                                    2 *
                                                    Math.PI *
                                                    (r >= Math.PI
                                                        ? -1
                                                        : r < -Math.PI
                                                        ? 1
                                                        : 0)) + g,
                                            h = Math.cos(r),
                                            c = Math.sin(r),
                                            l = Math.cos(f),
                                            a = Math.sin(f),
                                            ut =
                                                (r <= 0 && f >= 0) ||
                                                (r <= 2 * Math.PI &&
                                                    2 * Math.PI <= f),
                                            ft =
                                                (r <= 0.5 * Math.PI &&
                                                    0.5 * Math.PI <= f) ||
                                                (r <= 2.5 * Math.PI &&
                                                    2.5 * Math.PI <= f),
                                            et =
                                                (r <= -Math.PI &&
                                                    -Math.PI <= f) ||
                                                (r <= Math.PI && Math.PI <= f),
                                            ot =
                                                (r <= 0.5 * -Math.PI &&
                                                    0.5 * -Math.PI <= f) ||
                                                (r <= 1.5 * Math.PI &&
                                                    1.5 * Math.PI <= f),
                                            e = p / 100,
                                            nt = et
                                                ? -1
                                                : Math.min(
                                                      h * (h < 0 ? 1 : e),
                                                      l * (l < 0 ? 1 : e)
                                                  ),
                                            tt = ot
                                                ? -1
                                                : Math.min(
                                                      c * (c < 0 ? 1 : e),
                                                      a * (a < 0 ? 1 : e)
                                                  ),
                                            it = ut
                                                ? 1
                                                : Math.max(
                                                      h * (h > 0 ? 1 : e),
                                                      l * (l > 0 ? 1 : e)
                                                  ),
                                            rt = ft
                                                ? 1
                                                : Math.max(
                                                      c * (c > 0 ? 1 : e),
                                                      a * (a > 0 ? 1 : e)
                                                  ),
                                            st = 0.5 * (it - nt),
                                            ht = 0.5 * (rt - tt);
                                        d = Math.min(b / st, k / ht);
                                        v = {
                                            x: -0.5 * (it + nt),
                                            y: -0.5 * (rt + tt),
                                        };
                                    }
                                    t.borderWidth = u.getMaxBorderWidth(y.data);
                                    t.outerRadius = Math.max(
                                        (d - t.borderWidth) / 2,
                                        0
                                    );
                                    t.innerRadius = Math.max(
                                        p ? (t.outerRadius / 100) * p : 0,
                                        0
                                    );
                                    t.radiusLength =
                                        (t.outerRadius - t.innerRadius) /
                                        t.getVisibleDatasetCount();
                                    t.offsetX = v.x * t.outerRadius;
                                    t.offsetY = v.y * t.outerRadius;
                                    y.total = u.calculateTotal();
                                    u.outerRadius =
                                        t.outerRadius -
                                        t.radiusLength *
                                            u.getRingIndex(u.index);
                                    u.innerRadius = Math.max(
                                        u.outerRadius - t.radiusLength,
                                        0
                                    );
                                    i.each(y.data, function (t, i) {
                                        u.updateElement(t, i, n);
                                    });
                                },
                                updateElement: function (n, t, r) {
                                    var u = this,
                                        f = u.chart,
                                        s = f.chartArea,
                                        e = f.options,
                                        h = e.animation,
                                        l = (s.left + s.right) / 2,
                                        a = (s.top + s.bottom) / 2,
                                        v = e.rotation,
                                        y = e.rotation,
                                        c = u.getDataset(),
                                        p =
                                            r && h.animateRotate
                                                ? 0
                                                : n.hidden
                                                ? 0
                                                : u.calculateCircumference(
                                                      c.data[t]
                                                  ) *
                                                  (e.circumference /
                                                      (2 * Math.PI)),
                                        w =
                                            r && h.animateScale
                                                ? 0
                                                : u.innerRadius,
                                        b =
                                            r && h.animateScale
                                                ? 0
                                                : u.outerRadius,
                                        k = i.valueAtIndexOrDefault,
                                        o;
                                    i.extend(n, {
                                        _datasetIndex: u.index,
                                        _index: t,
                                        _model: {
                                            x: l + f.offsetX,
                                            y: a + f.offsetY,
                                            startAngle: v,
                                            endAngle: y,
                                            circumference: p,
                                            outerRadius: b,
                                            innerRadius: w,
                                            label: k(
                                                c.label,
                                                t,
                                                f.data.labels[t]
                                            ),
                                        },
                                    });
                                    o = n._model;
                                    this.removeHoverStyle(n);
                                    (r && h.animateRotate) ||
                                        ((o.startAngle =
                                            0 === t
                                                ? e.rotation
                                                : u.getMeta().data[t - 1]._model
                                                      .endAngle),
                                        (o.endAngle =
                                            o.startAngle + o.circumference));
                                    n.pivot();
                                },
                                removeHoverStyle: function (t) {
                                    n.DatasetController.prototype.removeHoverStyle.call(
                                        this,
                                        t,
                                        this.chart.options.elements.arc
                                    );
                                },
                                calculateTotal: function () {
                                    var n,
                                        r = this.getDataset(),
                                        u = this.getMeta(),
                                        t = 0;
                                    return (
                                        i.each(u.data, function (i, u) {
                                            n = r.data[u];
                                            isNaN(n) ||
                                                i.hidden ||
                                                (t += Math.abs(n));
                                        }),
                                        t
                                    );
                                },
                                calculateCircumference: function (n) {
                                    var t = this.getMeta().total;
                                    return t > 0 && !isNaN(n)
                                        ? 2 * Math.PI * (Math.abs(n) / t)
                                        : 0;
                                },
                                getMaxBorderWidth: function (n) {
                                    for (
                                        var r,
                                            u,
                                            t = 0,
                                            f = this.index,
                                            e = n.length,
                                            i = 0;
                                        i < e;
                                        i++
                                    )
                                        (r = n[i]._model
                                            ? n[i]._model.borderWidth
                                            : 0),
                                            (t =
                                                (u = n[i]._chart
                                                    ? n[i]._chart.config.data
                                                          .datasets[f]
                                                          .hoverBorderWidth
                                                    : 0) > (t = r > t ? r : t)
                                                    ? u
                                                    : t);
                                    return t;
                                },
                            });
                    };
                },
                { 25: 25, 40: 40, 45: 45 },
            ],
            18: [
                function (n, t) {
                    "use strict";
                    var u = n(25),
                        r = n(40),
                        i = n(45);
                    u._set("line", {
                        showLines: !0,
                        spanGaps: !1,
                        hover: { mode: "label" },
                        scales: {
                            xAxes: [{ type: "category", id: "x-axis-0" }],
                            yAxes: [{ type: "linear", id: "y-axis-0" }],
                        },
                    });
                    t.exports = function (n) {
                        function t(n, t) {
                            return i.valueOrDefault(n.showLine, t.showLines);
                        }
                        n.controllers.line = n.DatasetController.extend({
                            datasetElementType: r.Line,
                            dataElementType: r.Point,
                            update: function (n) {
                                var e,
                                    c,
                                    r,
                                    o = this,
                                    l = o.getMeta(),
                                    s = l.dataset,
                                    h = l.data || [],
                                    a = o.chart.options,
                                    f = a.elements.line,
                                    y = o.getScaleForId(l.yAxisID),
                                    u = o.getDataset(),
                                    v = t(u, a);
                                for (
                                    v &&
                                        ((r = s.custom || {}),
                                        void 0 !== u.tension &&
                                            void 0 === u.lineTension &&
                                            (u.lineTension = u.tension),
                                        (s._scale = y),
                                        (s._datasetIndex = o.index),
                                        (s._children = h),
                                        (s._model = {
                                            spanGaps: u.spanGaps
                                                ? u.spanGaps
                                                : a.spanGaps,
                                            tension: r.tension
                                                ? r.tension
                                                : i.valueOrDefault(
                                                      u.lineTension,
                                                      f.tension
                                                  ),
                                            backgroundColor: r.backgroundColor
                                                ? r.backgroundColor
                                                : u.backgroundColor ||
                                                  f.backgroundColor,
                                            borderWidth: r.borderWidth
                                                ? r.borderWidth
                                                : u.borderWidth ||
                                                  f.borderWidth,
                                            borderColor: r.borderColor
                                                ? r.borderColor
                                                : u.borderColor ||
                                                  f.borderColor,
                                            borderCapStyle: r.borderCapStyle
                                                ? r.borderCapStyle
                                                : u.borderCapStyle ||
                                                  f.borderCapStyle,
                                            borderDash: r.borderDash
                                                ? r.borderDash
                                                : u.borderDash || f.borderDash,
                                            borderDashOffset: r.borderDashOffset
                                                ? r.borderDashOffset
                                                : u.borderDashOffset ||
                                                  f.borderDashOffset,
                                            borderJoinStyle: r.borderJoinStyle
                                                ? r.borderJoinStyle
                                                : u.borderJoinStyle ||
                                                  f.borderJoinStyle,
                                            fill: r.fill
                                                ? r.fill
                                                : void 0 !== u.fill
                                                ? u.fill
                                                : f.fill,
                                            steppedLine: r.steppedLine
                                                ? r.steppedLine
                                                : i.valueOrDefault(
                                                      u.steppedLine,
                                                      f.stepped
                                                  ),
                                            cubicInterpolationMode:
                                                r.cubicInterpolationMode
                                                    ? r.cubicInterpolationMode
                                                    : i.valueOrDefault(
                                                          u.cubicInterpolationMode,
                                                          f.cubicInterpolationMode
                                                      ),
                                        }),
                                        s.pivot()),
                                        e = 0,
                                        c = h.length;
                                    e < c;
                                    ++e
                                )
                                    o.updateElement(h[e], e, n);
                                for (
                                    v &&
                                        0 !== s._model.tension &&
                                        o.updateBezierControlPoints(),
                                        e = 0,
                                        c = h.length;
                                    e < c;
                                    ++e
                                )
                                    h[e].pivot();
                            },
                            getPointBackgroundColor: function (n, t) {
                                var r =
                                        this.chart.options.elements.point
                                            .backgroundColor,
                                    u = this.getDataset(),
                                    f = n.custom || {};
                                return (
                                    f.backgroundColor
                                        ? (r = f.backgroundColor)
                                        : u.pointBackgroundColor
                                        ? (r = i.valueAtIndexOrDefault(
                                              u.pointBackgroundColor,
                                              t,
                                              r
                                          ))
                                        : u.backgroundColor &&
                                          (r = u.backgroundColor),
                                    r
                                );
                            },
                            getPointBorderColor: function (n, t) {
                                var r =
                                        this.chart.options.elements.point
                                            .borderColor,
                                    u = this.getDataset(),
                                    f = n.custom || {};
                                return (
                                    f.borderColor
                                        ? (r = f.borderColor)
                                        : u.pointBorderColor
                                        ? (r = i.valueAtIndexOrDefault(
                                              u.pointBorderColor,
                                              t,
                                              r
                                          ))
                                        : u.borderColor && (r = u.borderColor),
                                    r
                                );
                            },
                            getPointBorderWidth: function (n, t) {
                                var r =
                                        this.chart.options.elements.point
                                            .borderWidth,
                                    u = this.getDataset(),
                                    f = n.custom || {};
                                return (
                                    isNaN(f.borderWidth)
                                        ? !isNaN(u.pointBorderWidth) ||
                                          i.isArray(u.pointBorderWidth)
                                            ? (r = i.valueAtIndexOrDefault(
                                                  u.pointBorderWidth,
                                                  t,
                                                  r
                                              ))
                                            : isNaN(u.borderWidth) ||
                                              (r = u.borderWidth)
                                        : (r = f.borderWidth),
                                    r
                                );
                            },
                            updateElement: function (n, t, r) {
                                var s,
                                    h,
                                    f = this,
                                    e = f.getMeta(),
                                    o = n.custom || {},
                                    u = f.getDataset(),
                                    c = f.index,
                                    l = u.data[t],
                                    v = f.getScaleForId(e.yAxisID),
                                    y = f.getScaleForId(e.xAxisID),
                                    a = f.chart.options.elements.point;
                                void 0 !== u.radius &&
                                    void 0 === u.pointRadius &&
                                    (u.pointRadius = u.radius);
                                void 0 !== u.hitRadius &&
                                    void 0 === u.pointHitRadius &&
                                    (u.pointHitRadius = u.hitRadius);
                                s = y.getPixelForValue(
                                    "object" == typeof l ? l : NaN,
                                    t,
                                    c
                                );
                                h = r
                                    ? v.getBasePixel()
                                    : f.calculatePointY(l, t, c);
                                n._xScale = y;
                                n._yScale = v;
                                n._datasetIndex = c;
                                n._index = t;
                                n._model = {
                                    x: s,
                                    y: h,
                                    skip: o.skip || isNaN(s) || isNaN(h),
                                    radius:
                                        o.radius ||
                                        i.valueAtIndexOrDefault(
                                            u.pointRadius,
                                            t,
                                            a.radius
                                        ),
                                    pointStyle:
                                        o.pointStyle ||
                                        i.valueAtIndexOrDefault(
                                            u.pointStyle,
                                            t,
                                            a.pointStyle
                                        ),
                                    backgroundColor: f.getPointBackgroundColor(
                                        n,
                                        t
                                    ),
                                    borderColor: f.getPointBorderColor(n, t),
                                    borderWidth: f.getPointBorderWidth(n, t),
                                    tension: e.dataset._model
                                        ? e.dataset._model.tension
                                        : 0,
                                    steppedLine:
                                        !!e.dataset._model &&
                                        e.dataset._model.steppedLine,
                                    hitRadius:
                                        o.hitRadius ||
                                        i.valueAtIndexOrDefault(
                                            u.pointHitRadius,
                                            t,
                                            a.hitRadius
                                        ),
                                };
                            },
                            calculatePointY: function (n, t, i) {
                                var u,
                                    s,
                                    h,
                                    o = this.chart,
                                    a = this.getMeta(),
                                    r = this.getScaleForId(a.yAxisID),
                                    c = 0,
                                    l = 0,
                                    f,
                                    e;
                                if (r.options.stacked) {
                                    for (u = 0; u < i; u++)
                                        ((s = o.data.datasets[u]),
                                        "line" ===
                                            (h = o.getDatasetMeta(u)).type &&
                                            h.yAxisID === r.id &&
                                            o.isDatasetVisible(u)) &&
                                            ((f = Number(
                                                r.getRightValue(s.data[t])
                                            )),
                                            f < 0
                                                ? (l += f || 0)
                                                : (c += f || 0));
                                    return (
                                        (e = Number(r.getRightValue(n))),
                                        e < 0
                                            ? r.getPixelForValue(l + e)
                                            : r.getPixelForValue(c + e)
                                    );
                                }
                                return r.getPixelForValue(n);
                            },
                            updateBezierControlPoints: function () {
                                function s(n, t, i) {
                                    return Math.max(Math.min(n, i), t);
                                }
                                var t,
                                    e,
                                    n,
                                    f,
                                    o = this.getMeta(),
                                    u = this.chart.chartArea,
                                    r = o.data || [];
                                if (
                                    (o.dataset._model.spanGaps &&
                                        (r = r.filter(function (n) {
                                            return !n._model.skip;
                                        })),
                                    "monotone" ===
                                        o.dataset._model.cubicInterpolationMode)
                                )
                                    i.splineCurveMonotone(r);
                                else
                                    for (t = 0, e = r.length; t < e; ++t)
                                        (n = r[t]._model),
                                            (f = i.splineCurve(
                                                i.previousItem(r, t)._model,
                                                n,
                                                i.nextItem(r, t)._model,
                                                o.dataset._model.tension
                                            )),
                                            (n.controlPointPreviousX =
                                                f.previous.x),
                                            (n.controlPointPreviousY =
                                                f.previous.y),
                                            (n.controlPointNextX = f.next.x),
                                            (n.controlPointNextY = f.next.y);
                                if (
                                    this.chart.options.elements.line
                                        .capBezierPoints
                                )
                                    for (t = 0, e = r.length; t < e; ++t)
                                        ((n =
                                            r[t]._model).controlPointPreviousX =
                                            s(
                                                n.controlPointPreviousX,
                                                u.left,
                                                u.right
                                            )),
                                            (n.controlPointPreviousY = s(
                                                n.controlPointPreviousY,
                                                u.top,
                                                u.bottom
                                            )),
                                            (n.controlPointNextX = s(
                                                n.controlPointNextX,
                                                u.left,
                                                u.right
                                            )),
                                            (n.controlPointNextY = s(
                                                n.controlPointNextY,
                                                u.top,
                                                u.bottom
                                            ));
                            },
                            draw: function () {
                                var n = this.chart,
                                    u = this.getMeta(),
                                    f = u.data || [],
                                    e = n.chartArea,
                                    o = f.length,
                                    r = 0;
                                for (
                                    i.canvas.clipArea(n.ctx, e),
                                        t(this.getDataset(), n.options) &&
                                            u.dataset.draw(),
                                        i.canvas.unclipArea(n.ctx);
                                    r < o;
                                    ++r
                                )
                                    f[r].draw(e);
                            },
                            setHoverStyle: function (n) {
                                var r =
                                        this.chart.data.datasets[
                                            n._datasetIndex
                                        ],
                                    u = n._index,
                                    f = n.custom || {},
                                    t = n._model;
                                t.radius =
                                    f.hoverRadius ||
                                    i.valueAtIndexOrDefault(
                                        r.pointHoverRadius,
                                        u,
                                        this.chart.options.elements.point
                                            .hoverRadius
                                    );
                                t.backgroundColor =
                                    f.hoverBackgroundColor ||
                                    i.valueAtIndexOrDefault(
                                        r.pointHoverBackgroundColor,
                                        u,
                                        i.getHoverColor(t.backgroundColor)
                                    );
                                t.borderColor =
                                    f.hoverBorderColor ||
                                    i.valueAtIndexOrDefault(
                                        r.pointHoverBorderColor,
                                        u,
                                        i.getHoverColor(t.borderColor)
                                    );
                                t.borderWidth =
                                    f.hoverBorderWidth ||
                                    i.valueAtIndexOrDefault(
                                        r.pointHoverBorderWidth,
                                        u,
                                        t.borderWidth
                                    );
                            },
                            removeHoverStyle: function (n) {
                                var t = this,
                                    r = t.chart.data.datasets[n._datasetIndex],
                                    u = n._index,
                                    e = n.custom || {},
                                    f = n._model;
                                void 0 !== r.radius &&
                                    void 0 === r.pointRadius &&
                                    (r.pointRadius = r.radius);
                                f.radius =
                                    e.radius ||
                                    i.valueAtIndexOrDefault(
                                        r.pointRadius,
                                        u,
                                        t.chart.options.elements.point.radius
                                    );
                                f.backgroundColor = t.getPointBackgroundColor(
                                    n,
                                    u
                                );
                                f.borderColor = t.getPointBorderColor(n, u);
                                f.borderWidth = t.getPointBorderWidth(n, u);
                            },
                        });
                    };
                },
                { 25: 25, 40: 40, 45: 45 },
            ],
            19: [
                function (n, t) {
                    "use strict";
                    var r = n(25),
                        u = n(40),
                        i = n(45);
                    r._set("polarArea", {
                        scale: {
                            type: "radialLinear",
                            angleLines: { display: !1 },
                            gridLines: { circular: !0 },
                            pointLabels: { display: !1 },
                            ticks: { beginAtZero: !0 },
                        },
                        animation: { animateRotate: !0, animateScale: !0 },
                        startAngle: -0.5 * Math.PI,
                        legendCallback: function (n) {
                            var t = [],
                                i;
                            t.push('<ul class="' + n.id + '-legend">');
                            var u = n.data,
                                r = u.datasets,
                                f = u.labels;
                            if (r.length)
                                for (i = 0; i < r[0].data.length; ++i)
                                    t.push(
                                        '<li><span style="background-color:' +
                                            r[0].backgroundColor[i] +
                                            '"></span>'
                                    ),
                                        f[i] && t.push(f[i]),
                                        t.push("</li>");
                            return t.push("</ul>"), t.join("");
                        },
                        legend: {
                            labels: {
                                generateLabels: function (n) {
                                    var t = n.data;
                                    return t.labels.length && t.datasets.length
                                        ? t.labels.map(function (r, u) {
                                              var h = n.getDatasetMeta(0),
                                                  e = t.datasets[0],
                                                  f = h.data[u].custom || {},
                                                  o = i.valueAtIndexOrDefault,
                                                  s = n.options.elements.arc;
                                              return {
                                                  text: r,
                                                  fillStyle: f.backgroundColor
                                                      ? f.backgroundColor
                                                      : o(
                                                            e.backgroundColor,
                                                            u,
                                                            s.backgroundColor
                                                        ),
                                                  strokeStyle: f.borderColor
                                                      ? f.borderColor
                                                      : o(
                                                            e.borderColor,
                                                            u,
                                                            s.borderColor
                                                        ),
                                                  lineWidth: f.borderWidth
                                                      ? f.borderWidth
                                                      : o(
                                                            e.borderWidth,
                                                            u,
                                                            s.borderWidth
                                                        ),
                                                  hidden:
                                                      isNaN(e.data[u]) ||
                                                      h.data[u].hidden,
                                                  index: u,
                                              };
                                          })
                                        : [];
                                },
                            },
                            onClick: function (n, t) {
                                for (
                                    var f,
                                        e = t.index,
                                        r = this.chart,
                                        i = 0,
                                        u = (r.data.datasets || []).length;
                                    i < u;
                                    ++i
                                )
                                    (f = r.getDatasetMeta(i)).data[e].hidden =
                                        !f.data[e].hidden;
                                r.update();
                            },
                        },
                        tooltips: {
                            callbacks: {
                                title: function () {
                                    return "";
                                },
                                label: function (n, t) {
                                    return t.labels[n.index] + ": " + n.yLabel;
                                },
                            },
                        },
                    });
                    t.exports = function (n) {
                        n.controllers.polarArea = n.DatasetController.extend({
                            dataElementType: u.Arc,
                            linkScales: i.noop,
                            update: function (n) {
                                var r = this,
                                    t = r.chart,
                                    u = t.chartArea,
                                    e = r.getMeta(),
                                    f = t.options,
                                    o = f.elements.arc,
                                    s = Math.min(
                                        u.right - u.left,
                                        u.bottom - u.top
                                    );
                                t.outerRadius = Math.max(
                                    (s - o.borderWidth / 2) / 2,
                                    0
                                );
                                t.innerRadius = Math.max(
                                    f.cutoutPercentage
                                        ? (t.outerRadius / 100) *
                                              f.cutoutPercentage
                                        : 1,
                                    0
                                );
                                t.radiusLength =
                                    (t.outerRadius - t.innerRadius) /
                                    t.getVisibleDatasetCount();
                                r.outerRadius =
                                    t.outerRadius - t.radiusLength * r.index;
                                r.innerRadius = r.outerRadius - t.radiusLength;
                                e.count = r.countVisibleElements();
                                i.each(e.data, function (t, i) {
                                    r.updateElement(t, i, n);
                                });
                            },
                            updateElement: function (n, t, r) {
                                for (
                                    var u = this,
                                        s = u.chart,
                                        e = u.getDataset(),
                                        l = s.options,
                                        h = l.animation,
                                        f = s.scale,
                                        a = s.data.labels,
                                        v = u.calculateCircumference(e.data[t]),
                                        w = f.xCenter,
                                        b = f.yCenter,
                                        y = 0,
                                        k = u.getMeta(),
                                        o = 0;
                                    o < t;
                                    ++o
                                )
                                    isNaN(e.data[o]) || k.data[o].hidden || ++y;
                                var c = l.startAngle,
                                    d = n.hidden
                                        ? 0
                                        : f.getDistanceFromCenterForValue(
                                              e.data[t]
                                          ),
                                    p = c + v * y,
                                    g = p + (n.hidden ? 0 : v),
                                    nt = h.animateScale
                                        ? 0
                                        : f.getDistanceFromCenterForValue(
                                              e.data[t]
                                          );
                                i.extend(n, {
                                    _datasetIndex: u.index,
                                    _index: t,
                                    _scale: f,
                                    _model: {
                                        x: w,
                                        y: b,
                                        innerRadius: 0,
                                        outerRadius: r ? nt : d,
                                        startAngle:
                                            r && h.animateRotate ? c : p,
                                        endAngle: r && h.animateRotate ? c : g,
                                        label: i.valueAtIndexOrDefault(
                                            a,
                                            t,
                                            a[t]
                                        ),
                                    },
                                });
                                u.removeHoverStyle(n);
                                n.pivot();
                            },
                            removeHoverStyle: function (t) {
                                n.DatasetController.prototype.removeHoverStyle.call(
                                    this,
                                    t,
                                    this.chart.options.elements.arc
                                );
                            },
                            countVisibleElements: function () {
                                var t = this.getDataset(),
                                    r = this.getMeta(),
                                    n = 0;
                                return (
                                    i.each(r.data, function (i, r) {
                                        isNaN(t.data[r]) || i.hidden || n++;
                                    }),
                                    n
                                );
                            },
                            calculateCircumference: function (n) {
                                var t = this.getMeta().count;
                                return t > 0 && !isNaN(n)
                                    ? (2 * Math.PI) / t
                                    : 0;
                            },
                        });
                    };
                },
                { 25: 25, 40: 40, 45: 45 },
            ],
            20: [
                function (n, t) {
                    "use strict";
                    var u = n(25),
                        r = n(40),
                        i = n(45);
                    u._set("radar", {
                        scale: { type: "radialLinear" },
                        elements: { line: { tension: 0 } },
                    });
                    t.exports = function (n) {
                        n.controllers.radar = n.DatasetController.extend({
                            datasetElementType: r.Line,
                            dataElementType: r.Point,
                            linkScales: i.noop,
                            update: function (n) {
                                var f = this,
                                    e = f.getMeta(),
                                    s = e.dataset,
                                    o = e.data,
                                    t = s.custom || {},
                                    r = f.getDataset(),
                                    u = f.chart.options.elements.line,
                                    h = f.chart.scale;
                                void 0 !== r.tension &&
                                    void 0 === r.lineTension &&
                                    (r.lineTension = r.tension);
                                i.extend(e.dataset, {
                                    _datasetIndex: f.index,
                                    _scale: h,
                                    _children: o,
                                    _loop: !0,
                                    _model: {
                                        tension: t.tension
                                            ? t.tension
                                            : i.valueOrDefault(
                                                  r.lineTension,
                                                  u.tension
                                              ),
                                        backgroundColor: t.backgroundColor
                                            ? t.backgroundColor
                                            : r.backgroundColor ||
                                              u.backgroundColor,
                                        borderWidth: t.borderWidth
                                            ? t.borderWidth
                                            : r.borderWidth || u.borderWidth,
                                        borderColor: t.borderColor
                                            ? t.borderColor
                                            : r.borderColor || u.borderColor,
                                        fill: t.fill
                                            ? t.fill
                                            : void 0 !== r.fill
                                            ? r.fill
                                            : u.fill,
                                        borderCapStyle: t.borderCapStyle
                                            ? t.borderCapStyle
                                            : r.borderCapStyle ||
                                              u.borderCapStyle,
                                        borderDash: t.borderDash
                                            ? t.borderDash
                                            : r.borderDash || u.borderDash,
                                        borderDashOffset: t.borderDashOffset
                                            ? t.borderDashOffset
                                            : r.borderDashOffset ||
                                              u.borderDashOffset,
                                        borderJoinStyle: t.borderJoinStyle
                                            ? t.borderJoinStyle
                                            : r.borderJoinStyle ||
                                              u.borderJoinStyle,
                                    },
                                });
                                e.dataset.pivot();
                                i.each(
                                    o,
                                    function (t, i) {
                                        f.updateElement(t, i, n);
                                    },
                                    f
                                );
                                f.updateBezierControlPoints();
                            },
                            updateElement: function (n, t, r) {
                                var o = this,
                                    u = n.custom || {},
                                    f = o.getDataset(),
                                    s = o.chart.scale,
                                    e = o.chart.options.elements.point,
                                    h = s.getPointPositionForValue(
                                        t,
                                        f.data[t]
                                    );
                                void 0 !== f.radius &&
                                    void 0 === f.pointRadius &&
                                    (f.pointRadius = f.radius);
                                void 0 !== f.hitRadius &&
                                    void 0 === f.pointHitRadius &&
                                    (f.pointHitRadius = f.hitRadius);
                                i.extend(n, {
                                    _datasetIndex: o.index,
                                    _index: t,
                                    _scale: s,
                                    _model: {
                                        x: r ? s.xCenter : h.x,
                                        y: r ? s.yCenter : h.y,
                                        tension: u.tension
                                            ? u.tension
                                            : i.valueOrDefault(
                                                  f.lineTension,
                                                  o.chart.options.elements.line
                                                      .tension
                                              ),
                                        radius: u.radius
                                            ? u.radius
                                            : i.valueAtIndexOrDefault(
                                                  f.pointRadius,
                                                  t,
                                                  e.radius
                                              ),
                                        backgroundColor: u.backgroundColor
                                            ? u.backgroundColor
                                            : i.valueAtIndexOrDefault(
                                                  f.pointBackgroundColor,
                                                  t,
                                                  e.backgroundColor
                                              ),
                                        borderColor: u.borderColor
                                            ? u.borderColor
                                            : i.valueAtIndexOrDefault(
                                                  f.pointBorderColor,
                                                  t,
                                                  e.borderColor
                                              ),
                                        borderWidth: u.borderWidth
                                            ? u.borderWidth
                                            : i.valueAtIndexOrDefault(
                                                  f.pointBorderWidth,
                                                  t,
                                                  e.borderWidth
                                              ),
                                        pointStyle: u.pointStyle
                                            ? u.pointStyle
                                            : i.valueAtIndexOrDefault(
                                                  f.pointStyle,
                                                  t,
                                                  e.pointStyle
                                              ),
                                        hitRadius: u.hitRadius
                                            ? u.hitRadius
                                            : i.valueAtIndexOrDefault(
                                                  f.pointHitRadius,
                                                  t,
                                                  e.hitRadius
                                              ),
                                    },
                                });
                                n._model.skip = u.skip
                                    ? u.skip
                                    : isNaN(n._model.x) || isNaN(n._model.y);
                            },
                            updateBezierControlPoints: function () {
                                var n = this.chart.chartArea,
                                    t = this.getMeta();
                                i.each(t.data, function (r, u) {
                                    var f = r._model,
                                        e = i.splineCurve(
                                            i.previousItem(t.data, u, !0)
                                                ._model,
                                            f,
                                            i.nextItem(t.data, u, !0)._model,
                                            f.tension
                                        );
                                    f.controlPointPreviousX = Math.max(
                                        Math.min(e.previous.x, n.right),
                                        n.left
                                    );
                                    f.controlPointPreviousY = Math.max(
                                        Math.min(e.previous.y, n.bottom),
                                        n.top
                                    );
                                    f.controlPointNextX = Math.max(
                                        Math.min(e.next.x, n.right),
                                        n.left
                                    );
                                    f.controlPointNextY = Math.max(
                                        Math.min(e.next.y, n.bottom),
                                        n.top
                                    );
                                    r.pivot();
                                });
                            },
                            setHoverStyle: function (n) {
                                var u =
                                        this.chart.data.datasets[
                                            n._datasetIndex
                                        ],
                                    t = n.custom || {},
                                    f = n._index,
                                    r = n._model;
                                r.radius = t.hoverRadius
                                    ? t.hoverRadius
                                    : i.valueAtIndexOrDefault(
                                          u.pointHoverRadius,
                                          f,
                                          this.chart.options.elements.point
                                              .hoverRadius
                                      );
                                r.backgroundColor = t.hoverBackgroundColor
                                    ? t.hoverBackgroundColor
                                    : i.valueAtIndexOrDefault(
                                          u.pointHoverBackgroundColor,
                                          f,
                                          i.getHoverColor(r.backgroundColor)
                                      );
                                r.borderColor = t.hoverBorderColor
                                    ? t.hoverBorderColor
                                    : i.valueAtIndexOrDefault(
                                          u.pointHoverBorderColor,
                                          f,
                                          i.getHoverColor(r.borderColor)
                                      );
                                r.borderWidth = t.hoverBorderWidth
                                    ? t.hoverBorderWidth
                                    : i.valueAtIndexOrDefault(
                                          u.pointHoverBorderWidth,
                                          f,
                                          r.borderWidth
                                      );
                            },
                            removeHoverStyle: function (n) {
                                var r =
                                        this.chart.data.datasets[
                                            n._datasetIndex
                                        ],
                                    t = n.custom || {},
                                    u = n._index,
                                    f = n._model,
                                    e = this.chart.options.elements.point;
                                f.radius = t.radius
                                    ? t.radius
                                    : i.valueAtIndexOrDefault(
                                          r.pointRadius,
                                          u,
                                          e.radius
                                      );
                                f.backgroundColor = t.backgroundColor
                                    ? t.backgroundColor
                                    : i.valueAtIndexOrDefault(
                                          r.pointBackgroundColor,
                                          u,
                                          e.backgroundColor
                                      );
                                f.borderColor = t.borderColor
                                    ? t.borderColor
                                    : i.valueAtIndexOrDefault(
                                          r.pointBorderColor,
                                          u,
                                          e.borderColor
                                      );
                                f.borderWidth = t.borderWidth
                                    ? t.borderWidth
                                    : i.valueAtIndexOrDefault(
                                          r.pointBorderWidth,
                                          u,
                                          e.borderWidth
                                      );
                            },
                        });
                    };
                },
                { 25: 25, 40: 40, 45: 45 },
            ],
            21: [
                function (n, t) {
                    "use strict";
                    n(25)._set("scatter", {
                        hover: { mode: "single" },
                        scales: {
                            xAxes: [
                                {
                                    id: "x-axis-1",
                                    type: "linear",
                                    position: "bottom",
                                },
                            ],
                            yAxes: [
                                {
                                    id: "y-axis-1",
                                    type: "linear",
                                    position: "left",
                                },
                            ],
                        },
                        showLines: !1,
                        tooltips: {
                            callbacks: {
                                title: function () {
                                    return "";
                                },
                                label: function (n) {
                                    return (
                                        "(" + n.xLabel + ", " + n.yLabel + ")"
                                    );
                                },
                            },
                        },
                    });
                    t.exports = function (n) {
                        n.controllers.scatter = n.controllers.line;
                    };
                },
                { 25: 25 },
            ],
            22: [
                function (n, t) {
                    "use strict";
                    var r = n(25),
                        u = n(26),
                        i = n(45);
                    r._set("global", {
                        animation: {
                            duration: 1e3,
                            easing: "easeOutQuart",
                            onProgress: i.noop,
                            onComplete: i.noop,
                        },
                    });
                    t.exports = function (n) {
                        n.Animation = u.extend({
                            chart: null,
                            currentStep: 0,
                            numSteps: 60,
                            easing: "",
                            render: null,
                            onAnimationProgress: null,
                            onAnimationComplete: null,
                        });
                        n.animationService = {
                            frameDuration: 17,
                            animations: [],
                            dropFrames: 0,
                            request: null,
                            addAnimation: function (n, t, i, r) {
                                var u,
                                    e,
                                    f = this.animations;
                                for (
                                    t.chart = n,
                                        r || (n.animating = !0),
                                        u = 0,
                                        e = f.length;
                                    u < e;
                                    ++u
                                )
                                    if (f[u].chart === n)
                                        return void (f[u] = t);
                                f.push(t);
                                1 === f.length && this.requestAnimationFrame();
                            },
                            cancelAnimation: function (n) {
                                var t = i.findIndex(
                                    this.animations,
                                    function (t) {
                                        return t.chart === n;
                                    }
                                );
                                -1 !== t &&
                                    (this.animations.splice(t, 1),
                                    (n.animating = !1));
                            },
                            requestAnimationFrame: function () {
                                var n = this;
                                null === n.request &&
                                    (n.request = i.requestAnimFrame.call(
                                        window,
                                        function () {
                                            n.request = null;
                                            n.startDigest();
                                        }
                                    ));
                            },
                            startDigest: function () {
                                var n = this,
                                    r = Date.now(),
                                    t = 0,
                                    i;
                                n.dropFrames > 1 &&
                                    ((t = Math.floor(n.dropFrames)),
                                    (n.dropFrames = n.dropFrames % 1));
                                n.advance(1 + t);
                                i = Date.now();
                                n.dropFrames += (i - r) / n.frameDuration;
                                n.animations.length > 0 &&
                                    n.requestAnimationFrame();
                            },
                            advance: function (n) {
                                for (
                                    var t, r, f = this.animations, u = 0;
                                    u < f.length;

                                )
                                    (r = (t = f[u]).chart),
                                        (t.currentStep =
                                            (t.currentStep || 0) + n),
                                        (t.currentStep = Math.min(
                                            t.currentStep,
                                            t.numSteps
                                        )),
                                        i.callback(t.render, [r, t], r),
                                        i.callback(
                                            t.onAnimationProgress,
                                            [t],
                                            r
                                        ),
                                        t.currentStep >= t.numSteps
                                            ? (i.callback(
                                                  t.onAnimationComplete,
                                                  [t],
                                                  r
                                              ),
                                              (r.animating = !1),
                                              f.splice(u, 1))
                                            : ++u;
                            },
                        };
                        Object.defineProperty(
                            n.Animation.prototype,
                            "animationObject",
                            {
                                get: function () {
                                    return this;
                                },
                            }
                        );
                        Object.defineProperty(
                            n.Animation.prototype,
                            "chartInstance",
                            {
                                get: function () {
                                    return this.chart;
                                },
                                set: function (n) {
                                    this.chart = n;
                                },
                            }
                        );
                    };
                },
                { 25: 25, 26: 26, 45: 45 },
            ],
            23: [
                function (n, t) {
                    "use strict";
                    var e = n(25),
                        i = n(45),
                        u = n(28),
                        o = n(30),
                        f = n(48),
                        r = n(31);
                    t.exports = function (n) {
                        function t(n) {
                            return "top" === n || "bottom" === n;
                        }
                        n.types = {};
                        n.instances = {};
                        n.controllers = {};
                        i.extend(n.prototype, {
                            construct: function (t, r) {
                                var o,
                                    h,
                                    u = this;
                                (h = (o = (o = r) || {}).data =
                                    o.data || {}).datasets = h.datasets || [];
                                h.labels = h.labels || [];
                                o.options = i.configMerge(
                                    e.global,
                                    e[o.type],
                                    o.options || {}
                                );
                                r = o;
                                var c = f.acquireContext(t, r),
                                    s = c && c.canvas,
                                    l = s && s.height,
                                    a = s && s.width;
                                u.id = i.uid();
                                u.ctx = c;
                                u.canvas = s;
                                u.config = r;
                                u.width = a;
                                u.height = l;
                                u.aspectRatio = l ? a / l : null;
                                u.options = r.options;
                                u._bufferedRender = !1;
                                u.chart = u;
                                u.controller = u;
                                n.instances[u.id] = u;
                                Object.defineProperty(u, "data", {
                                    get: function () {
                                        return u.config.data;
                                    },
                                    set: function (n) {
                                        u.config.data = n;
                                    },
                                });
                                c && s
                                    ? (u.initialize(), u.update())
                                    : console.error(
                                          "Failed to create chart: can't acquire context from the given item"
                                      );
                            },
                            initialize: function () {
                                var n = this;
                                return (
                                    r.notify(n, "beforeInit"),
                                    i.retinaScale(
                                        n,
                                        n.options.devicePixelRatio
                                    ),
                                    n.bindEvents(),
                                    n.options.responsive && n.resize(!0),
                                    n.ensureScalesHaveIDs(),
                                    n.buildOrUpdateScales(),
                                    n.initToolTip(),
                                    r.notify(n, "afterInit"),
                                    n
                                );
                            },
                            clear: function () {
                                return i.canvas.clear(this), this;
                            },
                            stop: function () {
                                return (
                                    n.animationService.cancelAnimation(this),
                                    this
                                );
                            },
                            resize: function (n) {
                                var t = this,
                                    s = t.options,
                                    u = t.canvas,
                                    h =
                                        (s.maintainAspectRatio &&
                                            t.aspectRatio) ||
                                        null,
                                    f = Math.max(
                                        0,
                                        Math.floor(i.getMaximumWidth(u))
                                    ),
                                    e = Math.max(
                                        0,
                                        Math.floor(
                                            h ? f / h : i.getMaximumHeight(u)
                                        )
                                    ),
                                    o;
                                (t.width === f && t.height === e) ||
                                    ((u.width = t.width = f),
                                    (u.height = t.height = e),
                                    (u.style.width = f + "px"),
                                    (u.style.height = e + "px"),
                                    i.retinaScale(t, s.devicePixelRatio),
                                    n) ||
                                    ((o = { width: f, height: e }),
                                    r.notify(t, "resize", [o]),
                                    t.options.onResize &&
                                        t.options.onResize(t, o),
                                    t.stop(),
                                    t.update(
                                        t.options.responsiveAnimationDuration
                                    ));
                            },
                            ensureScalesHaveIDs: function () {
                                var t = this.options,
                                    r = t.scales || {},
                                    n = t.scale;
                                i.each(r.xAxes, function (n, t) {
                                    n.id = n.id || "x-axis-" + t;
                                });
                                i.each(r.yAxes, function (n, t) {
                                    n.id = n.id || "y-axis-" + t;
                                });
                                n && (n.id = n.id || "scale");
                            },
                            buildOrUpdateScales: function () {
                                var r = this,
                                    f = r.options,
                                    u = r.scales || {},
                                    e = [],
                                    o = Object.keys(u).reduce(function (n, t) {
                                        return (n[t] = !1), n;
                                    }, {});
                                f.scales &&
                                    (e = e.concat(
                                        (f.scales.xAxes || []).map(function (
                                            n
                                        ) {
                                            return {
                                                options: n,
                                                dtype: "category",
                                                dposition: "bottom",
                                            };
                                        }),
                                        (f.scales.yAxes || []).map(function (
                                            n
                                        ) {
                                            return {
                                                options: n,
                                                dtype: "linear",
                                                dposition: "left",
                                            };
                                        })
                                    ));
                                f.scale &&
                                    e.push({
                                        options: f.scale,
                                        dtype: "radialLinear",
                                        isDefault: !0,
                                        dposition: "chartArea",
                                    });
                                i.each(e, function (f) {
                                    var s = f.options,
                                        h = s.id,
                                        c = i.valueOrDefault(s.type, f.dtype),
                                        e,
                                        l;
                                    if (
                                        (t(s.position) !== t(f.dposition) &&
                                            (s.position = f.dposition),
                                        (o[h] = !0),
                                        (e = null),
                                        h in u && u[h].type === c)
                                    )
                                        ((e = u[h]).options = s),
                                            (e.ctx = r.ctx),
                                            (e.chart = r);
                                    else {
                                        if (
                                            ((l =
                                                n.scaleService.getScaleConstructor(
                                                    c
                                                )),
                                            !l)
                                        )
                                            return;
                                        e = new l({
                                            id: h,
                                            type: c,
                                            options: s,
                                            ctx: r.ctx,
                                            chart: r,
                                        });
                                        u[e.id] = e;
                                    }
                                    e.mergeTicksOptions();
                                    f.isDefault && (r.scale = e);
                                });
                                i.each(o, function (n, t) {
                                    n || delete u[t];
                                });
                                r.scales = u;
                                n.scaleService.addScalesToLayout(this);
                            },
                            buildOrUpdateControllers: function () {
                                var t = this,
                                    u = [],
                                    r = [];
                                return (
                                    i.each(
                                        t.data.datasets,
                                        function (i, f) {
                                            var e = t.getDatasetMeta(f),
                                                s = i.type || t.config.type,
                                                o;
                                            if (
                                                (e.type &&
                                                    e.type !== s &&
                                                    (t.destroyDatasetMeta(f),
                                                    (e = t.getDatasetMeta(f))),
                                                (e.type = s),
                                                u.push(e.type),
                                                e.controller)
                                            )
                                                e.controller.updateIndex(f),
                                                    e.controller.linkScales();
                                            else {
                                                if (
                                                    ((o =
                                                        n.controllers[e.type]),
                                                    void 0 === o)
                                                )
                                                    throw new Error(
                                                        '"' +
                                                            e.type +
                                                            '" is not a chart type.'
                                                    );
                                                e.controller = new o(t, f);
                                                r.push(e.controller);
                                            }
                                        },
                                        t
                                    ),
                                    r
                                );
                            },
                            resetElements: function () {
                                var n = this;
                                i.each(
                                    n.data.datasets,
                                    function (t, i) {
                                        n.getDatasetMeta(i).controller.reset();
                                    },
                                    n
                                );
                            },
                            reset: function () {
                                this.resetElements();
                                this.tooltip.initialize();
                            },
                            update: function (t) {
                                var f,
                                    e,
                                    u = this,
                                    s;
                                ((t && "object" == typeof t) ||
                                    (t = { duration: t, lazy: arguments[1] }),
                                (e = (f = u).options),
                                i.each(f.scales, function (n) {
                                    o.removeBox(f, n);
                                }),
                                (e = i.configMerge(
                                    n.defaults.global,
                                    n.defaults[f.config.type],
                                    e
                                )),
                                (f.options = f.config.options = e),
                                f.ensureScalesHaveIDs(),
                                f.buildOrUpdateScales(),
                                (f.tooltip._options = e.tooltips),
                                f.tooltip.initialize(),
                                r._invalidate(u),
                                !1 !== r.notify(u, "beforeUpdate")) &&
                                    ((u.tooltip._data = u.data),
                                    (s = u.buildOrUpdateControllers()),
                                    i.each(
                                        u.data.datasets,
                                        function (n, t) {
                                            u.getDatasetMeta(
                                                t
                                            ).controller.buildOrUpdateElements();
                                        },
                                        u
                                    ),
                                    u.updateLayout(),
                                    u.options.animation &&
                                        u.options.animation.duration &&
                                        i.each(s, function (n) {
                                            n.reset();
                                        }),
                                    u.updateDatasets(),
                                    u.tooltip.initialize(),
                                    (u.lastActive = []),
                                    r.notify(u, "afterUpdate"),
                                    u._bufferedRender
                                        ? (u._bufferedRequest = {
                                              duration: t.duration,
                                              easing: t.easing,
                                              lazy: t.lazy,
                                          })
                                        : u.render(t));
                            },
                            updateLayout: function () {
                                !1 !== r.notify(this, "beforeLayout") &&
                                    (o.update(this, this.width, this.height),
                                    r.notify(this, "afterScaleUpdate"),
                                    r.notify(this, "afterLayout"));
                            },
                            updateDatasets: function () {
                                if (
                                    !1 !==
                                    r.notify(this, "beforeDatasetsUpdate")
                                ) {
                                    for (
                                        var n = 0,
                                            t = this.data.datasets.length;
                                        n < t;
                                        ++n
                                    )
                                        this.updateDataset(n);
                                    r.notify(this, "afterDatasetsUpdate");
                                }
                            },
                            updateDataset: function (n) {
                                var t = this.getDatasetMeta(n),
                                    i = { meta: t, index: n };
                                !1 !==
                                    r.notify(this, "beforeDatasetUpdate", [
                                        i,
                                    ]) &&
                                    (t.controller.update(),
                                    r.notify(this, "afterDatasetUpdate", [i]));
                            },
                            render: function (t) {
                                var u = this,
                                    e,
                                    s,
                                    f,
                                    o,
                                    h;
                                return (
                                    (t && "object" == typeof t) ||
                                        (t = {
                                            duration: t,
                                            lazy: arguments[1],
                                        }),
                                    (e = t.duration),
                                    (s = t.lazy),
                                    !1 !== r.notify(u, "beforeRender")
                                        ? ((f = u.options.animation),
                                          (o = function (n) {
                                              r.notify(u, "afterRender");
                                              i.callback(
                                                  f && f.onComplete,
                                                  [n],
                                                  u
                                              );
                                          }),
                                          f &&
                                          ((void 0 !== e && 0 !== e) ||
                                              (void 0 === e &&
                                                  0 !== f.duration))
                                              ? ((h = new n.Animation({
                                                    numSteps:
                                                        (e || f.duration) /
                                                        16.66,
                                                    easing:
                                                        t.easing || f.easing,
                                                    render: function (n, t) {
                                                        var f =
                                                                i.easing
                                                                    .effects[
                                                                    t.easing
                                                                ],
                                                            r = t.currentStep,
                                                            u = r / t.numSteps;
                                                        n.draw(f(u), u, r);
                                                    },
                                                    onAnimationProgress:
                                                        f.onProgress,
                                                    onAnimationComplete: o,
                                                })),
                                                n.animationService.addAnimation(
                                                    u,
                                                    h,
                                                    e,
                                                    s
                                                ))
                                              : (u.draw(),
                                                o(
                                                    new n.Animation({
                                                        numSteps: 0,
                                                        chart: u,
                                                    })
                                                )),
                                          u)
                                        : void 0
                                );
                            },
                            draw: function (n) {
                                var t = this;
                                t.clear();
                                i.isNullOrUndef(n) && (n = 1);
                                t.transition(n);
                                !1 !== r.notify(t, "beforeDraw", [n]) &&
                                    (i.each(
                                        t.boxes,
                                        function (n) {
                                            n.draw(t.chartArea);
                                        },
                                        t
                                    ),
                                    t.scale && t.scale.draw(),
                                    t.drawDatasets(n),
                                    t._drawTooltip(n),
                                    r.notify(t, "afterDraw", [n]));
                            },
                            transition: function (n) {
                                for (
                                    var t = 0,
                                        i = (this.data.datasets || []).length;
                                    t < i;
                                    ++t
                                )
                                    this.isDatasetVisible(t) &&
                                        this.getDatasetMeta(
                                            t
                                        ).controller.transition(n);
                                this.tooltip.transition(n);
                            },
                            drawDatasets: function (n) {
                                var t = this,
                                    i;
                                if (
                                    !1 !==
                                    r.notify(t, "beforeDatasetsDraw", [n])
                                ) {
                                    for (
                                        i = (t.data.datasets || []).length - 1;
                                        i >= 0;
                                        --i
                                    )
                                        t.isDatasetVisible(i) &&
                                            t.drawDataset(i, n);
                                    r.notify(t, "afterDatasetsDraw", [n]);
                                }
                            },
                            drawDataset: function (n, t) {
                                var i = this.getDatasetMeta(n),
                                    u = { meta: i, index: n, easingValue: t };
                                !1 !==
                                    r.notify(this, "beforeDatasetDraw", [u]) &&
                                    (i.controller.draw(t),
                                    r.notify(this, "afterDatasetDraw", [u]));
                            },
                            _drawTooltip: function (n) {
                                var t = this.tooltip,
                                    i = { tooltip: t, easingValue: n };
                                !1 !==
                                    r.notify(this, "beforeTooltipDraw", [i]) &&
                                    (t.draw(),
                                    r.notify(this, "afterTooltipDraw", [i]));
                            },
                            getElementAtEvent: function (n) {
                                return u.modes.single(this, n);
                            },
                            getElementsAtEvent: function (n) {
                                return u.modes.label(this, n, {
                                    intersect: !0,
                                });
                            },
                            getElementsAtXAxis: function (n) {
                                return u.modes["x-axis"](this, n, {
                                    intersect: !0,
                                });
                            },
                            getElementsAtEventForMode: function (n, t, i) {
                                var r = u.modes[t];
                                return "function" == typeof r
                                    ? r(this, n, i)
                                    : [];
                            },
                            getDatasetAtEvent: function (n) {
                                return u.modes.dataset(this, n, {
                                    intersect: !0,
                                });
                            },
                            getDatasetMeta: function (n) {
                                var t = this.data.datasets[n],
                                    i;
                                return (
                                    t._meta || (t._meta = {}),
                                    (i = t._meta[this.id]),
                                    i ||
                                        (i = t._meta[this.id] =
                                            {
                                                type: null,
                                                data: [],
                                                dataset: null,
                                                controller: null,
                                                hidden: null,
                                                xAxisID: null,
                                                yAxisID: null,
                                            }),
                                    i
                                );
                            },
                            getVisibleDatasetCount: function () {
                                for (
                                    var t = 0,
                                        n = 0,
                                        i = this.data.datasets.length;
                                    n < i;
                                    ++n
                                )
                                    this.isDatasetVisible(n) && t++;
                                return t;
                            },
                            isDatasetVisible: function (n) {
                                var t = this.getDatasetMeta(n);
                                return "boolean" == typeof t.hidden
                                    ? !t.hidden
                                    : !this.data.datasets[n].hidden;
                            },
                            generateLegend: function () {
                                return this.options.legendCallback(this);
                            },
                            destroyDatasetMeta: function (n) {
                                var i = this.id,
                                    t = this.data.datasets[n],
                                    r = t._meta && t._meta[i];
                                r &&
                                    (r.controller.destroy(), delete t._meta[i]);
                            },
                            destroy: function () {
                                var u,
                                    e,
                                    t = this,
                                    o = t.canvas;
                                for (
                                    t.stop(), u = 0, e = t.data.datasets.length;
                                    u < e;
                                    ++u
                                )
                                    t.destroyDatasetMeta(u);
                                o &&
                                    (t.unbindEvents(),
                                    i.canvas.clear(t),
                                    f.releaseContext(t.ctx),
                                    (t.canvas = null),
                                    (t.ctx = null));
                                r.notify(t, "destroy");
                                delete n.instances[t.id];
                            },
                            toBase64Image: function () {
                                return this.canvas.toDataURL.apply(
                                    this.canvas,
                                    arguments
                                );
                            },
                            initToolTip: function () {
                                var t = this;
                                t.tooltip = new n.Tooltip(
                                    {
                                        _chart: t,
                                        _chartInstance: t,
                                        _data: t.data,
                                        _options: t.options.tooltips,
                                    },
                                    t
                                );
                            },
                            bindEvents: function () {
                                var n = this,
                                    r = (n._listeners = {}),
                                    t = function () {
                                        n.eventHandler.apply(n, arguments);
                                    };
                                i.each(n.options.events, function (i) {
                                    f.addEventListener(n, i, t);
                                    r[i] = t;
                                });
                                n.options.responsive &&
                                    ((t = function () {
                                        n.resize();
                                    }),
                                    f.addEventListener(n, "resize", t),
                                    (r.resize = t));
                            },
                            unbindEvents: function () {
                                var n = this,
                                    t = n._listeners;
                                t &&
                                    (delete n._listeners,
                                    i.each(t, function (t, i) {
                                        f.removeEventListener(n, i, t);
                                    }));
                            },
                            updateHoverStyle: function (n, t, i) {
                                for (
                                    var u,
                                        e = i
                                            ? "setHoverStyle"
                                            : "removeHoverStyle",
                                        r = 0,
                                        f = n.length;
                                    r < f;
                                    ++r
                                )
                                    (u = n[r]) &&
                                        this.getDatasetMeta(
                                            u._datasetIndex
                                        ).controller[e](u);
                            },
                            eventHandler: function (n) {
                                var t = this,
                                    i = t.tooltip,
                                    u,
                                    f;
                                if (!1 !== r.notify(t, "beforeEvent", [n]))
                                    return (
                                        (t._bufferedRender = !0),
                                        (t._bufferedRequest = null),
                                        (u = t.handleEvent(n)),
                                        i &&
                                            (u = i._start
                                                ? i.handleEvent(n)
                                                : u | i.handleEvent(n)),
                                        r.notify(t, "afterEvent", [n]),
                                        (f = t._bufferedRequest),
                                        f
                                            ? t.render(f)
                                            : u &&
                                              !t.animating &&
                                              (t.stop(),
                                              t.render(
                                                  t.options.hover
                                                      .animationDuration,
                                                  !0
                                              )),
                                        (t._bufferedRender = !1),
                                        (t._bufferedRequest = null),
                                        t
                                    );
                            },
                            handleEvent: function (n) {
                                var f,
                                    t = this,
                                    r = t.options || {},
                                    u = r.hover;
                                return (
                                    (t.lastActive = t.lastActive || []),
                                    (t.active =
                                        "mouseout" === n.type
                                            ? []
                                            : t.getElementsAtEventForMode(
                                                  n,
                                                  u.mode,
                                                  u
                                              )),
                                    i.callback(
                                        r.onHover || r.hover.onHover,
                                        [n.native, t.active],
                                        t
                                    ),
                                    ("mouseup" !== n.type &&
                                        "click" !== n.type) ||
                                        (r.onClick &&
                                            r.onClick.call(
                                                t,
                                                n.native,
                                                t.active
                                            )),
                                    t.lastActive.length &&
                                        t.updateHoverStyle(
                                            t.lastActive,
                                            u.mode,
                                            !1
                                        ),
                                    t.active.length &&
                                        u.mode &&
                                        t.updateHoverStyle(
                                            t.active,
                                            u.mode,
                                            !0
                                        ),
                                    (f = !i.arrayEquals(
                                        t.active,
                                        t.lastActive
                                    )),
                                    (t.lastActive = t.active),
                                    f
                                );
                            },
                        });
                        n.Controller = n;
                    };
                },
                { 25: 25, 28: 28, 30: 30, 31: 31, 45: 45, 48: 48 },
            ],
            24: [
                function (n, t) {
                    "use strict";
                    var i = n(45);
                    t.exports = function (n) {
                        function r(n, i) {
                            var f = n._chartjs,
                                r,
                                u;
                            f &&
                                ((r = f.listeners),
                                (u = r.indexOf(i)),
                                -1 !== u && r.splice(u, 1),
                                r.length > 0 ||
                                    (t.forEach(function (t) {
                                        delete n[t];
                                    }),
                                    delete n._chartjs));
                        }
                        var t = ["push", "pop", "shift", "splice", "unshift"];
                        n.DatasetController = function (n, t) {
                            this.initialize(n, t);
                        };
                        i.extend(n.DatasetController.prototype, {
                            datasetElementType: null,
                            dataElementType: null,
                            initialize: function (n, t) {
                                this.chart = n;
                                this.index = t;
                                this.linkScales();
                                this.addElements();
                            },
                            updateIndex: function (n) {
                                this.index = n;
                            },
                            linkScales: function () {
                                var n = this,
                                    t = n.getMeta(),
                                    i = n.getDataset();
                                (null !== t.xAxisID &&
                                    t.xAxisID in n.chart.scales) ||
                                    (t.xAxisID =
                                        i.xAxisID ||
                                        n.chart.options.scales.xAxes[0].id);
                                (null !== t.yAxisID &&
                                    t.yAxisID in n.chart.scales) ||
                                    (t.yAxisID =
                                        i.yAxisID ||
                                        n.chart.options.scales.yAxes[0].id);
                            },
                            getDataset: function () {
                                return this.chart.data.datasets[this.index];
                            },
                            getMeta: function () {
                                return this.chart.getDatasetMeta(this.index);
                            },
                            getScaleForId: function (n) {
                                return this.chart.scales[n];
                            },
                            reset: function () {
                                this.update(!0);
                            },
                            destroy: function () {
                                this._data && r(this._data, this);
                            },
                            createMetaDataset: function () {
                                var n = this.datasetElementType;
                                return (
                                    n &&
                                    new n({
                                        _chart: this.chart,
                                        _datasetIndex: this.index,
                                    })
                                );
                            },
                            createMetaData: function (n) {
                                var t = this.dataElementType;
                                return (
                                    t &&
                                    new t({
                                        _chart: this.chart,
                                        _datasetIndex: this.index,
                                        _index: n,
                                    })
                                );
                            },
                            addElements: function () {
                                for (
                                    var t = this.getMeta(),
                                        u = this.getDataset().data || [],
                                        r = t.data,
                                        n = 0,
                                        i = u.length;
                                    n < i;
                                    ++n
                                )
                                    r[n] = r[n] || this.createMetaData(n);
                                t.dataset =
                                    t.dataset || this.createMetaDataset();
                            },
                            addElementAndReset: function (n) {
                                var t = this.createMetaData(n);
                                this.getMeta().data.splice(n, 0, t);
                                this.updateElement(t, n, !0);
                            },
                            buildOrUpdateElements: function () {
                                var u,
                                    f,
                                    n = this,
                                    o = n.getDataset(),
                                    e = o.data || (o.data = []);
                                n._data !== e &&
                                    (n._data && r(n._data, n),
                                    (f = n),
                                    (u = e)._chartjs
                                        ? u._chartjs.listeners.push(f)
                                        : (Object.defineProperty(
                                              u,
                                              "_chartjs",
                                              {
                                                  configurable: !0,
                                                  enumerable: !1,
                                                  value: { listeners: [f] },
                                              }
                                          ),
                                          t.forEach(function (n) {
                                              var t =
                                                      "onData" +
                                                      n
                                                          .charAt(0)
                                                          .toUpperCase() +
                                                      n.slice(1),
                                                  r = u[n];
                                              Object.defineProperty(u, n, {
                                                  configurable: !0,
                                                  enumerable: !1,
                                                  value: function () {
                                                      var n =
                                                              Array.prototype.slice.call(
                                                                  arguments
                                                              ),
                                                          f = r.apply(this, n);
                                                      return (
                                                          i.each(
                                                              u._chartjs
                                                                  .listeners,
                                                              function (i) {
                                                                  "function" ==
                                                                      typeof i[
                                                                          t
                                                                      ] &&
                                                                      i[
                                                                          t
                                                                      ].apply(
                                                                          i,
                                                                          n
                                                                      );
                                                              }
                                                          ),
                                                          f
                                                      );
                                                  },
                                              });
                                          })),
                                    (n._data = e));
                                n.resyncElements();
                            },
                            update: i.noop,
                            transition: function (n) {
                                for (
                                    var t = this.getMeta(),
                                        r = t.data || [],
                                        u = r.length,
                                        i = 0;
                                    i < u;
                                    ++i
                                )
                                    r[i].transition(n);
                                t.dataset && t.dataset.transition(n);
                            },
                            draw: function () {
                                var n = this.getMeta(),
                                    i = n.data || [],
                                    r = i.length,
                                    t = 0;
                                for (n.dataset && n.dataset.draw(); t < r; ++t)
                                    i[t].draw();
                            },
                            removeHoverStyle: function (n, t) {
                                var u =
                                        this.chart.data.datasets[
                                            n._datasetIndex
                                        ],
                                    f = n._index,
                                    r = n.custom || {},
                                    e = i.valueAtIndexOrDefault,
                                    o = n._model;
                                o.backgroundColor = r.backgroundColor
                                    ? r.backgroundColor
                                    : e(
                                          u.backgroundColor,
                                          f,
                                          t.backgroundColor
                                      );
                                o.borderColor = r.borderColor
                                    ? r.borderColor
                                    : e(u.borderColor, f, t.borderColor);
                                o.borderWidth = r.borderWidth
                                    ? r.borderWidth
                                    : e(u.borderWidth, f, t.borderWidth);
                            },
                            setHoverStyle: function (n) {
                                var u =
                                        this.chart.data.datasets[
                                            n._datasetIndex
                                        ],
                                    f = n._index,
                                    t = n.custom || {},
                                    e = i.valueAtIndexOrDefault,
                                    o = i.getHoverColor,
                                    r = n._model;
                                r.backgroundColor = t.hoverBackgroundColor
                                    ? t.hoverBackgroundColor
                                    : e(
                                          u.hoverBackgroundColor,
                                          f,
                                          o(r.backgroundColor)
                                      );
                                r.borderColor = t.hoverBorderColor
                                    ? t.hoverBorderColor
                                    : e(
                                          u.hoverBorderColor,
                                          f,
                                          o(r.borderColor)
                                      );
                                r.borderWidth = t.hoverBorderWidth
                                    ? t.hoverBorderWidth
                                    : e(u.hoverBorderWidth, f, r.borderWidth);
                            },
                            resyncElements: function () {
                                var i = this.getMeta(),
                                    r = this.getDataset().data,
                                    n = i.data.length,
                                    t = r.length;
                                t < n
                                    ? i.data.splice(t, n - t)
                                    : t > n && this.insertElements(n, t - n);
                            },
                            insertElements: function (n, t) {
                                for (var i = 0; i < t; ++i)
                                    this.addElementAndReset(n + i);
                            },
                            onDataPush: function () {
                                this.insertElements(
                                    this.getDataset().data.length - 1,
                                    arguments.length
                                );
                            },
                            onDataPop: function () {
                                this.getMeta().data.pop();
                            },
                            onDataShift: function () {
                                this.getMeta().data.shift();
                            },
                            onDataSplice: function (n, t) {
                                this.getMeta().data.splice(n, t);
                                this.insertElements(n, arguments.length - 2);
                            },
                            onDataUnshift: function () {
                                this.insertElements(0, arguments.length);
                            },
                        });
                        n.DatasetController.extend = i.inherits;
                    };
                },
                { 45: 45 },
            ],
            25: [
                function (n, t) {
                    "use strict";
                    var i = n(45);
                    t.exports = {
                        _set: function (n, t) {
                            return i.merge(this[n] || (this[n] = {}), t);
                        },
                    };
                },
                { 45: 45 },
            ],
            26: [
                function (n, t) {
                    "use strict";
                    var u = n(3),
                        i = n(45),
                        r = function (n) {
                            i.extend(this, n);
                            this.initialize.apply(this, arguments);
                        };
                    i.extend(r.prototype, {
                        initialize: function () {
                            this.hidden = !1;
                        },
                        pivot: function () {
                            var n = this;
                            return (
                                n._view || (n._view = i.clone(n._model)),
                                (n._start = {}),
                                n
                            );
                        },
                        transition: function (n) {
                            var t = this,
                                i = t._model,
                                r = t._start,
                                f = t._view;
                            return i && 1 !== n
                                ? (f || (f = t._view = {}),
                                  r || (r = t._start = {}),
                                  (function (n, t, i, r) {
                                      for (
                                          var f,
                                              l,
                                              o,
                                              e,
                                              h,
                                              a,
                                              v,
                                              y = Object.keys(i),
                                              s = 0,
                                              c = y.length;
                                          s < c;
                                          ++s
                                      )
                                          if (
                                              ((e = i[(f = y[s])]),
                                              t.hasOwnProperty(f) || (t[f] = e),
                                              (l = t[f]) !== e && "_" !== f[0])
                                          ) {
                                              if (
                                                  (n.hasOwnProperty(f) ||
                                                      (n[f] = l),
                                                  (h = typeof e) ==
                                                      typeof (o = n[f]))
                                              )
                                                  if ("string" === h) {
                                                      if (
                                                          (a = u(o)).valid &&
                                                          (v = u(e)).valid
                                                      ) {
                                                          t[f] = v
                                                              .mix(a, r)
                                                              .rgbString();
                                                          continue;
                                                      }
                                                  } else if (
                                                      "number" === h &&
                                                      isFinite(o) &&
                                                      isFinite(e)
                                                  ) {
                                                      t[f] = o + (e - o) * r;
                                                      continue;
                                                  }
                                              t[f] = e;
                                          }
                                  })(r, f, i, n),
                                  t)
                                : ((t._view = i), (t._start = null), t);
                        },
                        tooltipPosition: function () {
                            return { x: this._model.x, y: this._model.y };
                        },
                        hasValue: function () {
                            return (
                                i.isNumber(this._model.x) &&
                                i.isNumber(this._model.y)
                            );
                        },
                    });
                    r.extend = i.inherits;
                    t.exports = r;
                },
                { 3: 3, 45: 45 },
            ],
            27: [
                function (n, t) {
                    "use strict";
                    var r = n(3),
                        u = n(25),
                        i = n(45);
                    t.exports = function (n) {
                        function t(n, t, i) {
                            var r;
                            return (
                                "string" == typeof n
                                    ? ((r = parseInt(n, 10)),
                                      -1 !== n.indexOf("%") &&
                                          (r = (r / 100) * t.parentNode[i]))
                                    : (r = n),
                                r
                            );
                        }
                        function f(n) {
                            return null != n && "none" !== n;
                        }
                        function e(n, i, r) {
                            var u = document.defaultView,
                                e = n.parentNode,
                                o = u.getComputedStyle(n)[i],
                                s = u.getComputedStyle(e)[i],
                                h = f(o),
                                c = f(s),
                                l = Number.POSITIVE_INFINITY;
                            return h || c
                                ? Math.min(
                                      h ? t(o, n, r) : l,
                                      c ? t(s, e, r) : l
                                  )
                                : "none";
                        }
                        i.configMerge = function () {
                            return i.merge(
                                i.clone(arguments[0]),
                                [].slice.call(arguments, 1),
                                {
                                    merger: function (t, r, u, f) {
                                        var o = r[t] || {},
                                            e = u[t];
                                        "scales" === t
                                            ? (r[t] = i.scaleMerge(o, e))
                                            : "scale" === t
                                            ? (r[t] = i.merge(o, [
                                                  n.scaleService.getScaleDefaults(
                                                      e.type
                                                  ),
                                                  e,
                                              ]))
                                            : i._merger(t, r, u, f);
                                    },
                                }
                            );
                        };
                        i.scaleMerge = function () {
                            return i.merge(
                                i.clone(arguments[0]),
                                [].slice.call(arguments, 1),
                                {
                                    merger: function (t, r, u, f) {
                                        if ("xAxes" === t || "yAxes" === t) {
                                            var e,
                                                s,
                                                o,
                                                h = u[t].length;
                                            for (
                                                r[t] || (r[t] = []), e = 0;
                                                e < h;
                                                ++e
                                            )
                                                (o = u[t][e]),
                                                    (s = i.valueOrDefault(
                                                        o.type,
                                                        "xAxes" === t
                                                            ? "category"
                                                            : "linear"
                                                    )),
                                                    e >= r[t].length &&
                                                        r[t].push({}),
                                                    !r[t][e].type ||
                                                    (o.type &&
                                                        o.type !== r[t][e].type)
                                                        ? i.merge(r[t][e], [
                                                              n.scaleService.getScaleDefaults(
                                                                  s
                                                              ),
                                                              o,
                                                          ])
                                                        : i.merge(r[t][e], o);
                                        } else i._merger(t, r, u, f);
                                    },
                                }
                            );
                        };
                        i.where = function (n, t) {
                            if (i.isArray(n) && Array.prototype.filter)
                                return n.filter(t);
                            var r = [];
                            return (
                                i.each(n, function (n) {
                                    t(n) && r.push(n);
                                }),
                                r
                            );
                        };
                        i.findIndex = Array.prototype.findIndex
                            ? function (n, t, i) {
                                  return n.findIndex(t, i);
                              }
                            : function (n, t, i) {
                                  i = void 0 === i ? n : i;
                                  for (var r = 0, u = n.length; r < u; ++r)
                                      if (t.call(i, n[r], r, n)) return r;
                                  return -1;
                              };
                        i.findNextWhere = function (n, t, r) {
                            var u, f;
                            for (
                                i.isNullOrUndef(r) && (r = -1), u = r + 1;
                                u < n.length;
                                u++
                            )
                                if (((f = n[u]), t(f))) return f;
                        };
                        i.findPreviousWhere = function (n, t, r) {
                            var u, f;
                            for (
                                i.isNullOrUndef(r) && (r = n.length), u = r - 1;
                                u >= 0;
                                u--
                            )
                                if (((f = n[u]), t(f))) return f;
                        };
                        i.isNumber = function (n) {
                            return !isNaN(parseFloat(n)) && isFinite(n);
                        };
                        i.almostEquals = function (n, t, i) {
                            return Math.abs(n - t) < i;
                        };
                        i.almostWhole = function (n, t) {
                            var i = Math.round(n);
                            return i - t < n && i + t > n;
                        };
                        i.max = function (n) {
                            return n.reduce(function (n, t) {
                                return isNaN(t) ? n : Math.max(n, t);
                            }, Number.NEGATIVE_INFINITY);
                        };
                        i.min = function (n) {
                            return n.reduce(function (n, t) {
                                return isNaN(t) ? n : Math.min(n, t);
                            }, Number.POSITIVE_INFINITY);
                        };
                        i.sign = Math.sign
                            ? function (n) {
                                  return Math.sign(n);
                              }
                            : function (n) {
                                  return 0 == (n = +n) || isNaN(n)
                                      ? n
                                      : n > 0
                                      ? 1
                                      : -1;
                              };
                        i.log10 = Math.log10
                            ? function (n) {
                                  return Math.log10(n);
                              }
                            : function (n) {
                                  var t = Math.log(n) * Math.LOG10E,
                                      i = Math.round(t);
                                  return n === Math.pow(10, i) ? i : t;
                              };
                        i.toRadians = function (n) {
                            return n * (Math.PI / 180);
                        };
                        i.toDegrees = function (n) {
                            return n * (180 / Math.PI);
                        };
                        i.getAngleFromPoint = function (n, t) {
                            var i = t.x - n.x,
                                r = t.y - n.y,
                                f = Math.sqrt(i * i + r * r),
                                u = Math.atan2(r, i);
                            return (
                                u < -0.5 * Math.PI && (u += 2 * Math.PI),
                                { angle: u, distance: f }
                            );
                        };
                        i.distanceBetweenPoints = function (n, t) {
                            return Math.sqrt(
                                Math.pow(t.x - n.x, 2) + Math.pow(t.y - n.y, 2)
                            );
                        };
                        i.aliasPixel = function (n) {
                            return n % 2 == 0 ? 0 : 0.5;
                        };
                        i.splineCurve = function (n, t, i, r) {
                            var f = n.skip ? t : n,
                                u = t,
                                e = i.skip ? t : i,
                                o = Math.sqrt(
                                    Math.pow(u.x - f.x, 2) +
                                        Math.pow(u.y - f.y, 2)
                                ),
                                s = Math.sqrt(
                                    Math.pow(e.x - u.x, 2) +
                                        Math.pow(e.y - u.y, 2)
                                ),
                                h = o / (o + s),
                                c = s / (o + s),
                                l = r * (h = isNaN(h) ? 0 : h),
                                a = r * (c = isNaN(c) ? 0 : c);
                            return {
                                previous: {
                                    x: u.x - l * (e.x - f.x),
                                    y: u.y - l * (e.y - f.y),
                                },
                                next: {
                                    x: u.x + a * (e.x - f.x),
                                    y: u.y + a * (e.y - f.y),
                                },
                            };
                        };
                        i.EPSILON = Number.EPSILON || 1e-14;
                        i.splineCurveMonotone = function (n) {
                            for (
                                var f,
                                    t,
                                    u,
                                    h,
                                    c,
                                    l,
                                    v,
                                    o,
                                    e = (n || []).map(function (n) {
                                        return {
                                            model: n._model,
                                            deltaK: 0,
                                            mK: 0,
                                        };
                                    }),
                                    s = e.length,
                                    a,
                                    r = 0;
                                r < s;
                                ++r
                            )
                                (t = e[r]).model.skip ||
                                    (((f = r > 0 ? e[r - 1] : null),
                                    (u = r < s - 1 ? e[r + 1] : null) &&
                                        !u.model.skip) &&
                                        ((a = u.model.x - t.model.x),
                                        (t.deltaK =
                                            0 !== a
                                                ? (u.model.y - t.model.y) / a
                                                : 0)),
                                    (t.mK =
                                        !f || f.model.skip
                                            ? t.deltaK
                                            : !u || u.model.skip
                                            ? f.deltaK
                                            : this.sign(f.deltaK) !==
                                              this.sign(t.deltaK)
                                            ? 0
                                            : (f.deltaK + t.deltaK) / 2));
                            for (r = 0; r < s - 1; ++r)
                                (t = e[r]),
                                    (u = e[r + 1]),
                                    t.model.skip ||
                                        u.model.skip ||
                                        (i.almostEquals(
                                            t.deltaK,
                                            0,
                                            this.EPSILON
                                        )
                                            ? (t.mK = u.mK = 0)
                                            : ((h = t.mK / t.deltaK),
                                              (c = u.mK / t.deltaK),
                                              (v =
                                                  Math.pow(h, 2) +
                                                  Math.pow(c, 2)) <= 9 ||
                                                  ((l = 3 / Math.sqrt(v)),
                                                  (t.mK = h * l * t.deltaK),
                                                  (u.mK = c * l * t.deltaK))));
                            for (r = 0; r < s; ++r)
                                (t = e[r]).model.skip ||
                                    ((f = r > 0 ? e[r - 1] : null),
                                    (u = r < s - 1 ? e[r + 1] : null),
                                    f &&
                                        !f.model.skip &&
                                        ((o = (t.model.x - f.model.x) / 3),
                                        (t.model.controlPointPreviousX =
                                            t.model.x - o),
                                        (t.model.controlPointPreviousY =
                                            t.model.y - o * t.mK)),
                                    u &&
                                        !u.model.skip &&
                                        ((o = (u.model.x - t.model.x) / 3),
                                        (t.model.controlPointNextX =
                                            t.model.x + o),
                                        (t.model.controlPointNextY =
                                            t.model.y + o * t.mK)));
                        };
                        i.nextItem = function (n, t, i) {
                            return i
                                ? t >= n.length - 1
                                    ? n[0]
                                    : n[t + 1]
                                : t >= n.length - 1
                                ? n[n.length - 1]
                                : n[t + 1];
                        };
                        i.previousItem = function (n, t, i) {
                            return i
                                ? t <= 0
                                    ? n[n.length - 1]
                                    : n[t - 1]
                                : t <= 0
                                ? n[0]
                                : n[t - 1];
                        };
                        i.niceNum = function (n, t) {
                            var u = Math.floor(i.log10(n)),
                                r = n / Math.pow(10, u);
                            return (
                                (t
                                    ? r < 1.5
                                        ? 1
                                        : r < 3
                                        ? 2
                                        : r < 7
                                        ? 5
                                        : 10
                                    : r <= 1
                                    ? 1
                                    : r <= 2
                                    ? 2
                                    : r <= 5
                                    ? 5
                                    : 10) * Math.pow(10, u)
                            );
                        };
                        i.requestAnimFrame =
                            "undefined" == typeof window
                                ? function (n) {
                                      n();
                                  }
                                : window.requestAnimationFrame ||
                                  window.webkitRequestAnimationFrame ||
                                  window.mozRequestAnimationFrame ||
                                  window.oRequestAnimationFrame ||
                                  window.msRequestAnimationFrame ||
                                  function (n) {
                                      return window.setTimeout(n, 1e3 / 60);
                                  };
                        i.getRelativePosition = function (n, t) {
                            var f,
                                e,
                                s = n.originalEvent || n,
                                r = n.currentTarget || n.srcElement,
                                u = r.getBoundingClientRect(),
                                o = s.touches;
                            o && o.length > 0
                                ? ((f = o[0].clientX), (e = o[0].clientY))
                                : ((f = s.clientX), (e = s.clientY));
                            var h = parseFloat(i.getStyle(r, "padding-left")),
                                c = parseFloat(i.getStyle(r, "padding-top")),
                                l = parseFloat(i.getStyle(r, "padding-right")),
                                a = parseFloat(i.getStyle(r, "padding-bottom")),
                                v = u.right - u.left - h - l,
                                y = u.bottom - u.top - c - a;
                            return {
                                x: (f = Math.round(
                                    (((f - u.left - h) / v) * r.width) /
                                        t.currentDevicePixelRatio
                                )),
                                y: (e = Math.round(
                                    (((e - u.top - c) / y) * r.height) /
                                        t.currentDevicePixelRatio
                                )),
                            };
                        };
                        i.getConstraintWidth = function (n) {
                            return e(n, "max-width", "clientWidth");
                        };
                        i.getConstraintHeight = function (n) {
                            return e(n, "max-height", "clientHeight");
                        };
                        i.getMaximumWidth = function (n) {
                            var t = n.parentNode;
                            if (!t) return n.clientWidth;
                            var f = parseInt(i.getStyle(t, "padding-left"), 10),
                                e = parseInt(
                                    i.getStyle(t, "padding-right"),
                                    10
                                ),
                                r = t.clientWidth - f - e,
                                u = i.getConstraintWidth(n);
                            return isNaN(u) ? r : Math.min(r, u);
                        };
                        i.getMaximumHeight = function (n) {
                            var t = n.parentNode;
                            if (!t) return n.clientHeight;
                            var f = parseInt(i.getStyle(t, "padding-top"), 10),
                                e = parseInt(
                                    i.getStyle(t, "padding-bottom"),
                                    10
                                ),
                                r = t.clientHeight - f - e,
                                u = i.getConstraintHeight(n);
                            return isNaN(u) ? r : Math.min(r, u);
                        };
                        i.getStyle = function (n, t) {
                            return n.currentStyle
                                ? n.currentStyle[t]
                                : document.defaultView
                                      .getComputedStyle(n, null)
                                      .getPropertyValue(t);
                        };
                        i.retinaScale = function (n, t) {
                            var r = (n.currentDevicePixelRatio =
                                t || window.devicePixelRatio || 1);
                            if (1 !== r) {
                                var i = n.canvas,
                                    u = n.height,
                                    f = n.width;
                                i.height = u * r;
                                i.width = f * r;
                                n.ctx.scale(r, r);
                                i.style.height ||
                                    i.style.width ||
                                    ((i.style.height = u + "px"),
                                    (i.style.width = f + "px"));
                            }
                        };
                        i.fontString = function (n, t, i) {
                            return t + " " + n + "px " + i;
                        };
                        i.longestText = function (n, t, r, u) {
                            var o = ((u = u || {}).data = u.data || {}),
                                f = (u.garbageCollect = u.garbageCollect || []),
                                e,
                                s,
                                h;
                            if (
                                (u.font !== t &&
                                    ((o = u.data = {}),
                                    (f = u.garbageCollect = []),
                                    (u.font = t)),
                                (n.font = t),
                                (e = 0),
                                i.each(r, function (t) {
                                    null != t && !0 !== i.isArray(t)
                                        ? (e = i.measureText(n, o, f, e, t))
                                        : i.isArray(t) &&
                                          i.each(t, function (t) {
                                              null == t ||
                                                  i.isArray(t) ||
                                                  (e = i.measureText(
                                                      n,
                                                      o,
                                                      f,
                                                      e,
                                                      t
                                                  ));
                                          });
                                }),
                                (s = f.length / 2),
                                s > r.length)
                            ) {
                                for (h = 0; h < s; h++) delete o[f[h]];
                                f.splice(0, s);
                            }
                            return e;
                        };
                        i.measureText = function (n, t, i, r, u) {
                            var f = t[u];
                            return (
                                f ||
                                    ((f = t[u] = n.measureText(u).width),
                                    i.push(u)),
                                f > r && (r = f),
                                r
                            );
                        };
                        i.numberOfLabelLines = function (n) {
                            var t = 1;
                            return (
                                i.each(n, function (n) {
                                    i.isArray(n) &&
                                        n.length > t &&
                                        (t = n.length);
                                }),
                                t
                            );
                        };
                        i.color = r
                            ? function (n) {
                                  return (
                                      n instanceof CanvasGradient &&
                                          (n = u.global.defaultColor),
                                      r(n)
                                  );
                              }
                            : function (n) {
                                  return (
                                      console.error("Color.js not found!"), n
                                  );
                              };
                        i.getHoverColor = function (n) {
                            return n instanceof CanvasPattern
                                ? n
                                : i
                                      .color(n)
                                      .saturate(0.5)
                                      .darken(0.1)
                                      .rgbString();
                        };
                    };
                },
                { 25: 25, 3: 3, 45: 45 },
            ],
            28: [
                function (n, t) {
                    "use strict";
                    function i(n, t) {
                        return n.native
                            ? { x: n.x, y: n.y }
                            : s.getRelativePosition(n, t);
                    }
                    function r(n, t) {
                        for (
                            var f, r, o, u, i = 0, e = n.data.datasets.length;
                            i < e;
                            ++i
                        )
                            if (n.isDatasetVisible(i))
                                for (
                                    r = 0,
                                        o = (f = n.getDatasetMeta(i)).data
                                            .length;
                                    r < o;
                                    ++r
                                )
                                    (u = f.data[r]), u._view.skip || t(u);
                    }
                    function u(n, t) {
                        var i = [];
                        return (
                            r(n, function (n) {
                                n.inRange(t.x, t.y) && i.push(n);
                            }),
                            i
                        );
                    }
                    function f(n, t, i, u) {
                        var f = Number.POSITIVE_INFINITY,
                            e = [];
                        return (
                            r(n, function (n) {
                                if (!i || n.inRange(t.x, t.y)) {
                                    var o = n.getCenterPoint(),
                                        r = u(t, o);
                                    r < f
                                        ? ((e = [n]), (f = r))
                                        : r === f && e.push(n);
                                }
                            }),
                            e
                        );
                    }
                    function e(n) {
                        var t = -1 !== n.indexOf("x"),
                            i = -1 !== n.indexOf("y");
                        return function (n, r) {
                            var u = t ? Math.abs(n.x - r.x) : 0,
                                f = i ? Math.abs(n.y - r.y) : 0;
                            return Math.sqrt(Math.pow(u, 2) + Math.pow(f, 2));
                        };
                    }
                    function o(n, t, r) {
                        var o = i(t, n);
                        r.axis = r.axis || "x";
                        var c = e(r.axis),
                            s = r.intersect ? u(n, o) : f(n, o, !1, c),
                            h = [];
                        return s.length
                            ? (n.data.datasets.forEach(function (t, i) {
                                  if (n.isDatasetVisible(i)) {
                                      var r =
                                          n.getDatasetMeta(i).data[s[0]._index];
                                      r && !r._view.skip && h.push(r);
                                  }
                              }),
                              h)
                            : [];
                    }
                    var s = n(45);
                    t.exports = {
                        modes: {
                            single: function (n, t) {
                                var f = i(t, n),
                                    u = [];
                                return (
                                    r(n, function (n) {
                                        if (n.inRange(f.x, f.y))
                                            return u.push(n), u;
                                    }),
                                    u.slice(0, 1)
                                );
                            },
                            label: o,
                            index: o,
                            dataset: function (n, t, r) {
                                var s = i(t, n),
                                    h,
                                    o;
                                return (
                                    (r.axis = r.axis || "xy"),
                                    (h = e(r.axis)),
                                    (o = r.intersect
                                        ? u(n, s)
                                        : f(n, s, !1, h)),
                                    o.length > 0 &&
                                        (o = n.getDatasetMeta(
                                            o[0]._datasetIndex
                                        ).data),
                                    o
                                );
                            },
                            "x-axis": function (n, t) {
                                return o(n, t, { intersect: !1 });
                            },
                            point: function (n, t) {
                                return u(n, i(t, n));
                            },
                            nearest: function (n, t, r) {
                                var s = i(t, n),
                                    o,
                                    u;
                                return (
                                    (r.axis = r.axis || "xy"),
                                    (o = e(r.axis)),
                                    (u = f(n, s, r.intersect, o)),
                                    u.length > 1 &&
                                        u.sort(function (n, t) {
                                            var i = n.getArea() - t.getArea();
                                            return (
                                                0 === i &&
                                                    (i =
                                                        n._datasetIndex -
                                                        t._datasetIndex),
                                                i
                                            );
                                        }),
                                    u.slice(0, 1)
                                );
                            },
                            x: function (n, t, u) {
                                var f = i(t, n),
                                    e = [],
                                    o = !1;
                                return (
                                    r(n, function (n) {
                                        n.inXRange(f.x) && e.push(n);
                                        n.inRange(f.x, f.y) && (o = !0);
                                    }),
                                    u.intersect && !o && (e = []),
                                    e
                                );
                            },
                            y: function (n, t, u) {
                                var f = i(t, n),
                                    e = [],
                                    o = !1;
                                return (
                                    r(n, function (n) {
                                        n.inYRange(f.y) && e.push(n);
                                        n.inRange(f.x, f.y) && (o = !0);
                                    }),
                                    u.intersect && !o && (e = []),
                                    e
                                );
                            },
                        },
                    };
                },
                { 45: 45 },
            ],
            29: [
                function (n, t) {
                    "use strict";
                    n(25)._set("global", {
                        responsive: !0,
                        responsiveAnimationDuration: 0,
                        maintainAspectRatio: !0,
                        events: [
                            "mousemove",
                            "mouseout",
                            "click",
                            "touchstart",
                            "touchmove",
                        ],
                        hover: {
                            onHover: null,
                            mode: "nearest",
                            intersect: !0,
                            animationDuration: 400,
                        },
                        onClick: null,
                        defaultColor: "rgba(0,0,0,0.1)",
                        defaultFontColor: "#666",
                        defaultFontFamily:
                            "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                        defaultFontSize: 12,
                        defaultFontStyle: "normal",
                        showLines: !0,
                        elements: {},
                        layout: {
                            padding: { top: 0, right: 0, bottom: 0, left: 0 },
                        },
                    });
                    t.exports = function () {
                        var n = function (n, t) {
                            return this.construct(n, t), this;
                        };
                        return (n.Chart = n), n;
                    };
                },
                { 25: 25 },
            ],
            30: [
                function (n, t) {
                    "use strict";
                    function r(n, t) {
                        return i.where(n, function (n) {
                            return n.position === t;
                        });
                    }
                    function u(n, t) {
                        n.forEach(function (n, t) {
                            return (n._tmpIndex_ = t), n;
                        });
                        n.sort(function (n, i) {
                            var r = t ? i : n,
                                u = t ? n : i;
                            return r.weight === u.weight
                                ? r._tmpIndex_ - u._tmpIndex_
                                : r.weight - u.weight;
                        });
                        n.forEach(function (n) {
                            delete n._tmpIndex_;
                        });
                    }
                    var i = n(45);
                    t.exports = {
                        defaults: {},
                        addBox: function (n, t) {
                            n.boxes || (n.boxes = []);
                            t.fullWidth = t.fullWidth || !1;
                            t.position = t.position || "top";
                            t.weight = t.weight || 0;
                            n.boxes.push(t);
                        },
                        removeBox: function (n, t) {
                            var i = n.boxes ? n.boxes.indexOf(t) : -1;
                            -1 !== i && n.boxes.splice(i, 1);
                        },
                        configure: function (n, t, i) {
                            for (
                                var r,
                                    f = ["fullWidth", "position", "weight"],
                                    e = f.length,
                                    u = 0;
                                u < e;
                                ++u
                            )
                                (r = f[u]),
                                    i.hasOwnProperty(r) && (t[r] = i[r]);
                        },
                        update: function (n, t, f) {
                            function yt(n) {
                                var t = i.findNextWhere(st, function (t) {
                                        return t.box === n;
                                    }),
                                    r;
                                t &&
                                    (n.isHorizontal()
                                        ? ((r = {
                                              left: Math.max(e, ut),
                                              right: Math.max(y, ft),
                                              top: 0,
                                              bottom: 0,
                                          }),
                                          n.update(
                                              n.fullWidth ? rt : v,
                                              ot / 2,
                                              r
                                          ))
                                        : n.update(t.minSize.width, c));
                            }
                            function vt(n) {
                                n.isHorizontal()
                                    ? ((n.left = n.fullWidth ? w : e),
                                      (n.right = n.fullWidth ? t - tt : e + v),
                                      (n.top = g),
                                      (n.bottom = g + n.height),
                                      (g = n.bottom))
                                    : ((n.left = d),
                                      (n.right = d + n.width),
                                      (n.top = o),
                                      (n.bottom = o + c),
                                      (d = n.right));
                            }
                            var lt, at, b, k, d, g;
                            if (n) {
                                var pt = n.options.layout || {},
                                    nt = i.options.toPadding(pt.padding),
                                    w = nt.left,
                                    tt = nt.right,
                                    it = nt.top,
                                    et = nt.bottom,
                                    s = r(n.boxes, "left"),
                                    h = r(n.boxes, "right"),
                                    l = r(n.boxes, "top"),
                                    a = r(n.boxes, "bottom"),
                                    wt = r(n.boxes, "chartArea");
                                u(s, !0);
                                u(h, !1);
                                u(l, !0);
                                u(a, !1);
                                var rt = t - w - tt,
                                    ot = f - it - et,
                                    bt = ot / 2,
                                    kt = (t - rt / 2) / (s.length + h.length),
                                    dt = (f - bt) / (l.length + a.length),
                                    v = rt,
                                    c = ot,
                                    st = [];
                                i.each(s.concat(h, l, a), function (n) {
                                    var t,
                                        i = n.isHorizontal();
                                    i
                                        ? ((t = n.update(
                                              n.fullWidth ? rt : v,
                                              dt
                                          )),
                                          (c -= t.height))
                                        : ((t = n.update(kt, c)),
                                          (v -= t.width));
                                    st.push({
                                        horizontal: i,
                                        minSize: t,
                                        box: n,
                                    });
                                });
                                var ut = 0,
                                    ft = 0,
                                    ht = 0,
                                    ct = 0;
                                i.each(l.concat(a), function (n) {
                                    if (n.getPadding) {
                                        var t = n.getPadding();
                                        ut = Math.max(ut, t.left);
                                        ft = Math.max(ft, t.right);
                                    }
                                });
                                i.each(s.concat(h), function (n) {
                                    if (n.getPadding) {
                                        var t = n.getPadding();
                                        ht = Math.max(ht, t.top);
                                        ct = Math.max(ct, t.bottom);
                                    }
                                });
                                var e = w,
                                    y = tt,
                                    o = it,
                                    p = et;
                                i.each(s.concat(h), yt);
                                i.each(s, function (n) {
                                    e += n.width;
                                });
                                i.each(h, function (n) {
                                    y += n.width;
                                });
                                i.each(l.concat(a), yt);
                                i.each(l, function (n) {
                                    o += n.height;
                                });
                                i.each(a, function (n) {
                                    p += n.height;
                                });
                                i.each(s.concat(h), function (n) {
                                    var t = i.findNextWhere(st, function (t) {
                                            return t.box === n;
                                        }),
                                        r = {
                                            left: 0,
                                            right: 0,
                                            top: o,
                                            bottom: p,
                                        };
                                    t && n.update(t.minSize.width, c, r);
                                });
                                e = w;
                                y = tt;
                                o = it;
                                p = et;
                                i.each(s, function (n) {
                                    e += n.width;
                                });
                                i.each(h, function (n) {
                                    y += n.width;
                                });
                                i.each(l, function (n) {
                                    o += n.height;
                                });
                                i.each(a, function (n) {
                                    p += n.height;
                                });
                                lt = Math.max(ut - e, 0);
                                e += lt;
                                y += Math.max(ft - y, 0);
                                at = Math.max(ht - o, 0);
                                o += at;
                                p += Math.max(ct - p, 0);
                                b = f - o - p;
                                k = t - e - y;
                                (k === v && b === c) ||
                                    (i.each(s, function (n) {
                                        n.height = b;
                                    }),
                                    i.each(h, function (n) {
                                        n.height = b;
                                    }),
                                    i.each(l, function (n) {
                                        n.fullWidth || (n.width = k);
                                    }),
                                    i.each(a, function (n) {
                                        n.fullWidth || (n.width = k);
                                    }),
                                    (c = b),
                                    (v = k));
                                d = w + lt;
                                g = it + at;
                                i.each(s.concat(l), vt);
                                d += v;
                                g += c;
                                i.each(h, vt);
                                i.each(a, vt);
                                n.chartArea = {
                                    left: e,
                                    top: o,
                                    right: e + v,
                                    bottom: o + c,
                                };
                                i.each(wt, function (t) {
                                    t.left = n.chartArea.left;
                                    t.top = n.chartArea.top;
                                    t.right = n.chartArea.right;
                                    t.bottom = n.chartArea.bottom;
                                    t.update(v, c);
                                });
                            }
                        },
                    };
                },
                { 45: 45 },
            ],
            31: [
                function (n, t) {
                    "use strict";
                    var i = n(25),
                        r = n(45);
                    i._set("global", { plugins: {} });
                    t.exports = {
                        _plugins: [],
                        _cacheId: 0,
                        register: function (n) {
                            var t = this._plugins;
                            [].concat(n).forEach(function (n) {
                                -1 === t.indexOf(n) && t.push(n);
                            });
                            this._cacheId++;
                        },
                        unregister: function (n) {
                            var t = this._plugins;
                            [].concat(n).forEach(function (n) {
                                var i = t.indexOf(n);
                                -1 !== i && t.splice(i, 1);
                            });
                            this._cacheId++;
                        },
                        clear: function () {
                            this._plugins = [];
                            this._cacheId++;
                        },
                        count: function () {
                            return this._plugins.length;
                        },
                        getAll: function () {
                            return this._plugins;
                        },
                        notify: function (n, t, i) {
                            for (
                                var u,
                                    f,
                                    e,
                                    o,
                                    s = this.descriptors(n),
                                    h = s.length,
                                    r = 0;
                                r < h;
                                ++r
                            )
                                if (
                                    "function" ==
                                        typeof (o = (f = (u = s[r]).plugin)[
                                            t
                                        ]) &&
                                    ((e = [n].concat(i || [])).push(u.options),
                                    !1 === o.apply(f, e))
                                )
                                    return !1;
                            return !0;
                        },
                        descriptors: function (n) {
                            var t = n.$plugins || (n.$plugins = {});
                            if (t.id === this._cacheId) return t.descriptors;
                            var e = [],
                                u = [],
                                f = (n && n.config) || {},
                                o = (f.options && f.options.plugins) || {};
                            return (
                                this._plugins
                                    .concat(f.plugins || [])
                                    .forEach(function (n) {
                                        if (-1 === e.indexOf(n)) {
                                            var f = n.id,
                                                t = o[f];
                                            !1 !== t &&
                                                (!0 === t &&
                                                    (t = r.clone(
                                                        i.global.plugins[f]
                                                    )),
                                                e.push(n),
                                                u.push({
                                                    plugin: n,
                                                    options: t || {},
                                                }));
                                        }
                                    }),
                                (t.descriptors = u),
                                (t.id = this._cacheId),
                                u
                            );
                        },
                        _invalidate: function (n) {
                            delete n.$plugins;
                        },
                    };
                },
                { 25: 25, 45: 45 },
            ],
            32: [
                function (n, t) {
                    "use strict";
                    function u(n) {
                        for (var r = [], t = 0, i = n.length; t < i; ++t)
                            r.push(n[t].label);
                        return r;
                    }
                    function f(n, t, i) {
                        var r = n.getPixelForTick(t);
                        return (
                            i &&
                                (r -=
                                    0 === t
                                        ? (n.getPixelForTick(1) - r) / 2
                                        : (r - n.getPixelForTick(t - 1)) / 2),
                            r
                        );
                    }
                    var r = n(25),
                        e = n(26),
                        i = n(45),
                        o = n(34);
                    r._set("scale", {
                        display: !0,
                        position: "left",
                        offset: !1,
                        gridLines: {
                            display: !0,
                            color: "rgba(0, 0, 0, 0.1)",
                            lineWidth: 1,
                            drawBorder: !0,
                            drawOnChartArea: !0,
                            drawTicks: !0,
                            tickMarkLength: 10,
                            zeroLineWidth: 1,
                            zeroLineColor: "rgba(0,0,0,0.25)",
                            zeroLineBorderDash: [],
                            zeroLineBorderDashOffset: 0,
                            offsetGridLines: !1,
                            borderDash: [],
                            borderDashOffset: 0,
                        },
                        scaleLabel: {
                            display: !1,
                            labelString: "",
                            lineHeight: 1.2,
                            padding: { top: 4, bottom: 4 },
                        },
                        ticks: {
                            beginAtZero: !1,
                            minRotation: 0,
                            maxRotation: 50,
                            mirror: !1,
                            padding: 0,
                            reverse: !1,
                            display: !0,
                            autoSkip: !0,
                            autoSkipPadding: 0,
                            labelOffset: 0,
                            callback: o.formatters.values,
                            minor: {},
                            major: {},
                        },
                    });
                    t.exports = function (n) {
                        function o(n, t, r) {
                            return i.isArray(t)
                                ? i.longestText(n, r, t)
                                : n.measureText(t).width;
                        }
                        function t(n) {
                            var t = i.valueOrDefault,
                                u = r.global,
                                f = t(n.fontSize, u.defaultFontSize),
                                e = t(n.fontStyle, u.defaultFontStyle),
                                o = t(n.fontFamily, u.defaultFontFamily);
                            return {
                                size: f,
                                style: e,
                                family: o,
                                font: i.fontString(f, e, o),
                            };
                        }
                        function s(n) {
                            return i.options.toLineHeight(
                                i.valueOrDefault(n.lineHeight, 1.2),
                                i.valueOrDefault(
                                    n.fontSize,
                                    r.global.defaultFontSize
                                )
                            );
                        }
                        n.Scale = e.extend({
                            getPadding: function () {
                                return {
                                    left: this.paddingLeft || 0,
                                    top: this.paddingTop || 0,
                                    right: this.paddingRight || 0,
                                    bottom: this.paddingBottom || 0,
                                };
                            },
                            getTicks: function () {
                                return this._ticks;
                            },
                            mergeTicksOptions: function () {
                                var n = this.options.ticks,
                                    t;
                                for (t in (!1 === n.minor &&
                                    (n.minor = { display: !1 }),
                                !1 === n.major && (n.major = { display: !1 }),
                                n))
                                    "major" !== t &&
                                        "minor" !== t &&
                                        (void 0 === n.minor[t] &&
                                            (n.minor[t] = n[t]),
                                        void 0 === n.major[t] &&
                                            (n.major[t] = n[t]));
                            },
                            beforeUpdate: function () {
                                i.callback(this.options.beforeUpdate, [this]);
                            },
                            update: function (n, t, r) {
                                var f,
                                    c,
                                    o,
                                    s,
                                    e,
                                    h,
                                    u = this;
                                for (
                                    u.beforeUpdate(),
                                        u.maxWidth = n,
                                        u.maxHeight = t,
                                        u.margins = i.extend(
                                            {
                                                left: 0,
                                                right: 0,
                                                top: 0,
                                                bottom: 0,
                                            },
                                            r
                                        ),
                                        u.longestTextCache =
                                            u.longestTextCache || {},
                                        u.beforeSetDimensions(),
                                        u.setDimensions(),
                                        u.afterSetDimensions(),
                                        u.beforeDataLimits(),
                                        u.determineDataLimits(),
                                        u.afterDataLimits(),
                                        u.beforeBuildTicks(),
                                        e = u.buildTicks() || [],
                                        u.afterBuildTicks(),
                                        u.beforeTickToLabelConversion(),
                                        o =
                                            u.convertTicksToLabels(e) ||
                                            u.ticks,
                                        u.afterTickToLabelConversion(),
                                        u.ticks = o,
                                        f = 0,
                                        c = o.length;
                                    f < c;
                                    ++f
                                )
                                    (s = o[f]),
                                        (h = e[f])
                                            ? (h.label = s)
                                            : e.push(
                                                  (h = { label: s, major: !1 })
                                              );
                                return (
                                    (u._ticks = e),
                                    u.beforeCalculateTickRotation(),
                                    u.calculateTickRotation(),
                                    u.afterCalculateTickRotation(),
                                    u.beforeFit(),
                                    u.fit(),
                                    u.afterFit(),
                                    u.afterUpdate(),
                                    u.minSize
                                );
                            },
                            afterUpdate: function () {
                                i.callback(this.options.afterUpdate, [this]);
                            },
                            beforeSetDimensions: function () {
                                i.callback(this.options.beforeSetDimensions, [
                                    this,
                                ]);
                            },
                            setDimensions: function () {
                                var n = this;
                                n.isHorizontal()
                                    ? ((n.width = n.maxWidth),
                                      (n.left = 0),
                                      (n.right = n.width))
                                    : ((n.height = n.maxHeight),
                                      (n.top = 0),
                                      (n.bottom = n.height));
                                n.paddingLeft = 0;
                                n.paddingTop = 0;
                                n.paddingRight = 0;
                                n.paddingBottom = 0;
                            },
                            afterSetDimensions: function () {
                                i.callback(this.options.afterSetDimensions, [
                                    this,
                                ]);
                            },
                            beforeDataLimits: function () {
                                i.callback(this.options.beforeDataLimits, [
                                    this,
                                ]);
                            },
                            determineDataLimits: i.noop,
                            afterDataLimits: function () {
                                i.callback(this.options.afterDataLimits, [
                                    this,
                                ]);
                            },
                            beforeBuildTicks: function () {
                                i.callback(this.options.beforeBuildTicks, [
                                    this,
                                ]);
                            },
                            buildTicks: i.noop,
                            afterBuildTicks: function () {
                                i.callback(this.options.afterBuildTicks, [
                                    this,
                                ]);
                            },
                            beforeTickToLabelConversion: function () {
                                i.callback(
                                    this.options.beforeTickToLabelConversion,
                                    [this]
                                );
                            },
                            convertTicksToLabels: function () {
                                var n = this.options.ticks;
                                this.ticks = this.ticks.map(
                                    n.userCallback || n.callback,
                                    this
                                );
                            },
                            afterTickToLabelConversion: function () {
                                i.callback(
                                    this.options.afterTickToLabelConversion,
                                    [this]
                                );
                            },
                            beforeCalculateTickRotation: function () {
                                i.callback(
                                    this.options.beforeCalculateTickRotation,
                                    [this]
                                );
                            },
                            calculateTickRotation: function () {
                                var n = this,
                                    s = n.ctx,
                                    f = n.options.ticks,
                                    h = u(n._ticks),
                                    c = t(f),
                                    r,
                                    o;
                                if (
                                    ((s.font = c.font),
                                    (r = f.minRotation || 0),
                                    h.length &&
                                        n.options.display &&
                                        n.isHorizontal())
                                )
                                    for (
                                        var l,
                                            e = i.longestText(
                                                s,
                                                c.font,
                                                h,
                                                n.longestTextCache
                                            ),
                                            a = e,
                                            v =
                                                n.getPixelForTick(1) -
                                                n.getPixelForTick(0) -
                                                6;
                                        a > v && r < f.maxRotation;

                                    ) {
                                        if (
                                            ((o = i.toRadians(r)),
                                            (l = Math.cos(o)),
                                            Math.sin(o) * e > n.maxHeight)
                                        ) {
                                            r--;
                                            break;
                                        }
                                        r++;
                                        a = l * e;
                                    }
                                n.labelRotation = r;
                            },
                            afterCalculateTickRotation: function () {
                                i.callback(
                                    this.options.afterCalculateTickRotation,
                                    [this]
                                );
                            },
                            beforeFit: function () {
                                i.callback(this.options.beforeFit, [this]);
                            },
                            fit: function () {
                                var n = this,
                                    r = (n.minSize = { width: 0, height: 0 }),
                                    h = u(n._ticks),
                                    e = n.options,
                                    p = e.ticks,
                                    w = e.scaleLabel,
                                    g = e.gridLines,
                                    a = e.display,
                                    v = n.isHorizontal(),
                                    f = t(p),
                                    nt = e.gridLines.tickMarkLength,
                                    b,
                                    k,
                                    d;
                                if (
                                    (((r.width = v
                                        ? n.isFullWidth()
                                            ? n.maxWidth -
                                              n.margins.left -
                                              n.margins.right
                                            : n.maxWidth
                                        : a && g.drawTicks
                                        ? nt
                                        : 0),
                                    (r.height = v
                                        ? a && g.drawTicks
                                            ? nt
                                            : 0
                                        : n.maxHeight),
                                    w.display && a) &&
                                        ((b =
                                            s(w) +
                                            i.options.toPadding(w.padding)
                                                .height),
                                        v ? (r.height += b) : (r.width += b)),
                                    p.display && a)
                                ) {
                                    var c = i.longestText(
                                            n.ctx,
                                            f.font,
                                            h,
                                            n.longestTextCache
                                        ),
                                        tt = i.numberOfLabelLines(h),
                                        l = 0.5 * f.size,
                                        it = n.options.ticks.padding;
                                    if (v) {
                                        n.longestLabelWidth = c;
                                        var rt = i.toRadians(n.labelRotation),
                                            y = Math.cos(rt),
                                            ut =
                                                Math.sin(rt) * c +
                                                f.size * tt +
                                                l * (tt - 1) +
                                                l;
                                        r.height = Math.min(
                                            n.maxHeight,
                                            r.height + ut + it
                                        );
                                        n.ctx.font = f.font;
                                        k = o(n.ctx, h[0], f.font);
                                        d = o(n.ctx, h[h.length - 1], f.font);
                                        0 !== n.labelRotation
                                            ? ((n.paddingLeft =
                                                  "bottom" === e.position
                                                      ? y * k + 3
                                                      : y * l + 3),
                                              (n.paddingRight =
                                                  "bottom" === e.position
                                                      ? y * l + 3
                                                      : y * d + 3))
                                            : ((n.paddingLeft = k / 2 + 3),
                                              (n.paddingRight = d / 2 + 3));
                                    } else
                                        p.mirror ? (c = 0) : (c += it + l),
                                            (r.width = Math.min(
                                                n.maxWidth,
                                                r.width + c
                                            )),
                                            (n.paddingTop = f.size / 2),
                                            (n.paddingBottom = f.size / 2);
                                }
                                n.handleMargins();
                                n.width = r.width;
                                n.height = r.height;
                            },
                            handleMargins: function () {
                                var n = this;
                                n.margins &&
                                    ((n.paddingLeft = Math.max(
                                        n.paddingLeft - n.margins.left,
                                        0
                                    )),
                                    (n.paddingTop = Math.max(
                                        n.paddingTop - n.margins.top,
                                        0
                                    )),
                                    (n.paddingRight = Math.max(
                                        n.paddingRight - n.margins.right,
                                        0
                                    )),
                                    (n.paddingBottom = Math.max(
                                        n.paddingBottom - n.margins.bottom,
                                        0
                                    )));
                            },
                            afterFit: function () {
                                i.callback(this.options.afterFit, [this]);
                            },
                            isHorizontal: function () {
                                return (
                                    "top" === this.options.position ||
                                    "bottom" === this.options.position
                                );
                            },
                            isFullWidth: function () {
                                return this.options.fullWidth;
                            },
                            getRightValue: function (n) {
                                if (i.isNullOrUndef(n)) return NaN;
                                if ("number" == typeof n && !isFinite(n))
                                    return NaN;
                                if (n)
                                    if (this.isHorizontal()) {
                                        if (void 0 !== n.x)
                                            return this.getRightValue(n.x);
                                    } else if (void 0 !== n.y)
                                        return this.getRightValue(n.y);
                                return n;
                            },
                            getLabelForIndex: i.noop,
                            getPixelForValue: i.noop,
                            getValueForPixel: i.noop,
                            getPixelForTick: function (n) {
                                var t = this,
                                    u = t.options.offset,
                                    i,
                                    r,
                                    f,
                                    e;
                                return t.isHorizontal()
                                    ? ((i =
                                          (t.width -
                                              (t.paddingLeft +
                                                  t.paddingRight)) /
                                          Math.max(
                                              t._ticks.length - (u ? 0 : 1),
                                              1
                                          )),
                                      (r = i * n + t.paddingLeft),
                                      u && (r += i / 2),
                                      (f = t.left + Math.round(r)),
                                      f +
                                          (t.isFullWidth()
                                              ? t.margins.left
                                              : 0))
                                    : ((e =
                                          t.height -
                                          (t.paddingTop + t.paddingBottom)),
                                      t.top + n * (e / (t._ticks.length - 1)));
                            },
                            getPixelForDecimal: function (n) {
                                var t = this,
                                    i,
                                    r;
                                return t.isHorizontal()
                                    ? ((i =
                                          (t.width -
                                              (t.paddingLeft +
                                                  t.paddingRight)) *
                                              n +
                                          t.paddingLeft),
                                      (r = t.left + Math.round(i)),
                                      r +
                                          (t.isFullWidth()
                                              ? t.margins.left
                                              : 0))
                                    : t.top + n * t.height;
                            },
                            getBasePixel: function () {
                                return this.getPixelForValue(
                                    this.getBaseValue()
                                );
                            },
                            getBaseValue: function () {
                                var n = this.min,
                                    t = this.max;
                                return this.beginAtZero
                                    ? 0
                                    : n < 0 && t < 0
                                    ? t
                                    : n > 0 && t > 0
                                    ? n
                                    : 0;
                            },
                            _autoSkip: function (n) {
                                var r,
                                    u,
                                    s,
                                    e,
                                    t = this,
                                    l = t.isHorizontal(),
                                    o = t.options.ticks.minor,
                                    f = n.length,
                                    a = i.toRadians(t.labelRotation),
                                    v = Math.cos(a),
                                    h = t.longestLabelWidth * v,
                                    c = [];
                                for (
                                    o.maxTicksLimit && (e = o.maxTicksLimit),
                                        l &&
                                            ((r = !1),
                                            (h + o.autoSkipPadding) * f >
                                                t.width -
                                                    (t.paddingLeft +
                                                        t.paddingRight) &&
                                                (r =
                                                    1 +
                                                    Math.floor(
                                                        ((h +
                                                            o.autoSkipPadding) *
                                                            f) /
                                                            (t.width -
                                                                (t.paddingLeft +
                                                                    t.paddingRight))
                                                    )),
                                            e &&
                                                f > e &&
                                                (r = Math.max(
                                                    r,
                                                    Math.floor(f / e)
                                                ))),
                                        u = 0;
                                    u < f;
                                    u++
                                )
                                    (s = n[u]),
                                        ((r > 1 && u % r > 0) ||
                                            (u % r == 0 && u + r >= f)) &&
                                            u !== f - 1 &&
                                            delete s.label,
                                        c.push(s);
                                return c;
                            },
                            draw: function (n) {
                                var u = this,
                                    h = u.options,
                                    nt,
                                    tt,
                                    it,
                                    p,
                                    rt;
                                if (h.display) {
                                    var e = u.ctx,
                                        y = r.global,
                                        c = h.ticks.minor,
                                        st = h.ticks.major || c,
                                        o = h.gridLines,
                                        a = h.scaleLabel,
                                        w = 0 !== u.labelRotation,
                                        d = u.isHorizontal(),
                                        g = c.autoSkip
                                            ? u._autoSkip(u.getTicks())
                                            : u.getTicks(),
                                        lt = i.valueOrDefault(
                                            c.fontColor,
                                            y.defaultFontColor
                                        ),
                                        ht = t(c),
                                        at = i.valueOrDefault(
                                            st.fontColor,
                                            y.defaultFontColor
                                        ),
                                        vt = t(st),
                                        v = o.drawTicks ? o.tickMarkLength : 0,
                                        yt = i.valueOrDefault(
                                            a.fontColor,
                                            y.defaultFontColor
                                        ),
                                        pt = t(a),
                                        b = i.options.toPadding(a.padding),
                                        wt = i.toRadians(u.labelRotation),
                                        ct = [],
                                        l = u.options.gridLines.lineWidth,
                                        bt =
                                            "right" === h.position
                                                ? u.right
                                                : u.right - l - v,
                                        kt =
                                            "right" === h.position
                                                ? u.right + v
                                                : u.right,
                                        dt =
                                            "bottom" === h.position
                                                ? u.top + l
                                                : u.bottom - v - l,
                                        gt =
                                            "bottom" === h.position
                                                ? u.top + l + v
                                                : u.bottom + l;
                                    if (
                                        ((i.each(g, function (t, r) {
                                            var e,
                                                s,
                                                it,
                                                rt,
                                                ut,
                                                ft,
                                                et,
                                                ot,
                                                st,
                                                ht,
                                                lt,
                                                at,
                                                vt,
                                                p,
                                                ti,
                                                ni,
                                                b,
                                                k,
                                                nt,
                                                tt;
                                            if (!i.isNullOrUndef(t.label)) {
                                                ti = t.label;
                                                r === u.zeroLineIndex &&
                                                h.offset === o.offsetGridLines
                                                    ? ((e = o.zeroLineWidth),
                                                      (s = o.zeroLineColor),
                                                      (it =
                                                          o.zeroLineBorderDash),
                                                      (rt =
                                                          o.zeroLineBorderDashOffset))
                                                    : ((e =
                                                          i.valueAtIndexOrDefault(
                                                              o.lineWidth,
                                                              r
                                                          )),
                                                      (s =
                                                          i.valueAtIndexOrDefault(
                                                              o.color,
                                                              r
                                                          )),
                                                      (it = i.valueOrDefault(
                                                          o.borderDash,
                                                          y.borderDash
                                                      )),
                                                      (rt = i.valueOrDefault(
                                                          o.borderDashOffset,
                                                          y.borderDashOffset
                                                      )));
                                                var a = "middle",
                                                    yt = "middle",
                                                    pt = c.padding;
                                                d
                                                    ? ((ni = v + pt),
                                                      "bottom" === h.position
                                                          ? ((yt = w
                                                                ? "middle"
                                                                : "top"),
                                                            (a = w
                                                                ? "right"
                                                                : "center"),
                                                            (p = u.top + ni))
                                                          : ((yt = w
                                                                ? "middle"
                                                                : "bottom"),
                                                            (a = w
                                                                ? "left"
                                                                : "center"),
                                                            (p =
                                                                u.bottom - ni)),
                                                      (b = f(
                                                          u,
                                                          r,
                                                          o.offsetGridLines &&
                                                              g.length > 1
                                                      )),
                                                      b < u.left &&
                                                          (s = "rgba(0,0,0,0)"),
                                                      (b += i.aliasPixel(e)),
                                                      (vt =
                                                          u.getPixelForTick(r) +
                                                          c.labelOffset),
                                                      (ut = et = st = lt = b),
                                                      (ft = dt),
                                                      (ot = gt),
                                                      (ht = n.top),
                                                      (at = n.bottom + l))
                                                    : ((nt =
                                                          "left" ===
                                                          h.position),
                                                      c.mirror
                                                          ? ((a = nt
                                                                ? "left"
                                                                : "right"),
                                                            (k = pt))
                                                          : ((a = nt
                                                                ? "right"
                                                                : "left"),
                                                            (k = v + pt)),
                                                      (vt = nt
                                                          ? u.right - k
                                                          : u.left + k),
                                                      (tt = f(
                                                          u,
                                                          r,
                                                          o.offsetGridLines &&
                                                              g.length > 1
                                                      )),
                                                      tt < u.top &&
                                                          (s = "rgba(0,0,0,0)"),
                                                      (tt += i.aliasPixel(e)),
                                                      (p =
                                                          u.getPixelForTick(r) +
                                                          c.labelOffset),
                                                      (ut = bt),
                                                      (et = kt),
                                                      (st = n.left),
                                                      (lt = n.right + l),
                                                      (ft = ot = ht = at = tt));
                                                ct.push({
                                                    tx1: ut,
                                                    ty1: ft,
                                                    tx2: et,
                                                    ty2: ot,
                                                    x1: st,
                                                    y1: ht,
                                                    x2: lt,
                                                    y2: at,
                                                    labelX: vt,
                                                    labelY: p,
                                                    glWidth: e,
                                                    glColor: s,
                                                    glBorderDash: it,
                                                    glBorderDashOffset: rt,
                                                    rotation: -1 * wt,
                                                    label: ti,
                                                    major: t.major,
                                                    textBaseline: yt,
                                                    textAlign: a,
                                                });
                                            }
                                        }),
                                        i.each(ct, function (n) {
                                            var t;
                                            if (
                                                (o.display &&
                                                    (e.save(),
                                                    (e.lineWidth = n.glWidth),
                                                    (e.strokeStyle = n.glColor),
                                                    e.setLineDash &&
                                                        (e.setLineDash(
                                                            n.glBorderDash
                                                        ),
                                                        (e.lineDashOffset =
                                                            n.glBorderDashOffset)),
                                                    e.beginPath(),
                                                    o.drawTicks &&
                                                        (e.moveTo(n.tx1, n.ty1),
                                                        e.lineTo(n.tx2, n.ty2)),
                                                    o.drawOnChartArea &&
                                                        (e.moveTo(n.x1, n.y1),
                                                        e.lineTo(n.x2, n.y2)),
                                                    e.stroke(),
                                                    e.restore()),
                                                c.display)
                                            ) {
                                                if (
                                                    (e.save(),
                                                    e.translate(
                                                        n.labelX,
                                                        n.labelY
                                                    ),
                                                    e.rotate(n.rotation),
                                                    (e.font = n.major
                                                        ? vt.font
                                                        : ht.font),
                                                    (e.fillStyle = n.major
                                                        ? at
                                                        : lt),
                                                    (e.textBaseline =
                                                        n.textBaseline),
                                                    (e.textAlign = n.textAlign),
                                                    (t = n.label),
                                                    i.isArray(t))
                                                )
                                                    for (
                                                        var f = t.length,
                                                            s = 1.5 * ht.size,
                                                            h = u.isHorizontal()
                                                                ? 0
                                                                : (-s *
                                                                      (f - 1)) /
                                                                  2,
                                                            r = 0;
                                                        r < f;
                                                        ++r
                                                    )
                                                        e.fillText(
                                                            "" + t[r],
                                                            0,
                                                            h
                                                        ),
                                                            (h += s);
                                                else e.fillText(t, 0, 0);
                                                e.restore();
                                            }
                                        }),
                                        a.display) &&
                                            ((it = 0),
                                            (p = s(a) / 2),
                                            d
                                                ? ((nt =
                                                      u.left +
                                                      (u.right - u.left) / 2),
                                                  (tt =
                                                      "bottom" === h.position
                                                          ? u.bottom -
                                                            p -
                                                            b.bottom
                                                          : u.top + p + b.top))
                                                : ((rt = "left" === h.position),
                                                  (nt = rt
                                                      ? u.left + p + b.top
                                                      : u.right - p - b.top),
                                                  (tt =
                                                      u.top +
                                                      (u.bottom - u.top) / 2),
                                                  (it = rt
                                                      ? -0.5 * Math.PI
                                                      : 0.5 * Math.PI)),
                                            e.save(),
                                            e.translate(nt, tt),
                                            e.rotate(it),
                                            (e.textAlign = "center"),
                                            (e.textBaseline = "middle"),
                                            (e.fillStyle = yt),
                                            (e.font = pt.font),
                                            e.fillText(a.labelString, 0, 0),
                                            e.restore()),
                                        o.drawBorder)
                                    ) {
                                        e.lineWidth = i.valueAtIndexOrDefault(
                                            o.lineWidth,
                                            0
                                        );
                                        e.strokeStyle = i.valueAtIndexOrDefault(
                                            o.color,
                                            0
                                        );
                                        var ut = u.left,
                                            ft = u.right + l,
                                            et = u.top,
                                            ot = u.bottom + l,
                                            k = i.aliasPixel(e.lineWidth);
                                        d
                                            ? ((et = ot =
                                                  "top" === h.position
                                                      ? u.bottom
                                                      : u.top),
                                              (et += k),
                                              (ot += k))
                                            : ((ut = ft =
                                                  "left" === h.position
                                                      ? u.right
                                                      : u.left),
                                              (ut += k),
                                              (ft += k));
                                        e.beginPath();
                                        e.moveTo(ut, et);
                                        e.lineTo(ft, ot);
                                        e.stroke();
                                    }
                                }
                            },
                        });
                    };
                },
                { 25: 25, 26: 26, 34: 34, 45: 45 },
            ],
            33: [
                function (n, t) {
                    "use strict";
                    var r = n(25),
                        i = n(45),
                        u = n(30);
                    t.exports = function (n) {
                        n.scaleService = {
                            constructors: {},
                            defaults: {},
                            registerScaleType: function (n, t, r) {
                                this.constructors[n] = t;
                                this.defaults[n] = i.clone(r);
                            },
                            getScaleConstructor: function (n) {
                                if (this.constructors.hasOwnProperty(n))
                                    return this.constructors[n];
                            },
                            getScaleDefaults: function (n) {
                                return this.defaults.hasOwnProperty(n)
                                    ? i.merge({}, [r.scale, this.defaults[n]])
                                    : {};
                            },
                            updateScaleDefaults: function (n, t) {
                                this.defaults.hasOwnProperty(n) &&
                                    (this.defaults[n] = i.extend(
                                        this.defaults[n],
                                        t
                                    ));
                            },
                            addScalesToLayout: function (n) {
                                i.each(n.scales, function (t) {
                                    t.fullWidth = t.options.fullWidth;
                                    t.position = t.options.position;
                                    t.weight = t.options.weight;
                                    u.addBox(n, t);
                                });
                            },
                        };
                    };
                },
                { 25: 25, 30: 30, 45: 45 },
            ],
            34: [
                function (n, t) {
                    "use strict";
                    var i = n(45);
                    t.exports = {
                        formatters: {
                            values: function (n) {
                                return i.isArray(n) ? n : "" + n;
                            },
                            linear: function (n, t, r) {
                                var e =
                                        r.length > 3
                                            ? r[2] - r[1]
                                            : r[1] - r[0],
                                    o,
                                    u,
                                    f;
                                return (
                                    Math.abs(e) > 1 &&
                                        n !== Math.floor(n) &&
                                        (e = n - Math.floor(n)),
                                    (o = i.log10(Math.abs(e))),
                                    (u = ""),
                                    0 !== n
                                        ? ((f = -1 * Math.floor(o)),
                                          (f = Math.max(Math.min(f, 20), 0)),
                                          (u = n.toFixed(f)))
                                        : (u = "0"),
                                    u
                                );
                            },
                            logarithmic: function (n, t, r) {
                                var u =
                                    n / Math.pow(10, Math.floor(i.log10(n)));
                                return 0 === n
                                    ? "0"
                                    : 1 === u ||
                                      2 === u ||
                                      5 === u ||
                                      0 === t ||
                                      t === r.length - 1
                                    ? n.toExponential()
                                    : "";
                            },
                        },
                    };
                },
                { 45: 45 },
            ],
            35: [
                function (n, t) {
                    "use strict";
                    var r = n(25),
                        u = n(26),
                        i = n(45);
                    r._set("global", {
                        tooltips: {
                            enabled: !0,
                            custom: null,
                            mode: "nearest",
                            position: "average",
                            intersect: !0,
                            backgroundColor: "rgba(0,0,0,0.8)",
                            titleFontStyle: "bold",
                            titleSpacing: 2,
                            titleMarginBottom: 6,
                            titleFontColor: "#fff",
                            titleAlign: "left",
                            bodySpacing: 2,
                            bodyFontColor: "#fff",
                            bodyAlign: "left",
                            footerFontStyle: "bold",
                            footerSpacing: 2,
                            footerMarginTop: 6,
                            footerFontColor: "#fff",
                            footerAlign: "left",
                            yPadding: 6,
                            xPadding: 6,
                            caretPadding: 2,
                            caretSize: 5,
                            cornerRadius: 6,
                            multiKeyBackground: "#fff",
                            displayColors: !0,
                            borderColor: "rgba(0,0,0,0)",
                            borderWidth: 0,
                            callbacks: {
                                beforeTitle: i.noop,
                                title: function (n, t) {
                                    var r = "",
                                        u = t.labels,
                                        f = u ? u.length : 0,
                                        i;
                                    return (
                                        n.length > 0 &&
                                            ((i = n[0]),
                                            i.xLabel
                                                ? (r = i.xLabel)
                                                : f > 0 &&
                                                  i.index < f &&
                                                  (r = u[i.index])),
                                        r
                                    );
                                },
                                afterTitle: i.noop,
                                beforeBody: i.noop,
                                beforeLabel: i.noop,
                                label: function (n, t) {
                                    var i =
                                        t.datasets[n.datasetIndex].label || "";
                                    return i && (i += ": "), i + n.yLabel;
                                },
                                labelColor: function (n, t) {
                                    var i = t.getDatasetMeta(n.datasetIndex)
                                        .data[n.index]._view;
                                    return {
                                        borderColor: i.borderColor,
                                        backgroundColor: i.backgroundColor,
                                    };
                                },
                                labelTextColor: function () {
                                    return this._options.bodyFontColor;
                                },
                                afterLabel: i.noop,
                                afterBody: i.noop,
                                beforeFooter: i.noop,
                                footer: i.noop,
                                afterFooter: i.noop,
                            },
                        },
                    });
                    t.exports = function (n) {
                        function t(n, t) {
                            var r = i.color(n);
                            return r.alpha(t * r.alpha()).rgbaString();
                        }
                        function f(n, t) {
                            return (
                                t &&
                                    (i.isArray(t)
                                        ? Array.prototype.push.apply(n, t)
                                        : n.push(t)),
                                n
                            );
                        }
                        function e(n) {
                            var t = r.global,
                                u = i.valueOrDefault;
                            return {
                                xPadding: n.xPadding,
                                yPadding: n.yPadding,
                                xAlign: n.xAlign,
                                yAlign: n.yAlign,
                                bodyFontColor: n.bodyFontColor,
                                _bodyFontFamily: u(
                                    n.bodyFontFamily,
                                    t.defaultFontFamily
                                ),
                                _bodyFontStyle: u(
                                    n.bodyFontStyle,
                                    t.defaultFontStyle
                                ),
                                _bodyAlign: n.bodyAlign,
                                bodyFontSize: u(
                                    n.bodyFontSize,
                                    t.defaultFontSize
                                ),
                                bodySpacing: n.bodySpacing,
                                titleFontColor: n.titleFontColor,
                                _titleFontFamily: u(
                                    n.titleFontFamily,
                                    t.defaultFontFamily
                                ),
                                _titleFontStyle: u(
                                    n.titleFontStyle,
                                    t.defaultFontStyle
                                ),
                                titleFontSize: u(
                                    n.titleFontSize,
                                    t.defaultFontSize
                                ),
                                _titleAlign: n.titleAlign,
                                titleSpacing: n.titleSpacing,
                                titleMarginBottom: n.titleMarginBottom,
                                footerFontColor: n.footerFontColor,
                                _footerFontFamily: u(
                                    n.footerFontFamily,
                                    t.defaultFontFamily
                                ),
                                _footerFontStyle: u(
                                    n.footerFontStyle,
                                    t.defaultFontStyle
                                ),
                                footerFontSize: u(
                                    n.footerFontSize,
                                    t.defaultFontSize
                                ),
                                _footerAlign: n.footerAlign,
                                footerSpacing: n.footerSpacing,
                                footerMarginTop: n.footerMarginTop,
                                caretSize: n.caretSize,
                                cornerRadius: n.cornerRadius,
                                backgroundColor: n.backgroundColor,
                                opacity: 0,
                                legendColorBackground: n.multiKeyBackground,
                                displayColors: n.displayColors,
                                borderColor: n.borderColor,
                                borderWidth: n.borderWidth,
                            };
                        }
                        n.Tooltip = u.extend({
                            initialize: function () {
                                this._model = e(this._options);
                                this._lastActive = [];
                            },
                            getTitle: function () {
                                var n = this._options.callbacks,
                                    i = n.beforeTitle.apply(this, arguments),
                                    r = n.title.apply(this, arguments),
                                    u = n.afterTitle.apply(this, arguments),
                                    t = [];
                                return f((t = f((t = f(t, i)), r)), u);
                            },
                            getBeforeBody: function () {
                                var n =
                                    this._options.callbacks.beforeBody.apply(
                                        this,
                                        arguments
                                    );
                                return i.isArray(n)
                                    ? n
                                    : void 0 !== n
                                    ? [n]
                                    : [];
                            },
                            getBody: function (n, t) {
                                var r = this,
                                    u = r._options.callbacks,
                                    e = [];
                                return (
                                    i.each(n, function (n) {
                                        var i = {
                                            before: [],
                                            lines: [],
                                            after: [],
                                        };
                                        f(
                                            i.before,
                                            u.beforeLabel.call(r, n, t)
                                        );
                                        f(i.lines, u.label.call(r, n, t));
                                        f(i.after, u.afterLabel.call(r, n, t));
                                        e.push(i);
                                    }),
                                    e
                                );
                            },
                            getAfterBody: function () {
                                var n = this._options.callbacks.afterBody.apply(
                                    this,
                                    arguments
                                );
                                return i.isArray(n)
                                    ? n
                                    : void 0 !== n
                                    ? [n]
                                    : [];
                            },
                            getFooter: function () {
                                var n = this._options.callbacks,
                                    i = n.beforeFooter.apply(this, arguments),
                                    r = n.footer.apply(this, arguments),
                                    u = n.afterFooter.apply(this, arguments),
                                    t = [];
                                return f((t = f((t = f(t, i)), r)), u);
                            },
                            update: function (t) {
                                var b,
                                    vt,
                                    y,
                                    l,
                                    et,
                                    ot,
                                    o,
                                    k,
                                    yt,
                                    st,
                                    pt,
                                    a,
                                    d,
                                    p,
                                    ht,
                                    h,
                                    g,
                                    nt,
                                    tt,
                                    it,
                                    u = this,
                                    s = u._options,
                                    c = u._model,
                                    r = (u._model = e(s)),
                                    rt = u._active,
                                    v = u._data,
                                    ut = { xAlign: c.xAlign, yAlign: c.yAlign },
                                    ct = { x: c.x, y: c.y },
                                    ft = { width: c.width, height: c.height },
                                    w = { x: c.caretX, y: c.caretY },
                                    lt,
                                    at,
                                    f;
                                if (rt.length) {
                                    for (
                                        r.opacity = 1,
                                            lt = [],
                                            at = [],
                                            w = n.Tooltip.positioners[
                                                s.position
                                            ].call(u, rt, u._eventPosition),
                                            f = [],
                                            b = 0,
                                            vt = rt.length;
                                        b < vt;
                                        ++b
                                    )
                                        f.push(
                                            ((h = rt[b]),
                                            (g = void 0),
                                            (nt = void 0),
                                            void 0,
                                            void 0,
                                            (g = h._xScale),
                                            (nt = h._yScale || h._scale),
                                            (tt = h._index),
                                            (it = h._datasetIndex),
                                            {
                                                xLabel: g
                                                    ? g.getLabelForIndex(tt, it)
                                                    : "",
                                                yLabel: nt
                                                    ? nt.getLabelForIndex(
                                                          tt,
                                                          it
                                                      )
                                                    : "",
                                                index: tt,
                                                datasetIndex: it,
                                                x: h._model.x,
                                                y: h._model.y,
                                            })
                                        );
                                    s.filter &&
                                        (f = f.filter(function (n) {
                                            return s.filter(n, v);
                                        }));
                                    s.itemSort &&
                                        (f = f.sort(function (n, t) {
                                            return s.itemSort(n, t, v);
                                        }));
                                    i.each(f, function (n) {
                                        lt.push(
                                            s.callbacks.labelColor.call(
                                                u,
                                                n,
                                                u._chart
                                            )
                                        );
                                        at.push(
                                            s.callbacks.labelTextColor.call(
                                                u,
                                                n,
                                                u._chart
                                            )
                                        );
                                    });
                                    r.title = u.getTitle(f, v);
                                    r.beforeBody = u.getBeforeBody(f, v);
                                    r.body = u.getBody(f, v);
                                    r.afterBody = u.getAfterBody(f, v);
                                    r.footer = u.getFooter(f, v);
                                    r.x = Math.round(w.x);
                                    r.y = Math.round(w.y);
                                    r.caretPadding = s.caretPadding;
                                    r.labelColors = lt;
                                    r.labelTextColors = at;
                                    r.dataPoints = f;
                                    ut = (function (n, t) {
                                        var o,
                                            s,
                                            a,
                                            v,
                                            h,
                                            i = n._model,
                                            c = n._chart,
                                            e = n._chart.chartArea,
                                            u = "center",
                                            r = "center",
                                            l,
                                            y,
                                            f;
                                        return (
                                            i.y < t.height
                                                ? (r = "top")
                                                : i.y > c.height - t.height &&
                                                  (r = "bottom"),
                                            (l = (e.left + e.right) / 2),
                                            (y = (e.top + e.bottom) / 2),
                                            "center" === r
                                                ? ((o = function (n) {
                                                      return n <= l;
                                                  }),
                                                  (s = function (n) {
                                                      return n > l;
                                                  }))
                                                : ((o = function (n) {
                                                      return n <= t.width / 2;
                                                  }),
                                                  (s = function (n) {
                                                      return (
                                                          n >=
                                                          c.width - t.width / 2
                                                      );
                                                  })),
                                            (a = function (n) {
                                                return (
                                                    n +
                                                        t.width +
                                                        i.caretSize +
                                                        i.caretPadding >
                                                    c.width
                                                );
                                            }),
                                            (v = function (n) {
                                                return (
                                                    n -
                                                        t.width -
                                                        i.caretSize -
                                                        i.caretPadding <
                                                    0
                                                );
                                            }),
                                            (h = function (n) {
                                                return n <= y
                                                    ? "top"
                                                    : "bottom";
                                            }),
                                            o(i.x)
                                                ? ((u = "left"),
                                                  a(i.x) &&
                                                      ((u = "center"),
                                                      (r = h(i.y))))
                                                : s(i.x) &&
                                                  ((u = "right"),
                                                  v(i.x) &&
                                                      ((u = "center"),
                                                      (r = h(i.y)))),
                                            (f = n._options),
                                            {
                                                xAlign: f.xAlign ? f.xAlign : u,
                                                yAlign: f.yAlign ? f.yAlign : r,
                                            }
                                        );
                                    })(
                                        this,
                                        (ft = (function (n, t) {
                                            var f = n._chart.ctx,
                                                r = 2 * t.yPadding,
                                                c = 0,
                                                a = t.body,
                                                e = a.reduce(function (n, t) {
                                                    return (
                                                        n +
                                                        t.before.length +
                                                        t.lines.length +
                                                        t.after.length
                                                    );
                                                }, 0),
                                                h,
                                                u;
                                            e +=
                                                t.beforeBody.length +
                                                t.afterBody.length;
                                            var o = t.title.length,
                                                s = t.footer.length,
                                                v = t.titleFontSize,
                                                l = t.bodyFontSize,
                                                y = t.footerFontSize;
                                            return (
                                                (r += o * v),
                                                (r += o
                                                    ? (o - 1) * t.titleSpacing
                                                    : 0),
                                                (r += o
                                                    ? t.titleMarginBottom
                                                    : 0),
                                                (r += e * l),
                                                (r += e
                                                    ? (e - 1) * t.bodySpacing
                                                    : 0),
                                                (r += s
                                                    ? t.footerMarginTop
                                                    : 0),
                                                (r += s * y),
                                                (r += s
                                                    ? (s - 1) * t.footerSpacing
                                                    : 0),
                                                (h = 0),
                                                (u = function (n) {
                                                    c = Math.max(
                                                        c,
                                                        f.measureText(n).width +
                                                            h
                                                    );
                                                }),
                                                (f.font = i.fontString(
                                                    v,
                                                    t._titleFontStyle,
                                                    t._titleFontFamily
                                                )),
                                                i.each(t.title, u),
                                                (f.font = i.fontString(
                                                    l,
                                                    t._bodyFontStyle,
                                                    t._bodyFontFamily
                                                )),
                                                i.each(
                                                    t.beforeBody.concat(
                                                        t.afterBody
                                                    ),
                                                    u
                                                ),
                                                (h = t.displayColors
                                                    ? l + 2
                                                    : 0),
                                                i.each(a, function (n) {
                                                    i.each(n.before, u);
                                                    i.each(n.lines, u);
                                                    i.each(n.after, u);
                                                }),
                                                (h = 0),
                                                (f.font = i.fontString(
                                                    y,
                                                    t._footerFontStyle,
                                                    t._footerFontFamily
                                                )),
                                                i.each(t.footer, u),
                                                {
                                                    width: (c +=
                                                        2 * t.xPadding),
                                                    height: r,
                                                }
                                            );
                                        })(this, r))
                                    );
                                    y = r;
                                    l = ft;
                                    et = ut;
                                    ot = u._chart;
                                    o = y.x;
                                    k = y.y;
                                    yt = y.caretSize;
                                    st = y.caretPadding;
                                    pt = y.cornerRadius;
                                    a = et.xAlign;
                                    d = et.yAlign;
                                    p = yt + st;
                                    ht = pt + st;
                                    "right" === a
                                        ? (o -= l.width)
                                        : "center" === a &&
                                          ((o -= l.width / 2) + l.width >
                                              ot.width &&
                                              (o = ot.width - l.width),
                                          o < 0 && (o = 0));
                                    "top" === d
                                        ? (k += p)
                                        : (k -=
                                              "bottom" === d
                                                  ? l.height + p
                                                  : l.height / 2);
                                    "center" === d
                                        ? "left" === a
                                            ? (o += p)
                                            : "right" === a && (o -= p)
                                        : "left" === a
                                        ? (o -= ht)
                                        : "right" === a && (o += ht);
                                    ct = { x: o, y: k };
                                } else r.opacity = 0;
                                return (
                                    (r.xAlign = ut.xAlign),
                                    (r.yAlign = ut.yAlign),
                                    (r.x = ct.x),
                                    (r.y = ct.y),
                                    (r.width = ft.width),
                                    (r.height = ft.height),
                                    (r.caretX = w.x),
                                    (r.caretY = w.y),
                                    (u._model = r),
                                    t && s.custom && s.custom.call(u, r),
                                    u
                                );
                            },
                            drawCaret: function (n, t) {
                                var r = this._chart.ctx,
                                    u = this._view,
                                    i = this.getCaretPosition(n, t, u);
                                r.lineTo(i.x1, i.y1);
                                r.lineTo(i.x2, i.y2);
                                r.lineTo(i.x3, i.y3);
                            },
                            getCaretPosition: function (n, t, i) {
                                var u,
                                    f,
                                    e,
                                    s,
                                    o,
                                    h,
                                    r = i.caretSize,
                                    v = i.cornerRadius,
                                    l = i.xAlign,
                                    y = i.yAlign,
                                    c = n.x,
                                    a = n.y,
                                    p = t.width,
                                    w = t.height,
                                    b;
                                return (
                                    "center" === y
                                        ? ((o = a + w / 2),
                                          "left" === l
                                              ? ((f = (u = c) - r),
                                                (e = u),
                                                (s = o + r),
                                                (h = o - r))
                                              : ((f = (u = c + p) + r),
                                                (e = u),
                                                (s = o - r),
                                                (h = o + r)))
                                        : ("left" === l
                                              ? ((u = (f = c + v + r) - r),
                                                (e = f + r))
                                              : "right" === l
                                              ? ((u = (f = c + p - v - r) - r),
                                                (e = f + r))
                                              : ((u = (f = i.caretX) - r),
                                                (e = f + r)),
                                          "top" === y)
                                        ? ((o = (s = a) - r), (h = s))
                                        : ((o = (s = a + w) + r),
                                          (h = s),
                                          (b = e),
                                          (e = u),
                                          (u = b)),
                                    { x1: u, x2: f, x3: e, y1: s, y2: o, y3: h }
                                );
                            },
                            drawTitle: function (n, r, u, f) {
                                var o = r.title,
                                    e,
                                    c,
                                    s,
                                    h;
                                if (o.length)
                                    for (
                                        u.textAlign = r._titleAlign,
                                            u.textBaseline = "top",
                                            s = r.titleFontSize,
                                            h = r.titleSpacing,
                                            u.fillStyle = t(
                                                r.titleFontColor,
                                                f
                                            ),
                                            u.font = i.fontString(
                                                s,
                                                r._titleFontStyle,
                                                r._titleFontFamily
                                            ),
                                            e = 0,
                                            c = o.length;
                                        e < c;
                                        ++e
                                    )
                                        u.fillText(o[e], n.x, n.y),
                                            (n.y += s + h),
                                            e + 1 === o.length &&
                                                (n.y +=
                                                    r.titleMarginBottom - h);
                            },
                            drawBody: function (n, r, u, f) {
                                var e = r.bodyFontSize,
                                    c = r.bodySpacing,
                                    l = r.body,
                                    s,
                                    o,
                                    h;
                                u.textAlign = r._bodyAlign;
                                u.textBaseline = "top";
                                u.font = i.fontString(
                                    e,
                                    r._bodyFontStyle,
                                    r._bodyFontFamily
                                );
                                s = 0;
                                o = function (t) {
                                    u.fillText(t, n.x + s, n.y);
                                    n.y += e + c;
                                };
                                u.fillStyle = t(r.bodyFontColor, f);
                                i.each(r.beforeBody, o);
                                h = r.displayColors;
                                s = h ? e + 2 : 0;
                                i.each(l, function (s, c) {
                                    var l = t(r.labelTextColors[c], f);
                                    u.fillStyle = l;
                                    i.each(s.before, o);
                                    i.each(s.lines, function (i) {
                                        h &&
                                            ((u.fillStyle = t(
                                                r.legendColorBackground,
                                                f
                                            )),
                                            u.fillRect(n.x, n.y, e, e),
                                            (u.lineWidth = 1),
                                            (u.strokeStyle = t(
                                                r.labelColors[c].borderColor,
                                                f
                                            )),
                                            u.strokeRect(n.x, n.y, e, e),
                                            (u.fillStyle = t(
                                                r.labelColors[c]
                                                    .backgroundColor,
                                                f
                                            )),
                                            u.fillRect(
                                                n.x + 1,
                                                n.y + 1,
                                                e - 2,
                                                e - 2
                                            ),
                                            (u.fillStyle = l));
                                        o(i);
                                    });
                                    i.each(s.after, o);
                                });
                                s = 0;
                                i.each(r.afterBody, o);
                                n.y -= c;
                            },
                            drawFooter: function (n, r, u, f) {
                                var e = r.footer;
                                e.length &&
                                    ((n.y += r.footerMarginTop),
                                    (u.textAlign = r._footerAlign),
                                    (u.textBaseline = "top"),
                                    (u.fillStyle = t(r.footerFontColor, f)),
                                    (u.font = i.fontString(
                                        r.footerFontSize,
                                        r._footerFontStyle,
                                        r._footerFontFamily
                                    )),
                                    i.each(e, function (t) {
                                        u.fillText(t, n.x, n.y);
                                        n.y +=
                                            r.footerFontSize + r.footerSpacing;
                                    }));
                            },
                            drawBackground: function (n, i, r, u, f) {
                                r.fillStyle = t(i.backgroundColor, f);
                                r.strokeStyle = t(i.borderColor, f);
                                r.lineWidth = i.borderWidth;
                                var a = i.xAlign,
                                    l = i.yAlign,
                                    e = n.x,
                                    o = n.y,
                                    h = u.width,
                                    c = u.height,
                                    s = i.cornerRadius;
                                r.beginPath();
                                r.moveTo(e + s, o);
                                "top" === l && this.drawCaret(n, u);
                                r.lineTo(e + h - s, o);
                                r.quadraticCurveTo(e + h, o, e + h, o + s);
                                "center" === l &&
                                    "right" === a &&
                                    this.drawCaret(n, u);
                                r.lineTo(e + h, o + c - s);
                                r.quadraticCurveTo(
                                    e + h,
                                    o + c,
                                    e + h - s,
                                    o + c
                                );
                                "bottom" === l && this.drawCaret(n, u);
                                r.lineTo(e + s, o + c);
                                r.quadraticCurveTo(e, o + c, e, o + c - s);
                                "center" === l &&
                                    "left" === a &&
                                    this.drawCaret(n, u);
                                r.lineTo(e, o + s);
                                r.quadraticCurveTo(e, o, e + s, o);
                                r.closePath();
                                r.fill();
                                i.borderWidth > 0 && r.stroke();
                            },
                            draw: function () {
                                var i = this._chart.ctx,
                                    n = this._view;
                                if (0 !== n.opacity) {
                                    var u = {
                                            width: n.width,
                                            height: n.height,
                                        },
                                        t = { x: n.x, y: n.y },
                                        r = Math.abs(n.opacity < 0.001)
                                            ? 0
                                            : n.opacity,
                                        f =
                                            n.title.length ||
                                            n.beforeBody.length ||
                                            n.body.length ||
                                            n.afterBody.length ||
                                            n.footer.length;
                                    this._options.enabled &&
                                        f &&
                                        (this.drawBackground(t, n, i, u, r),
                                        (t.x += n.xPadding),
                                        (t.y += n.yPadding),
                                        this.drawTitle(t, n, i, r),
                                        this.drawBody(t, n, i, r),
                                        this.drawFooter(t, n, i, r));
                                }
                            },
                            handleEvent: function (n) {
                                var u,
                                    t = this,
                                    r = t._options;
                                return (
                                    (t._lastActive = t._lastActive || []),
                                    (t._active =
                                        "mouseout" === n.type
                                            ? []
                                            : t._chart.getElementsAtEventForMode(
                                                  n,
                                                  r.mode,
                                                  r
                                              )),
                                    (u = !i.arrayEquals(
                                        t._active,
                                        t._lastActive
                                    )) &&
                                        ((t._lastActive = t._active),
                                        (r.enabled || r.custom) &&
                                            ((t._eventPosition = {
                                                x: n.x,
                                                y: n.y,
                                            }),
                                            t.update(!0),
                                            t.pivot())),
                                    u
                                );
                            },
                        });
                        n.Tooltip.positioners = {
                            average: function (n) {
                                var i, u;
                                if (!n.length) return !1;
                                for (
                                    var e = 0,
                                        o = 0,
                                        r = 0,
                                        t = 0,
                                        f = n.length;
                                    t < f;
                                    ++t
                                )
                                    (i = n[t]),
                                        i &&
                                            i.hasValue() &&
                                            ((u = i.tooltipPosition()),
                                            (e += u.x),
                                            (o += u.y),
                                            ++r);
                                return {
                                    x: Math.round(e / r),
                                    y: Math.round(o / r),
                                };
                            },
                            nearest: function (n, t) {
                                for (
                                    var f,
                                        h = t.x,
                                        c = t.y,
                                        l = Number.POSITIVE_INFINITY,
                                        r,
                                        a,
                                        e,
                                        o,
                                        u = 0,
                                        s = n.length;
                                    u < s;
                                    ++u
                                )
                                    (r = n[u]),
                                        r &&
                                            r.hasValue() &&
                                            ((a = r.getCenterPoint()),
                                            (e = i.distanceBetweenPoints(t, a)),
                                            e < l && ((l = e), (f = r)));
                                return (
                                    f &&
                                        ((o = f.tooltipPosition()),
                                        (h = o.x),
                                        (c = o.y)),
                                    { x: h, y: c }
                                );
                            },
                        };
                    };
                },
                { 25: 25, 26: 26, 45: 45 },
            ],
            36: [
                function (n, t) {
                    "use strict";
                    var i = n(25),
                        r = n(26),
                        u = n(45);
                    i._set("global", {
                        elements: {
                            arc: {
                                backgroundColor: i.global.defaultColor,
                                borderColor: "#fff",
                                borderWidth: 2,
                            },
                        },
                    });
                    t.exports = r.extend({
                        inLabelRange: function (n) {
                            var t = this._view;
                            return (
                                !!t &&
                                Math.pow(n - t.x, 2) <
                                    Math.pow(t.radius + t.hoverRadius, 2)
                            );
                        },
                        inRange: function (n, t) {
                            var i = this._view,
                                h,
                                c;
                            if (i) {
                                for (
                                    var o = u.getAngleFromPoint(i, {
                                            x: n,
                                            y: t,
                                        }),
                                        r = o.angle,
                                        s = o.distance,
                                        e = i.startAngle,
                                        f = i.endAngle;
                                    f < e;

                                )
                                    f += 2 * Math.PI;
                                for (; r > f; ) r -= 2 * Math.PI;
                                for (; r < e; ) r += 2 * Math.PI;
                                return (
                                    (h = r >= e && r <= f),
                                    (c =
                                        s >= i.innerRadius &&
                                        s <= i.outerRadius),
                                    h && c
                                );
                            }
                            return !1;
                        },
                        getCenterPoint: function () {
                            var n = this._view,
                                t = (n.startAngle + n.endAngle) / 2,
                                i = (n.innerRadius + n.outerRadius) / 2;
                            return {
                                x: n.x + Math.cos(t) * i,
                                y: n.y + Math.sin(t) * i,
                            };
                        },
                        getArea: function () {
                            var n = this._view;
                            return (
                                Math.PI *
                                ((n.endAngle - n.startAngle) / (2 * Math.PI)) *
                                (Math.pow(n.outerRadius, 2) -
                                    Math.pow(n.innerRadius, 2))
                            );
                        },
                        tooltipPosition: function () {
                            var n = this._view,
                                t =
                                    n.startAngle +
                                    (n.endAngle - n.startAngle) / 2,
                                i =
                                    (n.outerRadius - n.innerRadius) / 2 +
                                    n.innerRadius;
                            return {
                                x: n.x + Math.cos(t) * i,
                                y: n.y + Math.sin(t) * i,
                            };
                        },
                        draw: function () {
                            var t = this._chart.ctx,
                                n = this._view,
                                i = n.startAngle,
                                r = n.endAngle;
                            t.beginPath();
                            t.arc(n.x, n.y, n.outerRadius, i, r);
                            t.arc(n.x, n.y, n.innerRadius, r, i, !0);
                            t.closePath();
                            t.strokeStyle = n.borderColor;
                            t.lineWidth = n.borderWidth;
                            t.fillStyle = n.backgroundColor;
                            t.fill();
                            t.lineJoin = "bevel";
                            n.borderWidth && t.stroke();
                        },
                    });
                },
                { 25: 25, 26: 26, 45: 45 },
            ],
            37: [
                function (n, t) {
                    "use strict";
                    var r = n(25),
                        f = n(26),
                        u = n(45),
                        i = r.global;
                    r._set("global", {
                        elements: {
                            line: {
                                tension: 0.4,
                                backgroundColor: i.defaultColor,
                                borderWidth: 3,
                                borderColor: i.defaultColor,
                                borderCapStyle: "butt",
                                borderDash: [],
                                borderDashOffset: 0,
                                borderJoinStyle: "miter",
                                capBezierPoints: !0,
                                fill: !0,
                            },
                        },
                    });
                    t.exports = f.extend({
                        draw: function () {
                            var t,
                                c,
                                h,
                                r,
                                f = this._view,
                                n = this._chart.ctx,
                                l = f.spanGaps,
                                e = this._children.slice(),
                                s = i.elements.line,
                                o = -1;
                            for (
                                this._loop && e.length && e.push(e[0]),
                                    n.save(),
                                    n.lineCap =
                                        f.borderCapStyle || s.borderCapStyle,
                                    n.setLineDash &&
                                        n.setLineDash(
                                            f.borderDash || s.borderDash
                                        ),
                                    n.lineDashOffset =
                                        f.borderDashOffset ||
                                        s.borderDashOffset,
                                    n.lineJoin =
                                        f.borderJoinStyle || s.borderJoinStyle,
                                    n.lineWidth =
                                        f.borderWidth || s.borderWidth,
                                    n.strokeStyle =
                                        f.borderColor || i.defaultColor,
                                    n.beginPath(),
                                    o = -1,
                                    t = 0;
                                t < e.length;
                                ++t
                            )
                                (c = e[t]),
                                    (h = u.previousItem(e, t)),
                                    (r = c._view),
                                    0 === t
                                        ? r.skip ||
                                          (n.moveTo(r.x, r.y), (o = t))
                                        : ((h = -1 === o ? h : e[o]),
                                          r.skip ||
                                              ((o !== t - 1 && !l) || -1 === o
                                                  ? n.moveTo(r.x, r.y)
                                                  : u.canvas.lineTo(
                                                        n,
                                                        h._view,
                                                        c._view
                                                    ),
                                              (o = t)));
                            n.stroke();
                            n.restore();
                        },
                    });
                },
                { 25: 25, 26: 26, 45: 45 },
            ],
            38: [
                function (n, t) {
                    "use strict";
                    function f(n) {
                        var t = this._view;
                        return (
                            !!t && Math.abs(n - t.x) < t.radius + t.hitRadius
                        );
                    }
                    var r = n(25),
                        e = n(26),
                        u = n(45),
                        i = r.global.defaultColor;
                    r._set("global", {
                        elements: {
                            point: {
                                radius: 3,
                                pointStyle: "circle",
                                backgroundColor: i,
                                borderColor: i,
                                borderWidth: 1,
                                hitRadius: 1,
                                hoverRadius: 4,
                                hoverBorderWidth: 1,
                            },
                        },
                    });
                    t.exports = e.extend({
                        inRange: function (n, t) {
                            var i = this._view;
                            return (
                                !!i &&
                                Math.pow(n - i.x, 2) + Math.pow(t - i.y, 2) <
                                    Math.pow(i.hitRadius + i.radius, 2)
                            );
                        },
                        inLabelRange: f,
                        inXRange: f,
                        inYRange: function (n) {
                            var t = this._view;
                            return (
                                !!t &&
                                Math.abs(n - t.y) < t.radius + t.hitRadius
                            );
                        },
                        getCenterPoint: function () {
                            var n = this._view;
                            return { x: n.x, y: n.y };
                        },
                        getArea: function () {
                            return Math.PI * Math.pow(this._view.radius, 2);
                        },
                        tooltipPosition: function () {
                            var n = this._view;
                            return {
                                x: n.x,
                                y: n.y,
                                padding: n.radius + n.borderWidth,
                            };
                        },
                        draw: function (n) {
                            var f = this._view,
                                t = this._model,
                                e = this._chart.ctx,
                                l = f.pointStyle,
                                a = f.radius,
                                s = f.x,
                                h = f.y,
                                c = u.color,
                                o = 0;
                            f.skip ||
                                ((e.strokeStyle = f.borderColor || i),
                                (e.lineWidth = u.valueOrDefault(
                                    f.borderWidth,
                                    r.global.elements.point.borderWidth
                                )),
                                (e.fillStyle = f.backgroundColor || i),
                                void 0 !== n &&
                                    (t.x < n.left ||
                                        1.01 * n.right < t.x ||
                                        t.y < n.top ||
                                        1.01 * n.bottom < t.y) &&
                                    (t.x < n.left
                                        ? (o = (s - t.x) / (n.left - t.x))
                                        : 1.01 * n.right < t.x
                                        ? (o = (t.x - s) / (t.x - n.right))
                                        : t.y < n.top
                                        ? (o = (h - t.y) / (n.top - t.y))
                                        : 1.01 * n.bottom < t.y &&
                                          (o = (t.y - h) / (t.y - n.bottom)),
                                    (o = Math.round(100 * o) / 100),
                                    (e.strokeStyle = c(e.strokeStyle)
                                        .alpha(o)
                                        .rgbString()),
                                    (e.fillStyle = c(e.fillStyle)
                                        .alpha(o)
                                        .rgbString())),
                                u.canvas.drawPoint(e, l, a, s, h));
                        },
                    });
                },
                { 25: 25, 26: 26, 45: 45 },
            ],
            39: [
                function (n, t) {
                    "use strict";
                    function u(n) {
                        return void 0 !== n._view.width;
                    }
                    function i(n) {
                        var i,
                            r,
                            f,
                            e,
                            t = n._view,
                            o,
                            s;
                        return (
                            u(n)
                                ? ((o = t.width / 2),
                                  (i = t.x - o),
                                  (r = t.x + o),
                                  (f = Math.min(t.y, t.base)),
                                  (e = Math.max(t.y, t.base)))
                                : ((s = t.height / 2),
                                  (i = Math.min(t.x, t.base)),
                                  (r = Math.max(t.x, t.base)),
                                  (f = t.y - s),
                                  (e = t.y + s)),
                            { left: i, top: f, right: r, bottom: e }
                        );
                    }
                    var r = n(25),
                        f = n(26);
                    r._set("global", {
                        elements: {
                            rectangle: {
                                backgroundColor: r.global.defaultColor,
                                borderColor: r.global.defaultColor,
                                borderSkipped: "bottom",
                                borderWidth: 0,
                            },
                        },
                    });
                    t.exports = f.extend({
                        draw: function () {
                            function g(n) {
                                return d[(a + n) % 4];
                            }
                            var t,
                                i,
                                r,
                                f,
                                h,
                                c,
                                e,
                                u = this._chart.ctx,
                                n = this._view,
                                o = n.borderWidth,
                                d,
                                a,
                                s,
                                v;
                            if (
                                (n.horizontal
                                    ? ((t = n.base),
                                      (i = n.x),
                                      (r = n.y - n.height / 2),
                                      (f = n.y + n.height / 2),
                                      (h = i > t ? 1 : -1),
                                      (c = 1),
                                      (e = n.borderSkipped || "left"))
                                    : ((t = n.x - n.width / 2),
                                      (i = n.x + n.width / 2),
                                      (r = n.y),
                                      (h = 1),
                                      (c = (f = n.base) > r ? 1 : -1),
                                      (e = n.borderSkipped || "bottom")),
                                o)
                            ) {
                                var y = Math.min(
                                        Math.abs(t - i),
                                        Math.abs(r - f)
                                    ),
                                    l = (o = o > y ? y : o) / 2,
                                    p = t + ("left" !== e ? l * h : 0),
                                    w = i + ("right" !== e ? -l * h : 0),
                                    b = r + ("top" !== e ? l * c : 0),
                                    k = f + ("bottom" !== e ? -l * c : 0);
                                p !== w && ((r = b), (f = k));
                                b !== k && ((t = p), (i = w));
                            }
                            for (
                                u.beginPath(),
                                    u.fillStyle = n.backgroundColor,
                                    u.strokeStyle = n.borderColor,
                                    u.lineWidth = o,
                                    d = [
                                        [t, f],
                                        [t, r],
                                        [i, r],
                                        [i, f],
                                    ],
                                    a = [
                                        "bottom",
                                        "left",
                                        "top",
                                        "right",
                                    ].indexOf(e, 0),
                                    -1 === a && (a = 0),
                                    s = g(0),
                                    u.moveTo(s[0], s[1]),
                                    v = 1;
                                v < 4;
                                v++
                            )
                                (s = g(v)), u.lineTo(s[0], s[1]);
                            u.fill();
                            o && u.stroke();
                        },
                        height: function () {
                            var n = this._view;
                            return n.base - n.y;
                        },
                        inRange: function (n, t) {
                            var u = !1,
                                r;
                            return (
                                this._view &&
                                    ((r = i(this)),
                                    (u =
                                        n >= r.left &&
                                        n <= r.right &&
                                        t >= r.top &&
                                        t <= r.bottom)),
                                u
                            );
                        },
                        inLabelRange: function (n, t) {
                            if (!this._view) return !1;
                            var r = i(this);
                            return u(this)
                                ? n >= r.left && n <= r.right
                                : t >= r.top && t <= r.bottom;
                        },
                        inXRange: function (n) {
                            var t = i(this);
                            return n >= t.left && n <= t.right;
                        },
                        inYRange: function (n) {
                            var t = i(this);
                            return n >= t.top && n <= t.bottom;
                        },
                        getCenterPoint: function () {
                            var t,
                                i,
                                n = this._view;
                            return (
                                u(this)
                                    ? ((t = n.x), (i = (n.y + n.base) / 2))
                                    : ((t = (n.x + n.base) / 2), (i = n.y)),
                                { x: t, y: i }
                            );
                        },
                        getArea: function () {
                            var n = this._view;
                            return n.width * Math.abs(n.y - n.base);
                        },
                        tooltipPosition: function () {
                            var n = this._view;
                            return { x: n.x, y: n.y };
                        },
                    });
                },
                { 25: 25, 26: 26 },
            ],
            40: [
                function (n, t) {
                    "use strict";
                    t.exports = {};
                    t.exports.Arc = n(36);
                    t.exports.Line = n(37);
                    t.exports.Point = n(38);
                    t.exports.Rectangle = n(39);
                },
                { 36: 36, 37: 37, 38: 38, 39: 39 },
            ],
            41: [
                function (n, t, i) {
                    "use strict";
                    var r = n(42);
                    i = t.exports = {
                        clear: function (n) {
                            n.ctx.clearRect(0, 0, n.width, n.height);
                        },
                        roundedRect: function (n, t, i, r, u, f) {
                            if (f) {
                                var e = Math.min(f, r / 2),
                                    o = Math.min(f, u / 2);
                                n.moveTo(t + e, i);
                                n.lineTo(t + r - e, i);
                                n.quadraticCurveTo(t + r, i, t + r, i + o);
                                n.lineTo(t + r, i + u - o);
                                n.quadraticCurveTo(
                                    t + r,
                                    i + u,
                                    t + r - e,
                                    i + u
                                );
                                n.lineTo(t + e, i + u);
                                n.quadraticCurveTo(t, i + u, t, i + u - o);
                                n.lineTo(t, i + o);
                                n.quadraticCurveTo(t, i, t + e, i);
                            } else n.rect(t, i, r, u);
                        },
                        drawPoint: function (n, t, i, r, u) {
                            var c, h, e, o, s, f;
                            if (
                                t &&
                                "object" == typeof t &&
                                ("[object HTMLImageElement]" ===
                                    (c = t.toString()) ||
                                    "[object HTMLCanvasElement]" === c)
                            )
                                n.drawImage(
                                    t,
                                    r - t.width / 2,
                                    u - t.height / 2,
                                    t.width,
                                    t.height
                                );
                            else if (!(isNaN(i) || i <= 0)) {
                                switch (t) {
                                    default:
                                        n.beginPath();
                                        n.arc(r, u, i, 0, 2 * Math.PI);
                                        n.closePath();
                                        n.fill();
                                        break;
                                    case "triangle":
                                        n.beginPath();
                                        s =
                                            ((h = (3 * i) / Math.sqrt(3)) *
                                                Math.sqrt(3)) /
                                            2;
                                        n.moveTo(r - h / 2, u + s / 3);
                                        n.lineTo(r + h / 2, u + s / 3);
                                        n.lineTo(r, u - (2 * s) / 3);
                                        n.closePath();
                                        n.fill();
                                        break;
                                    case "rect":
                                        f = (1 / Math.SQRT2) * i;
                                        n.beginPath();
                                        n.fillRect(r - f, u - f, 2 * f, 2 * f);
                                        n.strokeRect(
                                            r - f,
                                            u - f,
                                            2 * f,
                                            2 * f
                                        );
                                        break;
                                    case "rectRounded":
                                        var l = i / Math.SQRT2,
                                            v = r - l,
                                            y = u - l,
                                            a = Math.SQRT2 * i;
                                        n.beginPath();
                                        this.roundedRect(n, v, y, a, a, i / 2);
                                        n.closePath();
                                        n.fill();
                                        break;
                                    case "rectRot":
                                        f = (1 / Math.SQRT2) * i;
                                        n.beginPath();
                                        n.moveTo(r - f, u);
                                        n.lineTo(r, u + f);
                                        n.lineTo(r + f, u);
                                        n.lineTo(r, u - f);
                                        n.closePath();
                                        n.fill();
                                        break;
                                    case "cross":
                                        n.beginPath();
                                        n.moveTo(r, u + i);
                                        n.lineTo(r, u - i);
                                        n.moveTo(r - i, u);
                                        n.lineTo(r + i, u);
                                        n.closePath();
                                        break;
                                    case "crossRot":
                                        n.beginPath();
                                        e = Math.cos(Math.PI / 4) * i;
                                        o = Math.sin(Math.PI / 4) * i;
                                        n.moveTo(r - e, u - o);
                                        n.lineTo(r + e, u + o);
                                        n.moveTo(r - e, u + o);
                                        n.lineTo(r + e, u - o);
                                        n.closePath();
                                        break;
                                    case "star":
                                        n.beginPath();
                                        n.moveTo(r, u + i);
                                        n.lineTo(r, u - i);
                                        n.moveTo(r - i, u);
                                        n.lineTo(r + i, u);
                                        e = Math.cos(Math.PI / 4) * i;
                                        o = Math.sin(Math.PI / 4) * i;
                                        n.moveTo(r - e, u - o);
                                        n.lineTo(r + e, u + o);
                                        n.moveTo(r - e, u + o);
                                        n.lineTo(r + e, u - o);
                                        n.closePath();
                                        break;
                                    case "line":
                                        n.beginPath();
                                        n.moveTo(r - i, u);
                                        n.lineTo(r + i, u);
                                        n.closePath();
                                        break;
                                    case "dash":
                                        n.beginPath();
                                        n.moveTo(r, u);
                                        n.lineTo(r + i, u);
                                        n.closePath();
                                }
                                n.stroke();
                            }
                        },
                        clipArea: function (n, t) {
                            n.save();
                            n.beginPath();
                            n.rect(
                                t.left,
                                t.top,
                                t.right - t.left,
                                t.bottom - t.top
                            );
                            n.clip();
                        },
                        unclipArea: function (n) {
                            n.restore();
                        },
                        lineTo: function (n, t, i, r) {
                            if (i.steppedLine)
                                return (
                                    ("after" === i.steppedLine && !r) ||
                                    ("after" !== i.steppedLine && r)
                                        ? n.lineTo(t.x, i.y)
                                        : n.lineTo(i.x, t.y),
                                    void n.lineTo(i.x, i.y)
                                );
                            i.tension
                                ? n.bezierCurveTo(
                                      r
                                          ? t.controlPointPreviousX
                                          : t.controlPointNextX,
                                      r
                                          ? t.controlPointPreviousY
                                          : t.controlPointNextY,
                                      r
                                          ? i.controlPointNextX
                                          : i.controlPointPreviousX,
                                      r
                                          ? i.controlPointNextY
                                          : i.controlPointPreviousY,
                                      i.x,
                                      i.y
                                  )
                                : n.lineTo(i.x, i.y);
                        },
                    };
                    r.clear = i.clear;
                    r.drawRoundedRectangle = function (n) {
                        n.beginPath();
                        i.roundedRect.apply(i, arguments);
                        n.closePath();
                    };
                },
                { 42: 42 },
            ],
            42: [
                function (n, t) {
                    "use strict";
                    var r,
                        i = {
                            noop: function () {},
                            uid:
                                ((r = 0),
                                function () {
                                    return r++;
                                }),
                            isNullOrUndef: function (n) {
                                return null == n;
                            },
                            isArray: Array.isArray
                                ? Array.isArray
                                : function (n) {
                                      return (
                                          "[object Array]" ===
                                          Object.prototype.toString.call(n)
                                      );
                                  },
                            isObject: function (n) {
                                return (
                                    null !== n &&
                                    "[object Object]" ===
                                        Object.prototype.toString.call(n)
                                );
                            },
                            valueOrDefault: function (n, t) {
                                return void 0 === n ? t : n;
                            },
                            valueAtIndexOrDefault: function (n, t, r) {
                                return i.valueOrDefault(
                                    i.isArray(n) ? n[t] : n,
                                    r
                                );
                            },
                            callback: function (n, t, i) {
                                if (n && "function" == typeof n.call)
                                    return n.apply(i, t);
                            },
                            each: function (n, t, r, u) {
                                var f, e, o;
                                if (i.isArray(n))
                                    if (((e = n.length), u))
                                        for (f = e - 1; f >= 0; f--)
                                            t.call(r, n[f], f);
                                    else
                                        for (f = 0; f < e; f++)
                                            t.call(r, n[f], f);
                                else if (i.isObject(n))
                                    for (
                                        e = (o = Object.keys(n)).length, f = 0;
                                        f < e;
                                        f++
                                    )
                                        t.call(r, n[o[f]], o[f]);
                            },
                            arrayEquals: function (n, t) {
                                var r, e, u, f;
                                if (!n || !t || n.length !== t.length)
                                    return !1;
                                for (r = 0, e = n.length; r < e; ++r)
                                    if (
                                        ((u = n[r]),
                                        (f = t[r]),
                                        u instanceof Array &&
                                            f instanceof Array)
                                    ) {
                                        if (!i.arrayEquals(u, f)) return !1;
                                    } else if (u !== f) return !1;
                                return !0;
                            },
                            clone: function (n) {
                                if (i.isArray(n)) return n.map(i.clone);
                                if (i.isObject(n)) {
                                    for (
                                        var u = {},
                                            r = Object.keys(n),
                                            f = r.length,
                                            t = 0;
                                        t < f;
                                        ++t
                                    )
                                        u[r[t]] = i.clone(n[r[t]]);
                                    return u;
                                }
                                return n;
                            },
                            _merger: function (n, t, r, u) {
                                var e = t[n],
                                    f = r[n];
                                i.isObject(e) && i.isObject(f)
                                    ? i.merge(e, f, u)
                                    : (t[n] = i.clone(f));
                            },
                            _mergerIf: function (n, t, r) {
                                var f = t[n],
                                    u = r[n];
                                i.isObject(f) && i.isObject(u)
                                    ? i.mergeIf(f, u)
                                    : t.hasOwnProperty(n) ||
                                      (t[n] = i.clone(u));
                            },
                            merge: function (n, t, r) {
                                var e,
                                    u,
                                    o,
                                    s,
                                    f,
                                    h = i.isArray(t) ? t : [t],
                                    c = h.length;
                                if (!i.isObject(n)) return n;
                                for (
                                    e = (r = r || {}).merger || i._merger,
                                        u = 0;
                                    u < c;
                                    ++u
                                )
                                    if (((t = h[u]), i.isObject(t)))
                                        for (
                                            f = 0,
                                                s = (o = Object.keys(t)).length;
                                            f < s;
                                            ++f
                                        )
                                            e(o[f], n, t, r);
                                return n;
                            },
                            mergeIf: function (n, t) {
                                return i.merge(n, t, { merger: i._mergerIf });
                            },
                            extend: function (n) {
                                for (
                                    var r = function (t, i) {
                                            n[i] = t;
                                        },
                                        t = 1,
                                        u = arguments.length;
                                    t < u;
                                    ++t
                                )
                                    i.each(arguments[t], r);
                                return n;
                            },
                            inherits: function (n) {
                                var r = this,
                                    t =
                                        n && n.hasOwnProperty("constructor")
                                            ? n.constructor
                                            : function () {
                                                  return r.apply(
                                                      this,
                                                      arguments
                                                  );
                                              },
                                    u = function () {
                                        this.constructor = t;
                                    };
                                return (
                                    (u.prototype = r.prototype),
                                    (t.prototype = new u()),
                                    (t.extend = i.inherits),
                                    n && i.extend(t.prototype, n),
                                    (t.__super__ = r.prototype),
                                    t
                                );
                            },
                        };
                    t.exports = i;
                    i.callCallback = i.callback;
                    i.indexOf = function (n, t, i) {
                        return Array.prototype.indexOf.call(n, t, i);
                    };
                    i.getValueOrDefault = i.valueOrDefault;
                    i.getValueAtIndexOrDefault = i.valueAtIndexOrDefault;
                },
                {},
            ],
            43: [
                function (n, t) {
                    "use strict";
                    var r = n(42),
                        i = {
                            linear: function (n) {
                                return n;
                            },
                            easeInQuad: function (n) {
                                return n * n;
                            },
                            easeOutQuad: function (n) {
                                return -n * (n - 2);
                            },
                            easeInOutQuad: function (n) {
                                return (n /= 0.5) < 1
                                    ? 0.5 * n * n
                                    : -0.5 * (--n * (n - 2) - 1);
                            },
                            easeInCubic: function (n) {
                                return n * n * n;
                            },
                            easeOutCubic: function (n) {
                                return (n -= 1) * n * n + 1;
                            },
                            easeInOutCubic: function (n) {
                                return (n /= 0.5) < 1
                                    ? 0.5 * n * n * n
                                    : 0.5 * ((n -= 2) * n * n + 2);
                            },
                            easeInQuart: function (n) {
                                return n * n * n * n;
                            },
                            easeOutQuart: function (n) {
                                return -((n -= 1) * n * n * n - 1);
                            },
                            easeInOutQuart: function (n) {
                                return (n /= 0.5) < 1
                                    ? 0.5 * n * n * n * n
                                    : -0.5 * ((n -= 2) * n * n * n - 2);
                            },
                            easeInQuint: function (n) {
                                return n * n * n * n * n;
                            },
                            easeOutQuint: function (n) {
                                return (n -= 1) * n * n * n * n + 1;
                            },
                            easeInOutQuint: function (n) {
                                return (n /= 0.5) < 1
                                    ? 0.5 * n * n * n * n * n
                                    : 0.5 * ((n -= 2) * n * n * n * n + 2);
                            },
                            easeInSine: function (n) {
                                return 1 - Math.cos(n * (Math.PI / 2));
                            },
                            easeOutSine: function (n) {
                                return Math.sin(n * (Math.PI / 2));
                            },
                            easeInOutSine: function (n) {
                                return -0.5 * (Math.cos(Math.PI * n) - 1);
                            },
                            easeInExpo: function (n) {
                                return 0 === n ? 0 : Math.pow(2, 10 * (n - 1));
                            },
                            easeOutExpo: function (n) {
                                return 1 === n ? 1 : 1 - Math.pow(2, -10 * n);
                            },
                            easeInOutExpo: function (n) {
                                return 0 === n
                                    ? 0
                                    : 1 === n
                                    ? 1
                                    : (n /= 0.5) < 1
                                    ? 0.5 * Math.pow(2, 10 * (n - 1))
                                    : 0.5 * (2 - Math.pow(2, -10 * --n));
                            },
                            easeInCirc: function (n) {
                                return n >= 1 ? n : -(Math.sqrt(1 - n * n) - 1);
                            },
                            easeOutCirc: function (n) {
                                return Math.sqrt(1 - (n -= 1) * n);
                            },
                            easeInOutCirc: function (n) {
                                return (n /= 0.5) < 1
                                    ? -0.5 * (Math.sqrt(1 - n * n) - 1)
                                    : 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1);
                            },
                            easeInElastic: function (n) {
                                var r = 1.70158,
                                    t = 0,
                                    i = 1;
                                return 0 === n
                                    ? 0
                                    : 1 === n
                                    ? 1
                                    : (t || (t = 0.3),
                                      i < 1
                                          ? ((i = 1), (r = t / 4))
                                          : (r =
                                                (t / (2 * Math.PI)) *
                                                Math.asin(1 / i)),
                                      -i *
                                          Math.pow(2, 10 * (n -= 1)) *
                                          Math.sin(
                                              ((n - r) * 2 * Math.PI) / t
                                          ));
                            },
                            easeOutElastic: function (n) {
                                var r = 1.70158,
                                    t = 0,
                                    i = 1;
                                return 0 === n
                                    ? 0
                                    : 1 === n
                                    ? 1
                                    : (t || (t = 0.3),
                                      i < 1
                                          ? ((i = 1), (r = t / 4))
                                          : (r =
                                                (t / (2 * Math.PI)) *
                                                Math.asin(1 / i)),
                                      i *
                                          Math.pow(2, -10 * n) *
                                          Math.sin(
                                              ((n - r) * 2 * Math.PI) / t
                                          ) +
                                          1);
                            },
                            easeInOutElastic: function (n) {
                                var r = 1.70158,
                                    t = 0,
                                    i = 1;
                                return 0 === n
                                    ? 0
                                    : 2 == (n /= 0.5)
                                    ? 1
                                    : (t || (t = 0.45),
                                      i < 1
                                          ? ((i = 1), (r = t / 4))
                                          : (r =
                                                (t / (2 * Math.PI)) *
                                                Math.asin(1 / i)),
                                      n < 1
                                          ? i *
                                            Math.pow(2, 10 * (n -= 1)) *
                                            Math.sin(
                                                ((n - r) * 2 * Math.PI) / t
                                            ) *
                                            -0.5
                                          : i *
                                                Math.pow(2, -10 * (n -= 1)) *
                                                Math.sin(
                                                    ((n - r) * 2 * Math.PI) / t
                                                ) *
                                                0.5 +
                                            1);
                            },
                            easeInBack: function (n) {
                                return n * n * (2.70158 * n - 1.70158);
                            },
                            easeOutBack: function (n) {
                                return (
                                    (n -= 1) * n * (2.70158 * n + 1.70158) + 1
                                );
                            },
                            easeInOutBack: function (n) {
                                var t = 1.70158;
                                return (n /= 0.5) < 1
                                    ? n * n * ((1 + (t *= 1.525)) * n - t) * 0.5
                                    : 0.5 *
                                          ((n -= 2) *
                                              n *
                                              ((1 + (t *= 1.525)) * n + t) +
                                              2);
                            },
                            easeInBounce: function (n) {
                                return 1 - i.easeOutBounce(1 - n);
                            },
                            easeOutBounce: function (n) {
                                return n < 1 / 2.75
                                    ? 7.5625 * n * n
                                    : n < 2 / 2.75
                                    ? 7.5625 * (n -= 1.5 / 2.75) * n + 0.75
                                    : n < 2.5 / 2.75
                                    ? 7.5625 * (n -= 2.25 / 2.75) * n + 0.9375
                                    : 7.5625 * (n -= 2.625 / 2.75) * n +
                                      0.984375;
                            },
                            easeInOutBounce: function (n) {
                                return n < 0.5
                                    ? 0.5 * i.easeInBounce(2 * n)
                                    : 0.5 * i.easeOutBounce(2 * n - 1) + 0.5;
                            },
                        };
                    t.exports = { effects: i };
                    r.easingEffects = i;
                },
                { 42: 42 },
            ],
            44: [
                function (n, t) {
                    "use strict";
                    var i = n(42);
                    t.exports = {
                        toLineHeight: function (n, t) {
                            var i = ("" + n).match(
                                /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/
                            );
                            if (!i || "normal" === i[1]) return 1.2 * t;
                            switch (((n = +i[2]), i[3])) {
                                case "px":
                                    return n;
                                case "%":
                                    n /= 100;
                            }
                            return t * n;
                        },
                        toPadding: function (n) {
                            var t, r, u, f;
                            return (
                                i.isObject(n)
                                    ? ((t = +n.top || 0),
                                      (r = +n.right || 0),
                                      (u = +n.bottom || 0),
                                      (f = +n.left || 0))
                                    : (t = r = u = f = +n || 0),
                                {
                                    top: t,
                                    right: r,
                                    bottom: u,
                                    left: f,
                                    height: t + u,
                                    width: f + r,
                                }
                            );
                        },
                        resolve: function (n, t, r) {
                            for (var u, f = 0, e = n.length; f < e; ++f)
                                if (
                                    void 0 !== (u = n[f]) &&
                                    (void 0 !== t &&
                                        "function" == typeof u &&
                                        (u = u(t)),
                                    void 0 !== r && i.isArray(u) && (u = u[r]),
                                    void 0 !== u)
                                )
                                    return u;
                        },
                    };
                },
                { 42: 42 },
            ],
            45: [
                function (n, t) {
                    "use strict";
                    t.exports = n(42);
                    t.exports.easing = n(43);
                    t.exports.canvas = n(41);
                    t.exports.options = n(44);
                },
                { 41: 41, 42: 42, 43: 43, 44: 44 },
            ],
            46: [
                function (n, t) {
                    t.exports = {
                        acquireContext: function (n) {
                            return (
                                n && n.canvas && (n = n.canvas),
                                (n && n.getContext("2d")) || null
                            );
                        },
                    };
                },
                {},
            ],
            47: [
                function (n, t) {
                    "use strict";
                    function c(n, t) {
                        var i = r.getStyle(n, t),
                            u = i && i.match(/^(\d+)(\.\d+)?px$/);
                        if (u) return Number(u[1]);
                    }
                    function f(n, t, i) {
                        n.addEventListener(t, i, l);
                    }
                    function s(n, t, i) {
                        n.removeEventListener(t, i, l);
                    }
                    function a(n, t, i, r, u) {
                        return {
                            type: n,
                            chart: t,
                            native: u || null,
                            x: void 0 !== i ? i : null,
                            y: void 0 !== r ? r : null,
                        };
                    }
                    function y(n, t, s) {
                        var k,
                            v,
                            l,
                            y,
                            c,
                            d,
                            p,
                            g,
                            w = n[i] || (n[i] = {}),
                            b = (w.resizer = (function (n) {
                                var t = document.createElement("div"),
                                    u = e + "size-monitor",
                                    o =
                                        "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;",
                                    i,
                                    r,
                                    s;
                                return (
                                    (t.style.cssText = o),
                                    (t.className = u),
                                    (t.innerHTML =
                                        '<div class="' +
                                        u +
                                        '-expand" style="' +
                                        o +
                                        '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' +
                                        u +
                                        '-shrink" style="' +
                                        o +
                                        '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>'),
                                    (i = t.childNodes[0]),
                                    (r = t.childNodes[1]),
                                    (t._reset = function () {
                                        i.scrollLeft = 1e6;
                                        i.scrollTop = 1e6;
                                        r.scrollLeft = 1e6;
                                        r.scrollTop = 1e6;
                                    }),
                                    (s = function () {
                                        t._reset();
                                        n();
                                    }),
                                    f(i, "scroll", s.bind(i, "expand")),
                                    f(r, "scroll", s.bind(r, "shrink")),
                                    t
                                );
                            })(
                                ((k = function () {
                                    if (w.resizer) return t(a("resize", s));
                                }),
                                (l = !1),
                                (y = []),
                                function () {
                                    y = Array.prototype.slice.call(arguments);
                                    v = v || this;
                                    l ||
                                        ((l = !0),
                                        r.requestAnimFrame.call(
                                            window,
                                            function () {
                                                l = !1;
                                                k.apply(v, y);
                                            }
                                        ));
                                })
                            ));
                        d = function () {
                            if (w.resizer) {
                                var t = n.parentNode;
                                t &&
                                    t !== b.parentNode &&
                                    t.insertBefore(b, t.firstChild);
                                b._reset();
                            }
                        };
                        p = (c = n)[i] || (c[i] = {});
                        g = p.renderProxy = function (n) {
                            n.animationName === u && d();
                        };
                        r.each(h, function (n) {
                            f(c, n, g);
                        });
                        p.reflow = !!c.offsetParent;
                        c.classList.add(o);
                    }
                    function p(n) {
                        var u,
                            f,
                            e,
                            c = n[i] || {},
                            t = c.resizer;
                        delete c.resizer;
                        f = (u = n)[i] || {};
                        (e = f.renderProxy) &&
                            (r.each(h, function (n) {
                                s(u, n, e);
                            }),
                            delete f.renderProxy);
                        u.classList.remove(o);
                        t && t.parentNode && t.parentNode.removeChild(t);
                    }
                    var r = n(45),
                        i = "$chartjs",
                        e = "chartjs-",
                        o = e + "render-monitor",
                        u = e + "render-animation",
                        h = ["animationstart", "webkitAnimationStart"],
                        v = {
                            touchstart: "mousedown",
                            touchmove: "mousemove",
                            touchend: "mouseup",
                            pointerenter: "mouseenter",
                            pointerdown: "mousedown",
                            pointermove: "mousemove",
                            pointerup: "mouseup",
                            pointerleave: "mouseout",
                            pointerout: "mouseout",
                        },
                        l = !!(function () {
                            var n = !1,
                                t;
                            try {
                                t = Object.defineProperty({}, "passive", {
                                    get: function () {
                                        n = !0;
                                    },
                                });
                                window.addEventListener("e", null, t);
                            } catch (n) {}
                            return n;
                        })() && { passive: !0 };
                    t.exports = {
                        _enabled:
                            "undefined" != typeof window &&
                            "undefined" != typeof document,
                        initialize: function () {
                            var i,
                                t,
                                n,
                                r = "from{opacity:0.99}to{opacity:1}";
                            t =
                                "@-webkit-keyframes " +
                                u +
                                "{" +
                                r +
                                "}@keyframes " +
                                u +
                                "{" +
                                r +
                                "}." +
                                o +
                                "{-webkit-animation:" +
                                u +
                                " 0.001s;animation:" +
                                u +
                                " 0.001s;}";
                            n =
                                (i = this)._style ||
                                document.createElement("style");
                            i._style ||
                                ((i._style = n),
                                (t = "/* Chart.js */\n" + t),
                                n.setAttribute("type", "text/css"),
                                document
                                    .getElementsByTagName("head")[0]
                                    .appendChild(n));
                            n.appendChild(document.createTextNode(t));
                        },
                        acquireContext: function (n, t) {
                            "string" == typeof n
                                ? (n = document.getElementById(n))
                                : n.length && (n = n[0]);
                            n && n.canvas && (n = n.canvas);
                            var r = n && n.getContext && n.getContext("2d");
                            return r && r.canvas === n
                                ? ((function (n, t) {
                                      var r = n.style,
                                          f = n.getAttribute("height"),
                                          e = n.getAttribute("width"),
                                          u,
                                          o;
                                      ((n[i] = {
                                          initial: {
                                              height: f,
                                              width: e,
                                              style: {
                                                  display: r.display,
                                                  height: r.height,
                                                  width: r.width,
                                              },
                                          },
                                      }),
                                      (r.display = r.display || "block"),
                                      null === e || "" === e) &&
                                          ((u = c(n, "width")),
                                          void 0 !== u && (n.width = u));
                                      (null === f || "" === f) &&
                                          ("" === n.style.height
                                              ? (n.height =
                                                    n.width /
                                                    (t.options.aspectRatio ||
                                                        2))
                                              : ((o = c(n, "height")),
                                                void 0 !== u &&
                                                    (n.height = o)));
                                  })(n, t),
                                  r)
                                : null;
                        },
                        releaseContext: function (n) {
                            var t = n.canvas,
                                u;
                            t[i] &&
                                ((u = t[i].initial),
                                ["height", "width"].forEach(function (n) {
                                    var i = u[n];
                                    r.isNullOrUndef(i)
                                        ? t.removeAttribute(n)
                                        : t.setAttribute(n, i);
                                }),
                                r.each(u.style || {}, function (n, i) {
                                    t.style[i] = n;
                                }),
                                (t.width = t.width),
                                delete t[i]);
                        },
                        addEventListener: function (n, t, u) {
                            var o = n.canvas,
                                e;
                            "resize" !== t
                                ? ((e = u[i] || (u[i] = {})),
                                  f(
                                      o,
                                      t,
                                      ((e.proxies || (e.proxies = {}))[
                                          n.id + "_" + t
                                      ] = function (t) {
                                          var i, f, o, e;
                                          u(
                                              ((f = n),
                                              (o = v[(i = t).type] || i.type),
                                              (e = r.getRelativePosition(i, f)),
                                              a(o, f, e.x, e.y, i))
                                          );
                                      })
                                  ))
                                : y(o, u, n);
                        },
                        removeEventListener: function (n, t, r) {
                            var f = n.canvas,
                                u;
                            "resize" !== t
                                ? ((u = ((r[i] || {}).proxies || {})[
                                      n.id + "_" + t
                                  ]),
                                  u && s(f, t, u))
                                : p(f);
                        },
                    };
                    r.addEvent = f;
                    r.removeEvent = s;
                },
                { 45: 45 },
            ],
            48: [
                function (n, t) {
                    "use strict";
                    var r = n(45),
                        u = n(46),
                        i = n(47),
                        f = i._enabled ? i : u;
                    t.exports = r.extend(
                        {
                            initialize: function () {},
                            acquireContext: function () {},
                            releaseContext: function () {},
                            addEventListener: function () {},
                            removeEventListener: function () {},
                        },
                        f
                    );
                },
                { 45: 45, 46: 46, 47: 47 },
            ],
            49: [
                function (n, t) {
                    "use strict";
                    t.exports = {};
                    t.exports.filler = n(50);
                    t.exports.legend = n(51);
                    t.exports.title = n(52);
                },
                { 50: 50, 51: 51, 52: 52 },
            ],
            50: [
                function (n, t) {
                    "use strict";
                    function s(n, t, i) {
                        var r,
                            f = n._model || {},
                            u = f.fill;
                        if (
                            (void 0 === u && (u = !!f.backgroundColor),
                            !1 === u || null === u)
                        )
                            return !1;
                        if (!0 === u) return "origin";
                        if (
                            ((r = parseFloat(u, 10)),
                            isFinite(r) && Math.floor(r) === r)
                        )
                            return (
                                ("-" !== u[0] && "+" !== u[0]) || (r = t + r),
                                !(r === t || r < 0 || r >= i) && r
                            );
                        switch (u) {
                            case "bottom":
                                return "start";
                            case "top":
                                return "end";
                            case "zero":
                                return "origin";
                            case "origin":
                            case "start":
                            case "end":
                                return u;
                            default:
                                return !1;
                        }
                    }
                    function h(n) {
                        var f,
                            r = n.el._model || {},
                            i = n.el._scale || {},
                            u = n.fill,
                            t = null;
                        if (isFinite(u)) return null;
                        if (
                            ("start" === u
                                ? (t =
                                      void 0 === r.scaleBottom
                                          ? i.bottom
                                          : r.scaleBottom)
                                : "end" === u
                                ? (t =
                                      void 0 === r.scaleTop
                                          ? i.top
                                          : r.scaleTop)
                                : void 0 !== r.scaleZero
                                ? (t = r.scaleZero)
                                : i.getBasePosition
                                ? (t = i.getBasePosition())
                                : i.getBasePixel && (t = i.getBasePixel()),
                            null != t)
                        ) {
                            if (void 0 !== t.x && void 0 !== t.y) return t;
                            if ("number" == typeof t && isFinite(t))
                                return {
                                    x: (f = i.isHorizontal()) ? t : null,
                                    y: f ? null : t,
                                };
                        }
                        return null;
                    }
                    function c(n, t, i) {
                        var u,
                            r = n[t].fill,
                            f = [t];
                        if (!i) return r;
                        for (; !1 !== r && -1 === f.indexOf(r); ) {
                            if (!isFinite(r)) return r;
                            if (!(u = n[r])) return !1;
                            if (u.visible) return r;
                            f.push(r);
                            r = u.fill;
                        }
                        return !1;
                    }
                    function f(n) {
                        return n && !n.skip;
                    }
                    function e(n, t, r, u, f) {
                        var e;
                        if (u && f) {
                            for (n.moveTo(t[0].x, t[0].y), e = 1; e < u; ++e)
                                i.canvas.lineTo(n, t[e - 1], t[e]);
                            for (
                                n.lineTo(r[f - 1].x, r[f - 1].y), e = f - 1;
                                e > 0;
                                --e
                            )
                                i.canvas.lineTo(n, r[e], r[e - 1], !0);
                        }
                    }
                    var r = n(25),
                        o = n(40),
                        i = n(45),
                        u;
                    r._set("global", {
                        plugins: { filler: { propagate: !0 } },
                    });
                    u = {
                        dataset: function (n) {
                            var t = n.fill,
                                i = n.chart,
                                r = i.getDatasetMeta(t),
                                u =
                                    (r &&
                                        i.isDatasetVisible(t) &&
                                        r.dataset._children) ||
                                    [],
                                f = u.length || 0;
                            return f
                                ? function (n, t) {
                                      return (t < f && u[t]._view) || null;
                                  }
                                : null;
                        },
                        boundary: function (n) {
                            var t = n.boundary,
                                i = t ? t.x : null,
                                r = t ? t.y : null;
                            return function (n) {
                                return {
                                    x: null === i ? n.x : i,
                                    y: null === r ? n.y : r,
                                };
                            };
                        },
                    };
                    t.exports = {
                        id: "filler",
                        afterDatasetsUpdate: function (n, t) {
                            for (
                                var y,
                                    f,
                                    r,
                                    p,
                                    l,
                                    e,
                                    a = (n.data.datasets || []).length,
                                    w = t.propagate,
                                    v = [],
                                    i = 0;
                                i < a;
                                ++i
                            )
                                (r = null),
                                    (f = (y = n.getDatasetMeta(i)).dataset) &&
                                        f._model &&
                                        f instanceof o.Line &&
                                        (r = {
                                            visible: n.isDatasetVisible(i),
                                            fill: s(f, i, a),
                                            chart: n,
                                            el: f,
                                        }),
                                    (y.$filler = r),
                                    v.push(r);
                            for (i = 0; i < a; ++i)
                                (r = v[i]) &&
                                    ((r.fill = c(v, i, w)),
                                    (r.boundary = h(r)),
                                    (r.mapper =
                                        (void 0,
                                        (e = void 0),
                                        (l = (p = r).fill),
                                        (e = "dataset"),
                                        !1 === l
                                            ? null
                                            : (isFinite(l) || (e = "boundary"),
                                              u[e](p)))));
                        },
                        beforeDatasetDraw: function (n, t) {
                            var u = t.meta.$filler;
                            if (u) {
                                var o = n.ctx,
                                    s = u.el,
                                    h = s._view,
                                    c = s._children || [],
                                    l = u.mapper,
                                    a =
                                        h.backgroundColor ||
                                        r.global.defaultColor;
                                l &&
                                    a &&
                                    c.length &&
                                    (i.canvas.clipArea(o, n.chartArea),
                                    (function (n, t, i, r, u, o) {
                                        var a,
                                            b,
                                            k,
                                            v,
                                            y,
                                            p,
                                            w,
                                            d = t.length,
                                            g = r.spanGaps,
                                            s = [],
                                            h = [],
                                            c = 0,
                                            l = 0;
                                        for (
                                            n.beginPath(), a = 0, b = d + !!o;
                                            a < b;
                                            ++a
                                        )
                                            (y = i(
                                                (v = t[(k = a % d)]._view),
                                                k,
                                                r
                                            )),
                                                (p = f(v)),
                                                (w = f(y)),
                                                p && w
                                                    ? ((c = s.push(v)),
                                                      (l = h.push(y)))
                                                    : c &&
                                                      l &&
                                                      (g
                                                          ? (p && s.push(v),
                                                            w && h.push(y))
                                                          : (e(n, s, h, c, l),
                                                            (c = l = 0),
                                                            (s = []),
                                                            (h = [])));
                                        e(n, s, h, c, l);
                                        n.closePath();
                                        n.fillStyle = u;
                                        n.fill();
                                    })(o, c, l, h, a, s._loop),
                                    i.canvas.unclipArea(o));
                            }
                        },
                    };
                },
                { 25: 25, 40: 40, 45: 45 },
            ],
            51: [
                function (n, t) {
                    "use strict";
                    function e(n, t) {
                        return n.usePointStyle ? t * Math.SQRT2 : n.boxWidth;
                    }
                    function s(n, t) {
                        var i = new o({ ctx: n.ctx, options: t, chart: n });
                        f.configure(n, i, t);
                        f.addBox(n, i);
                        n.legend = i;
                    }
                    var u = n(25),
                        h = n(26),
                        i = n(45),
                        f = n(30),
                        r = i.noop,
                        o;
                    u._set("global", {
                        legend: {
                            display: !0,
                            position: "top",
                            fullWidth: !0,
                            reverse: !1,
                            weight: 1e3,
                            onClick: function (n, t) {
                                var r = t.datasetIndex,
                                    i = this.chart,
                                    u = i.getDatasetMeta(r);
                                u.hidden =
                                    null === u.hidden
                                        ? !i.data.datasets[r].hidden
                                        : null;
                                i.update();
                            },
                            onHover: null,
                            labels: {
                                boxWidth: 40,
                                padding: 10,
                                generateLabels: function (n) {
                                    var t = n.data;
                                    return i.isArray(t.datasets)
                                        ? t.datasets.map(function (t, r) {
                                              return {
                                                  text: t.label,
                                                  fillStyle: i.isArray(
                                                      t.backgroundColor
                                                  )
                                                      ? t.backgroundColor[0]
                                                      : t.backgroundColor,
                                                  hidden: !n.isDatasetVisible(
                                                      r
                                                  ),
                                                  lineCap: t.borderCapStyle,
                                                  lineDash: t.borderDash,
                                                  lineDashOffset:
                                                      t.borderDashOffset,
                                                  lineJoin: t.borderJoinStyle,
                                                  lineWidth: t.borderWidth,
                                                  strokeStyle: t.borderColor,
                                                  pointStyle: t.pointStyle,
                                                  datasetIndex: r,
                                              };
                                          }, this)
                                        : [];
                                },
                            },
                        },
                        legendCallback: function (n) {
                            var t = [],
                                i;
                            for (
                                t.push('<ul class="' + n.id + '-legend">'),
                                    i = 0;
                                i < n.data.datasets.length;
                                i++
                            )
                                t.push(
                                    '<li><span style="background-color:' +
                                        n.data.datasets[i].backgroundColor +
                                        '"></span>'
                                ),
                                    n.data.datasets[i].label &&
                                        t.push(n.data.datasets[i].label),
                                    t.push("</li>");
                            return t.push("</ul>"), t.join("");
                        },
                    });
                    o = h.extend({
                        initialize: function (n) {
                            i.extend(this, n);
                            this.legendHitBoxes = [];
                            this.doughnutMode = !1;
                        },
                        beforeUpdate: r,
                        update: function (n, t, i) {
                            var r = this;
                            return (
                                r.beforeUpdate(),
                                (r.maxWidth = n),
                                (r.maxHeight = t),
                                (r.margins = i),
                                r.beforeSetDimensions(),
                                r.setDimensions(),
                                r.afterSetDimensions(),
                                r.beforeBuildLabels(),
                                r.buildLabels(),
                                r.afterBuildLabels(),
                                r.beforeFit(),
                                r.fit(),
                                r.afterFit(),
                                r.afterUpdate(),
                                r.minSize
                            );
                        },
                        afterUpdate: r,
                        beforeSetDimensions: r,
                        setDimensions: function () {
                            var n = this;
                            n.isHorizontal()
                                ? ((n.width = n.maxWidth),
                                  (n.left = 0),
                                  (n.right = n.width))
                                : ((n.height = n.maxHeight),
                                  (n.top = 0),
                                  (n.bottom = n.height));
                            n.paddingLeft = 0;
                            n.paddingTop = 0;
                            n.paddingRight = 0;
                            n.paddingBottom = 0;
                            n.minSize = { width: 0, height: 0 };
                        },
                        afterSetDimensions: r,
                        beforeBuildLabels: r,
                        buildLabels: function () {
                            var n = this,
                                r = n.options.labels || {},
                                t =
                                    i.callback(
                                        r.generateLabels,
                                        [n.chart],
                                        n
                                    ) || [];
                            r.filter &&
                                (t = t.filter(function (t) {
                                    return r.filter(t, n.chart.data);
                                }));
                            n.options.reverse && t.reverse();
                            n.legendItems = t;
                        },
                        afterBuildLabels: r,
                        beforeFit: r,
                        fit: function () {
                            var n = this,
                                w = n.options,
                                t = w.labels,
                                c = w.display,
                                h = n.ctx,
                                l = u.global,
                                a = i.valueOrDefault,
                                r = a(t.fontSize, l.defaultFontSize),
                                nt = a(t.fontStyle, l.defaultFontStyle),
                                tt = a(t.fontFamily, l.defaultFontFamily),
                                it = i.fontString(r, nt, tt),
                                b = (n.legendHitBoxes = []),
                                f = n.minSize,
                                k = n.isHorizontal(),
                                o,
                                v;
                            if (
                                (k
                                    ? ((f.width = n.maxWidth),
                                      (f.height = c ? 10 : 0))
                                    : ((f.width = c ? 10 : 0),
                                      (f.height = n.maxHeight)),
                                c)
                            )
                                if (((h.font = it), k))
                                    (o = n.lineWidths = [0]),
                                        (v = n.legendItems.length
                                            ? r + t.padding
                                            : 0),
                                        (h.textAlign = "left"),
                                        (h.textBaseline = "top"),
                                        i.each(n.legendItems, function (i, u) {
                                            var f =
                                                e(t, r) +
                                                r / 2 +
                                                h.measureText(i.text).width;
                                            o[o.length - 1] + f + t.padding >=
                                                n.width &&
                                                ((v += r + t.padding),
                                                (o[o.length] = n.left));
                                            b[u] = {
                                                left: 0,
                                                top: 0,
                                                width: f,
                                                height: r,
                                            };
                                            o[o.length - 1] += f + t.padding;
                                        }),
                                        (f.height += v);
                                else {
                                    var rt = t.padding,
                                        d = (n.columnWidths = []),
                                        y = t.padding,
                                        s = 0,
                                        p = 0,
                                        g = r + rt;
                                    i.each(n.legendItems, function (n, i) {
                                        var u =
                                            e(t, r) +
                                            r / 2 +
                                            h.measureText(n.text).width;
                                        p + g > f.height &&
                                            ((y += s + t.padding),
                                            d.push(s),
                                            (s = 0),
                                            (p = 0));
                                        s = Math.max(s, u);
                                        p += g;
                                        b[i] = {
                                            left: 0,
                                            top: 0,
                                            width: u,
                                            height: r,
                                        };
                                    });
                                    y += s;
                                    d.push(s);
                                    f.width += y;
                                }
                            n.width = f.width;
                            n.height = f.height;
                        },
                        afterFit: r,
                        isHorizontal: function () {
                            return (
                                "top" === this.options.position ||
                                "bottom" === this.options.position
                            );
                        },
                        draw: function () {
                            var t = this,
                                a = t.options,
                                f = a.labels,
                                h = u.global,
                                c = h.elements.line,
                                y = t.width,
                                w = t.lineWidths,
                                v;
                            if (a.display) {
                                var r,
                                    n = t.ctx,
                                    o = i.valueOrDefault,
                                    b = o(f.fontColor, h.defaultFontColor),
                                    s = o(f.fontSize, h.defaultFontSize),
                                    d = o(f.fontStyle, h.defaultFontStyle),
                                    g = o(f.fontFamily, h.defaultFontFamily),
                                    nt = i.fontString(s, d, g);
                                n.textAlign = "left";
                                n.textBaseline = "middle";
                                n.lineWidth = 0.5;
                                n.strokeStyle = b;
                                n.fillStyle = b;
                                n.font = nt;
                                var l = e(f, s),
                                    k = t.legendHitBoxes,
                                    p = t.isHorizontal();
                                r = p
                                    ? {
                                          x: t.left + (y - w[0]) / 2,
                                          y: t.top + f.padding,
                                          line: 0,
                                      }
                                    : {
                                          x: t.left + f.padding,
                                          y: t.top + f.padding,
                                          line: 0,
                                      };
                                v = s + f.padding;
                                i.each(t.legendItems, function (u, e) {
                                    var tt,
                                        it,
                                        rt,
                                        g,
                                        nt,
                                        ut = n.measureText(u.text).width,
                                        ft = l + s / 2 + ut,
                                        b = r.x,
                                        d = r.y;
                                    p
                                        ? b + ft >= y &&
                                          ((d = r.y += v),
                                          r.line++,
                                          (b = r.x =
                                              t.left + (y - w[r.line]) / 2))
                                        : d + v > t.bottom &&
                                          ((b = r.x =
                                              b +
                                              t.columnWidths[r.line] +
                                              f.padding),
                                          (d = r.y = t.top + f.padding),
                                          r.line++),
                                        (function (t, r, u) {
                                            var f;
                                            if (!(isNaN(l) || l <= 0)) {
                                                if (
                                                    (n.save(),
                                                    (n.fillStyle = o(
                                                        u.fillStyle,
                                                        h.defaultColor
                                                    )),
                                                    (n.lineCap = o(
                                                        u.lineCap,
                                                        c.borderCapStyle
                                                    )),
                                                    (n.lineDashOffset = o(
                                                        u.lineDashOffset,
                                                        c.borderDashOffset
                                                    )),
                                                    (n.lineJoin = o(
                                                        u.lineJoin,
                                                        c.borderJoinStyle
                                                    )),
                                                    (n.lineWidth = o(
                                                        u.lineWidth,
                                                        c.borderWidth
                                                    )),
                                                    (n.strokeStyle = o(
                                                        u.strokeStyle,
                                                        h.defaultColor
                                                    )),
                                                    (f =
                                                        0 ===
                                                        o(
                                                            u.lineWidth,
                                                            c.borderWidth
                                                        )),
                                                    n.setLineDash &&
                                                        n.setLineDash(
                                                            o(
                                                                u.lineDash,
                                                                c.borderDash
                                                            )
                                                        ),
                                                    a.labels &&
                                                        a.labels.usePointStyle)
                                                ) {
                                                    var e =
                                                            (s * Math.SQRT2) /
                                                            2,
                                                        v = e / Math.SQRT2,
                                                        y = t + v,
                                                        p = r + v;
                                                    i.canvas.drawPoint(
                                                        n,
                                                        u.pointStyle,
                                                        e,
                                                        y,
                                                        p
                                                    );
                                                } else
                                                    f ||
                                                        n.strokeRect(
                                                            t,
                                                            r,
                                                            l,
                                                            s
                                                        ),
                                                        n.fillRect(t, r, l, s);
                                                n.restore();
                                            }
                                        })(b, d, u);
                                    k[e].left = b;
                                    k[e].top = d;
                                    tt = u;
                                    it = ut;
                                    g = l + (rt = s / 2) + b;
                                    nt = d + rt;
                                    n.fillText(tt.text, g, nt);
                                    tt.hidden &&
                                        (n.beginPath(),
                                        (n.lineWidth = 2),
                                        n.moveTo(g, nt),
                                        n.lineTo(g + it, nt),
                                        n.stroke());
                                    p ? (r.x += ft + f.padding) : (r.y += v);
                                });
                            }
                        },
                        handleEvent: function (n) {
                            var t = this,
                                e = t.options,
                                o = "mouseup" === n.type ? "click" : n.type,
                                s = !1,
                                u,
                                f,
                                h,
                                r,
                                i;
                            if ("mousemove" === o) {
                                if (!e.onHover) return;
                            } else {
                                if ("click" !== o) return;
                                if (!e.onClick) return;
                            }
                            if (
                                ((u = n.x),
                                (f = n.y),
                                u >= t.left &&
                                    u <= t.right &&
                                    f >= t.top &&
                                    f <= t.bottom)
                            )
                                for (
                                    h = t.legendHitBoxes, r = 0;
                                    r < h.length;
                                    ++r
                                )
                                    if (
                                        ((i = h[r]),
                                        u >= i.left &&
                                            u <= i.left + i.width &&
                                            f >= i.top &&
                                            f <= i.top + i.height)
                                    ) {
                                        if ("click" === o) {
                                            e.onClick.call(
                                                t,
                                                n.native,
                                                t.legendItems[r]
                                            );
                                            s = !0;
                                            break;
                                        }
                                        if ("mousemove" === o) {
                                            e.onHover.call(
                                                t,
                                                n.native,
                                                t.legendItems[r]
                                            );
                                            s = !0;
                                            break;
                                        }
                                    }
                            return s;
                        },
                    });
                    t.exports = {
                        id: "legend",
                        _element: o,
                        beforeInit: function (n) {
                            var t = n.options.legend;
                            t && s(n, t);
                        },
                        beforeUpdate: function (n) {
                            var t = n.options.legend,
                                r = n.legend;
                            t
                                ? (i.mergeIf(t, u.global.legend),
                                  r
                                      ? (f.configure(n, r, t), (r.options = t))
                                      : s(n, t))
                                : r && (f.removeBox(n, r), delete n.legend);
                        },
                        afterEvent: function (n, t) {
                            var i = n.legend;
                            i && i.handleEvent(t);
                        },
                    };
                },
                { 25: 25, 26: 26, 30: 30, 45: 45 },
            ],
            52: [
                function (n, t) {
                    "use strict";
                    function o(n, t) {
                        var i = new e({ ctx: n.ctx, options: t, chart: n });
                        f.configure(n, i, t);
                        f.addBox(n, i);
                        n.titleBlock = i;
                    }
                    var u = n(25),
                        s = n(26),
                        i = n(45),
                        f = n(30),
                        r = i.noop,
                        e;
                    u._set("global", {
                        title: {
                            display: !1,
                            fontStyle: "bold",
                            fullWidth: !0,
                            lineHeight: 1.2,
                            padding: 10,
                            position: "top",
                            text: "",
                            weight: 2e3,
                        },
                    });
                    e = s.extend({
                        initialize: function (n) {
                            i.extend(this, n);
                            this.legendHitBoxes = [];
                        },
                        beforeUpdate: r,
                        update: function (n, t, i) {
                            var r = this;
                            return (
                                r.beforeUpdate(),
                                (r.maxWidth = n),
                                (r.maxHeight = t),
                                (r.margins = i),
                                r.beforeSetDimensions(),
                                r.setDimensions(),
                                r.afterSetDimensions(),
                                r.beforeBuildLabels(),
                                r.buildLabels(),
                                r.afterBuildLabels(),
                                r.beforeFit(),
                                r.fit(),
                                r.afterFit(),
                                r.afterUpdate(),
                                r.minSize
                            );
                        },
                        afterUpdate: r,
                        beforeSetDimensions: r,
                        setDimensions: function () {
                            var n = this;
                            n.isHorizontal()
                                ? ((n.width = n.maxWidth),
                                  (n.left = 0),
                                  (n.right = n.width))
                                : ((n.height = n.maxHeight),
                                  (n.top = 0),
                                  (n.bottom = n.height));
                            n.paddingLeft = 0;
                            n.paddingTop = 0;
                            n.paddingRight = 0;
                            n.paddingBottom = 0;
                            n.minSize = { width: 0, height: 0 };
                        },
                        afterSetDimensions: r,
                        beforeBuildLabels: r,
                        buildLabels: r,
                        afterBuildLabels: r,
                        beforeFit: r,
                        fit: function () {
                            var n = this,
                                e = i.valueOrDefault,
                                t = n.options,
                                o = t.display,
                                s = e(t.fontSize, u.global.defaultFontSize),
                                r = n.minSize,
                                h = i.isArray(t.text) ? t.text.length : 1,
                                c = i.options.toLineHeight(t.lineHeight, s),
                                f = o ? h * c + 2 * t.padding : 0;
                            n.isHorizontal()
                                ? ((r.width = n.maxWidth), (r.height = f))
                                : ((r.width = f), (r.height = n.maxHeight));
                            n.width = r.width;
                            n.height = r.height;
                        },
                        afterFit: r,
                        isHorizontal: function () {
                            var n = this.options.position;
                            return "top" === n || "bottom" === n;
                        },
                        draw: function () {
                            var r = this,
                                n = r.ctx,
                                e = i.valueOrDefault,
                                t = r.options,
                                o = u.global,
                                f,
                                w,
                                l;
                            if (t.display) {
                                var s,
                                    a,
                                    v,
                                    b = e(t.fontSize, o.defaultFontSize),
                                    nt = e(t.fontStyle, o.defaultFontStyle),
                                    tt = e(t.fontFamily, o.defaultFontFamily),
                                    it = i.fontString(b, nt, tt),
                                    k = i.options.toLineHeight(t.lineHeight, b),
                                    y = k / 2 + t.padding,
                                    d = 0,
                                    h = r.top,
                                    c = r.left,
                                    g = r.bottom,
                                    p = r.right;
                                if (
                                    ((n.fillStyle = e(
                                        t.fontColor,
                                        o.defaultFontColor
                                    )),
                                    (n.font = it),
                                    r.isHorizontal()
                                        ? ((a = c + (p - c) / 2),
                                          (v = h + y),
                                          (s = p - c))
                                        : ((a =
                                              "left" === t.position
                                                  ? c + y
                                                  : p - y),
                                          (v = h + (g - h) / 2),
                                          (s = g - h),
                                          (d =
                                              Math.PI *
                                              ("left" === t.position
                                                  ? -0.5
                                                  : 0.5))),
                                    n.save(),
                                    n.translate(a, v),
                                    n.rotate(d),
                                    (n.textAlign = "center"),
                                    (n.textBaseline = "middle"),
                                    (f = t.text),
                                    i.isArray(f))
                                )
                                    for (w = 0, l = 0; l < f.length; ++l)
                                        n.fillText(f[l], 0, w, s), (w += k);
                                else n.fillText(f, 0, 0, s);
                                n.restore();
                            }
                        },
                    });
                    t.exports = {
                        id: "title",
                        _element: e,
                        beforeInit: function (n) {
                            var t = n.options.title;
                            t && o(n, t);
                        },
                        beforeUpdate: function (n) {
                            var t = n.options.title,
                                r = n.titleBlock;
                            t
                                ? (i.mergeIf(t, u.global.title),
                                  r
                                      ? (f.configure(n, r, t), (r.options = t))
                                      : o(n, t))
                                : r && (f.removeBox(n, r), delete n.titleBlock);
                        },
                    };
                },
                { 25: 25, 26: 26, 30: 30, 45: 45 },
            ],
            53: [
                function (n, t) {
                    "use strict";
                    t.exports = function (n) {
                        var t = n.Scale.extend({
                            getLabels: function () {
                                var n = this.chart.data;
                                return (
                                    this.options.labels ||
                                    (this.isHorizontal()
                                        ? n.xLabels
                                        : n.yLabels) ||
                                    n.labels
                                );
                            },
                            determineDataLimits: function () {
                                var t,
                                    n = this,
                                    i = n.getLabels();
                                n.minIndex = 0;
                                n.maxIndex = i.length - 1;
                                void 0 !== n.options.ticks.min &&
                                    ((t = i.indexOf(n.options.ticks.min)),
                                    (n.minIndex = -1 !== t ? t : n.minIndex));
                                void 0 !== n.options.ticks.max &&
                                    ((t = i.indexOf(n.options.ticks.max)),
                                    (n.maxIndex = -1 !== t ? t : n.maxIndex));
                                n.min = i[n.minIndex];
                                n.max = i[n.maxIndex];
                            },
                            buildTicks: function () {
                                var n = this,
                                    t = n.getLabels();
                                n.ticks =
                                    0 === n.minIndex &&
                                    n.maxIndex === t.length - 1
                                        ? t
                                        : t.slice(n.minIndex, n.maxIndex + 1);
                            },
                            getLabelForIndex: function (n, t) {
                                var i = this,
                                    r = i.chart.data,
                                    u = i.isHorizontal();
                                return r.yLabels && !u
                                    ? i.getRightValue(r.datasets[t].data[n])
                                    : i.ticks[n - i.minIndex];
                            },
                            getPixelForValue: function (n, t) {
                                var r,
                                    i = this,
                                    u = i.options.offset,
                                    c = Math.max(
                                        i.maxIndex +
                                            1 -
                                            i.minIndex -
                                            (u ? 0 : 1),
                                        1
                                    ),
                                    f,
                                    e,
                                    o,
                                    s,
                                    h;
                                return ((null != n &&
                                    (r = i.isHorizontal() ? n.x : n.y),
                                void 0 !== r || (void 0 !== n && isNaN(t))) &&
                                    ((n = r || n),
                                    (f = i.getLabels().indexOf(n)),
                                    (t = -1 !== f ? f : t)),
                                i.isHorizontal())
                                    ? ((e = i.width / c),
                                      (o = e * (t - i.minIndex)),
                                      u && (o += e / 2),
                                      i.left + Math.round(o))
                                    : ((s = i.height / c),
                                      (h = s * (t - i.minIndex)),
                                      u && (h += s / 2),
                                      i.top + Math.round(h));
                            },
                            getPixelForTick: function (n) {
                                return this.getPixelForValue(
                                    this.ticks[n],
                                    n + this.minIndex,
                                    null
                                );
                            },
                            getValueForPixel: function (n) {
                                var t = this,
                                    i = t.options.offset,
                                    f = Math.max(
                                        t._ticks.length - (i ? 0 : 1),
                                        1
                                    ),
                                    r = t.isHorizontal(),
                                    u = (r ? t.width : t.height) / f;
                                return (
                                    (n -= r ? t.left : t.top),
                                    i && (n -= u / 2),
                                    (n <= 0 ? 0 : Math.round(n / u)) +
                                        t.minIndex
                                );
                            },
                            getBasePixel: function () {
                                return this.bottom;
                            },
                        });
                        n.scaleService.registerScaleType("category", t, {
                            position: "bottom",
                        });
                    };
                },
                {},
            ],
            54: [
                function (n, t) {
                    "use strict";
                    var r = n(25),
                        i = n(45),
                        u = n(34);
                    t.exports = function (n) {
                        var t = {
                                position: "left",
                                ticks: { callback: u.formatters.linear },
                            },
                            f = n.LinearScaleBase.extend({
                                determineDataLimits: function () {
                                    function o(t) {
                                        return s
                                            ? t.xAxisID === n.id
                                            : t.yAxisID === n.id;
                                    }
                                    var n = this,
                                        f = n.options,
                                        t = n.chart,
                                        e = t.data.datasets,
                                        s = n.isHorizontal(),
                                        u,
                                        r;
                                    n.min = null;
                                    n.max = null;
                                    u = f.stacked;
                                    (void 0 === u &&
                                        i.each(e, function (n, i) {
                                            if (!u) {
                                                var r = t.getDatasetMeta(i);
                                                t.isDatasetVisible(i) &&
                                                    o(r) &&
                                                    void 0 !== r.stack &&
                                                    (u = !0);
                                            }
                                        }),
                                    f.stacked || u)
                                        ? ((r = {}),
                                          i.each(e, function (u, e) {
                                              var s = t.getDatasetMeta(e),
                                                  c = [
                                                      s.type,
                                                      void 0 === f.stacked &&
                                                      void 0 === s.stack
                                                          ? e
                                                          : "",
                                                      s.stack,
                                                  ].join("."),
                                                  h,
                                                  l;
                                              void 0 === r[c] &&
                                                  (r[c] = {
                                                      positiveValues: [],
                                                      negativeValues: [],
                                                  });
                                              h = r[c].positiveValues;
                                              l = r[c].negativeValues;
                                              t.isDatasetVisible(e) &&
                                                  o(s) &&
                                                  i.each(
                                                      u.data,
                                                      function (t, i) {
                                                          var r =
                                                              +n.getRightValue(
                                                                  t
                                                              );
                                                          isNaN(r) ||
                                                              s.data[i]
                                                                  .hidden ||
                                                              ((h[i] =
                                                                  h[i] || 0),
                                                              (l[i] =
                                                                  l[i] || 0),
                                                              f.relativePoints
                                                                  ? (h[i] = 100)
                                                                  : r < 0
                                                                  ? (l[i] += r)
                                                                  : (h[i] +=
                                                                        r));
                                                      }
                                                  );
                                          }),
                                          i.each(r, function (t) {
                                              var r = t.positiveValues.concat(
                                                      t.negativeValues
                                                  ),
                                                  u = i.min(r),
                                                  f = i.max(r);
                                              n.min =
                                                  null === n.min
                                                      ? u
                                                      : Math.min(n.min, u);
                                              n.max =
                                                  null === n.max
                                                      ? f
                                                      : Math.max(n.max, f);
                                          }))
                                        : i.each(e, function (r, u) {
                                              var f = t.getDatasetMeta(u);
                                              t.isDatasetVisible(u) &&
                                                  o(f) &&
                                                  i.each(
                                                      r.data,
                                                      function (t, i) {
                                                          var r =
                                                              +n.getRightValue(
                                                                  t
                                                              );
                                                          isNaN(r) ||
                                                              f.data[i]
                                                                  .hidden ||
                                                              (null === n.min
                                                                  ? (n.min = r)
                                                                  : r < n.min &&
                                                                    (n.min = r),
                                                              null === n.max
                                                                  ? (n.max = r)
                                                                  : r > n.max &&
                                                                    (n.max =
                                                                        r));
                                                      }
                                                  );
                                          });
                                    n.min =
                                        isFinite(n.min) && !isNaN(n.min)
                                            ? n.min
                                            : 0;
                                    n.max =
                                        isFinite(n.max) && !isNaN(n.max)
                                            ? n.max
                                            : 1;
                                    this.handleTickRangeOptions();
                                },
                                getTickLimit: function () {
                                    var t,
                                        n = this.options.ticks,
                                        u;
                                    return (
                                        this.isHorizontal()
                                            ? (t = Math.min(
                                                  n.maxTicksLimit
                                                      ? n.maxTicksLimit
                                                      : 11,
                                                  Math.ceil(this.width / 50)
                                              ))
                                            : ((u = i.valueOrDefault(
                                                  n.fontSize,
                                                  r.global.defaultFontSize
                                              )),
                                              (t = Math.min(
                                                  n.maxTicksLimit
                                                      ? n.maxTicksLimit
                                                      : 11,
                                                  Math.ceil(
                                                      this.height / (2 * u)
                                                  )
                                              ))),
                                        t
                                    );
                                },
                                handleDirectionalChanges: function () {
                                    this.isHorizontal() || this.ticks.reverse();
                                },
                                getLabelForIndex: function (n, t) {
                                    return +this.getRightValue(
                                        this.chart.data.datasets[t].data[n]
                                    );
                                },
                                getPixelForValue: function (n) {
                                    var t = this,
                                        i = t.start,
                                        r = +t.getRightValue(n),
                                        u = t.end - i;
                                    return t.isHorizontal()
                                        ? t.left + (t.width / u) * (r - i)
                                        : t.bottom - (t.height / u) * (r - i);
                                },
                                getValueForPixel: function (n) {
                                    var t = this,
                                        i = t.isHorizontal(),
                                        r = i ? t.width : t.height,
                                        u = (i ? n - t.left : t.bottom - n) / r;
                                    return t.start + (t.end - t.start) * u;
                                },
                                getPixelForTick: function (n) {
                                    return this.getPixelForValue(
                                        this.ticksAsNumbers[n]
                                    );
                                },
                            });
                        n.scaleService.registerScaleType("linear", f, t);
                    };
                },
                { 25: 25, 34: 34, 45: 45 },
            ],
            55: [
                function (n, t) {
                    "use strict";
                    var i = n(45);
                    t.exports = function (n) {
                        var t = i.noop;
                        n.LinearScaleBase = n.Scale.extend({
                            getRightValue: function (t) {
                                return "string" == typeof t
                                    ? +t
                                    : n.Scale.prototype.getRightValue.call(
                                          this,
                                          t
                                      );
                            },
                            handleTickRangeOptions: function () {
                                var n = this,
                                    t = n.options.ticks,
                                    r,
                                    u,
                                    f,
                                    e;
                                t.beginAtZero &&
                                    ((r = i.sign(n.min)),
                                    (u = i.sign(n.max)),
                                    r < 0 && u < 0
                                        ? (n.max = 0)
                                        : r > 0 && u > 0 && (n.min = 0));
                                f =
                                    void 0 !== t.min ||
                                    void 0 !== t.suggestedMin;
                                e =
                                    void 0 !== t.max ||
                                    void 0 !== t.suggestedMax;
                                void 0 !== t.min
                                    ? (n.min = t.min)
                                    : void 0 !== t.suggestedMin &&
                                      (n.min =
                                          null === n.min
                                              ? t.suggestedMin
                                              : Math.min(
                                                    n.min,
                                                    t.suggestedMin
                                                ));
                                void 0 !== t.max
                                    ? (n.max = t.max)
                                    : void 0 !== t.suggestedMax &&
                                      (n.max =
                                          null === n.max
                                              ? t.suggestedMax
                                              : Math.max(
                                                    n.max,
                                                    t.suggestedMax
                                                ));
                                f !== e &&
                                    n.min >= n.max &&
                                    (f
                                        ? (n.max = n.min + 1)
                                        : (n.min = n.max - 1));
                                n.min === n.max &&
                                    (n.max++, t.beginAtZero || n.min--);
                            },
                            getTickLimit: t,
                            handleDirectionalChanges: t,
                            buildTicks: function () {
                                var n = this,
                                    t = n.options.ticks,
                                    u = n.getTickLimit(),
                                    f = {
                                        maxTicks: (u = Math.max(2, u)),
                                        min: t.min,
                                        max: t.max,
                                        stepSize: i.valueOrDefault(
                                            t.fixedStepSize,
                                            t.stepSize
                                        ),
                                    },
                                    r = (n.ticks = (function (n, t) {
                                        var r,
                                            s = [],
                                            c,
                                            f,
                                            o,
                                            e,
                                            u,
                                            h;
                                        for (
                                            n.stepSize && n.stepSize > 0
                                                ? (r = n.stepSize)
                                                : ((c = i.niceNum(
                                                      t.max - t.min,
                                                      !1
                                                  )),
                                                  (r = i.niceNum(
                                                      c / (n.maxTicks - 1),
                                                      !0
                                                  ))),
                                                f = Math.floor(t.min / r) * r,
                                                o = Math.ceil(t.max / r) * r,
                                                n.min &&
                                                    n.max &&
                                                    n.stepSize &&
                                                    i.almostWhole(
                                                        (n.max - n.min) /
                                                            n.stepSize,
                                                        r / 1e3
                                                    ) &&
                                                    ((f = n.min), (o = n.max)),
                                                e = (o - f) / r,
                                                e = i.almostEquals(
                                                    e,
                                                    Math.round(e),
                                                    r / 1e3
                                                )
                                                    ? Math.round(e)
                                                    : Math.ceil(e),
                                                u = 1,
                                                r < 1 &&
                                                    ((u = Math.pow(
                                                        10,
                                                        r.toString().length - 2
                                                    )),
                                                    (f = Math.round(f * u) / u),
                                                    (o =
                                                        Math.round(o * u) / u)),
                                                s.push(
                                                    void 0 !== n.min ? n.min : f
                                                ),
                                                h = 1;
                                            h < e;
                                            ++h
                                        )
                                            s.push(
                                                Math.round((f + h * r) * u) / u
                                            );
                                        return (
                                            s.push(
                                                void 0 !== n.max ? n.max : o
                                            ),
                                            s
                                        );
                                    })(f, n));
                                n.handleDirectionalChanges();
                                n.max = i.max(r);
                                n.min = i.min(r);
                                t.reverse
                                    ? (r.reverse(),
                                      (n.start = n.max),
                                      (n.end = n.min))
                                    : ((n.start = n.min), (n.end = n.max));
                            },
                            convertTicksToLabels: function () {
                                var t = this;
                                t.ticksAsNumbers = t.ticks.slice();
                                t.zeroLineIndex = t.ticks.indexOf(0);
                                n.Scale.prototype.convertTicksToLabels.call(t);
                            },
                        });
                    };
                },
                { 45: 45 },
            ],
            56: [
                function (n, t) {
                    "use strict";
                    var i = n(45),
                        r = n(34);
                    t.exports = function (n) {
                        var t = {
                                position: "left",
                                ticks: { callback: r.formatters.logarithmic },
                            },
                            u = n.Scale.extend({
                                determineDataLimits: function () {
                                    function o(t) {
                                        return s
                                            ? t.xAxisID === n.id
                                            : t.yAxisID === n.id;
                                    }
                                    var n = this,
                                        f = n.options,
                                        t = n.chart,
                                        e = t.data.datasets,
                                        s = n.isHorizontal(),
                                        r,
                                        u;
                                    n.min = null;
                                    n.max = null;
                                    n.minNotZero = null;
                                    r = f.stacked;
                                    (void 0 === r &&
                                        i.each(e, function (n, i) {
                                            if (!r) {
                                                var u = t.getDatasetMeta(i);
                                                t.isDatasetVisible(i) &&
                                                    o(u) &&
                                                    void 0 !== u.stack &&
                                                    (r = !0);
                                            }
                                        }),
                                    f.stacked || r)
                                        ? ((u = {}),
                                          i.each(e, function (r, e) {
                                              var s = t.getDatasetMeta(e),
                                                  h = [
                                                      s.type,
                                                      void 0 === f.stacked &&
                                                      void 0 === s.stack
                                                          ? e
                                                          : "",
                                                      s.stack,
                                                  ].join(".");
                                              t.isDatasetVisible(e) &&
                                                  o(s) &&
                                                  (void 0 === u[h] &&
                                                      (u[h] = []),
                                                  i.each(
                                                      r.data,
                                                      function (t, i) {
                                                          var r = u[h],
                                                              f =
                                                                  +n.getRightValue(
                                                                      t
                                                                  );
                                                          isNaN(f) ||
                                                              s.data[i]
                                                                  .hidden ||
                                                              f < 0 ||
                                                              ((r[i] =
                                                                  r[i] || 0),
                                                              (r[i] += f));
                                                      }
                                                  ));
                                          }),
                                          i.each(u, function (t) {
                                              if (t.length > 0) {
                                                  var r = i.min(t),
                                                      u = i.max(t);
                                                  n.min =
                                                      null === n.min
                                                          ? r
                                                          : Math.min(n.min, r);
                                                  n.max =
                                                      null === n.max
                                                          ? u
                                                          : Math.max(n.max, u);
                                              }
                                          }))
                                        : i.each(e, function (r, u) {
                                              var f = t.getDatasetMeta(u);
                                              t.isDatasetVisible(u) &&
                                                  o(f) &&
                                                  i.each(
                                                      r.data,
                                                      function (t, i) {
                                                          var r =
                                                              +n.getRightValue(
                                                                  t
                                                              );
                                                          isNaN(r) ||
                                                              f.data[i]
                                                                  .hidden ||
                                                              r < 0 ||
                                                              (null === n.min
                                                                  ? (n.min = r)
                                                                  : r < n.min &&
                                                                    (n.min = r),
                                                              null === n.max
                                                                  ? (n.max = r)
                                                                  : r > n.max &&
                                                                    (n.max = r),
                                                              0 !== r &&
                                                                  (null ===
                                                                      n.minNotZero ||
                                                                      r <
                                                                          n.minNotZero) &&
                                                                  (n.minNotZero =
                                                                      r));
                                                      }
                                                  );
                                          });
                                    this.handleTickRangeOptions();
                                },
                                handleTickRangeOptions: function () {
                                    var n = this,
                                        t = n.options.ticks,
                                        r = i.valueOrDefault;
                                    n.min = r(t.min, n.min);
                                    n.max = r(t.max, n.max);
                                    n.min === n.max &&
                                        (0 !== n.min && null !== n.min
                                            ? ((n.min = Math.pow(
                                                  10,
                                                  Math.floor(i.log10(n.min)) - 1
                                              )),
                                              (n.max = Math.pow(
                                                  10,
                                                  Math.floor(i.log10(n.max)) + 1
                                              )))
                                            : ((n.min = 1), (n.max = 10)));
                                    null === n.min &&
                                        (n.min = Math.pow(
                                            10,
                                            Math.floor(i.log10(n.max)) - 1
                                        ));
                                    null === n.max &&
                                        (n.max =
                                            0 !== n.min
                                                ? Math.pow(
                                                      10,
                                                      Math.floor(
                                                          i.log10(n.min)
                                                      ) + 1
                                                  )
                                                : 10);
                                    null === n.minNotZero &&
                                        (n.minNotZero =
                                            n.min > 0
                                                ? n.min
                                                : n.max < 1
                                                ? Math.pow(
                                                      10,
                                                      Math.floor(i.log10(n.max))
                                                  )
                                                : 1);
                                },
                                buildTicks: function () {
                                    var n = this,
                                        t = n.options.ticks,
                                        r = !n.isHorizontal(),
                                        f = { min: t.min, max: t.max },
                                        u = (n.ticks = (function (n, t) {
                                            var r,
                                                f,
                                                o = [],
                                                h = i.valueOrDefault,
                                                u = h(
                                                    n.min,
                                                    Math.pow(
                                                        10,
                                                        Math.floor(
                                                            i.log10(t.min)
                                                        )
                                                    )
                                                ),
                                                s = Math.floor(i.log10(t.max)),
                                                l = Math.ceil(
                                                    t.max / Math.pow(10, s)
                                                ),
                                                e,
                                                c;
                                            for (
                                                0 === u
                                                    ? ((r = Math.floor(
                                                          i.log10(t.minNotZero)
                                                      )),
                                                      (f = Math.floor(
                                                          t.minNotZero /
                                                              Math.pow(10, r)
                                                      )),
                                                      o.push(u),
                                                      (u = f * Math.pow(10, r)))
                                                    : ((r = Math.floor(
                                                          i.log10(u)
                                                      )),
                                                      (f = Math.floor(
                                                          u / Math.pow(10, r)
                                                      ))),
                                                    e =
                                                        r < 0
                                                            ? Math.pow(
                                                                  10,
                                                                  Math.abs(r)
                                                              )
                                                            : 1;
                                                o.push(u),
                                                    10 == ++f &&
                                                        ((f = 1),
                                                        (e = ++r >= 0 ? 1 : e)),
                                                    (u =
                                                        Math.round(
                                                            f *
                                                                Math.pow(
                                                                    10,
                                                                    r
                                                                ) *
                                                                e
                                                        ) / e),
                                                    r < s || (r === s && f < l);

                                            );
                                            return (
                                                (c = h(n.max, u)), o.push(c), o
                                            );
                                        })(f, n));
                                    n.max = i.max(u);
                                    n.min = i.min(u);
                                    t.reverse
                                        ? ((r = !r),
                                          (n.start = n.max),
                                          (n.end = n.min))
                                        : ((n.start = n.min), (n.end = n.max));
                                    r && u.reverse();
                                },
                                convertTicksToLabels: function () {
                                    this.tickValues = this.ticks.slice();
                                    n.Scale.prototype.convertTicksToLabels.call(
                                        this
                                    );
                                },
                                getLabelForIndex: function (n, t) {
                                    return +this.getRightValue(
                                        this.chart.data.datasets[t].data[n]
                                    );
                                },
                                getPixelForTick: function (n) {
                                    return this.getPixelForValue(
                                        this.tickValues[n]
                                    );
                                },
                                _getFirstTickValue: function (n) {
                                    var t = Math.floor(i.log10(n));
                                    return (
                                        Math.floor(n / Math.pow(10, t)) *
                                        Math.pow(10, t)
                                    );
                                },
                                getPixelForValue: function (t) {
                                    var f,
                                        e,
                                        u,
                                        h,
                                        o,
                                        r = this,
                                        c = r.options.ticks.reverse,
                                        s = i.log10,
                                        a = r._getFirstTickValue(r.minNotZero),
                                        l = 0;
                                    return (
                                        (t = +r.getRightValue(t)),
                                        c
                                            ? ((u = r.end),
                                              (h = r.start),
                                              (o = -1))
                                            : ((u = r.start),
                                              (h = r.end),
                                              (o = 1)),
                                        r.isHorizontal()
                                            ? ((f = r.width),
                                              (e = c ? r.right : r.left))
                                            : ((f = r.height),
                                              (o *= -1),
                                              (e = c ? r.top : r.bottom)),
                                        t !== u &&
                                            (0 === u &&
                                                ((f -= l =
                                                    i.getValueOrDefault(
                                                        r.options.ticks
                                                            .fontSize,
                                                        n.defaults.global
                                                            .defaultFontSize
                                                    )),
                                                (u = a)),
                                            0 !== t &&
                                                (l +=
                                                    (f / (s(h) - s(u))) *
                                                    (s(t) - s(u))),
                                            (e += o * l)),
                                        e
                                    );
                                },
                                getValueForPixel: function (t) {
                                    var e,
                                        f,
                                        o,
                                        u,
                                        r = this,
                                        s = r.options.ticks.reverse,
                                        h = i.log10,
                                        l = r._getFirstTickValue(r.minNotZero),
                                        c;
                                    return (
                                        (s
                                            ? ((f = r.end), (o = r.start))
                                            : ((f = r.start), (o = r.end)),
                                        r.isHorizontal()
                                            ? ((e = r.width),
                                              (u = s
                                                  ? r.right - t
                                                  : t - r.left))
                                            : ((e = r.height),
                                              (u = s
                                                  ? t - r.top
                                                  : r.bottom - t)),
                                        u !== f) &&
                                            (0 === f &&
                                                ((c = i.getValueOrDefault(
                                                    r.options.ticks.fontSize,
                                                    n.defaults.global
                                                        .defaultFontSize
                                                )),
                                                (u -= c),
                                                (e -= c),
                                                (f = l)),
                                            (u *= h(o) - h(f)),
                                            (u /= e),
                                            (u = Math.pow(10, h(f) + u))),
                                        u
                                    );
                                },
                            });
                        n.scaleService.registerScaleType("logarithmic", u, t);
                    };
                },
                { 34: 34, 45: 45 },
            ],
            57: [
                function (n, t) {
                    "use strict";
                    var r = n(25),
                        i = n(45),
                        u = n(34);
                    t.exports = function (n) {
                        function f(n) {
                            var t = n.options;
                            return t.angleLines.display || t.pointLabels.display
                                ? n.chart.data.labels.length
                                : 0;
                        }
                        function o(n) {
                            var r = n.options.pointLabels,
                                u = i.valueOrDefault(
                                    r.fontSize,
                                    t.defaultFontSize
                                ),
                                f = i.valueOrDefault(
                                    r.fontStyle,
                                    t.defaultFontStyle
                                ),
                                e = i.valueOrDefault(
                                    r.fontFamily,
                                    t.defaultFontFamily
                                );
                            return {
                                size: u,
                                style: f,
                                family: e,
                                font: i.fontString(u, f, e),
                            };
                        }
                        function s(n, t, i, r, u) {
                            return n === r || n === u
                                ? { start: t - i / 2, end: t + i / 2 }
                                : n < r || n > u
                                ? { start: t - i - 5, end: t }
                                : { start: t, end: t + i + 5 };
                        }
                        function c(n, t, r, u) {
                            if (i.isArray(t))
                                for (
                                    var e = r.y, o = 1.5 * u, f = 0;
                                    f < t.length;
                                    ++f
                                )
                                    n.fillText(t[f], r.x, e), (e += o);
                            else n.fillText(t, r.x, r.y);
                        }
                        function e(n) {
                            return i.isNumber(n) ? n : 0;
                        }
                        var t = r.global,
                            h = {
                                display: !0,
                                animate: !0,
                                position: "chartArea",
                                angleLines: {
                                    display: !0,
                                    color: "rgba(0, 0, 0, 0.1)",
                                    lineWidth: 1,
                                },
                                gridLines: { circular: !1 },
                                ticks: {
                                    showLabelBackdrop: !0,
                                    backdropColor: "rgba(255,255,255,0.75)",
                                    backdropPaddingY: 2,
                                    backdropPaddingX: 2,
                                    callback: u.formatters.linear,
                                },
                                pointLabels: {
                                    display: !0,
                                    fontSize: 10,
                                    callback: function (n) {
                                        return n;
                                    },
                                },
                            },
                            l = n.LinearScaleBase.extend({
                                setDimensions: function () {
                                    var n = this,
                                        u = n.options,
                                        f = u.ticks,
                                        r,
                                        e;
                                    n.width = n.maxWidth;
                                    n.height = n.maxHeight;
                                    n.xCenter = Math.round(n.width / 2);
                                    n.yCenter = Math.round(n.height / 2);
                                    r = i.min([n.height, n.width]);
                                    e = i.valueOrDefault(
                                        f.fontSize,
                                        t.defaultFontSize
                                    );
                                    n.drawingArea = u.display
                                        ? r / 2 - (e / 2 + f.backdropPaddingY)
                                        : r / 2;
                                },
                                determineDataLimits: function () {
                                    var n = this,
                                        u = n.chart,
                                        t = Number.POSITIVE_INFINITY,
                                        r = Number.NEGATIVE_INFINITY;
                                    i.each(u.data.datasets, function (f, e) {
                                        if (u.isDatasetVisible(e)) {
                                            var o = u.getDatasetMeta(e);
                                            i.each(f.data, function (i, u) {
                                                var f = +n.getRightValue(i);
                                                isNaN(f) ||
                                                    o.data[u].hidden ||
                                                    ((t = Math.min(f, t)),
                                                    (r = Math.max(f, r)));
                                            });
                                        }
                                    });
                                    n.min =
                                        t === Number.POSITIVE_INFINITY ? 0 : t;
                                    n.max =
                                        r === Number.NEGATIVE_INFINITY ? 0 : r;
                                    n.handleTickRangeOptions();
                                },
                                getTickLimit: function () {
                                    var n = this.options.ticks,
                                        r = i.valueOrDefault(
                                            n.fontSize,
                                            t.defaultFontSize
                                        );
                                    return Math.min(
                                        n.maxTicksLimit ? n.maxTicksLimit : 11,
                                        Math.ceil(this.drawingArea / (1.5 * r))
                                    );
                                },
                                convertTicksToLabels: function () {
                                    var t = this;
                                    n.LinearScaleBase.prototype.convertTicksToLabels.call(
                                        t
                                    );
                                    t.pointLabels = t.chart.data.labels.map(
                                        t.options.pointLabels.callback,
                                        t
                                    );
                                },
                                getLabelForIndex: function (n, t) {
                                    return +this.getRightValue(
                                        this.chart.data.datasets[t].data[n]
                                    );
                                },
                                fit: function () {
                                    var n, t;
                                    this.options.pointLabels.display
                                        ? (function (n) {
                                              var r,
                                                  c,
                                                  p,
                                                  w = o(n),
                                                  b = Math.min(
                                                      n.height / 2,
                                                      n.width / 2
                                                  ),
                                                  t = {
                                                      r: n.width,
                                                      l: 0,
                                                      t: n.height,
                                                      b: 0,
                                                  },
                                                  e = {},
                                                  l,
                                                  a,
                                                  u,
                                                  k;
                                              for (
                                                  n.ctx.font = w.font,
                                                      n._pointLabelSizes = [],
                                                      k = f(n),
                                                      r = 0;
                                                  r < k;
                                                  r++
                                              ) {
                                                  p = n.getPointPosition(r, b);
                                                  l = n.ctx;
                                                  a = w.size;
                                                  u = n.pointLabels[r] || "";
                                                  c = i.isArray(u)
                                                      ? {
                                                            w: i.longestText(
                                                                l,
                                                                l.font,
                                                                u
                                                            ),
                                                            h:
                                                                u.length * a +
                                                                1.5 *
                                                                    (u.length -
                                                                        1) *
                                                                    a,
                                                        }
                                                      : {
                                                            w: l.measureText(u)
                                                                .width,
                                                            h: a,
                                                        };
                                                  n._pointLabelSizes[r] = c;
                                                  var h = n.getIndexAngle(r),
                                                      d = i.toDegrees(h) % 360,
                                                      v = s(
                                                          d,
                                                          p.x,
                                                          c.w,
                                                          0,
                                                          180
                                                      ),
                                                      y = s(
                                                          d,
                                                          p.y,
                                                          c.h,
                                                          90,
                                                          270
                                                      );
                                                  v.start < t.l &&
                                                      ((t.l = v.start),
                                                      (e.l = h));
                                                  v.end > t.r &&
                                                      ((t.r = v.end),
                                                      (e.r = h));
                                                  y.start < t.t &&
                                                      ((t.t = y.start),
                                                      (e.t = h));
                                                  y.end > t.b &&
                                                      ((t.b = y.end),
                                                      (e.b = h));
                                              }
                                              n.setReductions(b, t, e);
                                          })(this)
                                        : ((n = this),
                                          (t = Math.min(
                                              n.height / 2,
                                              n.width / 2
                                          )),
                                          (n.drawingArea = Math.round(t)),
                                          n.setCenterPoint(0, 0, 0, 0));
                                },
                                setReductions: function (n, t, i) {
                                    var r = t.l / Math.sin(i.l),
                                        u =
                                            Math.max(t.r - this.width, 0) /
                                            Math.sin(i.r),
                                        f = -t.t / Math.cos(i.t),
                                        o =
                                            -Math.max(t.b - this.height, 0) /
                                            Math.cos(i.b);
                                    r = e(r);
                                    u = e(u);
                                    f = e(f);
                                    o = e(o);
                                    this.drawingArea = Math.min(
                                        Math.round(n - (r + u) / 2),
                                        Math.round(n - (f + o) / 2)
                                    );
                                    this.setCenterPoint(r, u, f, o);
                                },
                                setCenterPoint: function (n, t, i, r) {
                                    var u = this,
                                        f = u.width - t - u.drawingArea,
                                        e = n + u.drawingArea,
                                        o = i + u.drawingArea,
                                        s = u.height - r - u.drawingArea;
                                    u.xCenter = Math.round(
                                        (e + f) / 2 + u.left
                                    );
                                    u.yCenter = Math.round((o + s) / 2 + u.top);
                                },
                                getIndexAngle: function (n) {
                                    return (
                                        n * ((2 * Math.PI) / f(this)) +
                                        ((this.chart.options &&
                                        this.chart.options.startAngle
                                            ? this.chart.options.startAngle
                                            : 0) *
                                            Math.PI) /
                                            180
                                    );
                                },
                                getDistanceFromCenterForValue: function (n) {
                                    var t = this,
                                        i;
                                    return null === n
                                        ? 0
                                        : ((i =
                                              t.drawingArea / (t.max - t.min)),
                                          t.options.ticks.reverse
                                              ? (t.max - n) * i
                                              : (n - t.min) * i);
                                },
                                getPointPosition: function (n, t) {
                                    var i = this.getIndexAngle(n) - Math.PI / 2;
                                    return {
                                        x:
                                            Math.round(Math.cos(i) * t) +
                                            this.xCenter,
                                        y:
                                            Math.round(Math.sin(i) * t) +
                                            this.yCenter,
                                    };
                                },
                                getPointPositionForValue: function (n, t) {
                                    return this.getPointPosition(
                                        n,
                                        this.getDistanceFromCenterForValue(t)
                                    );
                                },
                                getBasePosition: function () {
                                    var n = this.min,
                                        t = this.max;
                                    return this.getPointPositionForValue(
                                        0,
                                        this.beginAtZero
                                            ? 0
                                            : n < 0 && t < 0
                                            ? t
                                            : n > 0 && t > 0
                                            ? n
                                            : 0
                                    );
                                },
                                draw: function () {
                                    var u = this,
                                        e = u.options,
                                        l = e.gridLines,
                                        n = e.ticks,
                                        s = i.valueOrDefault;
                                    if (e.display) {
                                        var r = u.ctx,
                                            a = this.getIndexAngle(0),
                                            h = s(
                                                n.fontSize,
                                                t.defaultFontSize
                                            ),
                                            v = s(
                                                n.fontStyle,
                                                t.defaultFontStyle
                                            ),
                                            y = s(
                                                n.fontFamily,
                                                t.defaultFontFamily
                                            ),
                                            p = i.fontString(h, v, y);
                                        i.each(u.ticks, function (e, o) {
                                            var c, y, v;
                                            (o > 0 || n.reverse) &&
                                                ((c =
                                                    u.getDistanceFromCenterForValue(
                                                        u.ticksAsNumbers[o]
                                                    )),
                                                (l.display &&
                                                    0 !== o &&
                                                    (function (n, t, r, u) {
                                                        var e = n.ctx,
                                                            h,
                                                            o,
                                                            s;
                                                        if (
                                                            ((e.strokeStyle =
                                                                i.valueAtIndexOrDefault(
                                                                    t.color,
                                                                    u - 1
                                                                )),
                                                            (e.lineWidth =
                                                                i.valueAtIndexOrDefault(
                                                                    t.lineWidth,
                                                                    u - 1
                                                                )),
                                                            n.options.gridLines
                                                                .circular)
                                                        )
                                                            e.beginPath(),
                                                                e.arc(
                                                                    n.xCenter,
                                                                    n.yCenter,
                                                                    r,
                                                                    0,
                                                                    2 * Math.PI
                                                                ),
                                                                e.closePath(),
                                                                e.stroke();
                                                        else {
                                                            if (
                                                                ((h = f(n)),
                                                                0 === h)
                                                            )
                                                                return;
                                                            for (
                                                                e.beginPath(),
                                                                    o =
                                                                        n.getPointPosition(
                                                                            0,
                                                                            r
                                                                        ),
                                                                    e.moveTo(
                                                                        o.x,
                                                                        o.y
                                                                    ),
                                                                    s = 1;
                                                                s < h;
                                                                s++
                                                            )
                                                                (o =
                                                                    n.getPointPosition(
                                                                        s,
                                                                        r
                                                                    )),
                                                                    e.lineTo(
                                                                        o.x,
                                                                        o.y
                                                                    );
                                                            e.closePath();
                                                            e.stroke();
                                                        }
                                                    })(u, l, c, o),
                                                n.display) &&
                                                    ((y = s(
                                                        n.fontColor,
                                                        t.defaultFontColor
                                                    )),
                                                    ((r.font = p),
                                                    r.save(),
                                                    r.translate(
                                                        u.xCenter,
                                                        u.yCenter
                                                    ),
                                                    r.rotate(a),
                                                    n.showLabelBackdrop) &&
                                                        ((v =
                                                            r.measureText(
                                                                e
                                                            ).width),
                                                        (r.fillStyle =
                                                            n.backdropColor),
                                                        r.fillRect(
                                                            -v / 2 -
                                                                n.backdropPaddingX,
                                                            -c -
                                                                h / 2 -
                                                                n.backdropPaddingY,
                                                            v +
                                                                2 *
                                                                    n.backdropPaddingX,
                                                            h +
                                                                2 *
                                                                    n.backdropPaddingY
                                                        )),
                                                    (r.textAlign = "center"),
                                                    (r.textBaseline = "middle"),
                                                    (r.fillStyle = y),
                                                    r.fillText(e, 0, -c),
                                                    r.restore()));
                                        });
                                        (e.angleLines.display ||
                                            e.pointLabels.display) &&
                                            (function (n) {
                                                var r = n.ctx,
                                                    s = n.options,
                                                    h = s.angleLines,
                                                    d = s.pointLabels,
                                                    e,
                                                    l,
                                                    a,
                                                    v,
                                                    y,
                                                    p,
                                                    u,
                                                    w,
                                                    b,
                                                    g,
                                                    nt,
                                                    k;
                                                for (
                                                    r.lineWidth = h.lineWidth,
                                                        r.strokeStyle = h.color,
                                                        y =
                                                            n.getDistanceFromCenterForValue(
                                                                s.ticks.reverse
                                                                    ? n.min
                                                                    : n.max
                                                            ),
                                                        p = o(n),
                                                        r.textBaseline = "top",
                                                        u = f(n) - 1;
                                                    u >= 0;
                                                    u--
                                                )
                                                    h.display &&
                                                        ((w =
                                                            n.getPointPosition(
                                                                u,
                                                                y
                                                            )),
                                                        r.beginPath(),
                                                        r.moveTo(
                                                            n.xCenter,
                                                            n.yCenter
                                                        ),
                                                        r.lineTo(w.x, w.y),
                                                        r.stroke(),
                                                        r.closePath()),
                                                        d.display &&
                                                            ((b =
                                                                n.getPointPosition(
                                                                    u,
                                                                    y + 5
                                                                )),
                                                            (g =
                                                                i.valueAtIndexOrDefault(
                                                                    d.fontColor,
                                                                    u,
                                                                    t.defaultFontColor
                                                                )),
                                                            (r.font = p.font),
                                                            (r.fillStyle = g),
                                                            (nt =
                                                                n.getIndexAngle(
                                                                    u
                                                                )),
                                                            (k =
                                                                i.toDegrees(
                                                                    nt
                                                                )),
                                                            (r.textAlign =
                                                                0 === (v = k) ||
                                                                180 === v
                                                                    ? "center"
                                                                    : v < 180
                                                                    ? "left"
                                                                    : "right"),
                                                            (e = k),
                                                            (l =
                                                                n
                                                                    ._pointLabelSizes[
                                                                    u
                                                                ]),
                                                            (a = b),
                                                            90 === e ||
                                                            270 === e
                                                                ? (a.y -=
                                                                      l.h / 2)
                                                                : (e > 270 ||
                                                                      e < 90) &&
                                                                  (a.y -= l.h),
                                                            c(
                                                                r,
                                                                n.pointLabels[
                                                                    u
                                                                ] || "",
                                                                b,
                                                                p.size
                                                            ));
                                            })(u);
                                    }
                                },
                            });
                        n.scaleService.registerScaleType("radialLinear", l, h);
                    };
                },
                { 25: 25, 34: 34, 45: 45 },
            ],
            58: [
                function (n, t) {
                    "use strict";
                    function l(n, t) {
                        return n - t;
                    }
                    function a(n) {
                        for (
                            var i, u = {}, f = [], t = 0, r = n.length;
                            t < r;
                            ++t
                        )
                            u[(i = n[t])] || ((u[i] = !0), f.push(i));
                        return f;
                    }
                    function o(n, t, i, r) {
                        var u = (function (n, t, i) {
                                for (
                                    var u, f, r, e = 0, o = n.length - 1;
                                    e >= 0 && e <= o;

                                ) {
                                    if (
                                        ((f =
                                            n[(u = (e + o) >> 1) - 1] || null),
                                        (r = n[u]),
                                        !f)
                                    )
                                        return { lo: null, hi: r };
                                    if (r[t] < i) e = u + 1;
                                    else {
                                        if (!(f[t] > i))
                                            return { lo: f, hi: r };
                                        o = u - 1;
                                    }
                                }
                                return { lo: r, hi: null };
                            })(n, t, i),
                            f = u.lo ? (u.hi ? u.lo : n[n.length - 2]) : n[0],
                            e = u.lo ? (u.hi ? u.hi : n[n.length - 1]) : n[1],
                            o = e[t] - f[t],
                            s = o ? (i - f[t]) / o : 0,
                            h = (e[r] - f[r]) * s;
                        return f[r] + h;
                    }
                    function s(n, t) {
                        var u = t.parser,
                            r = t.parser || t.format;
                        return "function" == typeof u
                            ? u(n)
                            : "string" == typeof n && "string" == typeof r
                            ? i(n, r)
                            : (n instanceof i || (n = i(n)),
                              n.isValid()
                                  ? n
                                  : "function" == typeof r
                                  ? r(n)
                                  : n);
                    }
                    function f(n, t) {
                        if (u.isNullOrUndef(n)) return null;
                        var i = t.options.time,
                            r = s(t.getRightValue(n), i);
                        return r.isValid()
                            ? (i.round && r.startOf(i.round), r.valueOf())
                            : null;
                    }
                    function v(n) {
                        for (var t = r.indexOf(n) + 1, i = r.length; t < i; ++t)
                            if (e[r[t]].common) return r[t];
                    }
                    function p(n, t, f, o) {
                        var c,
                            l = o.time,
                            s =
                                l.unit ||
                                (function (n, t, i, u) {
                                    for (
                                        var o,
                                            s,
                                            c = r.length,
                                            f = r.indexOf(n);
                                        f < c - 1;
                                        ++f
                                    )
                                        if (
                                            ((s = (o = e[r[f]]).steps
                                                ? o.steps[o.steps.length - 1]
                                                : h),
                                            o.common &&
                                                Math.ceil(
                                                    (i - t) / (s * o.size)
                                                ) <= u)
                                        )
                                            return r[f];
                                    return r[c - 1];
                                })(l.minUnit, n, t, f),
                            k = v(s),
                            w = u.valueOrDefault(l.stepSize, l.unitStepSize),
                            a = "week" === s && l.isoWeekday,
                            d = o.ticks.major.enabled,
                            g = e[s],
                            y = i(n),
                            p = i(t),
                            b = [];
                        for (
                            w ||
                                (w = (function (n, t, i, r) {
                                    var u,
                                        s,
                                        f,
                                        h = t - n,
                                        c = e[i],
                                        l = c.size,
                                        o = c.steps;
                                    if (!o) return Math.ceil(h / (r * l));
                                    for (
                                        u = 0, s = o.length;
                                        u < s &&
                                        ((f = o[u]),
                                        !(Math.ceil(h / (l * f)) <= r));
                                        ++u
                                    );
                                    return f;
                                })(n, t, s, f)),
                                a &&
                                    ((y = y.isoWeekday(a)),
                                    (p = p.isoWeekday(a))),
                                y = y.startOf(a ? "day" : s),
                                (p = p.startOf(a ? "day" : s)) < t &&
                                    p.add(1, s),
                                c = i(y),
                                d &&
                                    k &&
                                    !a &&
                                    !l.round &&
                                    (c.startOf(k),
                                    c.add(~~((y - c) / (g.size * w)) * w, s));
                            c < p;
                            c.add(w, s)
                        )
                            b.push(+c);
                        return b.push(+c), b;
                    }
                    var i = n(1);
                    i = "function" == typeof i ? i : window.moment;
                    var y = n(25),
                        u = n(45),
                        c = Number.MIN_SAFE_INTEGER || -9007199254740991,
                        h = Number.MAX_SAFE_INTEGER || 9007199254740991,
                        e = {
                            millisecond: {
                                common: !0,
                                size: 1,
                                steps: [1, 2, 5, 10, 20, 50, 100, 250, 500],
                            },
                            second: {
                                common: !0,
                                size: 1e3,
                                steps: [1, 2, 5, 10, 30],
                            },
                            minute: {
                                common: !0,
                                size: 6e4,
                                steps: [1, 2, 5, 10, 30],
                            },
                            hour: {
                                common: !0,
                                size: 36e5,
                                steps: [1, 2, 3, 6, 12],
                            },
                            day: { common: !0, size: 864e5, steps: [1, 2, 5] },
                            week: {
                                common: !1,
                                size: 6048e5,
                                steps: [1, 2, 3, 4],
                            },
                            month: {
                                common: !0,
                                size: 2628e6,
                                steps: [1, 2, 3],
                            },
                            quarter: {
                                common: !1,
                                size: 7884e6,
                                steps: [1, 2, 3, 4],
                            },
                            year: { common: !0, size: 3154e7 },
                        },
                        r = Object.keys(e);
                    t.exports = function (n) {
                        var t = n.Scale.extend({
                            initialize: function () {
                                if (!i)
                                    throw new Error(
                                        "Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com"
                                    );
                                this.mergeTicksOptions();
                                n.Scale.prototype.initialize.call(this);
                            },
                            update: function () {
                                var t = this.options;
                                return (
                                    t.time &&
                                        t.time.format &&
                                        console.warn(
                                            "options.time.format is deprecated and replaced by options.time.parser."
                                        ),
                                    n.Scale.prototype.update.apply(
                                        this,
                                        arguments
                                    )
                                );
                            },
                            getRightValue: function (t) {
                                return (
                                    t && void 0 !== t.t && (t = t.t),
                                    n.Scale.prototype.getRightValue.call(
                                        this,
                                        t
                                    )
                                );
                            },
                            determineDataLimits: function () {
                                for (
                                    var v,
                                        g,
                                        b,
                                        k,
                                        t = this,
                                        y = t.chart,
                                        d = t.options.time,
                                        nt = d.unit || "day",
                                        r = h,
                                        e = c,
                                        o = [],
                                        p = [],
                                        s = [],
                                        n = 0,
                                        w = y.data.labels.length;
                                    n < w;
                                    ++n
                                )
                                    s.push(f(y.data.labels[n], t));
                                for (
                                    n = 0, w = (y.data.datasets || []).length;
                                    n < w;
                                    ++n
                                )
                                    if (y.isDatasetVisible(n))
                                        if (
                                            ((b = y.data.datasets[n].data),
                                            u.isObject(b[0]))
                                        )
                                            for (
                                                p[n] = [], v = 0, g = b.length;
                                                v < g;
                                                ++v
                                            )
                                                (k = f(b[v], t)),
                                                    o.push(k),
                                                    (p[n][v] = k);
                                        else
                                            o.push.apply(o, s),
                                                (p[n] = s.slice(0));
                                    else p[n] = [];
                                s.length &&
                                    ((s = a(s).sort(l)),
                                    (r = Math.min(r, s[0])),
                                    (e = Math.max(e, s[s.length - 1])));
                                o.length &&
                                    ((o = a(o).sort(l)),
                                    (r = Math.min(r, o[0])),
                                    (e = Math.max(e, o[o.length - 1])));
                                r = f(d.min, t) || r;
                                e = f(d.max, t) || e;
                                r = r === h ? +i().startOf(nt) : r;
                                e = e === c ? +i().endOf(nt) + 1 : e;
                                t.min = Math.min(r, e);
                                t.max = Math.max(r + 1, e);
                                t._horizontal = t.isHorizontal();
                                t._table = [];
                                t._timestamps = {
                                    data: o,
                                    datasets: p,
                                    labels: s,
                                };
                            },
                            buildTicks: function () {
                                var w,
                                    rt,
                                    g,
                                    a,
                                    t,
                                    ut,
                                    ft,
                                    nt,
                                    b,
                                    k,
                                    tt,
                                    it,
                                    n = this,
                                    u = n.min,
                                    c = n.max,
                                    l = n.options,
                                    y = l.time,
                                    h = [],
                                    d = [];
                                switch (l.ticks.source) {
                                    case "data":
                                        h = n._timestamps.data;
                                        break;
                                    case "labels":
                                        h = n._timestamps.labels;
                                        break;
                                    case "auto":
                                    default:
                                        h = p(u, c, n.getLabelCapacity(u), l);
                                }
                                for (
                                    "ticks" === l.bounds &&
                                        h.length &&
                                        ((u = h[0]), (c = h[h.length - 1])),
                                        u = f(y.min, n) || u,
                                        c = f(y.max, n) || c,
                                        w = 0,
                                        rt = h.length;
                                    w < rt;
                                    ++w
                                )
                                    (g = h[w]) >= u && g <= c && d.push(g);
                                return (
                                    (n.min = u),
                                    (n.max = c),
                                    (n._unit =
                                        y.unit ||
                                        (function (n, t, u, f) {
                                            for (
                                                var s,
                                                    h = i.duration(
                                                        i(f).diff(i(u))
                                                    ),
                                                    o = r.length - 1;
                                                o >= r.indexOf(t);
                                                o--
                                            )
                                                if (
                                                    ((s = r[o]),
                                                    e[s].common &&
                                                        h.as(s) >= n.length)
                                                )
                                                    return s;
                                            return r[t ? r.indexOf(t) : 0];
                                        })(d, y.minUnit, n.min, n.max)),
                                    (n._majorUnit = v(n._unit)),
                                    (n._table = (function (n, t, i, r) {
                                        if ("linear" === r || !n.length)
                                            return [
                                                { time: t, pos: 0 },
                                                { time: i, pos: 1 },
                                            ];
                                        for (
                                            var s,
                                                f,
                                                h,
                                                c = [],
                                                e = [t],
                                                u = 0,
                                                o = n.length;
                                            u < o;
                                            ++u
                                        )
                                            (f = n[u]) > t &&
                                                f < i &&
                                                e.push(f);
                                        for (
                                            e.push(i), u = 0, o = e.length;
                                            u < o;
                                            ++u
                                        )
                                            (h = e[u + 1]),
                                                (s = e[u - 1]),
                                                (f = e[u]),
                                                (void 0 !== s &&
                                                    void 0 !== h &&
                                                    Math.round((h + s) / 2) ===
                                                        f) ||
                                                    c.push({
                                                        time: f,
                                                        pos: u / (o - 1),
                                                    });
                                        return c;
                                    })(
                                        n._timestamps.data,
                                        u,
                                        c,
                                        l.distribution
                                    )),
                                    (n._offsets =
                                        ((a = n._table),
                                        (t = d),
                                        (ut = u),
                                        (ft = c),
                                        (tt = 0),
                                        (it = 0),
                                        (nt = l).offset &&
                                            t.length &&
                                            (nt.time.min ||
                                                ((b = t.length > 1 ? t[1] : ft),
                                                (k = t[0]),
                                                (tt =
                                                    (o(a, "time", b, "pos") -
                                                        o(
                                                            a,
                                                            "time",
                                                            k,
                                                            "pos"
                                                        )) /
                                                    2)),
                                            nt.time.max ||
                                                ((b = t[t.length - 1]),
                                                (k =
                                                    t.length > 1
                                                        ? t[t.length - 2]
                                                        : ut),
                                                (it =
                                                    (o(a, "time", b, "pos") -
                                                        o(
                                                            a,
                                                            "time",
                                                            k,
                                                            "pos"
                                                        )) /
                                                    2))),
                                        { left: tt, right: it })),
                                    (n._labelFormat = (function (n, t) {
                                        for (
                                            var r, u, f = n.length, i = 0;
                                            i < f;
                                            i++
                                        ) {
                                            if (
                                                0 !==
                                                (r = s(n[i], t)).millisecond()
                                            )
                                                return "MMM D, YYYY h:mm:ss.SSS a";
                                            (0 === r.second() &&
                                                0 === r.minute() &&
                                                0 === r.hour()) ||
                                                (u = !0);
                                        }
                                        return u
                                            ? "MMM D, YYYY h:mm:ss a"
                                            : "MMM D, YYYY";
                                    })(n._timestamps.data, y)),
                                    (function (n, t) {
                                        for (
                                            var u,
                                                e,
                                                o = [],
                                                r = 0,
                                                f = n.length;
                                            r < f;
                                            ++r
                                        )
                                            (u = n[r]),
                                                (e =
                                                    !!t &&
                                                    u === +i(u).startOf(t)),
                                                o.push({ value: u, major: e });
                                        return o;
                                    })(d, n._majorUnit)
                                );
                            },
                            getLabelForIndex: function (n, t) {
                                var r = this.chart.data,
                                    f = this.options.time,
                                    i =
                                        r.labels && n < r.labels.length
                                            ? r.labels[n]
                                            : "",
                                    e = r.datasets[t].data[n];
                                return (
                                    u.isObject(e) &&
                                        (i = this.getRightValue(e)),
                                    f.tooltipFormat
                                        ? s(i, f).format(f.tooltipFormat)
                                        : "string" == typeof i
                                        ? i
                                        : s(i, f).format(this._labelFormat)
                                );
                            },
                            tickFormatFunction: function (n, t, i, r) {
                                var f = this.options,
                                    y = n.valueOf(),
                                    o = f.time.displayFormats,
                                    p = o[this._unit],
                                    e = this._majorUnit,
                                    s = o[e],
                                    w = n.clone().startOf(e).valueOf(),
                                    h = f.ticks.major,
                                    c = h.enabled && e && s && y === w,
                                    l = n.format(r || (c ? s : p)),
                                    a = c ? h : f.ticks.minor,
                                    v = u.valueOrDefault(
                                        a.callback,
                                        a.userCallback
                                    );
                                return v ? v(l, t, i) : l;
                            },
                            convertTicksToLabels: function (n) {
                                for (
                                    var u = [], t = 0, r = n.length;
                                    t < r;
                                    ++t
                                )
                                    u.push(
                                        this.tickFormatFunction(
                                            i(n[t].value),
                                            t,
                                            n
                                        )
                                    );
                                return u;
                            },
                            getPixelForOffset: function (n) {
                                var t = this,
                                    i = t._horizontal ? t.width : t.height,
                                    r = t._horizontal ? t.left : t.top,
                                    u = o(t._table, "time", n, "pos");
                                return (
                                    r +
                                    (i * (t._offsets.left + u)) /
                                        (t._offsets.left + 1 + t._offsets.right)
                                );
                            },
                            getPixelForValue: function (n, t, i) {
                                var r = null;
                                if (
                                    (void 0 !== t &&
                                        void 0 !== i &&
                                        (r = this._timestamps.datasets[i][t]),
                                    null === r && (r = f(n, this)),
                                    null !== r)
                                )
                                    return this.getPixelForOffset(r);
                            },
                            getPixelForTick: function (n) {
                                var t = this.getTicks();
                                return n >= 0 && n < t.length
                                    ? this.getPixelForOffset(t[n].value)
                                    : null;
                            },
                            getValueForPixel: function (n) {
                                var t = this,
                                    r = t._horizontal ? t.width : t.height,
                                    u = t._horizontal ? t.left : t.top,
                                    f =
                                        (r ? (n - u) / r : 0) *
                                            (t._offsets.left +
                                                1 +
                                                t._offsets.left) -
                                        t._offsets.right,
                                    e = o(t._table, "pos", f, "time");
                                return i(e);
                            },
                            getLabelWidth: function (n) {
                                var t = this.options.ticks,
                                    r = this.ctx.measureText(n).width,
                                    i = u.toRadians(t.maxRotation),
                                    f = Math.cos(i),
                                    e = Math.sin(i);
                                return (
                                    r * f +
                                    u.valueOrDefault(
                                        t.fontSize,
                                        y.global.defaultFontSize
                                    ) *
                                        e
                                );
                            },
                            getLabelCapacity: function (n) {
                                var t = this,
                                    u =
                                        t.options.time.displayFormats
                                            .millisecond,
                                    f = t.tickFormatFunction(i(n), 0, [], u),
                                    e = t.getLabelWidth(f),
                                    o = t.isHorizontal() ? t.width : t.height,
                                    r = Math.floor(o / e);
                                return r > 0 ? r : 1;
                            },
                        });
                        n.scaleService.registerScaleType("time", t, {
                            position: "bottom",
                            distribution: "linear",
                            bounds: "data",
                            time: {
                                parser: !1,
                                format: !1,
                                unit: !1,
                                round: !1,
                                displayFormat: !1,
                                isoWeekday: !1,
                                minUnit: "millisecond",
                                displayFormats: {
                                    millisecond: "h:mm:ss.SSS a",
                                    second: "h:mm:ss a",
                                    minute: "h:mm a",
                                    hour: "hA",
                                    day: "MMM D",
                                    week: "ll",
                                    month: "MMM YYYY",
                                    quarter: "[Q]Q - YYYY",
                                    year: "YYYY",
                                },
                            },
                            ticks: {
                                autoSkip: !1,
                                source: "auto",
                                major: { enabled: !1 },
                            },
                        });
                    };
                },
                { 1: 1, 25: 25, 45: 45 },
            ],
        },
        {},
        [7]
    )(7);
});
window.addEventListener(
    "load",
    function () {
        Chart.defaults.global.pointHitDetectionRadius = 1;
        _chartDesktopOnlyLoaded = !1;
        _chartInitialDesktopSize = IsDesktopSize();
        $(window).resize(function () {
            _chartInitialDesktopSize ||
                (!_chartDesktopOnlyLoaded && IsDesktopSize()
                    ? LoadCharts(!0)
                    : IsDesktopSize() || (_chartDesktopOnlyLoaded = !1));
        });
        LoadCharts(!1);
        _chartInitialDesktopSize && LoadCharts(!0);
    },
    !0
);
