$(function () {
  var pages = ['home', 'projects', 'software']
  var pageIds = pages.map(function (p) { return '#' + p })

  $(pageIds.join(', ')).on('click', function (e) {
    var id = this.id
    var remaining = pages.filter(function (p) { return p !== id })
    var remainingClasses = remaining.map(function (p) { return '.' + p })

    var $section = $('.' + id)
    if (!$section.hasClass('active')) {
      $section
        .removeClass('hidden')
        .addClass('active')

      $(remainingClasses.join(', '))
        .removeClass('active')
        .addClass('hidden')
    }
  })
})
