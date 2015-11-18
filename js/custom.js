
$(document).ready(function(){
    toggle_retina_images();

    var window_height = $(window).height();
    $(".sectionHeader").css({"height": window_height});

    var project_item_height = $(".sectionProjects_list li").width();
    $(".sectionProjects_list li").css({"height": project_item_height});

    $(document).on("click", "#sectionProjectsLink", function(e){
        e.preventDefault();
        
        $('html, body').animate({
            scrollTop: $("#sectionProjects").offset().top
        }, 500);
    });
    $(document).on("click", "#sectionAboutLink", function(e){
        e.preventDefault();
        
        $('html, body').animate({
            scrollTop: $("#sectionAbout").offset().top
        }, 800);
    });
    $(document).on("click", "#sectionContactLink", function(e){
        e.preventDefault();
        
        $('html, body').animate({
            scrollTop: $("#sectionContact").offset().top
        }, 900);
    });
});

function toggle_retina_images() {

    var phone_device = ($(window).width()<768) ? true :false;

    if(window.devicePixelRatio >= 1.2){
        var images = document.getElementsByTagName('img');
        for(var i=0;i < images.length;i++){
            var attr = images[i].getAttribute('data-2x');
            if(attr){
                var skip_phone = images[i].getAttribute('data-2x-skip-phone');
                if(skip_phone && phone_device){
                    continue;
                }
                images[i].src = get_2x_path(images[i].src);
            }
        }
    }

    function get_2x_path(src){
        var split_src = src.split('.');
        var ext = split_src.pop();
        var path_name = split_src.join('.');

        var path_2x = path_name + "@2x." + ext;

        return path_2x;
    };
}