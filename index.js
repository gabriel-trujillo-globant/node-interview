// run `node index.js` in the terminal

(function() {
  console.log('Start'); 
  setTimeout(function(){console.log('Timeout 1000')}, 1000);
  queueMicrotask(function(){console.log('Queued Microtask')});
  new Promise(function (res){res('Promise Then')}).then(console.log);
  setImmediate(function(){console.log('Immediate')});
  new Promise(function(res){setTimeout(function(){res('Promise Timeout 1000')}, 1000)}).then(console.log);
  new Promise(function(res){setTimeout(function(){console.log('Promise Timeout 1000 (SE)')}, 1000)});
  setTimeout(function(){console.log('Timeout 1001')}, 1001);
  process.nextTick(function(){console.log('Next tick')});
  setTimeout(function(){console.log('Timeout 0')}, 0); 
  Promise.resolve('Promise Resolve').then(console.log);
  console.log('End');
})();