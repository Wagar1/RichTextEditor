fire = function () {
    var a = 0,
        b = function () {
            a = 1
        },
        g = 0,
        k = function () {
            g = 1
        };
    return function (l, q, v) {
        var f = d(this)[l];
        l = a;
        var y = g;
        a = g = 0;
        if (f) {
            var A = f.listeners;
            if (A.length)
                for (var A = A.slice(0), r, D = 0; D < A.length; D++) {
                    if (f.errorProof) try {
                        r =
                            A[D].call(this, v, q, b, k)
                    } catch (n) {} else r = A[D].call(this, v, q, b, k);
                    !1 === r ? g = 1 : "undefined" != typeof r && (q = r);
                    if (a || g) break
                }
        }
        q = g ? !1 : "undefined" == typeof q ? !0 : q;
        a = l;
        g = y;
        return q
    }
}()