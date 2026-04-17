(function(a) {
  function d(a, b, d) {
    this.e = a;
    this.f = b;
    this.h = d
  }

  function b(a) {
    return a * a * a * (a * (6 * a - 15) + 10)
  }

  function e(a, b, d) {
    return (1 - d) * a + d * b
  }
  a = a.noise = {};
  d.prototype.A = function(a, b) {
    return this.e * a + this.f * b
  };
  d.prototype.m = function(a, b, d) {
    return this.e * a + this.f * b + this.h * d
  };
  var f = [new d(1, 1, 0), new d(-1, 1, 0), new d(1, -1, 0), new d(-1, -1, 0), new d(1, 0, 1), new d(-1, 0, 1), new d(1, 0, -1), new d(-1, 0, -1), new d(0, 1, 1), new d(0, -1, 1), new d(0, 1, -1), new d(0, -1, -1)],
    g = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225,
      140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170,
      213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180
    ],
    k = Array(512),
    l = Array(512);
  a.U = function(a) {
    0 < a && 1 > a && (a *= 65536);
    a = Math.floor(a);
    256 > a && (a |= a << 8);
    for (var b = 0; 256 > b; b++) {
      var d;
      d = b & 1 ? g[b] ^ a & 255 : g[b] ^
        a >> 8 & 255;
      k[b] = k[b + 256] = d;
      l[b] = l[b + 256] = f[d % 12]
    }
  };
  a.U(0);
  var n = .5 * (Math.sqrt(3) - 1),
    m = (3 - Math.sqrt(3)) / 6,
    B = 1 / 3,
    A = 1 / 6;
  a.$ = function(a, b) {
    var d, e, f;
    f = (a + b) * n;
    var g = Math.floor(a + f),
      w = Math.floor(b + f);
    f = (g + w) * m;
    d = a - g + f;
    var u = b - w + f,
      t, E;
    d > u ? (t = 1, E = 0) : (t = 0, E = 1);
    e = d - t + m;
    var v = u - E + m;
    f = d - 1 + 2 * m;
    var z = u - 1 + 2 * m,
      g = g & 255,
      w = w & 255,
      A = l[g + k[w]];
    t = l[g + t + k[w + E]];
    g = l[g + 1 + k[w + 1]];
    w = .5 - d * d - u * u;
    0 > w ? d = 0 : (w *= w, d = w * w * A.A(d, u));
    u = .5 - e * e - v * v;
    0 > u ? e = 0 : (u *= u, e = u * u * t.A(e, v));
    v = .5 - f * f - z * z;
    0 > v ? f = 0 : (v *= v, f = v * v * g.A(f, z));
    return 70 * (d + e + f)
  };
  a.aa = function(a, b, d) {
    var e, f, g = (a + b + d) * B,
      m = Math.floor(a + g);
    e = Math.floor(b + g);
    var u = Math.floor(d + g),
      g = (m + e + u) * A;
    f = a - m + g;
    var t = b - e + g,
      n = d - u + g,
      v, z, Ea, pa, Na, Oa;
    f >= t ? t >= n ? (v = 1, Ea = z = 0, Na = pa = 1, Oa = 0) : (f >= n ? (v = 1, Ea = z = 0) : (z = v = 0, Ea = 1), pa = 1, Na = 0, Oa = 1) : t < n ? (z = v = 0, Ea = 1, pa = 0, Oa = Na = 1) : f < n ? (v = 0, z = 1, pa = Ea = 0, Oa = Na = 1) : (v = 0, z = 1, Ea = 0, Na = pa = 1, Oa = 0);
    var Wb = f - v + A,
      Xb = t - z + A,
      Yb = n - Ea + A;
    a = f - pa + 2 * A;
    var ka = t - Na + 2 * A,
      Zb = n - Oa + 2 * A;
    d = f - 1 + 3 * A;
    b = t - 1 + 3 * A;
    g = n - 1 + 3 * A;
    m &= 255;
    e &= 255;
    var u = u & 255,
      bd = l[m + k[e + k[u]]];
    v = l[m + v + k[e + z + k[u + Ea]]];
    pa = l[m +
      pa + k[e + Na + k[u + Oa]]];
    m = l[m + 1 + k[e + 1 + k[u + 1]]];
    e = .6 - f * f - t * t - n * n;
    0 > e ? e = 0 : (e *= e, e = e * e * bd.m(f, t, n));
    f = .6 - Wb * Wb - Xb * Xb - Yb * Yb;
    0 > f ? f = 0 : (f *= f, f = f * f * v.m(Wb, Xb, Yb));
    u = .6 - a * a - ka * ka - Zb * Zb;
    0 > u ? a = 0 : (u *= u, a = u * u * pa.m(a, ka, Zb));
    ka = .6 - d * d - b * b - g * g;
    0 > ka ? d = 0 : (ka *= ka, d = ka * ka * m.m(d, b, g));
    return 32 * (e + f + a + d)
  };
  a.K = function(a, d) {
    var f = Math.floor(a),
      g = Math.floor(d);
    a = a - f;
    d = d - g;
    var f = f & 255,
      g = g & 255,
      m = b(a);
    return e(e(l[f + k[g]].A(a, d), l[f + 1 + k[g]].A(a - 1, d), m), e(l[f + k[g + 1]].A(a, d - 1), l[f + 1 + k[g + 1]].A(a - 1, d - 1), m), b(d))
  };
  a.Z = function(a,
    d, f) {
    var g = Math.floor(a),
      m = Math.floor(d),
      n = Math.floor(f);
    a = a - g;
    d = d - m;
    f = f - n;
    var g = g & 255,
      m = m & 255,
      n = n & 255,
      w = b(a),
      u = b(f);
    return e(e(e(l[g + k[m + k[n]]].m(a, d, f), l[g + 1 + k[m + k[n]]].m(a - 1, d, f), w), e(l[g + k[m + k[n + 1]]].m(a, d, f - 1), l[g + 1 + k[m + k[n + 1]]].m(a - 1, d, f - 1), w), u), e(e(l[g + k[m + 1 + k[n]]].m(a, d - 1, f), l[g + 1 + k[m + 1 + k[n]]].m(a - 1, d - 1, f), w), e(l[g + k[m + 1 + k[n + 1]]].m(a, d - 1, f - 1), l[g + 1 + k[m + 1 + k[n + 1]]].m(a - 1, d - 1, f - 1), w), u), b(d))
  }
})(this);
var h, aa, ba, da, ea, fa = null,
  ga = !1,
  p, ha, ia, ja, la, ma, na;

function qa(a, d) {
  var b = h.createProgram(),
    e = ra(a, h.VERTEX_SHADER),
    f = ra(d, h.FRAGMENT_SHADER);
  h.attachShader(b, e);
  h.attachShader(b, f);
  h.linkProgram(b);
  if (!h.getProgramParameter(b, h.LINK_STATUS)) throw h.getProgramInfoLog(b);
  return b
}

function ra(a, d) {
  var b = h.createShader(d);
  h.shaderSource(b, a);
  h.compileShader(b);
  if (!h.getShaderParameter(b, h.COMPILE_STATUS)) throw h.getShaderInfoLog(b);
  return b
}

function sa(a) {
  da != a && (da = a, h.useProgram(a))
}

function ta() {
  ga = !1;
  var a = Date.now();
  na = .001 * (a - ma);
  ma = a;
  null != fa && (la++, fa())
}

function q() {
  ga || (ga = !0, requestAnimationFrame(ta))
}

function ua() {
  var a = window.innerWidth,
    d = window.innerHeight,
    b = document.getElementById("ad");
  void 0 != b && (d -= b.clientHeight);
  var b = aa,
    e = Math.floor(p * a),
    f = Math.floor(p * d);
  if (e != ha || f != ia) ha = e, ia = f, b.width = e, b.height = f, b.style.width = a + "px", b.style.height = d + "px", h.viewport(0, 0, e, f)
}

function va(a) {
  fa = a;
  null != a && q()
}

function wa(a) {
  a != ja && (ja = a, h.activeTexture(a.P), h.bindTexture(h.TEXTURE_2D, a.X))
}

function xa(a) {
  var d = r.prototype.s,
    b = new XMLHttpRequest;
  b.open("GET", a, !0);
  b.responseType = "arraybuffer";
  b.onerror = function() {};
  b.onload = function() {
    var a = new Uint8Array(this.response);
    d(a)
  };
  b.send()
}

function ya() {
  var a = za,
    d = new XMLHttpRequest;
  d.open("GET", "img/golf0.bin", !0);
  d.responseType = "arraybuffer";
  d.onerror = function() {};
  var b = this;
  this.h = null;
  this.e = 0;
  this.o = this.f = null;
  d.onload = function() {
    b.h = new Uint8Array(this.response);
    b.e = 0;
    var d = Aa(b);
    Aa(b);
    b.f = new Int32Array(d + 1);
    for (var f = 0; f < d; f++) b.f[f] = Aa(b);
    b.f[d] = 0;
    for (var g = b.e, f = 0; f <= d; f++) {
      var k = b.f[f];
      b.f[f] = g;
      g += k
    }
    b.o = Array(d);
    a()
  };
  d.send()
}

