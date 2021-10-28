exports.ids = [26];
exports.modules = {

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PortfolioWrapper.vue?vue&type=template&id=e6b952aa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"portfolio-area"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\"><div class=\"col-lg-12\"><div data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"section-title text-center\"><div class=\"portfolio-filter-menu mb-0\"><button data-filter=\"all\">All ProjectS</button> <button data-filter=\".business\">Business</button> <button data-filter=\".marketing\">Marketing</button> <button data-filter=\".consulting\"> Consulting</button> <button data-filter=\".digital\">Digital Marketing</button></div></div></div></div> "),_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"row portfolio-grid gutter-50 box\">","</div>",_vm._l((_vm.portfolios),function(portfolio,index){return _vm._ssrNode("<div"+(_vm._ssrClass("col-md-6 portfolio-item mix",portfolio.category))+">","</div>",[_vm._ssrNode("<div class=\"inner-content\">","</div>",[_vm._ssrNode("<div class=\"thumb\">","</div>",[_c('n-link',{attrs:{"to":"/project-details"}},[_c('img',{attrs:{"src":portfolio.imgSrc,"alt":portfolio.title}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"portfolio-info\">","</div>",[_vm._ssrNode("<div class=\"content\">","</div>",[_vm._ssrNode("<img src=\"/images/shape/line-s1.png\" alt=\"shape image\" class=\"shape-line-img\"> "),_vm._ssrNode("<h3 class=\"title\">","</h3>",[_c('n-link',{attrs:{"to":"/project-details"}},[_vm._v(_vm._s(portfolio.title))])],1),_vm._ssrNode(" "),_c('n-link',{staticClass:"category",attrs:{"to":"/project-details"}},[_vm._v(_vm._s(portfolio.category))])],2),_vm._ssrNode(" "),_c('n-link',{staticClass:"btn-icon",attrs:{"to":"/project-details"}},[_c('i',{staticClass:"icofont-long-arrow-right"})])],2)],2)])}),0),_vm._ssrNode(" "),_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-duration=\"1300\" class=\"portfolio-footer text-center\">","</div>",[_c('n-link',{staticClass:"btn btn-theme btn-lg mb-1",attrs:{"to":"/project-details"}},[_vm._v("Load More")])],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PortfolioWrapper.vue?vue&type=template&id=e6b952aa&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PortfolioWrapper.vue?vue&type=script&lang=js&
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
/* harmony default export */ var PortfolioWrappervue_type_script_lang_js_ = ({
  data() {
    return {
      mixer: null,
      portfolios: [{
        imgSrc: "/images/portfolio/1.jpg",
        title: "Business Management",
        category: "business"
      }, {
        imgSrc: "/images/portfolio/2.jpg",
        title: "Market Statics & Analysis.",
        category: "marketing"
      }, {
        imgSrc: "/images/portfolio/3.jpg",
        title: "Digital Marketing",
        category: "consulting"
      }, {
        imgSrc: "/images/portfolio/4.jpg",
        title: "Business Consultation",
        category: "digital"
      }, {
        imgSrc: "/images/portfolio/5.jpg",
        title: "Link Building Services",
        category: "business"
      }, {
        imgSrc: "/images/portfolio/6.jpg",
        title: "Social Media Marketing",
        category: "marketing"
      }]
    };
  },

  mounted() {
    this.$nextTick(() => {
      const containerEl = document.querySelector('.box');
      this.mixer = new this.mixitup(containerEl);
    });
  }

});
// CONCATENATED MODULE: ./components/PortfolioWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PortfolioWrappervue_type_script_lang_js_ = (PortfolioWrappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PortfolioWrapper.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PortfolioWrappervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "05c0fdaf"
  
)

/* harmony default export */ var PortfolioWrapper = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=portfolio-wrapper.js.map