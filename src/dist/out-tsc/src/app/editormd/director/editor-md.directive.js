"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var editor_config_1 = require("../model/editor-config");
var EditorMdDirective = /** @class */ (function () {
    function EditorMdDirective(id) {
        this.id = id;
        this.onComplete = new core_1.EventEmitter();
    }
    EditorMdDirective.prototype.ngAfterViewInit = function () {
        this.edit = editormd(this.id, this.editorConfig);
        this.onComplete.emit(this.edit);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", editor_config_1.EditorConfig)
    ], EditorMdDirective.prototype, "editorConfig", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], EditorMdDirective.prototype, "onComplete", void 0);
    EditorMdDirective = __decorate([
        core_1.Directive({
            selector: '[appEditorMd]'
        }),
        __param(0, core_1.Attribute('id')),
        __metadata("design:paramtypes", [String])
    ], EditorMdDirective);
    return EditorMdDirective;
}());
exports.EditorMdDirective = EditorMdDirective;
//# sourceMappingURL=editor-md.directive.js.map