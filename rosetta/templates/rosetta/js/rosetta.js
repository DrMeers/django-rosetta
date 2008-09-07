google.setOnLoadCallback(function() {
    $('.location a').show().toggle(function() {
        $('.hide', $(this).parent()).show();
    }, function() {
        $('.hide', $(this).parent()).hide();
    });
{% if ENABLE_TRANSLATION_SUGGESTIONS %}    
    $('a.suggest').click(function() {
        var a=$(this), str=a.html(); orig=$('.original', a.parents('tr')).html(),trans=$('textarea',a.parent());
        orig = unescape(orig).replace(/<br\s?\/?>/g,'\n').replace(/<code>/g,'').replace(/<\/code>/g,'').replace(/&gt;/g,'>').replace(/&lt;/g,'<');
        a.attr('class','suggesting').html('...');
        google.language.translate(orig, "en", '{{rosetta_i18n_lang_code}}', function(result) {
            if (!result.error) {
                trans.val(unescape(result.translation));
                a.hide();
            } else {
                a.attr('class','suggest').html(str);
            }
        });
        return false;
    });
{% endif %}
});
