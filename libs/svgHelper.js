
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var e = Math.PI / 180,
            t = 180 / Math.PI,
            r = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            o = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            n = /(^[#\.]|[a-y][a-z])/gi,
            i = /[achlmqstvz]/gi,
            a = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
            s = _gsScope._gsDefine.globals.TweenLite,
            h = "codepen",
            f = "MorphSVGPlugin",
            g = String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
            u = String.fromCharCode(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47),
            d = function(e) {
                for (var t = -1 !== (window ? window.location.href : "").indexOf(String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107)) && -1 !== e.indexOf(String.fromCharCode(108, 111, 99, 97, 108, 104, 111, 115, 116)), r = [g, String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), String.fromCharCode(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), String.fromCharCode(99, 100, 112, 110, 46, 105, 111), String.fromCharCode(103, 97, 110, 110, 111, 110, 46, 116, 118), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), String.fromCharCode(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), String.fromCharCode(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), String.fromCharCode(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), String.fromCharCode(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), String.fromCharCode(116, 119, 101, 101, 110, 108, 105, 116, 101, 46, 99, 111, 109), String.fromCharCode(112, 108, 110, 107, 114, 46, 99, 111), String.fromCharCode(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), String.fromCharCode(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), String.fromCharCode(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103), String.fromCharCode(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)], o = r.length; --o > -1;)
                    if (-1 !== e.indexOf(r[o])) return !0;
                return t && window && window.console && console.log(String.fromCharCode(87, 65, 82, 78, 73, 78, 71, 58, 32, 97, 32, 115, 112, 101, 99, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + f + String.fromCharCode(32, 105, 115, 32, 114, 117, 110, 110, 105, 110, 103, 32, 108, 111, 99, 97, 108, 108, 121, 44, 32, 98, 117, 116, 32, 105, 116, 32, 119, 105, 108, 108, 32, 110, 111, 116, 32, 119, 111, 114, 107, 32, 111, 110, 32, 97, 32, 108, 105, 118, 101, 32, 100, 111, 109, 97, 105, 110, 32, 98, 101, 99, 97, 117, 115, 101, 32, 105, 116, 32, 105, 115, 32, 97, 32, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 32, 98, 101, 110, 101, 102, 105, 116, 32, 111, 102, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 46, 32, 80, 108, 101, 97, 115, 101, 32, 115, 105, 103, 110, 32, 117, 112, 32, 97, 116, 32, 104, 116, 116, 112, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98, 47, 32, 97, 110, 100, 32, 116, 104, 101, 110, 32, 100, 111, 119, 110, 108, 111, 97, 100, 32, 116, 104, 101, 32, 39, 114, 101, 97, 108, 39, 32, 118, 101, 114, 115, 105, 111, 110, 32, 102, 114, 111, 109, 32, 121, 111, 117, 114, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 97, 99, 99, 111, 117, 110, 116, 32, 119, 104, 105, 99, 104, 32, 104, 97, 115, 32, 110, 111, 32, 115, 117, 99, 104, 32, 108, 105, 109, 105, 116, 97, 116, 105, 111, 110, 115, 46, 32, 84, 104, 101, 32, 102, 105, 108, 101, 32, 121, 111, 117, 39, 114, 101, 32, 117, 115, 105, 110, 103, 32, 119, 97, 115, 32, 108, 105, 107, 101, 108, 121, 32, 100, 111, 119, 110, 108, 111, 97, 100, 101, 100, 32, 102, 114, 111, 109, 32, 101, 108, 115, 101, 119, 104, 101, 114, 101, 32, 111, 110, 32, 116, 104, 101, 32, 119, 101, 98, 32, 97, 110, 100, 32, 105, 115, 32, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 116, 111, 32, 108, 111, 99, 97, 108, 32, 117, 115, 101, 32, 111, 114, 32, 111, 110, 32, 115, 105, 116, 101, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 46)), t
            }(window ? window.location.host : ""),
            l = function(e) {
                _gsScope.console && console.log(e)
            },
            c = function(t, r) {
                var o, n, i, a, s, h, f = Math.ceil(Math.abs(r) / 90),
                    g = 0,
                    u = [];
                for (t *= e, r *= e, o = r / f, n = 4 / 3 * Math.sin(o / 2) / (1 + Math.cos(o / 2)), h = 0; f > h; h++) i = t + h * o, a = Math.cos(i), s = Math.sin(i), u[g++] = a - n * s, u[g++] = s + n * a, i += o, a = Math.cos(i), s = Math.sin(i), u[g++] = a + n * s, u[g++] = s - n * a, u[g++] = a, u[g++] = s;
                return u
            },
            p = function(r, o, n, i, a, s, h, f, g) {
                if (r !== f || o !== g) {
                    n = Math.abs(n), i = Math.abs(i);
                    var u = a % 360 * e,
                        d = Math.cos(u),
                        l = Math.sin(u),
                        p = (r - f) / 2,
                        C = (o - g) / 2,
                        m = d * p + l * C,
                        S = -l * p + d * C,
                        w = n * n,
                        x = i * i,
                        y = m * m,
                        _ = S * S,
                        v = y / w + _ / x;
                    v > 1 && (n = Math.sqrt(v) * n, i = Math.sqrt(v) * i, w = n * n, x = i * i);
                    var b = s === h ? -1 : 1,
                        M = (w * x - w * _ - x * y) / (w * _ + x * y);
                    0 > M && (M = 0);
                    var A = b * Math.sqrt(M),
                        T = A * (n * S / i),
                        O = A * -(i * m / n),
                        N = (r + f) / 2,
                        L = (o + g) / 2,
                        D = N + (d * T - l * O),
                        q = L + (l * T + d * O),
                        z = (m - T) / n,
                        G = (S - O) / i,
                        R = (-m - T) / n,
                        P = (-S - O) / i,
                        k = Math.sqrt(z * z + G * G),
                        B = z;
                    b = 0 > G ? -1 : 1;
                    var E = b * Math.acos(B / k) * t;
                    k = Math.sqrt((z * z + G * G) * (R * R + P * P)), B = z * R + G * P, b = 0 > z * P - G * R ? -1 : 1;
                    var V = b * Math.acos(B / k) * t;
                    !h && V > 0 ? V -= 360 : h && 0 > V && (V += 360), V %= 360, E %= 360;
                    var F, j, Q, I = c(E, V),
                        Y = d * n,
                        X = l * n,
                        W = l * -i,
                        H = d * i,
                        U = I.length - 2;
                    for (F = 0; U > F; F += 2) j = I[F], Q = I[F + 1], I[F] = j * Y + Q * W + D, I[F + 1] = j * X + Q * H + q;
                    return I[I.length - 2] = f, I[I.length - 1] = g, I
                }
            },
            C = function(e) {
                var t, o, n, i, s, h, f, g, u, d, c, C, m, S = (e + "").replace(a, function(e) {
                        var t = +e;
                        return 1e-4 > t && t > -1e-4 ? 0 : t
                    }).match(r) || [],
                    w = [],
                    x = 0,
                    y = 0,
                    _ = S.length,
                    v = 2,
                    b = 0;
                if (!e || !isNaN(S[0]) || isNaN(S[1])) return l("ERROR: malformed path data: " + e), w;
                for (t = 0; _ > t; t++)
                    if (m = s, isNaN(S[t]) ? (s = S[t].toUpperCase(), h = s !== S[t]) : t--, n = +S[t + 1], i = +S[t + 2], h && (n += x, i += y), 0 === t && (g = n, u = i), "M" === s) f && f.length < 8 && (w.length -= 1, v = 0), x = g = n, y = u = i, f = [n, i], b += v, v = 2, w.push(f), t += 2, s = "L";
                    else if ("C" === s) f || (f = [0, 0]), f[v++] = n, f[v++] = i, h || (x = y = 0), f[v++] = x + 1 * S[t + 3], f[v++] = y + 1 * S[t + 4], f[v++] = x += 1 * S[t + 5], f[v++] = y += 1 * S[t + 6], t += 6;
                else if ("S" === s) "C" === m || "S" === m ? (d = x - f[v - 4], c = y - f[v - 3], f[v++] = x + d, f[v++] = y + c) : (f[v++] = x, f[v++] = y), f[v++] = n, f[v++] = i, h || (x = y = 0), f[v++] = x += 1 * S[t + 3], f[v++] = y += 1 * S[t + 4], t += 4;
                else if ("Q" === s) d = n - x, c = i - y, f[v++] = x + 2 * d / 3, f[v++] = y + 2 * c / 3, h || (x = y = 0), x += 1 * S[t + 3], y += 1 * S[t + 4], d = n - x, c = i - y, f[v++] = x + 2 * d / 3, f[v++] = y + 2 * c / 3, f[v++] = x, f[v++] = y, t += 4;
                else if ("T" === s) d = x - f[v - 4], c = y - f[v - 3], f[v++] = x + d, f[v++] = y + c, d = x + 1.5 * d - n, c = y + 1.5 * c - i, f[v++] = n + 2 * d / 3, f[v++] = i + 2 * c / 3, f[v++] = x = n, f[v++] = y = i, t += 2;
                else if ("H" === s) i = y, f[v++] = x + (n - x) / 3, f[v++] = y + (i - y) / 3, f[v++] = x + 2 * (n - x) / 3, f[v++] = y + 2 * (i - y) / 3, f[v++] = x = n, f[v++] = i, t += 1;
                else if ("V" === s) i = n, n = x, h && (i += y - x), f[v++] = n, f[v++] = y + (i - y) / 3, f[v++] = n, f[v++] = y + 2 * (i - y) / 3, f[v++] = n, f[v++] = y = i, t += 1;
                else if ("L" === s || "Z" === s) "Z" === s && (n = g, i = u, f.closed = !0), ("L" === s || Math.abs(x - n) > .5 || Math.abs(y - i) > .5) && (f[v++] = x + (n - x) / 3, f[v++] = y + (i - y) / 3, f[v++] = x + 2 * (n - x) / 3, f[v++] = y + 2 * (i - y) / 3, f[v++] = n, f[v++] = i, "L" === s && (t += 2)), x = n, y = i;
                else if ("A" === s) {
                    if (C = p(x, y, 1 * S[t + 1], 1 * S[t + 2], 1 * S[t + 3], 1 * S[t + 4], 1 * S[t + 5], (h ? x : 0) + 1 * S[t + 6], (h ? y : 0) + 1 * S[t + 7]))
                        for (o = 0; o < C.length; o++) f[v++] = C[o];
                    x = f[v - 2], y = f[v - 1], t += 7
                } else l("Error: malformed path data: " + e);
                return w.totalPoints = b + v, w
            },
            m = function(e, t) {
                var r, o, n, i, a, s, h, f, g, u, d, l, c, p, C = 0,
                    m = .999999,
                    S = e.length,
                    w = t / ((S - 2) / 6);
                for (c = 2; S > c; c += 6)
                    for (C += w; C > m;) r = e[c - 2], o = e[c - 1], n = e[c], i = e[c + 1], a = e[c + 2], s = e[c + 3], h = e[c + 4], f = e[c + 5], p = 1 / (Math.floor(C) + 1), g = r + (n - r) * p, d = n + (a - n) * p, g += (d - g) * p, d += (a + (h - a) * p - d) * p, u = o + (i - o) * p, l = i + (s - i) * p, u += (l - u) * p, l += (s + (f - s) * p - l) * p, e.splice(c, 4, r + (n - r) * p, o + (i - o) * p, g, u, g + (d - g) * p, u + (l - u) * p, d, l, a + (h - a) * p, s + (f - s) * p), c += 6, S += 6, C--;
                return e
            },
            S = function(e) {
                var t, r, o, n, i = "",
                    a = e.length,
                    s = 100;
                for (r = 0; a > r; r++) {
                    for (n = e[r], i += "M" + n[0] + "," + n[1] + " C", t = n.length, o = 2; t > o; o++) i += (n[o++] * s | 0) / s + "," + (n[o++] * s | 0) / s + " " + (n[o++] * s | 0) / s + "," + (n[o++] * s | 0) / s + " " + (n[o++] * s | 0) / s + "," + (n[o] * s | 0) / s + " ";
                    n.closed && (i += "z")
                }
                return i
            },
            w = function(e) {
                for (var t = [], r = e.length - 1, o = 0; --r > -1;) t[o++] = e[r], t[o++] = e[r + 1], r--;
                for (r = 0; o > r; r++) e[r] = t[r];
                e.reversed = e.reversed ? !1 : !0
            },
            x = function(e) {
                var t, r = e.length,
                    o = 0,
                    n = 0;
                for (t = 0; r > t; t++) o += e[t++], n += e[t];
                return [o / (r / 2), n / (r / 2)]
            },
            y = function(e) {
                var t, r, o, n = e.length,
                    i = e[0],
                    a = i,
                    s = e[1],
                    h = s;
                for (o = 6; n > o; o += 6) t = e[o], r = e[o + 1], t > i ? i = t : a > t && (a = t), r > s ? s = r : h > r && (h = r);
                return e.centerX = (i + a) / 2, e.centerY = (s + h) / 2, e.size = (i - a) * (s - h)
            },
            _ = function(e) {
                for (var t, r, o, n, i, a = e.length, s = e[0][0], h = s, f = e[0][1], g = f; --a > -1;)
                    for (i = e[a], t = i.length, n = 6; t > n; n += 6) r = i[n], o = i[n + 1], r > s ? s = r : h > r && (h = r), o > f ? f = o : g > o && (g = o);
                return e.centerX = (s + h) / 2, e.centerY = (f + g) / 2, e.size = (s - h) * (f - g)
            },
            v = function(e, t) {
                return t.length - e.length
            },
            b = function(e, t) {
                var r = e.size || y(e),
                    o = t.size || y(t);
                return Math.abs(o - r) < (r + o) / 20 ? t.centerX - e.centerX || t.centerY - e.centerY : o - r
            },
            M = function(e, t) {
                var r, o, n = e.slice(0),
                    i = e.length,
                    a = i - 2;
                for (t = 0 | t, r = 0; i > r; r++) o = (r + t) % a, e[r++] = n[o], e[r] = n[o + 1]
            },
            A = function(e, t, r, o, n) {
                var i, a, s, h, f = e.length,
                    g = 0,
                    u = f - 2;
                for (r *= 6, a = 0; f > a; a += 6) i = (a + r) % u, h = e[i] - (t[a] - o), s = e[i + 1] - (t[a + 1] - n), g += Math.sqrt(s * s + h * h);
                return g
            },
            T = function(e, t, r) {
                var o, n, i, a = e.length,
                    s = x(e),
                    h = x(t),
                    f = h[0] - s[0],
                    g = h[1] - s[1],
                    u = A(e, t, 0, f, g),
                    d = 0;
                for (i = 6; a > i; i += 6) n = A(e, t, i / 6, f, g), u > n && (u = n, d = i);
                if (r)
                    for (o = e.slice(0), w(o), i = 6; a > i; i += 6) n = A(o, t, i / 6, f, g), u > n && (u = n, d = -i);
                return d / 6
            },
            O = function(e, t, r) {
                for (var o, n, i, a, s, h, f = e.length, g = 99999999999, u = 0, d = 0; --f > -1;)
                    for (o = e[f], h = o.length, s = 0; h > s; s += 6) n = o[s] - t, i = o[s + 1] - r, a = Math.sqrt(n * n + i * i), g > a && (g = a, u = o[s], d = o[s + 1]);
                return [u, d]
            },
            N = function(e, t, r, o, n, i) {
                var a, s, h, f, g, u = t.length,
                    d = 0,
                    l = Math.min(e.size || y(e), t[r].size || y(t[r])) * o,
                    c = 999999999999,
                    p = e.centerX + n,
                    C = e.centerY + i;
                for (s = r; u > s && (a = t[s].size || y(t[s]), l <= a); s++) h = t[s].centerX - p, f = t[s].centerY - C, g = Math.sqrt(h * h + f * f), c > g && (d = s, c = g);
                return g = t[d], t.splice(d, 1), g
            },
            L = function(e, t, r, o) {
                var n, i, a, s, h, f, g, u = t.length - e.length,
                    d = u > 0 ? t : e,
                    c = u > 0 ? e : t,
                    p = 0,
                    C = "complexity" === o ? v : b,
                    S = "position" === o ? 0 : "number" == typeof o ? o : .8,
                    x = c.length,
                    A = "object" == typeof r && r.push ? r.slice(0) : [r],
                    L = "reverse" === A[0] || A[0] < 0,
                    D = "log" === r;
                if (c[0]) {
                    if (d.length > 1 && (e.sort(C), t.sort(C), f = d.size || _(d), f = c.size || _(c), f = d.centerX - c.centerX, g = d.centerY - c.centerY, C === b))
                        for (x = 0; x < c.length; x++) d.splice(x, 0, N(c[x], d, x, S, f, g));
                    if (u)
                        for (0 > u && (u = -u), d[0].length > c[0].length && m(c[0], (d[0].length - c[0].length) / 6 | 0), x = c.length; u > p;) s = d[x].size || y(d[x]), a = O(c, d[x].centerX, d[x].centerY), s = a[0], h = a[1], c[x++] = [s, h, s, h, s, h, s, h], c.totalPoints += 8, p++;
                    for (x = 0; x < e.length; x++) n = t[x], i = e[x], u = n.length - i.length, 0 > u ? m(n, -u / 6 | 0) : u > 0 && m(i, u / 6 | 0), L && !i.reversed && w(i), r = A[x] || 0 === A[x] ? A[x] : "auto", r && (i.closed || Math.abs(i[0] - i[i.length - 2]) < .5 && Math.abs(i[1] - i[i.length - 1]) < .5 ? "auto" === r || "log" === r ? (A[x] = r = T(i, n, 0 === x), 0 > r && (L = !0, w(i), r = -r), M(i, 6 * r)) : "reverse" !== r && (x && 0 > r && w(i), M(i, 6 * (0 > r ? -r : r))) : !L && ("auto" === r && Math.abs(n[0] - i[0]) + Math.abs(n[1] - i[1]) + Math.abs(n[n.length - 2] - i[i.length - 2]) + Math.abs(n[n.length - 1] - i[i.length - 1]) > Math.abs(n[0] - i[i.length - 2]) + Math.abs(n[1] - i[i.length - 1]) + Math.abs(n[n.length - 2] - i[0]) + Math.abs(n[n.length - 1] - i[1]) || r % 2) ? (w(i), A[x] = -1, L = !0) : "auto" === r ? A[x] = 0 : "reverse" === r && (A[x] = -1), i.closed !== n.closed && (i.closed = n.closed = !1));
                    return D && l("shapeIndex:[" + A.join(",") + "]"), A
                }
            },
            D = function(e, t, r, o) {
                var n = C(e[0]),
                    i = C(e[1]);
                L(n, i, t || 0 === t ? t : "auto", r) && (e[0] = S(n), e[1] = S(i), ("log" === o || o === !0) && l('precompile:["' + e[0] + '","' + e[1] + '"]'))
            },
            q = function(e, t, r) {
                return t || r || e || 0 === e ? function(o) {
                    D(o, e, t, r)
                } : D
            },
            z = function(e, t) {
                if (!t) return e;
                var r, n, i, a = e.match(o) || [],
                    s = a.length,
                    h = "";
                for ("reverse" === t ? (n = s - 1, r = -2) : (n = (2 * (parseInt(t, 10) || 0) + 1 + 100 * s) % s, r = 2), i = 0; s > i; i += 2) h += a[n - 1] + "," + a[n] + " ", n = (n + r) % s;
                return h
            },
            G = function(e, t) {
                var r, o, n, i, a, s, h, f = 0,
                    g = parseFloat(e[0]),
                    u = parseFloat(e[1]),
                    d = g + "," + u + " ",
                    l = .999999;
                for (n = e.length, r = .5 * t / (.5 * n - 1), o = 0; n - 2 > o; o += 2) {
                    if (f += r, s = parseFloat(e[o + 2]), h = parseFloat(e[o + 3]), f > l)
                        for (a = 1 / (Math.floor(f) + 1), i = 1; f > l;) d += (g + (s - g) * a * i).toFixed(2) + "," + (u + (h - u) * a * i).toFixed(2) + " ", f--, i++;
                    d += s + "," + h + " ", g = s, u = h
                }
                return d
            },
            R = function(e) {
                var t = e[0].match(o) || [],
                    r = e[1].match(o) || [],
                    n = r.length - t.length;
                n > 0 ? e[0] = G(t, n) : e[1] = G(r, -n)
            },
            P = function(e) {
                return isNaN(e) ? R : function(t) {
                    R(t), t[1] = z(t[1], parseInt(e, 10))
                }
            },
            k = function(e, t) {
                var r, o = _gsScope.document.createElementNS("http://www.w3.org/2000/svg", "path"),
                    n = Array.prototype.slice.call(e.attributes),
                    i = n.length;
                for (t = "," + t + ","; --i > -1;) r = n[i].nodeName.toLowerCase(), -1 === t.indexOf("," + r + ",") && o.setAttributeNS(null, r, n[i].nodeValue);
                return o
            },
            B = function(e, t) {
                var r, n, i, a, s, h, f, g, u, d, l, c, p, C, m, S, w, x, y, _, v, b = e.tagName.toLowerCase(),
                    M = .552284749831;
                return "path" !== b && e.getBBox ? (h = k(e, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), "rect" === b ? (a = +e.getAttribute("rx") || 0, s = +e.getAttribute("ry") || 0, n = +e.getAttribute("x") || 0, i = +e.getAttribute("y") || 0, d = (+e.getAttribute("width") || 0) - 2 * a, l = (+e.getAttribute("height") || 0) - 2 * s, a || s ? (c = n + a * (1 - M), p = n + a, C = p + d, m = C + a * M, S = C + a, w = i + s * (1 - M), x = i + s, y = x + l, _ = y + s * M, v = y + s, r = "M" + S + "," + x + " V" + y + " C" + [S, _, m, v, C, v, C - (C - p) / 3, v, p + (C - p) / 3, v, p, v, c, v, n, _, n, y, n, y - (y - x) / 3, n, x + (y - x) / 3, n, x, n, w, c, i, p, i, p + (C - p) / 3, i, C - (C - p) / 3, i, C, i, m, i, S, w, S, x].join(",") + "z") : r = "M" + (n + d) + "," + i + " v" + l + " h" + -d + " v" + -l + " h" + d + "z") : "circle" === b || "ellipse" === b ? ("circle" === b ? (a = s = +e.getAttribute("r") || 0, g = a * M) : (a = +e.getAttribute("rx") || 0, s = +e.getAttribute("ry") || 0, g = s * M), n = +e.getAttribute("cx") || 0, i = +e.getAttribute("cy") || 0, f = a * M, r = "M" + (n + a) + "," + i + " C" + [n + a, i + g, n + f, i + s, n, i + s, n - f, i + s, n - a, i + g, n - a, i, n - a, i - g, n - f, i - s, n, i - s, n + f, i - s, n + a, i - g, n + a, i].join(",") + "z") : "line" === b ? r = "M" + (e.getAttribute("x1") || 0) + "," + (e.getAttribute("y1") || 0) + " L" + (e.getAttribute("x2") || 0) + "," + (e.getAttribute("y2") || 0) : ("polyline" === b || "polygon" === b) && (u = (e.getAttribute("points") + "").match(o) || [], n = u.shift(), i = u.shift(), r = "M" + n + "," + i + " L" + u.join(","), "polygon" === b && (r += "," + n + "," + i + "z")), h.setAttribute("d", r), t && e.parentNode && (e.parentNode.insertBefore(h, e), e.parentNode.removeChild(e)), h) : e
            },
            E = function(e, t, r) {
                var i, a, h = "string" == typeof e;
                return (!h || n.test(e) || (e.match(o) || []).length < 3) && (i = h ? s.selector(e) : e && e[0] ? e : [e], i && i[0] ? (i = i[0], a = i.nodeName.toUpperCase(), t && "PATH" !== a && (i = B(i, !1), a = "PATH"), e = i.getAttribute("PATH" === a ? "d" : "points") || "", i === r && (e = i.getAttributeNS(null, "data-original") || e)) : (l("WARNING: invalid morph to: " + e), e = !1)), e
            },
            V = "Use MorphSVGPlugin.convertToPath(elementOrSelectorText) to convert to a path before morphing.",
            F = _gsScope._gsDefine.plugin({
                propName: "morphSVG",
                API: 2,
                global: !0,
                version: "0.8.10",
                init: function(e, t, r, o) {
                    var n, a, s, c, p;
                    return "function" != typeof e.setAttribute ? !1 : d ? ("function" == typeof t && (t = t(o, e)), n = e.nodeName.toUpperCase(), p = "POLYLINE" === n || "POLYGON" === n, "PATH" === n || p ? (a = "PATH" === n ? "d" : "points", ("string" == typeof t || t.getBBox || t[0]) && (t = {
                        shape: t
                    }), c = E(t.shape || t.d || t.points || "", "d" === a, e), p && i.test(c) ? (l("WARNING: a <" + n + "> cannot accept path data. " + V), !1) : (c && (this._target = e, e.getAttributeNS(null, "data-original") || e.setAttributeNS(null, "data-original", e.getAttribute(a)), s = this._addTween(e, "setAttribute", e.getAttribute(a) + "", c + "", "morphSVG", !1, a, "object" == typeof t.precompile ? function(e) {
                        e[0] = t.precompile[0], e[1] = t.precompile[1]
                    } : "d" === a ? q(t.shapeIndex, t.map || F.defaultMap, t.precompile) : P(t.shapeIndex)), s && (this._overwriteProps.push("morphSVG"), s.end = c, s.endProp = a)), d)) : (l("WARNING: cannot morph a <" + n + "> SVG element. " + V), !1)) : (window.location.href = "http://" + g + u + "?plugin=" + f + "&source=" + h, !1)
                },
                set: function(e) {
                    var t;
                    if (this._super.setRatio.call(this, e), 1 === e)
                        for (t = this._firstPT; t;) t.end && this._target.setAttribute(t.endProp, t.end), t = t._next
                }
            });
        F.pathFilter = D, F.pointsFilter = R, F.subdivideRawBezier = m, F.defaultMap = "size", F.pathDataToRawBezier = function(e) {
            return C(E(e, !0))
        }, F.equalizeSegmentQuantity = L, F.convertToPath = function(e, t) {
            "string" == typeof e && (e = s.selector(e));
            for (var r = e && 0 !== e.length ? e.length && e[0] && e[0].nodeType ? Array.prototype.slice.call(e, 0) : [e] : [], o = r.length; --o > -1;) r[o] = B(r[o], t !== !1);
            return r
        }, F.pathDataToBezier = function(e, t) {
            var r, o, n, i, a, h, f, g, cx, cy, u = C(E(e, !0))[0] || [],
                d = 0;
            if (t = t || {}, g = t.align || t.relative, i = t.matrix || [1, 0, 0, 1, 0, 0], a = t.offsetX || 0, h = t.offsetY || 0, "relative" === g || g === !0 ? (a -= u[0] * i[0] + u[1] * i[2], h -= u[0] * i[1] + u[1] * i[3], d = "+=") : (a += i[4], h += i[5], g && (g = "string" == typeof g ? s.selector(g) : g && g[0] ? g : [g], g && g[0] && (f = g[0].getBBox() || {
                    x: 0,
                    y: 0
                }, a -= f.x, h -= f.y))), r = [], n = u.length, i && "1,0,0,1,0,0" !== i.join(","), cx = t.centerX || 0, cy = t.centerY || 0)
                for (o = 0; n > o; o += 2) r.push({
                    x: d + ((u[o] - cx) * i[0] + (u[o + 1] - cy) * i[2] + a + cx),
                    y: d + ((u[o] - cx) * i[1] + (u[o + 1] - cy) * i[3] + h + cy)
                });
            else
                for (o = 0; n > o; o += 2) r.push({
                    x: d + (u[o] + a),
                    y: d + (u[o + 1] + h)
                });
            return r
        }
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(e) {
        "use strict";
        var t = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[e]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], t) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = t())
    }("MorphSVGPlugin");