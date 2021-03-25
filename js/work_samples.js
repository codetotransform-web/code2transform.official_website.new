
document.getElementById("overlay_off_btn").addEventListener("click",()=>{
    $("#services_overlay").css({
        "transform": "scale(0)",
        "transition" : "all 0.2s ease-out",
    });
    // document.getElementById("services_overlay").style.display = "none";
});

const worksample_spa = ()=>{
    $("#overlay_frame").attr('src','../Work_Sample_Templates/spa.html');
}
const worksample_event = ()=>{
    $("#overlay_frame").attr('src','../Work_Sample_Templates/event.html');
}
const worksample_gym = ()=>{
    $("#overlay_frame").attr('src','../Work_Sample_Templates/gym.html');
}
const worksample_eCommerce = ()=>{
    $("#overlay_frame").attr('src','../Work_Sample_Templates/eCommerce.html');
}
const worksample_fashion = ()=>{
    $("#overlay_frame").attr('src','../Work_Sample_Templates/fashion.html');
}
const worksample_edTech = ()=>{
    $("#overlay_frame").attr('src','../Work_Sample_Templates/edTech.html');
}


