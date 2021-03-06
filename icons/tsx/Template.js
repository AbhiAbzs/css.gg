"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledTemplate = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:6px;border:2px solid;margin-top:-14px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:8px;height:10px;top:6px}&::after{border:2px solid;left:-2px}&::before{border-top:6px double;border-bottom:2px solid;right:-2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:6px;border:2px solid;margin-top:-14px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:8px;height:10px;top:6px}&::after{border:2px solid;left:-2px}&::before{border-top:6px double;border-bottom:2px solid;right:-2px}\n"])));
exports.Template = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledTemplate, tslib_1.__assign({}, props, { ref: ref, "icon-role": "template" }))));
});
var templateObject_1;
//# sourceMappingURL=Template.js.map