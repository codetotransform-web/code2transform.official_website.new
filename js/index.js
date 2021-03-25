const overlay_on = ()=>{
    $("#services_overlay").css({
        "display" : "block",
        
        "transform": "scale(1)",
        "transition" : "all 0.2s ease-out",
    });
    
}
const FrontEndServices = ()=>{
    $("#overlay_frame").attr('src','./services_templates/services_frontend.html');
}
const Backend_ApiServices = ()=>{
    $("#overlay_frame").attr('src','./services_templates/services_backend+api.html');
}
const DatabaseServices = ()=>{
    $("#overlay_frame").attr('src','./services_templates/services_database.html');
}
const CloudServices = ()=>{
    $("#overlay_frame").attr('src','./services_templates/services_cloud_solutions.html');
}
const FullStackServices = ()=>{
    $("#overlay_frame").attr('src','./services_templates/services_fullstack.html');
}

document.getElementById("overlay_off_btn").addEventListener("click",()=>{
    $("#services_overlay").css({
        "transform": "scale(0)",
        "transition" : "all 0.2s ease-out",
    });
    // document.getElementById("services_overlay").style.display = "none";
});