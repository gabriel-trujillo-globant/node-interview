// run `node index.js` in the terminal

(function() {
  console.log('Start'); 
  setTimeout(function(){console.log('Timeout 1000')}, 1000);
  new Promise(function (res){res('Promise Then')}).then(console.log);
  setImmediate(function(){console.log('Immediate')});
  process.nextTick(function(){console.log('Next tick')});
  setTimeout(function(){console.log('Timeout 0')}, 0); 
  Promise.resolve('Promise Resolve').then(console.log);
  console.log('End');
})();