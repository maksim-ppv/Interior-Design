
const btn = document.querySelector('.menu-button');
const menu = document.querySelector('.mobile__navbar');
const menuHeaderName = document.querySelector('.menu-block');
const topHeaderContactsMenu = document.querySelector('.top-header__contacts-menu');
const topHeader = document.querySelector('.top-header');



const modal = ()=>{
   menu.classList.toggle('hide');
   menu.classList.toggle('show');
   btn.classList.toggle('line_active');
   topHeaderContactsMenu.classList.toggle('display_none');
   topHeader.classList.toggle('top-header_active-menu');
   
}

menuHeaderName.addEventListener('click', modal);
menu.addEventListener('click', event => {
   const target = event.target
   if(!target.closest('.menu-mobile__body')){
      modal();
   }
});

;
/*!
 * jquery.inputmask.bundle.js
 * https://github.com/RobinHerbots/jquery.inputmask
 * Copyright (c) 2010 - 2017 Robin Herbots
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Version: 3.3.5-178
 */
! function (a) {
    window.Inputmask = a(window.dependencyLib || jQuery, window, document)
}(function (a, b, c, d) {
    function e(b, c, g) {
        return this instanceof e ? (this.el = d, this.events = {}, this.maskset = d, this.refreshValue = !1, void(g !== !0 && (a.isPlainObject(b) ? c = b : (c = c || {}, c.alias = b), this.opts = a.extend(!0, {}, this.defaults, c), this.noMasksCache = c && c.definitions !== d, this.userOptions = c || {}, this.isRTL = this.opts.numericInput, f(this.opts.alias, c, this.opts)))) : new e(b, c, g)
    }

    function f(b, c, g) {
        var h = e.prototype.aliases[b];
        return h ? (h.alias && f(h.alias, d, g), a.extend(!0, g, h), a.extend(!0, g, c), !0) : (null === g.mask && (g.mask = b), !1)
    }

    function g(b, c) {
        function f(b, f, g) {
            if (null !== b && "" !== b || (b = "*{*}"), 1 === b.length && g.greedy === !1 && 0 !== g.repeat && (g.placeholder = ""), g.repeat > 0 || "*" === g.repeat || "+" === g.repeat) {
                var h = "*" === g.repeat ? 0 : "+" === g.repeat ? 1 : g.repeat;
                b = g.groupmarker.start + b + g.groupmarker.end + g.quantifiermarker.start + h + "," + g.repeat + g.quantifiermarker.end
            }
            var i;
            return e.prototype.masksCache[b] === d || c === !0 ? (i = {
                mask: b,
                maskToken: e.prototype.analyseMask(b, g),
                validPositions: {},
                _buffer: d,
                buffer: d,
                tests: {},
                metadata: f,
                maskLength: d
            }, c !== !0 && (e.prototype.masksCache[g.numericInput ? b.split("").reverse().join("") : b] = i, i = a.extend(!0, {}, e.prototype.masksCache[g.numericInput ? b.split("").reverse().join("") : b]))) : i = a.extend(!0, {}, e.prototype.masksCache[g.numericInput ? b.split("").reverse().join("") : b]), i
        }
        var g;
        if (a.isFunction(b.mask) && (b.mask = b.mask(b)), a.isArray(b.mask)) {
            if (b.mask.length > 1) {
                b.keepStatic = null === b.keepStatic || b.keepStatic;
                var h = b.groupmarker.start;
                return a.each(b.numericInput ? b.mask.reverse() : b.mask, function (c, e) {
                    h.length > 1 && (h += b.groupmarker.end + b.alternatormarker + b.groupmarker.start), h += e.mask === d || a.isFunction(e.mask) ? e : e.mask
                }), h += b.groupmarker.end, f(h, b.mask, b)
            }
            b.mask = b.mask.pop()
        }
        return g = b.mask && b.mask.mask !== d && !a.isFunction(b.mask.mask) ? f(b.mask.mask, b.mask, b) : f(b.mask, b.mask, b)
    }

    function h(f, g, i) {
        function n(a, b, c) {
            b = b || 0;
            var e, f, g, h = [],
                j = 0,
                k = q();
            V = Y !== d ? Y.maxLength : d, V === -1 && (V = d);
            do a === !0 && o().validPositions[j] ? (g = o().validPositions[j], f = g.match, e = g.locator.slice(), h.push(c === !0 ? g.input : c === !1 ? f.nativeDef : I(j, f))) : (g = t(j, e, j - 1), f = g.match, e = g.locator.slice(), (i.jitMasking === !1 || j < k || "number" == typeof i.jitMasking && isFinite(i.jitMasking) && i.jitMasking > j) && h.push(c === !1 ? f.nativeDef : I(j, f))), j++; while ((V === d || j < V) && (null !== f.fn || "" !== f.def) || b > j);
            return "" === h[h.length - 1] && h.pop(), o().maskLength = j + 1, h
        }

        function o() {
            return g
        }

        function p(a) {
            var b = o();
            b.buffer = d, a !== !0 && (b.validPositions = {}, b.p = 0)
        }

        function q(a, b, c) {
            var e = -1,
                f = -1,
                g = c || o().validPositions;
            a === d && (a = -1);
            for (var h in g) {
                var i = parseInt(h);
                g[i] && (b || g[i].generatedInput !== !0) && (i <= a && (e = i), i >= a && (f = i))
            }
            return e !== -1 && a - e > 1 || f < a ? e : f
        }

        function r(b, c, e, f) {
            function g(a) {
                var b = o().validPositions[a];
                if (b !== d && null === b.match.fn) {
                    var c = o().validPositions[a - 1],
                        e = o().validPositions[a + 1];
                    return c !== d && e !== d
                }
                return !1
            }
            var h, j = b,
                k = a.extend(!0, {}, o().validPositions),
                l = !1;
            for (o().p = b, h = c - 1; h >= j; h--) o().validPositions[h] !== d && (e !== !0 && (!o().validPositions[h].match.optionality && g(h) || i.canClearPosition(o(), h, q(), f, i) === !1) || delete o().validPositions[h]);
            for (p(!0), h = j + 1; h <= q();) {
                for (; o().validPositions[j] !== d;) j++;
                if (h < j && (h = j + 1), o().validPositions[h] === d && D(h)) h++;
                else {
                    var m = t(h);
                    l === !1 && k[j] && k[j].match.def === m.match.def ? (o().validPositions[j] = a.extend(!0, {}, k[j]), o().validPositions[j].input = m.input, delete o().validPositions[h], h++) : v(j, m.match.def) ? C(j, m.input || I(h), !0) !== !1 && (delete o().validPositions[h], h++, l = !0) : D(h) || (h++, j--), j++
                }
            }
            p(!0)
        }

        function s(a, b) {
            for (var c, e = a, f = q(), g = o().validPositions[f] || w(0)[0], h = g.alternation !== d ? g.locator[g.alternation].toString().split(",") : [], j = 0; j < e.length && (c = e[j], !(c.match && (i.greedy && c.match.optionalQuantifier !== !0 || (c.match.optionality === !1 || c.match.newBlockMarker === !1) && c.match.optionalQuantifier !== !0) && (g.alternation === d || g.alternation !== c.alternation || c.locator[g.alternation] !== d && B(c.locator[g.alternation].toString().split(","), h))) || b === !0 && (null !== c.match.fn || /[0-9a-bA-Z]/.test(c.match.def))); j++);
            return c
        }

        function t(a, b, c) {
            return o().validPositions[a] || s(w(a, b ? b.slice() : b, c))
        }

        function u(a) {
            return o().validPositions[a] ? o().validPositions[a] : w(a)[0]
        }

        function v(a, b) {
            for (var c = !1, d = w(a), e = 0; e < d.length; e++)
                if (d[e].match && d[e].match.def === b) {
                    c = !0;
                    break
                } return c
        }

        function w(b, c, e) {
            function f(c, e, g, h) {
                function k(g, h, m) {
                    function r(b, c) {
                        var d = 0 === a.inArray(b, c.matches);
                        return d || a.each(c.matches, function (a, e) {
                            if (e.isQuantifier === !0 && (d = r(b, c.matches[a - 1]))) return !1
                        }), d
                    }

                    function s(b, c, e) {
                        var f, g;
                        return (o().tests[b] || o().validPositions[b]) && a.each(o().tests[b] || [o().validPositions[b]], function (a, b) {
                            var h = e !== d ? e : b.alternation,
                                i = b.locator[h] !== d ? b.locator[h].toString().indexOf(c) : -1;
                            (g === d || i < g) && i !== -1 && (f = b, g = i)
                        }), f ? f.locator.slice((e !== d ? e : f.alternation) + 1) : e !== d ? s(b, c) : d
                    }

                    function t(a, c) {
                        return null === a.match.fn && null !== c.match.fn && c.match.fn.test(a.match.def, o(), b, !1, i, !1)
                    }
                    if (l > 1e4) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + o().mask;
                    if (l === b && g.matches === d) return n.push({
                        match: g,
                        locator: h.reverse(),
                        cd: q
                    }), !0;
                    if (g.matches !== d) {
                        if (g.isGroup && m !== g) {
                            if (g = k(c.matches[a.inArray(g, c.matches) + 1], h)) return !0
                        } else if (g.isOptional) {
                            var u = g;
                            if (g = f(g, e, h, m)) {
                                if (j = n[n.length - 1].match, !r(j, u)) return !0;
                                p = !0, l = b
                            }
                        } else if (g.isAlternator) {
                            var v, w = g,
                                x = [],
                                y = n.slice(),
                                z = h.length,
                                A = e.length > 0 ? e.shift() : -1;
                            if (A === -1 || "string" == typeof A) {
                                var B, C = l,
                                    D = e.slice(),
                                    E = [];
                                if ("string" == typeof A) E = A.split(",");
                                else
                                    for (B = 0; B < w.matches.length; B++) E.push(B);
                                for (var F = 0; F < E.length; F++) {
                                    if (B = parseInt(E[F]), n = [], e = s(l, B, z) || D.slice(), g = k(w.matches[B] || c.matches[B], [B].concat(h), m) || g, g !== !0 && g !== d && E[E.length - 1] < w.matches.length) {
                                        var G = a.inArray(g, c.matches) + 1;
                                        c.matches.length > G && (g = k(c.matches[G], [G].concat(h.slice(1, h.length)), m), g && (E.push(G.toString()), a.each(n, function (a, b) {
                                            b.alternation = h.length - 1
                                        })))
                                    }
                                    v = n.slice(), l = C, n = [];
                                    for (var H = 0; H < v.length; H++) {
                                        var I = v[H],
                                            J = !1;
                                        I.alternation = I.alternation || z;
                                        for (var K = 0; K < x.length; K++) {
                                            var L = x[K];
                                            if (("string" != typeof A || a.inArray(I.locator[I.alternation].toString(), E) !== -1) && (I.match.def === L.match.def || t(I, L))) {
                                                J = I.match.nativeDef === L.match.nativeDef, I.alternation == L.alternation && L.locator[L.alternation].toString().indexOf(I.locator[I.alternation]) === -1 && (L.locator[L.alternation] = L.locator[L.alternation] + "," + I.locator[I.alternation], L.alternation = I.alternation, null == I.match.fn && (L.na = L.na || I.locator[I.alternation].toString(), L.na.indexOf(I.locator[I.alternation]) === -1 && (L.na = L.na + "," + I.locator[I.alternation])));
                                                break
                                            }
                                        }
                                        J || x.push(I)
                                    }
                                }
                                "string" == typeof A && (x = a.map(x, function (b, c) {
                                    if (isFinite(c)) {
                                        var e, f = b.alternation,
                                            g = b.locator[f].toString().split(",");
                                        b.locator[f] = d, b.alternation = d;
                                        for (var h = 0; h < g.length; h++) e = a.inArray(g[h], E) !== -1, e && (b.locator[f] !== d ? (b.locator[f] += ",", b.locator[f] += g[h]) : b.locator[f] = parseInt(g[h]), b.alternation = f);
                                        if (b.locator[f] !== d) return b
                                    }
                                })), n = y.concat(x), l = b, p = n.length > 0, e = D.slice()
                            } else g = k(w.matches[A] || c.matches[A], [A].concat(h), m);
                            if (g) return !0
                        } else if (g.isQuantifier && m !== c.matches[a.inArray(g, c.matches) - 1])
                            for (var M = g, N = e.length > 0 ? e.shift() : 0; N < (isNaN(M.quantifier.max) ? N + 1 : M.quantifier.max) && l <= b; N++) {
                                var O = c.matches[a.inArray(M, c.matches) - 1];
                                if (g = k(O, [N].concat(h), O)) {
                                    if (j = n[n.length - 1].match, j.optionalQuantifier = N > M.quantifier.min - 1, r(j, O)) {
                                        if (N > M.quantifier.min - 1) {
                                            p = !0, l = b;
                                            break
                                        }
                                        return !0
                                    }
                                    return !0
                                }
                            } else if (g = f(g, e, h, m)) return !0
                    } else l++
                }
                for (var m = e.length > 0 ? e.shift() : 0; m < c.matches.length; m++)
                    if (c.matches[m].isQuantifier !== !0) {
                        var r = k(c.matches[m], [m].concat(g), h);
                        if (r && l === b) return r;
                        if (l > b) break
                    }
            }

            function g(b) {
                var c = [];
                return a.isArray(b) || (b = [b]), b.length > 0 && (b[0].alternation === d ? (c = s(b.slice()).locator.slice(), 0 === c.length && (c = b[0].locator.slice())) : a.each(b, function (a, b) {
                    if ("" !== b.def)
                        if (0 === c.length) c = b.locator.slice();
                        else
                            for (var d = 0; d < c.length; d++) b.locator[d] && c[d].toString().indexOf(b.locator[d]) === -1 && (c[d] += "," + b.locator[d])
                })), c
            }

            function h(a) {
                return i.keepStatic && b > 0 && a.length > 1 + ("" === a[a.length - 1].match.def ? 1 : 0) && a[0].match.optionality !== !0 && a[0].match.optionalQuantifier !== !0 && null === a[0].match.fn && !/[0-9a-bA-Z]/.test(a[0].match.def) ? [s(a)] : a
            }
            var j, k = o().maskToken,
                l = c ? e : 0,
                m = c ? c.slice() : [0],
                n = [],
                p = !1,
                q = c ? c.join("") : "";
            if (b > -1) {
                if (c === d) {
                    for (var r, t = b - 1;
                        (r = o().validPositions[t] || o().tests[t]) === d && t > -1;) t--;
                    r !== d && t > -1 && (m = g(r), q = m.join(""), l = t)
                }
                if (o().tests[b] && o().tests[b][0].cd === q) return h(o().tests[b]);
                for (var u = m.shift(); u < k.length; u++) {
                    var v = f(k[u], m, [u]);
                    if (v && l === b || l > b) break
                }
            }
            return (0 === n.length || p) && n.push({
                match: {
                    fn: null,
                    cardinality: 0,
                    optionality: !0,
                    casing: null,
                    def: "",
                    placeholder: ""
                },
                locator: [],
                cd: q
            }), c !== d && o().tests[b] ? h(a.extend(!0, [], n)) : (o().tests[b] = a.extend(!0, [], n), h(o().tests[b]))
        }

        function x() {
            return o()._buffer === d && (o()._buffer = n(!1, 1), o().buffer === d && (o().buffer = o()._buffer.slice())), o()._buffer
        }

        function y(a) {
            return o().buffer !== d && a !== !0 || (o().buffer = n(!0, q(), !0)), o().buffer
        }

        function z(a, b, c) {
            var e, f;
            if (a === !0) p(), a = 0, b = c.length;
            else
                for (e = a; e < b; e++) delete o().validPositions[e];
            for (f = a, e = a; e < b; e++)
                if (p(!0), c[e] !== i.skipOptionalPartCharacter) {
                    var g = C(f, c[e], !0, !0);
                    g !== !1 && (p(!0), f = g.caret !== d ? g.caret : g.pos + 1)
                }
        }

        function A(a, b, c) {
            switch (i.casing || b.casing) {
                case "upper":
                    a = a.toUpperCase();
                    break;
                case "lower":
                    a = a.toLowerCase();
                    break;
                case "title":
                    var d = o().validPositions[c - 1];
                    a = 0 === c || d && d.input === String.fromCharCode(e.keyCode.SPACE) ? a.toUpperCase() : a.toLowerCase()
            }
            return a
        }

        function B(b, c, e) {
            for (var f, g = i.greedy ? c : c.slice(0, 1), h = !1, j = e !== d ? e.split(",") : [], k = 0; k < j.length; k++)(f = b.indexOf(j[k])) !== -1 && b.splice(f, 1);
            for (var l = 0; l < b.length; l++)
                if (a.inArray(b[l], g) !== -1) {
                    h = !0;
                    break
                } return h
        }

        function C(b, c, f, g, h) {
            function j(a) {
                var b = Z ? a.begin - a.end > 1 || a.begin - a.end === 1 : a.end - a.begin > 1 || a.end - a.begin === 1;
                return b && 0 === a.begin && a.end === o().maskLength ? "full" : b
            }

            function k(c, e, f) {
                var h = !1;
                return a.each(w(c), function (k, l) {
                    for (var m = l.match, s = e ? 1 : 0, t = "", u = m.cardinality; u > s; u--) t += G(c - (u - 1));
                    if (e && (t += e), y(!0), h = null != m.fn ? m.fn.test(t, o(), c, f, i, j(b)) : (e === m.def || e === i.skipOptionalPartCharacter) && "" !== m.def && {
                            c: I(c, m, !0) || m.def,
                            pos: c
                        }, h !== !1) {
                        var v = h.c !== d ? h.c : e;
                        v = v === i.skipOptionalPartCharacter && null === m.fn ? I(c, m, !0) || m.def : v;
                        var w = c,
                            x = y();
                        if (h.remove !== d && (a.isArray(h.remove) || (h.remove = [h.remove]), a.each(h.remove.sort(function (a, b) {
                                return b - a
                            }), function (a, b) {
                                r(b, b + 1, !0)
                            })), h.insert !== d && (a.isArray(h.insert) || (h.insert = [h.insert]), a.each(h.insert.sort(function (a, b) {
                                return a - b
                            }), function (a, b) {
                                C(b.pos, b.c, !0, g)
                            })), h.refreshFromBuffer) {
                            var B = h.refreshFromBuffer;
                            if (z(B === !0 ? B : B.start, B.end, x), h.pos === d && h.c === d) return h.pos = q(), !1;
                            if (w = h.pos !== d ? h.pos : c, w !== c) return h = a.extend(h, C(w, v, !0, g)), !1
                        } else if (h !== !0 && h.pos !== d && h.pos !== c && (w = h.pos, z(c, w, y().slice()), w !== c)) return h = a.extend(h, C(w, v, !0)), !1;
                        return (h === !0 || h.pos !== d || h.c !== d) && (k > 0 && p(!0), n(w, a.extend({}, l, {
                            input: A(v, m, w)
                        }), g, j(b)) || (h = !1), !1)
                    }
                }), h
            }

            function l(b, c, e) {
                var f, h, j, k, l, m, n, r, s = a.extend(!0, {}, o().validPositions),
                    t = !1,
                    u = q();
                for (k = o().validPositions[u]; u >= 0; u--)
                    if (j = o().validPositions[u], j && j.alternation !== d) {
                        if (f = u, h = o().validPositions[f].alternation, k.locator[j.alternation] !== j.locator[j.alternation]) break;
                        k = j
                    } if (h !== d) {
                    r = parseInt(f);
                    var v = k.locator[k.alternation || h] !== d ? k.locator[k.alternation || h] : n[0];
                    v.length > 0 && (v = v.split(",")[0]);
                    var x = o().validPositions[r],
                        y = o().validPositions[r - 1];
                    a.each(w(r, y ? y.locator : d, r - 1), function (f, j) {
                        n = j.locator[h] ? j.locator[h].toString().split(",") : [];
                        for (var k = 0; k < n.length; k++) {
                            var u = [],
                                w = 0,
                                y = 0,
                                z = !1;
                            if (v < n[k] && (j.na === d || a.inArray(n[k], j.na.split(",")) === -1)) {
                                o().validPositions[r] = a.extend(!0, {}, j);
                                var A = o().validPositions[r].locator;
                                for (o().validPositions[r].locator[h] = parseInt(n[k]), null == j.match.fn ? (x.input !== j.match.def && (z = !0, x.generatedInput !== !0 && u.push(x.input)), y++, o().validPositions[r].generatedInput = !/[0-9a-bA-Z]/.test(j.match.def), o().validPositions[r].input = j.match.def) : o().validPositions[r].input = x.input, l = r + 1; l < q(d, !0) + 1; l++) m = o().validPositions[l], m && m.generatedInput !== !0 && /[0-9a-bA-Z]/.test(m.input) ? u.push(m.input) : l < b && w++, delete o().validPositions[l];
                                for (z && u[0] === j.match.def && u.shift(), p(!0), t = !0; u.length > 0;) {
                                    var B = u.shift();
                                    if (B !== i.skipOptionalPartCharacter && !(t = C(q(d, !0) + 1, B, !1, g, !0))) break
                                }
                                if (t) {
                                    o().validPositions[r].locator = A;
                                    var D = q(b) + 1;
                                    for (l = r + 1; l < q() + 1; l++) m = o().validPositions[l], (m === d || null == m.match.fn) && l < b + (y - w) && y++;
                                    b += y - w, t = C(b > D ? D : b, c, e, g, !0)
                                }
                                if (t) return !1;
                                p(), o().validPositions = a.extend(!0, {}, s)
                            }
                        }
                    })
                }
                return t
            }

            function m(b, c) {
                var e = o().validPositions[c];
                if (e)
                    for (var f = e.locator, g = f.length, h = b; h < c; h++)
                        if (o().validPositions[h] === d && !D(h, !0)) {
                            var i = w(h).slice(),
                                j = s(i, !0),
                                l = -1;
                            "" === i[i.length - 1].match.def && i.pop(), a.each(i, function (a, b) {
                                for (var c = 0; c < g; c++) {
                                    if (b.locator[c] === d || !B(b.locator[c].toString().split(","), f[c].toString().split(","), b.na)) {
                                        var e = f[c],
                                            h = j.locator[c],
                                            i = b.locator[c];
                                        e - h > Math.abs(e - i) && (j = b);
                                        break
                                    }
                                    l < c && (l = c, j = b)
                                }
                            }), j = a.extend({}, j, {
                                input: I(h, j.match, !0) || j.match.def
                            }), j.generatedInput = !0, n(h, j, !0), o().validPositions[c] = d, k(c, e.input, !0)
                        }
            }

            function n(b, c, e, f) {
                if (f || i.insertMode && o().validPositions[b] !== d && e === d) {
                    var g, h = a.extend(!0, {}, o().validPositions),
                        j = q(d, !0);
                    for (g = b; g <= j; g++) delete o().validPositions[g];
                    o().validPositions[b] = a.extend(!0, {}, c);
                    var k, l = !0,
                        m = o().validPositions,
                        n = !1,
                        r = o().maskLength;
                    for (g = k = b; g <= j; g++) {
                        var s = h[g];
                        if (s !== d)
                            for (var t = k; t < o().maskLength && (null === s.match.fn && m[g] && (m[g].match.optionalQuantifier === !0 || m[g].match.optionality === !0) || null != s.match.fn);) {
                                if (t++, n === !1 && h[t] && h[t].match.def === s.match.def) o().validPositions[t] = a.extend(!0, {}, h[t]), o().validPositions[t].input = s.input, u(t), k = t, l = !0;
                                else if (v(t, s.match.def)) {
                                    var w = C(t, s.input, !0, !0);
                                    l = w !== !1, k = w.caret || w.insert ? q() : t, n = !0
                                } else if (l = s.generatedInput === !0, !l && t >= o().maskLength - 1) break;
                                if (o().maskLength < r && (o().maskLength = r), l) break
                            }
                        if (!l) break
                    }
                    if (!l) return o().validPositions = a.extend(!0, {}, h), p(!0), !1
                } else o().validPositions[b] = a.extend(!0, {}, c);
                return p(!0), !0
            }

            function u(b) {
                for (var c = b - 1; c > -1 && !o().validPositions[c]; c--);
                var e, f;
                for (c++; c < b; c++) o().validPositions[c] === d && (i.jitMasking === !1 || i.jitMasking > c) && (f = w(c, t(c - 1).locator, c - 1).slice(), "" === f[f.length - 1].match.def && f.pop(), e = s(f), e && (e.match.def === i.radixPointDefinitionSymbol || !D(c, !0) || a.inArray(i.radixPoint, y()) < c && e.match.fn && e.match.fn.test(I(c), o(), c, !1, i)) && (F = k(c, I(c, e.match, !0) || (null == e.match.fn ? e.match.def : "" !== I(c) ? I(c) : y()[c]), !0), F !== !1 && (o().validPositions[F.pos || c].generatedInput = !0)))
            }
            f = f === !0;
            var x = b;
            b.begin !== d && (x = Z && !j(b) ? b.end : b.begin);
            var F = !0,
                H = a.extend(!0, {}, o().validPositions);
            if (a.isFunction(i.preValidation) && !f && g !== !0 && (F = i.preValidation(y(), x, c, j(b), i)), F === !0) {
                if (u(x), j(b) && (P(d, e.keyCode.DELETE, b), x = o().p), x < o().maskLength && (F = k(x, c, f), (!f || g === !0) && F === !1)) {
                    var J = o().validPositions[x];
                    if (!J || null !== J.match.fn || J.match.def !== c && c !== i.skipOptionalPartCharacter) {
                        if ((i.insertMode || o().validPositions[E(x)] === d) && !D(x, !0))
                            for (var K = x + 1, L = E(x); K <= L; K++)
                                if (F = k(K, c, f), F !== !1) {
                                    m(x, F.pos !== d ? F.pos : K), x = K;
                                    break
                                }
                    } else F = {
                        caret: E(x)
                    }
                }
                F === !1 && i.keepStatic && !f && h !== !0 && (F = l(x, c, f)), F === !0 && (F = {
                    pos: x
                })
            }
            if (a.isFunction(i.postValidation) && F !== !1 && !f && g !== !0) {
                var M = i.postValidation(y(!0), F, i);
                if (M.refreshFromBuffer && M.buffer) {
                    var N = M.refreshFromBuffer;
                    z(N === !0 ? N : N.start, N.end, M.buffer)
                }
                F = M === !0 ? F : M
            }
            return F.pos === d && (F.pos = x), F === !1 && (p(!0), o().validPositions = a.extend(!0, {}, H)), F
        }

        function D(a, b) {
            var c = t(a).match;
            if ("" === c.def && (c = u(a).match), null != c.fn) return c.fn;
            if (b !== !0 && a > -1) {
                var d = w(a);
                return d.length > 1 + ("" === d[d.length - 1].match.def ? 1 : 0)
            }
            return !1
        }

        function E(a, b) {
            var c = o().maskLength;
            if (a >= c) return c;
            for (var d = a; ++d < c && (b === !0 && (u(d).match.newBlockMarker !== !0 || !D(d)) || b !== !0 && !D(d)););
            return d
        }

        function F(a, b) {
            var c, d = a;
            if (d <= 0) return 0;
            for (; --d > 0 && (b === !0 && u(d).match.newBlockMarker !== !0 || b !== !0 && !D(d) && (c = w(d), c.length < 2 || 2 === c.length && "" === c[1].match.def)););
            return d
        }

        function G(a) {
            return o().validPositions[a] === d ? I(a) : o().validPositions[a].input
        }

        function H(b, c, e, f, g) {
            if (f && a.isFunction(i.onBeforeWrite)) {
                var h = i.onBeforeWrite(f, c, e, i);
                if (h) {
                    if (h.refreshFromBuffer) {
                        var j = h.refreshFromBuffer;
                        z(j === !0 ? j : j.start, j.end, h.buffer || c), c = y(!0)
                    }
                    e !== d && (e = h.caret !== d ? h.caret : e)
                }
            }
            b !== d && (b.inputmask._valueSet(c.join("")), e === d || f !== d && "blur" === f.type ? R(b, c, e) : m && "input" === f.type ? setTimeout(function () {
                L(b, e)
            }, 0) : L(b, e), g === !0 && (_ = !0, a(b).trigger("input")))
        }

        function I(b, c, e) {
            if (c = c || u(b).match, c.placeholder !== d || e === !0) return a.isFunction(c.placeholder) ? c.placeholder(i) : c.placeholder;
            if (null === c.fn) {
                if (b > -1 && o().validPositions[b] === d) {
                    var f, g = w(b),
                        h = [];
                    if (g.length > 1 + ("" === g[g.length - 1].match.def ? 1 : 0))
                        for (var j = 0; j < g.length; j++)
                            if (g[j].match.optionality !== !0 && g[j].match.optionalQuantifier !== !0 && (null === g[j].match.fn || f === d || g[j].match.fn.test(f.match.def, o(), b, !0, i) !== !1) && (h.push(g[j]), null === g[j].match.fn && (f = g[j]), h.length > 1 && /[0-9a-bA-Z]/.test(h[0].match.def))) return i.placeholder.charAt(b % i.placeholder.length)
                }
                return c.def
            }
            return i.placeholder.charAt(b % i.placeholder.length)
        }

        function J(b, f, g, h, j) {
            function k(a, b) {
                var c = x().slice(a, E(a)).join("").indexOf(b);
                return c !== -1 && !D(a) && u(a).match.nativeDef === b.charAt(b.length - 1)
            }
            var l = h.slice(),
                m = "",
                n = 0,
                r = d;
            if (p(), o().p = E(-1), !g)
                if (i.autoUnmask !== !0) {
                    var s = x().slice(0, E(-1)).join(""),
                        v = l.join("").match(new RegExp("^" + e.escapeRegex(s), "g"));
                    v && v.length > 0 && (l.splice(0, v.length * s.length), n = E(n))
                } else n = E(n);
            if (a.each(l, function (c, e) {
                    if (e !== d) {
                        var f = new a.Event("_checkval");
                        f.which = e.charCodeAt(0), m += e;
                        var h = q(d, !0),
                            j = o().validPositions[h],
                            l = t(h + 1, j ? j.locator.slice() : d, h);
                        if (!k(n, m) || g || i.autoUnmask) {
                            var s = g ? c : null == l.match.fn && l.match.optionality && h + 1 < o().p ? h + 1 : o().p;
                            r = da.keypressEvent.call(b, f, !0, !1, g, s), n = s + 1, m = ""
                        } else r = da.keypressEvent.call(b, f, !0, !1, !0, h + 1);
                        if (!g && a.isFunction(i.onBeforeWrite)) {
                            var u = r.forwardPosition;
                            if (r = i.onBeforeWrite(f, y(), r.forwardPosition, i), r.forwardPosition = u, r && r.refreshFromBuffer) {
                                var v = r.refreshFromBuffer;
                                z(v === !0 ? v : v.start, v.end, r.buffer), p(!0), r.caret && (o().p = r.caret, r.forwardPosition = r.caret)
                            }
                        }
                    }
                }), f) {
                var w = d;
                c.activeElement === b && r && (w = i.numericInput ? F(r.forwardPosition) : r.forwardPosition), H(b, y(), w, j || new a.Event("checkval"))
            }
        }

        function K(b) {
            if (b) {
                if (b.inputmask === d) return b.value;
                b.inputmask && b.inputmask.refreshValue && da.setValueEvent.call(b)
            }
            var c = [],
                e = o().validPositions;
            for (var f in e) e[f].match && null != e[f].match.fn && c.push(e[f].input);
            var g = 0 === c.length ? "" : (Z ? c.reverse() : c).join("");
            if (a.isFunction(i.onUnMask)) {
                var h = (Z ? y().slice().reverse() : y()).join("");
                g = i.onUnMask(h, g, i)
            }
            return g
        }

        function L(a, e, f, g) {
            function h(a) {
                if (g !== !0 && Z && "number" == typeof a && (!i.greedy || "" !== i.placeholder)) {
                    var b = y().join("").length;
                    a = b - a
                }
                return a
            }
            var k;
            if ("number" != typeof e) return a.setSelectionRange ? (e = a.selectionStart, f = a.selectionEnd) : b.getSelection ? (k = b.getSelection().getRangeAt(0), k.commonAncestorContainer.parentNode !== a && k.commonAncestorContainer !== a || (e = k.startOffset, f = k.endOffset)) : c.selection && c.selection.createRange && (k = c.selection.createRange(), e = 0 - k.duplicate().moveStart("character", -a.inputmask._valueGet().length), f = e + k.text.length), {
                begin: h(e),
                end: h(f)
            };
            e = h(e), f = h(f), f = "number" == typeof f ? f : e;
            var l = parseInt(((a.ownerDocument.defaultView || b).getComputedStyle ? (a.ownerDocument.defaultView || b).getComputedStyle(a, null) : a.currentStyle).fontSize) * f;
            if (a.scrollLeft = l > a.scrollWidth ? l : 0, j || i.insertMode !== !1 || e !== f || f++, a.setSelectionRange) a.selectionStart = e, a.selectionEnd = f;
            else if (b.getSelection) {
                if (k = c.createRange(), a.firstChild === d || null === a.firstChild) {
                    var m = c.createTextNode("");
                    a.appendChild(m)
                }
                k.setStart(a.firstChild, e < a.inputmask._valueGet().length ? e : a.inputmask._valueGet().length), k.setEnd(a.firstChild, f < a.inputmask._valueGet().length ? f : a.inputmask._valueGet().length), k.collapse(!0);
                var n = b.getSelection();
                n.removeAllRanges(), n.addRange(k)
            } else a.createTextRange && (k = a.createTextRange(), k.collapse(!0), k.moveEnd("character", f), k.moveStart("character", e), k.select());
            R(a, d, {
                begin: e,
                end: f
            })
        }

        function M(b) {
            var c, e, f = y(),
                g = f.length,
                h = q(),
                i = {},
                j = o().validPositions[h],
                k = j !== d ? j.locator.slice() : d;
            for (c = h + 1; c < f.length; c++) e = t(c, k, c - 1), k = e.locator.slice(), i[c] = a.extend(!0, {}, e);
            var l = j && j.alternation !== d ? j.locator[j.alternation] : d;
            for (c = g - 1; c > h && (e = i[c], (e.match.optionality || e.match.optionalQuantifier || l && (l !== i[c].locator[j.alternation] && null != e.match.fn || null === e.match.fn && e.locator[j.alternation] && B(e.locator[j.alternation].toString().split(","), l.toString().split(",")) && "" !== w(c)[0].def)) && f[c] === I(c, e.match)); c--) g--;
            return b ? {
                l: g,
                def: i[g] ? i[g].match : d
            } : g
        }

        function N(a) {
            for (var b, c = M(), d = a.length; c < d && !D(c + 1) && (b = u(c + 1)) && b.match.optionality !== !0 && b.match.optionalQuantifier !== !0;) c++;
            for (;
                (b = u(c - 1)) && b.match.optionality && b.input === i.skipOptionalPartCharacter;) c--;
            return a.splice(c), a
        }

        function O(b) {
            if (a.isFunction(i.isComplete)) return i.isComplete(b, i);
            if ("*" === i.repeat) return d;
            var c = !1,
                e = M(!0),
                f = F(e.l);
            if (e.def === d || e.def.newBlockMarker || e.def.optionality || e.def.optionalQuantifier) {
                c = !0;
                for (var g = 0; g <= f; g++) {
                    var h = t(g).match;
                    if (null !== h.fn && o().validPositions[g] === d && h.optionality !== !0 && h.optionalQuantifier !== !0 || null === h.fn && b[g] !== I(g, h)) {
                        c = !1;
                        break
                    }
                }
            }
            return c
        }

        function P(b, c, f, g) {
            function h() {
                if (i.keepStatic) {
                    for (var c = [], e = q(-1, !0), f = a.extend(!0, {}, o().validPositions), g = o().validPositions[e]; e >= 0; e--) {
                        var h = o().validPositions[e];
                        if (h) {
                            if (h.generatedInput !== !0 && /[0-9a-bA-Z]/.test(h.input) && c.push(h.input), delete o().validPositions[e], h.alternation !== d && h.locator[h.alternation] !== g.locator[h.alternation]) break;
                            g = h
                        }
                    }
                    if (e > -1)
                        for (o().p = E(q(-1, !0)); c.length > 0;) {
                            var j = new a.Event("keypress");
                            j.which = c.pop().charCodeAt(0), da.keypressEvent.call(b, j, !0, !1, !1, o().p)
                        } else o().validPositions = a.extend(!0, {}, f)
                }
            }
            if ((i.numericInput || Z) && (c === e.keyCode.BACKSPACE ? c = e.keyCode.DELETE : c === e.keyCode.DELETE && (c = e.keyCode.BACKSPACE), Z)) {
                var j = f.end;
                f.end = f.begin, f.begin = j
            }
            c === e.keyCode.BACKSPACE && (f.end - f.begin < 1 || i.insertMode === !1) ? (f.begin = F(f.begin), o().validPositions[f.begin] === d || o().validPositions[f.begin].input !== i.groupSeparator && o().validPositions[f.begin].input !== i.radixPoint || f.begin--) : c === e.keyCode.DELETE && f.begin === f.end && (f.end = D(f.end, !0) ? f.end + 1 : E(f.end) + 1, o().validPositions[f.begin] === d || o().validPositions[f.begin].input !== i.groupSeparator && o().validPositions[f.begin].input !== i.radixPoint || f.end++), r(f.begin, f.end, !1, g), g !== !0 && h();
            var k = q(f.begin, !0);
            k < f.begin ? o().p = E(k) : g !== !0 && (o().p = f.begin)
        }

        function Q(d) {
            function e(a) {
                var b, e = c.createElement("span");
                for (var f in h) isNaN(f) && f.indexOf("font") !== -1 && (e.style[f] = h[f]);
                e.style.textTransform = h.textTransform, e.style.letterSpacing = h.letterSpacing, e.style.position = "absolute", e.style.height = "auto", e.style.width = "auto", e.style.visibility = "hidden", e.style.whiteSpace = "nowrap", c.body.appendChild(e);
                var g, i = d.inputmask._valueGet(),
                    j = 0;
                for (b = 0, g = i.length; b <= g; b++) {
                    if (e.innerHTML += i.charAt(b) || "_", e.offsetWidth >= a) {
                        var k = a - j,
                            l = e.offsetWidth - a;
                        e.innerHTML = i.charAt(b), k -= e.offsetWidth / 3, b = k < l ? b - 1 : b;
                        break
                    }
                    j = e.offsetWidth
                }
                return c.body.removeChild(e), b
            }

            function f() {
                W.style.position = "absolute", W.style.top = g.top + "px", W.style.left = g.left + "px", W.style.width = parseInt(d.offsetWidth) - parseInt(h.paddingLeft) - parseInt(h.paddingRight) - parseInt(h.borderLeftWidth) - parseInt(h.borderRightWidth) + "px", W.style.height = parseInt(d.offsetHeight) - parseInt(h.paddingTop) - parseInt(h.paddingBottom) - parseInt(h.borderTopWidth) - parseInt(h.borderBottomWidth) + "px", W.style.lineHeight = W.style.height, W.style.zIndex = isNaN(h.zIndex) ? -1 : h.zIndex - 1, W.style.webkitAppearance = "textfield", W.style.mozAppearance = "textfield", W.style.Appearance = "textfield"
            }
            var g = a(d).position(),
                h = (d.ownerDocument.defaultView || b).getComputedStyle(d, null);
            d.parentNode;
            W = c.createElement("div"), c.body.appendChild(W);
            for (var j in h) isNaN(j) && "cssText" !== j && j.indexOf("webkit") == -1 && (W.style[j] = h[j]);
            d.style.backgroundColor = "transparent", d.style.color = "transparent", d.style.webkitAppearance = "caret", d.style.mozAppearance = "caret", d.style.Appearance = "caret", f(), a(b).on("resize", function (c) {
                g = a(d).position(), h = (d.ownerDocument.defaultView || b).getComputedStyle(d, null), f()
            }), a(d).on("click", function (a) {
                return L(d, e(a.clientX)), da.clickEvent.call(this, [a])
            }), a(d).on("keydown", function (a) {
                a.shiftKey || i.insertMode === !1 || setTimeout(function () {
                    R(d)
                }, 0)
            })
        }

        function R(a, b, e) {
            function f() {
                h || null !== k.fn && l.input !== d ? h && null !== k.fn && l.input !== d && (h = !1, g += "</span>") : (h = !0, g += "<span class='im-static''>")
            }
            if (W !== d) {
                b = b || y(), e === d ? e = L(a) : e.begin === d && (e = {
                    begin: e,
                    end: e
                });
                var g = "",
                    h = !1;
                if ("" != b) {
                    var j, k, l, m = 0,
                        n = q();
                    do m === e.begin && c.activeElement === a && (g += "<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>"), o().validPositions[m] ? (l = o().validPositions[m], k = l.match, j = l.locator.slice(), f(), g += l.input) : (l = t(m, j, m - 1), k = l.match, j = l.locator.slice(), (i.jitMasking === !1 || m < n || "number" == typeof i.jitMasking && isFinite(i.jitMasking) && i.jitMasking > m) && (f(), g += I(m, k))), m++; while ((V === d || m < V) && (null !== k.fn || "" !== k.def) || n > m)
                }
                W.innerHTML = g
            }
        }

        function S(b) {
            function e(b, e) {
                function f(b) {
                    function f(b) {
                        if (a.valHooks && (a.valHooks[b] === d || a.valHooks[b].inputmaskpatch !== !0)) {
                            var c = a.valHooks[b] && a.valHooks[b].get ? a.valHooks[b].get : function (a) {
                                    return a.value
                                },
                                f = a.valHooks[b] && a.valHooks[b].set ? a.valHooks[b].set : function (a, b) {
                                    return a.value = b, a
                                };
                            a.valHooks[b] = {
                                get: function (a) {
                                    if (a.inputmask) {
                                        if (a.inputmask.opts.autoUnmask) return a.inputmask.unmaskedvalue();
                                        var b = c(a);
                                        return q(d, d, a.inputmask.maskset.validPositions) !== -1 || e.nullable !== !0 ? b : ""
                                    }
                                    return c(a)
                                },
                                set: function (b, c) {
                                    var d, e = a(b);
                                    return d = f(b, c), b.inputmask && e.trigger("setvalue"), d
                                },
                                inputmaskpatch: !0
                            }
                        }
                    }

                    function g() {
                        return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : q() !== -1 || e.nullable !== !0 ? c.activeElement === this && e.clearMaskOnLostFocus ? (Z ? N(y().slice()).reverse() : N(y().slice())).join("") : j.call(this) : "" : j.call(this)
                    }

                    function h(b) {
                        k.call(this, b), this.inputmask && a(this).trigger("setvalue")
                    }

                    function i(b) {
                        ca.on(b, "mouseenter", function (b) {
                            var c = a(this),
                                d = this,
                                e = d.inputmask._valueGet();
                            e !== y().join("") && c.trigger("setvalue")
                        })
                    }
                    var j, k;
                    if (!b.inputmask.__valueGet) {
                        if (e.noValuePatching !== !0) {
                            if (Object.getOwnPropertyDescriptor) {
                                "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" == typeof "test".__proto__ ? function (a) {
                                    return a.__proto__
                                } : function (a) {
                                    return a.constructor.prototype
                                });
                                var l = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b), "value") : d;
                                l && l.get && l.set ? (j = l.get, k = l.set, Object.defineProperty(b, "value", {
                                    get: g,
                                    set: h,
                                    configurable: !0
                                })) : "INPUT" !== b.tagName && (j = function () {
                                    return this.textContent
                                }, k = function (a) {
                                    this.textContent = a
                                }, Object.defineProperty(b, "value", {
                                    get: g,
                                    set: h,
                                    configurable: !0
                                }))
                            } else c.__lookupGetter__ && b.__lookupGetter__("value") && (j = b.__lookupGetter__("value"), k = b.__lookupSetter__("value"), b.__defineGetter__("value", g), b.__defineSetter__("value", h));
                            b.inputmask.__valueGet = j, b.inputmask.__valueSet = k
                        }
                        b.inputmask._valueGet = function (a) {
                            return Z && a !== !0 ? j.call(this.el).split("").reverse().join("") : j.call(this.el)
                        }, b.inputmask._valueSet = function (a, b) {
                            k.call(this.el, null === a || a === d ? "" : b !== !0 && Z ? a.split("").reverse().join("") : a)
                        }, j === d && (j = function () {
                            return this.value
                        }, k = function (a) {
                            this.value = a
                        }, f(b.type), i(b))
                    }
                }
                var g = b.getAttribute("type"),
                    h = "INPUT" === b.tagName && a.inArray(g, e.supportsInputType) !== -1 || b.isContentEditable || "TEXTAREA" === b.tagName;
                if (!h)
                    if ("INPUT" === b.tagName) {
                        var i = c.createElement("input");
                        i.setAttribute("type", g), h = "text" === i.type, i = null
                    } else h = "partial";
                return h !== !1 && f(b), h
            }
            ca.off(b);
            var f = e(b, i);
            if (f !== !1 && (Y = b, U = a(Y), ("rtl" === Y.dir || i.rightAlign) && (Y.style.textAlign = "right"), ("rtl" === Y.dir || i.numericInput) && (Y.dir = "ltr", Y.removeAttribute("dir"), Y.inputmask.isRTL = !0, Z = !0), i.colorMask === !0 && Q(Y), m && (Y.hasOwnProperty("inputmode") && (Y.inputmode = i.inputmode, Y.setAttribute("inputmode", i.inputmode)), "rtfm" === i.androidHack && (i.colorMask !== !0 && Q(Y), Y.type = "password")), f === !0 && (ca.on(Y, "submit", da.submitEvent), ca.on(Y, "reset", da.resetEvent), ca.on(Y, "mouseenter", da.mouseenterEvent), ca.on(Y, "blur", da.blurEvent), ca.on(Y, "focus", da.focusEvent), ca.on(Y, "mouseleave", da.mouseleaveEvent), i.colorMask !== !0 && ca.on(Y, "click", da.clickEvent), ca.on(Y, "dblclick", da.dblclickEvent), ca.on(Y, "paste", da.pasteEvent), ca.on(Y, "dragdrop", da.pasteEvent), ca.on(Y, "drop", da.pasteEvent), ca.on(Y, "cut", da.cutEvent), ca.on(Y, "complete", i.oncomplete), ca.on(Y, "incomplete", i.onincomplete), ca.on(Y, "cleared", i.oncleared), m || i.inputEventOnly === !0 || (ca.on(Y, "keydown", da.keydownEvent), ca.on(Y, "keypress", da.keypressEvent)), ca.on(Y, "compositionstart", a.noop), ca.on(Y, "compositionupdate", a.noop), ca.on(Y, "compositionend", a.noop), ca.on(Y, "keyup", a.noop), ca.on(Y, "input", da.inputFallBackEvent), ca.on(Y, "beforeinput", a.noop)), ca.on(Y, "setvalue", da.setValueEvent), x(), "" !== Y.inputmask._valueGet(!0) || i.clearMaskOnLostFocus === !1 || c.activeElement === Y)) {
                var g = a.isFunction(i.onBeforeMask) ? i.onBeforeMask(Y.inputmask._valueGet(!0), i) || Y.inputmask._valueGet(!0) : Y.inputmask._valueGet(!0);
                "" !== g && J(Y, !0, !1, Z ? g.split("").reverse() : g.split(""));
                var h = y().slice();
                T = h.join(""), O(h) === !1 && i.clearIncomplete && p(), i.clearMaskOnLostFocus && c.activeElement !== Y && (q() === -1 ? h = [] : N(h)), H(Y, h), c.activeElement === Y && L(Y, E(q()))
            }
        }
        g = g || this.maskset, i = i || this.opts;
        var T, U, V, W, X, Y = this.el,
            Z = this.isRTL,
            $ = !1,
            _ = !1,
            aa = !1,
            ba = !1,
            ca = {
                on: function (b, c, f) {
                    var g = function (b) {
                        if (this.inputmask === d && "FORM" !== this.nodeName) {
                            var c = a.data(this, "_inputmask_opts");
                            c ? new e(c).mask(this) : ca.off(this)
                        } else {
                            if ("setvalue" === b.type || "FORM" === this.nodeName || !(this.disabled || this.readOnly && !("keydown" === b.type && b.ctrlKey && 67 === b.keyCode || i.tabThrough === !1 && b.keyCode === e.keyCode.TAB))) {
                                switch (b.type) {
                                    case "input":
                                        if (_ === !0) return _ = !1, b.preventDefault();
                                        break;
                                    case "keydown":
                                        $ = !1, _ = !1;
                                        break;
                                    case "keypress":
                                        if ($ === !0) return b.preventDefault();
                                        $ = !0;
                                        break;
                                    case "click":
                                        if (k || l) {
                                            var g = this,
                                                h = arguments;
                                            return setTimeout(function () {
                                                f.apply(g, h)
                                            }, 0), !1
                                        }
                                }
                                var j = f.apply(this, arguments);
                                return j === !1 && (b.preventDefault(), b.stopPropagation()), j
                            }
                            b.preventDefault()
                        }
                    };
                    b.inputmask.events[c] = b.inputmask.events[c] || [], b.inputmask.events[c].push(g), a.inArray(c, ["submit", "reset"]) !== -1 ? null != b.form && a(b.form).on(c, g) : a(b).on(c, g)
                },
                off: function (b, c) {
                    if (b.inputmask && b.inputmask.events) {
                        var d;
                        c ? (d = [], d[c] = b.inputmask.events[c]) : d = b.inputmask.events, a.each(d, function (c, d) {
                            for (; d.length > 0;) {
                                var e = d.pop();
                                a.inArray(c, ["submit", "reset"]) !== -1 ? null != b.form && a(b.form).off(c, e) : a(b).off(c, e)
                            }
                            delete b.inputmask.events[c]
                        })
                    }
                }
            },
            da = {
                keydownEvent: function (b) {
                    function d(a) {
                        var b = c.createElement("input"),
                            d = "on" + a,
                            e = d in b;
                        return e || (b.setAttribute(d, "return;"), e = "function" == typeof b[d]), b = null, e
                    }
                    var f = this,
                        g = a(f),
                        h = b.keyCode,
                        j = L(f);
                    if (h === e.keyCode.BACKSPACE || h === e.keyCode.DELETE || l && h === e.keyCode.BACKSPACE_SAFARI || b.ctrlKey && h === e.keyCode.X && !d("cut")) b.preventDefault(), P(f, h, j), H(f, y(!0), o().p, b, f.inputmask._valueGet() !== y().join("")), f.inputmask._valueGet() === x().join("") ? g.trigger("cleared") : O(y()) === !0 && g.trigger("complete");
                    else if (h === e.keyCode.END || h === e.keyCode.PAGE_DOWN) {
                        b.preventDefault();
                        var k = E(q());
                        i.insertMode || k !== o().maskLength || b.shiftKey || k--, L(f, b.shiftKey ? j.begin : k, k, !0)
                    } else h === e.keyCode.HOME && !b.shiftKey || h === e.keyCode.PAGE_UP ? (b.preventDefault(), L(f, 0, b.shiftKey ? j.begin : 0, !0)) : (i.undoOnEscape && h === e.keyCode.ESCAPE || 90 === h && b.ctrlKey) && b.altKey !== !0 ? (J(f, !0, !1, T.split("")), g.trigger("click")) : h !== e.keyCode.INSERT || b.shiftKey || b.ctrlKey ? i.tabThrough === !0 && h === e.keyCode.TAB ? (b.shiftKey === !0 ? (null === u(j.begin).match.fn && (j.begin = E(j.begin)), j.end = F(j.begin, !0), j.begin = F(j.end, !0)) : (j.begin = E(j.begin, !0), j.end = E(j.begin, !0), j.end < o().maskLength && j.end--), j.begin < o().maskLength && (b.preventDefault(), L(f, j.begin, j.end))) : b.shiftKey || i.insertMode === !1 && (h === e.keyCode.RIGHT ? setTimeout(function () {
                        var a = L(f);
                        L(f, a.begin)
                    }, 0) : h === e.keyCode.LEFT && setTimeout(function () {
                        var a = L(f);
                        L(f, Z ? a.begin + 1 : a.begin - 1)
                    }, 0)) : (i.insertMode = !i.insertMode, L(f, i.insertMode || j.begin !== o().maskLength ? j.begin : j.begin - 1));
                    i.onKeyDown.call(this, b, y(), L(f).begin, i), aa = a.inArray(h, i.ignorables) !== -1
                },
                keypressEvent: function (b, c, f, g, h) {
                    var j = this,
                        k = a(j),
                        l = b.which || b.charCode || b.keyCode;
                    if (!(c === !0 || b.ctrlKey && b.altKey) && (b.ctrlKey || b.metaKey || aa)) return l === e.keyCode.ENTER && T !== y().join("") && (T = y().join(""), setTimeout(function () {
                        k.trigger("change")
                    }, 0)), !0;
                    if (l) {
                        46 === l && b.shiftKey === !1 && "" !== i.radixPoint && (l = i.radixPoint.charCodeAt(0));
                        var m, n = c ? {
                                begin: h,
                                end: h
                            } : L(j),
                            q = String.fromCharCode(l);
                        o().writeOutBuffer = !0;
                        var r = C(n, q, g);
                        if (r !== !1 && (p(!0), m = r.caret !== d ? r.caret : c ? r.pos + 1 : E(r.pos), o().p = m), f !== !1) {
                            var s = this;
                            if (setTimeout(function () {
                                    i.onKeyValidation.call(s, l, r, i)
                                }, 0), o().writeOutBuffer && r !== !1) {
                                var t = y();
                                H(j, t, i.numericInput && r.caret === d ? F(m) : m, b, c !== !0), c !== !0 && setTimeout(function () {
                                    O(t) === !0 && k.trigger("complete")
                                }, 0)
                            }
                        }
                        if (b.preventDefault(), c) return r.forwardPosition = m, r
                    }
                },
                pasteEvent: function (c) {
                    var d, e = this,
                        f = c.originalEvent || c,
                        g = a(e),
                        h = e.inputmask._valueGet(!0),
                        j = L(e);
                    Z && (d = j.end, j.end = j.begin, j.begin = d);
                    var k = h.substr(0, j.begin),
                        l = h.substr(j.end, h.length);
                    if (k === (Z ? x().reverse() : x()).slice(0, j.begin).join("") && (k = ""), l === (Z ? x().reverse() : x()).slice(j.end).join("") && (l = ""), Z && (d = k, k = l, l = d), b.clipboardData && b.clipboardData.getData) h = k + b.clipboardData.getData("Text") + l;
                    else {
                        if (!f.clipboardData || !f.clipboardData.getData) return !0;
                        h = k + f.clipboardData.getData("text/plain") + l
                    }
                    var m = h;
                    if (a.isFunction(i.onBeforePaste)) {
                        if (m = i.onBeforePaste(h, i), m === !1) return c.preventDefault();
                        m || (m = h)
                    }
                    return J(e, !1, !1, Z ? m.split("").reverse() : m.toString().split("")), H(e, y(), E(q()), c, T !== y().join("")), O(y()) === !0 && g.trigger("complete"), c.preventDefault()
                },
                inputFallBackEvent: function (b) {
                    var c = this,
                        d = c.inputmask._valueGet();
                    if (y().join("") !== d) {
                        var f = L(c);
                        if ("." === d.charAt(f.begin - 1) && "" !== i.radixPoint && (d = d.split(""), d[f.begin - 1] = i.radixPoint.charAt(0), d = d.join("")), d.charAt(f.begin - 1) === i.radixPoint && d.length > y().length) {
                            var g = new a.Event("keypress");
                            return g.which = i.radixPoint.charCodeAt(0), da.keypressEvent.call(c, g, !0, !0, !1, f.begin), !1
                        }
                        if (d = d.replace(new RegExp("(" + e.escapeRegex(x().join("")) + ")*"), ""), k) {
                            var h = d.replace(y().join(""), "");
                            if (1 === h.length) {
                                var g = new a.Event("keypress");
                                return g.which = h.charCodeAt(0), da.keypressEvent.call(c, g, !0, !0, !1, o().validPositions[f.begin - 1] ? f.begin : f.begin - 1), !1
                            }
                        }
                        if (f.begin > d.length && (L(c, d.length), f = L(c)), y().length - d.length !== 1 || d.charAt(f.begin) === y()[f.begin] || d.charAt(f.begin + 1) === y()[f.begin] || D(f.begin)) {
                            var j = [],
                                l = n(!0, 1).join("");
                            for (j.push(d.substr(0, f.begin)), j.push(d.substr(f.begin)); null === d.match(e.escapeRegex(l) + "$");) l = l.slice(1);
                            d = d.replace(l, ""), a.isFunction(i.onBeforeMask) && (d = i.onBeforeMask(d, i) || d), J(c, !0, !1, d.split(""), b);
                            var p = L(c).begin,
                                q = c.inputmask._valueGet(),
                                r = q.indexOf(j[0]);
                            if (0 === r && p !== j[0].length) L(c, j[0].length), m && setTimeout(function () {
                                L(c, j[0].length)
                            }, 0);
                            else {
                                for (; null === q.match(e.escapeRegex(j[1]) + "$");) j[1] = j[1].substr(1);
                                var s = q.indexOf(j[1]);
                                s !== -1 && "" !== j[1] && p > s && s > r && (L(c, s), m && setTimeout(function () {
                                    L(c, s)
                                }, 0))
                            }
                            O(y()) === !0 && a(c).trigger("complete")
                        } else b.keyCode = e.keyCode.BACKSPACE, da.keydownEvent.call(c, b);
                        b.preventDefault()
                    }
                },
                setValueEvent: function (b) {
                    this.inputmask.refreshValue = !1;
                    var c = this,
                        d = c.inputmask._valueGet(!0);
                    a.isFunction(i.onBeforeMask) && (d = i.onBeforeMask(d, i) || d), d = d.split(""), J(c, !0, !1, Z ? d.reverse() : d), T = y().join(""), (i.clearMaskOnLostFocus || i.clearIncomplete) && c.inputmask._valueGet() === x().join("") && c.inputmask._valueSet("")
                },
                focusEvent: function (a) {
                    var b = this,
                        c = b.inputmask._valueGet();
                    i.showMaskOnFocus && (!i.showMaskOnHover || i.showMaskOnHover && "" === c) && (b.inputmask._valueGet() !== y().join("") ? H(b, y(), E(q())) : ba === !1 && L(b, E(q()))), i.positionCaretOnTab === !0 && ba === !1 && da.clickEvent.apply(b, [a, !0]), T = y().join("")
                },
                mouseleaveEvent: function (a) {
                    var b = this;
                    if (ba = !1, i.clearMaskOnLostFocus && c.activeElement !== b) {
                        var d = y().slice(),
                            e = b.inputmask._valueGet();
                        e !== b.getAttribute("placeholder") && "" !== e && (q() === -1 && e === x().join("") ? d = [] : N(d), H(b, d))
                    }
                },
                clickEvent: function (b, e) {
                    function f(b) {
                        if ("" !== i.radixPoint) {
                            var c = o().validPositions;
                            if (c[b] === d || c[b].input === I(b)) {
                                if (b < E(-1)) return !0;
                                var e = a.inArray(i.radixPoint, y());
                                if (e !== -1) {
                                    for (var f in c)
                                        if (e < f && c[f].input !== I(f)) return !1;
                                    return !0
                                }
                            }
                        }
                        return !1
                    }
                    var g = this;
                    setTimeout(function () {
                        if (c.activeElement === g) {
                            var a = L(g);
                            if (e && (Z ? a.end = a.begin : a.begin = a.end), a.begin === a.end) switch (i.positionCaretOnClick) {
                                case "none":
                                    break;
                                case "radixFocus":
                                    if (f(a.begin)) {
                                        var b = y().join("").indexOf(i.radixPoint);
                                        L(g, i.numericInput ? E(b) : b);
                                        break
                                    }
                                    default:
                                        var d = a.begin,
                                            h = q(d, !0),
                                            j = E(h);
                                        if (d < j) L(g, D(d) || D(d - 1) ? d : E(d));
                                        else {
                                            var k = I(j);
                                            ("" !== k && y()[j] !== k && u(j).match.optionalQuantifier !== !0 || !D(j) && u(j).match.def === k) && (j = E(j)), L(g, j)
                                        }
                            }
                        }
                    }, 0)
                },
                dblclickEvent: function (a) {
                    var b = this;
                    setTimeout(function () {
                        L(b, 0, E(q()))
                    }, 0)
                },
                cutEvent: function (d) {
                    var f = this,
                        g = a(f),
                        h = L(f),
                        i = d.originalEvent || d,
                        j = b.clipboardData || i.clipboardData,
                        k = Z ? y().slice(h.end, h.begin) : y().slice(h.begin, h.end);
                    j.setData("text", Z ? k.reverse().join("") : k.join("")), c.execCommand && c.execCommand("copy"), P(f, e.keyCode.DELETE, h), H(f, y(), o().p, d, T !== y().join("")), f.inputmask._valueGet() === x().join("") && g.trigger("cleared")
                },
                blurEvent: function (b) {
                    var c = a(this),
                        e = this;
                    if (e.inputmask) {
                        var f = e.inputmask._valueGet(),
                            g = y().slice();
                        T !== g.join("") && setTimeout(function () {
                            c.trigger("change"), T = g.join("")
                        }, 0), "" !== f && (i.clearMaskOnLostFocus && (q() === -1 && f === x().join("") ? g = [] : N(g)), O(g) === !1 && (setTimeout(function () {
                            c.trigger("incomplete")
                        }, 0), i.clearIncomplete && (p(), g = i.clearMaskOnLostFocus ? [] : x().slice())), H(e, g, d, b))
                    }
                },
                mouseenterEvent: function (a) {
                    var b = this;
                    ba = !0, c.activeElement !== b && i.showMaskOnHover && b.inputmask._valueGet() !== y().join("") && H(b, y())
                },
                submitEvent: function (a) {
                    T !== y().join("") && U.trigger("change"), i.clearMaskOnLostFocus && q() === -1 && Y.inputmask._valueGet && Y.inputmask._valueGet() === x().join("") && Y.inputmask._valueSet(""), i.removeMaskOnSubmit && (Y.inputmask._valueSet(Y.inputmask.unmaskedvalue(), !0), setTimeout(function () {
                        H(Y, y())
                    }, 0))
                },
                resetEvent: function (a) {
                    Y.inputmask.refreshValue = !0, setTimeout(function () {
                        U.trigger("setvalue")
                    }, 0)
                }
            };
        if (f !== d) switch (f.action) {
            case "isComplete":
                return Y = f.el, O(y());
            case "unmaskedvalue":
                return Y !== d && f.value === d || (X = f.value, X = (a.isFunction(i.onBeforeMask) ? i.onBeforeMask(X, i) || X : X).split(""), J(d, !1, !1, Z ? X.reverse() : X), a.isFunction(i.onBeforeWrite) && i.onBeforeWrite(d, y(), 0, i)), K(Y);
            case "mask":
                S(Y);
                break;
            case "format":
                return X = (a.isFunction(i.onBeforeMask) ? i.onBeforeMask(f.value, i) || f.value : f.value).split(""), J(d, !0, !1, Z ? X.reverse() : X), f.metadata ? {
                    value: Z ? y().slice().reverse().join("") : y().join(""),
                    metadata: h.call(this, {
                        action: "getmetadata"
                    }, g, i)
                } : Z ? y().slice().reverse().join("") : y().join("");
            case "isValid":
                f.value ? (X = f.value.split(""), J(d, !0, !0, Z ? X.reverse() : X)) : f.value = y().join("");
                for (var ea = y(), fa = M(), ga = ea.length - 1; ga > fa && !D(ga); ga--);
                return ea.splice(fa, ga + 1 - fa), O(ea) && f.value === y().join("");
            case "getemptymask":
                return x().join("");
            case "remove":
                if (Y && Y.inputmask) {
                    U = a(Y), Y.inputmask._valueSet(i.autoUnmask ? K(Y) : Y.inputmask._valueGet(!0)), ca.off(Y);
                    var ha;
                    Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? (ha = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Y), "value"), ha && Y.inputmask.__valueGet && Object.defineProperty(Y, "value", {
                        get: Y.inputmask.__valueGet,
                        set: Y.inputmask.__valueSet,
                        configurable: !0
                    })) : c.__lookupGetter__ && Y.__lookupGetter__("value") && Y.inputmask.__valueGet && (Y.__defineGetter__("value", Y.inputmask.__valueGet), Y.__defineSetter__("value", Y.inputmask.__valueSet)), Y.inputmask = d
                }
                return Y;
            case "getmetadata":
                if (a.isArray(g.metadata)) {
                    var ia = n(!0, 0, !1).join("");
                    return a.each(g.metadata, function (a, b) {
                        if (b.mask === ia) return ia = b, !1
                    }), ia
                }
                return g.metadata
        }
    }
    var i = navigator.userAgent,
        j = /mobile/i.test(i),
        k = /iemobile/i.test(i),
        l = /iphone/i.test(i) && !k,
        m = /android/i.test(i) && !k;
    return e.prototype = {
        dataAttribute: "data-inputmask",
        defaults: {
            placeholder: "_",
            optionalmarker: {
                start: "[",
                end: "]"
            },
            quantifiermarker: {
                start: "{",
                end: "}"
            },
            groupmarker: {
                start: "(",
                end: ")"
            },
            alternatormarker: "|",
            escapeChar: "\\",
            mask: null,
            oncomplete: a.noop,
            onincomplete: a.noop,
            oncleared: a.noop,
            repeat: 0,
            greedy: !0,
            autoUnmask: !1,
            removeMaskOnSubmit: !1,
            clearMaskOnLostFocus: !0,
            insertMode: !0,
            clearIncomplete: !1,
            alias: null,
            onKeyDown: a.noop,
            onBeforeMask: null,
            onBeforePaste: function (b, c) {
                return a.isFunction(c.onBeforeMask) ? c.onBeforeMask(b, c) : b
            },
            onBeforeWrite: null,
            onUnMask: null,
            showMaskOnFocus: !0,
            showMaskOnHover: !0,
            onKeyValidation: a.noop,
            skipOptionalPartCharacter: " ",
            numericInput: !1,
            rightAlign: !1,
            undoOnEscape: !0,
            radixPoint: "",
            radixPointDefinitionSymbol: d,
            groupSeparator: "",
            keepStatic: null,
            positionCaretOnTab: !0,
            tabThrough: !1,
            supportsInputType: ["text", "tel", "password"],
            ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
            isComplete: null,
            canClearPosition: a.noop,
            preValidation: null,
            postValidation: null,
            staticDefinitionSymbol: d,
            jitMasking: !1,
            nullable: !0,
            inputEventOnly: !1,
            noValuePatching: !1,
            positionCaretOnClick: "lvp",
            casing: null,
            inputmode: "verbatim",
            colorMask: !1,
            androidHack: !1
        },
        definitions: {
            9: {
                validator: "[0-9]",
                cardinality: 1,
                definitionSymbol: "*"
            },
            a: {
                validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                cardinality: 1,
                definitionSymbol: "*"
            },
            "*": {
                validator: function () {
                    return !0
                },
                cardinality: 1
            }
        },
        aliases: {},
        masksCache: {},
        mask: function (i) {
            function j(c, e, g, h) {
                function i(a, e) {
                    e = e !== d ? e : c.getAttribute(h + "-" + a), null !== e && ("string" == typeof e && (0 === a.indexOf("on") ? e = b[e] : "false" === e ? e = !1 : "true" === e && (e = !0)), g[a] = e)
                }
                var j, k, l, m, n = c.getAttribute(h);
                if (n && "" !== n && (n = n.replace(new RegExp("'", "g"), '"'), k = JSON.parse("{" + n + "}")), k) {
                    l = d;
                    for (m in k)
                        if ("alias" === m.toLowerCase()) {
                            l = k[m];
                            break
                        }
                }
                i("alias", l), g.alias && f(g.alias, g, e);
                for (j in e) {
                    if (k) {
                        l = d;
                        for (m in k)
                            if (m.toLowerCase() === j.toLowerCase()) {
                                l = k[m];
                                break
                            }
                    }
                    i(j, l)
                }
                return a.extend(!0, e, g), e
            }
            var k = this;
            return "string" == typeof i && (i = c.getElementById(i) || c.querySelectorAll(i)), i = i.nodeName ? [i] : i, a.each(i, function (b, c) {
                var f = a.extend(!0, {}, k.opts);
                j(c, f, a.extend(!0, {}, k.userOptions), k.dataAttribute);
                var i = g(f, k.noMasksCache);
                i !== d && (c.inputmask !== d && c.inputmask.remove(), c.inputmask = new e(d, d, (!0)), c.inputmask.opts = f, c.inputmask.noMasksCache = k.noMasksCache, c.inputmask.userOptions = a.extend(!0, {}, k.userOptions), c.inputmask.isRTL = k.isRTL, c.inputmask.el = c, c.inputmask.maskset = i, a.data(c, "_inputmask_opts", f), h.call(c.inputmask, {
                    action: "mask"
                }))
            }), i && i[0] ? i[0].inputmask || this : this
        },
        option: function (b, c) {
            return "string" == typeof b ? this.opts[b] : "object" == typeof b ? (a.extend(this.userOptions, b), this.el && c !== !0 && this.mask(this.el), this) : void 0
        },
        unmaskedvalue: function (a) {
            return this.maskset = this.maskset || g(this.opts, this.noMasksCache), h.call(this, {
                action: "unmaskedvalue",
                value: a
            })
        },
        remove: function () {
            return h.call(this, {
                action: "remove"
            })
        },
        getemptymask: function () {
            return this.maskset = this.maskset || g(this.opts, this.noMasksCache), h.call(this, {
                action: "getemptymask"
            })
        },
        hasMaskedValue: function () {
            return !this.opts.autoUnmask
        },
        isComplete: function () {
            return this.maskset = this.maskset || g(this.opts, this.noMasksCache), h.call(this, {
                action: "isComplete"
            })
        },
        getmetadata: function () {
            return this.maskset = this.maskset || g(this.opts, this.noMasksCache), h.call(this, {
                action: "getmetadata"
            })
        },
        isValid: function (a) {
            return this.maskset = this.maskset || g(this.opts, this.noMasksCache), h.call(this, {
                action: "isValid",
                value: a
            })
        },
        format: function (a, b) {
            return this.maskset = this.maskset || g(this.opts, this.noMasksCache), h.call(this, {
                action: "format",
                value: a,
                metadata: b
            })
        },
        analyseMask: function (b, c) {
            function f(a, b, c, d) {
                this.matches = [], this.openGroup = a || !1, this.isGroup = a || !1, this.isOptional = b || !1, this.isQuantifier = c || !1, this.isAlternator = d || !1, this.quantifier = {
                    min: 1,
                    max: 1
                }
            }

            function g(a, b, f) {
                var g = (c.definitions ? c.definitions[b] : d) || e.prototype.definitions[b];
                f = f !== d ? f : a.matches.length;
                var h = a.matches[f - 1];
                if (g && !s) {
                    for (var i = g.prevalidator, j = i ? i.length : 0, k = 1; k < g.cardinality; k++) {
                        var l = j >= k ? i[k - 1] : [],
                            m = l.validator,
                            n = l.cardinality;
                        a.matches.splice(f++, 0, {
                            fn: m ? "string" == typeof m ? new RegExp(m) : new function () {
                                this.test = m
                            } : new RegExp("."),
                            cardinality: n ? n : 1,
                            optionality: a.isOptional,
                            newBlockMarker: h === d || h.def !== (g.definitionSymbol || b),
                            casing: g.casing,
                            def: g.definitionSymbol || b,
                            placeholder: g.placeholder,
                            nativeDef: b
                        }), h = a.matches[f - 1]
                    }
                    a.matches.splice(f++, 0, {
                        fn: g.validator ? "string" == typeof g.validator ? new RegExp(g.validator) : new function () {
                            this.test = g.validator
                        } : new RegExp("."),
                        cardinality: g.cardinality,
                        optionality: a.isOptional,
                        newBlockMarker: h === d || h.def !== (g.definitionSymbol || b),
                        casing: g.casing,
                        def: g.definitionSymbol || b,
                        placeholder: g.placeholder,
                        nativeDef: b
                    })
                } else a.matches.splice(f++, 0, {
                    fn: null,
                    cardinality: 0,
                    optionality: a.isOptional,
                    newBlockMarker: h === d || h.def !== b,
                    casing: null,
                    def: c.staticDefinitionSymbol || b,
                    placeholder: c.staticDefinitionSymbol !== d ? b : d,
                    nativeDef: b
                }), s = !1
            }

            function h(b) {
                b && b.matches && a.each(b.matches, function (a, e) {
                    var f = b.matches[a + 1];
                    (f === d || f.matches === d || f.isQuantifier === !1) && e && e.isGroup && (e.isGroup = !1, g(e, c.groupmarker.start, 0), e.openGroup !== !0 && g(e, c.groupmarker.end)), h(e)
                })
            }

            function i() {
                if (u.length > 0) {
                    if (n = u[u.length - 1], g(n, l), n.isAlternator) {
                        o = u.pop();
                        for (var a = 0; a < o.matches.length; a++) o.matches[a].isGroup = !1;
                        u.length > 0 ? (n = u[u.length - 1], n.matches.push(o)) : t.matches.push(o)
                    }
                } else g(t, l)
            }

            function j(a) {
                function b(a) {
                    return a === c.optionalmarker.start ? a = c.optionalmarker.end : a === c.optionalmarker.end ? a = c.optionalmarker.start : a === c.groupmarker.start ? a = c.groupmarker.end : a === c.groupmarker.end && (a = c.groupmarker.start), a
                }
                a.matches = a.matches.reverse();
                for (var e in a.matches)
                    if (a.matches.hasOwnProperty(e)) {
                        var f = parseInt(e);
                        if (a.matches[e].isQuantifier && a.matches[f + 1] && a.matches[f + 1].isGroup) {
                            var g = a.matches[e];
                            a.matches.splice(e, 1), a.matches.splice(f + 1, 0, g)
                        }
                        a.matches[e].matches !== d ? a.matches[e] = j(a.matches[e]) : a.matches[e] = b(a.matches[e])
                    } return a
            }
            for (var k, l, m, n, o, p, q, r = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g, s = !1, t = new f, u = [], v = []; k = r.exec(b);)
                if (l = k[0], s) i();
                else switch (l.charAt(0)) {
                    case c.escapeChar:
                        s = !0;
                        break;
                    case c.optionalmarker.end:
                    case c.groupmarker.end:
                        if (m = u.pop(), m.openGroup = !1, m !== d)
                            if (u.length > 0) {
                                if (n = u[u.length - 1], n.matches.push(m), n.isAlternator) {
                                    o = u.pop();
                                    for (var w = 0; w < o.matches.length; w++) o.matches[w].isGroup = !1;
                                    u.length > 0 ? (n = u[u.length - 1], n.matches.push(o)) : t.matches.push(o)
                                }
                            } else t.matches.push(m);
                        else i();
                        break;
                    case c.optionalmarker.start:
                        u.push(new f((!1), (!0)));
                        break;
                    case c.groupmarker.start:
                        u.push(new f((!0)));
                        break;
                    case c.quantifiermarker.start:
                        var x = new f((!1), (!1), (!0));
                        l = l.replace(/[{}]/g, "");
                        var y = l.split(","),
                            z = isNaN(y[0]) ? y[0] : parseInt(y[0]),
                            A = 1 === y.length ? z : isNaN(y[1]) ? y[1] : parseInt(y[1]);
                        if ("*" !== A && "+" !== A || (z = "*" === A ? 0 : 1), x.quantifier = {
                                min: z,
                                max: A
                            }, u.length > 0) {
                            var B = u[u.length - 1].matches;
                            k = B.pop(), k.isGroup || (q = new f((!0)), q.matches.push(k), k = q), B.push(k), B.push(x)
                        } else k = t.matches.pop(), k.isGroup || (q = new f((!0)), q.matches.push(k), k = q), t.matches.push(k), t.matches.push(x);
                        break;
                    case c.alternatormarker:
                        u.length > 0 ? (n = u[u.length - 1], p = n.matches.pop()) : p = t.matches.pop(), p.isAlternator ? u.push(p) : (o = new f((!1), (!1), (!1), (!0)), o.matches.push(p), u.push(o));
                        break;
                    default:
                        i()
                }
            for (; u.length > 0;) m = u.pop(), t.matches.push(m);
            return t.matches.length > 0 && (h(t), v.push(t)), c.numericInput && j(v[0]), v
        }
    }, e.extendDefaults = function (b) {
        a.extend(!0, e.prototype.defaults, b)
    }, e.extendDefinitions = function (b) {
        a.extend(!0, e.prototype.definitions, b)
    }, e.extendAliases = function (b) {
        a.extend(!0, e.prototype.aliases, b)
    }, e.format = function (a, b, c) {
        return e(b).format(a, c)
    }, e.unmask = function (a, b) {
        return e(b).unmaskedvalue(a)
    }, e.isValid = function (a, b) {
        return e(b).isValid(a)
    }, e.remove = function (b) {
        a.each(b, function (a, b) {
            b.inputmask && b.inputmask.remove()
        })
    }, e.escapeRegex = function (a) {
        var b = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"];
        return a.replace(new RegExp("(\\" + b.join("|\\") + ")", "gim"), "\\$1")
    }, e.keyCode = {
        ALT: 18,
        BACKSPACE: 8,
        BACKSPACE_SAFARI: 127,
        CAPS_LOCK: 20,
        COMMA: 188,
        COMMAND: 91,
        COMMAND_LEFT: 91,
        COMMAND_RIGHT: 93,
        CONTROL: 17,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        INSERT: 45,
        LEFT: 37,
        MENU: 93,
        NUMPAD_ADD: 107,
        NUMPAD_DECIMAL: 110,
        NUMPAD_DIVIDE: 111,
        NUMPAD_ENTER: 108,
        NUMPAD_MULTIPLY: 106,
        NUMPAD_SUBTRACT: 109,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SHIFT: 16,
        SPACE: 32,
        TAB: 9,
        UP: 38,
        WINDOWS: 91,
        X: 88
    }, e
}),
function (a) {
    a(jQuery, window.Inputmask)
}(function (a, b) {
    return void 0 === a.fn.inputmask && (a.fn.inputmask = function (c, d) {
        var e, f = this[0];
        if (void 0 === d && (d = {}), "string" == typeof c) switch (c) {
            case "unmaskedvalue":
                return f && f.inputmask ? f.inputmask.unmaskedvalue() : a(f).val();
            case "remove":
                return this.each(function () {
                    this.inputmask && this.inputmask.remove()
                });
            case "getemptymask":
                return f && f.inputmask ? f.inputmask.getemptymask() : "";
            case "hasMaskedValue":
                return !(!f || !f.inputmask) && f.inputmask.hasMaskedValue();
            case "isComplete":
                return !f || !f.inputmask || f.inputmask.isComplete();
            case "getmetadata":
                return f && f.inputmask ? f.inputmask.getmetadata() : void 0;
            case "setvalue":
                a(f).val(d), f && void 0 === f.inputmask && a(f).triggerHandler("setvalue");
                break;
            case "option":
                if ("string" != typeof d) return this.each(function () {
                    if (void 0 !== this.inputmask) return this.inputmask.option(d)
                });
                if (f && void 0 !== f.inputmask) return f.inputmask.option(d);
                break;
            default:
                return d.alias = c, e = new b(d), this.each(function () {
                    e.mask(this)
                })
        } else {
            if ("object" == typeof c) return e = new b(c), void 0 === c.mask && void 0 === c.alias ? this.each(function () {
                return void 0 !== this.inputmask ? this.inputmask.option(c) : void e.mask(this)
            }) : this.each(function () {
                e.mask(this)
            });
            if (void 0 === c) return this.each(function () {
                e = new b(d), e.mask(this)
            })
        }
    }), a.fn.inputmask
}),
function (a, b) {}(jQuery, Inputmask),
function (a) {
    a(window.dependencyLib || jQuery, window.Inputmask)
}(function (a, b) {
    function c(a) {
        return isNaN(a) || 29 === new Date(a, 2, 0).getDate()
    }
    return b.extendAliases({
        "dd/mm/yyyy": {
            mask: "1/2/y",
            placeholder: "dd/mm/yyyy",
            regex: {
                val1pre: new RegExp("[0-3]"),
                val1: new RegExp("0[1-9]|[12][0-9]|3[01]"),
                val2pre: function (a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[1-9]|[12][0-9]|3[01])" + c + "[01])")
                },
                val2: function (a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[1-9]|[12][0-9])" + c + "(0[1-9]|1[012]))|(30" + c + "(0[13-9]|1[012]))|(31" + c + "(0[13578]|1[02]))")
                }
            },
            leapday: "29/02/",
            separator: "/",
            yearrange: {
                minyear: 1900,
                maxyear: 2099
            },
            isInYearRange: function (a, b, c) {
                if (isNaN(a)) return !1;
                var d = parseInt(a.concat(b.toString().slice(a.length))),
                    e = parseInt(a.concat(c.toString().slice(a.length)));
                return !isNaN(d) && (b <= d && d <= c) || !isNaN(e) && (b <= e && e <= c)
            },
            determinebaseyear: function (a, b, c) {
                var d = (new Date).getFullYear();
                if (a > d) return a;
                if (b < d) {
                    for (var e = b.toString().slice(0, 2), f = b.toString().slice(2, 4); b < e + c;) e--;
                    var g = e + f;
                    return a > g ? a : g
                }
                if (a <= d && d <= b) {
                    for (var h = d.toString().slice(0, 2); b < h + c;) h--;
                    var i = h + c;
                    return i < a ? a : i
                }
                return d
            },
            onKeyDown: function (c, d, e, f) {
                var g = a(this);
                if (c.ctrlKey && c.keyCode === b.keyCode.RIGHT) {
                    var h = new Date;
                    g.val(h.getDate().toString() + (h.getMonth() + 1).toString() + h.getFullYear().toString()), g.trigger("setvalue")
                }
            },
            getFrontValue: function (a, b, c) {
                for (var d = 0, e = 0, f = 0; f < a.length && "2" !== a.charAt(f); f++) {
                    var g = c.definitions[a.charAt(f)];
                    g ? (d += e, e = g.cardinality) : e++
                }
                return b.join("").substr(d, e)
            },
            postValidation: function (a, b, d) {
                var e, f, g = a.join("");
                return 0 === d.mask.indexOf("y") ? (f = g.substr(0, 4), e = g.substr(4, 11)) : (f = g.substr(6, 11), e = g.substr(0, 6)), b && (e !== d.leapday || c(f))
            },
            definitions: {
                1: {
                    validator: function (a, b, c, d, e) {
                        var f = e.regex.val1.test(a);
                        return d || f || a.charAt(1) !== e.separator && "-./".indexOf(a.charAt(1)) === -1 || !(f = e.regex.val1.test("0" + a.charAt(0))) ? f : (b.buffer[c - 1] = "0", {
                            refreshFromBuffer: {
                                start: c - 1,
                                end: c
                            },
                            pos: c,
                            c: a.charAt(0)
                        })
                    },
                    cardinality: 2,
                    prevalidator: [{
                        validator: function (a, b, c, d, e) {
                            var f = a;
                            isNaN(b.buffer[c + 1]) || (f += b.buffer[c + 1]);
                            var g = 1 === f.length ? e.regex.val1pre.test(f) : e.regex.val1.test(f);
                            if (!d && !g) {
                                if (g = e.regex.val1.test(a + "0")) return b.buffer[c] = a, b.buffer[++c] = "0", {
                                    pos: c,
                                    c: "0"
                                };
                                if (g = e.regex.val1.test("0" + a)) return b.buffer[c] = "0", c++, {
                                    pos: c
                                }
                            }
                            return g
                        },
                        cardinality: 1
                    }]
                },
                2: {
                    validator: function (a, b, c, d, e) {
                        var f = e.getFrontValue(b.mask, b.buffer, e);
                        f.indexOf(e.placeholder[0]) !== -1 && (f = "01" + e.separator);
                        var g = e.regex.val2(e.separator).test(f + a);
                        return d || g || a.charAt(1) !== e.separator && "-./".indexOf(a.charAt(1)) === -1 || !(g = e.regex.val2(e.separator).test(f + "0" + a.charAt(0))) ? g : (b.buffer[c - 1] = "0", {
                            refreshFromBuffer: {
                                start: c - 1,
                                end: c
                            },
                            pos: c,
                            c: a.charAt(0)
                        })
                    },
                    cardinality: 2,
                    prevalidator: [{
                        validator: function (a, b, c, d, e) {
                            isNaN(b.buffer[c + 1]) || (a += b.buffer[c + 1]);
                            var f = e.getFrontValue(b.mask, b.buffer, e);
                            f.indexOf(e.placeholder[0]) !== -1 && (f = "01" + e.separator);
                            var g = 1 === a.length ? e.regex.val2pre(e.separator).test(f + a) : e.regex.val2(e.separator).test(f + a);
                            return d || g || !(g = e.regex.val2(e.separator).test(f + "0" + a)) ? g : (b.buffer[c] = "0", c++, {
                                pos: c
                            })
                        },
                        cardinality: 1
                    }]
                },
                y: {
                    validator: function (a, b, c, d, e) {
                        return e.isInYearRange(a, e.yearrange.minyear, e.yearrange.maxyear)
                    },
                    cardinality: 4,
                    prevalidator: [{
                        validator: function (a, b, c, d, e) {
                            var f = e.isInYearRange(a, e.yearrange.minyear, e.yearrange.maxyear);
                            if (!d && !f) {
                                var g = e.determinebaseyear(e.yearrange.minyear, e.yearrange.maxyear, a + "0").toString().slice(0, 1);
                                if (f = e.isInYearRange(g + a, e.yearrange.minyear, e.yearrange.maxyear)) return b.buffer[c++] = g.charAt(0), {
                                    pos: c
                                };
                                if (g = e.determinebaseyear(e.yearrange.minyear, e.yearrange.maxyear, a + "0").toString().slice(0, 2), f = e.isInYearRange(g + a, e.yearrange.minyear, e.yearrange.maxyear)) return b.buffer[c++] = g.charAt(0), b.buffer[c++] = g.charAt(1), {
                                    pos: c
                                }
                            }
                            return f
                        },
                        cardinality: 1
                    }, {
                        validator: function (a, b, c, d, e) {
                            var f = e.isInYearRange(a, e.yearrange.minyear, e.yearrange.maxyear);
                            if (!d && !f) {
                                var g = e.determinebaseyear(e.yearrange.minyear, e.yearrange.maxyear, a).toString().slice(0, 2);
                                if (f = e.isInYearRange(a[0] + g[1] + a[1], e.yearrange.minyear, e.yearrange.maxyear)) return b.buffer[c++] = g.charAt(1), {
                                    pos: c
                                };
                                if (g = e.determinebaseyear(e.yearrange.minyear, e.yearrange.maxyear, a).toString().slice(0, 2), f = e.isInYearRange(g + a, e.yearrange.minyear, e.yearrange.maxyear)) return b.buffer[c - 1] = g.charAt(0), b.buffer[c++] = g.charAt(1), b.buffer[c++] = a.charAt(0), {
                                    refreshFromBuffer: {
                                        start: c - 3,
                                        end: c
                                    },
                                    pos: c
                                }
                            }
                            return f
                        },
                        cardinality: 2
                    }, {
                        validator: function (a, b, c, d, e) {
                            return e.isInYearRange(a, e.yearrange.minyear, e.yearrange.maxyear)
                        },
                        cardinality: 3
                    }]
                }
            },
            insertMode: !1,
            autoUnmask: !1
        },
        "mm/dd/yyyy": {
            placeholder: "mm/dd/yyyy",
            alias: "dd/mm/yyyy",
            regex: {
                val2pre: function (a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[13-9]|1[012])" + c + "[0-3])|(02" + c + "[0-2])")
                },
                val2: function (a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[1-9]|1[012])" + c + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + c + "30)|((0[13578]|1[02])" + c + "31)")
                },
                val1pre: new RegExp("[01]"),
                val1: new RegExp("0[1-9]|1[012]")
            },
            leapday: "02/29/",
            onKeyDown: function (c, d, e, f) {
                var g = a(this);
                if (c.ctrlKey && c.keyCode === b.keyCode.RIGHT) {
                    var h = new Date;
                    g.val((h.getMonth() + 1).toString() + h.getDate().toString() + h.getFullYear().toString()), g.trigger("setvalue")
                }
            }
        },
        "yyyy/mm/dd": {
            mask: "y/1/2",
            placeholder: "yyyy/mm/dd",
            alias: "mm/dd/yyyy",
            leapday: "/02/29",
            onKeyDown: function (c, d, e, f) {
                var g = a(this);
                if (c.ctrlKey && c.keyCode === b.keyCode.RIGHT) {
                    var h = new Date;
                    g.val(h.getFullYear().toString() + (h.getMonth() + 1).toString() + h.getDate().toString()), g.trigger("setvalue")
                }
            }
        },
        "dd.mm.yyyy": {
            mask: "1.2.y",
            placeholder: "dd.mm.yyyy",
            leapday: "29.02.",
            separator: ".",
            alias: "dd/mm/yyyy"
        },
        "dd-mm-yyyy": {
            mask: "1-2-y",
            placeholder: "dd-mm-yyyy",
            leapday: "29-02-",
            separator: "-",
            alias: "dd/mm/yyyy"
        },
        "mm.dd.yyyy": {
            mask: "1.2.y",
            placeholder: "mm.dd.yyyy",
            leapday: "02.29.",
            separator: ".",
            alias: "mm/dd/yyyy"
        },
        "mm-dd-yyyy": {
            mask: "1-2-y",
            placeholder: "mm-dd-yyyy",
            leapday: "02-29-",
            separator: "-",
            alias: "mm/dd/yyyy"
        },
        "yyyy.mm.dd": {
            mask: "y.1.2",
            placeholder: "yyyy.mm.dd",
            leapday: ".02.29",
            separator: ".",
            alias: "yyyy/mm/dd"
        },
        "yyyy-mm-dd": {
            mask: "y-1-2",
            placeholder: "yyyy-mm-dd",
            leapday: "-02-29",
            separator: "-",
            alias: "yyyy/mm/dd"
        },
        datetime: {
            mask: "1/2/y h:s",
            placeholder: "dd/mm/yyyy hh:mm",
            alias: "dd/mm/yyyy",
            regex: {
                hrspre: new RegExp("[012]"),
                hrs24: new RegExp("2[0-4]|1[3-9]"),
                hrs: new RegExp("[01][0-9]|2[0-4]"),
                ampm: new RegExp("^[a|p|A|P][m|M]"),
                mspre: new RegExp("[0-5]"),
                ms: new RegExp("[0-5][0-9]")
            },
            timeseparator: ":",
            hourFormat: "24",
            definitions: {
                h: {
                    validator: function (a, b, c, d, e) {
                        if ("24" === e.hourFormat && 24 === parseInt(a, 10)) return b.buffer[c - 1] = "0", b.buffer[c] = "0", {
                            refreshFromBuffer: {
                                start: c - 1,
                                end: c
                            },
                            c: "0"
                        };
                        var f = e.regex.hrs.test(a);
                        if (!d && !f && (a.charAt(1) === e.timeseparator || "-.:".indexOf(a.charAt(1)) !== -1) && (f = e.regex.hrs.test("0" + a.charAt(0)))) return b.buffer[c - 1] = "0", b.buffer[c] = a.charAt(0), c++, {
                            refreshFromBuffer: {
                                start: c - 2,
                                end: c
                            },
                            pos: c,
                            c: e.timeseparator
                        };
                        if (f && "24" !== e.hourFormat && e.regex.hrs24.test(a)) {
                            var g = parseInt(a, 10);
                            return 24 === g ? (b.buffer[c + 5] = "a", b.buffer[c + 6] = "m") : (b.buffer[c + 5] = "p", b.buffer[c + 6] = "m"), g -= 12, g < 10 ? (b.buffer[c] = g.toString(), b.buffer[c - 1] = "0") : (b.buffer[c] = g.toString().charAt(1), b.buffer[c - 1] = g.toString().charAt(0)), {
                                refreshFromBuffer: {
                                    start: c - 1,
                                    end: c + 6
                                },
                                c: b.buffer[c]
                            }
                        }
                        return f
                    },
                    cardinality: 2,
                    prevalidator: [{
                        validator: function (a, b, c, d, e) {
                            var f = e.regex.hrspre.test(a);
                            return d || f || !(f = e.regex.hrs.test("0" + a)) ? f : (b.buffer[c] = "0", c++, {
                                pos: c
                            })
                        },
                        cardinality: 1
                    }]
                },
                s: {
                    validator: "[0-5][0-9]",
                    cardinality: 2,
                    prevalidator: [{
                        validator: function (a, b, c, d, e) {
                            var f = e.regex.mspre.test(a);
                            return d || f || !(f = e.regex.ms.test("0" + a)) ? f : (b.buffer[c] = "0", c++, {
                                pos: c
                            })
                        },
                        cardinality: 1
                    }]
                },
                t: {
                    validator: function (a, b, c, d, e) {
                        return e.regex.ampm.test(a + "m")
                    },
                    casing: "lower",
                    cardinality: 1
                }
            },
            insertMode: !1,
            autoUnmask: !1
        },
        datetime12: {
            mask: "1/2/y h:s t\\m",
            placeholder: "dd/mm/yyyy hh:mm xm",
            alias: "datetime",
            hourFormat: "12"
        },
        "mm/dd/yyyy hh:mm xm": {
            mask: "1/2/y h:s t\\m",
            placeholder: "mm/dd/yyyy hh:mm xm",
            alias: "datetime12",
            regex: {
                val2pre: function (a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[13-9]|1[012])" + c + "[0-3])|(02" + c + "[0-2])")
                },
                val2: function (a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[1-9]|1[012])" + c + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + c + "30)|((0[13578]|1[02])" + c + "31)")
                },
                val1pre: new RegExp("[01]"),
                val1: new RegExp("0[1-9]|1[012]")
            },
            leapday: "02/29/",
            onKeyDown: function (c, d, e, f) {
                var g = a(this);
                if (c.ctrlKey && c.keyCode === b.keyCode.RIGHT) {
                    var h = new Date;
                    g.val((h.getMonth() + 1).toString() + h.getDate().toString() + h.getFullYear().toString()), g.trigger("setvalue")
                }
            }
        },
        "hh:mm t": {
            mask: "h:s t\\m",
            placeholder: "hh:mm xm",
            alias: "datetime",
            hourFormat: "12"
        },
        "h:s t": {
            mask: "h:s t\\m",
            placeholder: "hh:mm xm",
            alias: "datetime",
            hourFormat: "12"
        },
        "hh:mm:ss": {
            mask: "h:s:s",
            placeholder: "hh:mm:ss",
            alias: "datetime",
            autoUnmask: !1
        },
        "hh:mm": {
            mask: "h:s",
            placeholder: "hh:mm",
            alias: "datetime",
            autoUnmask: !1
        },
        date: {
            alias: "dd/mm/yyyy"
        },
        "mm/yyyy": {
            mask: "1/y",
            placeholder: "mm/yyyy",
            leapday: "donotuse",
            separator: "/",
            alias: "mm/dd/yyyy"
        },
        shamsi: {
            regex: {
                val2pre: function (a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[1-9]|1[012])" + c + "[0-3])")
                },
                val2: function (a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[1-9]|1[012])" + c + "(0[1-9]|[12][0-9]))|((0[1-9]|1[012])" + c + "30)|((0[1-6])" + c + "31)")
                },
                val1pre: new RegExp("[01]"),
                val1: new RegExp("0[1-9]|1[012]")
            },
            yearrange: {
                minyear: 1300,
                maxyear: 1499
            },
            mask: "y/1/2",
            leapday: "/12/30",
            placeholder: "yyyy/mm/dd",
            alias: "mm/dd/yyyy",
            clearIncomplete: !0
        },
        "yyyy-mm-dd hh:mm:ss": {
            mask: "y-1-2 h:s:s",
            placeholder: "yyyy-mm-dd hh:mm:ss",
            alias: "datetime",
            separator: "-",
            leapday: "-02-29",
            regex: {
                val2pre: function (a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[13-9]|1[012])" + c + "[0-3])|(02" + c + "[0-2])")
                },
                val2: function (a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[1-9]|1[012])" + c + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + c + "30)|((0[13578]|1[02])" + c + "31)")
                },
                val1pre: new RegExp("[01]"),
                val1: new RegExp("0[1-9]|1[012]")
            },
            onKeyDown: function (a, b, c, d) {}
        }
    }), b
}),
function (a) {
    a(window.dependencyLib || jQuery, window.Inputmask)
}(function (a, b) {
    return b.extendDefinitions({
        A: {
            validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
            cardinality: 1,
            casing: "upper"
        },
        "&": {
            validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
            cardinality: 1,
            casing: "upper"
        },
        "#": {
            validator: "[0-9A-Fa-f]",
            cardinality: 1,
            casing: "upper"
        }
    }), b.extendAliases({
        url: {
            definitions: {
                i: {
                    validator: ".",
                    cardinality: 1
                }
            },
            mask: "(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",
            insertMode: !1,
            autoUnmask: !1,
            inputmode: "url"
        },
        ip: {
            mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
            definitions: {
                i: {
                    validator: function (a, b, c, d, e) {
                        return c - 1 > -1 && "." !== b.buffer[c - 1] ? (a = b.buffer[c - 1] + a, a = c - 2 > -1 && "." !== b.buffer[c - 2] ? b.buffer[c - 2] + a : "0" + a) : a = "00" + a, new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(a)
                    },
                    cardinality: 1
                }
            },
            onUnMask: function (a, b, c) {
                return a
            },
            inputmode: "numeric"
        },
        email: {
            mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
            greedy: !1,
            onBeforePaste: function (a, b) {
                return a = a.toLowerCase(), a.replace("mailto:", "")
            },
            definitions: {
                "*": {
                    validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",
                    cardinality: 1,
                    casing: "lower"
                },
                "-": {
                    validator: "[0-9A-Za-z-]",
                    cardinality: 1,
                    casing: "lower"
                }
            },
            onUnMask: function (a, b, c) {
                return a
            },
            inputmode: "email"
        },
        mac: {
            mask: "##:##:##:##:##:##"
        },
        vin: {
            mask: "V{13}9{4}",
            definitions: {
                V: {
                    validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                    cardinality: 1,
                    casing: "upper"
                }
            },
            clearIncomplete: !0,
            autoUnmask: !0
        }
    }), b
}),
function (a) {
    a(window.dependencyLib || jQuery, window.Inputmask)
}(function (a, b, c) {
    function d(a, b) {
        for (var c = "", d = 0; d < a.length; d++) c += b.definitions[a.charAt(d)] || b.optionalmarker.start === a.charAt(d) || b.optionalmarker.end === a.charAt(d) || b.quantifiermarker.start === a.charAt(d) || b.quantifiermarker.end === a.charAt(d) || b.groupmarker.start === a.charAt(d) || b.groupmarker.end === a.charAt(d) || b.alternatormarker === a.charAt(d) ? "\\" + a.charAt(d) : a.charAt(d);
        return c
    }
    return b.extendAliases({
        numeric: {
            mask: function (a) {
                if (0 !== a.repeat && isNaN(a.integerDigits) && (a.integerDigits = a.repeat), a.repeat = 0, a.groupSeparator === a.radixPoint && ("." === a.radixPoint ? a.groupSeparator = "," : "," === a.radixPoint ? a.groupSeparator = "." : a.groupSeparator = ""), " " === a.groupSeparator && (a.skipOptionalPartCharacter = c), a.autoGroup = a.autoGroup && "" !== a.groupSeparator, a.autoGroup && ("string" == typeof a.groupSize && isFinite(a.groupSize) && (a.groupSize = parseInt(a.groupSize)), isFinite(a.integerDigits))) {
                    var b = Math.floor(a.integerDigits / a.groupSize),
                        e = a.integerDigits % a.groupSize;
                    a.integerDigits = parseInt(a.integerDigits) + (0 === e ? b - 1 : b), a.integerDigits < 1 && (a.integerDigits = "*")
                }
                a.placeholder.length > 1 && (a.placeholder = a.placeholder.charAt(0)), "radixFocus" === a.positionCaretOnClick && "" === a.placeholder && a.integerOptional === !1 && (a.positionCaretOnClick = "lvp"), a.definitions[";"] = a.definitions["~"], a.definitions[";"].definitionSymbol = "~", a.numericInput === !0 && (a.positionCaretOnClick = "radixFocus" === a.positionCaretOnClick ? "lvp" : a.positionCaretOnClick, a.digitsOptional = !1, isNaN(a.digits) && (a.digits = 2), a.decimalProtect = !1);
                var f = "[+]";
                if (f += d(a.prefix, a), f += a.integerOptional === !0 ? "~{1," + a.integerDigits + "}" : "~{" + a.integerDigits + "}", a.digits !== c) {
                    a.radixPointDefinitionSymbol = a.decimalProtect ? ":" : a.radixPoint;
                    var g = a.digits.toString().split(",");
                    isFinite(g[0] && g[1] && isFinite(g[1])) ? f += a.radixPointDefinitionSymbol + ";{" + a.digits + "}" : (isNaN(a.digits) || parseInt(a.digits) > 0) && (f += a.digitsOptional ? "[" + a.radixPointDefinitionSymbol + ";{1," + a.digits + "}]" : a.radixPointDefinitionSymbol + ";{" + a.digits + "}")
                }
                return f += d(a.suffix, a), f += "[-]", a.greedy = !1, f
            },
            placeholder: "",
            greedy: !1,
            digits: "*",
            digitsOptional: !0,
            radixPoint: ".",
            positionCaretOnClick: "radixFocus",
            groupSize: 3,
            groupSeparator: "",
            autoGroup: !1,
            allowMinus: !0,
            negationSymbol: {
                front: "-",
                back: ""
            },
            integerDigits: "+",
            integerOptional: !0,
            prefix: "",
            suffix: "",
            rightAlign: !0,
            decimalProtect: !0,
            min: null,
            max: null,
            step: 1,
            insertMode: !0,
            autoUnmask: !1,
            unmaskAsNumber: !1,
            inputmode: "numeric",
            preValidation: function (b, d, e, f, g) {
                if ("-" === e || e == g.negationSymbol.front) return g.allowMinus === !0 && (g.isNegative = g.isNegative === c || !g.isNegative, "" === b.join("") || {
                    caret: d,
                    dopost: !0
                });
                if (f === !1 && e === g.radixPoint && g.digits !== c && (isNaN(g.digits) || parseInt(g.digits) > 0)) {
                    var h = a.inArray(g.radixPoint, b);
                    if (h !== -1) return g.numericInput === !0 ? d === h : {
                        caret: h + 1
                    }
                }
                return !0
            },
            postValidation: function (d, e, f) {
                function g(a, b) {
                    var c = "";
                    if (c += "(" + b.groupSeparator + "*{" + b.groupSize + "}){*}", "" !== b.radixPoint) {
                        var d = a.join("").split(b.radixPoint);
                        d[1] && (c += b.radixPoint + "*{" + d[1].match(/^\d*\??\d*/)[0].length + "}")
                    }
                    return c
                }
                var h = f.suffix.split(""),
                    i = f.prefix.split("");
                if (e.pos == c && e.caret !== c && e.dopost !== !0) return e;
                var j = e.caret != c ? e.caret : e.pos,
                    k = d.slice();
                f.numericInput && (j = k.length - j - 1, k = k.reverse());
                var l = k[j];
                if (l === f.groupSeparator && (j += 1, l = k[j]), j == k.length - f.suffix.length - 1 && l === f.radixPoint) return e;
                l !== c && l !== f.radixPoint && l !== f.negationSymbol.front && l !== f.negationSymbol.back && (k[j] = "?", f.prefix.length > 0 && j >= (f.isNegative === !1 ? 1 : 0) && j < f.prefix.length - 1 + (f.isNegative === !1 ? 1 : 0) ? i[j - (f.isNegative === !1 ? 1 : 0)] = "?" : f.suffix.length > 0 && j >= k.length - f.suffix.length - (f.isNegative === !1 ? 1 : 0) && (h[j - (k.length - f.suffix.length - (f.isNegative === !1 ? 1 : 0))] = "?")), i = i.join(""), h = h.join("");
                var m = k.join("").replace(i, "");
                if (m = m.replace(h, ""), m = m.replace(new RegExp(b.escapeRegex(f.groupSeparator), "g"), ""), m = m.replace(new RegExp("[-" + b.escapeRegex(f.negationSymbol.front) + "]", "g"), ""), m = m.replace(new RegExp(b.escapeRegex(f.negationSymbol.back) + "$"), ""), isNaN(f.placeholder) && (m = m.replace(new RegExp(b.escapeRegex(f.placeholder), "g"), "")), m.length > 1 && 1 !== m.indexOf(f.radixPoint) && ("0" == l && (m = m.replace(/^\?/g, "")), m = m.replace(/^0/g, "")), m.charAt(0) === f.radixPoint && f.numericInput !== !0 && (m = "0" + m), "" !== m) {
                    if (m = m.split(""), !f.digitsOptional && isFinite(f.digits)) {
                        var n = a.inArray(f.radixPoint, m),
                            o = a.inArray(f.radixPoint, k);
                        n === -1 && (m.push(f.radixPoint), n = m.length - 1);
                        for (var p = 1; p <= f.digits; p++) f.digitsOptional || m[n + p] !== c && m[n + p] !== f.placeholder.charAt(0) ? o !== -1 && k[o + p] !== c && (m[n + p] = m[n + p] || k[o + p]) : m[n + p] = e.placeholder || f.placeholder.charAt(0)
                    }
                    f.autoGroup !== !0 || "" === f.groupSeparator || l === f.radixPoint && e.pos === c && !e.dopost ? m = m.join("") : (m = b(g(m, f), {
                        numericInput: !0,
                        jitMasking: !0,
                        definitions: {
                            "*": {
                                validator: "[0-9?]",
                                cardinality: 1
                            }
                        }
                    }).format(m.join("")), m.charAt(0) === f.groupSeparator && m.substr(1))
                }
                if (f.isNegative && "blur" === e.event && (f.isNegative = "0" !== m), m = i + m, m += h, f.isNegative && (m = f.negationSymbol.front + m, m += f.negationSymbol.back), m = m.split(""), l !== c)
                    if (l !== f.radixPoint && l !== f.negationSymbol.front && l !== f.negationSymbol.back) j = a.inArray("?", m), j > -1 ? m[j] = l : j = e.caret || 0;
                    else if (l === f.radixPoint || l === f.negationSymbol.front || l === f.negationSymbol.back) {
                    var q = a.inArray(l, m);
                    q !== -1 && (j = q)
                }
                f.numericInput && (j = m.length - j - 1, m = m.reverse());
                var r = {
                    caret: l === c || e.pos !== c ? j + (f.numericInput ? -1 : 1) : j,
                    buffer: m,
                    refreshFromBuffer: e.dopost || d.join("") !== m.join("")
                };
                return r.refreshFromBuffer ? r : e
            },
            onBeforeWrite: function (d, e, f, g) {
                function h(a) {
                    a.parseMinMaxOptions === c && (null !== a.min && (a.min = a.min.toString().replace(new RegExp(b.escapeRegex(a.groupSeparator), "g"), ""), "," === a.radixPoint && (a.min = a.min.replace(a.radixPoint, ".")), a.min = isFinite(a.min) ? parseFloat(a.min) : NaN, isNaN(a.min) && (a.min = Number.MIN_VALUE)), null !== a.max && (a.max = a.max.toString().replace(new RegExp(b.escapeRegex(a.groupSeparator), "g"), ""), "," === a.radixPoint && (a.max = a.max.replace(a.radixPoint, ".")), a.max = isFinite(a.max) ? parseFloat(a.max) : NaN, isNaN(a.max) && (a.max = Number.MAX_VALUE)), a.parseMinMaxOptions = "done")
                }
                if (d) switch (d.type) {
                    case "keydown":
                        return g.postValidation(e, {
                            caret: f,
                            dopost: !0
                        }, g);
                    case "blur":
                    case "checkval":
                        var i;
                        if (h(g), null !== g.min || null !== g.max) {
                            if (i = g.onUnMask(e.join(""), c, a.extend({}, g, {
                                    unmaskAsNumber: !0
                                })), null !== g.min && i < g.min) return g.isNegative = g.min < 0, g.postValidation(g.min.toString().replace(".", g.radixPoint).split(""), {
                                caret: f,
                                dopost: !0,
                                placeholder: "0"
                            }, g);
                            if (null !== g.max && i > g.max) return g.isNegative = g.max < 0, g.postValidation(g.max.toString().replace(".", g.radixPoint).split(""), {
                                caret: f,
                                dopost: !0,
                                placeholder: "0"
                            }, g)
                        }
                        return g.postValidation(e, {
                            caret: f,
                            dopost: !0,
                            placeholder: "0",
                            event: "blur"
                        }, g);
                    case "_checkval":
                        return {
                            caret: f
                        }
                }
            },
            regex: {
                integerPart: function (a, c) {
                    return c ? new RegExp("[" + b.escapeRegex(a.negationSymbol.front) + "+]?") : new RegExp("[" + b.escapeRegex(a.negationSymbol.front) + "+]?\\d+")
                },
                integerNPart: function (a) {
                    return new RegExp("[\\d" + b.escapeRegex(a.groupSeparator) + b.escapeRegex(a.placeholder.charAt(0)) + "]+")
                }
            },
            definitions: {
                "~": {
                    validator: function (a, d, e, f, g, h) {
                        var i = f ? new RegExp("[0-9" + b.escapeRegex(g.groupSeparator) + "]").test(a) : new RegExp("[0-9]").test(a);
                        if (i === !0) {
                            if (g.numericInput !== !0 && d.validPositions[e] !== c && "~" === d.validPositions[e].match.def && !h) {
                                var j = d.buffer.join("");
                                j = j.replace(new RegExp("[-" + b.escapeRegex(g.negationSymbol.front) + "]", "g"), ""), j = j.replace(new RegExp(b.escapeRegex(g.negationSymbol.back) + "$"), ""), j = j.replace(/0/g, g.placeholder.charAt(0));
                                var k = d._buffer.join("");
                                for (j === g.radixPoint && (j = k); null === j.match(b.escapeRegex(k) + "$");) k = k.slice(1);
                                j = j.replace(k, ""), j = j.split(""), i = j[e] === c ? {
                                    pos: e,
                                    remove: e
                                } : {
                                    pos: e
                                }
                            }
                        } else f || a !== g.radixPoint || d.validPositions[e - 1] !== c || (d.buffer[e] = "0", i = {
                            pos: e + 1
                        });
                        return i
                    },
                    cardinality: 1
                },
                "+": {
                    validator: function (a, b, c, d, e) {
                        return e.allowMinus && ("-" === a || a === e.negationSymbol.front)
                    },
                    cardinality: 1,
                    placeholder: ""
                },
                "-": {
                    validator: function (a, b, c, d, e) {
                        return e.allowMinus && a === e.negationSymbol.back
                    },
                    cardinality: 1,
                    placeholder: ""
                },
                ":": {
                    validator: function (a, c, d, e, f) {
                        var g = "[" + b.escapeRegex(f.radixPoint) + "]";
                        return isValid = new RegExp(g).test(a), isValid && c.validPositions[d] && c.validPositions[d].match.placeholder === f.radixPoint && (isValid = {
                            caret: d + 1
                        }), isValid
                    },
                    cardinality: 1,
                    placeholder: function (a) {
                        return a.radixPoint
                    }
                }
            },
            onUnMask: function (a, c, d) {
                if ("" === c && d.nullable === !0) return c;
                var e = a.replace(d.prefix, "");
                return e = e.replace(d.suffix, ""), e = e.replace(new RegExp(b.escapeRegex(d.groupSeparator), "g"), ""), "" !== d.placeholder.charAt(0) && (e = e.replace(new RegExp(d.placeholder.charAt(0), "g"), "0")), d.unmaskAsNumber ? ("" !== d.radixPoint && e.indexOf(d.radixPoint) !== -1 && (e = e.replace(b.escapeRegex.call(this, d.radixPoint), ".")), Number(e)) : e
            },
            isComplete: function (a, c) {
                var d = a.join(""),
                    e = a.slice();
                if (e.join("") !== d) return !1;
                var f = d.replace(c.prefix, "");
                return f = f.replace(c.suffix, ""), f = f.replace(new RegExp(b.escapeRegex(c.groupSeparator), "g"), ""), "," === c.radixPoint && (f = f.replace(b.escapeRegex(c.radixPoint), ".")), isFinite(f)
            },
            onBeforeMask: function (a, d) {
                if (d.isNegative = c, a = a.toString().charAt(a.length - 1) === d.radixPoint ? a.toString().substr(0, a.length - 1) : a.toString(), "" !== d.radixPoint && isFinite(a)) {
                    var e = a.split("."),
                        f = "" !== d.groupSeparator ? parseInt(d.groupSize) : 0;
                    2 === e.length && (e[0].length > f || e[1].length > f || e[0].length < f && e[1].length < f) && (a = a.replace(".", d.radixPoint))
                }
                var g = a.match(/,/g),
                    h = a.match(/\./g);
                if (h && g ? h.length > g.length ? (a = a.replace(/\./g, ""), a = a.replace(",", d.radixPoint)) : g.length > h.length ? (a = a.replace(/,/g, ""), a = a.replace(".", d.radixPoint)) : a = a.indexOf(".") < a.indexOf(",") ? a.replace(/\./g, "") : a = a.replace(/,/g, "") : a = a.replace(new RegExp(b.escapeRegex(d.groupSeparator), "g"), ""), 0 === d.digits && (a.indexOf(".") !== -1 ? a = a.substring(0, a.indexOf(".")) : a.indexOf(",") !== -1 && (a = a.substring(0, a.indexOf(",")))), "" !== d.radixPoint && isFinite(d.digits) && a.indexOf(d.radixPoint) !== -1) {
                    var i = a.split(d.radixPoint),
                        j = i[1].match(new RegExp("\\d*"))[0];
                    if (parseInt(d.digits) < j.toString().length) {
                        var k = Math.pow(10, parseInt(d.digits));
                        a = a.replace(b.escapeRegex(d.radixPoint), "."), a = Math.round(parseFloat(a) * k) / k, a = a.toString().replace(".", d.radixPoint)
                    }
                }
                return a
            },
            canClearPosition: function (a, b, c, d, e) {
                var f = a.validPositions[b],
                    g = f.input !== e.radixPoint || null !== a.validPositions[b].match.fn && e.decimalProtect === !1 || f.input === e.radixPoint && a.validPositions[b + 1] && null === a.validPositions[b + 1].match.fn || isFinite(f.input) || b === c || f.input === e.groupSeparator || f.input === e.negationSymbol.front || f.input === e.negationSymbol.back;
                return !g || "+" != f.match.nativeDef && "-" != f.match.nativeDef || (e.isNegative = !1), g
            },
            onKeyDown: function (c, d, e, f) {
                var g = a(this);
                if (c.ctrlKey) switch (c.keyCode) {
                    case b.keyCode.UP:
                        g.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(f.step)), g.trigger("setvalue");
                        break;
                    case b.keyCode.DOWN:
                        g.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(f.step)), g.trigger("setvalue")
                }
            }
        },
        currency: {
            prefix: "$ ",
            groupSeparator: ",",
            alias: "numeric",
            placeholder: "0",
            autoGroup: !0,
            digits: 2,
            digitsOptional: !1,
            clearMaskOnLostFocus: !1
        },
        decimal: {
            alias: "numeric"
        },
        integer: {
            alias: "numeric",
            digits: 0,
            radixPoint: ""
        },
        percentage: {
            alias: "numeric",
            digits: 2,
            digitsOptional: !0,
            radixPoint: ".",
            placeholder: "0",
            autoGroup: !1,
            min: 0,
            max: 100,
            suffix: " %",
            allowMinus: !1
        }
    }), b
}),
function (a) {
    a(window.dependencyLib || jQuery, window.Inputmask)
}(function (a, b) {
    function c(a, b) {
        var c = (a.mask || a).replace(/#/g, "9").replace(/\)/, "9").replace(/[+()#-]/g, ""),
            d = (b.mask || b).replace(/#/g, "9").replace(/\)/, "9").replace(/[+()#-]/g, ""),
            e = (a.mask || a).split("#")[0],
            f = (b.mask || b).split("#")[0];
        return 0 === f.indexOf(e) ? -1 : 0 === e.indexOf(f) ? 1 : c.localeCompare(d)
    }
    var d = b.prototype.analyseMask;
    return b.prototype.analyseMask = function (b, c) {
        function e(a, c, d) {
            c = c || "", d = d || g, "" !== c && (d[c] = {});
            for (var f = "", h = d[c] || d, i = a.length - 1; i >= 0; i--) b = a[i].mask || a[i], f = b.substr(0, 1), h[f] = h[f] || [], h[f].unshift(b.substr(1)), a.splice(i, 1);
            for (var j in h) h[j].length > 500 && e(h[j].slice(), j, h)
        }

        function f(b) {
            var d = "",
                e = [];
            for (var g in b) a.isArray(b[g]) ? 1 === b[g].length ? e.push(g + b[g]) : e.push(g + c.groupmarker.start + b[g].join(c.groupmarker.end + c.alternatormarker + c.groupmarker.start) + c.groupmarker.end) : e.push(g + f(b[g]));
            return d += 1 === e.length ? e[0] : c.groupmarker.start + e.join(c.groupmarker.end + c.alternatormarker + c.groupmarker.start) + c.groupmarker.end
        }
        var g = {};
        c.phoneCodes && (c.phoneCodes && c.phoneCodes.length > 1e3 && (b = b.substr(1, b.length - 2), e(b.split(c.groupmarker.end + c.alternatormarker + c.groupmarker.start)), b = f(g)), b = b.replace(/9/g, "\\9"));
        var h = d.call(this, b, c);
        return h
    }, b.extendAliases({
        abstractphone: {
            groupmarker: {
                start: "<",
                end: ">"
            },
            countrycode: "",
            phoneCodes: [],
            mask: function (a) {
                return a.definitions = {
                    "#": b.prototype.definitions[9]
                }, a.phoneCodes.sort(c)
            },
            keepStatic: !0,
            onBeforeMask: function (a, b) {
                var c = a.replace(/^0{1,2}/, "").replace(/[\s]/g, "");
                return (c.indexOf(b.countrycode) > 1 || c.indexOf(b.countrycode) === -1) && (c = "+" + b.countrycode + c), c
            },
            onUnMask: function (a, b, c) {
                return b
            },
            inputmode: "tel"
        }
    }), b
}),
function (a) {
    a(window.dependencyLib || jQuery, window.Inputmask)
}(function (a, b) {
    return b.extendAliases({
        Regex: {
            mask: "r",
            greedy: !1,
            repeat: "*",
            regex: null,
            regexTokens: null,
            tokenizer: /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
            quantifierFilter: /[0-9]+[^,]/,
            isComplete: function (a, b) {
                return new RegExp(b.regex, b.casing ? "i" : "").test(a.join(""))
            },
            definitions: {
                r: {
                    validator: function (b, c, d, e, f) {
                        function g(a, b) {
                            this.matches = [], this.isGroup = a || !1, this.isQuantifier = b || !1, this.quantifier = {
                                min: 1,
                                max: 1
                            }, this.repeaterPart = void 0
                        }

                        function h() {
                            var a, b, c = new g,
                                d = [];
                            for (f.regexTokens = []; a = f.tokenizer.exec(f.regex);) switch (b = a[0], b.charAt(0)) {
                                case "(":
                                    d.push(new g((!0)));
                                    break;
                                case ")":
                                    k = d.pop(), d.length > 0 ? d[d.length - 1].matches.push(k) : c.matches.push(k);
                                    break;
                                case "{":
                                case "+":
                                case "*":
                                    var e = new g((!1), (!0));
                                    b = b.replace(/[{}]/g, "");
                                    var h = b.split(","),
                                        i = isNaN(h[0]) ? h[0] : parseInt(h[0]),
                                        j = 1 === h.length ? i : isNaN(h[1]) ? h[1] : parseInt(h[1]);
                                    if (e.quantifier = {
                                            min: i,
                                            max: j
                                        }, d.length > 0) {
                                        var l = d[d.length - 1].matches;
                                        a = l.pop(), a.isGroup || (k = new g((!0)), k.matches.push(a), a = k), l.push(a), l.push(e)
                                    } else a = c.matches.pop(), a.isGroup || (k = new g((!0)), k.matches.push(a), a = k), c.matches.push(a), c.matches.push(e);
                                    break;
                                default:
                                    d.length > 0 ? d[d.length - 1].matches.push(b) : c.matches.push(b)
                            }
                            c.matches.length > 0 && f.regexTokens.push(c)
                        }

                        function i(b, c) {
                            var d = !1;
                            c && (m += "(", o++);
                            for (var e = 0; e < b.matches.length; e++) {
                                var g = b.matches[e];
                                if (g.isGroup === !0) d = i(g, !0);
                                else if (g.isQuantifier === !0) {
                                    var h = a.inArray(g, b.matches),
                                        k = b.matches[h - 1],
                                        l = m;
                                    if (isNaN(g.quantifier.max)) {
                                        for (; g.repeaterPart && g.repeaterPart !== m && g.repeaterPart.length > m.length && !(d = i(k, !0)););
                                        d = d || i(k, !0), d && (g.repeaterPart = m), m = l + g.quantifier.max
                                    } else {
                                        for (var n = 0, p = g.quantifier.max - 1; n < p && !(d = i(k, !0)); n++);
                                        m = l + "{" + g.quantifier.min + "," + g.quantifier.max + "}"
                                    }
                                } else if (void 0 !== g.matches)
                                    for (var q = 0; q < g.length && !(d = i(g[q], c)); q++);
                                else {
                                    var r;
                                    if ("[" == g.charAt(0)) {
                                        r = m, r += g;
                                        for (var s = 0; s < o; s++) r += ")";
                                        var t = new RegExp("^(" + r + ")$", f.casing ? "i" : "");
                                        d = t.test(j)
                                    } else
                                        for (var u = 0, v = g.length; u < v; u++)
                                            if ("\\" !== g.charAt(u)) {
                                                r = m, r += g.substr(0, u + 1), r = r.replace(/\|$/, "");
                                                for (var s = 0; s < o; s++) r += ")";
                                                var t = new RegExp("^(" + r + ")$", f.casing ? "i" : "");
                                                if (d = t.test(j)) break
                                            } m += g
                                }
                                if (d) break
                            }
                            return c && (m += ")", o--), d
                        }
                        var j, k, l = c.buffer.slice(),
                            m = "",
                            n = !1,
                            o = 0;
                        null === f.regexTokens && h(), l.splice(d, 0, b), j = l.join("");
                        for (var p = 0; p < f.regexTokens.length; p++) {
                            var q = f.regexTokens[p];
                            if (n = i(q, q.isGroup)) break
                        }
                        return n
                    },
                    cardinality: 1
                }
            }
        }
    }), b
});;
! function (t, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.Scrollbar = n() : t.Scrollbar = n()
}(this, (function () {
    return function (t) {
        var n = {};

        function e(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
        }
        return e.m = t, e.c = n, e.d = function (t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {
                enumerable: !0,
                get: r
            })
        }, e.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, e.t = function (t, n) {
            if (1 & n && (t = e(t)), 8 & n) return t;
            if (4 & n && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (e.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & n && "string" != typeof t)
                for (var o in t) e.d(r, o, function (n) {
                    return t[n]
                }.bind(null, o));
            return r
        }, e.n = function (t) {
            var n = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function (t, n) {
            return Object.prototype.hasOwnProperty.call(t, n)
        }, e.p = "", e(e.s = 58)
    }([function (t, n, e) {
        var r = e(25)("wks"),
            o = e(16),
            i = e(2).Symbol,
            u = "function" == typeof i;
        (t.exports = function (t) {
            return r[t] || (r[t] = u && i[t] || (u ? i : o)("Symbol." + t))
        }).store = r
    }, function (t, n) {
        t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, function (t, n) {
        var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = e)
    }, function (t, n) {
        var e = t.exports = {
            version: "2.6.9"
        };
        "number" == typeof __e && (__e = e)
    }, function (t, n, e) {
        t.exports = !e(13)((function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        }))
    }, function (t, n, e) {
        var r = e(2),
            o = e(3),
            i = e(11),
            u = e(6),
            c = e(10),
            s = function (t, n, e) {
                var a, f, l, p, h = t & s.F,
                    d = t & s.G,
                    v = t & s.S,
                    y = t & s.P,
                    m = t & s.B,
                    g = d ? r : v ? r[n] || (r[n] = {}) : (r[n] || {}).prototype,
                    b = d ? o : o[n] || (o[n] = {}),
                    x = b.prototype || (b.prototype = {});
                for (a in d && (e = n), e) l = ((f = !h && g && void 0 !== g[a]) ? g : e)[a], p = m && f ? c(l, r) : y && "function" == typeof l ? c(Function.call, l) : l, g && u(g, a, l, t & s.U), b[a] != l && i(b, a, p), y && x[a] != l && (x[a] = l)
            };
        r.core = o, s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, t.exports = s
    }, function (t, n, e) {
        var r = e(2),
            o = e(11),
            i = e(9),
            u = e(16)("src"),
            c = e(60),
            s = ("" + c).split("toString");
        e(3).inspectSource = function (t) {
            return c.call(t)
        }, (t.exports = function (t, n, e, c) {
            var a = "function" == typeof e;
            a && (i(e, "name") || o(e, "name", n)), t[n] !== e && (a && (i(e, u) || o(e, u, t[n] ? "" + t[n] : s.join(String(n)))), t === r ? t[n] = e : c ? t[n] ? t[n] = e : o(t, n, e) : (delete t[n], o(t, n, e)))
        })(Function.prototype, "toString", (function () {
            return "function" == typeof this && this[u] || c.call(this)
        }))
    }, function (t, n, e) {
        var r = e(8),
            o = e(41),
            i = e(43),
            u = Object.defineProperty;
        n.f = e(4) ? Object.defineProperty : function (t, n, e) {
            if (r(t), n = i(n, !0), r(e), o) try {
                return u(t, n, e)
            } catch (t) {}
            if ("get" in e || "set" in e) throw TypeError("Accessors not supported!");
            return "value" in e && (t[n] = e.value), t
        }
    }, function (t, n, e) {
        var r = e(1);
        t.exports = function (t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }, function (t, n) {
        var e = {}.hasOwnProperty;
        t.exports = function (t, n) {
            return e.call(t, n)
        }
    }, function (t, n, e) {
        var r = e(44);
        t.exports = function (t, n, e) {
            if (r(t), void 0 === n) return t;
            switch (e) {
                case 1:
                    return function (e) {
                        return t.call(n, e)
                    };
                case 2:
                    return function (e, r) {
                        return t.call(n, e, r)
                    };
                case 3:
                    return function (e, r, o) {
                        return t.call(n, e, r, o)
                    }
            }
            return function () {
                return t.apply(n, arguments)
            }
        }
    }, function (t, n, e) {
        var r = e(7),
            o = e(17);
        t.exports = e(4) ? function (t, n, e) {
            return r.f(t, n, o(1, e))
        } : function (t, n, e) {
            return t[n] = e, t
        }
    }, function (t, n, e) {
        var r = e(1);
        t.exports = function (t, n) {
            if (!r(t) || t._t !== n) throw TypeError("Incompatible receiver, " + n + " required!");
            return t
        }
    }, function (t, n) {
        t.exports = function (t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function (t, n) {
        t.exports = {}
    }, function (t, n, e) {
        var r = e(10),
            o = e(49),
            i = e(50),
            u = e(8),
            c = e(19),
            s = e(51),
            a = {},
            f = {};
        (n = t.exports = function (t, n, e, l, p) {
            var h, d, v, y, m = p ? function () {
                    return t
                } : s(t),
                g = r(e, l, n ? 2 : 1),
                b = 0;
            if ("function" != typeof m) throw TypeError(t + " is not iterable!");
            if (i(m)) {
                for (h = c(t.length); h > b; b++)
                    if ((y = n ? g(u(d = t[b])[0], d[1]) : g(t[b])) === a || y === f) return y
            } else
                for (v = m.call(t); !(d = v.next()).done;)
                    if ((y = o(v, g, d.value, n)) === a || y === f) return y
        }).BREAK = a, n.RETURN = f
    }, function (t, n) {
        var e = 0,
            r = Math.random();
        t.exports = function (t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + r).toString(36))
        }
    }, function (t, n) {
        t.exports = function (t, n) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: n
            }
        }
    }, function (t, n, e) {
        var r = e(31),
            o = e(28);
        t.exports = function (t) {
            return r(o(t))
        }
    }, function (t, n, e) {
        var r = e(27),
            o = Math.min;
        t.exports = function (t) {
            return t > 0 ? o(r(t), 9007199254740991) : 0
        }
    }, function (t, n, e) {
        var r = e(28);
        t.exports = function (t) {
            return Object(r(t))
        }
    }, function (t, n, e) {
        var r = e(16)("meta"),
            o = e(1),
            i = e(9),
            u = e(7).f,
            c = 0,
            s = Object.isExtensible || function () {
                return !0
            },
            a = !e(13)((function () {
                return s(Object.preventExtensions({}))
            })),
            f = function (t) {
                u(t, r, {
                    value: {
                        i: "O" + ++c,
                        w: {}
                    }
                })
            },
            l = t.exports = {
                KEY: r,
                NEED: !1,
                fastKey: function (t, n) {
                    if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                    if (!i(t, r)) {
                        if (!s(t)) return "F";
                        if (!n) return "E";
                        f(t)
                    }
                    return t[r].i
                },
                getWeak: function (t, n) {
                    if (!i(t, r)) {
                        if (!s(t)) return !0;
                        if (!n) return !1;
                        f(t)
                    }
                    return t[r].w
                },
                onFreeze: function (t) {
                    return a && l.NEED && s(t) && !i(t, r) && f(t), t
                }
            }
    }, function (t, n, e) {
        "use strict";
        var r = e(23),
            o = {};
        o[e(0)("toStringTag")] = "z", o + "" != "[object z]" && e(6)(Object.prototype, "toString", (function () {
            return "[object " + r(this) + "]"
        }), !0)
    }, function (t, n, e) {
        var r = e(24),
            o = e(0)("toStringTag"),
            i = "Arguments" == r(function () {
                return arguments
            }());
        t.exports = function (t) {
            var n, e, u;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (e = function (t, n) {
                try {
                    return t[n]
                } catch (t) {}
            }(n = Object(t), o)) ? e : i ? r(n) : "Object" == (u = r(n)) && "function" == typeof n.callee ? "Arguments" : u
        }
    }, function (t, n) {
        var e = {}.toString;
        t.exports = function (t) {
            return e.call(t).slice(8, -1)
        }
    }, function (t, n, e) {
        var r = e(3),
            o = e(2),
            i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
        (t.exports = function (t, n) {
            return i[t] || (i[t] = void 0 !== n ? n : {})
        })("versions", []).push({
            version: r.version,
            mode: e(40) ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(61)(!0);
        e(29)(String, "String", (function (t) {
            this._t = String(t), this._i = 0
        }), (function () {
            var t, n = this._t,
                e = this._i;
            return e >= n.length ? {
                value: void 0,
                done: !0
            } : (t = r(n, e), this._i += t.length, {
                value: t,
                done: !1
            })
        }))
    }, function (t, n) {
        var e = Math.ceil,
            r = Math.floor;
        t.exports = function (t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : e)(t)
        }
    }, function (t, n) {
        t.exports = function (t) {
            if (null == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(40),
            o = e(5),
            i = e(6),
            u = e(11),
            c = e(14),
            s = e(62),
            a = e(33),
            f = e(68),
            l = e(0)("iterator"),
            p = !([].keys && "next" in [].keys()),
            h = function () {
                return this
            };
        t.exports = function (t, n, e, d, v, y, m) {
            s(e, n, d);
            var g, b, x, _ = function (t) {
                    if (!p && t in O) return O[t];
                    switch (t) {
                        case "keys":
                        case "values":
                            return function () {
                                return new e(this, t)
                            }
                    }
                    return function () {
                        return new e(this, t)
                    }
                },
                w = n + " Iterator",
                E = "values" == v,
                S = !1,
                O = t.prototype,
                T = O[l] || O["@@iterator"] || v && O[v],
                A = T || _(v),
                M = v ? E ? _("entries") : A : void 0,
                P = "Array" == n && O.entries || T;
            if (P && (x = f(P.call(new t))) !== Object.prototype && x.next && (a(x, w, !0), r || "function" == typeof x[l] || u(x, l, h)), E && T && "values" !== T.name && (S = !0, A = function () {
                    return T.call(this)
                }), r && !m || !p && !S && O[l] || u(O, l, A), c[n] = A, c[w] = h, v)
                if (g = {
                        values: E ? A : _("values"),
                        keys: y ? A : _("keys"),
                        entries: M
                    }, m)
                    for (b in g) b in O || i(O, b, g[b]);
                else o(o.P + o.F * (p || S), n, g);
            return g
        }
    }, function (t, n, e) {
        var r = e(64),
            o = e(46);
        t.exports = Object.keys || function (t) {
            return r(t, o)
        }
    }, function (t, n, e) {
        var r = e(24);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
            return "String" == r(t) ? t.split("") : Object(t)
        }
    }, function (t, n, e) {
        var r = e(25)("keys"),
            o = e(16);
        t.exports = function (t) {
            return r[t] || (r[t] = o(t))
        }
    }, function (t, n, e) {
        var r = e(7).f,
            o = e(9),
            i = e(0)("toStringTag");
        t.exports = function (t, n, e) {
            t && !o(t = e ? t : t.prototype, i) && r(t, i, {
                configurable: !0,
                value: n
            })
        }
    }, function (t, n, e) {
        for (var r = e(69), o = e(30), i = e(6), u = e(2), c = e(11), s = e(14), a = e(0), f = a("iterator"), l = a("toStringTag"), p = s.Array, h = {
                CSSRuleList: !0,
                CSSStyleDeclaration: !1,
                CSSValueList: !1,
                ClientRectList: !1,
                DOMRectList: !1,
                DOMStringList: !1,
                DOMTokenList: !0,
                DataTransferItemList: !1,
                FileList: !1,
                HTMLAllCollection: !1,
                HTMLCollection: !1,
                HTMLFormElement: !1,
                HTMLSelectElement: !1,
                MediaList: !0,
                MimeTypeArray: !1,
                NamedNodeMap: !1,
                NodeList: !0,
                PaintRequestList: !1,
                Plugin: !1,
                PluginArray: !1,
                SVGLengthList: !1,
                SVGNumberList: !1,
                SVGPathSegList: !1,
                SVGPointList: !1,
                SVGStringList: !1,
                SVGTransformList: !1,
                SourceBufferList: !1,
                StyleSheetList: !0,
                TextTrackCueList: !1,
                TextTrackList: !1,
                TouchList: !1
            }, d = o(h), v = 0; v < d.length; v++) {
            var y, m = d[v],
                g = h[m],
                b = u[m],
                x = b && b.prototype;
            if (x && (x[f] || c(x, f, p), x[l] || c(x, l, m), s[m] = p, g))
                for (y in r) x[y] || i(x, y, r[y], !0)
        }
    }, function (t, n, e) {
        var r = e(6);
        t.exports = function (t, n, e) {
            for (var o in n) r(t, o, n[o], e);
            return t
        }
    }, function (t, n) {
        t.exports = function (t, n, e, r) {
            if (!(t instanceof n) || void 0 !== r && r in t) throw TypeError(e + ": incorrect invocation!");
            return t
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(2),
            o = e(5),
            i = e(6),
            u = e(35),
            c = e(21),
            s = e(15),
            a = e(36),
            f = e(1),
            l = e(13),
            p = e(52),
            h = e(33),
            d = e(73);
        t.exports = function (t, n, e, v, y, m) {
            var g = r[t],
                b = g,
                x = y ? "set" : "add",
                _ = b && b.prototype,
                w = {},
                E = function (t) {
                    var n = _[t];
                    i(_, t, "delete" == t || "has" == t ? function (t) {
                        return !(m && !f(t)) && n.call(this, 0 === t ? 0 : t)
                    } : "get" == t ? function (t) {
                        return m && !f(t) ? void 0 : n.call(this, 0 === t ? 0 : t)
                    } : "add" == t ? function (t) {
                        return n.call(this, 0 === t ? 0 : t), this
                    } : function (t, e) {
                        return n.call(this, 0 === t ? 0 : t, e), this
                    })
                };
            if ("function" == typeof b && (m || _.forEach && !l((function () {
                    (new b).entries().next()
                })))) {
                var S = new b,
                    O = S[x](m ? {} : -0, 1) != S,
                    T = l((function () {
                        S.has(1)
                    })),
                    A = p((function (t) {
                        new b(t)
                    })),
                    M = !m && l((function () {
                        for (var t = new b, n = 5; n--;) t[x](n, n);
                        return !t.has(-0)
                    }));
                A || ((b = n((function (n, e) {
                    a(n, b, t);
                    var r = d(new g, n, b);
                    return null != e && s(e, y, r[x], r), r
                }))).prototype = _, _.constructor = b), (T || M) && (E("delete"), E("has"), y && E("get")), (M || O) && E(x), m && _.clear && delete _.clear
            } else b = v.getConstructor(n, t, y, x), u(b.prototype, e), c.NEED = !0;
            return h(b, t), w[t] = b, o(o.G + o.W + o.F * (b != g), w), m || v.setStrong(b, t, y), b
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(5);
        t.exports = function (t) {
            r(r.S, t, {
                of: function () {
                    for (var t = arguments.length, n = new Array(t); t--;) n[t] = arguments[t];
                    return new this(n)
                }
            })
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(5),
            o = e(44),
            i = e(10),
            u = e(15);
        t.exports = function (t) {
            r(r.S, t, {
                from: function (t) {
                    var n, e, r, c, s = arguments[1];
                    return o(this), (n = void 0 !== s) && o(s), null == t ? new this : (e = [], n ? (r = 0, c = i(s, arguments[2], 2), u(t, !1, (function (t) {
                        e.push(c(t, r++))
                    }))) : u(t, !1, e.push, e), new this(e))
                }
            })
        }
    }, function (t, n) {
        t.exports = !1
    }, function (t, n, e) {
        t.exports = !e(4) && !e(13)((function () {
            return 7 != Object.defineProperty(e(42)("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        }))
    }, function (t, n, e) {
        var r = e(1),
            o = e(2).document,
            i = r(o) && r(o.createElement);
        t.exports = function (t) {
            return i ? o.createElement(t) : {}
        }
    }, function (t, n, e) {
        var r = e(1);
        t.exports = function (t, n) {
            if (!r(t)) return t;
            var e, o;
            if (n && "function" == typeof (e = t.toString) && !r(o = e.call(t))) return o;
            if ("function" == typeof (e = t.valueOf) && !r(o = e.call(t))) return o;
            if (!n && "function" == typeof (e = t.toString) && !r(o = e.call(t))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function (t, n) {
        t.exports = function (t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, function (t, n, e) {
        var r = e(8),
            o = e(63),
            i = e(46),
            u = e(32)("IE_PROTO"),
            c = function () {},
            s = function () {
                var t, n = e(42)("iframe"),
                    r = i.length;
                for (n.style.display = "none", e(67).appendChild(n), n.src = "javascript:", (t = n.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), s = t.F; r--;) delete s.prototype[i[r]];
                return s()
            };
        t.exports = Object.create || function (t, n) {
            var e;
            return null !== t ? (c.prototype = r(t), e = new c, c.prototype = null, e[u] = t) : e = s(), void 0 === n ? e : o(e, n)
        }
    }, function (t, n) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function (t, n) {
        t.exports = function (t, n) {
            return {
                value: n,
                done: !!t
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(7).f,
            o = e(45),
            i = e(35),
            u = e(10),
            c = e(36),
            s = e(15),
            a = e(29),
            f = e(47),
            l = e(72),
            p = e(4),
            h = e(21).fastKey,
            d = e(12),
            v = p ? "_s" : "size",
            y = function (t, n) {
                var e, r = h(n);
                if ("F" !== r) return t._i[r];
                for (e = t._f; e; e = e.n)
                    if (e.k == n) return e
            };
        t.exports = {
            getConstructor: function (t, n, e, a) {
                var f = t((function (t, r) {
                    c(t, f, n, "_i"), t._t = n, t._i = o(null), t._f = void 0, t._l = void 0, t[v] = 0, null != r && s(r, e, t[a], t)
                }));
                return i(f.prototype, {
                    clear: function () {
                        for (var t = d(this, n), e = t._i, r = t._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), delete e[r.i];
                        t._f = t._l = void 0, t[v] = 0
                    },
                    delete: function (t) {
                        var e = d(this, n),
                            r = y(e, t);
                        if (r) {
                            var o = r.n,
                                i = r.p;
                            delete e._i[r.i], r.r = !0, i && (i.n = o), o && (o.p = i), e._f == r && (e._f = o), e._l == r && (e._l = i), e[v]--
                        }
                        return !!r
                    },
                    forEach: function (t) {
                        d(this, n);
                        for (var e, r = u(t, arguments.length > 1 ? arguments[1] : void 0, 3); e = e ? e.n : this._f;)
                            for (r(e.v, e.k, this); e && e.r;) e = e.p
                    },
                    has: function (t) {
                        return !!y(d(this, n), t)
                    }
                }), p && r(f.prototype, "size", {
                    get: function () {
                        return d(this, n)[v]
                    }
                }), f
            },
            def: function (t, n, e) {
                var r, o, i = y(t, n);
                return i ? i.v = e : (t._l = i = {
                    i: o = h(n, !0),
                    k: n,
                    v: e,
                    p: r = t._l,
                    n: void 0,
                    r: !1
                }, t._f || (t._f = i), r && (r.n = i), t[v]++, "F" !== o && (t._i[o] = i)), t
            },
            getEntry: y,
            setStrong: function (t, n, e) {
                a(t, n, (function (t, e) {
                    this._t = d(t, n), this._k = e, this._l = void 0
                }), (function () {
                    for (var t = this._k, n = this._l; n && n.r;) n = n.p;
                    return this._t && (this._l = n = n ? n.n : this._t._f) ? f(0, "keys" == t ? n.k : "values" == t ? n.v : [n.k, n.v]) : (this._t = void 0, f(1))
                }), e ? "entries" : "values", !e, !0), l(n)
            }
        }
    }, function (t, n, e) {
        var r = e(8);
        t.exports = function (t, n, e, o) {
            try {
                return o ? n(r(e)[0], e[1]) : n(e)
            } catch (n) {
                var i = t.return;
                throw void 0 !== i && r(i.call(t)), n
            }
        }
    }, function (t, n, e) {
        var r = e(14),
            o = e(0)("iterator"),
            i = Array.prototype;
        t.exports = function (t) {
            return void 0 !== t && (r.Array === t || i[o] === t)
        }
    }, function (t, n, e) {
        var r = e(23),
            o = e(0)("iterator"),
            i = e(14);
        t.exports = e(3).getIteratorMethod = function (t) {
            if (null != t) return t[o] || t["@@iterator"] || i[r(t)]
        }
    }, function (t, n, e) {
        var r = e(0)("iterator"),
            o = !1;
        try {
            var i = [7][r]();
            i.return = function () {
                o = !0
            }, Array.from(i, (function () {
                throw 2
            }))
        } catch (t) {}
        t.exports = function (t, n) {
            if (!n && !o) return !1;
            var e = !1;
            try {
                var i = [7],
                    u = i[r]();
                u.next = function () {
                    return {
                        done: e = !0
                    }
                }, i[r] = function () {
                    return u
                }, t(i)
            } catch (t) {}
            return e
        }
    }, function (t, n) {
        n.f = {}.propertyIsEnumerable
    }, function (t, n, e) {
        var r = e(23),
            o = e(77);
        t.exports = function (t) {
            return function () {
                if (r(this) != t) throw TypeError(t + "#toJSON isn't generic");
                return o(this)
            }
        }
    }, function (t, n, e) {
        var r = e(10),
            o = e(31),
            i = e(20),
            u = e(19),
            c = e(87);
        t.exports = function (t, n) {
            var e = 1 == t,
                s = 2 == t,
                a = 3 == t,
                f = 4 == t,
                l = 6 == t,
                p = 5 == t || l,
                h = n || c;
            return function (n, c, d) {
                for (var v, y, m = i(n), g = o(m), b = r(c, d, 3), x = u(g.length), _ = 0, w = e ? h(n, x) : s ? h(n, 0) : void 0; x > _; _++)
                    if ((p || _ in g) && (y = b(v = g[_], _, m), t))
                        if (e) w[_] = y;
                        else if (y) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return v;
                    case 6:
                        return _;
                    case 2:
                        w.push(v)
                } else if (f) return !1;
                return l ? -1 : a || f ? f : w
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(4),
            o = e(30),
            i = e(90),
            u = e(53),
            c = e(20),
            s = e(31),
            a = Object.assign;
        t.exports = !a || e(13)((function () {
            var t = {},
                n = {},
                e = Symbol(),
                r = "abcdefghijklmnopqrst";
            return t[e] = 7, r.split("").forEach((function (t) {
                n[t] = t
            })), 7 != a({}, t)[e] || Object.keys(a({}, n)).join("") != r
        })) ? function (t, n) {
            for (var e = c(t), a = arguments.length, f = 1, l = i.f, p = u.f; a > f;)
                for (var h, d = s(arguments[f++]), v = l ? o(d).concat(l(d)) : o(d), y = v.length, m = 0; y > m;) h = v[m++], r && !p.call(d, h) || (e[h] = d[h]);
            return e
        } : a
    }, function (t, n, e) {
        "use strict";
        (function (t) {
            var e = "object" == typeof t && t && t.Object === Object && t;
            n.a = e
        }).call(this, e(99))
    }, function (t, n, e) {
        t.exports = e(100)
    }, function (t, n, e) {
        e(22), e(26), e(34), e(71), e(76), e(78), e(79), t.exports = e(3).Map
    }, function (t, n, e) {
        t.exports = e(25)("native-function-to-string", Function.toString)
    }, function (t, n, e) {
        var r = e(27),
            o = e(28);
        t.exports = function (t) {
            return function (n, e) {
                var i, u, c = String(o(n)),
                    s = r(e),
                    a = c.length;
                return s < 0 || s >= a ? t ? "" : void 0 : (i = c.charCodeAt(s)) < 55296 || i > 56319 || s + 1 === a || (u = c.charCodeAt(s + 1)) < 56320 || u > 57343 ? t ? c.charAt(s) : i : t ? c.slice(s, s + 2) : u - 56320 + (i - 55296 << 10) + 65536
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(45),
            o = e(17),
            i = e(33),
            u = {};
        e(11)(u, e(0)("iterator"), (function () {
            return this
        })), t.exports = function (t, n, e) {
            t.prototype = r(u, {
                next: o(1, e)
            }), i(t, n + " Iterator")
        }
    }, function (t, n, e) {
        var r = e(7),
            o = e(8),
            i = e(30);
        t.exports = e(4) ? Object.defineProperties : function (t, n) {
            o(t);
            for (var e, u = i(n), c = u.length, s = 0; c > s;) r.f(t, e = u[s++], n[e]);
            return t
        }
    }, function (t, n, e) {
        var r = e(9),
            o = e(18),
            i = e(65)(!1),
            u = e(32)("IE_PROTO");
        t.exports = function (t, n) {
            var e, c = o(t),
                s = 0,
                a = [];
            for (e in c) e != u && r(c, e) && a.push(e);
            for (; n.length > s;) r(c, e = n[s++]) && (~i(a, e) || a.push(e));
            return a
        }
    }, function (t, n, e) {
        var r = e(18),
            o = e(19),
            i = e(66);
        t.exports = function (t) {
            return function (n, e, u) {
                var c, s = r(n),
                    a = o(s.length),
                    f = i(u, a);
                if (t && e != e) {
                    for (; a > f;)
                        if ((c = s[f++]) != c) return !0
                } else
                    for (; a > f; f++)
                        if ((t || f in s) && s[f] === e) return t || f || 0;
                return !t && -1
            }
        }
    }, function (t, n, e) {
        var r = e(27),
            o = Math.max,
            i = Math.min;
        t.exports = function (t, n) {
            return (t = r(t)) < 0 ? o(t + n, 0) : i(t, n)
        }
    }, function (t, n, e) {
        var r = e(2).document;
        t.exports = r && r.documentElement
    }, function (t, n, e) {
        var r = e(9),
            o = e(20),
            i = e(32)("IE_PROTO"),
            u = Object.prototype;
        t.exports = Object.getPrototypeOf || function (t) {
            return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(70),
            o = e(47),
            i = e(14),
            u = e(18);
        t.exports = e(29)(Array, "Array", (function (t, n) {
            this._t = u(t), this._i = 0, this._k = n
        }), (function () {
            var t = this._t,
                n = this._k,
                e = this._i++;
            return !t || e >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == n ? e : "values" == n ? t[e] : [e, t[e]])
        }), "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
    }, function (t, n, e) {
        var r = e(0)("unscopables"),
            o = Array.prototype;
        null == o[r] && e(11)(o, r, {}), t.exports = function (t) {
            o[r][t] = !0
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(48),
            o = e(12);
        t.exports = e(37)("Map", (function (t) {
            return function () {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }), {
            get: function (t) {
                var n = r.getEntry(o(this, "Map"), t);
                return n && n.v
            },
            set: function (t, n) {
                return r.def(o(this, "Map"), 0 === t ? 0 : t, n)
            }
        }, r, !0)
    }, function (t, n, e) {
        "use strict";
        var r = e(2),
            o = e(7),
            i = e(4),
            u = e(0)("species");
        t.exports = function (t) {
            var n = r[t];
            i && n && !n[u] && o.f(n, u, {
                configurable: !0,
                get: function () {
                    return this
                }
            })
        }
    }, function (t, n, e) {
        var r = e(1),
            o = e(74).set;
        t.exports = function (t, n, e) {
            var i, u = n.constructor;
            return u !== e && "function" == typeof u && (i = u.prototype) !== e.prototype && r(i) && o && o(t, i), t
        }
    }, function (t, n, e) {
        var r = e(1),
            o = e(8),
            i = function (t, n) {
                if (o(t), !r(n) && null !== n) throw TypeError(n + ": can't set as prototype!")
            };
        t.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, n, r) {
                try {
                    (r = e(10)(Function.call, e(75).f(Object.prototype, "__proto__").set, 2))(t, []), n = !(t instanceof Array)
                } catch (t) {
                    n = !0
                }
                return function (t, e) {
                    return i(t, e), n ? t.__proto__ = e : r(t, e), t
                }
            }({}, !1) : void 0),
            check: i
        }
    }, function (t, n, e) {
        var r = e(53),
            o = e(17),
            i = e(18),
            u = e(43),
            c = e(9),
            s = e(41),
            a = Object.getOwnPropertyDescriptor;
        n.f = e(4) ? a : function (t, n) {
            if (t = i(t), n = u(n, !0), s) try {
                return a(t, n)
            } catch (t) {}
            if (c(t, n)) return o(!r.f.call(t, n), t[n])
        }
    }, function (t, n, e) {
        var r = e(5);
        r(r.P + r.R, "Map", {
            toJSON: e(54)("Map")
        })
    }, function (t, n, e) {
        var r = e(15);
        t.exports = function (t, n) {
            var e = [];
            return r(t, !1, e.push, e, n), e
        }
    }, function (t, n, e) {
        e(38)("Map")
    }, function (t, n, e) {
        e(39)("Map")
    }, function (t, n, e) {
        e(22), e(26), e(34), e(81), e(82), e(83), e(84), t.exports = e(3).Set
    }, function (t, n, e) {
        "use strict";
        var r = e(48),
            o = e(12);
        t.exports = e(37)("Set", (function (t) {
            return function () {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }), {
            add: function (t) {
                return r.def(o(this, "Set"), t = 0 === t ? 0 : t, t)
            }
        }, r)
    }, function (t, n, e) {
        var r = e(5);
        r(r.P + r.R, "Set", {
            toJSON: e(54)("Set")
        })
    }, function (t, n, e) {
        e(38)("Set")
    }, function (t, n, e) {
        e(39)("Set")
    }, function (t, n, e) {
        e(22), e(34), e(86), e(92), e(93), t.exports = e(3).WeakMap
    }, function (t, n, e) {
        "use strict";
        var r, o = e(2),
            i = e(55)(0),
            u = e(6),
            c = e(21),
            s = e(56),
            a = e(91),
            f = e(1),
            l = e(12),
            p = e(12),
            h = !o.ActiveXObject && "ActiveXObject" in o,
            d = c.getWeak,
            v = Object.isExtensible,
            y = a.ufstore,
            m = function (t) {
                return function () {
                    return t(this, arguments.length > 0 ? arguments[0] : void 0)
                }
            },
            g = {
                get: function (t) {
                    if (f(t)) {
                        var n = d(t);
                        return !0 === n ? y(l(this, "WeakMap")).get(t) : n ? n[this._i] : void 0
                    }
                },
                set: function (t, n) {
                    return a.def(l(this, "WeakMap"), t, n)
                }
            },
            b = t.exports = e(37)("WeakMap", m, g, a, !0, !0);
        p && h && (s((r = a.getConstructor(m, "WeakMap")).prototype, g), c.NEED = !0, i(["delete", "has", "get", "set"], (function (t) {
            var n = b.prototype,
                e = n[t];
            u(n, t, (function (n, o) {
                if (f(n) && !v(n)) {
                    this._f || (this._f = new r);
                    var i = this._f[t](n, o);
                    return "set" == t ? this : i
                }
                return e.call(this, n, o)
            }))
        })))
    }, function (t, n, e) {
        var r = e(88);
        t.exports = function (t, n) {
            return new(r(t))(n)
        }
    }, function (t, n, e) {
        var r = e(1),
            o = e(89),
            i = e(0)("species");
        t.exports = function (t) {
            var n;
            return o(t) && ("function" != typeof (n = t.constructor) || n !== Array && !o(n.prototype) || (n = void 0), r(n) && null === (n = n[i]) && (n = void 0)), void 0 === n ? Array : n
        }
    }, function (t, n, e) {
        var r = e(24);
        t.exports = Array.isArray || function (t) {
            return "Array" == r(t)
        }
    }, function (t, n) {
        n.f = Object.getOwnPropertySymbols
    }, function (t, n, e) {
        "use strict";
        var r = e(35),
            o = e(21).getWeak,
            i = e(8),
            u = e(1),
            c = e(36),
            s = e(15),
            a = e(55),
            f = e(9),
            l = e(12),
            p = a(5),
            h = a(6),
            d = 0,
            v = function (t) {
                return t._l || (t._l = new y)
            },
            y = function () {
                this.a = []
            },
            m = function (t, n) {
                return p(t.a, (function (t) {
                    return t[0] === n
                }))
            };
        y.prototype = {
            get: function (t) {
                var n = m(this, t);
                if (n) return n[1]
            },
            has: function (t) {
                return !!m(this, t)
            },
            set: function (t, n) {
                var e = m(this, t);
                e ? e[1] = n : this.a.push([t, n])
            },
            delete: function (t) {
                var n = h(this.a, (function (n) {
                    return n[0] === t
                }));
                return ~n && this.a.splice(n, 1), !!~n
            }
        }, t.exports = {
            getConstructor: function (t, n, e, i) {
                var a = t((function (t, r) {
                    c(t, a, n, "_i"), t._t = n, t._i = d++, t._l = void 0, null != r && s(r, e, t[i], t)
                }));
                return r(a.prototype, {
                    delete: function (t) {
                        if (!u(t)) return !1;
                        var e = o(t);
                        return !0 === e ? v(l(this, n)).delete(t) : e && f(e, this._i) && delete e[this._i]
                    },
                    has: function (t) {
                        if (!u(t)) return !1;
                        var e = o(t);
                        return !0 === e ? v(l(this, n)).has(t) : e && f(e, this._i)
                    }
                }), a
            },
            def: function (t, n, e) {
                var r = o(i(n), !0);
                return !0 === r ? v(t).set(n, e) : r[t._i] = e, t
            },
            ufstore: v
        }
    }, function (t, n, e) {
        e(38)("WeakMap")
    }, function (t, n, e) {
        e(39)("WeakMap")
    }, function (t, n, e) {
        e(26), e(95), t.exports = e(3).Array.from
    }, function (t, n, e) {
        "use strict";
        var r = e(10),
            o = e(5),
            i = e(20),
            u = e(49),
            c = e(50),
            s = e(19),
            a = e(96),
            f = e(51);
        o(o.S + o.F * !e(52)((function (t) {
            Array.from(t)
        })), "Array", {
            from: function (t) {
                var n, e, o, l, p = i(t),
                    h = "function" == typeof this ? this : Array,
                    d = arguments.length,
                    v = d > 1 ? arguments[1] : void 0,
                    y = void 0 !== v,
                    m = 0,
                    g = f(p);
                if (y && (v = r(v, d > 2 ? arguments[2] : void 0, 2)), null == g || h == Array && c(g))
                    for (e = new h(n = s(p.length)); n > m; m++) a(e, m, y ? v(p[m], m) : p[m]);
                else
                    for (l = g.call(p), e = new h; !(o = l.next()).done; m++) a(e, m, y ? u(l, v, [o.value, m], !0) : o.value);
                return e.length = m, e
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(7),
            o = e(17);
        t.exports = function (t, n, e) {
            n in t ? r.f(t, n, o(0, e)) : t[n] = e
        }
    }, function (t, n, e) {
        e(98), t.exports = e(3).Object.assign
    }, function (t, n, e) {
        var r = e(5);
        r(r.S + r.F, "Object", {
            assign: e(56)
        })
    }, function (t, n) {
        var e;
        e = function () {
            return this
        }();
        try {
            e = e || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (e = window)
        }
        t.exports = e
    }, function (t, n, e) {
        "use strict";
        e.r(n);
        var r = {};
        e.r(r), e.d(r, "keyboardHandler", (function () {
            return et
        })), e.d(r, "mouseHandler", (function () {
            return rt
        })), e.d(r, "resizeHandler", (function () {
            return ot
        })), e.d(r, "selectHandler", (function () {
            return it
        })), e.d(r, "touchHandler", (function () {
            return ut
        })), e.d(r, "wheelHandler", (function () {
            return ct
        }));
        /*! *****************************************************************************
        Copyright (c) Microsoft Corporation. All rights reserved.
        Licensed under the Apache License, Version 2.0 (the "License"); you may not use
        this file except in compliance with the License. You may obtain a copy of the
        License at http://www.apache.org/licenses/LICENSE-2.0
        THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
        KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
        WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
        MERCHANTABLITY OR NON-INFRINGEMENT.
        See the Apache Version 2.0 License for specific language governing permissions
        and limitations under the License.
        ***************************************************************************** */
        var o = function (t, n) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (t, n) {
                        t.__proto__ = n
                    } || function (t, n) {
                        for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e])
                    })(t, n)
            },
            i = function () {
                return (i = Object.assign || function (t) {
                    for (var n, e = 1, r = arguments.length; e < r; e++)
                        for (var o in n = arguments[e]) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
                    return t
                }).apply(this, arguments)
            };

        function u(t, n, e, r) {
            var o, i = arguments.length,
                u = i < 3 ? n : null === r ? r = Object.getOwnPropertyDescriptor(n, e) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) u = Reflect.decorate(t, n, e, r);
            else
                for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (u = (i < 3 ? o(u) : i > 3 ? o(n, e, u) : o(n, e)) || u);
            return i > 3 && u && Object.defineProperty(n, e, u), u
        }
        e(59), e(80), e(85), e(94), e(97);
        var c = function (t) {
                var n = typeof t;
                return null != t && ("object" == n || "function" == n)
            },
            s = e(57),
            a = "object" == typeof self && self && self.Object === Object && self,
            f = s.a || a || Function("return this")(),
            l = f.Symbol,
            p = Object.prototype,
            h = p.hasOwnProperty,
            d = p.toString,
            v = l ? l.toStringTag : void 0,
            y = Object.prototype.toString,
            m = l ? l.toStringTag : void 0,
            g = function (t) {
                return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : m && m in Object(t) ? function (t) {
                    var n = h.call(t, v),
                        e = t[v];
                    try {
                        t[v] = void 0;
                        var r = !0
                    } catch (t) {}
                    var o = d.call(t);
                    return r && (n ? t[v] = e : delete t[v]), o
                }(t) : function (t) {
                    return y.call(t)
                }(t)
            },
            b = /^\s+|\s+$/g,
            x = /^[-+]0x[0-9a-f]+$/i,
            _ = /^0b[01]+$/i,
            w = /^0o[0-7]+$/i,
            E = parseInt,
            S = function (t) {
                if ("number" == typeof t) return t;
                if (function (t) {
                        return "symbol" == typeof t || function (t) {
                            return null != t && "object" == typeof t
                        }(t) && "[object Symbol]" == g(t)
                    }(t)) return NaN;
                if (c(t)) {
                    var n = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = c(n) ? n + "" : n
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = t.replace(b, "");
                var e = _.test(t);
                return e || w.test(t) ? E(t.slice(2), e ? 2 : 8) : x.test(t) ? NaN : +t
            },
            O = function (t, n, e) {
                return void 0 === e && (e = n, n = void 0), void 0 !== e && (e = (e = S(e)) == e ? e : 0), void 0 !== n && (n = (n = S(n)) == n ? n : 0),
                    function (t, n, e) {
                        return t == t && (void 0 !== e && (t = t <= e ? t : e), void 0 !== n && (t = t >= n ? t : n)), t
                    }(S(t), n, e)
            };

        function T(t, n) {
            return void 0 === t && (t = -1 / 0), void 0 === n && (n = 1 / 0),
                function (e, r) {
                    var o = "_" + r;
                    Object.defineProperty(e, r, {
                        get: function () {
                            return this[o]
                        },
                        set: function (e) {
                            Object.defineProperty(this, o, {
                                value: O(e, t, n),
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            })
                        },
                        enumerable: !0,
                        configurable: !0
                    })
                }
        }

        function A(t, n) {
            var e = "_" + n;
            Object.defineProperty(t, n, {
                get: function () {
                    return this[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        value: !!t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    })
                },
                enumerable: !0,
                configurable: !0
            })
        }
        var M = function () {
                return f.Date.now()
            },
            P = Math.max,
            j = Math.min,
            k = function (t, n, e) {
                var r, o, i, u, s, a, f = 0,
                    l = !1,
                    p = !1,
                    h = !0;
                if ("function" != typeof t) throw new TypeError("Expected a function");

                function d(n) {
                    var e = r,
                        i = o;
                    return r = o = void 0, f = n, u = t.apply(i, e)
                }

                function v(t) {
                    var e = t - a;
                    return void 0 === a || e >= n || e < 0 || p && t - f >= i
                }

                function y() {
                    var t = M();
                    if (v(t)) return m(t);
                    s = setTimeout(y, function (t) {
                        var e = n - (t - a);
                        return p ? j(e, i - (t - f)) : e
                    }(t))
                }

                function m(t) {
                    return s = void 0, h && r ? d(t) : (r = o = void 0, u)
                }

                function g() {
                    var t = M(),
                        e = v(t);
                    if (r = arguments, o = this, a = t, e) {
                        if (void 0 === s) return function (t) {
                            return f = t, s = setTimeout(y, n), l ? d(t) : u
                        }(a);
                        if (p) return clearTimeout(s), s = setTimeout(y, n), d(a)
                    }
                    return void 0 === s && (s = setTimeout(y, n)), u
                }
                return n = S(n) || 0, c(e) && (l = !!e.leading, i = (p = "maxWait" in e) ? P(S(e.maxWait) || 0, n) : i, h = "trailing" in e ? !!e.trailing : h), g.cancel = function () {
                    void 0 !== s && clearTimeout(s), f = 0, r = a = o = s = void 0
                }, g.flush = function () {
                    return void 0 === s ? u : m(M())
                }, g
            };

        function D() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return function (n, e, r) {
                var o = r.value;
                return {
                    get: function () {
                        return this.hasOwnProperty(e) || Object.defineProperty(this, e, {
                            value: k.apply(void 0, function () {
                                for (var t = 0, n = 0, e = arguments.length; n < e; n++) t += arguments[n].length;
                                var r = Array(t),
                                    o = 0;
                                for (n = 0; n < e; n++)
                                    for (var i = arguments[n], u = 0, c = i.length; u < c; u++, o++) r[o] = i[u];
                                return r
                            }([o], t))
                        }), this[e]
                    }
                }
            }
        }
        var L, N = function () {
                function t(t) {
                    var n = this;
                    void 0 === t && (t = {}), this.damping = .1, this.thumbMinSize = 20, this.renderByPixels = !0, this.alwaysShowTracks = !1, this.continuousScrolling = !0, this.delegateTo = null, this.plugins = {}, Object.keys(t).forEach((function (e) {
                        n[e] = t[e]
                    }))
                }
                return Object.defineProperty(t.prototype, "wheelEventTarget", {
                    get: function () {
                        return this.delegateTo
                    },
                    set: function (t) {
                        console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."), this.delegateTo = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), u([T(0, 1)], t.prototype, "damping", void 0), u([T(0, 1 / 0)], t.prototype, "thumbMinSize", void 0), u([A], t.prototype, "renderByPixels", void 0), u([A], t.prototype, "alwaysShowTracks", void 0), u([A], t.prototype, "continuousScrolling", void 0), t
            }(),
            z = new WeakMap;

        function C() {
            if (void 0 !== L) return L;
            var t = !1;
            try {
                var n = function () {},
                    e = Object.defineProperty({}, "passive", {
                        get: function () {
                            t = !0
                        }
                    });
                window.addEventListener("testPassive", n, e), window.removeEventListener("testPassive", n, e)
            } catch (t) {}
            return L = !!t && {
                passive: !1
            }
        }

        function R(t) {
            var n = z.get(t) || [];
            return z.set(t, n),
                function (t, e, r) {
                    function o(t) {
                        t.defaultPrevented || r(t)
                    }
                    e.split(/\s+/g).forEach((function (e) {
                        n.push({
                            elem: t,
                            eventName: e,
                            handler: o
                        }), t.addEventListener(e, o, C())
                    }))
                }
        }

        function F(t) {
            var n = function (t) {
                return t.touches ? t.touches[t.touches.length - 1] : t
            }(t);
            return {
                x: n.clientX,
                y: n.clientY
            }
        }

        function I(t, n) {
            return void 0 === n && (n = []), n.some((function (n) {
                return t === n
            }))
        }
        var W = ["webkit", "moz", "ms", "o"],
            H = new RegExp("^-(?!(?:" + W.join("|") + ")-)");

        function B(t, n) {
            n = function (t) {
                var n = {};
                return Object.keys(t).forEach((function (e) {
                    if (H.test(e)) {
                        var r = t[e];
                        e = e.replace(/^-/, ""), n[e] = r, W.forEach((function (t) {
                            n["-" + t + "-" + e] = r
                        }))
                    } else n[e] = t[e]
                })), n
            }(n), Object.keys(n).forEach((function (e) {
                var r = e.replace(/^-/, "").replace(/-([a-z])/g, (function (t, n) {
                    return n.toUpperCase()
                }));
                t.style[r] = n[e]
            }))
        }
        var G, X = function () {
                function t(t) {
                    this.updateTime = Date.now(), this.delta = {
                        x: 0,
                        y: 0
                    }, this.velocity = {
                        x: 0,
                        y: 0
                    }, this.lastPosition = {
                        x: 0,
                        y: 0
                    }, this.lastPosition = F(t)
                }
                return t.prototype.update = function (t) {
                    var n = this.velocity,
                        e = this.updateTime,
                        r = this.lastPosition,
                        o = Date.now(),
                        i = F(t),
                        u = {
                            x: -(i.x - r.x),
                            y: -(i.y - r.y)
                        },
                        c = o - e || 16,
                        s = u.x / c * 16,
                        a = u.y / c * 16;
                    n.x = .9 * s + .1 * n.x, n.y = .9 * a + .1 * n.y, this.delta = u, this.updateTime = o, this.lastPosition = i
                }, t
            }(),
            V = function () {
                function t() {
                    this._touchList = {}
                }
                return Object.defineProperty(t.prototype, "_primitiveValue", {
                    get: function () {
                        return {
                            x: 0,
                            y: 0
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.isActive = function () {
                    return void 0 !== this._activeTouchID
                }, t.prototype.getDelta = function () {
                    var t = this._getActiveTracker();
                    return t ? i({}, t.delta) : this._primitiveValue
                }, t.prototype.getVelocity = function () {
                    var t = this._getActiveTracker();
                    return t ? i({}, t.velocity) : this._primitiveValue
                }, t.prototype.track = function (t) {
                    var n = this,
                        e = t.targetTouches;
                    return Array.from(e).forEach((function (t) {
                        n._add(t)
                    })), this._touchList
                }, t.prototype.update = function (t) {
                    var n = this,
                        e = t.touches,
                        r = t.changedTouches;
                    return Array.from(e).forEach((function (t) {
                        n._renew(t)
                    })), this._setActiveID(r), this._touchList
                }, t.prototype.release = function (t) {
                    var n = this;
                    delete this._activeTouchID, Array.from(t.changedTouches).forEach((function (t) {
                        n._delete(t)
                    }))
                }, t.prototype._add = function (t) {
                    if (!this._has(t)) {
                        var n = new X(t);
                        this._touchList[t.identifier] = n
                    }
                }, t.prototype._renew = function (t) {
                    this._has(t) && this._touchList[t.identifier].update(t)
                }, t.prototype._delete = function (t) {
                    delete this._touchList[t.identifier]
                }, t.prototype._has = function (t) {
                    return this._touchList.hasOwnProperty(t.identifier)
                }, t.prototype._setActiveID = function (t) {
                    this._activeTouchID = t[t.length - 1].identifier
                }, t.prototype._getActiveTracker = function () {
                    return this._touchList[this._activeTouchID]
                }, t
            }();
        ! function (t) {
            t.X = "x", t.Y = "y"
        }(G || (G = {}));
        var U = function () {
                function t(t, n) {
                    void 0 === n && (n = 0), this._direction = t, this._minSize = n, this.element = document.createElement("div"), this.displaySize = 0, this.realSize = 0, this.offset = 0, this.element.className = "scrollbar-thumb scrollbar-thumb-" + t
                }
                return t.prototype.attachTo = function (t) {
                    t.appendChild(this.element)
                }, t.prototype.update = function (t, n, e) {
                    this.realSize = Math.min(n / e, 1) * n, this.displaySize = Math.max(this.realSize, this._minSize), this.offset = t / e * (n + (this.realSize - this.displaySize)), B(this.element, this._getStyle())
                }, t.prototype._getStyle = function () {
                    switch (this._direction) {
                        case G.X:
                            return {
                                width: this.displaySize + "px", "-transform": "translate3d(" + this.offset + "px, 0, 0)"
                            };
                        case G.Y:
                            return {
                                height: this.displaySize + "px", "-transform": "translate3d(0, " + this.offset + "px, 0)"
                            };
                        default:
                            return null
                    }
                }, t
            }(),
            Y = function () {
                function t(t, n) {
                    void 0 === n && (n = 0), this.element = document.createElement("div"), this._isShown = !1, this.element.className = "scrollbar-track scrollbar-track-" + t, this.thumb = new U(t, n), this.thumb.attachTo(this.element)
                }
                return t.prototype.attachTo = function (t) {
                    t.appendChild(this.element)
                }, t.prototype.show = function () {
                    this._isShown || (this._isShown = !0, this.element.classList.add("show"))
                }, t.prototype.hide = function () {
                    this._isShown && (this._isShown = !1, this.element.classList.remove("show"))
                }, t.prototype.update = function (t, n, e) {
                    B(this.element, {
                        display: e <= n ? "none" : "block"
                    }), this.thumb.update(t, n, e)
                }, t
            }(),
            q = function () {
                function t(t) {
                    this._scrollbar = t;
                    var n = t.options.thumbMinSize;
                    this.xAxis = new Y(G.X, n), this.yAxis = new Y(G.Y, n), this.xAxis.attachTo(t.containerEl), this.yAxis.attachTo(t.containerEl), t.options.alwaysShowTracks && (this.xAxis.show(), this.yAxis.show())
                }
                return t.prototype.update = function () {
                    var t = this._scrollbar,
                        n = t.size,
                        e = t.offset;
                    this.xAxis.update(e.x, n.container.width, n.content.width), this.yAxis.update(e.y, n.container.height, n.content.height)
                }, t.prototype.autoHideOnIdle = function () {
                    this._scrollbar.options.alwaysShowTracks || (this.xAxis.hide(), this.yAxis.hide())
                }, u([D(300)], t.prototype, "autoHideOnIdle", null), t
            }(),
            K = new WeakMap;

        function $(t) {
            return Math.pow(t - 1, 3) + 1
        }
        var J, Q, Z, tt = function () {
                function t(t, n) {
                    var e = this.constructor;
                    this.scrollbar = t, this.name = e.pluginName, this.options = i(i({}, e.defaultOptions), n)
                }
                return t.prototype.onInit = function () {}, t.prototype.onDestroy = function () {}, t.prototype.onUpdate = function () {}, t.prototype.onRender = function (t) {}, t.prototype.transformDelta = function (t, n) {
                    return i({}, t)
                }, t.pluginName = "", t.defaultOptions = {}, t
            }(),
            nt = {
                order: new Set,
                constructors: {}
            };

        function et(t) {
            var n = R(t),
                e = t.containerEl;
            n(e, "keydown", (function (n) {
                var r = document.activeElement;
                if ((r === e || e.contains(r)) && ! function (t) {
                        return !("INPUT" !== t.tagName && "SELECT" !== t.tagName && "TEXTAREA" !== t.tagName && !t.isContentEditable) && !t.disabled
                    }(r)) {
                    var o = function (t, n) {
                        var e = t.size,
                            r = t.limit,
                            o = t.offset;
                        switch (n) {
                            case J.TAB:
                                return function (t) {
                                    requestAnimationFrame((function () {
                                        t.scrollIntoView(document.activeElement, {
                                            offsetTop: t.size.container.height / 2,
                                            onlyScrollIfNeeded: !0
                                        })
                                    }))
                                }(t);
                            case J.SPACE:
                                return [0, 200];
                            case J.PAGE_UP:
                                return [0, 40 - e.container.height];
                            case J.PAGE_DOWN:
                                return [0, e.container.height - 40];
                            case J.END:
                                return [0, r.y - o.y];
                            case J.HOME:
                                return [0, -o.y];
                            case J.LEFT:
                                return [-40, 0];
                            case J.UP:
                                return [0, -40];
                            case J.RIGHT:
                                return [40, 0];
                            case J.DOWN:
                                return [0, 40];
                            default:
                                return null
                        }
                    }(t, n.keyCode || n.which);
                    if (o) {
                        var i = o[0],
                            u = o[1];
                        t.addTransformableMomentum(i, u, n, (function (e) {
                            e ? n.preventDefault() : (t.containerEl.blur(), t.parent && t.parent.containerEl.focus())
                        }))
                    }
                }
            }))
        }

        function rt(t) {
            var n, e, r, o, i, u = R(t),
                c = t.containerEl,
                s = t.track,
                a = s.xAxis,
                f = s.yAxis;

            function l(n, e) {
                var r = t.size;
                return n === Q.X ? e / (r.container.width + (a.thumb.realSize - a.thumb.displaySize)) * r.content.width : n === Q.Y ? e / (r.container.height + (f.thumb.realSize - f.thumb.displaySize)) * r.content.height : 0
            }

            function p(t) {
                return I(t, [a.element, a.thumb.element]) ? Q.X : I(t, [f.element, f.thumb.element]) ? Q.Y : void 0
            }
            u(c, "click", (function (n) {
                if (!e && I(n.target, [a.element, f.element])) {
                    var r = n.target,
                        o = p(r),
                        i = r.getBoundingClientRect(),
                        u = F(n),
                        c = t.offset,
                        s = t.limit;
                    if (o === Q.X) {
                        var h = u.x - i.left - a.thumb.displaySize / 2;
                        t.setMomentum(O(l(o, h) - c.x, -c.x, s.x - c.x), 0)
                    }
                    o === Q.Y && (h = u.y - i.top - f.thumb.displaySize / 2, t.setMomentum(0, O(l(o, h) - c.y, -c.y, s.y - c.y)))
                }
            })), u(c, "mousedown", (function (e) {
                if (I(e.target, [a.thumb.element, f.thumb.element])) {
                    n = !0;
                    var u = e.target,
                        s = F(e),
                        l = u.getBoundingClientRect();
                    o = p(u), r = {
                        x: s.x - l.left,
                        y: s.y - l.top
                    }, i = c.getBoundingClientRect(), B(t.containerEl, {
                        "-user-select": "none"
                    })
                }
            })), u(window, "mousemove", (function (u) {
                if (n) {
                    e = !0;
                    var c = t.offset,
                        s = F(u);
                    if (o === Q.X) {
                        var a = s.x - r.x - i.left;
                        t.setPosition(l(o, a), c.y)
                    }
                    o === Q.Y && (a = s.y - r.y - i.top, t.setPosition(c.x, l(o, a)))
                }
            })), u(window, "mouseup blur", (function () {
                n = e = !1, B(t.containerEl, {
                    "-user-select": ""
                })
            }))
        }

        function ot(t) {
            R(t)(window, "resize", k(t.update.bind(t), 300))
        }

        function it(t) {
            var n, e = R(t),
                r = t.containerEl,
                o = t.contentEl,
                i = t.offset,
                u = t.limit,
                c = !1;
            e(window, "mousemove", (function (e) {
                c && (cancelAnimationFrame(n), function e(r) {
                    var o = r.x,
                        c = r.y;
                    (o || c) && (t.setMomentum(O(i.x + o, 0, u.x) - i.x, O(i.y + c, 0, u.y) - i.y), n = requestAnimationFrame((function () {
                        e({
                            x: o,
                            y: c
                        })
                    })))
                }(function (t, n) {
                    var e = t.bounding,
                        r = e.top,
                        o = e.right,
                        i = e.bottom,
                        u = e.left,
                        c = F(n),
                        s = c.x,
                        a = c.y,
                        f = {
                            x: 0,
                            y: 0
                        };
                    return 0 === s && 0 === a || (s > o - 20 ? f.x = s - o + 20 : s < u + 20 && (f.x = s - u - 20), a > i - 20 ? f.y = a - i + 20 : a < r + 20 && (f.y = a - r - 20), f.x *= 2, f.y *= 2), f
                }(t, e)))
            })), e(o, "selectstart", (function (t) {
                t.stopPropagation(), cancelAnimationFrame(n), c = !0
            })), e(window, "mouseup blur", (function () {
                cancelAnimationFrame(n), c = !1
            })), e(r, "scroll", (function (t) {
                t.preventDefault(), r.scrollTop = r.scrollLeft = 0
            }))
        }

        function ut(t) {
            var n, e = /Android/.test(navigator.userAgent) ? 3 : 2,
                r = t.options.delegateTo || t.containerEl,
                o = new V,
                i = R(t),
                u = 0;
            i(r, "touchstart", (function (e) {
                o.track(e), t.setMomentum(0, 0), 0 === u && (n = t.options.damping, t.options.damping = Math.max(n, .5)), u++
            })), i(r, "touchmove", (function (n) {
                if (!Z || Z === t) {
                    o.update(n);
                    var e = o.getDelta(),
                        r = e.x,
                        i = e.y;
                    t.addTransformableMomentum(r, i, n, (function (e) {
                        e && (n.preventDefault(), Z = t)
                    }))
                }
            })), i(r, "touchcancel touchend", (function (r) {
                var i = o.getVelocity(),
                    c = {
                        x: 0,
                        y: 0
                    };
                Object.keys(i).forEach((function (t) {
                    var r = i[t] / n;
                    c[t] = Math.abs(r) < 50 ? 0 : r * e
                })), t.addTransformableMomentum(c.x, c.y, r), 0 == --u && (t.options.damping = n), o.release(r), Z = null
            }))
        }

        function ct(t) {
            R(t)(t.options.delegateTo || t.containerEl, "onwheel" in window || document.implementation.hasFeature("Events.wheel", "3.0") ? "wheel" : "mousewheel", (function (n) {
                var e = function (t) {
                        if ("deltaX" in t) {
                            var n = ft(t.deltaMode);
                            return {
                                x: t.deltaX / st.STANDARD * n,
                                y: t.deltaY / st.STANDARD * n
                            }
                        }
                        return "wheelDeltaX" in t ? {
                            x: t.wheelDeltaX / st.OTHERS,
                            y: t.wheelDeltaY / st.OTHERS
                        } : {
                            x: 0,
                            y: t.wheelDelta / st.OTHERS
                        }
                    }(n),
                    r = e.x,
                    o = e.y;
                t.addTransformableMomentum(r, o, n, (function (t) {
                    t && n.preventDefault()
                }))
            }))
        }! function (t) {
            t[t.TAB = 9] = "TAB", t[t.SPACE = 32] = "SPACE", t[t.PAGE_UP = 33] = "PAGE_UP", t[t.PAGE_DOWN = 34] = "PAGE_DOWN", t[t.END = 35] = "END", t[t.HOME = 36] = "HOME", t[t.LEFT = 37] = "LEFT", t[t.UP = 38] = "UP", t[t.RIGHT = 39] = "RIGHT", t[t.DOWN = 40] = "DOWN"
        }(J || (J = {})),
        function (t) {
            t[t.X = 0] = "X", t[t.Y = 1] = "Y"
        }(Q || (Q = {}));
        var st = {
                STANDARD: 1,
                OTHERS: -3
            },
            at = [1, 28, 500],
            ft = function (t) {
                return at[t] || at[0]
            },
            lt = new Map,
            pt = function () {
                function t(t, n) {
                    var e = this;
                    this.offset = {
                        x: 0,
                        y: 0
                    }, this.limit = {
                        x: 1 / 0,
                        y: 1 / 0
                    }, this.bounding = {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }, this._plugins = [], this._momentum = {
                        x: 0,
                        y: 0
                    }, this._listeners = new Set, this.containerEl = t;
                    var r = this.contentEl = document.createElement("div");
                    this.options = new N(n), t.setAttribute("data-scrollbar", "true"), t.setAttribute("tabindex", "-1"), B(t, {
                        overflow: "hidden",
                        outline: "none"
                    }), window.navigator.msPointerEnabled && (t.style.msTouchAction = "none"), r.className = "scroll-content", Array.from(t.childNodes).forEach((function (t) {
                        r.appendChild(t)
                    })), t.appendChild(r), this.track = new q(this), this.size = this.getSize(), this._plugins = function (t, n) {
                        return Array.from(nt.order).filter((function (t) {
                            return !1 !== n[t]
                        })).map((function (e) {
                            var r = new(0, nt.constructors[e])(t, n[e]);
                            return n[e] = r.options, r
                        }))
                    }(this, this.options.plugins);
                    var o = t.scrollLeft,
                        i = t.scrollTop;
                    t.scrollLeft = t.scrollTop = 0, this.setPosition(o, i, {
                        withoutCallbacks: !0
                    });
                    var u = window,
                        c = u.MutationObserver || u.WebKitMutationObserver || u.MozMutationObserver;
                    "function" == typeof c && (this._observer = new c((function () {
                        e.update()
                    })), this._observer.observe(r, {
                        subtree: !0,
                        childList: !0
                    })), lt.set(t, this), requestAnimationFrame((function () {
                        e._init()
                    }))
                }
                return Object.defineProperty(t.prototype, "parent", {
                    get: function () {
                        for (var t = this.containerEl.parentElement; t;) {
                            var n = lt.get(t);
                            if (n) return n;
                            t = t.parentElement
                        }
                        return null
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "scrollTop", {
                    get: function () {
                        return this.offset.y
                    },
                    set: function (t) {
                        this.setPosition(this.scrollLeft, t)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "scrollLeft", {
                    get: function () {
                        return this.offset.x
                    },
                    set: function (t) {
                        this.setPosition(t, this.scrollTop)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.getSize = function () {
                    return function (t) {
                        var n = t.containerEl,
                            e = t.contentEl;
                        return {
                            container: {
                                width: n.clientWidth,
                                height: n.clientHeight
                            },
                            content: {
                                width: e.offsetWidth - e.clientWidth + e.scrollWidth,
                                height: e.offsetHeight - e.clientHeight + e.scrollHeight
                            }
                        }
                    }(this)
                }, t.prototype.update = function () {
                    ! function (t) {
                        var n = t.getSize(),
                            e = {
                                x: Math.max(n.content.width - n.container.width, 0),
                                y: Math.max(n.content.height - n.container.height, 0)
                            },
                            r = t.containerEl.getBoundingClientRect(),
                            o = {
                                top: Math.max(r.top, 0),
                                right: Math.min(r.right, window.innerWidth),
                                bottom: Math.min(r.bottom, window.innerHeight),
                                left: Math.max(r.left, 0)
                            };
                        t.size = n, t.limit = e, t.bounding = o, t.track.update(), t.setPosition()
                    }(this), this._plugins.forEach((function (t) {
                        t.onUpdate()
                    }))
                }, t.prototype.isVisible = function (t) {
                    return function (t, n) {
                        var e = t.bounding,
                            r = n.getBoundingClientRect(),
                            o = Math.max(e.top, r.top),
                            i = Math.max(e.left, r.left),
                            u = Math.min(e.right, r.right);
                        return o < Math.min(e.bottom, r.bottom) && i < u
                    }(this, t)
                }, t.prototype.setPosition = function (t, n, e) {
                    var r = this;
                    void 0 === t && (t = this.offset.x), void 0 === n && (n = this.offset.y), void 0 === e && (e = {});
                    var o = function (t, n, e) {
                        var r = t.options,
                            o = t.offset,
                            u = t.limit,
                            c = t.track,
                            s = t.contentEl;
                        return r.renderByPixels && (n = Math.round(n), e = Math.round(e)), n = O(n, 0, u.x), e = O(e, 0, u.y), n !== o.x && c.xAxis.show(), e !== o.y && c.yAxis.show(), r.alwaysShowTracks || c.autoHideOnIdle(), n === o.x && e === o.y ? null : (o.x = n, o.y = e, B(s, {
                            "-transform": "translate3d(" + -n + "px, " + -e + "px, 0)"
                        }), c.update(), {
                            offset: i({}, o),
                            limit: i({}, u)
                        })
                    }(this, t, n);
                    o && !e.withoutCallbacks && this._listeners.forEach((function (t) {
                        t.call(r, o)
                    }))
                }, t.prototype.scrollTo = function (t, n, e, r) {
                    void 0 === t && (t = this.offset.x), void 0 === n && (n = this.offset.y), void 0 === e && (e = 0), void 0 === r && (r = {}),
                        function (t, n, e, r, o) {
                            void 0 === r && (r = 0);
                            var i = void 0 === o ? {} : o,
                                u = i.easing,
                                c = void 0 === u ? $ : u,
                                s = i.callback,
                                a = t.options,
                                f = t.offset,
                                l = t.limit;
                            a.renderByPixels && (n = Math.round(n), e = Math.round(e));
                            var p = f.x,
                                h = f.y,
                                d = O(n, 0, l.x) - p,
                                v = O(e, 0, l.y) - h,
                                y = Date.now();
                            cancelAnimationFrame(K.get(t)),
                                function n() {
                                    var e = Date.now() - y,
                                        o = r ? c(Math.min(e / r, 1)) : 1;
                                    if (t.setPosition(p + d * o, h + v * o), e >= r) "function" == typeof s && s.call(t);
                                    else {
                                        var i = requestAnimationFrame(n);
                                        K.set(t, i)
                                    }
                                }()
                        }(this, t, n, e, r)
                }, t.prototype.scrollIntoView = function (t, n) {
                    void 0 === n && (n = {}),
                        function (t, n, e) {
                            var r = void 0 === e ? {} : e,
                                o = r.alignToTop,
                                i = void 0 === o || o,
                                u = r.onlyScrollIfNeeded,
                                c = void 0 !== u && u,
                                s = r.offsetTop,
                                a = void 0 === s ? 0 : s,
                                f = r.offsetLeft,
                                l = void 0 === f ? 0 : f,
                                p = r.offsetBottom,
                                h = void 0 === p ? 0 : p,
                                d = t.containerEl,
                                v = t.bounding,
                                y = t.offset,
                                m = t.limit;
                            if (n && d.contains(n)) {
                                var g = n.getBoundingClientRect();
                                if (!c || !t.isVisible(n)) {
                                    var b = i ? g.top - v.top - a : g.bottom - v.bottom + h;
                                    t.setMomentum(g.left - v.left - l, O(b, -y.y, m.y - y.y))
                                }
                            }
                        }(this, t, n)
                }, t.prototype.addListener = function (t) {
                    if ("function" != typeof t) throw new TypeError("[smooth-scrollbar] scrolling listener should be a function");
                    this._listeners.add(t)
                }, t.prototype.removeListener = function (t) {
                    this._listeners.delete(t)
                }, t.prototype.addTransformableMomentum = function (t, n, e, r) {
                    this._updateDebounced();
                    var o = this._plugins.reduce((function (t, n) {
                            return n.transformDelta(t, e) || t
                        }), {
                            x: t,
                            y: n
                        }),
                        i = !this._shouldPropagateMomentum(o.x, o.y);
                    i && this.addMomentum(o.x, o.y), r && r.call(this, i)
                }, t.prototype.addMomentum = function (t, n) {
                    this.setMomentum(this._momentum.x + t, this._momentum.y + n)
                }, t.prototype.setMomentum = function (t, n) {
                    0 === this.limit.x && (t = 0), 0 === this.limit.y && (n = 0), this.options.renderByPixels && (t = Math.round(t), n = Math.round(n)), this._momentum.x = t, this._momentum.y = n
                }, t.prototype.updatePluginOptions = function (t, n) {
                    this._plugins.forEach((function (e) {
                        e.name === t && Object.assign(e.options, n)
                    }))
                }, t.prototype.destroy = function () {
                    var t = this.containerEl,
                        n = this.contentEl;
                    ! function (t) {
                        var n = z.get(t);
                        n && (n.forEach((function (t) {
                            var n = t.elem,
                                e = t.eventName,
                                r = t.handler;
                            n.removeEventListener(e, r, C())
                        })), z.delete(t))
                    }(this), this._listeners.clear(), this.setMomentum(0, 0), cancelAnimationFrame(this._renderID), this._observer && this._observer.disconnect(), lt.delete(this.containerEl);
                    for (var e = Array.from(n.childNodes); t.firstChild;) t.removeChild(t.firstChild);
                    e.forEach((function (n) {
                        t.appendChild(n)
                    })), B(t, {
                        overflow: ""
                    }), t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, this._plugins.forEach((function (t) {
                        t.onDestroy()
                    })), this._plugins.length = 0
                }, t.prototype._init = function () {
                    var t = this;
                    this.update(), Object.keys(r).forEach((function (n) {
                        r[n](t)
                    })), this._plugins.forEach((function (t) {
                        t.onInit()
                    })), this._render()
                }, t.prototype._updateDebounced = function () {
                    this.update()
                }, t.prototype._shouldPropagateMomentum = function (t, n) {
                    void 0 === t && (t = 0), void 0 === n && (n = 0);
                    var e = this.options,
                        r = this.offset,
                        o = this.limit;
                    if (!e.continuousScrolling) return !1;
                    0 === o.x && 0 === o.y && this._updateDebounced();
                    var i = O(t + r.x, 0, o.x),
                        u = O(n + r.y, 0, o.y),
                        c = !0;
                    return (c = (c = c && i === r.x) && u === r.y) && (r.x === o.x || 0 === r.x || r.y === o.y || 0 === r.y)
                }, t.prototype._render = function () {
                    var t = this._momentum;
                    if (t.x || t.y) {
                        var n = this._nextTick("x"),
                            e = this._nextTick("y");
                        t.x = n.momentum, t.y = e.momentum, this.setPosition(n.position, e.position)
                    }
                    var r = i({}, this._momentum);
                    this._plugins.forEach((function (t) {
                        t.onRender(r)
                    })), this._renderID = requestAnimationFrame(this._render.bind(this))
                }, t.prototype._nextTick = function (t) {
                    var n = this.options,
                        e = this.offset,
                        r = this._momentum,
                        o = e[t],
                        i = r[t];
                    if (Math.abs(i) <= .1) return {
                        momentum: 0,
                        position: o + i
                    };
                    var u = i * (1 - n.damping);
                    return n.renderByPixels && (u |= 0), {
                        momentum: u,
                        position: o + i - u
                    }
                }, u([D(100, {
                    leading: !0
                })], t.prototype, "_updateDebounced", null), t
            }(),
            ht = "smooth-scrollbar-style",
            dt = !1;

        function vt() {
            if (!dt && "undefined" != typeof window) {
                var t = document.createElement("style");
                t.id = ht, t.textContent = "\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: rgba(222, 222, 222, .75);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: rgba(0, 0, 0, .5);\n  border-radius: 4px;\n}\n", document.head && document.head.appendChild(t), dt = !0
            }
        }
        e.d(n, "ScrollbarPlugin", (function () {
            return tt
        }));
        /*!
         * cast `I.Scrollbar` to `Scrollbar` to avoid error
         *
         * `I.Scrollbar` is not assignable to `Scrollbar`:
         *     "privateProp" is missing in `I.Scrollbar`
         *
         * @see https://github.com/Microsoft/TypeScript/issues/2672
         */
        var yt = function (t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }
            return function (t, n) {
                function e() {
                    this.constructor = t
                }
                o(t, n), t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype, new e)
            }(n, t), n.init = function (t, n) {
                if (!t || 1 !== t.nodeType) throw new TypeError("expect element to be DOM Element, but got " + t);
                return vt(), lt.has(t) ? lt.get(t) : new pt(t, n)
            }, n.initAll = function (t) {
                return Array.from(document.querySelectorAll("[data-scrollbar]"), (function (e) {
                    return n.init(e, t)
                }))
            }, n.has = function (t) {
                return lt.has(t)
            }, n.get = function (t) {
                return lt.get(t)
            }, n.getAll = function () {
                return Array.from(lt.values())
            }, n.destroy = function (t) {
                var n = lt.get(t);
                n && n.destroy()
            }, n.destroyAll = function () {
                lt.forEach((function (t) {
                    t.destroy()
                }))
            }, n.use = function () {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return function () {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    t.forEach((function (t) {
                        var n = t.pluginName;
                        if (!n) throw new TypeError("plugin name is required");
                        nt.order.add(n), nt.constructors[n] = t
                    }))
                }.apply(void 0, t)
            }, n.attachStyle = function () {
                return vt()
            }, n.detachStyle = function () {
                return function () {
                    if (dt && "undefined" != typeof window) {
                        var t = document.getElementById(ht);
                        t && t.parentNode && (t.parentNode.removeChild(t), dt = !1)
                    }
                }()
            }, n.version = "8.5.2", n.ScrollbarPlugin = tt, n
        }(pt);
        n.default = yt
    }]).default
}));;
// Dynamic Adapt v.1
// HTML data-move="where(uniq class name),position(digi),when(breakpoint)"
// e.x. data-move="item,2,992"
// Andrikanych Yevhen 2020

var move_array = [];
var move_objects = document.querySelectorAll("[data-move]");

if (move_objects.length > 0) {
	for (var _index10 = 0; _index10 < move_objects.length; _index10++) {
		var _el6 = move_objects[_index10];

		var data_move = _el6.getAttribute("data-move");

		if (data_move != "" || data_move != null) {
			_el6.setAttribute("data-move-index", _index10);

			move_array[_index10] = {
				parent: _el6.parentNode,
				index: index_in_parent(_el6)
			};
		}
	}
}

function dynamic_adapt() {
	var w = document.querySelector("body").offsetWidth;

	if (move_objects.length > 0) {
		for (var _index11 = 0; _index11 < move_objects.length; _index11++) {
			var _el7 = move_objects[_index11];

			var _data_move = _el7.getAttribute("data-move");

			if (_data_move != "" || _data_move != null) {
				var data_array = _data_move.split(",");

				var data_parent = document.querySelector("." + data_array[0]);
				var data_index = data_array[1];
				var data_bp = data_array[2];

				if (w < data_bp) {
					if (!_el7.classList.contains("js-move_done_" + data_bp)) {
						if (data_index > 0) {
							//insertAfter
							var actual_index = index_of_elements(data_parent)[data_index];
							data_parent.insertBefore(_el7, data_parent.childNodes[actual_index]);
						} else {
							data_parent.insertBefore(_el7, data_parent.firstChild);
						}

						_el7.classList.add("js-move_done_" + data_bp);
					}
				} else {
					if (_el7.classList.contains("js-move_done_" + data_bp)) {
						dynamic_adaptive_back(_el7);

						_el7.classList.remove("js-move_done_" + data_bp);
					}
				}
			}
		}
	}

	custom_adapt(w);
}

function dynamic_adaptive_back(el) {
	var index_original = el.getAttribute("data-move-index");
	var move_place = move_array[index_original];
	var parent_place = move_place["parent"];
	var index_place = move_place["index"];

	if (index_place > 0) {
		//insertAfter
		var actual_index = index_of_elements(parent_place)[index_place];
		parent_place.insertBefore(el, parent_place.childNodes[actual_index]);
	} else {
		parent_place.insertBefore(el, parent_place.firstChild);
	}
}

function index_in_parent(node) {
	var children = node.parentNode.childNodes;
	var num = 0;

	for (var _i2 = 0; _i2 < children.length; _i2++) {
		if (children[_i2] == node) return num;
		if (children[_i2].nodeType == 1) num++;
	}

	return -1;
}

function index_of_elements(parent) {
	var children = [];

	for (var _i3 = 0; _i3 < parent.childNodes.length; _i3++) {
		if (parent.childNodes[_i3].nodeType == 1 && parent.childNodes[_i3].getAttribute("data-move") == null) {
			children.push(_i3);
		}
	}

	return children;
}

window.addEventListener("resize", function (event) {
	dynamic_adapt();
});
dynamic_adapt();

function custom_adapt(w) { };
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const video = document.querySelectorAll('.video');

const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}


const videoClose = () => {
	const iframe = document.querySelectorAll('.iframe');
	iframe.forEach(item=>{
		item.classList.remove('show_rel')
		item.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
	})
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		const popupVideo = document.querySelector('#video');
		if (popupVideo.classList.contains('open')) {
			videoClose();
		};
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		};
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});

video.forEach((item,i)=>{
	item.addEventListener('click', event=>{
		const elem = document.getElementById(i);
		elem.classList.add('show_rel')
		elem.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
	});
});


(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();

;

// var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

const popupFormname = document.querySelectorAll('.popup__form-name');
const popupThanksTitle = document.querySelectorAll('.popup-thanks__title');



//FORMS
function forms(){
	//OPTION
	$.each($('.option_one.active'), function(index, val) {
		$(this).find('input').prop('checked', true);
	});
	$('.option_one').click(function(event) {
		if(!$(this).hasClass('disable')){
				var target = $(event.target);
			if (!target.is("a")){
				if($(this).hasClass('active') && $(this).hasClass('order') ){
					$(this).toggleClass('orderactive');
				}
    				$(this).parents('.options').find('.option_one').removeClass('active');
    				$(this).parents('.options').find('input').prop('checked', false);
					$(this).toggleClass('active');
                    $(this).find('input').prop('checked', true);

			}
		}
    });

    $.each($('.option_all'), function(index, val) {
        if($(this).find('input').prop('checked')==true){
            $(this).addClass('active');
        }
    });
    $('body').off('click','.option_all',function(event){});
    $('body').on('click','.option_all',function(event){
        if(!$(this).hasClass('disable')){
                var target = $(event.target);
            if (!target.is("a")){
                    $(this).toggleClass('active');
                if($(this).hasClass('active')){
                    $(this).find('input').prop('checked', true);
                }else{
                    $(this).find('input').prop('checked', false);
                }
            }
        }
    });
}
forms();


//VALIDATE FORMS
$('form button[type=submit]').click(function(){
	var er=0;
	var form=$(this).parents('form');
	var ms=form.data('ms');
	var nums=form.data('nums');
$.each(form.find('.req'), function(index, val) {
	er+=formValidate($(this));
});
if(er==0){
	removeFormError(form);
	if(ms!=null && ms!=''){
		showMessageByClass(ms, nums);
		return false;
	}
}else{
	return false;
}
});
function formValidate(input){
	var er=0;
	var form=input.parents('form');
	if(input.val()=='' || input.val()==input.attr('data-value')){
		er++;
		addError(input);
	}else{
		removeError(input);
	}
	return er;
}

function showMessageByClass(ms, nums){

    function popupThanks(ms) {

        const popupMassive = [...popupFormname];
        const resultInput = popupMassive.filter(item=> {
            return item.value !== '';
        });
        popupFormname.forEach(item=>{
            const name = `Спасибо!`;
            popupThanksTitle.forEach(item=>{
                item.textContent = name;
            })
        })
        resultInput.forEach(item=>{
            const name = `Спасибо, ${item.value}!`;
            popupThanksTitle.forEach(item=>{
                item.textContent = name;
            })
        })
        popupFormname.forEach(item=>{
            item.value = '';
        })
        const msPopup = document.getElementById(ms);
        popupOpen(msPopup);
        
    };
    if(nums == '4'){
        let th = $(".popup__fors");
        $.ajax({
            type: "POST",
			url: "https://zox.by/wp-content/themes/zox/mail.php",
            data: th.serialize()
        }).done(popupThanks(ms),
        setTimeout(function() {
            th.trigger("reset");
        }, 1000)
        );
    };
    if(nums == '3'){
        let th = $(".popup__forsm");
		$.ajax({
			type: "POST",
			url: "https://zox.by/wp-content/themes/zox/mail.php",
			data: th.serialize()
        }).done(popupThanks(ms),
        setTimeout(function() {
            th.trigger("reset");
        }, 1000)
        );
	};
	if(ms == 'video'){
		popupThanks(ms);
	};
	if(nums == '1'){
        let th = $(".popup__for_mail_1");
		$.ajax({
			type: "POST",
			url: "https://zox.by/wp-content/themes/zox/mail.php",
			data: th.serialize()
        }).done(popupThanks(ms),
        setTimeout(function() {
            th.trigger("reset");
        }, 1000)
        );
	};
	if(nums == '2'){
        let th = $(".popup__for_mail_2");
		$.ajax({
			type: "POST",
			url: "https://zox.by/wp-content/themes/zox/mail.php",
			data: th.serialize()
        }).done(popupThanks(ms),
        setTimeout(function() {
            th.trigger("reset");
        }, 1000)
        );
	};
		
	popupThanks(ms)
}


function addError(input){
	input.addClass('err');
}
function removeFormError(form){
form.find('.form__generalerror').hide().html('');
}
function removeError(input){
input.removeClass('err');
}

function maskclear(n){
if(n.val()==""){
	n.inputmask('remove');
	if(!n.hasClass('l')){
		n.val(n.attr('data-value'));
	}
	n.removeClass('focus');
	n.parent().removeClass('focus');
}
}

	//RANGE
	const range = document.querySelectorAll('.range');
	const range2 = document.querySelectorAll('.range_2');
	const range3 = document.querySelectorAll('.range_3');
	
	range.forEach(item=>{
		const rangeto = item.querySelector('.rangeto');
		const rangeControl = item.querySelector('.range_control');
		if($(rangeControl).length>0){
			$(rangeControl).slider({
				range: "min",
				min: 0,
				max: 3000,
				value: 500,
				slide: function( event, ui ){
					$(rangeto).val(ui.value);
				}
			});
			$(rangeto).val($(rangeControl).slider( "value"));
	
		}
	});
	range2.forEach(item=>{
		const rangeto = item.querySelector('.rangeto');
		const rangeControl = item.querySelector('.range_control');
		if($(rangeControl).length>0){
			$(rangeControl).slider({
				range: "min",
				min: 0,
				max: 300,
				value: 43,
				slide: function( event, ui ){
					$(rangeto).val(ui.value);
				}
			});
			$(rangeto).val($(rangeControl).slider( "value"));
	
		}
	});
	range3.forEach(item=>{
		const rangeto = item.querySelector('.rangeto');
		const rangeControl = item.querySelector('.range_control');
		if($(rangeControl).length>0){
			$(rangeControl).slider({
				range: "min",
				min: 0,
				max: 25,
				value: 4,
				slide: function( event, ui ){
					$(rangeto).val(ui.value);
				}
			});
			$(rangeto).val($(rangeControl).slider( "value"));
	
		}
	});

//====================================================================================================================================


$(".design-column__name").on('click', '.design-title', function() {
    $(".img-design").removeClass("show");
    $(".design-column__content-body").removeClass("show_rel");
    $(".no-design__block-imgs").removeClass("show");

    var newImage = $(this).index();
    if( newImage == 0){
        $(".img-column").addClass("img-index");
    };
    if( newImage == 1){
        $(".img-column").removeClass("img-index");
    }
    $(".img-design").eq(newImage).addClass("show");
    $(".design-column__content-body").eq(newImage).addClass("show_rel");
    $(".no-design__block-imgs").eq(newImage).addClass("show");

    $(".design-title").removeClass("design-title_active");
    $(this).addClass("design-title_active");
  });


//====================================================================================================================================

// tabs
$(document).ready(function() {
    $(".controls-steps-top__ul").on('click', 'li', function() {
      $(".main-content-steps-top__bg").removeClass("show_rel");
  
      var newImage = $(this).index();
  
      $(".main-content-steps-top__bg").eq(newImage).addClass("show_rel");
  
      $(".controls-steps-top__li").removeClass("controls-steps-top__li_active");
      $(this).addClass("controls-steps-top__li_active");
    });

    $(".controls-price__panel").on('click', '.controls-price__link', function() {
        $(".price-content").removeClass("show_rel");
    
        var newImage = $(this).index();
    
        $(".price-content").eq(newImage).addClass("show_rel");
    
        $(".controls-price__link").removeClass("controls-price__link_active");
        $(this).addClass("controls-price__link_active");
      });
// spoiler 
    $('.spoiler').click(function(event){
        $(this).toggleClass('spoiler_active').next().slideToggle(300);
    });
        $('.spoiler_small').click(function(event){
            if(window.matchMedia('(max-width: 767px)').matches){
            $(this).toggleClass('spoiler_active').next().slideToggle(300);
        }
        });
// accordion
    $('.accordion__item .accordion-spoiler').click(function(event){
        if($('.accordion__items').hasClass('accordion')){
            $('.accordion-spoiler').not($(this)).removeClass('accordion-spoiler_active');
            $('.accordion-spoiler_bottom').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('accordion-spoiler_active').next().slideToggle(300);
    });

  });

 

// selects 

const ItemSelect = document.querySelectorAll('.content-present-item-4__select');

ItemSelect.forEach(item=>{
    const ItemSelectTitle = item.querySelector('.content-present-item-4__select-title');
    // const ItemSelectInput = item.querySelector('input');
    const selectItem = item.querySelectorAll('.select-item');
    selectItem.forEach((itemSelect, index)=>{
        itemSelect.addEventListener('click',()=>{
            ItemSelectTitle.textContent = itemSelect.textContent;
            $(ItemSelectTitle).toggleClass('spoiler_active').next().slideToggle(300);
            if( item.classList.contains('kviz-3__select')){
                $(".kviz-3__img").removeClass("show_rel");
                $(".kviz-3__block").removeClass("show_rel");
                $(".kviz-3__img").eq(index).addClass("show_rel");
                $(".kviz-3__block").eq(index).addClass("show_rel");

            }
            // ItemSelectInput.value = itemSelect.textContent;
        })
    })
});


//====================================================================================================================================

// tabs questions-presents 
const presentItemRightBody = document.querySelectorAll('.present-item-right__body');
const presentItemLeftContent = document.querySelectorAll('.present-item-left__content');
const presentItemLefTLi = document.querySelectorAll('.present-item-left__li');
const presentItemLeftNumber = document.querySelector('.present-item-left__number-question');
const PresentButtonPrev = document.querySelector('.present-item-left_button_prev');
const PresentButtonNext = document.querySelector('.present-item-left_button_next');

let number = 0;
let lock = true;
const MaxNumber = presentItemLeftContent.length
const PresentSliderPrev = (number) => {
    if(number <= 1){
        PresentButtonPrev.classList.remove('show')
    };
    presentItemLefTLi.forEach((item,index)=>{
        if(index == number){
            item.classList.remove('present-item-left__li_active');
        }
    });
};

const PresentSliderNext = (number) => {
    if(number >= 1){
        PresentButtonPrev.classList.add('show')
    };
    presentItemLefTLi.forEach((item,index)=>{
        if(index == number){
            item.classList.add('present-item-left__li_active')
        }
    })
};

const PresentSliderActive = (number) => {

    $(".present-item-left__content").hide();
    $(".present-item-left__content").eq(number).fadeIn(1000);
    $(".present-item-right__body").hide();
    $(".present-item-right__body").eq(number).fadeIn({
        complete: function(){
          $(this).css("display", "flex");
        },
        duration: 1000
      });
    presentItemLeftNumber.textContent = `вопрос ${++number} из 6`
    number--
}

const SlideEnd = () => {
    $(".present-start").hide();
    $(".present-end").fadeIn(1000);
}

PresentButtonPrev.addEventListener('click', ()=>{
    if(lock == true){
    if(MaxNumber == number){
            number--;
        };
        lock = false
        PresentSliderPrev(number);
        number--;
        PresentSliderActive(number);
        setTimeout(()=>{
            lock = true
        }, 1000)
        
    };
});


PresentButtonNext.addEventListener('click', ()=>{
    if(lock == true){
    if(MaxNumber > number){
            number++;
            lock = false
            PresentSliderNext(number);
            PresentSliderActive(number);
            setTimeout(()=>{
                lock = true
            }, 1000)
        };
        if(MaxNumber == number){
            SlideEnd();
            return
        }
    };
    });
    
;
! function (t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Parallax = t()
    }
}(function () {
    return function t(e, i, n) {
        function o(r, a) {
            if (!i[r]) {
                if (!e[r]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(r, !0);
                    if (s) return s(r, !0);
                    var h = new Error("Cannot find module '" + r + "'");
                    throw h.code = "MODULE_NOT_FOUND", h
                }
                var u = i[r] = {
                    exports: {}
                };
                e[r][0].call(u.exports, function (t) {
                    var i = e[r][1][t];
                    return o(i || t)
                }, u, u.exports, t, e, i, n)
            }
            return i[r].exports
        }
        for (var s = "function" == typeof require && require, r = 0; r < n.length; r++) o(n[r]);
        return o
    }({
        1: [function (t, e, i) {
            "use strict";

            function n(t) {
                if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(t)
            }
            var o = Object.getOwnPropertySymbols,
                s = Object.prototype.hasOwnProperty,
                r = Object.prototype.propertyIsEnumerable;
            e.exports = function () {
                try {
                    if (!Object.assign) return !1;
                    var t = new String("abc");
                    if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                    for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
                    if ("0123456789" !== Object.getOwnPropertyNames(e).map(function (t) {
                            return e[t]
                        }).join("")) return !1;
                    var n = {};
                    return "abcdefghijklmnopqrst".split("").forEach(function (t) {
                        n[t] = t
                    }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                } catch (t) {
                    return !1
                }
            }() ? Object.assign : function (t, e) {
                for (var i, a, l = n(t), h = 1; h < arguments.length; h++) {
                    i = Object(arguments[h]);
                    for (var u in i) s.call(i, u) && (l[u] = i[u]);
                    if (o) {
                        a = o(i);
                        for (var c = 0; c < a.length; c++) r.call(i, a[c]) && (l[a[c]] = i[a[c]])
                    }
                }
                return l
            }
        }, {}],
        2: [function (t, e, i) {
            (function (t) {
                (function () {
                    var i, n, o, s, r, a;
                    "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function () {
                        return performance.now()
                    } : void 0 !== t && null !== t && t.hrtime ? (e.exports = function () {
                        return (i() - r) / 1e6
                    }, n = t.hrtime, s = (i = function () {
                        var t;
                        return 1e9 * (t = n())[0] + t[1]
                    })(), a = 1e9 * t.uptime(), r = s - a) : Date.now ? (e.exports = function () {
                        return Date.now() - o
                    }, o = Date.now()) : (e.exports = function () {
                        return (new Date).getTime() - o
                    }, o = (new Date).getTime())
                }).call(this)
            }).call(this, t("_process"))
        }, {
            _process: 3
        }],
        3: [function (t, e, i) {
            function n() {
                throw new Error("setTimeout has not been defined")
            }

            function o() {
                throw new Error("clearTimeout has not been defined")
            }

            function s(t) {
                if (c === setTimeout) return setTimeout(t, 0);
                if ((c === n || !c) && setTimeout) return c = setTimeout, setTimeout(t, 0);
                try {
                    return c(t, 0)
                } catch (e) {
                    try {
                        return c.call(null, t, 0)
                    } catch (e) {
                        return c.call(this, t, 0)
                    }
                }
            }

            function r(t) {
                if (d === clearTimeout) return clearTimeout(t);
                if ((d === o || !d) && clearTimeout) return d = clearTimeout, clearTimeout(t);
                try {
                    return d(t)
                } catch (e) {
                    try {
                        return d.call(null, t)
                    } catch (e) {
                        return d.call(this, t)
                    }
                }
            }

            function a() {
                v && p && (v = !1, p.length ? f = p.concat(f) : y = -1, f.length && l())
            }

            function l() {
                if (!v) {
                    var t = s(a);
                    v = !0;
                    for (var e = f.length; e;) {
                        for (p = f, f = []; ++y < e;) p && p[y].run();
                        y = -1, e = f.length
                    }
                    p = null, v = !1, r(t)
                }
            }

            function h(t, e) {
                this.fun = t, this.array = e
            }

            function u() {}
            var c, d, m = e.exports = {};
            ! function () {
                try {
                    c = "function" == typeof setTimeout ? setTimeout : n
                } catch (t) {
                    c = n
                }
                try {
                    d = "function" == typeof clearTimeout ? clearTimeout : o
                } catch (t) {
                    d = o
                }
            }();
            var p, f = [],
                v = !1,
                y = -1;
            m.nextTick = function (t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                f.push(new h(t, e)), 1 !== f.length || v || s(l)
            }, h.prototype.run = function () {
                this.fun.apply(null, this.array)
            }, m.title = "browser", m.browser = !0, m.env = {}, m.argv = [], m.version = "", m.versions = {}, m.on = u, m.addListener = u, m.once = u, m.off = u, m.removeListener = u, m.removeAllListeners = u, m.emit = u, m.prependListener = u, m.prependOnceListener = u, m.listeners = function (t) {
                return []
            }, m.binding = function (t) {
                throw new Error("process.binding is not supported")
            }, m.cwd = function () {
                return "/"
            }, m.chdir = function (t) {
                throw new Error("process.chdir is not supported")
            }, m.umask = function () {
                return 0
            }
        }, {}],
        4: [function (t, e, i) {
            (function (i) {
                for (var n = t("performance-now"), o = "undefined" == typeof window ? i : window, s = ["moz", "webkit"], r = "AnimationFrame", a = o["request" + r], l = o["cancel" + r] || o["cancelRequest" + r], h = 0; !a && h < s.length; h++) a = o[s[h] + "Request" + r], l = o[s[h] + "Cancel" + r] || o[s[h] + "CancelRequest" + r];
                if (!a || !l) {
                    var u = 0,
                        c = 0,
                        d = [];
                    a = function (t) {
                        if (0 === d.length) {
                            var e = n(),
                                i = Math.max(0, 1e3 / 60 - (e - u));
                            u = i + e, setTimeout(function () {
                                var t = d.slice(0);
                                d.length = 0;
                                for (var e = 0; e < t.length; e++)
                                    if (!t[e].cancelled) try {
                                        t[e].callback(u)
                                    } catch (t) {
                                        setTimeout(function () {
                                            throw t
                                        }, 0)
                                    }
                            }, Math.round(i))
                        }
                        return d.push({
                            handle: ++c,
                            callback: t,
                            cancelled: !1
                        }), c
                    }, l = function (t) {
                        for (var e = 0; e < d.length; e++) d[e].handle === t && (d[e].cancelled = !0)
                    }
                }
                e.exports = function (t) {
                    return a.call(o, t)
                }, e.exports.cancel = function () {
                    l.apply(o, arguments)
                }, e.exports.polyfill = function () {
                    o.requestAnimationFrame = a, o.cancelAnimationFrame = l
                }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "performance-now": 2
        }],
        5: [function (t, e, i) {
            "use strict";

            function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            var o = function () {
                    function t(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function (e, i, n) {
                        return i && t(e.prototype, i), n && t(e, n), e
                    }
                }(),
                s = t("raf"),
                r = t("object-assign"),
                a = {
                    propertyCache: {},
                    vendors: [null, ["-webkit-", "webkit"],
                        ["-moz-", "Moz"],
                        ["-o-", "O"],
                        ["-ms-", "ms"]
                    ],
                    clamp: function (t, e, i) {
                        return e < i ? t < e ? e : t > i ? i : t : t < i ? i : t > e ? e : t
                    },
                    data: function (t, e) {
                        return a.deserialize(t.getAttribute("data-" + e))
                    },
                    deserialize: function (t) {
                        return "true" === t || "false" !== t && ("null" === t ? null : !isNaN(parseFloat(t)) && isFinite(t) ? parseFloat(t) : t)
                    },
                    camelCase: function (t) {
                        return t.replace(/-+(.)?/g, function (t, e) {
                            return e ? e.toUpperCase() : ""
                        })
                    },
                    accelerate: function (t) {
                        a.css(t, "transform", "translate3d(0,0,0) rotate(0.0001deg)"), a.css(t, "transform-style", "preserve-3d"), a.css(t, "backface-visibility", "hidden")
                    },
                    transformSupport: function (t) {
                        for (var e = document.createElement("div"), i = !1, n = null, o = !1, s = null, r = null, l = 0, h = a.vendors.length; l < h; l++)
                            if (null !== a.vendors[l] ? (s = a.vendors[l][0] + "transform", r = a.vendors[l][1] + "Transform") : (s = "transform", r = "transform"), void 0 !== e.style[r]) {
                                i = !0;
                                break
                            } switch (t) {
                            case "2D":
                                o = i;
                                break;
                            case "3D":
                                if (i) {
                                    var u = document.body || document.createElement("body"),
                                        c = document.documentElement,
                                        d = c.style.overflow,
                                        m = !1;
                                    document.body || (m = !0, c.style.overflow = "hidden", c.appendChild(u), u.style.overflow = "hidden", u.style.background = ""), u.appendChild(e), e.style[r] = "translate3d(1px,1px,1px)", o = void 0 !== (n = window.getComputedStyle(e).getPropertyValue(s)) && n.length > 0 && "none" !== n, c.style.overflow = d, u.removeChild(e), m && (u.removeAttribute("style"), u.parentNode.removeChild(u))
                                }
                        }
                        return o
                    },
                    css: function (t, e, i) {
                        var n = a.propertyCache[e];
                        if (!n)
                            for (var o = 0, s = a.vendors.length; o < s; o++)
                                if (n = null !== a.vendors[o] ? a.camelCase(a.vendors[o][1] + "-" + e) : e, void 0 !== t.style[n]) {
                                    a.propertyCache[e] = n;
                                    break
                                } t.style[n] = i
                    }
                },
                l = {
                    relativeInput: !1,
                    clipRelativeInput: !1,
                    inputElement: null,
                    hoverOnly: !1,
                    calibrationThreshold: 100,
                    calibrationDelay: 500,
                    supportDelay: 500,
                    calibrateX: !1,
                    calibrateY: !0,
                    invertX: !0,
                    invertY: !0,
                    limitX: !1,
                    limitY: !1,
                    scalarX: 10,
                    scalarY: 10,
                    frictionX: .1,
                    frictionY: .1,
                    originX: .5,
                    originY: .5,
                    pointerEvents: !1,
                    precision: 1,
                    onReady: null,
                    selector: null
                },
                h = function () {
                    function t(e, i) {
                        n(this, t), this.element = e;
                        var o = {
                            calibrateX: a.data(this.element, "calibrate-x"),
                            calibrateY: a.data(this.element, "calibrate-y"),
                            invertX: a.data(this.element, "invert-x"),
                            invertY: a.data(this.element, "invert-y"),
                            limitX: a.data(this.element, "limit-x"),
                            limitY: a.data(this.element, "limit-y"),
                            scalarX: a.data(this.element, "scalar-x"),
                            scalarY: a.data(this.element, "scalar-y"),
                            frictionX: a.data(this.element, "friction-x"),
                            frictionY: a.data(this.element, "friction-y"),
                            originX: a.data(this.element, "origin-x"),
                            originY: a.data(this.element, "origin-y"),
                            pointerEvents: a.data(this.element, "pointer-events"),
                            precision: a.data(this.element, "precision"),
                            relativeInput: a.data(this.element, "relative-input"),
                            clipRelativeInput: a.data(this.element, "clip-relative-input"),
                            hoverOnly: a.data(this.element, "hover-only"),
                            inputElement: document.querySelector(a.data(this.element, "input-element")),
                            selector: a.data(this.element, "selector")
                        };
                        for (var s in o) null === o[s] && delete o[s];
                        r(this, l, o, i), this.inputElement || (this.inputElement = this.element), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depthsX = [], this.depthsY = [], this.raf = null, this.bounds = null, this.elementPositionX = 0, this.elementPositionY = 0, this.elementWidth = 0, this.elementHeight = 0, this.elementCenterX = 0, this.elementCenterY = 0, this.elementRangeX = 0, this.elementRangeY = 0, this.calibrationX = 0, this.calibrationY = 0, this.inputX = 0, this.inputY = 0, this.motionX = 0, this.motionY = 0, this.velocityX = 0, this.velocityY = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onDeviceMotion = this.onDeviceMotion.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onMotionTimer = this.onMotionTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.windowWidth = null, this.windowHeight = null, this.windowCenterX = null, this.windowCenterY = null, this.windowRadiusX = null, this.windowRadiusY = null, this.portrait = !1, this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), this.motionSupport = !!window.DeviceMotionEvent && !this.desktop, this.orientationSupport = !!window.DeviceOrientationEvent && !this.desktop, this.orientationStatus = 0, this.motionStatus = 0, this.initialise()
                    }
                    return o(t, [{
                        key: "initialise",
                        value: function () {
                            void 0 === this.transform2DSupport && (this.transform2DSupport = a.transformSupport("2D"), this.transform3DSupport = a.transformSupport("3D")), this.transform3DSupport && a.accelerate(this.element), "static" === window.getComputedStyle(this.element).getPropertyValue("position") && (this.element.style.position = "relative"), this.pointerEvents || (this.element.style.pointerEvents = "none"), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay)
                        }
                    }, {
                        key: "doReadyCallback",
                        value: function () {
                            this.onReady && this.onReady()
                        }
                    }, {
                        key: "updateLayers",
                        value: function () {
                            this.selector ? this.layers = this.element.querySelectorAll(this.selector) : this.layers = this.element.children, this.layers.length || console.warn("ParallaxJS: Your scene does not have any layers."), this.depthsX = [], this.depthsY = [];
                            for (var t = 0; t < this.layers.length; t++) {
                                var e = this.layers[t];
                                this.transform3DSupport && a.accelerate(e), e.style.position = t ? "absolute" : "relative", e.style.display = "block", e.style.left = 0, e.style.top = 0;
                                var i = a.data(e, "depth") || 0;
                                this.depthsX.push(a.data(e, "depth-x") || i), this.depthsY.push(a.data(e, "depth-y") || i)
                            }
                        }
                    }, {
                        key: "updateDimensions",
                        value: function () {
                            this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight, this.windowCenterX = this.windowWidth * this.originX, this.windowCenterY = this.windowHeight * this.originY, this.windowRadiusX = Math.max(this.windowCenterX, this.windowWidth - this.windowCenterX), this.windowRadiusY = Math.max(this.windowCenterY, this.windowHeight - this.windowCenterY)
                        }
                    }, {
                        key: "updateBounds",
                        value: function () {
                            this.bounds = this.inputElement.getBoundingClientRect(), this.elementPositionX = this.bounds.left, this.elementPositionY = this.bounds.top, this.elementWidth = this.bounds.width, this.elementHeight = this.bounds.height, this.elementCenterX = this.elementWidth * this.originX, this.elementCenterY = this.elementHeight * this.originY, this.elementRangeX = Math.max(this.elementCenterX, this.elementWidth - this.elementCenterX), this.elementRangeY = Math.max(this.elementCenterY, this.elementHeight - this.elementCenterY)
                        }
                    }, {
                        key: "queueCalibration",
                        value: function (t) {
                            clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t)
                        }
                    }, {
                        key: "enable",
                        value: function () {
                            this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = !1, window.addEventListener("deviceorientation", this.onDeviceOrientation), this.detectionTimer = setTimeout(this.onOrientationTimer, this.supportDelay)) : this.motionSupport ? (this.portrait = !1, window.addEventListener("devicemotion", this.onDeviceMotion), this.detectionTimer = setTimeout(this.onMotionTimer, this.supportDelay)) : (this.calibrationX = 0, this.calibrationY = 0, this.portrait = !1, window.addEventListener("mousemove", this.onMouseMove), this.doReadyCallback()), window.addEventListener("resize", this.onWindowResize), this.raf = s(this.onAnimationFrame))
                        }
                    }, {
                        key: "disable",
                        value: function () {
                            this.enabled && (this.enabled = !1, this.orientationSupport ? window.removeEventListener("deviceorientation", this.onDeviceOrientation) : this.motionSupport ? window.removeEventListener("devicemotion", this.onDeviceMotion) : window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("resize", this.onWindowResize), s.cancel(this.raf))
                        }
                    }, {
                        key: "calibrate",
                        value: function (t, e) {
                            this.calibrateX = void 0 === t ? this.calibrateX : t, this.calibrateY = void 0 === e ? this.calibrateY : e
                        }
                    }, {
                        key: "invert",
                        value: function (t, e) {
                            this.invertX = void 0 === t ? this.invertX : t, this.invertY = void 0 === e ? this.invertY : e
                        }
                    }, {
                        key: "friction",
                        value: function (t, e) {
                            this.frictionX = void 0 === t ? this.frictionX : t, this.frictionY = void 0 === e ? this.frictionY : e
                        }
                    }, {
                        key: "scalar",
                        value: function (t, e) {
                            this.scalarX = void 0 === t ? this.scalarX : t, this.scalarY = void 0 === e ? this.scalarY : e
                        }
                    }, {
                        key: "limit",
                        value: function (t, e) {
                            this.limitX = void 0 === t ? this.limitX : t, this.limitY = void 0 === e ? this.limitY : e
                        }
                    }, {
                        key: "origin",
                        value: function (t, e) {
                            this.originX = void 0 === t ? this.originX : t, this.originY = void 0 === e ? this.originY : e
                        }
                    }, {
                        key: "setInputElement",
                        value: function (t) {
                            this.inputElement = t, this.updateDimensions()
                        }
                    }, {
                        key: "setPosition",
                        value: function (t, e, i) {
                            e = e.toFixed(this.precision) + "px", i = i.toFixed(this.precision) + "px", this.transform3DSupport ? a.css(t, "transform", "translate3d(" + e + "," + i + ",0)") : this.transform2DSupport ? a.css(t, "transform", "translate(" + e + "," + i + ")") : (t.style.left = e, t.style.top = i)
                        }
                    }, {
                        key: "onOrientationTimer",
                        value: function () {
                            this.orientationSupport && 0 === this.orientationStatus ? (this.disable(), this.orientationSupport = !1, this.enable()) : this.doReadyCallback()
                        }
                    }, {
                        key: "onMotionTimer",
                        value: function () {
                            this.motionSupport && 0 === this.motionStatus ? (this.disable(), this.motionSupport = !1, this.enable()) : this.doReadyCallback()
                        }
                    }, {
                        key: "onCalibrationTimer",
                        value: function () {
                            this.calibrationFlag = !0
                        }
                    }, {
                        key: "onWindowResize",
                        value: function () {
                            this.updateDimensions()
                        }
                    }, {
                        key: "onAnimationFrame",
                        value: function () {
                            this.updateBounds();
                            var t = this.inputX - this.calibrationX,
                                e = this.inputY - this.calibrationY;
                            (Math.abs(t) > this.calibrationThreshold || Math.abs(e) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.motionX = this.calibrateX ? e : this.inputY, this.motionY = this.calibrateY ? t : this.inputX) : (this.motionX = this.calibrateX ? t : this.inputX, this.motionY = this.calibrateY ? e : this.inputY), this.motionX *= this.elementWidth * (this.scalarX / 100), this.motionY *= this.elementHeight * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.motionX = a.clamp(this.motionX, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.motionY = a.clamp(this.motionY, -this.limitY, this.limitY)), this.velocityX += (this.motionX - this.velocityX) * this.frictionX, this.velocityY += (this.motionY - this.velocityY) * this.frictionY;
                            for (var i = 0; i < this.layers.length; i++) {
                                var n = this.layers[i],
                                    o = this.depthsX[i],
                                    r = this.depthsY[i],
                                    l = this.velocityX * (o * (this.invertX ? -1 : 1)),
                                    h = this.velocityY * (r * (this.invertY ? -1 : 1));
                                this.setPosition(n, l, h)
                            }
                            this.raf = s(this.onAnimationFrame)
                        }
                    }, {
                        key: "rotate",
                        value: function (t, e) {
                            var i = (t || 0) / 30,
                                n = (e || 0) / 30,
                                o = this.windowHeight > this.windowWidth;
                            this.portrait !== o && (this.portrait = o, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.calibrationX = i, this.calibrationY = n), this.inputX = i, this.inputY = n
                        }
                    }, {
                        key: "onDeviceOrientation",
                        value: function (t) {
                            var e = t.beta,
                                i = t.gamma;
                            null !== e && null !== i && (this.orientationStatus = 1, this.rotate(e, i))
                        }
                    }, {
                        key: "onDeviceMotion",
                        value: function (t) {
                            var e = t.rotationRate.beta,
                                i = t.rotationRate.gamma;
                            null !== e && null !== i && (this.motionStatus = 1, this.rotate(e, i))
                        }
                    }, {
                        key: "onMouseMove",
                        value: function (t) {
                            var e = t.clientX,
                                i = t.clientY;
                            if (this.hoverOnly && (e < this.elementPositionX || e > this.elementPositionX + this.elementWidth || i < this.elementPositionY || i > this.elementPositionY + this.elementHeight)) return this.inputX = 0, void(this.inputY = 0);
                            this.relativeInput ? (this.clipRelativeInput && (e = Math.max(e, this.elementPositionX), e = Math.min(e, this.elementPositionX + this.elementWidth), i = Math.max(i, this.elementPositionY), i = Math.min(i, this.elementPositionY + this.elementHeight)), this.elementRangeX && this.elementRangeY && (this.inputX = (e - this.elementPositionX - this.elementCenterX) / this.elementRangeX, this.inputY = (i - this.elementPositionY - this.elementCenterY) / this.elementRangeY)) : this.windowRadiusX && this.windowRadiusY && (this.inputX = (e - this.windowCenterX) / this.windowRadiusX, this.inputY = (i - this.windowCenterY) / this.windowRadiusY)
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            this.disable(), clearTimeout(this.calibrationTimer), clearTimeout(this.detectionTimer), this.element.removeAttribute("style");
                            for (var t = 0; t < this.layers.length; t++) this.layers[t].removeAttribute("style");
                            delete this.element, delete this.layers
                        }
                    }, {
                        key: "version",
                        value: function () {
                            return "3.1.0"
                        }
                    }]), t
                }();
            e.exports = h
        }, {
            "object-assign": 1,
            raf: 4
        }]
    }, {}, [5])(5)
});
//# sourceMappingURL=parallax.min.js.map;
! function (i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
}(function (i) {
    "use strict";
    var e = window.Slick || {};
    (e = function () {
        var e = 0;
        return function (t, o) {
            var s, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(t),
                appendDots: i(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (e, t) {
                    return i('<button type="button" />').text(t + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
        }
    }()).prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
        var s = this;
        if ("boolean" == typeof t) o = t, t = null;
        else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e)
        }), s.$slidesCache = s.$slides, s.reinit()
    }, e.prototype.animateHeight = function () {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.animate({
                height: e
            }, i.options.speed)
        }
    }, e.prototype.animateSlide = function (e, t) {
        var o = {},
            s = this;
        s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
            left: e
        }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
            top: e
        }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({
            animStart: s.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function (i) {
                i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o))
            },
            complete: function () {
                t && t.call()
            }
        })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
            s.disableTransition(), t.call()
        }, s.options.speed))
    }, e.prototype.getNavTarget = function () {
        var e = this,
            t = e.options.asNavFor;
        return t && null !== t && (t = i(t).not(e.$slider)), t
    }, e.prototype.asNavFor = function (e) {
        var t = this.getNavTarget();
        null !== t && "object" == typeof t && t.each(function () {
            var t = i(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0)
        })
    }, e.prototype.applyTransition = function (i) {
        var e = this,
            t = {};
        !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.autoPlay = function () {
        var i = this;
        i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function () {
        var i = this;
        i.autoPlayTimer && clearInterval(i.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function () {
        var i = this,
            e = i.currentSlide + i.options.slidesToScroll;
        i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e))
    }, e.prototype.buildArrows = function () {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, e.prototype.buildDots = function () {
        var e, t, o = this;
        if (!0 === o.options.dots) {
            for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
            o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
        }
    }, e.prototype.buildOut = function () {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function () {
        var i, e, t, o, s, n, r, l = this;
        if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
            for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
                var d = document.createElement("div");
                for (e = 0; e < l.options.rows; e++) {
                    var a = document.createElement("div");
                    for (t = 0; t < l.options.slidesPerRow; t++) {
                        var c = i * r + (e * l.options.slidesPerRow + t);
                        n.get(c) && a.appendChild(n.get(c))
                    }
                    d.appendChild(a)
                }
                o.appendChild(d)
            }
            l.$slider.empty().append(o), l.$slider.children().children().children().css({
                width: 100 / l.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, e.prototype.checkResponsive = function (e, t) {
        var o, s, n, r = this,
            l = !1,
            d = r.$slider.width(),
            a = window.innerWidth || i(window).width();
        if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            s = null;
            for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
            null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l])
        }
    }, e.prototype.changeSlide = function (e, t) {
        var o, s, n, r = this,
            l = i(e.currentTarget);
        switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
            case "previous":
                s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
                break;
            case "next":
                s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
                break;
            case "index":
                var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
                break;
            default:
                return
        }
    }, e.prototype.checkNavigable = function (i) {
        var e, t;
        if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];
        else
            for (var o in e) {
                if (i < e[o]) {
                    i = t;
                    break
                }
                t = e[o]
            }
        return i
    }, e.prototype.cleanUpEvents = function () {
        var e = this;
        e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpSlideEvents = function () {
        var e = this;
        e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }, e.prototype.cleanUpRows = function () {
        var i, e = this;
        e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i))
    }, e.prototype.clickHandler = function (i) {
        !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
    }, e.prototype.destroy = function (e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            i(this).attr("style", i(this).data("originalStyling"))
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
    }, e.prototype.disableTransition = function (i) {
        var e = this,
            t = {};
        t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.fadeSlide = function (i, e) {
        var t = this;
        !1 === t.cssTransitions ? (t.$slides.eq(i).css({
            zIndex: t.options.zIndex
        }), t.$slides.eq(i).animate({
            opacity: 1
        }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
            opacity: 1,
            zIndex: t.options.zIndex
        }), e && setTimeout(function () {
            t.disableTransition(i), e.call()
        }, t.options.speed))
    }, e.prototype.fadeSlideOut = function (i) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(i).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
        var e = this;
        null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.focusHandler = function () {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
            t.stopImmediatePropagation();
            var o = i(this);
            setTimeout(function () {
                e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay())
            }, 0)
        })
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
        return this.currentSlide
    }, e.prototype.getDotCount = function () {
        var i = this,
            e = 0,
            t = 0,
            o = 0;
        if (!0 === i.options.infinite)
            if (i.slideCount <= i.options.slidesToShow) ++o;
            else
                for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else if (!0 === i.options.centerMode) o = i.slideCount;
        else if (i.options.asNavFor)
            for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
        return o - 1
    }, e.prototype.getLeft = function (i) {
        var e, t, o, s, n = this,
            r = 0;
        return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
        return this.options[i]
    }, e.prototype.getNavigableIndexes = function () {
        var i, e = this,
            t = 0,
            o = 0,
            s = [];
        for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return s
    }, e.prototype.getSlick = function () {
        return this
    }, e.prototype.getSlideCount = function () {
        var e, t, o = this;
        return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
            if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1
        }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(i)
            }
        }, e)
    }, e.prototype.init = function (e) {
        var t = this;
        i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
    }, e.prototype.initADA = function () {
        var e = this,
            t = Math.ceil(e.slideCount / e.options.slidesToShow),
            o = e.getNavigableIndexes().filter(function (i) {
                return i >= 0 && i < e.slideCount
            });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
            var s = o.indexOf(t);
            i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1
            }), -1 !== s && i(this).attr({
                "aria-describedby": "slick-slide-control" + e.instanceUid + s
            })
        }), e.$dots.attr("role", "tablist").find("li").each(function (s) {
            var n = o[s];
            i(this).attr({
                role: "presentation"
            }), i(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + s,
                "aria-controls": "slick-slide" + e.instanceUid + n,
                "aria-label": s + 1 + " of " + t,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(e.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
        e.activateADA()
    }, e.prototype.initArrowEvents = function () {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)))
    }, e.prototype.initDotEvents = function () {
        var e = this;
        !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }, e.prototype.initSlideEvents = function () {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
    }, e.prototype.initializeEvents = function () {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition)
    }, e.prototype.initUI = function () {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
    }, e.prototype.keyHandler = function (i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }))
    }, e.prototype.lazyLoad = function () {
        function e(e) {
            i("img[data-lazy]", e).each(function () {
                var e = i(this),
                    t = i(this).attr("data-lazy"),
                    o = i(this).attr("data-srcset"),
                    s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
                    r = document.createElement("img");
                r.onload = function () {
                    e.animate({
                        opacity: 0
                    }, 100, function () {
                        o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function () {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), n.$slider.trigger("lazyLoaded", [n, e, t])
                    })
                }, r.onerror = function () {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t])
                }, r.src = t
            })
        }
        var t, o, s, n = this;
        if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad)
            for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
        e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
    }, e.prototype.loadSlider = function () {
        var i = this;
        i.setPosition(), i.$slideTrack.css({
            opacity: 1
        }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function () {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, e.prototype.orientationChange = function () {
        var i = this;
        i.checkResponsive(), i.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function () {
        var i = this;
        i.autoPlayClear(), i.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function () {
        var i = this;
        i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
    }, e.prototype.postSlide = function (e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
    }, e.prototype.prev = e.prototype.slickPrev = function () {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, e.prototype.preventDefault = function (i) {
        i.preventDefault()
    }, e.prototype.progressiveLazyLoad = function (e) {
        e = e || 1;
        var t, o, s, n, r, l = this,
            d = i("img[data-lazy]", l.$slider);
        d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad()
        }, r.onerror = function () {
            e < 3 ? setTimeout(function () {
                l.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad())
        }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
    }, e.prototype.refresh = function (e) {
        var t, o, s = this;
        o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
            currentSlide: t
        }), s.init(), e || s.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1)
    }, e.prototype.registerBreakpoints = function () {
        var e, t, o, s = this,
            n = s.options.responsive || null;
        if ("array" === i.type(n) && n.length) {
            s.respondTo = s.options.respondTo || "window";
            for (e in n)
                if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
                    for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
                    s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings
                } s.breakpoints.sort(function (i, e) {
                return s.options.mobileFirst ? i - e : e - i
            })
        }
    }, e.prototype.reinit = function () {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, e.prototype.resize = function () {
        var e = this;
        i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
            e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
        var o = this;
        if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
        o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
    }, e.prototype.setCSS = function (i) {
        var e, t, o = this,
            s = {};
        !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)))
    }, e.prototype.setDimensions = function () {
        var i = this;
        !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
            padding: "0px " + i.options.centerPadding
        }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
            padding: i.options.centerPadding + " 0px"
        })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
        var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
        !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
    }, e.prototype.setFade = function () {
        var e, t = this;
        t.$slides.each(function (o, s) {
            e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            }) : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            })
        }), t.$slides.eq(t.currentSlide).css({
            zIndex: t.options.zIndex - 1,
            opacity: 1
        })
    }, e.prototype.setHeight = function () {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.css("height", e)
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function () {
        var e, t, o, s, n, r = this,
            l = !1;
        if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;
        else if ("multiple" === n) i.each(o, function (i, e) {
            r.options[i] = e
        });
        else if ("responsive" === n)
            for (t in s)
                if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];
                else {
                    for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
                    r.options.responsive.push(s[t])
                } l && (r.unload(), r.reinit())
    }, e.prototype.setPosition = function () {
        var i = this;
        i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
    }, e.prototype.setProps = function () {
        var i = this,
            e = document.body.style;
        i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
    }, e.prototype.setSlideClasses = function (i) {
        var e, t, o, s, n = this;
        if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
            var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")
        } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
    }, e.prototype.setupInfinite = function () {
        var e, t, o, s = this;
        if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
            for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                i(this).attr("id", "")
            })
        }
    }, e.prototype.interrupt = function (i) {
        var e = this;
        i || e.autoPlay(), e.interrupted = i
    }, e.prototype.selectHandler = function (e) {
        var t = this,
            o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
            s = parseInt(o.attr("data-slick-index"));
        s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s)
    }, e.prototype.slideHandler = function (i, e, t) {
        var o, s, n, r, l, d = null,
            a = this;
        if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i))
            if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
                a.postSlide(o)
            }) : a.postSlide(o));
            else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
            a.postSlide(o)
        }) : a.postSlide(o));
        else {
            if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
                a.postSlide(s)
            })) : a.postSlide(s), void a.animateHeight();
            !0 !== t ? a.animateSlide(d, function () {
                a.postSlide(s)
            }) : a.postSlide(s)
        }
    }, e.prototype.startLoad = function () {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function () {
        var i, e, t, o, s = this;
        return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
    }, e.prototype.swipeEnd = function (i) {
        var e, t, o = this;
        if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
        if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (t = o.swipeDirection()) {
                case "left":
                case "down":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
            }
            "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
    }, e.prototype.swipeHandler = function (i) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
            case "start":
                e.swipeStart(i);
                break;
            case "move":
                e.swipeMove(i);
                break;
            case "end":
                e.swipeEnd(i)
        }
    }, e.prototype.swipeMove = function (i) {
        var e, t, o, s, n, r, l = this;
        return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))))
    }, e.prototype.swipeStart = function (i) {
        var e, t = this;
        if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
        void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
        var i = this;
        null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
    }, e.prototype.unload = function () {
        var e = this;
        i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function (i) {
        var e = this;
        e.$slider.trigger("unslick", [e, i]), e.destroy()
    }, e.prototype.updateArrows = function () {
        var i = this;
        Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function () {
        var i = this;
        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
    }, e.prototype.visibility = function () {
        var i = this;
        i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
    }, i.fn.slick = function () {
        var i, t, o = this,
            s = arguments[0],
            n = Array.prototype.slice.call(arguments, 1),
            r = o.length;
        for (i = 0; i < r; i++)
            if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
        return o
    }
});;
(function exportInstafeed(root, factory) {
    if (typeof define === 'function' && define.amd) {
      define([], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
      module.exports = factory();
    } else {
      root.Instafeed = factory();
    }
  }(this, function defineInstafeed() {
    function assert(val, msg) {
      if (!val) {
        throw new Error(msg);
      }
    }
  
    function Instafeed(options) {
      assert(!options || typeof options === 'object', 'options must be an object, got ' + options + ' ('+ typeof options +')');
  
      // default options
      var opts = {
        accessToken: null,
        accessTokenTimeout: 10000,
        after: null,
        apiTimeout: 10000,
        before: null,
        debug: false,
        error: null,
        filter: null,
        limit: null,
        mock: false,
        render: null,
        sort: null,
        success: null,
        target: 'instafeed',
        template: '<a href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a>',
        templateBoundaries: ['{{','}}'],
        transform: null
      };
  
      // state holder
      var state = {
        running: false
      };
  
      // copy options over defaults
      if (options) {
        for (var optKey in opts) {
          if (typeof options[optKey] !== 'undefined') {
            opts[optKey] = options[optKey];
          }
        }
      }
  
      // validate options
      assert(typeof opts.target === 'string' || typeof opts.target === 'object', 'target must be a string or DOM node, got ' + opts.target + ' ('+ typeof opts.target +')');
      assert(typeof opts.accessToken === 'string' || typeof opts.accessToken === 'function', 'accessToken must be a string or function, got ' + opts.accessToken + ' ('+ typeof opts.accessToken +')');
      assert(typeof opts.accessTokenTimeout === 'number', 'accessTokenTimeout must be a number, got '+ opts.accessTokenTimeout + ' ('+ typeof opts.accessTokenTimeout +')');
      assert(typeof opts.apiTimeout === 'number', 'apiTimeout must be a number, got '+ opts.apiTimeout + ' ('+ typeof opts.apiTimeout +')');
      assert(typeof opts.debug === 'boolean', 'debug must be true or false, got ' + opts.debug + ' ('+ typeof opts.debug +')');
      assert(typeof opts.mock === 'boolean', 'mock must be true or false, got ' + opts.mock + ' ('+ typeof opts.mock +')');
      assert(typeof opts.templateBoundaries === 'object' && opts.templateBoundaries.length === 2 && typeof opts.templateBoundaries[0] === 'string' && typeof opts.templateBoundaries[1] === 'string', 'templateBoundaries must be an array of 2 strings, got ' + opts.templateBoundaries + ' ('+ typeof opts.templateBoundaries +')');
      assert(!opts.template || typeof opts.template === 'string', 'template must null or string, got ' + opts.template + ' ('+ typeof opts.template +')');
      assert(!opts.error || typeof opts.error === 'function', 'error must be null or function, got ' + opts.error + ' ('+ typeof opts.error +')');
      assert(!opts.before || typeof opts.before === 'function', 'before must be null or function, got ' + opts.before + ' ('+ typeof opts.before +')');
      assert(!opts.after || typeof opts.after === 'function', 'after must be null or function, got ' + opts.after + ' ('+ typeof opts.after +')');
      assert(!opts.success || typeof opts.success === 'function', 'success must be null or function, got ' + opts.success + ' ('+ typeof opts.success +')');
      assert(!opts.filter || typeof opts.filter === 'function', 'filter must be null or function, got ' + opts.filter + ' ('+ typeof opts.filter +')');
      assert(!opts.transform || typeof opts.transform === 'function', 'transform must be null or function, got ' + opts.transform + ' ('+ typeof opts.transform +')');
      assert(!opts.sort || typeof opts.sort === 'function', 'sort must be null or function, got ' + opts.sort + ' ('+ typeof opts.sort +')');
      assert(!opts.render || typeof opts.render === 'function', 'render must be null or function, got ' + opts.render + ' ('+ typeof opts.render +')');
      assert(!opts.limit || typeof opts.limit === 'number', 'limit must be null or number, got ' + opts.limit + ' ('+ typeof opts.limit +')');
  
      // set instance info
      this._state = state;
      this._options = opts;
    }
  
    Instafeed.prototype.run = function run() {
      var scope = this;
      var node = null;
      var url = null;
      var items = null;
      var html = null;
  
      this._debug('run', 'options', this._options);
      this._debug('run', 'state', this._state);
  
      // prevent re-entry
      if (this._state.running) {
        this._debug('run', 'already running, skipping');
        return false;
      }
  
      // set as running
      this._start();
  
      // get dom node
      this._debug('run', 'getting dom node');
      if (typeof this._options.target === 'string') {
        node = document.getElementById(this._options.target);
      } else {
        node = this._options.target;
      }
      if (!node) {
        this._fail(new Error('no element found with ID ' + this._options.target));
        return false;
      }
      this._debug('run', 'got dom node', node);
  
      // get access token
      this._debug('run', 'getting access token');
      this._getAccessToken(function onTokenReceived(err, token) {
        if (err) {
          scope._debug('onTokenReceived', 'error', err);
          scope._fail(new Error('error getting access token: ' + err.message));
          return;
        }
  
        url = 'https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token='+ token;
        scope._debug('onTokenReceived', 'request url', url);
  
        // make network request
        scope._makeApiRequest(url, function onResponseReceived(err, data) {
          if (err) {
            scope._debug('onResponseReceived', 'error', err);
            scope._fail(new Error('api request error: ' + err.message));
            return;
          }
          scope._debug('onResponseReceived', 'data', data);
          scope._success(data);
  
          try {
            items = scope._processData(data);
            scope._debug('onResponseReceived', 'processed data', items);
          } catch (processErr) {
            scope._fail(processErr);
            return;
          }
  
          if (scope._options.mock) {
            scope._debug('onResponseReceived', 'mock enabled, skipping render');
          } else {
            try {
              html = scope._renderData(items);
              scope._debug('onResponseReceived', 'html content', html);
            } catch (renderErr) {
              scope._fail(renderErr);
              return;
            }
            node.innerHTML = html;
          }
  
          scope._finish();
        });
      });
  
      return true;
    };
  
    Instafeed.prototype._processData = function processData(data) {
      var hasTransform = (typeof this._options.transform === 'function');
      var hasFilter = (typeof this._options.filter === 'function');
      var hasSort = (typeof this._options.sort === 'function');
      var hasLimit = (typeof this._options.limit === 'number');
      var transformedFiltered = [];
      var limitDelta = null;
      var dataItem = null;
      var transformedItem = null;
      var filterResult = null;
  
      this._debug('processData', 'hasFilter', hasFilter, 'hasTransform', hasTransform, 'hasSort', hasSort, 'hasLimit', hasLimit);
  
      if (typeof data !== 'object' || typeof data.data !== 'object' || data.data.length <= 0) {
        return null;
      }
  
      for (var i = 0; i < data.data.length; i++) {
        dataItem = this._getItemData(data.data[i]);
  
        // transform
        if (hasTransform) {
          try {
            transformedItem = this._options.transform(dataItem);
            this._debug('processData', 'transformed item', dataItem, transformedItem);
          } catch (err) {
            this._debug('processData', 'error calling transform', err);
            throw new Error('error in transform: ' + err.message);
          }
        } else {
          transformedItem = dataItem;
        }
  
        // filter
        if (hasFilter) {
          try {
            filterResult = this._options.filter(transformedItem);
            this._debug('processData', 'filter item result', transformedItem, filterResult);
          } catch (err) {
            this._debug('processData', 'error calling filter', err);
            throw new Error('error in filter: ' + err.message);
          }
          if (filterResult) {
            transformedFiltered.push(transformedItem);
          }
        } else {
          transformedFiltered.push(transformedItem);
        }
      }
  
      // sort
      if (hasSort) {
        try {
          transformedFiltered.sort(this._options.sort);
        } catch (err) {
          this._debug('processData', 'error calling sort', err);
          throw new Error('error in sort: ' + err.message);
        }
      }
  
      // limit
      if (hasLimit) {
        limitDelta = transformedFiltered.length - this._options.limit;
        this._debug('processData', 'checking limit', transformedFiltered.length, this._options.limit, limitDelta);
        if (limitDelta > 0) {
          transformedFiltered.splice(transformedFiltered.length - limitDelta, limitDelta);
        }
      }
  
      return transformedFiltered;
    };
  
    Instafeed.prototype._extractTags = function extractTags(str) {
      var exp = /#([^\s]+)/gi;
      var badChars = /[~`!@#$%^&*\(\)\-\+={}\[\]:;"'<>\?,\./|\\\s]+/i; // non-allowed characters
      var tags = [];
  
      if (typeof str === 'string') {
        while ((match = exp.exec(str)) !== null) {
          if (badChars.test(match[1]) === false) {
            tags.push(match[1]);
          }
        }
      }
  
      return tags;
    };
  
    Instafeed.prototype._getItemData = function getItemData(data) {
      var type = null;
      var image = null;
  
      switch (data.media_type) {
        case 'IMAGE':
          type = 'image';
          image = data.media_url;
          break;
        case 'VIDEO':
          type = 'video';
          image = data.thumbnail_url;
          break;
        case 'CAROUSEL_ALBUM':
          type = 'album';
          image = data.media_url;
          break;
      }
  
      return {
        caption: data.caption,
        tags: this._extractTags(data.caption),
        id: data.id,
        image: image,
        link: data.permalink,
        model: data,
        timestamp: data.timestamp,
        type: type,
        username: data.username
      };
    };
  
    Instafeed.prototype._renderData = function renderData(items) {
      var hasTemplate = (typeof this._options.template === 'string');
      var hasRender = (typeof this._options.render === 'function');
      var item = null;
      var itemHtml = null;
      var html = '';
  
      this._debug('renderData', 'hasTemplate', hasTemplate, 'hasRender', hasRender);
  
      if (typeof items !== 'object' || items.length <= 0) {
        return null;
      }
  
      for (var i = 0; i < items.length; i++) {
        item = items[i];
  
        if (hasRender) {
          try {
            itemHtml = this._options.render(item, this._options);
            this._debug('renderData', 'custom render result', item, itemHtml);
          } catch (err) {
            this._debug('renderData', 'error calling render', err);
            throw new Error('error in render: ' + err.message);
          }
        } else if (hasTemplate) {
          itemHtml = this._basicRender(item);
        }
  
        if (itemHtml) {
          html = html + itemHtml;
        } else {
          this._debug('renderData', 'render item did not return any content', item);
        }
      }
  
      return html;
    };
  
    Instafeed.prototype._basicRender = function basicRender(data) {
      var exp = new RegExp(this._options.templateBoundaries[0] + '([\\s\\w.]+)' + this._options.templateBoundaries[1], 'gm');
      var template = this._options.template;
      var match = null;
      var output = '';
      var substr = null;
      var lastIndex = 0;
      var keyPath = null;
      var keyPathValue = null;
  
      while((match = exp.exec(template)) !== null) {
        keyPath = match[1];
        substr = template.slice(lastIndex, match.index);
        output = output + substr;
        keyPathValue = this._valueForKeyPath(keyPath, data);
        if (keyPathValue) {
          output = output + keyPathValue.toString();
        }
        lastIndex = exp.lastIndex;
      }
  
      if (lastIndex < template.length) {
        substr = template.slice(lastIndex, template.length);
        output = output + substr;
      }
  
      return output;
    };
  
    Instafeed.prototype._valueForKeyPath = function valueForKeyPath(keyPath, data) {
      var exp = /([\w]+)/gm;
      var match = null;
      var key = null;
      var lastValue = data;
  
      while((match = exp.exec(keyPath)) !== null) {
        if (typeof lastValue !== 'object') {
          return null;
        }
        key = match[1];
        lastValue = lastValue[key];
      }
  
      return lastValue;
    };
  
    Instafeed.prototype._fail = function fail(err) {
      var didHook = this._runHook('error', err);
      if (!didHook && console && typeof console.error === 'function') {
        console.error(err);
      }
      this._state.running = false;
    };
  
    Instafeed.prototype._start = function start() {
      this._state.running = true;
      this._runHook('before');
    };
  
    Instafeed.prototype._finish = function finish() {
      this._runHook('after');
      this._state.running = false;
    };
  
    Instafeed.prototype._success = function success(data) {
      this._runHook('success', data);
      this._state.running = false;
    };
  
    Instafeed.prototype._makeApiRequest = function makeApiRequest(url, callback) {
      var called = false;
      var scope = this;
      var apiRequest = null;
      var callbackOnce = function callbackOnce(err, value) {
        if (!called) {
          called = true;
          callback(err, value);
        }
      };
  
      apiRequest = new XMLHttpRequest();
  
      apiRequest.ontimeout = function apiRequestTimedOut(event) {
        callbackOnce(new Error('api request timed out'));
      };
  
      apiRequest.onerror = function apiRequestOnError(event) {
        callbackOnce(new Error('api connection error'));
      };
  
      apiRequest.onload = function apiRequestOnLoad(event) {
        var contentType = apiRequest.getResponseHeader('Content-Type');
        var responseJson = null;
  
        scope._debug('apiRequestOnLoad', 'loaded', event);
        scope._debug('apiRequestOnLoad', 'response status', apiRequest.status);
        scope._debug('apiRequestOnLoad', 'response content type', contentType);
  
        if (contentType.indexOf('application/json') >= 0) {
          try {
            responseJson = JSON.parse(apiRequest.responseText);
          } catch (err) {
            scope._debug('apiRequestOnLoad', 'json parsing error', err, apiRequest.responseText);
            callbackOnce(new Error('error parsing response json'));
            return;
          }
        }
  
        if (apiRequest.status !== 200) {
          if (responseJson && responseJson.error) {
            callbackOnce(new Error(responseJson.error.code + ' ' + responseJson.error.message));
          } else {
            callbackOnce(new Error('status code ' + apiRequest.status));
          }
          return;
        }
  
        callbackOnce(null, responseJson);
      };
  
      apiRequest.open('GET', url, true);
      apiRequest.timeout = this._options.apiTimeout;
      apiRequest.send();
    };
  
    Instafeed.prototype._getAccessToken = function getAccessToken(callback) {
      var called = false;
      var scope = this;
      var timeoutCheck = null;
  
      var callbackOnce = function callbackOnce(err, value) {
        if (!called) {
          called = true;
          clearTimeout(timeoutCheck);
          callback(err, value);
        }
      };
  
      if (typeof this._options.accessToken === 'function') {
        this._debug('getAccessToken', 'calling accessToken as function');
  
        timeoutCheck = setTimeout(function accessTokenTimeoutCheck() {
          scope._debug('getAccessToken', 'timeout check', called);
          callbackOnce(new Error('accessToken timed out'), null);
        }, this._options.accessTokenTimeout);
  
        try {
          this._options.accessToken(function accessTokenReceiver(err, value) {
            scope._debug('getAccessToken', 'received accessToken callback', called, err, value);
            callbackOnce(err, value);
          });
        } catch (err) {
          this._debug('getAccessToken', 'error invoking the accessToken as function', err);
          callbackOnce(err, null);
        }
      } else {
        this._debug('getAccessToken', 'treating accessToken as static', typeof this._options.accessToken);
        callbackOnce(null, this._options.accessToken);
      }
    };
  
    Instafeed.prototype._debug = function debug() {
      var args = null;
  
      if (this._options.debug && console && typeof console.log === 'function') {
        args = [].slice.call(arguments);
        args[0] = '[Instafeed] ['+args[0]+']'; // first argument should be the callers name
        console.log.apply(null, args);
      }
    };
  
    Instafeed.prototype._runHook = function runHook(hookName, data) {
      var success = false;
      if (typeof this._options[hookName] === 'function') {
        try {
          this._options[hookName](data);
          success = true;
        } catch (err) {
          this._debug('runHook', 'error calling hook', hookName, err);
        }
      }
      return success;
    };
  
    return Instafeed;
  }));;
ymaps.ready(init);
 
function init() {

    var myMap = new ymaps.Map("map", {
        center: [53.89284669209618,27.493862237434385],
        zoom: 16,
        controls: [
            'zoomControl'
        ]
    });


    var placemark = new ymaps.Placemark(myMap.getCenter(), {
        balloonContentBody: ''
    },{
        iconLayout: 'default#image',
        iconImageHref: './img/icon/map.svg',
        // Размеры метки.
        iconImageSize: [50, 76],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-25, -76],
        balloonCloseButton: false,
        hideIconOnBalloonOpen: false
    });
    myMap.geoObjects.add(placemark);

};;
(function($){

  $.fn.twentytwenty = function(options) {
    var options = $.extend({
      default_offset_pct: 0.5,
      orientation: 'horizontal',
      before_label: 'Before',
      after_label: 'After',
      no_overlay: false,
      move_slider_on_hover: false,
      move_with_handle_only: true,
      click_to_move: false
    }, options);

    return this.each(function() {

      var sliderPct = options.default_offset_pct;
      var container = $(this);
      var sliderOrientation = options.orientation;
      var beforeDirection = (sliderOrientation === 'vertical') ? 'down' : 'left';
      var afterDirection = (sliderOrientation === 'vertical') ? 'up' : 'right';


      container.wrap("<div class='twentytwenty-wrapper twentytwenty-" + sliderOrientation + "'></div>");
      if(!options.no_overlay) {
        container.append("<div class='twentytwenty-overlay'></div>");
        var overlay = container.find(".twentytwenty-overlay");
        overlay.append("<div class='twentytwenty-before-label' data-content='"+options.before_label+"'></div>");
        overlay.append("<div class='twentytwenty-after-label' data-content='"+options.after_label+"'></div>");
      }
      var beforeImg = container.find("img:first");
      var afterImg = container.find("img:last");
      container.append("<div class='twentytwenty-handle'></div>");
      var slider = container.find(".twentytwenty-handle");
      slider.append("<span class='twentytwenty-" + beforeDirection + "-arrow'></span>");
      slider.append("<span class='twentytwenty-" + afterDirection + "-arrow'></span>");
      container.addClass("twentytwenty-container");
      beforeImg.addClass("twentytwenty-before");
      afterImg.addClass("twentytwenty-after");
      
      var calcOffset = function(dimensionPct) {
        var w = beforeImg.width();
        var h = beforeImg.height();
        return {
          w: w+"px",
          h: h+"px",
          cw: (dimensionPct*w)+"px",
          ch: (dimensionPct*h)+"px"
        };
      };

      var adjustContainer = function(offset) {
      	if (sliderOrientation === 'vertical') {
          beforeImg.css("clip", "rect(0,"+offset.w+","+offset.ch+",0)");
          afterImg.css("clip", "rect("+offset.ch+","+offset.w+","+offset.h+",0)");
      	}
      	else {
          beforeImg.css("clip", "rect(0,"+offset.cw+","+offset.h+",0)");
          afterImg.css("clip", "rect(0,"+offset.w+","+offset.h+","+offset.cw+")");
    	}
        container.css("height", offset.h);
      };

      var adjustSlider = function(pct) {
        var offset = calcOffset(pct);
        slider.css((sliderOrientation==="vertical") ? "top" : "left", (sliderOrientation==="vertical") ? offset.ch : offset.cw);
        adjustContainer(offset);
      };

      // Return the number specified or the min/max number if it outside the range given.
      var minMaxNumber = function(num, min, max) {
        return Math.max(min, Math.min(max, num));
      };

      // Calculate the slider percentage based on the position.
      var getSliderPercentage = function(positionX, positionY) {
        var sliderPercentage = (sliderOrientation === 'vertical') ?
          (positionY-offsetY)/imgHeight :
          (positionX-offsetX)/imgWidth;

        return minMaxNumber(sliderPercentage, 0, 1);
      };


      $(window).on("resize.twentytwenty", function(e) {
        adjustSlider(sliderPct);
      });

      var offsetX = 0;
      var offsetY = 0;
      var imgWidth = 0;
      var imgHeight = 0;
      var onMoveStart = function(e) {
        if (((e.distX > e.distY && e.distX < -e.distY) || (e.distX < e.distY && e.distX > -e.distY)) && sliderOrientation !== 'vertical') {
          e.preventDefault();
        }
        else if (((e.distX < e.distY && e.distX < -e.distY) || (e.distX > e.distY && e.distX > -e.distY)) && sliderOrientation === 'vertical') {
          e.preventDefault();
        }
        container.addClass("active");
        offsetX = container.offset().left;
        offsetY = container.offset().top;
        imgWidth = beforeImg.width(); 
        imgHeight = beforeImg.height();          
      };
      var onMove = function(e) {
        if (container.hasClass("active")) {
          sliderPct = getSliderPercentage(e.pageX, e.pageY);
          adjustSlider(sliderPct);
        }
      };
      var onMoveEnd = function() {
          container.removeClass("active");
      };

      var moveTarget = options.move_with_handle_only ? slider : container;
      moveTarget.on("movestart",onMoveStart);
      moveTarget.on("move",onMove);
      moveTarget.on("moveend",onMoveEnd);

      if (options.move_slider_on_hover) {
        container.on("mouseenter", onMoveStart);
        container.on("mousemove", onMove);
        container.on("mouseleave", onMoveEnd);
      }

      slider.on("touchmove", function(e) {
        e.preventDefault();
      });

      container.find("img").on("mousedown", function(event) {
        event.preventDefault();
      });

      if (options.click_to_move) {
        container.on('click', function(e) {
          offsetX = container.offset().left;
          offsetY = container.offset().top;
          imgWidth = beforeImg.width();
          imgHeight = beforeImg.height();

          sliderPct = getSliderPercentage(e.pageX, e.pageY);
          adjustSlider(sliderPct);
        });
      }

      $(window).trigger("resize.twentytwenty");
    });
  };

})(jQuery);
;
// DOM.event.move
//
// 2.0.0
//
// Stephen Band
//
// Triggers 'movestart', 'move' and 'moveend' events after
// mousemoves following a mousedown cross a distance threshold,
// similar to the native 'dragstart', 'drag' and 'dragend' events.
// Move events are throttled to animation frames. Move event objects
// have the properties:
//
// pageX:
// pageY:     Page coordinates of pointer.
// startX:
// startY:    Page coordinates of pointer at movestart.
// distX:
// distY:     Distance the pointer has moved since movestart.
// deltaX:
// deltaY:    Distance the finger has moved since last event.
// velocityX:
// velocityY: Average velocity over last few events.


(function(fn) {
	if (typeof define === 'function' && define.amd) {
        define([], fn);
    } else if ((typeof module !== "undefined" && module !== null) && module.exports) {
        module.exports = fn;
	} else {
		fn();
	}
})(function(){
	var assign = Object.assign || window.jQuery && jQuery.extend;

	// Number of pixels a pressed pointer travels before movestart
	// event is fired.
	var threshold = 8;

	// Shim for requestAnimationFrame, falling back to timer. See:
	// see http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	var requestFrame = (function(){
		return (
			window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(fn, element){
				return window.setTimeout(function(){
					fn();
				}, 25);
			}
		);
	})();
	
	// Shim for customEvent
	// see https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
	(function () {
		if ( typeof window.CustomEvent === "function" ) return false;
		function CustomEvent ( event, params ) {
			params = params || { bubbles: false, cancelable: false, detail: undefined };
			var evt = document.createEvent( 'CustomEvent' );
			evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
			return evt;
		}
		
		CustomEvent.prototype = window.Event.prototype;
		window.CustomEvent = CustomEvent;
	})();

	var ignoreTags = {
			textarea: true,
			input: true,
			select: true,
			button: true
		};

	var mouseevents = {
		move:   'mousemove',
		cancel: 'mouseup dragstart',
		end:    'mouseup'
	};

	var touchevents = {
		move:   'touchmove',
		cancel: 'touchend',
		end:    'touchend'
	};

	var rspaces = /\s+/;


	// DOM Events

	var eventOptions = { bubbles: true, cancelable: true };

	var eventsSymbol = typeof Symbol === "function" ? Symbol('events') : {};

	function createEvent(type) {
		return new CustomEvent(type, eventOptions);
	}

	function getEvents(node) {
		return node[eventsSymbol] || (node[eventsSymbol] = {});
	}

	function on(node, types, fn, data, selector) {
		types = types.split(rspaces);

		var events = getEvents(node);
		var i = types.length;
		var handlers, type;

		function handler(e) { fn(e, data); }

		while (i--) {
			type = types[i];
			handlers = events[type] || (events[type] = []);
			handlers.push([fn, handler]);
			node.addEventListener(type, handler);
		}
	}

	function off(node, types, fn, selector) {
		types = types.split(rspaces);

		var events = getEvents(node);
		var i = types.length;
		var type, handlers, k;

		if (!events) { return; }

		while (i--) {
			type = types[i];
			handlers = events[type];
			if (!handlers) { continue; }
			k = handlers.length;
			while (k--) {
				if (handlers[k][0] === fn) {
					node.removeEventListener(type, handlers[k][1]);
					handlers.splice(k, 1);
				}
			}
		}
	}

	function trigger(node, type, properties) {
		// Don't cache events. It prevents you from triggering an event of a
		// given type from inside the handler of another event of that type.
		var event = createEvent(type);
		if (properties) { assign(event, properties); }
		node.dispatchEvent(event);
	}


	// Constructors

	function Timer(fn){
		var callback = fn,
		    active = false,
		    running = false;

		function trigger(time) {
			if (active){
				callback();
				requestFrame(trigger);
				running = true;
				active = false;
			}
			else {
				running = false;
			}
		}

		this.kick = function(fn) {
			active = true;
			if (!running) { trigger(); }
		};

		this.end = function(fn) {
			var cb = callback;

			if (!fn) { return; }

			// If the timer is not running, simply call the end callback.
			if (!running) {
				fn();
			}
			// If the timer is running, and has been kicked lately, then
			// queue up the current callback and the end callback, otherwise
			// just the end callback.
			else {
				callback = active ?
					function(){ cb(); fn(); } :
					fn ;

				active = true;
			}
		};
	}


	// Functions

	function noop() {}

	function preventDefault(e) {
		e.preventDefault();
	}

	function isIgnoreTag(e) {
		return !!ignoreTags[e.target.tagName.toLowerCase()];
	}

	function isPrimaryButton(e) {
		// Ignore mousedowns on any button other than the left (or primary)
		// mouse button, or when a modifier key is pressed.
		return (e.which === 1 && !e.ctrlKey && !e.altKey);
	}

	function identifiedTouch(touchList, id) {
		var i, l;

		if (touchList.identifiedTouch) {
			return touchList.identifiedTouch(id);
		}

		// touchList.identifiedTouch() does not exist in
		// webkit yet… we must do the search ourselves...

		i = -1;
		l = touchList.length;

		while (++i < l) {
			if (touchList[i].identifier === id) {
				return touchList[i];
			}
		}
	}

	function changedTouch(e, data) {
		var touch = identifiedTouch(e.changedTouches, data.identifier);

		// This isn't the touch you're looking for.
		if (!touch) { return; }

		// Chrome Android (at least) includes touches that have not
		// changed in e.changedTouches. That's a bit annoying. Check
		// that this touch has changed.
		if (touch.pageX === data.pageX && touch.pageY === data.pageY) { return; }

		return touch;
	}


	// Handlers that decide when the first movestart is triggered

	function mousedown(e){
		// Ignore non-primary buttons
		if (!isPrimaryButton(e)) { return; }

		// Ignore form and interactive elements
		if (isIgnoreTag(e)) { return; }

		on(document, mouseevents.move, mousemove, e);
		on(document, mouseevents.cancel, mouseend, e);
	}

	function mousemove(e, data){
		checkThreshold(e, data, e, removeMouse);
	}

	function mouseend(e, data) {
		removeMouse();
	}

	function removeMouse() {
		off(document, mouseevents.move, mousemove);
		off(document, mouseevents.cancel, mouseend);
	}

	function touchstart(e) {
		// Don't get in the way of interaction with form elements
		if (ignoreTags[e.target.tagName.toLowerCase()]) { return; }

		var touch = e.changedTouches[0];

		// iOS live updates the touch objects whereas Android gives us copies.
		// That means we can't trust the touchstart object to stay the same,
		// so we must copy the data. This object acts as a template for
		// movestart, move and moveend event objects.
		var data = {
			target:     touch.target,
			pageX:      touch.pageX,
			pageY:      touch.pageY,
			identifier: touch.identifier,

			// The only way to make handlers individually unbindable is by
			// making them unique.
			touchmove:  function(e, data) { touchmove(e, data); },
			touchend:   function(e, data) { touchend(e, data); }
		};

		on(document, touchevents.move, data.touchmove, data);
		on(document, touchevents.cancel, data.touchend, data);
	}

	function touchmove(e, data) {
		var touch = changedTouch(e, data);
		if (!touch) { return; }
		checkThreshold(e, data, touch, removeTouch);
	}

	function touchend(e, data) {
		var touch = identifiedTouch(e.changedTouches, data.identifier);
		if (!touch) { return; }
		removeTouch(data);
	}

	function removeTouch(data) {
		off(document, touchevents.move, data.touchmove);
		off(document, touchevents.cancel, data.touchend);
	}

	function checkThreshold(e, data, touch, fn) {
		var distX = touch.pageX - data.pageX;
		var distY = touch.pageY - data.pageY;

		// Do nothing if the threshold has not been crossed.
		if ((distX * distX) + (distY * distY) < (threshold * threshold)) { return; }

		triggerStart(e, data, touch, distX, distY, fn);
	}

	function triggerStart(e, data, touch, distX, distY, fn) {
		var touches = e.targetTouches;
		var time = e.timeStamp - data.timeStamp;

		// Create a movestart object with some special properties that
		// are passed only to the movestart handlers.
		var template = {
			altKey:     e.altKey,
			ctrlKey:    e.ctrlKey,
			shiftKey:   e.shiftKey,
			startX:     data.pageX,
			startY:     data.pageY,
			distX:      distX,
			distY:      distY,
			deltaX:     distX,
			deltaY:     distY,
			pageX:      touch.pageX,
			pageY:      touch.pageY,
			velocityX:  distX / time,
			velocityY:  distY / time,
			identifier: data.identifier,
			targetTouches: touches,
			finger: touches ? touches.length : 1,
			enableMove: function() {
				this.moveEnabled = true;
				this.enableMove = noop;
				e.preventDefault();
			}
		};

		// Trigger the movestart event.
		trigger(data.target, 'movestart', template);

		// Unbind handlers that tracked the touch or mouse up till now.
		fn(data);
	}


	// Handlers that control what happens following a movestart

	function activeMousemove(e, data) {
		var timer  = data.timer;

		data.touch = e;
		data.timeStamp = e.timeStamp;
		timer.kick();
	}

	function activeMouseend(e, data) {
		var target = data.target;
		var event  = data.event;
		var timer  = data.timer;

		removeActiveMouse();

		endEvent(target, event, timer, function() {
			// Unbind the click suppressor, waiting until after mouseup
			// has been handled.
			setTimeout(function(){
				off(target, 'click', preventDefault);
			}, 0);
		});
	}

	function removeActiveMouse() {
		off(document, mouseevents.move, activeMousemove);
		off(document, mouseevents.end, activeMouseend);
	}

	function activeTouchmove(e, data) {
		var event = data.event;
		var timer = data.timer;
		var touch = changedTouch(e, event);

		if (!touch) { return; }

		// Stop the interface from gesturing
		e.preventDefault();

		event.targetTouches = e.targetTouches;
		data.touch = touch;
		data.timeStamp = e.timeStamp;

		timer.kick();
	}

	function activeTouchend(e, data) {
		var target = data.target;
		var event  = data.event;
		var timer  = data.timer;
		var touch  = identifiedTouch(e.changedTouches, event.identifier);

		// This isn't the touch you're looking for.
		if (!touch) { return; }

		removeActiveTouch(data);
		endEvent(target, event, timer);
	}

	function removeActiveTouch(data) {
		off(document, touchevents.move, data.activeTouchmove);
		off(document, touchevents.end, data.activeTouchend);
	}


	// Logic for triggering move and moveend events

	function updateEvent(event, touch, timeStamp) {
		var time = timeStamp - event.timeStamp;

		event.distX =  touch.pageX - event.startX;
		event.distY =  touch.pageY - event.startY;
		event.deltaX = touch.pageX - event.pageX;
		event.deltaY = touch.pageY - event.pageY;

		// Average the velocity of the last few events using a decay
		// curve to even out spurious jumps in values.
		event.velocityX = 0.3 * event.velocityX + 0.7 * event.deltaX / time;
		event.velocityY = 0.3 * event.velocityY + 0.7 * event.deltaY / time;
		event.pageX =  touch.pageX;
		event.pageY =  touch.pageY;
	}

	function endEvent(target, event, timer, fn) {
		timer.end(function(){
			trigger(target, 'moveend', event);
			return fn && fn();
		});
	}


	// Set up the DOM

	function movestart(e) {
		if (e.defaultPrevented) { return; }
		if (!e.moveEnabled) { return; }

		var event = {
			startX:        e.startX,
			startY:        e.startY,
			pageX:         e.pageX,
			pageY:         e.pageY,
			distX:         e.distX,
			distY:         e.distY,
			deltaX:        e.deltaX,
			deltaY:        e.deltaY,
			velocityX:     e.velocityX,
			velocityY:     e.velocityY,
			identifier:    e.identifier,
			targetTouches: e.targetTouches,
			finger:        e.finger
		};

		var data = {
			target:    e.target,
			event:     event,
			timer:     new Timer(update),
			touch:     undefined,
			timeStamp: e.timeStamp
		};

		function update(time) {
			updateEvent(event, data.touch, data.timeStamp);
			trigger(data.target, 'move', event);
		}

		if (e.identifier === undefined) {
			// We're dealing with a mouse event.
			// Stop clicks from propagating during a move
			on(e.target, 'click', preventDefault);
			on(document, mouseevents.move, activeMousemove, data);
			on(document, mouseevents.end, activeMouseend, data);
		}
		else {
			// In order to unbind correct handlers they have to be unique
			data.activeTouchmove = function(e, data) { activeTouchmove(e, data); };
			data.activeTouchend = function(e, data) { activeTouchend(e, data); };

			// We're dealing with a touch.
			on(document, touchevents.move, data.activeTouchmove, data);
			on(document, touchevents.end, data.activeTouchend, data);
		}
	}

	on(document, 'mousedown', mousedown);
	on(document, 'touchstart', touchstart);
	on(document, 'movestart', movestart);


	// jQuery special events
	//
	// jQuery event objects are copies of DOM event objects. They need
	// a little help copying the move properties across.

	if (!window.jQuery) { return; }

	var properties = ("startX startY pageX pageY distX distY deltaX deltaY velocityX velocityY").split(' ');

	function enableMove1(e) { e.enableMove(); }
	function enableMove2(e) { e.enableMove(); }
	function enableMove3(e) { e.enableMove(); }

	function add(handleObj) {
		var handler = handleObj.handler;

		handleObj.handler = function(e) {
			// Copy move properties across from originalEvent
			var i = properties.length;
			var property;

			while(i--) {
				property = properties[i];
				e[property] = e.originalEvent[property];
			}

			handler.apply(this, arguments);
		};
	}

	jQuery.event.special.movestart = {
		setup: function() {
			// Movestart must be enabled to allow other move events
			on(this, 'movestart', enableMove1);

			// Do listen to DOM events
			return false;
		},

		teardown: function() {
			off(this, 'movestart', enableMove1);
			return false;
		},

		add: add
	};

	jQuery.event.special.move = {
		setup: function() {
			on(this, 'movestart', enableMove2);
			return false;
		},

		teardown: function() {
			off(this, 'movestart', enableMove2);
			return false;
		},

		add: add
	};

	jQuery.event.special.moveend = {
		setup: function() {
			on(this, 'movestart', enableMove3);
			return false;
		},

		teardown: function() {
			off(this, 'movestart', enableMove3);
			return false;
		},

		add: add
	};
});
;
//MASKS//
//'+7(999) 999 9999'
//'+38(999) 999 9999'
//'+375(99)999-99-99'
$.each($('input.phone'), function(index, val) {
    $(this).attr('type','tel');
    $(this).focus(function(){
        $(this).inputmask('+375(99)999-99-99',{clearIncomplete: true,clearMaskOnLostFocus: false,
            "onincomplete": function(){maskclear($(this));}
        });
        $(this).addClass('focus');
        $(this).parent().addClass('focus');
        $(this).parent().removeClass('err');
        $(this).removeClass('err');
    });
});
$('input.phone').focusout(function(event) {
    maskclear($(this));
});



if($('.sticky-button').length>0){
	const stickyButton = document.querySelectorAll('.sticky-button');
	const stickyButtonOver = document.querySelectorAll('.sticky-button__text');
	
	stickyButton.forEach(item=>{
		item.addEventListener('mouseover',()=>{
			const stickyButtonText = item.querySelector('.sticky-button__text');
			stickyButtonText.classList.add('sticky-button__text_active')
			stickyButton.forEach(item=>{
				item.classList.add('sticky-button_active')
			})
		})
	});
	stickyButton.forEach(item=>{
		item.addEventListener('mouseout',()=>{
			const stickyButtonText = item.querySelector('.sticky-button__text');
			stickyButtonText.classList.remove('sticky-button__text_active')
			stickyButton.forEach(item=>{
				item.classList.remove('sticky-button_active')
			})		})
	});
	stickyButtonOver.forEach(item=>{
		item.addEventListener('mouseout',()=>{
			console.log("работает");
			item.classList.remove('sticky-button__text_active')
			stickyButton.forEach(item=>{
				item.classList.remove('sticky-button_active')
			})
		})
	}) 
};


//SLIDERS
if($('.step-slider__items').length>0){
	$('.step-slider__items').slick({
	// autoplay: true,
	infinite: false,
	dots: false,
	arrows: true,
	fade: true,
	cssEase: 'linear',
	accessibility:false,
	slidesToShow:1,
	speed: 1000,
	autoplaySpeed: 3000,
	adaptiveHeight: true,
	//asNavFor:'',
	// appendDots:$('.step-slider__controls'),
	appendArrows:$('.step-slider__btn-group'),
	nextArrow:'<button type="button" class="step-slider__next"></button>',
	prevArrow:'<button type="button" class="step-slider__prev"></button>',
	// responsive: [{
	// 	breakpoint: 768,
	// 	settings: {	adaptiveHeight: true}
	// 	}]
	});
	$('.step-slider-controls__li').click(function() {
		$('.step-slider-controls__li').removeClass("step-slider-controls__li_active");
		var $this = $(this);
		var newImage = $(this).index();
	
		$('.step-slider-controls__li').eq(newImage).addClass("step-slider-controls__li_active");
		$('.step-slider__items').slick('slickGoTo', $this.data('index'))
	  });
	  $('.step-slider__btn-group .slick-arrow').click(function() {
		$('.step-slider-controls__li').removeClass("step-slider-controls__li_active");
		var newImage = $('.step-slider__items .slick-active').index();
	
		$('.step-slider-controls__li').eq(newImage).addClass("step-slider-controls__li_active");
	  });
	  
};

if($('.feedback-slider__items').length>0){
	$('.feedback-slider__texts').slick({
		// autoplay: true,
		// infinite: false,
		dots: true,
		arrows: true,
		fade: true,
		cssEase: 'linear',
		accessibility:false,
		slidesToShow:1,
		asNavFor:".feedback-slider__items",
		speed: 1000,
		autoplaySpeed: 3000,
		adaptiveHeight: true,
		appendArrows:$('.feedback-slider__btns'),
		appendDots:$('.feedback-slider__btns'),
		nextArrow:'<button type="button" class="step-slider__next feedback-slider__next"></button>',
		prevArrow:'<button type="button" class="step-slider__prev feedback-slider__prev"></button>',
	
	});
	$('.feedback-slider__items').slick({
	// autoplay: true,
	// infinite: false,
	dots: false,
	arrows: false,
	fade: true,
	cssEase: 'linear',
	accessibility:false,
	slidesToShow:1,
	speed: 1000,
	asNavFor:".feedback-slider__texts",
	autoplaySpeed: 3000,
	centerMode: true,
	// adaptiveHeight: true,
	});

};


if($('.design__items').length>0){
	$('.design__items').slick({
	// autoplay: true,
	// infinite: false,
	dots: true,
	arrows: true,
	// fade: true,
	cssEase: 'linear',
	accessibility:false,
	slidesToShow:1,
	speed: 1000,
	autoplaySpeed: 3000,
	adaptiveHeight: true,
	appendDots:$('.design__btns'),
	appendArrows:$('.design__btns'),
	nextArrow:'<button type="button" class="step-slider__next design-slider__next"></button>',
	prevArrow:'<button type="button" class="step-slider__prev design-slider__prev"></button>',

	}); 
};

if($('.video-feedback__slider').length>0){
	$('.video-feedback__slider').slick({
	// autoplay: true,
	infinite: false,
	dots: true,
	arrows: true,
	fade: true,
	// cssEase: 'linear',
	accessibility:false,
	// centerMode: true,
	slidesToShow: 1,
	speed: 1000,
	autoplaySpeed: 3000,
	adaptiveHeight: true,
	// variableWidth: true,
	appendDots:$('.video__btns'),
	appendArrows:$('.video__btns'),
	nextArrow:'<button type="button" class="video-slider__next step-slider__next slick-next"></button>',
	prevArrow:'<button type="button" class="video-slider__prev step-slider__prev slick-prev"></button>',
	responsive: [{
		breakpoint: 820,
		settings: {	
			slidesToShow: 2,
			fade: false
		}
		}],
	mobileFirst: true,
	}); 
};



// //ibg

function ibg(){

	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
	if(ibg[i].querySelector('img')){
	ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
	}
	}
}
	
	ibg();


// Scrollsmooth
if(window.matchMedia('(min-width: 576px)').matches){
	var Scrollbar = window.Scrollbar;
	const scrollbar = document.querySelectorAll('.my-scrollbar2');
	scrollbar.forEach(item=>{
		Scrollbar.init(item, {
			alwaysShowTracks:true});
	});
}
if(window.matchMedia('(max-width: 576px)').matches){
	var Scrollbar = window.Scrollbar;
	const scrollbar = document.querySelectorAll('.my-scrollbar3');
	scrollbar.forEach(item=>{
		Scrollbar.init(item, {
			alwaysShowTracks:true});
	});
}
var Scrollbar = window.Scrollbar;
	const scrollbar = document.querySelectorAll('.my-scrollbar');
	scrollbar.forEach(item=>{
		Scrollbar.init(item, {
			alwaysShowTracks:true});
	});

// instargam 
if(window.matchMedia('(min-width: 576px)').matches){
	var feed = new Instafeed({
		accessToken: InstagramToken,
		limit: 10
	});
}
if(window.matchMedia('(max-width: 576px)').matches){
	var feed = new Instafeed({
		accessToken: InstagramToken,
		limit: 4
	});
}
feed.run();

// scroll 

$(window).scroll(function(){
    if ($(window).scrollTop() > 150) {
		$('.top-header').addClass('top-header_active');
		$('.header__body').addClass('header__body_active');
		$('.top-header__logo').addClass('top-header__logo_active');
		$('.top-header').fadeIn(2000);
    }
    else {
		$('.header__body').removeClass('header__body_active');
		$('.top-header').removeClass('top-header_active');
		$('.top-header__logo').removeClass('top-header__logo_active');
    }
});


// twentytwenty
$(function() {
	$('#container1').twentytwenty();
   });;


function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });
    $(document).ready(()=> {$(".arrow__link").click(function (e) {var elementClick = $(this).attr("href");var destination = $(elementClick).offset().top;jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);e.preventDefault();return false;});});