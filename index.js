// run `node index.js` in the terminal

(function() {
  console.log('Start'); 
  setTimeout(function(){console.log('1 sec')}, 1000);
  setImmediate(function(){console.log('Immediate')}) 
  process.nextTick(function(){console.log('Next tick')});
  setTimeout(function(){console.log('0 sec')}, 0); 
  console.log('End');
})();