function Aa(a) {
  var d, b = a.h[a.e++];
  if (128 <= b) {
    b &= 127;
    do d = a.h[a.e++], b = b << 7 | d & 127; while (128 <= d)
  }
  return b
}

function Ba(a, d, b, e) {
  var f = a.o[d];
  null == f && (a.e = a.f[d], null == f && (f = new Ca), e && Da(f, b), a.o[d] = f, f.M = Aa(a), f.H = Aa(a), f.N = Aa(a), f.O = Aa(a), b = a.h[a.e++], 112 == b ? (b = "image/png", f.p = !0) : (b = "image/jpeg", f.p = !1), e = a.e, a = new Blob([new Uint8Array(a.h.buffer, e, a.f[d + 1] - e)], {
    type: b
  }), f.u.onload = function() {
    window.URL.revokeObjectURL(this.src);
    Fa.call(this);
    q()
  }, f.u.src = window.URL.createObjectURL(a));
  return f
}

function Ga() {
  this.k = new Float32Array(16)
}
Ga.prototype.multiply = function(a, d) {
  var b = a.k,
    e = d.k,
    f = this.k,
    g = b[0],
    k = b[1],
    l = b[2],
    n = b[3],
    m = b[4],
    B = b[5],
    A = b[6],
    S = b[7],
    ca = b[8],
    Za = b[9],
    oa = b[10],
    $a = b[11],
    M = b[12],
    w = b[13],
    u = b[14],
    b = b[15],
    t = e[0],
    E = e[1],
    v = e[2],
    z = e[3];
  f[0] = t * g + E * m + v * ca + z * M;
  f[1] = t * k + E * B + v * Za + z * w;
  f[2] = t * l + E * A + v * oa + z * u;
  f[3] = t * n + E * S + v * $a + z * b;
  t = e[4];
  E = e[5];
  v = e[6];
  z = e[7];
  f[4] = t * g + E * m + v * ca + z * M;
  f[5] = t * k + E * B + v * Za + z * w;
  f[6] = t * l + E * A + v * oa + z * u;
  f[7] = t * n + E * S + v * $a + z * b;
  t = e[8];
  E = e[9];
  v = e[10];
  z = e[11];
  f[8] = t * g + E * m + v * ca + z * M;
  f[9] = t * k + E * B + v * Za + z * w;
  f[10] = t * l + E *
    A + v * oa + z * u;
  f[11] = t * n + E * S + v * $a + z * b;
  t = e[12];
  E = e[13];
  v = e[14];
  z = e[15];
  f[12] = t * g + E * m + v * ca + z * M;
  f[13] = t * k + E * B + v * Za + z * w;
  f[14] = t * l + E * A + v * oa + z * u;
  f[15] = t * n + E * S + v * $a + z * b
};
Ga.prototype.perspective = function(a, d, b, e) {
  var f = this.k;
  a = 1 / Math.tan(a * Math.PI / 180 / 2);
  var g = 1 / (b - e);
  f[0] = a / d;
  f[1] = 0;
  f[2] = 0;
  f[3] = 0;
  f[4] = 0;
  f[5] = a;
  f[6] = 0;
  f[7] = 0;
  f[8] = 0;
  f[9] = 0;
  f[10] = (e + b) * g;
  f[11] = -1;
  f[12] = 0;
  f[13] = 0;
  f[14] = 2 * e * b * g;
  f[15] = 0
};
Ga.prototype.scale = function(a, d, b) {
  this[0] *= a;
  this[1] *= a;
  this[2] *= a;
  this[3] *= a;
  this[4] *= d;
  this[5] *= d;
  this[6] *= d;
  this[7] *= d;
  this[8] *= b;
  this[9] *= b;
  this[10] *= b;
  this[11] *= b
};
Ga.prototype.translate = function(a, d, b) {
  var e = this.k;
  e[12] = e[0] * a + e[4] * d + e[8] * b + e[12];
  e[13] = e[1] * a + e[5] * d + e[9] * b + e[13];
  e[14] = e[2] * a + e[6] * d + e[10] * b + e[14];
  e[15] = e[3] * a + e[7] * d + e[11] * b + e[15]
};

function Fa() {
  var a = this.o;
  a.M = this.width;
  a.H = this.height;
  wa(a);
  a.p ? h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, h.RGBA, h.UNSIGNED_BYTE, this) : h.texImage2D(h.TEXTURE_2D, 0, h.RGB, h.RGB, h.UNSIGNED_SHORT_5_6_5, this);
  if (a.I) {
    if (ea) {
      var d = h.getExtension("EXT_texture_filter_anisotropic");
      if (d) {
        var b = h.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
        h.activeTexture(a.P);
        h.texParameterf(h.TEXTURE_2D, d.TEXTURE_MAX_ANISOTROPY_EXT, b)
      }
    }
    h.generateMipmap(h.TEXTURE_2D);
    ea ? h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, h.LINEAR_MIPMAP_LINEAR) :
      h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, h.LINEAR_MIPMAP_NEAREST)
  } else h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, h.LINEAR);
  a.u = null;
  a.p && (h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE));
  h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, h.LINEAR);
  a.q = !0;
  q()
}

function Ca() {
  this.I = this.p = !1;
  this.P = h.TEXTURE0;
  this.u = new Image;
  this.u.crossOrigin = "anonymous";
  this.u.onload = Fa;
  this.X = h.createTexture();
  this.q = !1;
  this.O = this.N = this.H = this.M = 0;
  this.T = this.S = 1;
  this.u.o = this
}

function Da(a, d) {
  a.I = !0;
  a.P = h.TEXTURE0 + d
}
x.prototype.V = [];

function x() {
  this.p = 1;
  this.s = 0;
  this.h = null;
  this.I = !1;
  this.R = null;
  this.J = this.q = !1;
  this.o = null;
  this.e = 1;
  this.Q = !1;
  this.d = this.a = this.b = 0;
  x.prototype.V.push(this);
  null == x.prototype.F && (x.prototype.F = h.createBuffer(), x.prototype.t = new Float32Array(20), x.prototype.f = qa("uniform mat4 uMVPMatrix;attribute vec4 aPosition;attribute vec2 aTextureCoord;varying vec2 vTextureCoord;void main() {  gl_Position = uMVPMatrix * aPosition;  vTextureCoord = aTextureCoord;}", "precision mediump float;varying vec2 vTextureCoord;uniform sampler2D sTexture;uniform vec4 uColor;void main() {  vec4 c = texture2D(sTexture, vTextureCoord);  if (c.a == 0.0) discard;  gl_FragColor = c * uColor;}"),
    x.prototype.D = h.getAttribLocation(this.f, "aPosition"), x.prototype.G = h.getAttribLocation(this.f, "aTextureCoord"), x.prototype.W = h.getUniformLocation(this.f, "uMVPMatrix"), x.prototype.L = h.getUniformLocation(this.f, "uColor"))
}

function Ha(a, d, b) {
  var e = Ia;
  if (a.s != d || a.h != e) a.I = b, a.h = e, a.s = d, a.q = Ba(e, d, 0, b).q, q()
}
x.prototype.ready = function() {
  return this.q
};
x.prototype.j = function(a, d) {
  var b = this.o;
  if (null != this.h) {
    var e = Ba(this.h, this.s, 0, this.I);
    b != e && null != e && e.q && (this.o = b = e, this.q = !0)
  }
  if (null != b && b.q) {
    sa(x.prototype.f);
    wa(b);
    b.p && (h.enable(h.BLEND), h.blendFunc(h.SRC_ALPHA, h.ONE_MINUS_SRC_ALPHA));
    h.uniform4f(x.prototype.L, 1, 1, 1, this.p);
    h.uniformMatrix4fv(x.prototype.W, !1, d.k);
    var f, g, k, l, n = b.S,
      m = b.T;
    if (null == a) l = this.e, e = this.b - l * b.N, f = this.a + l * b.O, g = this.d, k = n * l * b.M, l = m * l * b.H, Ja(e, f - l, g, e + k, f, g, 0, n, m);
    else {
      g = this.b;
      k = this.a;
      l = this.d;
      var B = a.k,
        e =
        B[0] * g + B[4] * k + B[8] * l + B[12];
      f = B[1] * g + B[5] * k + B[9] * l + B[13];
      g = B[2] * g + B[6] * k + B[10] * l + B[14];
      l = this.e;
      e = e - b.N * l;
      f += b.O * l;
      k = n * l * b.M;
      l = m * l * b.H;
      this.Q ? Ja(e - k, f - l, g, e, f, g, n, 0, m) : Ja(e, f - l, g, e + k, f, g, 0, n, m)
    }
    h.bindBuffer(h.ARRAY_BUFFER, this.F);
    h.bufferData(h.ARRAY_BUFFER, this.t, h.DYNAMIC_DRAW);
    h.vertexAttribPointer(this.D, 3, h.FLOAT, !1, 20, 0);
    h.enableVertexAttribArray(this.D);
    h.vertexAttribPointer(this.G, 2, h.FLOAT, !1, 20, 12);
    h.enableVertexAttribArray(this.G);
    h.drawArrays(h.TRIANGLE_STRIP, 0, 4);
    this.J && (h.uniform4f(x.prototype.L,
      0, 0, 0, .25), n = x.prototype.t, m = .5 * l, f -= l - .25, g = g - 1 * m, this.Q && (e -= k), n[10] = e - m, n[11] = f, n[12] = g, n[15] = e + k - m, n[16] = f, n[17] = g, h.bufferData(h.ARRAY_BUFFER, n, h.DYNAMIC_DRAW), h.drawArrays(h.TRIANGLE_STRIP, 0, 4));
    b.p && h.disable(h.BLEND)
  } else q()
};

