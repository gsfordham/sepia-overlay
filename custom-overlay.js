function overlay(){
	var ol = document.createElement("div");
	ol.style.width = "100%";
	ol.style.height = "100%";
	ol.style.left = 0;
	ol.style.top = 0;
	ol.style.display = "block";
	ol.style.position = "fixed";
	ol.style.mixBlendMode = "multiply";
	ol.style.backgroundColor = "rgba(235,200,135,0.5)";
	ol.style.pointerEvents = "none";
	ol.id = "custom-overlay-div";
	
	return ol;
}

(()=>{document.body.appendChild(overlay());})();