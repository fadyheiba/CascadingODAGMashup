var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );
var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
require.config( {
	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port: "") + config.prefix + "resources"
} );

require(['js/qlik'], function (qlik) {

/*   <---CHANGE SUMMARY APP ID HERE--->   */		
	var summaryApp = qlik.openApp('ea49d1f0-e4dd-4918-b139-362735cdeab7');

	summaryApp.getObject('summaryAppSelections', 'CurrentSelections');\
/*   <---CHANGE SUMMARY FILTER BOX ID HERE--->   */	
	summaryApp.getObject('summaryAppFilters','XnZfF');
	summaryApp.getObject('summaryAppODAG', 'AppNavigationBar', { 
/*   <---CHANGE DETAILS TEMPLATE SHEET ID HERE--->   */
		sheetId: "wAGQ", openAppCallback: function ( detailsAppID, detailsTargetSheetID) {
			console.log("Generated Details App ID: " + detailsAppID + " and target sheetID is: " + detailsTargetSheetID);

			var detailsAppDiv = document.getElementById('detailsApp');
			
			var detailsAppSelections = '<div id="detailsAppSelections" style="position: absolute; top: 942px; left: 20px; width: 97%; height: 32px; border-radius: 4px;" class="qvobject"></div>';
			var detailsAppFilters = '<div id="detailsAppFilters" style="position: absolute; top: 984px; left: 20px; width: 88%; height: 101.5px; background-color:#ffffff;" class="qvobject"></div>';
			var detailsAppODAG = '<div id="detailsAppODAG" style="position: absolute; top: 984px; left: 90%; width: 8.2%; right: 20px; height: 100px;" class="qvplaceholder"></div>';
			var detailsAppiframe = '<iframe id="detailsAppiframe" src="https://qlikdemos.qlikpoc.com/single/?appid='+ detailsAppID +'&sheet='+ detailsTargetSheetID +'" style="position:absolute; top: 1090px; left: 20px; right: 20px; width: 97%; height: 750px; border-style:none;"></iframe>';	
			
			detailsAppDiv.style="height:950px;";
			detailsAppDiv.innerHTML = detailsAppSelections + detailsAppFilters + detailsAppODAG + detailsAppiframe;
			window.scrollBy({ 
				top: 1050,
				behavior: 'smooth' 
			});

			
			
			var detailsApp = qlik.openApp(detailsAppID);
			detailsApp.getObject('detailsAppSelections', 'CurrentSelections');
/*   <---CHANGE DETAILS FILTER BOX ID HERE--->   */	            
			detailsApp.getObject('detailsAppFilters','mjsmhvT');
			detailsApp.getObject('detailsAppODAG', 'AppNavigationBar', {
/*   <---CHANGE FURTHER DETAILS TEMPLATE SHEET ID HERE--->   */				
				sheetId: "349eea40-7c56-4425-a108-c606568d6dfa", openAppCallback: function ( furtherDetailsAppID, furtherDetailsTargetSheetID) {
					console.log("Generated Further Details App ID: " + furtherDetailsAppID + " and target sheetID is: " + detailsTargetSheetID);

					var furtherDetailsAppDiv = document.getElementById('furtherDetailsApp');
					
					var furtherDetailsAppSelections = '<div id="furtherDetailsAppSelections" style="position: absolute; top: 1842px; left: 20px; width: 97%; height: 32px; border-radius: 4px;" class="qvobject"></div>';
					var furtherDetailsAppiframe = '<iframe id="furtherDetailsAppiframe" src="https://sensedemo7/single/?appid='+ furtherDetailsAppID +'&sheet='+ furtherDetailsTargetSheetID +'" style="position:absolute; top: 1830px; left: 20px; right: 20px; width: 97%; height: 750px; border-style:none;"></iframe>';	
					
					detailsAppDiv.style="height:950px;";
					furtherDetailsAppDiv.innerHTML = furtherDetailsAppSelections + furtherDetailsAppiframe;
					
					var furtherDetailsApp = qlik.openApp(furtherDetailsAppID);
					furtherDetailsApp.getObject('furtherDetailsAppSelections', 'CurrentSelections');
					window.scrollBy({ 
						top: 1250,
						behavior: 'smooth' 
					});
				}
			});
		}
	});
});