function Ja(a, d, b, e, f, g, k, l, n) {
  var m = x.prototype.t;
  m[0] = a;
  m[1] = d;
  m[2] = b;
  m[3] = k;
  m[4] = 0;
  m[5] = e;
  m[6] = d;
  m[7] = b;
  m[8] = l;
  m[9] = 0;
  m[10] = a;
  m[11] = f;
  m[12] = g;
  m[13] = k;
  m[14] = n;
  m[15] = e;
  m[16] = f;
  m[17] = g;
  m[18] = l;
  m[19] = n
}

function Ka(a, d) {
  a.b = d.b;
  a.a = d.a;
  a.d = d.d
}
x.prototype.g = function(a, d, b) {
  this.b = a;
  this.a = d;
  this.d = b
};

function y() {
  this.d = this.a = this.b = 0
}

function La(a, d) {
  a.b += d.b;
  a.a += d.a;
  a.d += d.d
}

function Ma(a, d) {
  a.b = d.b;
  a.a = d.a;
  a.d = d.d
}

function Pa(a, d, b) {
  a.g(d.a * b.d - d.d * b.a, d.d * b.b - d.b * b.d, d.b * b.a - d.a * b.b)
}

function Qa(a, d) {
  return a.b * d.b + a.a * d.a + a.d * d.d
}

function Ra(a) {
  return a.b * a.b + a.a * a.a + a.d * a.d
}

function Sa(a, d, b) {
  a.b += d.b * b;
  a.a += d.a * b;
  a.d += d.d * b
}
y.prototype.multiply = function(a) {
  this.b *= a;
  this.a *= a;
  this.d *= a
};

function Ta(a, d) {
  return a.b > -d && a.b < d && a.a > -d && a.a < d && a.d > -d && a.d < d
}

function Ua(a) {
  a.b = -a.b;
  a.a = -a.a;
  a.d = -a.d
}

function Va(a) {
  var d = a.b * a.b + a.a * a.a + a.d * a.d;
  0 < d && (d = 1 / Math.sqrt(d), a.b *= d, a.a *= d, a.d *= d)
}

function Wa(a, d, b, e) {
  var f = d * Math.PI / 180;
  d = Math.sin(f);
  f = Math.cos(f);
  a.b = b * f - e * d;
  a.a = e * f + b * d
}
y.prototype.g = function(a, d, b) {
  this.b = a;
  this.a = d;
  this.d = b
};
var C = 1 / 6,
  Xa = C / 12,
  Ya = 3 * C,
  ab = 20 * C,
  bb = Math.floor(76.5),
  cb = bb + 1,
  db = bb + 2,
  eb = Math.floor(102),
  fb = Math.floor(153),
  gb = Math.floor(178.5),
  hb = 32946.176 * C / 1E3,
  ib = 6 * C,
  jb = 2048 / 22.5,
  kb, D, F, lb, mb, nb, ob, pb, qb, G, rb, sb, tb, ub, vb, H, wb, I, J, xb, yb, K, zb, L, N, Ab, O, P, Bb, Cb, Db, Eb, Ia, Fb, Gb, Hb, Ib, Q, Jb, Kb, Lb, R, Mb, Nb, Ob, T, Pb, Qb, Rb, Sb, U, Tb, Ub, Vb, $b, ac, bc, cc, dc, ec, fc, gc, hc, V = new y,
  ic, jc = [12, 15, 16, 20, 24, 28, 32, 36, 40, 60, 0],
  kc = [250 * Ya, 230 * Ya, 200 * Ya, 185 * Ya, 170 * Ya, 155 * Ya, 140 * Ya, 125 * Ya, 110 * Ya, 60 * Ya, 100 * C],
  lc = ["Sierra Pines", "Desert Palms",
    "Maritime Moors"
  ],
  mc = [44.5, 218, 37.5, 38, 37.5, 38, 89, 47.5, 93.5, 126, 93.5, 126, 145.5, 230.5, 236, 28, 150, 83.5, 44.5, 220.5, 47, 35.5, 47, 35.5, 96.5, 75, 95, 166, 95, 166, 141, 225, 229.5, 28.5, 151.5, 125.5, 87.5, 224.5, 44, 67, 80.5, 101, 136, 134, 139.5, 190, 139.5, 190, 213, 222, 153.5, 30.5, 205.5, 152, 44, 218, 46, 47, 46, 47, 88, 98, 92, 193, 92, 193, 223.5, 232.5, 118, 33.5, 213.5, 91.5, 37.5, 223.5, 75, 69, 45, 107.5, 95.5, 126, 95, 214, 95, 214, 144.5, 230, 231, 31, 144, 84.5, 45, 201, 42, 48.5, 42, 48.5, 82.5, 76, 87.5, 192.5, 87.5, 192.5, 221, 228.5, 99.5, 28, 226, 108, 39.5, 232.75,
    29, 30.25, 29, 30.25, 85, 79, 87.25, 171.5, 87.25, 171.5, 204.5, 231.5, 93.5, 32, 210, 104.5, 31, 227.5, 63.5, 33.5, 63.5, 33.5, 99.5, 115, 106, 209, 106, 209, 147.25, 227, 223, 32, 149, 112.75, 39.5, 232.25, 51.25, 31.75, 51.25, 31.75, 87.5, 94.75, 84.25, 200, 84.25, 200, 204.25, 232.25, 99.25, 47.75, 202, 101.5, 33.25, 226, 67.25, 37, 25.25, 146.75, 101.5, 86, 98.75, 191, 98.75, 191, 152, 219.75, 208.75, 29.5, 140.5, 102.25, 29.5, 224, 79, 35.5, 35.5, 96, 134, 145.75, 144.25, 224.75, 144.25, 224.75, 204.5, 232.75, 134.75, 30.25, 203, 131, 39.5, 230.75, 97.25, 34.75, 41.5, 101, 85, 82, 89.5,
    199, 89.5, 199, 133.25, 223, 215, 34.25, 130.25, 83.5, 46.5, 230.5, 106, 30, 38.5, 89.5, 96, 75.5, 81.5, 153.5, 81.5, 153.5, 111.5, 231.5, 224.5, 30.5, 136.5, 124, 91, 232.5, 37, 39.5, 76, 90, 138, 77, 140, 166.5, 140, 166.5, 222, 234.5, 107.5, 23, 222, 43, 34.5, 227.5, 37, 36, 49.5, 109.5, 113.5, 123.5, 112.5, 192, 112.5, 192, 219, 235, 92.5, 31.5, 209, 52.5, 29, 200, 32, 31.5, 38, 98, 72, 100, 68.5, 228.5, 68.5, 228.5, 116, 232, 228.5, 24, 107.5, 53, 38, 230, 129.5, 51, 41, 77, 98.5, 123.5, 98, 231.5, 98, 231.5, 141.5, 231, 77.5, 24, 193, 76.5, 32.5, 228.5, 31.5, 63.5, 32, 115.5, 75.5, 115.5, 79, 183,
    79, 183, 222.5, 226.5, 78.5, 46.5, 220, 60
  ],
  nc = "1_3 1_3 1_3 4_6 4_6 4_6 7_9 7_9 7_9 10_12 10_12 10_12 13_15 13_15 13_15 16_18 16_18 16_18".split(" "),
  oc = [4, 3, 5, 4, 3, 5, 4, 3, 5, 4, 3, 5, 4, 3, 5, 4, 3, 5];

