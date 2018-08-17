CKEDITOR.plugins.add('cmstyles',
{
  init : function(editor) {
    var addStyleCommand = function(commandName, styleDefiniton) {
      var style = new CKEDITOR.style(styleDefiniton);

      if (commandName !== "align_standard") {
        editor.attachStyleStateChange(style, function(state) {
          editor.getCommand(commandName).setState(state);
        });
      }

      editor.addCommand(commandName, new CKEDITOR.styleCommand(style));

    };

    var config = editor.config;
    // The following does not work because CKEditor "pastefromword" first transforms, then filters
    // attributes, resulting in the "class" attribute being removed after the transformation. :-(
    // CKEDITOR.config.coreStyles_underline = { element : 'span', attributes : {'class': 'underline' } };
    // CKEDITOR.config.coreStyles_strike = { element : 'span', attributes : {'class': 'strike' } };

    addStyleCommand('color_normal', { element : 'span' , attributes : { 'class' : '' } });
    addStyleCommand('color_black', { element : 'span' , attributes : { 'class' : 'color--black' } });
    addStyleCommand('color_green', { element : 'span' , attributes : { 'class' : 'color--green' } });
    addStyleCommand('color_silver', { element : 'span' , attributes : { 'class' : 'color--silver' } });
    addStyleCommand('color_lime', { element : 'span' , attributes : { 'class' : 'color--lime' } });
    addStyleCommand('color_gray', { element : 'span' , attributes : { 'class' : 'color--gray' } });
    addStyleCommand('color_olive', { element : 'span' , attributes : { 'class' : 'color--olive' } });
    addStyleCommand('color_white', { element : 'span' , attributes : { 'class' : 'color--white' } });
    addStyleCommand('color_yellow', { element : 'span' , attributes : { 'class' : 'color--yellow' } });
    addStyleCommand('color_maroon', { element : 'span' , attributes : { 'class' : 'color--maroon' } });
    addStyleCommand('color_navy', { element : 'span' , attributes : { 'class' : 'color--navy' } });
    addStyleCommand('color_red', { element : 'span' , attributes : { 'class' : 'color--red' } });
    addStyleCommand('color_blue', { element : 'span' , attributes : { 'class' : 'color--blue' } });
    addStyleCommand('color_purple', { element : 'span' , attributes : { 'class' : 'color--purple' } });
    addStyleCommand('color_teal', { element : 'span' , attributes : { 'class' : 'color--teal' } });
    addStyleCommand('color_fuchsia', { element : 'span' , attributes : { 'class' : 'color--fuchsia' } });
    addStyleCommand('color_aqua', { element : 'span' , attributes : { 'class' : 'color--aqua' } });

    addStyleCommand('background_color_normal', { element : 'span' , attributes : { 'class' : 'background-color--normal' } });
    addStyleCommand('background_color_black', { element : 'span' , attributes : { 'class' : 'background-color--black' } });
    addStyleCommand('background_color_green', { element : 'span' , attributes : { 'class' : 'background-color--green' } });
    addStyleCommand('background_color_silver', { element : 'span' , attributes : { 'class' : 'background-color--silver' } });
    addStyleCommand('background_color_lime', { element : 'span' , attributes : { 'class' : 'background-color--lime' } });
    addStyleCommand('background_color_gray', { element : 'span' , attributes : { 'class' : 'background-color--gray' } });
    addStyleCommand('background_color_olive', { element : 'span' , attributes : { 'class' : 'background-color--olive' } });
    addStyleCommand('background_color_white', { element : 'span' , attributes : { 'class' : 'background-color--white' } });
    addStyleCommand('background_color_yellow', { element : 'span' , attributes : { 'class' : 'background-color--yellow' } });
    addStyleCommand('background_color_maroon', { element : 'span' , attributes : { 'class' : 'background-color--maroon' } });
    addStyleCommand('background_color_navy', { element : 'span' , attributes : { 'class' : 'background-color--navy' } });
    addStyleCommand('background_color_red', { element : 'span' , attributes : { 'class' : 'background-color--red' } });
    addStyleCommand('background_color_blue', { element : 'span' , attributes : { 'class' : 'background-color--blue' } });
    addStyleCommand('background_color_purple', { element : 'span' , attributes : { 'class' : 'background-color--purple' } });
    addStyleCommand('background_color_teal', { element : 'span' , attributes : { 'class' : 'background-color--teal' } });
    addStyleCommand('background_color_fuchsia', { element : 'span' , attributes : { 'class' : 'background-color--fuchsia' } });
    addStyleCommand('background_color_aqua', { element : 'span' , attributes : { 'class' : 'background-color--aqua' } });


    addStyleCommand('underline', { element : 'span', attributes : {'class': 'underline' } });
    addStyleCommand('strike', { element : 'span', attributes : {'class': 'strike' } });
    addStyleCommand('sub', { element : 'sub' });
    addStyleCommand('sup', { element : 'sup' });
  },
  requires: []
});
