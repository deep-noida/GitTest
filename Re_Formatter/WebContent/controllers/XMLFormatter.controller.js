sap.ui.define([
               "sap/ui/core/mvc/Controller",
               "sap/ui/model/json/JSONModel"
               ],function(controller, JSONModel){
	
				return controller.extend("deep.controllers.XMLFormatter",{
					onInit:function(){
						var data={"name":"shruti"};
						
						var oModel = new JSONModel();
						oModel.setData(data);
						oModel.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);
						this.getView().setModel(oModel, "json");
					}
				});	
});