function W(a, d) {
  this.b = a;
  this.a = d;
  this.d = 0;
  this.q = !1;
  this.f = h.createBuffer();
  this.o = null;
  if (void 0 === W.prototype.e) {
    var b = qa("uniform mat4 uMVPMatrix;attribute vec4 aPosition;attribute vec4 at0;attribute vec3 at1;varying mediump vec2 txy;varying lowp vec4 t0;varying lowp vec3 t1;void main() {  gl_Position = uMVPMatrix * aPosition;  txy = 0.125 * aPosition.xy;  t0 = 1.4 * at0;  t1 = 1.4 * at1;}", "precision lowp float;varying mediump vec2 txy;varying lowp vec4 t0;varying lowp vec3 t1;uniform sampler2D sTexture;uniform sampler2D sTexture1;uniform sampler2D sTexture2;uniform sampler2D sTexture3;uniform sampler2D sTexture4;uniform sampler2D sTexture5;uniform sampler2D sTexture6;void main() {gl_FragColor =  t0.x * texture2D(sTexture,  txy)+ t0.y * texture2D(sTexture1, txy)+ t0.z * texture2D(sTexture2, txy)+ t0.a * texture2D(sTexture3, txy)+ t1.x * texture2D(sTexture4, txy)+ t1.y * texture2D(sTexture5, txy)+ t1.z * texture2D(sTexture6, txy);}");
    W.prototype.e = b;
    sa(b);
    h.uniform1i(h.getUniformLocation(b, "sTexture"), 7);
    h.uniform1i(h.getUniformLocation(b, "sTexture1"), 1);
    h.uniform1i(h.getUniformLocation(b, "sTexture2"), 2);
    h.uniform1i(h.getUniformLocation(b, "sTexture3"), 3);
    h.uniform1i(h.getUniformLocation(b, "sTexture4"), 4);
    h.uniform1i(h.getUniformLocation(b, "sTexture5"), 5);
    h.uniform1i(h.getUniformLocation(b, "sTexture6"), 6);
    W.prototype.h = h.getAttribLocation(this.e, "aPosition");
    W.prototype.s = h.getAttribLocation(this.e, "at0");
    W.prototype.t = h.getAttribLocation(this.e,
      "at1");
    W.prototype.L = h.getUniformLocation(this.e, "uMVPMatrix");
    var e = new ArrayBuffer(84500),
      b = new Float32Array(e);
    new Uint8Array(e);
    W.prototype.G = e;
    W.prototype.F = 8446;
    var e = new Uint16Array(W.prototype.F),
      f = 0,
      g = 0,
      k = 0;
    for (d = 64; 0 <= d; d--) {
      for (a = 0; 64 >= a; a++) b[k++] = a, b[k++] = d, b[k++] = 0, k += 2, e[f++] = g, e[f++] = g + 65, g++;
      if (0 != d) e[f++] = g - 1 + 65, e[f++] = g;
      else
        for (a = 0; 64 >= a; a++) b[k++] = a, b[k++] = 0, b[k++] = 0, k += 2
    }
    W.prototype.D = h.createBuffer();
    h.bindBuffer(h.ELEMENT_ARRAY_BUFFER, this.D);
    h.bufferData(h.ELEMENT_ARRAY_BUFFER,
      e, h.STATIC_DRAW)
  }
}
W.prototype.j = function() {
  h.bindBuffer(h.ARRAY_BUFFER, this.f);
  h.vertexAttribPointer(W.prototype.h, 3, h.FLOAT, !1, 20, 0);
  h.enableVertexAttribArray(W.prototype.h);
  h.vertexAttribPointer(W.prototype.s, 4, h.UNSIGNED_BYTE, !0, 20, 12);
  h.enableVertexAttribArray(W.prototype.s);
  h.vertexAttribPointer(W.prototype.t, 3, h.UNSIGNED_BYTE, !0, 20, 16);
  h.enableVertexAttribArray(W.prototype.t);
  h.drawElements(h.TRIANGLE_STRIP, W.prototype.F, h.UNSIGNED_SHORT, 0)
};
r.prototype.f = null;

function r() {}
r.prototype.s = function(a) {
  var d = r.prototype.h;
  void 0 == d && (d = new Float32Array(65536), r.prototype.h = d);
  for (var b = 0; 65536 > b; b++) d[b] = .0625 * a[458752 + b];
  var e = new Uint8Array(65536);
  r.prototype.t = e;
  for (var f = window.noise, g = 1; 255 > g; g++)
    for (var k = 1; 255 > k; k++) {
      var b = 256 * g + k,
        l = a[196608 + b];
      64 == l ? (d[b] += f.K(.25 * k, .25 * g), e[b] = fb) : (l = a[65536 + b], 32 <= l ? (e[b] = db, d[b] += .5 * f.K(.125 * k, .125 * g)) : (l = a[131072 + b], 0 != l ? e[b] = 255 : (l = a[262144 + b], 0 != l ? e[b] = 64 == l ? bb : cb : (l = a[0 + b], 0 != l ? (e[b] = fb, d[b] += .5 * f.K(.125 * k, .125 * g)) : (l = a[393216 +
        b], 0 != l ? (e[b] = eb, d[b] += f.K(.25 * k, .25 * g)) : (l = a[327680 + b], 0 != l && (e[b] = gb, d[b] += .5 * f.K(.125 * k, .125 * g))))))))
    }
  r.prototype.e = [];
  var e = new y,
    f = new y,
    l = new y,
    n = new y;
  n.g(2, 1, 4);
  Va(n);
  for (var m = 0; 256 > m; m += 64)
    for (var B = m + 64, A = 0; 256 > A; A += 64) {
      var S = new W(A + 32, 256 - m - 32);
      r.prototype.e.push(S);
      for (var ca = 0, Za = A + 64, g = W.prototype.G, oa = new Float32Array(g), $a = new Uint8Array(g), g = m; g <= B; g++)
        for (k = A; k <= Za; k++) {
          oa[ca] = k;
          oa[ca + 1] = 256 - g;
          var b = 256 * g + k,
            M = d[b];
          void 0 == M && (M = 0);
          oa[ca + 2] = M;
          var w = d[b - 1];
          void 0 == w && (w = 0);
          var u =
            d[b + 1];
          void 0 == u && (u = 0);
          var t = d[b + 256 - 1];
          void 0 == t && (t = 0);
          b = d[b + 256 + 1];
          void 0 == b && (b = 0);
          w = w - M;
          u = u - M;
          t = t - M;
          b = b - M; - 1 > w || 1 < w || -1 > t || 1 < t || -1 > u || 1 < u || -1 > b || 1 < b ? (w *= .5, t *= .5, u *= .5, b *= .5) : (w *= 2, t *= 2, u *= 2, b *= 2);
          f.g(1, 0, u);
          l.g(0, 1, b);
          Pa(e, f, l);
          f.g(0, 1, b);
          l.g(-1, 0, w);
          Pa(f, f, l);
          La(e, f);
          f.g(-1, 0, w);
          l.g(0, -1, t);
          Pa(f, f, l);
          La(e, f);
          f.g(0, -1, t);
          l.g(1, 0, u);
          Pa(f, f, l);
          La(e, f);
          Va(e);
          M = Qa(e, n);
          M += .25;
          M *= 2.98828125;
          w = 4 * (ca + 3);
          u = 256 * g + k;
          for (b = 0; 7 > b; b++) t = Math.floor(a[65536 * b + u] * M), 255 < t && (t = 255), $a[w + b] = t;
          ca += 5
        }
      g = S;
      h.bindBuffer(h.ARRAY_BUFFER,
        g.f);
      h.bufferData(h.ARRAY_BUFFER, g.G, h.STATIC_DRAW);
      g.q = !0;
      S.d = oa[2]
    }
  r.prototype.f()
};
r.prototype.blur = function(a, d) {
  for (var b = 0, e = 0; 256 > e; e++) {
    var f = e,
      g = a[b],
      k = a[b + 1],
      l = 3 * g;
    d[f] = .25 * (l + k);
    for (var f = f + 256, l = b + 256 - 1, n = b + 1; n < l; n++) {
      var m = a[n + 1];
      d[f] = .25 * (g + 2 * k + m);
      g = k;
      k = m;
      f += 256
    }
    l = 3 * a[l];
    d[f] = .25 * (k + l);
    b += 256
  }
};
r.prototype.onload = function() {};

function pc(a, d, b) {
  d = 256 - d;
  var e = Math.floor(a),
    f = Math.floor(d);
  a = a - e;
  d -= f;
  var g, k;
  k = r.prototype.h;
  if (0 > e || 255 <= e || 0 > f || 255 <= f) k = g = f = e = 0, r.prototype.i = 255;
  else {
    var l = 256 * f + e,
      e = k[l];
    r.prototype.i = r.prototype.t[l];
    f = k[l + 1];
    l += 256;
    g = k[l];
    k = k[l + 1]
  }
  a <= d ? (d = 1 - d, f = k - g, e = e - g, null != b && b.g(-f, e, 1)) : (a = 1 - a, g = f, f = e - g, e = k - g, null != b && b.g(f, -e, 1));
  return g + (f * a + e * d)
}

function qc() {
  this.e = new y;
  this.C = new y;
  this.f = new y;
  this.h = 1 / 65536;
  this.i = 0;
  this.B = new y
}
qc.prototype.acceleration = function() {
  var a = this.e;
  Ma(a, this.B);
  Ua(a);
  a.multiply(this.h * Ra(this.B));
  a.d -= hb;
  var d = this.i;
  if (0 != d) {
    Ma(V, a);
    Ua(V);
    var b = Qa(V, this.C);
    Ma(V, this.C);
    V.multiply(b);
    d *= Math.sqrt(Ra(V));
    Sa(V, this.f, d);
    La(a, V)
  }
  return this.e
};

