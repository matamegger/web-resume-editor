var uploadOptions = {
    serverPath: 'https://api.imgur.com/3/image',
    fileFieldName: 'image',
    headers: { 'Authorization': 'Client-ID 9e57cb1c4791cea' },
    urlPropertyName: 'data.link'
};
/** Default editor configuration **/
$('#editor')
    .trumbowyg({
        btns: [
            ['viewHTML'],
            ['p', 'blockquote', 'h1', 'h2', 'h3', 'h4'],
            ['strong', 'em', 'underline', 'del'],
            ['superscript', 'subscript'],
            ['createLink', 'unlink'],
            ['insertImage'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
            ['unorderedList', 'orderedList'],
            ['horizontalRule'],
            ['removeformat'],

            ['upload', 'base64', 'noembed'],
            ['foreColor', 'backColor'],
            ['preformatted'],
            ['fullscreen', 'close']
        ],
        plugins: {
            upload: uploadOptions
        }
    });
