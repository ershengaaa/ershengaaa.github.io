// 代码块全屏显示

$(function () {
  var $code_show_expand = $('<i class="fas fa-expand code-show-expand"  title="全屏显示" aria-hidden="true"></i>');
  $('pre').before($code_show_expand);
  $('.code-area .code-show-expand').on('click', function (e) {
    if (e.target !== this) return
    if ($(this).parent().hasClass('code-closed')) {
      $(this).siblings('pre').find('code').show();
      $(this).parent().removeClass('code-closed');
    }
    $(this).parent().toggleClass('code-block-fullscreen')
    $('html').toggleClass('code-block-fullscreen-html-scroll')
  });
});