function rc(a) {
  var d = a.B,
    b = a.C;
  Va(b);
  var e = a.f;
  Pa(e, b, d);
  Pa(e, e, b);
  Ua(e);
  Va(e);
  var f = Qa(d, b);
  if (0 > f) {
    a = a.i;
    f = -1 * f;
    Ma(V, b);
    V.multiply(f);
    La(d, V);
    var g = Qa(d, e);
    0 != g && (Ma(V, e), "p" != J && g < -1.125 * hb && .5 < b.d && (f = -g, .5 > a && (a = .5)), V.multiply(a * f), La(d, V))
  }
}
qc.prototype.reset = function() {
  this.B.g(0, 0, 0)
};
var X = [];

function sc(a) {
  this.v = a;
  this.r = !1;
  this.a = this.b = this.n = this.l = 0;
  X.push(this)
}

function tc() {
  var a, d, b;
  ic = Math.floor(uc(-3, 3 + .9999));
  vc(D.b, D.a, $b, ac, 50 * C) ? (d = O, b = P, Ab = a = wc(D.b, D.a, d, b)) : (d = lb, b = mb, a = nb, Ab = a + wc(lb, mb, O, P));
  G = -180 / Math.PI * Math.atan2(d - D.b, b - D.a);
  d = r.prototype.i;
  for (b = 10; 0 < b && !(a <= kc[b]); b--);
  10 == b ? d <= cb || d == db && Bb - D.d < 3 * C ? xc("p") : xc("w") : 9 == b ? xc("w") : xc(String.fromCharCode(49 + b));
  if (yc()) {
    b = N + 1;
    var e = X[T].n;
    d = 2;
    0 == I ? 1 == e ? 6 == b ? G += 4 : 15 == b && (a *= .75) : 2 == e && (6 == b ? G -= 10 : 9 == b ? (G += 10, a *= .75) : 18 == b && (a *= .75)) : 1 == I ? 2 == e && (12 == b ? G += 5 : 15 == b && (G += 15, a *= .75)) : 2 == I && (1 == e ?
      15 == b && (d = 0, G -= 12) : 2 == e && (3 == b ? G -= 15 : 6 == b ? G -= 15 : 15 == b ? (G -= 55, a *= .7) : 18 == b && (G -= 10)));
    "p" != J && (G = "w" == J ? G + 2 * ic : G + 1.2 * ic);
    if ("p" == J || "w" == J) b = pc(O, P, V) - D.d, 0 != b && (a = "p" == J ? a + b : a + .75 * b);
    Rb = a;
    if ("p" == J && a > 2 * C) {
      d = 0;
      b = F;
      for (var f = G - 1.5, e = f + 3, g = G, k = 999999; f <= e; f += .25) {
        G = f;
        Ka(L, D);
        b.w.reset();
        for (var l = 999999;;) {
          zc(1 / 30, 1.2 * a);
          var n = wc(b.b, b.a, O, P);
          if (n < l) l = n;
          else {
            l < k && (g = f, k = l);
            break
          }
        }
      }
      G = g
    }
    0 != d && (1 < Ob && (d = X[T].l < (1 == T ? X[0].l : X[1].l) ? 4 : 1), a > 40 * C && (G += uc(-d, d)))
  } else G += uc(-5, 5)
}

function Ac() {
  q()
}

function Bc(a) {
  switch (a) {
    case "Enter":
      0 == R && Lb ? Cc() : 0 < R ? document.getElementsByTagName("a")[R].click() : (hc = gc = 0, Dc());
      break;
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      yc() || xc(a);
      Cc();
      break;
    case "a":
      Y("about");
      break;
    case "b":
      Cc();
      break;
    case "c":
      Y("1");
      Y("2");
      Y("3");
      Y("4");
      Y("5");
      Y("6");
      Y("7");
      Y("8");
      Y("9");
      Y("w");
      Y("p");
      break;
    case "f":
      0 == U && (U = 3, Cc(), cc = Date.now(), rb = G, yb = .4 * wc(D.b, D.a, O, P), yb > 200 * C && (yb = 200 * C), vc(D.b, D.a, $b, ac, 50 * C) || O == lb && P == mb ? va(Ec) : va(Fc));
      break;
    case "h":
      Y("help");
      break;
    case "n":
      Y("nS");
      Y("nL");
      Y("nC");
      Y("nD");
      break;
    case "nS":
      Gc(1, !1);
      break;
    case "nL":
      Gc(2, !1);
      break;
    case "nC":
      Gc(2, !0);
      break;
    case "nD":
      Gc(1, !0);
      break;
    case "p":
      yc() || xc("p");
      Cc();
      break;
    case "s":
      Y("panel");
      break;
    case "w":
      yc() || xc("w");
      Cc();
      break;
    case "C":
      Y("C0");
      Y("C1");
      Y("C2");
      Y("Cr");
      break;
    case "C0":
      Hc(0, 0);
      break;
    case "C1":
      Hc(1, 0);
      break;
    case "C2":
      Hc(2, 0);
      break;
    case "Cr":
      Hc(Math.floor(uc(0, 2 + .9999)), Math.floor(uc(0, 17.9999)));
      break;
    case "F":
      Ic("M", "F");
      Jc(0, 77);
      Kc(0);
      break;
    case "M":
      Ic("F", "M");
      Jc(0, 52);
      Kc(0);
      break;
    case "O":
      Y("Om");
      Y("Of");
      break;
    case "Om":
      Ic("Of", "Om");
      Jc(1, 27);
      Kc(0);
      break;
    case "Of":
      Ic("Om", "Of");
      Jc(1, 102);
      Kc(0);
      break;
    case "P":
      Y("M");
      Y("F");
      break;
    case "Esc":
    case "Escape":
      Lc()
  }
  q()
}
window.c = Bc;

function Mc(a, d) {
  var b = yb,
    e = -Math.atan2(a - ub, d - vb),
    e = 180 / Math.PI * e,
    f = e - G;
  0 > f && (f = -f);
  90 < f && (G = e);
  f = .75 * na;
  G = f * e + (1 - f) * G;
  e = Math.PI / 180 * G;
  f = na;
  b *= f;
  ub -= b * Math.sin(e);
  vb += b * Math.cos(e)
}

function Nc() {
  var a;
  a = -80 * C;
  tb = 7;
  Wa(V, G, 0, a);
  a = D.b + V.b;
  var d = D.a + V.a,
    b = D.d + ab,
    e = D.w.B;
  if (0 != e.b || 0 != e.a || 0 != e.d) {
    var f = na,
      g = 1 - f;
    a = g * ub + f * a;
    d = g * vb + f * d;
    0 > e.d && (g -= f, f += f);
    b = g * H + f * b
  }
  ub = a;
  vb = d;
  H = b
}

function Dc() {
  yc() || Cc();
  Pb ? Oc() : 0 == U ? yc() || 0 == gc && 0 == hc || Pc(ob) ? (X[T].r || Qc("click"), K = 0, U = 1, cc = Date.now(), va(Rc)) : Pc(pb) ? (G += 1, Nc(), q()) : Pc(qb) && (--G, Nc(), q()) : 1 == U && (X[T].r || Qc("click"), F.p = 1, Sc())
}

function xc(a) {
  Ic(J, a);
  J = a;
  Kc(0);
  Tc()
}

function Hc(a, d) {
  I != a && (Ic("C" + I, "C" + a), I = a);
  N = d;
  Qb = 0 != d;
  Z("course", a);
  Z("hole", d);
  Uc();
  Vc()
}

function wc(a, d, b, e) {
  a = b - a;
  d = e - d;
  return Math.sqrt(a * a + d * d)
}

function Wc(a, d) {
  var b = O,
    e = P,
    f = D.b,
    g = D.a,
    k = f - a,
    l = g - d,
    n = k * k + l * l;
  if (0 == n) return wc(b, e, f, g);
  n = ((b - a) * k + (e - d) * l) / n;
  return 0 <= n && 1 >= n ? (k = a + n * k - b, l = d + n * l - e, b = Math.sqrt(k * k + l * l)) : b = wc(b, e, f, g)
}

function vc(a, d, b, e, f) {
  a = b - a;
  d = e - d;
  return Math.sqrt(a * a + d * d) > f
}

function Kc(a) {
  0 == a && "p" == J && (a = 17);
  Ha(L, X[T].v + a, !1)
}

function Jc(a, d) {
  X[a].v = d;
  Z("player", 52 == X[0].v ? 0 : 1);
  Z("opponent", 102 == X[1].v ? 0 : 1)
}

function Xc(a, d, b) {
  var e = D.w.C,
    f = pc(d, b, e);
  a.g(d, b, f);
  e.a = -e.a
}

function Yc(a, d) {
  wa(Ba(Ia, a, d, !0))
}

function Zc() {
  Eb = !1;
  N++;
  if (18 == N) {
    N = 0;
    var a = I + 1;
    3 == a && (a = 0);
    Ic("C" + I, "C" + a);
    I = a;
    Z("course", I);
    Qb = !1
  }
  Z("hole", N);
  Vc()
}

