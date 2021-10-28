exports.ids = [32,30];
exports.modules = {

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceItem.vue?vue&type=template&id=1ef942e5&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon-box-item"},[_vm._ssrNode("<div class=\"icon-box\"><img"+(_vm._ssrAttr("src",_vm.service.icon))+" alt=\"Icon\" class=\"icon-img\"></div> "),_vm._ssrNode("<div class=\"content\">","</div>",[_vm._ssrNode("<div class=\"separator-line\"><img src=\"/images/shape/line-s1.png\" alt=\"Image\"></div> <h4>"+_vm._ssrEscape(_vm._s(_vm.service.title))+"</h4> <p>"+_vm._ssrEscape(_vm._s(_vm.service.desc))+"</p> "),_c('n-link',{staticClass:"btn-link",attrs:{"to":"/service-details"}},[_vm._v("Continuar Lendo "),_c('i',{staticClass:"icon icofont-arrow-right"})])],2),_vm._ssrNode(" <div class=\"icon-shape\"><img src=\"/images/shape/s1.png\" alt=\"Icon\" class=\"shape-img1\"> <img src=\"/images/shape/s2.png\" alt=\"Icon\" class=\"shape-img2\"> <img src=\"/images/shape/s3.png\" alt=\"Icon\" class=\"shape-img3\"></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ServiceItem.vue?vue&type=template&id=1ef942e5&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ServiceItemvue_type_script_lang_js_ = ({
  props: ['service']
});
// CONCATENATED MODULE: ./components/ServiceItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ServiceItemvue_type_script_lang_js_ = (ServiceItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ServiceItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ServiceItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5b0207d8"
  
)

/* harmony default export */ var ServiceItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceWrapper.vue?vue&type=template&id=2aadda25&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"service-area"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row icon-box-style1\">","</div>",_vm._l((_vm.services),function(service,index){return _vm._ssrNode("<div data-aos=\"fade-up\" data-aos-duration=\"1100\" class=\"col-md-6 col-lg-4\">","</div>",[_c('ServiceItem',{attrs:{"service":service}})],1)}),0)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ServiceWrapper.vue?vue&type=template&id=2aadda25&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceWrapper.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ServiceWrappervue_type_script_lang_js_ = ({
  data() {
    return {
      services: [{
        icon: "/images/icons/s1.png",
        title: "Desenvolvedor Web",
        desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
      }, {
        icon: "/images/icons/s2.png",
        title: "Análise de Mercado",
        desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
      }, {
        icon: "/images/icons/s3.png",
        title: "Identidade da Marca",
        desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
      }, {
        icon: "/images/icons/s4.png",
        title: "Consulta de Negócios",
        desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
      }, {
        icon: "/images/icons/s5.png",
        title: "SEO Marketing",
        desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
      }, {
        icon: "/images/icons/s6.png",
        title: "UX & UI Designer",
        desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/ServiceWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ServiceWrappervue_type_script_lang_js_ = (ServiceWrappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ServiceWrapper.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ServiceWrappervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4ff0b122"
  
)

/* harmony default export */ var ServiceWrapper = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ServiceItem: __webpack_require__(42).default})


/***/ })

};;
//# sourceMappingURL=service-wrapper.js.map