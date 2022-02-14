sap.ui.define(
    ["./BaseController"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("net.expertum.MultiInstance.controller.MainView", {
            onInit: function () {
                let oBPModel = new sap.ui.model.json.JSONModel({
                    "BPCollection": [
                        {
                            "BPId": "123456",
                            "FirstName": "Jehona",
                            "LastName": "Matheson",
                            "Birthday": "1886-12-13"
                        },
                        {
                            "BPId": "123457",
                            "FirstName": "Aarti",
                            "LastName": "Simonsen",
                            "Birthday": "1928-03-21"
                        },
                        {
                            "BPId": "123458",
                            "FirstName": "Judoc",
                            "LastName": "Solberg",
                            "Birthday": "1939-05-26"
                        }
                    ]});

                this.getView().setModel(oBPModel);
            }
        });
    }
);
