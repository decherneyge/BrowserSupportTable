
class BrowserCheckboxController {

    constructor(CommonService) {
        this.id = CommonService.guid();
    }


    ngModelChange() {
        this.ngModelCtrl.$setViewValue(this.ngModel);
    }

}

let browserCheckboxComponent = {
    bindings: {
        name: '@',
        ngModel: '<',

    },
    require: {ngModelCtrl: 'ngModel'},
    controller: BrowserCheckboxController,
    template: `<div class="form-check">
            <input name="$ctrl.name" type="checkbox" class="form-check-input" id="check-{{$ctrl.id}}" ng-model='$ctrl.ngModel' ng-change="$ctrl.ngModelChange()">
            <label class="form-check-label" for="check-{{$ctrl.id}}">{{$ctrl.name}}</label>
        </div>`
}

export default browserCheckboxComponent;