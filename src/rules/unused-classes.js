HTMLInspector.addRule("unused-classes", function(listener, reporter) {

  var whitelist = /^js\-|^supports\-|^language\-|^lang\-/
    , classes = this.extensions.css.getClassSelectors()

  listener.on('class', function(name) {
    if (!whitelist.test(name) && classes.indexOf(name) == -1) {
      reporter.addError(
        "unused-classes",
        "The class '"
        + name
        + "' is used in the HTML but not found in any stylesheet",
        this
      )
    }
  })

})