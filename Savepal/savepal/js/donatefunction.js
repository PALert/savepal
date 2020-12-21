    function initMap() {
        var options ={
            center: { lat: 9.967216, lng: 118.78551 },
            zoom: 8,
        }
          
     var map = new google.maps.Map(document.getElementById('map'),options); 
     
     var marker = new google.maps.Marker({
            position: { lat:  9.740696, lng:118.730072 },
            map,
            title: "Puerto Princesa City",
     });

     var contentString=
  
     '<h6 id="firstHeading" class="firstHeading">Puerto Princesa City Donation</h6>'+
     '<p class="item-2 ">COVID Ayuda</p>'+
     '<button id="button-donate" class="btn btn-block badge-info">Donate</button>';


     var infowindow = new google.maps.InfoWindow({
         content: contentString,
     });

     marker.addListener("click",()=>{
         infowindow.open(map,marker);
     });


/*cuyo marker*/
     
     
     var marker2 = new google.maps.Marker({
        position: { lat: 10.8505, lng:121.0411 },
         map,
        title: "Cuyo",
 });

 var contentString=
 '<h6 id="firstHeading" class="firstHeading">Cuyo Donation</h6>'+
 '<p class="item-2 ">COVID Ayuda</p>'+
 '<button id="button-donate" class="btn btn-block badge-info">Donate</button>';


 var infowindow2 = new google.maps.InfoWindow({
     content: contentString,
 });

 marker2.addListener("click",()=>{
     infowindow2.open(map,marker2);
 });



/*brooke's point*/
var marker3 = new google.maps.Marker({
    position: { lat: 8.774234, lng:117.838942 },
     map,
    title: "Brooke's Point",
});


var contentString = 
'<h6 id="firstHeading" class="firstHeading">Brookes Point Donation</h6>'+
'<p class="item-2 ">COVID Ayuda</p>'+
'<button id="button-donate" class="btn btn-block badge-info">Donate</button>';

var infowindow3 = new google.maps.InfoWindow({
    content: contentString,
});

marker3.addListener("click",()=>{
    infowindow3.open(map,marker3);
})

    }


 
 
 
 
 
function casesAndData(){
    console.log('go to cases and data page')
     window.location.assign('cases&data.html')
     }
    



