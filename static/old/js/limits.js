let flag = 0;
window.onload=function(){
    $(".number").on( "click", function () {
        // console.log($($(this).children("input")[0]).val());

        let target =$($(this).children(".sentence"));
        let span = target.children("span");
        let id = $(span[0]).text();
        let name = $(span[1]).text();
        for (let i=2;i<span.length;i++){
            console.log($(span[i]).text());
        }

        if(flag===0){
            $(".target_left").text(name);
            $(".target_left").val(id);
        }else {
            $(".target_right").text(name);
            $(".target_right").val(id);
        }

    }
)
}
function flag_check() {
    flag = parseInt($('input[name="flag"]:checked').val());
}