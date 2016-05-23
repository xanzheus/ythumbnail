$(window).load(function(){
var thumbnail_list = [
    'https://i.ytimg.com/vi/[video-id]/maxresdefault.jpg',
    'https://i.ytimg.com/vi/[video-id]/0.jpg',
    'https://i.ytimg.com/vi/[video-id]/1.jpg',
    'https://i.ytimg.com/vi/[video-id]/2.jpg',
    'https://i.ytimg.com/vi/[video-id]/3.jpg',
    'https://i.ytimg.com/vi/[video-id]/default.jpg',
    'https://i.ytimg.com/vi/[video-id]/hqdefault.jpg',
    'https://i.ytimg.com/vi/[video-id]/mqdefault.jpg',
    'https://i.ytimg.com/vi/[video-id]/sddefault.jpg'
];
    
var update = function() {
    
    if ( update_html ) {
    
        var html = '';
        var video_id = $('#videoID').val();
        
        $.each(thumbnail_list, function(){
            var image_url = this.replace('[video-id]', video_id);
            html = html + '<div class="image-wrapper"><img src="' + image_url + '" /></div>';
            html = html + '<div class="caption"><p><strong>Pattern:</strong> ' + this + '</p>';
            html = html + '<p><strong>This Image:</strong> ' + image_url + '</div>';
        });
        
        $('#thumbnail_container').html( html );
    }
    update_html = false;
    
}
    
var update_html = true;
    
$('#videoID').on('change', function(){
    update_html = true;
});
    
setInterval( update, 1000 );

update();
    

});

function getThumbs(){var e=document.getElementById("container");e.style.display="block";var e=document.getElementById("get-button");e.style.display="none";};
