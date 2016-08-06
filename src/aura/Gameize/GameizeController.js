({
    doInit: function(component, event, helper){
        var Gameize_Helper = component.find('Gameize_Helper');

        var gameList = '[{"id": 1, "name": "Age Counter", "auraid": "agecounter", "cmpname": "AgeCounter", "desc": "Count how long you\'ve lived, in days+hours+minutes."}]';
        component.set('v.gameList', JSON.parse(gameList));

        helper.fetchData(component, helper, Gameize_Helper);
    },
    changeTab : function(component, event, helper) {
        var selectedItem = event.currentTarget;
        component.set('v.activeTabNumber', selectedItem.getAttribute('tabindex'));
    },
    handleDataUpdatedEvent: function(component, event, helper){
        var whichData = event.getParam("whichData");
        var data = event.getParam("data");
        if(whichData === 'dataFavorite'){
            component.set('v.dataFavorite', data);
        }else if(whichData == 'dataHistory'){
            component.set('v.dataHistory', data);
        }
    },
    handleShowGameEvent: function(component, event, helper){
       component.set('v.activeTabNumber', 1);
    }

})