var ROOT_Gallery = "http://localhost:4006/fa-site/api/gallery";
var currentGallery;

$(document).ready(function()
{
  getGallery();
});

var getGallery = function()
{
    console.log('getGallery');
    $.ajax({
        type: 'GET',
        url: ROOT_Gallery,
        dataType: "json",
        success: renderGallery
    });
};

function renderGallery(data)
{
    list = data.gallery;
    $.each(list, function(index, gallery)
    {
        $('').append('<div id="gid' + gallery.g_id +'" class="gallery-item"><img src="" /><div>');
    });
}
