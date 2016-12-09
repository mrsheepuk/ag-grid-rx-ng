"use strict";
var core_1 = require('@angular/core');
var core_2 = require('@angular/core');
var agGridNg2_1 = require('./agGridNg2');
var ng2FrameworkFactory_1 = require('./ng2FrameworkFactory');
var ng2ComponentFactory_1 = require('./ng2ComponentFactory');
var baseComponentFactory_1 = require("./baseComponentFactory");
var agGridColumn_1 = require("./agGridColumn");
var AgGridModule = (function () {
    function AgGridModule() {
    }
    AgGridModule.withComponents = function (components) {
        return {
            ngModule: AgGridModule,
            providers: [
                ng2FrameworkFactory_1.Ng2FrameworkFactory,
                ng2ComponentFactory_1.Ng2ComponentFactory,
                { provide: baseComponentFactory_1.BaseComponentFactory, useExisting: ng2ComponentFactory_1.Ng2ComponentFactory },
                { provide: core_2.ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true }
            ],
        };
    };
    AgGridModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [],
                    declarations: [
                        agGridNg2_1.AgGridNg2,
                        agGridColumn_1.AgGridColumn
                    ],
                    exports: [
                        agGridNg2_1.AgGridNg2,
                        agGridColumn_1.AgGridColumn
                    ]
                },] },
    ];
    /** @nocollapse */
    AgGridModule.ctorParameters = [];
    return AgGridModule;
}());
exports.AgGridModule = AgGridModule;
//# sourceMappingURL=aggrid.module.js.map