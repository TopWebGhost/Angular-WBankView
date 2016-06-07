'use strict';

module.exports = seriesViewController;

seriesViewController.$inject = ['settings'];

function seriesViewController(settings) {
    var vm = this;

    vm.selectedType = '';

    vm.activate = activate;
    vm.selectType = selectViewType;

    activateFunc();

    ////////////////

    function activateFunc() {
        settings.seriesTypeObservable.subscribe(function(type) {
            vm.selectedType = type;
        })
    }

    function selectViewType() {
        settings.setSeriesType(vm.selectedType);
    }
}