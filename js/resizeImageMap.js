/*
  Deze JavaScript-file transformeert image maps van afbeeldingen binnen de image.info class, 
  afkomstig uit Enterprise Architect / Inventor, 
  op basis van de geschaalde grootte van de afbeeldingen in de browser.

  Het uitvoeringsproces omvat de volgende stappen/functies:

      oMapArea(): 
      Bij het laden van de pagina, identificeert en bewaart deze functie de oorspronkelijke image map in een toegankelijke array-variabele.
      
      resizeImgMap(): 
      Bij het laden van de pagina en bij het wijzigen van de body grootte, berekent deze functie de schaalfactor tussen de originele afbeelding 
      en de geschaalde afbeelding. Vervolgens past het deze schaalfactor toe op de image map met behulp van de functie scaleCoords().

      scaleCoords(): 
      Als onderdeel van resizeImgMap(), bepaalt en stelt deze functie de waarden van de huidige image map in op basis van de schaalverhouding 
      van de originele image map.
	  
  Indien de URL de tekenreeks 'github.io' bevat, wordt het script in de wachtstand geplaatst totdat het respec-document volledig is geladen, alvorens over te gaan tot het schalen van de image maps.
  
*/

var oMapArea;

document.getElementsByTagName('body')[0].onload = function () {	
	if (window.location.href.indexOf("github.io") > -1) {
		document.respec.ready.then(function () {
		  oMapArea = oMapArea();	
		  resizeImgMap();	
		});
	}
	else {
	    oMapArea = oMapArea();	
		resizeImgMap();	
	}
};   

document.getElementsByTagName('body')[0].onresize = function() {	
	resizeImgMap(oMapArea);	
}

function oMapArea() {
	oImgInfo = document.getElementsByClassName('imageinfo');
	let oMapArea = [];
	for (i=0; i<oImgInfo.length; i++) {
		map = oImgInfo[i].children[1].children;
		let areas = [];
		for (j=0; j<map.length; j++) {		
			areas[j] = map[j].attributes[2].value;	
		}			
		oMapArea[i] = areas;
	}
	return oMapArea;
}

function resizeImgMap() {	
	console.log('resizeImgMap()');
	let cImgInfo = document.getElementsByClassName('imageinfo');
	//console.log(cImgInfo);
	for (i=0; i<cImgInfo.length; i++) {		
		img = cImgInfo[i].children[0].children[0];
		console.log(img);
		scaleX = img.clientWidth / img.naturalWidth;
		scaleY = img.clientHeight / img.naturalHeight;		
		cMapArea = cImgInfo[i].children[1].children;
		for (j=0; j<cMapArea.length; j++) {		
			cMapArea[j].attributes[2].value = scaleCoords(oMapArea[i][j], scaleX, scaleY);	
		}			
	}	
}

function scaleCoords(oMapAreaCoords, scaleX, scaleY) {	
	let oMapAreaCoordsArr = oMapAreaCoords.split(',');
	let cMapAreaCoordsArr = [];	
	cMapAreaCoordsArr[0] = oMapAreaCoordsArr[0] * scaleX; // minX * scalefactorWidth
	cMapAreaCoordsArr[1] = oMapAreaCoordsArr[1] * scaleY; // minY * scalefactorHeight
	cMapAreaCoordsArr[2] = oMapAreaCoordsArr[2] * scaleX; // maxX * scalefactorWidth
	cMapAreaCoordsArr[3] = oMapAreaCoordsArr[3] * scaleY; // maxY * scalefactorHeight
	return cMapAreaCoordsArr.join(',');	
}
