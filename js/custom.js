'use strict';
(function () {
  function getCodeText(pre) {
    var code = pre.querySelector && pre.querySelector('code');
    var text = (code && code.textContent) || pre.textContent || '';
    text = text.replace(/\r\n/g, '\n');

    // Detect alternating empty-line artifact (every other line empty)
    var lines = text.split('\n');
    var empties = 0;
    for (var i = 0; i < lines.length; i++) if (lines[i].trim() === '') empties++;
    var nonempties = lines.length - empties;
    var looksAlternating = false;
    if (lines.length > 2 && empties >= nonempties - 1) {
      looksAlternating = true;
      for (var j = 1; j < lines.length; j += 2) {
        if (lines[j].trim() !== '') { looksAlternating = false; break; }
      }
    }
    if (looksAlternating) {
      // Remove every odd empty line to fix double-spacing without nuking intentional blanks elsewhere
      var filtered = [];
      for (var k = 0; k < lines.length; k++) {
        if (k % 2 === 1 && lines[k].trim() === '') continue;
        filtered.push(lines[k]);
      }
      text = filtered.join('\n');
    }
    return text;
  }

  function addCopyButtons() {
    var nodes = document.querySelectorAll('div.highlight pre, pre > code');
    var blocks = Array.prototype.slice.call(nodes);
    blocks.forEach(function (node) {
      var pre = node.tagName && node.tagName.toLowerCase() === 'pre' ? node : (node.closest && node.closest('pre'));
      if (!pre || pre.dataset.hasCopyBtn === '1') return;
      pre.dataset.hasCopyBtn = '1';
      if (!pre.style.position) pre.style.position = 'relative';

      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'pre-copy-btn';
      btn.setAttribute('aria-label', 'Copy code to clipboard');
      btn.textContent = 'Copy';
      btn.addEventListener('click', function () {
        var text = getCodeText(pre);
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(function () {
            var prev = btn.textContent;
            btn.textContent = 'Copied';
            setTimeout(function () { btn.textContent = prev || 'Copy'; }, 1200);
          }).catch(function () {
            fallbackCopy(pre);
          });
        } else {
          fallbackCopy(pre);
        }
      });

      pre.appendChild(btn);
    });
  }

  function fallbackCopy(pre) {
    try {
      var text = getCodeText(pre);
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    } catch (e) {}
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addCopyButtons);
  } else {
    addCopyButtons();
  }
})();