function Vc() {
  Oc();
  Cc();
  $c(0);
  var a;
  a = "img/c" + I + "_" + nc[N];
  if (a != Fb) {
    Fb = a;
    Ba(Ia, 1, 1, !0);
    Ba(Ia, 2, 2, !0);
    Ba(Ia, 3, 4, !0);
    Ba(Ia, 5, 5, !0);
    Ba(Ia, 0, 7, !0);
    switch (I) {
      case 0:
        Yc(8, 3);
        Yc(7, 6);
        break;
      case 1:
        Yc(6, 3);
        Yc(4, 6);
        break;
      case 2:
        Yc(10, 3), Yc(9, 6)
    }
    r.prototype.f = ad;
    new xa(a + ".bin");
    va(null);
    h.clear(h.COLOR_BUFFER_BIT)
  } else ad()
}

function ad() {
  var a = 6 * (18 * I + N);
  $b = mc[a];
  ac = 256 - mc[a + 1];
  Xc(D, $b, ac);
  O = mc[a + 2];
  P = 256 - mc[a + 3];
  lb = mc[a + 4];
  mb = 256 - mc[a + 5];
  for (var a = window.location.hostname, d = 0, b = a.length, e = 0; e < b; e++) d = 31 * d + a.charCodeAt(e), d |= 0;
  a = d;
  d = D.w.C;
  b = 0;
  for (; 20 > b; b++) {
    var e = uc(-40 * C, 40 * C),
      f = uc(-40 * C, 40 * C);
    pc(O + e, P + f, d);
    if (r.prototype.i == bb && -.05 < d.b && .05 > d.b && -.05 < d.a && .05 > d.a && (pc(O + (0 > e ? e - 12 * C : e + 12 * C), P + (0 > f ? f - 12 * C : f + 12 * C), d), r.prototype.i == bb)) {
      e += O;
      f += P;
      O == lb && P == mb && (lb = e, mb = f);
      O = e;
      P = f;
      break
    }
  }
  nb = wc($b, ac, lb, mb);
  Xc(xb, O, P);
  Bb = xb.d;
  T = 0;
  d = 100;
  for (b = 0; b < Ob; b++) e = X[b], e.b = $b, e.a = ac, e.n < d && (T = b, d = e.n), e.n = 0, 0 == N && (e.l = 0);
  D.w.reset();
  X[T].n = 1;
  tc();
  Vb = null;
  f = 7 * C;
  if (90 < G || -90 > G) f = -f;
  switch (I) {
    case 0:
      cd(20, -7 * C, f, 12 * C);
      cd(20, 8 * C, f, 12 * C);
      break;
    case 1:
      cd(22, -7 * C, .5 * f, 14 * C);
      cd(23, 7 * C, .5 * f, 5 * C);
      break;
    case 2:
      cd(21, -9 * C, f, 10 * C), cd(21, 8 * C, f, 10 * C)
  }
  Ka(F, D);
  Ka(L, D);
  Wa(V, G, -5.5 * C, 5 * C);
  Xc(kb, $b + V.b, ac + V.a);
  Kc(0);
  Nc();
  U = 0; - 46153795 != a && 1218628564 != a || va(dd);
  yc() && (Oc(), Dc())
}

function ed(a) {
  a.preventDefault();
  switch (a.key) {
    case " ":
      Bc("Enter");
      break;
    case "Up":
    case "ArrowUp":
      fd(-1);
      break;
    case "Down":
    case "ArrowDown":
      fd(1);
      break;
    case "Left":
    case "ArrowLeft":
      G++;
      Nc();
      break;
    case "Right":
    case "ArrowRight":
      G--;
      Nc();
      break;
    case "u":
      break;
    case "d":
      break;
    case "a":
      break;
    case "z":
      break;
    case "i":
      break;
    case "m":
      break;
    case "j":
      break;
    case "k":
      break;
    case "x":
      break;
    case void 0:
      switch (a.keyCode) {
        case 13:
        case 32:
          Bc("Enter");
          break;
        case 27:
          Bc("Esc");
          break;
        case 37:
          G++;
          Nc();
          break;
        case 38:
          fd(-1);
          break;
        case 39:
          G--;
          Nc();
          break;
        case 40:
          fd(1);
          break;
        case 106:
        case 179:
          Bc("Esc")
      }
      break;
    default:
      Bc(a.key)
  }
  q()
}
window.onload = function() {
  try {
    window.webkit.messageHandlers.callbackHandler.postMessage("init"), wb = 1
  } catch (a) {}
  var d = document.createElement("canvas");
  d.color = "white";
  d.style.position = "fixed";
  d.style.zIndex = "-1";
  d.style.left = "0px";
  d.style.top = "0px";
  aa = d;
  ba = "MacIntel" == navigator.platform;
  ea = !0;
  h = d.getContext("experimental-webgl", {
    alpha: !1,
    antialias: !1
  });
  if (null == h) alert("Cannot initialize WebGL");
  else {
    h.activeTexture(h.TEXTURE0);
    h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL, !0);
    h.enable(h.CULL_FACE);
    h.enable(h.DEPTH_TEST);
    p = 1;
    d = navigator.userAgent.toLowerCase();
    if (-1 == d.indexOf("android") || -1 != d.indexOf("nexus player")) try {
      p = window.devicePixelRatio
    } catch (b) {
      p = 1
    }
    ua();
    la = 0;
    ma = Date.now();
    na = 0
  }
  Ia = new ya;
  Sb = [];
  gd("click");
  gd("swing");
  gd("hit");
  gd("penalty2");
  gd("water");
  gd("incup");
  gd("beat")
};

function za() {
  var a;
  Qb = !1;
  T = 0;
  new sc(52);
  new sc(102);
  Db = window.g_ia;
  hd();
  window.noise.U(Math.random());
  Gb = new Ga;
  Hb = new Ga;
  Ib = new Ga;
  Q = new Ga;
  Jb = new Ga;
  pb = id(11);
  ob = id(13);
  qb = id(12);
  jd();
  kb = kd(26, 4.7 * C, !1);
  kb.J = !0;
  D = kd(25, 4 * Xa, !1);
  D.w = new qc;
  ic = 0;
  F = kd(24, 4 * Xa, !1);
  F.w = new qc;
  L = kd(52, 5.75 * C, !1);
  L.J = !0;
  ba && (document.getElementById("menu").style.fontSize = "100%");
  R = 0;
  Kb = document.getElementById("menu").getElementsByTagName("a");
  Lb = !0;
  Lc();
  Ic("C" + I, "C" + I);
  52 == X[0].v ? Ic("F", "M") : Ic("M", "F");
  27 == X[1].v ? Ic("Of",
    "Om") : Ic("Om", "Of");
  xb = kd(15, 7 * C, !0);
  xb.J = !0;
  xb.Y = new y;
  Mb = kd(14, ib, !1);
  Nb = new x;
  Nb.e = 1 * C / 64;
  a = new Ca;
  Da(a, 0);
  a.u.src = "img/meterfill.png";
  Nb.o = a;
  ld();
  window.onkeydown = ed;
  a = aa;
  a.onmousedown = md;
  a.onmousemove = nd;
  a.onmouseup = od;
  a.onmouseout = od;
  window.onresize = function() {
    jd();
    dd()
  };
  a.ontouchstart = pd;
  a.ontouchmove = qd;
  a.ontouchend = rd;
  a.ontouchcancel = rd;
  Vc();
  Qc("music");
  setInterval(Ac, 200)
}

function Ic(a, d) {
  var b = document.getElementById(a);
  null != b && (b.style.color = "");
  b = document.getElementById(d);
  null != b && (b.style.color = "yellow")
}

function Y(a) {
  a = document.getElementById(a);
  null != a && (a.style.display = "none" != a.style.display ? "none" : "block")
}

function Cc() {
  Lb && Lc()
}

function Lc() {
  Lb = !Lb;
  R = 0;
  for (var a = Kb.length, d = 1; d < a; d++) {
    var b = Kb[d];
    Lb ? "" === b.id && (b.style.display = "block") : b.style.display = "none"
  }
  Lb || (document.getElementById("help").style.display = "none", document.getElementById("about").style.display = "none", Kb[0].blur())
}

function fd(a) {
  for (var d = Kb, b = d.length, e; R += a, 0 > R ? R = 0 : R >= b && (R = 0), e = d[R], "none" == e.style.display;);
  e.focus()
}

function $c(a) {
  100 < a && (a = 100);
  K = a;
  Nb.o.T = Math.floor(3.5 * a)
}

function md(a) {
  a.preventDefault();
  gc = a.clientX;
  hc = a.clientY;
  ec = 2 == a.button ? 2 : 1
}

function nd(a) {
  if (1 == ec && !Pc(pb) && !Pc(ob) && !Pc(qb)) {
    var d = a.clientX;
    a = a.clientY;
    var b = gc - d;
    gc = d;
    hc = a;
    G -= .1 * b;
    Nc();
    q()
  }
}

function od() {
  1 == ec && Dc();
  ec = 0
}

function sd() {
  3 <= la && (document.getElementById("panel").style.display = "block")
}

