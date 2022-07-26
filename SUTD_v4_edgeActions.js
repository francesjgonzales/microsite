/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         yepnope({
         	load: [
                 "http://cdn.edgecommons.org/an/1.1.0/js/min/EdgeCommons.js",        
                 "http://cdn.edgecommons.org/an/1.1.0/css/style.css",
                 "http://cdn.edgecommons.org/an/1.1.2/js/min/EdgeCommons.Parallax.js"
         		],
         	complete: function (){
         		EC.debug("Ready to go!");
         	}
         });
         

      });
      //Edge binding end

      

      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         yepnope({
         	load: "http://cdn.edgecommons.org/an/1.1.2/js/min/EdgeCommons.js",
         	complete: function() {
         		EC.debug("Ready to go!");
         	}
         });
         
         
         var imageCount = 1;
         var numOfPhotos = 7;
         
         
         sym.$("textTotal").html('of ' + numOfPhotos);
         
         sym.showPhoto = function (photoDirection){
         
         	imageCount = imageCount + photoDirection;
         
         	//Reset to the beginning if you go beyond number of potos
         	if (imageCount > numOfPhotos) { imageCount = 1};
         
         	//Less than 1, set it to the highest number
         	if (imageCount < 1) { imageCount = numOfPhotos};
         
         	// Change the text of an element
         	sym.$("textCount").html(imageCount);
         
         	sym.$('mainPhoto').attr('src','images/photo_'+ imageCount +'.jpg');
         
         
         	//Fade out the current photo
         	sym.$('mainPhoto').fadeOut('slow', function() {
         
         		//Set the attribute to the correct photo
         		sym.$('mainPhoto').attr('src', 'images/photo_'+imageCount +'.jpg');
         
         		sym.$('mainPhoto').load(function () {
         
         		//Fade in the new photo
         		sym.$('mainPhoto').fadeIn('slow');
         		});
         	});
         }
         
         

      });
      //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_videobutton}", "click", function(sym, e) {
         var config = {
             width: 700,
             height: 500,
             type: "youtube",
             source: "QhaUB_33-8I",
             param: {
                 autoPlay: true
             }
         };        
         
         // Open the overlay 
         EC.Spotlight.open( config );
         

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_HOMEHOVERCopy2}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("homehover", "aboutout");
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_OPPHOVERCopy2}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("opphover");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_CONTACTHOVERCopy}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("contacthover");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_LOCATIONHOVERCopy}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("locationhover");
         

      });
      //Edge binding end

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_gallery}", "click", function(sym, e) {
         sym.play("galleryhover");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_GOBACK}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("mouseOut");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3851, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9332, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9929, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12847, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 34000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14626, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17350, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 38500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20844, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 42000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_email}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("mailto:singapore.retail@colliers.com");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ContactUs}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("www.colliers.com");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27089, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_PLAYBACK}", "click", function(sym, e) {
         var config = {
             width: 700,
             height: 500,
             type: "youtube",
             source: "QhaUB_33-8I",
             param: {
                 autoPlay: true
             }
         };        
         
         // Open the overlay 
         EC.Spotlight.open( config );
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_LeftBtn}", "click", function(sym, e) {
         
         sym.getComposition().getStage().showPhoto(-1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rightBTN}", "click", function(sym, e) {
         
         sym.getComposition().getStage().showPhoto(1);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("homehover");
         
         

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_ABOUTHOVERCopy3}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("abouthover");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_scrollButtn}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("abouthover");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'redbar'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_redBar}", "touchmove", function(sym, e) {
         // Show an Element.
         sym.$("ABOUT").show("redBar");

      });
      //Edge binding end

   })("redbar");
   //Edge symbol end:'redbar'

   //=========================================================
   
   //Edge symbol: 'video'
   (function(symbolName) {   
   
   })("video");
   //Edge symbol end:'video'

   //=========================================================
   
   //Edge symbol: 'about'
   (function(symbolName) {   
   
   })("about");
   //Edge symbol end:'about'

   //=========================================================
   
   //Edge symbol: 'location'
   (function(symbolName) {   
   
   })("location");
   //Edge symbol end:'location'

})(jQuery, AdobeEdge, "EDGE-4390865");