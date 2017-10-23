"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EditorConfig = /** @class */ (function () {
    function EditorConfig() {
        this.width = '100%';
        this.height = '400';
        this.path = 'assets/lib/';
        this.searchReplace = true;
        this.toolbar = true;
        this.emoji = true;
        this.taskList = true;
        this.tex = true;
        this.readOnly = false;
        this.tocm = true;
        this.watch = true;
        this.previewCodeHighlight = true;
        this.saveHTMLToTextarea = true;
        this.markdown = '';
        this.flowChart = true;
        this.syncScrolling = true;
        this.sequenceDiagram = true;
        this.imageUpload = true;
        this.imageFormats = ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'webp'];
        this.imageUploadURL = '';
    }
    return EditorConfig;
}());
exports.EditorConfig = EditorConfig;
//# sourceMappingURL=editor-config.js.map