function Tc() {
  var a = X[T];
  document.getElementById("panel").innerHTML = "Hole " + (N + 1) + "<br>Par " + oc[N] + " - " + a.n + "<br>Score " + a.l + "<br>" + ("p" == J ? "Feet " + Math.floor(1 / C * Ab) : "Yards " + Math.floor(1 / Ya * Ab)) + "<br>" + ("p" == J ? "PT-100" : "w" == J ? "PW-60" : document.getElementById(J).innerHTML) + "<br>Wind " + (0 < ic ? ic + " &#8594" : 0 > ic ? -ic + " &#8592" : "0") + "<br>";
  sd()
}

function Uc() {
  for (var a = 0; a < Ob; a++) {
    Z("score" + a, 0);
    var d = X[a];
    d.l = 0;
    d.n = 0
  }
}

function td(a, d) {
  var b = 0;
  if (Db && ba) b = Db.prefGet_(a), b = "" == b ? 0 : parseInt(b, 10);
  else try {
    b = window.localStorage[a], b = parseInt(b, 10), void 0 === b || isNaN(b) || 0 > b ? b = 0 : b > d && (b = d)
  } catch (e) {}
  return b
}

function Z(a, d) {
  d = d.toString();
  if (Db && ba) Db.prefSave_value_(a, d);
  else if (1 == wb) window.webkit.messageHandlers.callbackHandler.postMessage("save " + a + " " + d);
  else try {
    window.localStorage[a] = d
  } catch (b) {}
}

function hd() {
  I = td("course", 2);
  N = td("hole", 17);
  1 == td("player", 1) && (X[0].v = 77);
  1 == td("opponent", 1) && (X[1].v = 27);
  Ob = td("nplayers", 2);
  0 == Ob && (Ob = 1);
  1 == td("robot", 1) && (X[Ob - 1].r = !0);
  for (var a = 0; a < Ob; a++) X[a].l = td("score" + a, 999999);
  if (Db && ba) a = Db.prefGet_("top");
  else {
    a = "";
    try {
      a = window.localStorage.top, void 0 === a && (a = "")
    } catch (d) {}
  }
  "" == a ? a = [] : a = JSON.parse(a);
  dc = a
}

function ud(a) {
  Pb = document.getElementById("prompt");
  Pb.innerHTML = "<table cellpadding='8' style='min-width:200px'><caption>" + a + "</caption></table>";
  Pb.style.display = "block";
  750 >= ha && (document.getElementById("panel").style.display = "none")
}

function Oc() {
  Pb && (Pb.style.display = "none", Pb = null, sd())
}

function uc(a, d) {
  return a + Math.random() * (d - a)
}

function dd() {
  3 == la && (sd(), document.getElementById("menu").style.display = "block", document.body.appendChild(aa));
  var a = X[T].r,
    d = ma,
    b = Q.k;
  b[0] = 1;
  b[1] = 0;
  b[2] = 0;
  b[3] = 0;
  b[4] = 0;
  b[5] = 1;
  b[6] = 0;
  b[7] = 0;
  b[8] = 0;
  b[9] = 0;
  b[10] = 1;
  b[11] = 0;
  b[12] = 0;
  b[13] = 0;
  b[14] = 0;
  b[15] = 1;
  var b = Q.k,
    e = (-90 + tb) * Math.PI / 180,
    f = Math.sin(e),
    e = Math.cos(e),
    g = b[4],
    k = b[5],
    l = b[6],
    n = b[7],
    m = b[8],
    B = b[9],
    A = b[10],
    S = b[11];
  b[4] = g * e + m * f;
  b[5] = k * e + B * f;
  b[6] = l * e + A * f;
  b[7] = n * e + S * f;
  b[8] = m * e - g * f;
  b[9] = B * e - k * f;
  b[10] = A * e - l * f;
  b[11] = S * e - n * f;
  b = Q.k;
  e = -G * Math.PI / 180;
  f = Math.sin(e);
  e = Math.cos(e);
  g = b[0];
  k = b[1];
  l = b[2];
  n = b[3];
  m = b[4];
  B = b[5];
  A = b[6];
  S = b[7];
  b[0] = g * e + m * f;
  b[1] = k * e + B * f;
  b[2] = l * e + A * f;
  b[3] = n * e + S * f;
  b[4] = m * e - g * f;
  b[5] = B * e - k * f;
  b[6] = A * e - l * f;
  b[7] = S * e - n * f;
  Q.translate(-ub, -vb, -H);
  Gb.multiply(Hb, Q);
  h.clear(h.DEPTH_BUFFER_BIT);
  b = 0;
  f = r.prototype.e;
  if (void 0 != f)
    for (e = Gb, sa(W.prototype.e), h.uniformMatrix4fv(W.prototype.L, !1, e.k), h.bindBuffer(h.ELEMENT_ARRAY_BUFFER, W.prototype.D), e = f.length, g = 0; g < e; g++) k = f[g], vd(k.b, k.a, k.d) && (b++, k.j());
  for (b = G * jb; 1024 <= b;) b -= 2048;
  for (; - 1024 >
    b;) b += 2048;
  f = tb;
  f *= jb;
  f -= 20 * (H - ab);
  f = f * Ub;
  76 > f && (f = 76);
  Tb.g(b * Ub, f, -996);
  Tb.j(null, Hb);
  for (k = Vb; null != k; k = k.R) k.j(Q, Hb);
  L.j(Q, Ib);
  kb.j(Q, Hb);
  Eb || zb || (D.j(Q, Ib), F.j(Q, Ib));
  d = d / 200 & 3;
  3 == d && (d = 1);
  Ha(xb, 15 + d, !0);
  xb.Q = 0 > ic;
  xb.j(Q, Ib);
  0 == U ? a || (pb.j(null, Jb), ob.j(null, Jb), qb.j(null, Jb)) : 1 == U && (a || ob.j(null, Jb), h.disable(h.DEPTH_TEST), Wa(V, G, 3 * C, 0), Mb.g(L.b + V.b, L.a + V.a, L.d + ib), Nb.g(Mb.b, Mb.a, L.d + .4 * C + .0092 * K * ib), Nb.j(Q, Ib), Mb.j(Q, Ib), h.enable(h.DEPTH_TEST));
  "p" == J && 0 == U && !a && zc(na, 33 * C)
}

function jd() {
  ua();
  var a = ha / ia;
  Hb.perspective(20, a, 4, 1E3);
  Ib.perspective(20, a, 4.2, 1E3);
  var d = 20;
  1 < a && (d *= a);
  sb = Math.tan(.5 * d * Math.PI / 180);
  var d = a = ha,
    b = ia,
    e = Jb.k,
    f = 1 / (0 - d),
    g = 1 / (0 - b);
  e[0] = -2 * f;
  e[1] = 0;
  e[2] = 0;
  e[3] = 0;
  e[4] = 0;
  e[5] = -2 * g;
  e[6] = 0;
  e[7] = 0;
  e[8] = 0;
  e[9] = 0;
  e[10] = -.002;
  e[11] = 0;
  e[12] = (0 + d) * f;
  e[13] = (b + 0) * g;
  e[14] = -1;
  e[15] = 1;
  a = Math.floor(.5 * a / p);
  d = pb;
  d.b = p * (a - 128 - 6);
  d.a = 48 * p;
  d = ob;
  d.b = p * (a - 6);
  d.a = 48 * p;
  d = qb;
  d.b = p * (a + 128 - 6);
  d.a = 48 * p;
  q()
}

function yc() {
  return X[T].r
}

function Qc(a) {
  var d = Sb[a];
  void 0 === d && (d = gd(a));
  d.play()
}

function gd(a) {
  var d;
  window.audioContext ? d = new WebAudioAPISound("snd/" + a + ".wav", {}) : (d = new Audio, d.src = "snd/" + a + ".wav");
  return Sb[a] = d
}

function kd(a, d, b) {
  var e = new x;
  Ha(e, a, b);
  a = Ba(Ia, a, 0, b).H;
  e.e = d / a;
  return e
}

function ld() {
  Tb = new x;
  var a = new Ca;
  Da(a, 0);
  a.S = 16;
  a.u.src = "img/sky.jpg";
  a.N = 16384;
  a.O = 512;
  Tb.o = a;
  Ub = .19425035876919727;
  Tb.e = Ub
}

function Pc(a) {
  var d = gc * p - a.b;
  return -32 <= d && 64 >= d && (a = a.a - (ia - p * hc), -32 <= a && 64 >= a) ? !0 : !1
}

function id(a) {
  var d = new x;
  Ha(d, a);
  1 == p && (d.e = .5);
  return d
}

function Gc(a, d) {
  Qc("music");
  Ob = a;
  Z("nplayers", a);
  Z("robot", d ? 1 : 0);
  Z("hole", 0);
  Uc();
  X[0].r = !1;
  X[a - 1].r = d;
  N = T = 0;
  Vc()
}

function Fc() {
  var a = wc(ub, vb, lb, mb);
  Mc(lb, mb);
  H < Bb + 60 * C && (H += 2 * na);
  a < 400 * C && va(Ec);
  dd();
  q()
}

