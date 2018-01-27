import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./ng-binary-clock";
import * as i3 from "./ng-binary-clock.service";
var styles_NgBinaryClockComponent = [".bc-wrapper[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: repeat(6, 1fr);\n      grid-gap: 5px;\n      width: 300px;\n      height: 200px;\n      padding: 10px;\n      border-radius: 5%;\n      background-color: #000;\n    }\n    \n    .bc-wrapper[_ngcontent-%COMP%]    > .bc-section[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-rows: repeat(4, 1fr);\n      grid-gap: 5px;\n    }\n    \n    .bc-wrapper[_ngcontent-%COMP%]    > .bc-section[_ngcontent-%COMP%]    > .bc-led-box[_ngcontent-%COMP%] {\n      width: 100%;\n      height: 100%;\n    }\n    \n    .bc-wrapper[_ngcontent-%COMP%]    > .bc-section[_ngcontent-%COMP%]    > .bc-led-box-span-2[_ngcontent-%COMP%] {\n      grid-row: span 2;\n    }\n    \n    .bc-wrapper[_ngcontent-%COMP%]    > .bc-section[_ngcontent-%COMP%]    > .bc-led-box[_ngcontent-%COMP%]    > span.bc-led[_ngcontent-%COMP%] {\n      width: 100%;\n      height: 100%;\n      display: inline-block;\n      border-radius: 50%;\n      background-color: #fff;\n    }\n    \n    .bc-wrapper[_ngcontent-%COMP%]    > .bc-section[_ngcontent-%COMP%]    > .bc-led-box[_ngcontent-%COMP%]    > span.bc-led-active[_ngcontent-%COMP%] {\n      background-color: #007BFF;\n    },"];
var RenderType_NgBinaryClockComponent = i0.ɵcrt({ encapsulation: 0, styles: styles_NgBinaryClockComponent, data: {} });
export { RenderType_NgBinaryClockComponent as RenderType_NgBinaryClockComponent };
function View_NgBinaryClockComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 171, "div", [["class", "bc-wrapper"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(3, 0, null, null, 17, "div", [["class", "bc-section"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(5, 0, null, null, 0, "div", [["class", "bc-led-box bc-led-box-span-2"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(7, 0, null, null, 5, "div", [["class", "bc-led-box"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(9, 0, null, null, 2, "span", [["class", "bc-led"]], null, null, null, null, null)), i0.ɵdid(10, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(11, { "bc-led-active": 0 }), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(14, 0, null, null, 5, "div", [["class", "bc-led-box"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(16, 0, null, null, 2, "span", [["class", "bc-led"]], null, null, null, null, null)), i0.ɵdid(17, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(18, { "bc-led-active": 0 }), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n\n      "])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(23, 0, null, null, 29, "div", [["class", "bc-section"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(25, 0, null, null, 5, "div", [["class", "bc-led-box"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(27, 0, null, null, 2, "span", [["class", "bc-led"]], null, null, null, null, null)), i0.ɵdid(28, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(29, { "bc-led-active": 0 }), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(32, 0, null, null, 5, "div", [["class", "bc-led-box"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(34, 0, null, null, 2, "span", [["class", "bc-led"]], null, null, null, null, null)), i0.ɵdid(35, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(36, { "bc-led-active": 0 }), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(39, 0, null, null, 5, "div", [["class", "bc-led-box"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(41, 0, null, null, 2, "span", [["class", "bc-led"]], null, null, null, null, null)), i0.ɵdid(42, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(43, { "bc-led-active": 0 }), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(46, 0, null, null, 5, "div", [["class", "bc-led-box"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(48, 0, null, null, 2, "span", [["class", "bc-led"]], null, null, null, null, null)), i0.ɵdid(49, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(50, { "bc-led-active": 0 }), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n\n      "])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(55, 0, null, null, 24, "div", [["class", "bc-section"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(57, 0, null, null, 0, "div", [["class", "bc-led-box"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(59, 0, null, null, 5, "div", [["class", "bc-led-box"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(61, 0, null, null, 2, "span", [["class", "bc-led"]], null, null, null, null, null)), i0.ɵdid(62, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(63, { "bc-led-active": 0 }), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(66, 0, null, null, 5, "div", [["class", "bc-led-box"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(68, 0, null, null, 2, "span", [["class", "bc-led"]], null, null, null, null, null)), i0.ɵdid(69, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(70, { "bc-led-active": 0 }), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(73, 0, null, null, 5, "div", [["class", "bc-led-box"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(75, 0, null, null, 2, "span", [["class", "bc-led"]], null, null, null, null, null)), i0.ɵdid(76, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(77, { "bc-led-active": 0 }), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n      \n      "])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(82, 0, null, null, 29, "div", [["class", "bc-section"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(84, 0, null, null, 5, "div", [["class", "bc-led-box"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(86, 0, null, null, 2, "span", [["class", "bc-led"]], null, null, null, null, null)), i0.ɵdid(87, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(88, { "bc-led-active": 0 }), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(91, 0, null, null, 5, "div", [["class", "bc-led-box"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(93, 0, null, null, 2, "span", [["class", "bc-led"]], null, null, null, null, null)), i0.ɵdid(94, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(95, { "bc-led-active": 0 }), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(98, 0, null, null, 5, "div", [["class", "bc-led-box"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(100, 0, null, null, 2, "span", [["class", "bc-led"]], null, null, null, null, null)), i0.ɵdid(101, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(102, { "bc-led-active": 0 }), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(105, 0, null, null, 5, "div", [["class", "bc-led-box"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(107, 0, null, null, 2, "span", [["class", "bc-led"]], null, null, null, null, null)), i0.ɵdid(108, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(109, { "bc-led-active": 0 }), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n\n      "])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(114, 0, null, null, 24, "div", [["class", "bc-section"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(116, 0, null, null, 0, "div", [["class", "bc-led-box"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(118, 0, null, null, 5, "div", [["class", "bc-led-box"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(120, 0, null, null, 2, "span", [["class", "bc-led"]], null, null, null, null, null)), i0.ɵdid(121, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(122, { "bc-led-active": 0 }), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(125, 0, null, null, 5, "div", [["class", "bc-led-box"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(127, 0, null, null, 2, "span", [["class", "bc-led"]], null, null, null, null, null)), i0.ɵdid(128, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(129, { "bc-led-active": 0 }), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(132, 0, null, null, 5, "div", [["class", "bc-led-box"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(134, 0, null, null, 2, "span", [["class", "bc-led"]], null, null, null, null, null)), i0.ɵdid(135, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(136, { "bc-led-active": 0 }), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n      \n      "])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(141, 0, null, null, 29, "div", [["class", "bc-section"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(143, 0, null, null, 5, "div", [["class", "bc-led-box"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(145, 0, null, null, 2, "span", [["class", "bc-led"]], null, null, null, null, null)), i0.ɵdid(146, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(147, { "bc-led-active": 0 }), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(150, 0, null, null, 5, "div", [["class", "bc-led-box"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(152, 0, null, null, 2, "span", [["class", "bc-led"]], null, null, null, null, null)), i0.ɵdid(153, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(154, { "bc-led-active": 0 }), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(157, 0, null, null, 5, "div", [["class", "bc-led-box"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(159, 0, null, null, 2, "span", [["class", "bc-led"]], null, null, null, null, null)), i0.ɵdid(160, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(161, { "bc-led-active": 0 }), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(164, 0, null, null, 5, "div", [["class", "bc-led-box"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(166, 0, null, null, 2, "span", [["class", "bc-led"]], null, null, null, null, null)), i0.ɵdid(167, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(168, { "bc-led-active": 0 }), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "bc-led"; var currVal_1 = _ck(_v, 11, 0, _co.current_time.hour[20]); _ck(_v, 10, 0, currVal_0, currVal_1); var currVal_2 = "bc-led"; var currVal_3 = _ck(_v, 18, 0, _co.current_time.hour[10]); _ck(_v, 17, 0, currVal_2, currVal_3); var currVal_4 = "bc-led"; var currVal_5 = _ck(_v, 29, 0, _co.current_time.hour[8]); _ck(_v, 28, 0, currVal_4, currVal_5); var currVal_6 = "bc-led"; var currVal_7 = _ck(_v, 36, 0, _co.current_time.hour[4]); _ck(_v, 35, 0, currVal_6, currVal_7); var currVal_8 = "bc-led"; var currVal_9 = _ck(_v, 43, 0, _co.current_time.hour[2]); _ck(_v, 42, 0, currVal_8, currVal_9); var currVal_10 = "bc-led"; var currVal_11 = _ck(_v, 50, 0, _co.current_time.hour[1]); _ck(_v, 49, 0, currVal_10, currVal_11); var currVal_12 = "bc-led"; var currVal_13 = _ck(_v, 63, 0, _co.current_time.minute[40]); _ck(_v, 62, 0, currVal_12, currVal_13); var currVal_14 = "bc-led"; var currVal_15 = _ck(_v, 70, 0, _co.current_time.minute[20]); _ck(_v, 69, 0, currVal_14, currVal_15); var currVal_16 = "bc-led"; var currVal_17 = _ck(_v, 77, 0, _co.current_time.minute[10]); _ck(_v, 76, 0, currVal_16, currVal_17); var currVal_18 = "bc-led"; var currVal_19 = _ck(_v, 88, 0, _co.current_time.minute[8]); _ck(_v, 87, 0, currVal_18, currVal_19); var currVal_20 = "bc-led"; var currVal_21 = _ck(_v, 95, 0, _co.current_time.minute[4]); _ck(_v, 94, 0, currVal_20, currVal_21); var currVal_22 = "bc-led"; var currVal_23 = _ck(_v, 102, 0, _co.current_time.minute[2]); _ck(_v, 101, 0, currVal_22, currVal_23); var currVal_24 = "bc-led"; var currVal_25 = _ck(_v, 109, 0, _co.current_time.minute[1]); _ck(_v, 108, 0, currVal_24, currVal_25); var currVal_26 = "bc-led"; var currVal_27 = _ck(_v, 122, 0, _co.current_time.second[40]); _ck(_v, 121, 0, currVal_26, currVal_27); var currVal_28 = "bc-led"; var currVal_29 = _ck(_v, 129, 0, _co.current_time.second[20]); _ck(_v, 128, 0, currVal_28, currVal_29); var currVal_30 = "bc-led"; var currVal_31 = _ck(_v, 136, 0, _co.current_time.second[10]); _ck(_v, 135, 0, currVal_30, currVal_31); var currVal_32 = "bc-led"; var currVal_33 = _ck(_v, 147, 0, _co.current_time.second[8]); _ck(_v, 146, 0, currVal_32, currVal_33); var currVal_34 = "bc-led"; var currVal_35 = _ck(_v, 154, 0, _co.current_time.second[4]); _ck(_v, 153, 0, currVal_34, currVal_35); var currVal_36 = "bc-led"; var currVal_37 = _ck(_v, 161, 0, _co.current_time.second[2]); _ck(_v, 160, 0, currVal_36, currVal_37); var currVal_38 = "bc-led"; var currVal_39 = _ck(_v, 168, 0, _co.current_time.second[1]); _ck(_v, 167, 0, currVal_38, currVal_39); }, null); }
export function View_NgBinaryClockComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgBinaryClockComponent_1)), i0.ɵdid(3, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n  "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.current_time; _ck(_v, 3, 0, currVal_0); }, null); }
export function View_NgBinaryClockComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ng-binary-clock", [], null, null, null, View_NgBinaryClockComponent_0, RenderType_NgBinaryClockComponent)), i0.ɵdid(1, 114688, null, 0, i2.NgBinaryClockComponent, [i3.NgBinaryClockService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var NgBinaryClockComponentNgFactory = i0.ɵccf("ng-binary-clock", i2.NgBinaryClockComponent, View_NgBinaryClockComponent_Host_0, {}, {}, []);
export { NgBinaryClockComponentNgFactory as NgBinaryClockComponentNgFactory };
//# sourceMappingURL=ng-binary-clock.ngfactory.js.map