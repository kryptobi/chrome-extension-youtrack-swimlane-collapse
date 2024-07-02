document.getElementById('close').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: close
      });
    });
  });

  document.getElementById('open').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: open
      });
    });
  });


  function close() {
    const trs = document.querySelectorAll('tr');
    const results = Array.from(trs).map(tr => {
      const tdElement = tr.querySelector('td');
      return !!tdElement.querySelector('yt-agile-swimlane-collapsed');
    });
    
    trs.forEach((tr, index) => {
      const tdElement = tr.querySelector('td');
      // Verwenden Sie das Ergebnis von 'results' für jedes 'tr'
      if (!results[index] || tdElement.childNodes[0].tagName === 'DIV') {
        if(tdElement.children[0]) {
          const clickTr = tr.querySelector('.yt-agile-table__row-title__summary .yt-agile-table__row-title__summary__text');
          if (clickTr) {
            clickTr.click();
          }
        }
      }
    });
  }

  function open() {
    document.querySelectorAll('tr').forEach(tr => {
      const tdElement = tr.querySelector('td');
      const collapsedElement = tdElement.querySelector('yt-agile-swimlane-collapsed');
      if (collapsedElement) {
        const clickTr = tr.querySelector('.yt-agile-table__row-title__summary .yt-agile-table__row-title__summary__text');
          if (clickTr) {
            clickTr.click();
          }
      }
    });
  }
