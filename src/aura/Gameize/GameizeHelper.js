({
    fetchUserData: function(component, helper,Gameize_Helper){
        var apexBridge = component.find("ApexBridge");
        apexBridge.callApex({
            component: component,
            data: {
                operation: "GameizeController",
                input: {mode: 'fetchUserData'},
                debug: component.get('v.debug')
            },
            callBackMethod: function (data) {
                if (data.outputFlag == true) {
                    if(typeof(data.output.gameize__dataFavorite__c) != 'undefined') {
                        component.set('v.dataFavorite', JSON.parse(data.output.gameize__dataFavorite__c));
                    }
                    if(typeof(data.output.gameize__dataHistory__c) != 'undefined') {
                        component.set('v.dataHistory', JSON.parse(data.output.gameize__dataHistory__c));
                    }
                } else {
                    Gameize_Helper.showToast('error', 'Error!', 'Some error occurred while fetching user data record');
                }
            }
        });
    },
    fetchGameData: function(component, helper, Gameize_Helper){
        var apexBridge = component.find("ApexBridge");
        apexBridge.callApex({
            component: component,
            data: {
                operation: "GameizeController",
                input: {mode: 'fetchGameData'},
                debug: component.get('v.debug')
            },
            callBackMethod: function (data) {
                if (data.outputFlag == true) {
                    component.set('v.gameList', data.output);
                } else {
                    Gameize_Helper.showToast('error', 'Error!', 'Some error occurred while fetching Game Data record');
                }
            }
        });
    }
})