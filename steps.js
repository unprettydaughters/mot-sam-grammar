// 카드 「네 걸음」 화면 (1~32과): 설명 → 추가 설명 → 웹툰 → 연습문제, 눌러서 열고 접는다.
// 호출: renderSteps(rootElement, D)  — D는 card.html이 data.js·extra.js·quiz.js·scenes.js·webtoon-data.js에서 모아 만든다.
// D = { id, title, kicker[], drama, old[], neu[], quiz{core,qs[]}, toon|null, script[], next|null, steps[4][2], mascot{start,mid,win} }
function renderSteps(root, D) {
  var $ = function (s, r) { return (r || root).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || root).querySelectorAll(s)); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var mark = function (t) { return esc(t).replace(/\*\*([^*]+)\*\*/g, '<mark>$1</mark>'); };
  var KEY = 'motsam-steps-' + D.id;
  var CHECK = '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 10.5l4 4 8-9"/></svg>';

  root.classList.add('v4');
  root.innerHTML =
    '<div class="head"><div class="headtxt"><div class="badges" id="badges"></div><h1 id="ttl"></h1>' +
    '<p class="lede">네 걸음으로 익혀요. 눌러서 열고, 순서대로 가도 돼요.</p></div>' +
    '<img class="mascot" id="mascot" width="640" height="391" alt="" src=""></div>' +
    '<div class="prog" id="prog" aria-hidden="true"><div class="bars" id="bars"></div><span id="progTxt"></span></div>' +
    '<ol class="steps" id="steps"></ol>';

  /* ── 설명 그리기 (data.js 형식) ── */
  function train(spec) {
    var w = (spec || '주어 · 동사 · 목적어').split('·').map(function (x) { return x.trim(); });
    var cars = [['S', w[0] || '주어', '#B8A9D9'], ['V', w[1] || '동사', '#E8C547'], ['O', w[2] || '목적어', '#F0A9A9']];
    return '<div class="fig"><div class="train">' + cars.map(function (c) {
      return '<div class="car"><span class="cap">' + esc(c[1]) + '</span><span class="bx" style="background:' + c[2] + '">' + c[0] + '</span></div>';
    }).join('<span class="lk"></span>') + '</div><div class="rl"></div><p>칸 순서는 절대 바뀌지 않는다</p></div>';
  }
  function compare(spec) {
    var p = (spec || '').split('::').map(function (x) { return x.trim(); });
    function col(t, o, ws, cls) {
      return '<div class="cmp ' + cls + '"><b>' + esc(t) + '</b><small>' + esc(o) + '</small><div class="chips2">' +
        ws.split('/').map(function (x) { return '<span>' + esc(x.trim()) + '</span>'; }).join('') + '</div></div>';
    }
    return '<div class="cmpw">' + col(p[0], p[1], p[2] || '', 'ko') + col(p[3], p[4], p[5] || '', 'en') + '</div>';
  }
  var isDlg = function (l) { return /^[^\s:\[\(@=~!>+#]{1,8}: /.test(l) && l.indexOf('상황: ') !== 0; };
  function render(lines) {
    var html = '', inD = false, after = false;
    function flush() { if (inD) { html += '</div>'; inD = false; } }
    lines.forEach(function (l) {
      if (isDlg(l)) {
        if (!inD) { html += '<div class="dlg">'; inD = true; }
        var k = l.indexOf(': ');
        html += '<p class="dl"><b>' + esc(l.slice(0, k)) + '</b><span>' + mark(l.slice(k + 2)).replace(/____/g, '<span class="blank"></span>') + '</span></p>';
        after = true; return;
      }
      if (inD) {
        flush();
        if (after && !/^(##|@|=|~|!|>|\+)/.test(l)) { html += '<p class="gloss">' + mark(l) + '</p>'; after = false; return; }
      }
      after = false;
      if (l.indexOf('## ') === 0) html += '<h3 class="sec">' + mark(l.slice(3)) + '</h3>';
      else if (l.indexOf('@train') === 0) html += train(l.slice(6));
      else if (l.indexOf('@compare') === 0) html += compare(l.slice(8));
      else if (l.indexOf('= ') === 0) html += '<div class="formula"><span class="fl">핵심 공식</span>' + mark(l.slice(2)) + '</div>';
      else if (l.indexOf('! ') === 0) html += '<div class="note warn"><p>' + mark(l.slice(2)) + '</p></div>';
      else if (l.indexOf('~ ') === 0) html += '<div class="note aha"><p>' + mark(l.slice(2)) + '</p></div>';
      else if (l.indexOf('+ ') === 0) html += '<div class="point"><b>이 과의 핵심</b><p>' + mark(l.slice(2)) + '</p></div>';
      else if (l.indexOf('> 정답: ') === 0) {
        var a = l.slice(6), j = a.indexOf(' — ');
        html += '<details class="ans"><summary>정답 보기</summary><div>' + (j > 0 ? '<b>' + esc(a.slice(0, j)) + '</b>' + mark(a.slice(j)) : mark(a)) + '</div></details>';
      }
      else if (l.indexOf('> ') === 0) html += '<blockquote class="pull">' + mark(l.slice(2)) + '</blockquote>';
      else if (l.indexOf('상황: ') === 0) html += '<p class="sit">' + esc(l) + '</p>';
      else if (l.indexOf('____') >= 0) html += '<p class="fill">' + esc(l).replace(/(____ ?)+/g, function (m) { return '<span class="blank"></span>'.repeat(Math.max(1, m.trim().split(/\s+/).length)); }) + '</p>';
      else html += '<p>' + mark(l) + '</p>';
    });
    flush();
    return html;
  }

  /* ── 웹툰 ── */
  function scriptBlock(open) {
    if (!D.script || !D.script.length) return '';
    return '<details class="scr"' + (open ? ' open' : '') + '><summary>글로 읽기 · 대본</summary><div class="in">' + D.script.map(function (s) {
      return s.lines.map(function (l) {
        if (l.charAt(0) === '[') return '<p class="place">' + esc(l.replace(/^\[|\]$/g, '')) + '</p>';
        if (l.charAt(0) === '(') return '<p class="dir">' + esc(l) + '</p>';
        var k = l.indexOf(': ');
        if (k > 0 && k < 12) return '<p class="ln"><b>' + esc(l.slice(0, k)) + '</b>' + esc(l.slice(k + 2)) + '</p>';
        return '<p class="dir">' + esc(l) + '</p>';
      }).join('');
    }).join('') + '</div></details>';
  }
  function toonBody() {
    var t = D.toon, h = '';
    // 웹툰이 아직 없는 과(33~56과): 대본을 펼쳐서 먼저 읽게 한다
    if (!t) return '<p class="sit">웹툰은 아직 준비 중이에요. 그동안 대본으로 먼저 읽어요.</p><p class="cap2">' + esc(D.drama) + ' · EP.' + esc(D.id) + '</p>' + scriptBlock(true);
    var tabs = [];
    if (t.easy) tabs.push(['easy', '쉬운 버전']);
    if (t.orig && t.orig.length) tabs.push(['orig', '원래 버전']);
    h += '<div class="seg" role="tablist" aria-label="웹툰 버전">' + tabs.map(function (x, i) {
      return '<button type="button" role="tab" data-tab="' + x[0] + '" aria-selected="' + (i === 0) + '">' + x[1] + '</button>';
    }).join('') + '</div>';
    if (t.easy) h += '<div class="toon" data-pane="easy"><img loading="lazy" width="1080" height="1935" src="' + esc(t.easy) + '" alt="' + esc(t.ep + '화 ' + t.title + ' · 쉬운 버전, 컷 3개') + '"></div>';
    if (t.orig && t.orig.length) h += '<div class="toon" data-pane="orig"' + (t.easy ? ' hidden' : '') + '>' + t.orig.map(function (s, i) {
      return '<img loading="lazy" width="1080" height="' + (t.h || 1935) + '" src="' + esc(s) + '" alt="' + esc(t.ep + '화 ' + t.title + ' · 그림 ' + (i + 1)) + '">';
    }).join('') + '</div>';
    h += '<p class="cap2">' + esc(D.drama) + ' ' + esc(t.ep) + '화 「' + esc(t.title) + '」</p>';
    if (D.script && D.script.length) {
      h += '<details class="scr"><summary>글로 읽기 · 대본</summary><div class="in">' + D.script.map(function (s) {
        return s.lines.map(function (l) {
          if (l.charAt(0) === '[') return '<p class="place">' + esc(l.replace(/^\[|\]$/g, '')) + '</p>';
          if (l.charAt(0) === '(') return '<p class="dir">' + esc(l) + '</p>';
          var k = l.indexOf(': ');
          if (k > 0 && k < 12) return '<p class="ln"><b>' + esc(l.slice(0, k)) + '</b>' + esc(l.slice(k + 2)) + '</p>';
          return '<p class="dir">' + esc(l) + '</p>';
        }).join('');
      }).join('') + '</div></details>';
    }
    return h;
  }

  /* ── 연습문제: 순서 맞추기 7문제. 칩을 눌러 놓고 확인 ── */
  var norm = function (s) { return String(s).toLowerCase().replace(/[.,!?]/g, '').replace(/\s+/g, ' ').trim(); };
  var qstate = [];
  function quizShell() {
    var Q = D.quiz;
    return '<div class="core"><b>핵심</b>' + mark(Q.core) + '</div>' +
      '<div class="score" id="score"></div><div id="qlist">' + Q.qs.map(function (q, i) {
        return '<div class="qi" data-i="' + i + '"><div class="qn"><b>' + (i + 1) + '</b><span>' + (q.ctx ? '장면에서' : '조립하기') + '</span></div>' +
          (q.ctx ? '<p class="qctx">' + esc(q.ctx) + '</p>' : '') +
          '<p class="qq">' + esc(q.q) + '</p><div class="chips"></div><div class="tray" aria-live="polite"></div>' +
          '<div class="acts"><button class="btn" type="button" data-act="check">확인</button><button class="btn text" type="button" data-act="clear">지우기</button></div></div>';
      }).join('') + '</div><div id="fin"></div>';
  }
  function quizInit(box) {
    var Q = D.quiz.qs; qstate = Q.map(function () { return { pick: [], res: null }; });
    function paint(i) {
      var el = $('.qi[data-i="' + i + '"]', box), s = qstate[i], q = Q[i];
      $('.chips', el).innerHTML = q.words.map(function (w, k) {
        return '<button class="chip" type="button" data-k="' + k + '"' + (s.pick.indexOf(k) >= 0 || s.res !== null ? ' disabled' : '') + '>' + esc(w) + '</button>';
      }).join('');
      $('.tray', el).innerHTML = s.pick.length ? s.pick.map(function (k) {
        return '<button class="pl" type="button" data-p="' + k + '"' + (s.res !== null ? ' disabled' : '') + '>' + esc(q.words[k]) + '</button>';
      }).join('') : '<span class="ph">칩을 눌러 순서대로 놓아요</span>';
      el.classList.toggle('right', s.res === true); el.classList.toggle('wrong', s.res === false);
      var v = $('.verdict', el); if (v) v.remove();
      if (s.res !== null) {
        var d = document.createElement('div'); d.className = 'verdict ' + (s.res ? 'right' : 'wrong');
        d.innerHTML = (s.res ? '맞았어. <b>' + esc(q.a) + '</b>' : '정답 <b>' + esc(q.a) + '</b>') + (q.why ? ' — ' + esc(q.why) : '');
        $('.acts', el).before(d);
      }
      var ck = $('[data-act="check"]', el), cl = $('[data-act="clear"]', el);
      ck.disabled = s.res !== null || !s.pick.length;
      cl.textContent = s.res === false ? '다시 풀기' : '지우기';
      cl.disabled = s.res === true || (!s.pick.length && s.res === null);
      if (s.res === false) cl.disabled = false;
    }
    function score() {
      var n = qstate.filter(function (s) { return s.res !== null; }).length, r = qstate.filter(function (s) { return s.res === true; }).length;
      $('#score', box).innerHTML = '<span>푼 문제 ' + n + ' / ' + Q.length + '</span><span><b>' + r + '</b> 맞음</span>';
      var fin = $('#fin', box);
      if (n === Q.length) {
        fin.innerHTML = '<div class="done-card"><h3>' + D.id + '과 끝! ' + Q.length + '문제 중 ' + r + '개 맞았어요.</h3><p>틀린 건 위에서 「다시 풀기」로 한 번 더 놓아 봐요.</p>' +
          (D.next ? '<a class="btn" href="card.html?id=' + D.next.id + '" style="display:inline-flex;align-items:center">다음 과로 →</a>' : '') + '</div>';
        markDone(3);
      } else fin.innerHTML = '';
    }
    if (box._h) box.removeEventListener('click', box._h);
    box._h = function (e) {
      var el = e.target.closest('.qi'); if (!el) return;
      var i = +el.getAttribute('data-i'), s = qstate[i], q = Q[i];
      var chip = e.target.closest('.chip'), pl = e.target.closest('.pl'), btn = e.target.closest('[data-act]');
      if (chip && s.res === null) { s.pick.push(+chip.getAttribute('data-k')); paint(i); return; }
      if (pl && s.res === null) { var k = +pl.getAttribute('data-p'); s.pick.splice(s.pick.indexOf(k), 1); paint(i); return; }
      if (btn && btn.getAttribute('data-act') === 'check' && s.pick.length && s.res === null) {
        s.res = norm(s.pick.map(function (k) { return q.words[k]; }).join(' ')) === norm(q.a); paint(i); score(); return;
      }
      if (btn && btn.getAttribute('data-act') === 'clear') { s.pick = []; s.res = null; paint(i); score(); }
    };
    box.addEventListener('click', box._h);
    Q.forEach(function (_, i) { paint(i); }); score();
  }

  /* ── 스텝 ── */
  var NEXT = ['다 읽었어요 · 추가 설명으로', '이해했어요 · 웹툰으로', '다 봤어요 · 연습문제로'];
  var STEPS = [
    { title: D.steps[0][0], sub: D.steps[0][1], body: function () { return render(D.old); } },
    { title: D.steps[1][0], sub: D.steps[1][1], body: function () { return render(D.neu); } },
    { title: D.steps[2][0], sub: D.steps[2][1], body: toonBody },
    { title: D.steps[3][0], sub: D.steps[3][1], body: quizShell }
  ];
  var state = { done: [false, false, false, false], open: 0 };
  try { var sv = JSON.parse(localStorage.getItem(KEY)); if (sv && sv.done && sv.done.length === 4) state.done = sv.done; } catch (e) {}
  function save() { try { localStorage.setItem(KEY, JSON.stringify({ done: state.done })); } catch (e) {} }

  var stepsEl = $('#steps');
  stepsEl.innerHTML = STEPS.map(function (s, i) {
    return '<li class="step" id="step' + (i + 1) + '" data-i="' + i + '"><h2><button class="sbtn" type="button" aria-expanded="false" aria-controls="pn' + i + '">' +
      '<span class="dot"><span class="num">' + (i + 1) + '</span></span><span class="stxt"><b>' + esc(s.title) + '</b><small>' + esc(s.sub) + '</small></span><span class="chev" aria-hidden="true"></span></button></h2>' +
      '<div class="panel" id="pn' + i + '" role="region" aria-label="' + esc(s.title) + '"><div class="pin"><div class="body">' + s.body() +
      (i < 3 ? '<button class="next" type="button" data-next="' + i + '">' + NEXT[i] + '</button>' : '') +
      '</div></div></div></li>';
  }).join('');
  $('#ttl').textContent = D.title;
  $('#badges').innerHTML = D.kicker.map(function (k) { return '<span class="kicker">' + esc(k) + '</span>'; }).join('');
  $('#bars').innerHTML = STEPS.map(function () { return '<i></i>'; }).join('');
  quizInit($('#pn3 .body'));

  // 왼쪽 진행 레일(1000px↑에서만 보임, card.html이 #v4rail 칸을 만들어 둔다)
  var rail = document.getElementById('v4rail');
  if (rail) {
    rail.innerHTML = '<h2>이 과의 네 걸음</h2><div id="railBtns">' + STEPS.map(function (s, i) {
      return '<button type="button" data-go="' + i + '"><span class="dot"><span class="num">' + (i + 1) + '</span></span>' + esc(s.title) + '</button>';
    }).join('') + '</div><div class="cnt"><span id="railCnt"></span><br><button class="again" id="resetBtn" type="button">처음부터 다시</button></div>';
  }

  function refresh() {
    var n = state.done.filter(Boolean).length;
    $$('.step').forEach(function (el, i) {
      el.classList.toggle('open', state.open === i); el.classList.toggle('done', !!state.done[i]);
      $('.sbtn', el).setAttribute('aria-expanded', state.open === i ? 'true' : 'false');
      $('.dot', el).innerHTML = state.done[i] ? CHECK : '<span class="num">' + (i + 1) + '</span>';
    });
    $$('#bars i').forEach(function (b, i) { b.className = state.done[i] ? 'done' : (state.open === i ? 'cur' : ''); });
    if (rail) {
      [].forEach.call(rail.querySelectorAll('#railBtns button'), function (b, i) {
        var dot = b.querySelector('.dot');
        b.classList.toggle('cur', state.open === i);
        dot.style.background = state.done[i] ? 'var(--amb-face)' : (state.open === i ? 'var(--lav-400)' : '');
        dot.style.color = state.done[i] ? 'var(--ink-900)' : (state.open === i ? '#fff' : '');
        dot.innerHTML = state.done[i] ? CHECK : '<span class="num">' + (i + 1) + '</span>';
      });
      rail.querySelector('#railCnt').textContent = n + ' / 4 걸음 끝냈어요';
    }
    $('#progTxt').textContent = n + ' / 4 걸음';
    var face = n >= 4 ? D.mascot.win : n >= 2 ? D.mascot.mid : D.mascot.start;
    var m = $('#mascot'); if (m.getAttribute('src') !== face) m.setAttribute('src', face);
  }
  function markDone(i) { if (!state.done[i]) { state.done[i] = true; save(); refresh(); } }
  function openStep(i, scroll) {
    state.open = (state.open === i && !scroll) ? -1 : i; refresh();
    if (scroll && state.open >= 0) { var el = $('#step' + (i + 1)); if (el && el.scrollIntoView) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  }
  stepsEl.addEventListener('click', function (e) {
    var nx = e.target.closest('[data-next]');
    if (nx) { var i = +nx.getAttribute('data-next'); markDone(i); openStep(i + 1, true); return; }
    var sb = e.target.closest('.sbtn');
    if (sb) { var j = +sb.closest('.step').getAttribute('data-i'); openStep(j, false); if (state.open === j) { var el = $('#step' + (j + 1)); if (el && el.scrollIntoView) setTimeout(function () { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 230); } }
    var t = e.target.closest('.seg button');
    if (t) {
      var seg = t.parentNode, tab = t.getAttribute('data-tab');
      $$('button', seg).forEach(function (b) { b.setAttribute('aria-selected', b === t ? 'true' : 'false'); });
      $$('.toon', seg.parentNode).forEach(function (p) { p.hidden = p.getAttribute('data-pane') !== tab; });
    }
  });
  if (rail) {
    rail.addEventListener('click', function (e) {
      var b = e.target.closest('[data-go]'); if (b) { openStep(+b.getAttribute('data-go'), true); return; }
      if (e.target.closest('#resetBtn')) {
        state.done = [false, false, false, false]; state.open = 0; save();
        $('#pn3 .body').innerHTML = quizShell(); quizInit($('#pn3 .body')); refresh();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
  var hm = /^step([1-4])$/.exec((location.hash || '').replace('#', ''));
  if (hm) state.open = +hm[1] - 1;
  refresh();
}
