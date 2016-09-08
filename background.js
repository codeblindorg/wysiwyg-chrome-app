chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('builder.html', {
    'outerBounds': {
      'width': screen.width,
      'height': screen.height
    }
  });
});