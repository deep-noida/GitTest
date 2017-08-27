sap.ui.define(["sap/ui/core/UIComponent"
               ],function(uicomp){
				return uicomp.extend("deep.Component",{
					
					metadata:{
						"routing":
						{
							"config":
							{
								"viewType":"XML",
								"viewPath":"deep.views",
								"controlId":"idApp",
								"controlAggregation":"pages"
							},
							"routes":
							[
							 	{
							 	"pattern":"",
							 	"name":"m1",
							 	"target":"onlyone"
							 	}
							 ],
							 "targets":
							 {
								 "onlyone":
								 {
									 "viewName":"XMLFormatter"
								 }
							 }
							
								
						
						}
							
								
						
					},
					init:function(){
						sap.ui.core.UIComponent.prototype.init.apply(this);
					},
					createContent:function(){
						var oAppView = new sap.ui.view({
							id:"idView1",
							viewName:"deep.views.App",
							type:"XML"
						});
						return oAppView;
					}
				});
	
});
               