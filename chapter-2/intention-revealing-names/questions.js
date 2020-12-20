// Question 1:
// Should we (always) name our function expressions which we pass to--for example-- setTimeouts

setTimeout(() => {
  alert("Hello");
}, 100);

// Instead
setTimeout(function alertHello() {
  alert("Hello");
}, 1000);
