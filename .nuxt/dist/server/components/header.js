exports.ids = [17,20];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=28197803&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"header-area header-default transparent sticky-header",class:{'is-sticky': _vm.isSticky}},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-6 col-sm-4 col-lg-3\">","</div>",[_vm._ssrNode("<div class=\"header-logo-area\">","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('img',{staticClass:"logo-main",attrs:{"src":"/images/logo/logo.png","alt":"Logo"}}),_vm._v(" "),_c('img',{staticClass:"logo-light",attrs:{"src":"/images/logo/logo-light.png","alt":"Logo"}})])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-6 col-sm-8 col-lg-9\">","</div>",[_vm._ssrNode("<div class=\"header-align\">","</div>",[_vm._ssrNode("<div class=\"header-navigation-area navigation-style-two\">","</div>",[_c('Navigation')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"header-action-area\">","</div>",[_vm._ssrNode("<button class=\"btn-menu d-xl-none\"><span></span> <span></span> <span></span></button> "),_c('n-link',{staticClass:"btn-theme btn-style",attrs:{"to":"/contact"}},[_vm._v("\n                            Entrar em Contato\n                            "),_c('i',{staticClass:"icon-style icofont-double-right"})])],2)],2)])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=28197803&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  components: {
    Navigation: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 31))
  },

  data() {
    return {
      isSticky: false
    };
  },

  methods: {
    // offcanvas mobile-menu
    mobiletoggleClass(addRemoveClass, className) {
      const el = document.querySelector('#offcanvas-menu');

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }

  },

  mounted() {
    window.addEventListener('scroll', () => {
      let scrollPos = window.scrollY;

      if (scrollPos >= 200) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    });
  }

});
// CONCATENATED MODULE: ./components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Header.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b74abfde"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navigation: __webpack_require__(31).default,Header: __webpack_require__(28).default})


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation.vue?vue&type=template&id=196ae76a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"main-menu nav justify-content-center"},[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/"}},[_vm._v("Home")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/sobre"}},[_vm._v("Sobre")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"has-submenu\">","</li>",[_c('n-link',{attrs:{"to":"/servicos"}},[_vm._v("Serviços")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"has-submenu\">","</li>",[_c('n-link',{attrs:{"to":"/blog"}},[_vm._v("Blog")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/contato"}},[_vm._v("Contato")])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Navigation.vue?vue&type=template&id=196ae76a&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Navigation.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "df27d3d0"
  
)

/* harmony default export */ var Navigation = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=header.js.map