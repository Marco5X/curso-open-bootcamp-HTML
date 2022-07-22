let map;

function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
      title: "Uluru"
    });
    const marker2 = new google.maps.Marker({
        position: { lat: -24.2700918, lng: -65.279916 },
        map: map,
        title: "Jujuy"
      });

      const marker3 = new google.maps.Marker({
        position: { lat: -23.7468625, lng: -65.5041026 },
        map: map,
        title: "Purmamarca"
      });
  }
  
window.initMap = initMap;