function Ec() {
  var a = wc(ub, vb, O, P);
  yb = .25 * a;
  yb > 200 * C && (yb = 200 * C);
  H < Bb + 60 * C && (H += 2 * na);
  Mc(O, P);
  tb = 90 - 180 / Math.PI * Math.atan2(a, H - Bb);
  7 > tb && (tb = 7);
  a < 100 * C && (U = 0, G = rb, Nc(), va(dd));
  dd();
  q()
}

function Rc() {
  Kc(0);
  $c(.06 * (ma - cc));
  if (yc()) {
    if (Lb) {
      cc = Date.now();
      return
    }
    var a = 100 * Rb / kc["w" == J ? 9 : "p" == J ? 10 : J - 1];
    99 < a ? (a = 99, 100 == K && (K = a)) : 20 > a && "p" == J && (a = 20);
    if (K >= a || 100 == K) {
      Dc();
      return
    }
  }
  100 == K && (void 0 !== Pb || yc() || ud("Tip: for better aim, press again before power meter reaches top"), Qc("penalty2"), Sc());
  dd();
  q()
}

function wd() {
  dd();
  if (!Pb)
    if (17 != N || Qb || X[0].r) Zc();
    else {
      dc.push([X[0].l, I]);
      dc.sort(xd);
      5 < dc.length && dc.splice(5, 1);
      var a = JSON.stringify(dc);
      Z("top", a);
      for (var a = "Top Scores</caption><tr><td>Score</td><td>Course</td></tr>", d = dc.length, b = 0; b < d; b++) var e = dc[b],
        a = a + ("<tr><td>" + e[0] + "</td><td>" + lc[e[1]] + "</td></tr>");
      ud(a);
      va(yd)
    }
}

function zd() {
  var a = Math.floor(.01667 * (ma - cc)),
    d;
  "p" == J ? (a += 17, d = 23) : d = 17;
  a > Cb && (a = Cb);
  a >= d && (a = d - 1);
  Eb ? a = 24 : zb ? a = 23 : "p" == J && vc(L.b, L.a, D.b, D.a, Ab) && (a = 23);
  d = D.w;
  var b = d.B;
  Kc(a);
  if (a == Cb && L.ready())
    if (bc = 0, Cb++, "p" == J) 18 == a && (Qc("hit"), bc = 0, d.i = 0, 100 == K ? (Wa(b, G, uc(-10 * C, 10 * C), 100 * C), b.d = 2 * C) : (Wa(b, G, 0, 100 * C * K * .01), b.d = 0));
    else if (8 == a) Qc("swing");
  else if (12 == a) {
    bc = d.i = 0;
    var e = "w" == J ? 9 : "p" == J ? 10 : J - 1,
      a = jc[e] * Math.PI / 180,
      e = Math.sqrt(.9 * kc[e] * K * .01 * hb / Math.sin(2 * a));
    b.d = Math.sin(a) * e;
    b.a = Math.cos(a) *
      e;
    100 == K ? Wa(b, G + uc(-10, 10), 0, b.a) : Wa(b, G, 0, b.a)
  }
  if (0 != b.b || 0 != b.a) {
    e = d.acceleration();
    a = na;
    a > 1 / 30 && (a = 1 / 30);
    Sa(b, e, a);
    0 == d.i && 0 != ic && (Wa(V, G, ic * C, 0), V.d = 0, Sa(b, V, a));
    var e = D.b,
      f = D.a;
    D.b += b.b * a;
    D.a += b.a * a;
    D.d += b.d * a;
    Xc(F, D.b, D.a);
    a = D.d - F.d;
    0 >= a ? (d.i = 1 / 255 * r.prototype.i, 1 == d.i ? zb || (Qc("water"), zb = !0, X[T].n++, b.g(0, 0, -1 * hb)) : (D.d = F.d, rc(d)), Wc(e, f) < 4 * Xa && (Qc("incup"), Eb = !0, b.g(0, 0, -.1 * hb), D.g(O, P, D.d), F.d = D.d)) : a <= 2 * Xa && Wc(e, f) < 4 * Xa ? (Qc("incup"), Eb = !0, b.g(0, 0, -.1 * hb), D.g(O, P, D.d), F.d = D.d) : d.i = 0;
    Ta(b,
      12 * Xa) ? bc += na : bc = 0
  } else bc += na;
  if (1 < bc && !Pb) {
    bc = 0;
    b.g(0, 0, 0);
    Oc();
    zb && (zb = !1, Ka(D, L));
    var g;
    d = T;
    X[d].b = D.b;
    X[d].a = D.a;
    b = 0;
    for (d = Ob - 1; 0 <= d; d--) 12 <= X[d].n ? g = 0 : g = wc(X[d].b, X[d].a, O, P), g > b && (b = g, T = d);
    if (0 == b) g = !1;
    else {
      X[T].n++;
      g = X[T].b;
      b = X[T].a;
      for (d = 1; 10 > d; d++) {
        Xc(D, g, b);
        Ka(L, D);
        tc();
        Nc();
        var a = V.b,
          e = V.a,
          f = .5 * (D.d + H),
          k = pc(.5 * (g + ub), .5 * (b + vb), V);
        if (f - k < 3 * C) g -= .1 * a, b -= .1 * e;
        else break
      }
      Kc(0);
      g = !0
    }
    if (g) Eb = !1, $c(0), Tc(), Ka(F, L), U = 0, va(dd), X[T].r && Dc();
    else {
      Qc("beat");
      for (d = g = 0; d <= N; d++) g += oc[d];
      b = "Scorecard</caption><tr><td>Player</td><td>Hole</td><td>Round</td><td>Score</td></tr>";
      for (d = 0; d < Ob; d++) {
        a = d;
        k = g;
        e = X[a];
        e.l += e.n;
        Z("score" + a, e.l);
        var l = e.n - oc[N],
          f = void 0;
        switch (l) {
          case 0:
            f = "<span style='color: yellow'>Par</span>";
            break;
          case -1:
            f = "<span style='color: yellow'>Birdie!</span>";
            break;
          case -2:
            f = "<span style='color: yellow'>Eagle!</span>";
            break;
          default:
            f = 0 <= l ? "+" + l : l.toString()
        }
        l = void 0;
        Qb ? l = "--" : (k = e.l - k, l = 0 <= k ? "+" + k : k.toString());
        b = b + ("<tr><td>" + (a + 1) + "</td><td>" + f + "</td><td>" + l + "</td><td>" + e.l + "</td></tr>")
      }
      g = N + 1;
      d = I;
      18 == g && (g = 0, d++, 3 == d && (d = 0));
      Z("course", d);
      Z("hole",
        g);
      Tc();
      X[0].r || ud(b);
      va(wd)
    }
  }
  Nc();
  dd();
  q()
}

function Sc() {
  cc = Date.now();
  Cb = "p" == J ? 18 : 1;
  U = 2;
  va(zd)
}

function yd() {
  dd();
  Pb || Zc()
}

function xd(a, d) {
  return a[0] - d[0]
}

function rd(a) {
  a.preventDefault();
  1 == ec && Dc();
  ec = 0
}

function qd(a) {
  a.preventDefault();
  ec = a.touches.length;
  var d = a.touches[0];
  a = d.clientX;
  var d = d.clientY,
    b = gc - a;
  gc = a;
  hc = d;
  1 != ec || Pc(pb) || Pc(ob) || Pc(qb) || (G -= .1 * b, Nc(), q())
}

function pd(a) {
  a.preventDefault();
  ec = a.touches.length;
  a = a.touches[0];
  gc = a.clientX;
  hc = a.clientY
}

function zc(a, d) {
  var b = F,
    e = b.w,
    f = e.B;
  if (Ta(f, 24 * Xa) || G != fc) e.i = 0, fc = G, b.p = .5, Ka(b, L), Wa(f, G, 0, d), f.d = 0;
  var g = e.acceleration();
  Sa(f, g, a);
  b.b += f.b * a;
  b.a += f.a * a;
  b.d += f.d * a;
  f = e.C;
  g = pc(b.b, b.a, f);
  b.d <= g ? (b.d = g, f.a = -f.a, e.i = 1 / 255 * r.prototype.i, rc(e)) : e.i = 0;
  q()
}

function cd(a, d, b, e) {
  a = kd(a, e, !1);
  a.J = !0;
  Xc(a, $b + d, ac + b);
  a.R = Vb;
  Vb = a
}

function vd(a, d, b) {
  var e = Q;
  V.g(a, d, b);
  a = V;
  d = a.b;
  b = a.a;
  var f = a.d,
    e = e.k;
  a.b = e[0] * d + e[4] * b + e[8] * f + e[12];
  a.a = e[1] * d + e[5] * b + e[9] * f + e[13];
  a.d = e[2] * d + e[6] * b + e[10] * f + e[14];
  a = V.b;
  d = V.a;
  b = -V.d;
  if (0 > b + 45.2544) return !1;
  e = sb * (b + 45.2544);
  0 > a && (a = -a);
  if (a - 45.2544 > e) return !1;
  0 > d && (d = -d);
  return d - 45.2544 > e ? !1 : !0
};