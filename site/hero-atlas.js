/* Transparent ink halftone shader. Motion follows scrolling, then settles. */
(function () {
  'use strict';
  var canvas = document.getElementById('hero-shader');
  if (!canvas) return;
  var gl;
  try {
    gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false, antialias: false, depth: false, powerPreference: 'low-power' });
  } catch (error) { return; }
  if (!gl) return;

  var vertex = 'attribute vec2 a_position; void main(){ gl_Position=vec4(a_position,0.0,1.0); }';
  var fragment = [
    'precision mediump float;',
    'uniform vec2 u_resolution; uniform float u_time;',
    'float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }',
    'float noise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);',
    'return mix(mix(hash(i),hash(i+vec2(1.0,0.0)),f.x),mix(hash(i+vec2(0.0,1.0)),hash(i+vec2(1.0)),f.x),f.y); }',
    'float terrain(vec2 p){ return noise(p)*0.55+noise(p*2.03)*0.30+noise(p*4.01)*0.15; }',
    'void main(){',
    'vec2 p=(gl_FragCoord.xy/u_resolution-0.5)*vec2(u_resolution.x/u_resolution.y,1.0);',
    'vec2 flow=vec2(sin(u_time*0.12)*0.24,cos(u_time*0.09)*0.18);',
    'float h=terrain(p*1.4+flow+vec2(2.4,0.7));',
    'vec3 ink=vec3(0.035,0.051,0.094), white=vec3(1.0,0.976,0.929);',
    'vec3 color=mix(ink,white,smoothstep(0.24,0.72,h)*0.3);',
    'float contour=1.0-smoothstep(0.025,0.09,abs(fract(h*19.0)-0.5));',
    'color=mix(color,white,contour*0.34);',
    'vec2 dotCell=fract(gl_FragCoord.xy/3.6)-0.5;',
    'float stipple=smoothstep(0.18,0.44,length(dotCell));',
    'color=mix(color,ink,stipple*0.48);',
    'vec2 grid=abs(fract((p+vec2(0.4))*4.0)-0.5);',
    'float drafting=1.0-smoothstep(0.006,0.02,min(grid.x,grid.y));',
    'color=mix(color,vec3(1.0,0.976,0.929),drafting*0.15);',
    'float density=smoothstep(0.18,0.52,dot(color,vec3(0.2126,0.7152,0.0722)));',
    'gl_FragColor=vec4(ink,density*0.16);',
    '}'
  ].join('\n');

  function compile(type, source) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }
  var vs = compile(gl.VERTEX_SHADER, vertex);
  var fs = compile(gl.FRAGMENT_SHADER, fragment);
  if (!vs || !fs) { canvas.hidden = true; return; }
  var program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  gl.deleteShader(vs);
  gl.deleteShader(fs);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) { gl.deleteProgram(program); canvas.hidden = true; return; }
  gl.useProgram(program);
  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
  var position = gl.getAttribLocation(program, 'a_position');
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
  var resolution = gl.getUniformLocation(program, 'u_resolution');
  var time = gl.getUniformLocation(program, 'u_time');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  var visible = true;
  var lost = false;
  var frame = 0;
  var elapsed = 0;

  function draw() {
    if (lost) return;
    gl.uniform2f(resolution, canvas.width, canvas.height);
    gl.uniform1f(time, elapsed);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }
  function resize() {
    var bounds = canvas.getBoundingClientRect();
    var ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    var width = Math.max(1, Math.min(1400, Math.round(bounds.width * ratio)));
    var height = Math.max(1, Math.round(bounds.height * width / Math.max(bounds.width, 1)));
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
    }
    draw();
  }
  function tick() {
    frame = 0;
    elapsed = reduced.matches ? 0 : window.scrollY * 0.025;
    draw();
  }
  function schedule() {
    if (!frame && !reduced.matches && visible && !document.hidden && !lost) {
      frame = window.requestAnimationFrame(tick);
    }
  }
  function sync() {
    window.cancelAnimationFrame(frame);
    frame = 0;
    if (reduced.matches) elapsed = 0;
    if (visible && !document.hidden && !lost) {
      draw();
      schedule();
    }
  }
  window.addEventListener('scroll', schedule, { passive: true });
  document.addEventListener('visibilitychange', sync);
  if (reduced.addEventListener) reduced.addEventListener('change', sync);
  else reduced.addListener(sync);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) { visible = entries[0].isIntersecting; sync(); }).observe(canvas);
  }
  if ('ResizeObserver' in window) new ResizeObserver(resize).observe(canvas.parentElement);
  else window.addEventListener('resize', resize);
  canvas.addEventListener('webglcontextlost', function () {
    lost = true;
    canvas.hidden = true;
    sync();
  });
  resize();
  sync();
})();
