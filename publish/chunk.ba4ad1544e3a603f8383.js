(window.webpackJsonp=window.webpackJsonp||[]).push([[43,42,44],{292:function(t,i,a){"use strict";a.d(i,"a",(function(){return s})),a.d(i,"b",(function(){return n}));var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("section",{staticClass:"product",attrs:{"data-product-id":t.body._id,"data-sku":t.body.sku,"data-selected-variation":t.selectedVariationId}},[a("a-alert",{attrs:{"can-show":t.hasLoadError,variant:"danger"}},[t._v(" "+t._s(t.i19loadProductErrorMsg)+" "),a("a",{staticClass:"alert-link",attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),t.fetchProduct.apply(null,arguments)}}},[t._v(" "+t._s(t.i19retry)+" ")])]),a("transition",{attrs:{"enter-active-class":"animated fadeIn slower"}},[t.body._id?a("div",{staticClass:"row"},[t._t("gallery-col",(function(){return[a("div",{class:t.galleryColClassName},[a(t.isSSR?"portal":"div",{tag:"component",attrs:{selector:"#product-gallery"}},[a("product-gallery",{attrs:{product:t.body,"can-add-to-cart":t.canAddToCart&&t.body.available&&t.isInStock,"current-slide":t.currentGalleyImg,"is-s-s-r":t.isSSR},on:{"update:currentSlide":function(i){t.currentGalleyImg=i},"update:current-slide":function(i){t.currentGalleyImg=i}}},[t._t("first-picture")],2),t._t("gallery-footer")],2)],1)]})),a("div",{ref:"actions",staticClass:"col"},[t.isSSR?t._e():t._t("heading",(function(){return[a(t.headingTag,{tag:"component",staticClass:"product__name"},[t._v(" "+t._s(t.name)+" ")]),a("p",{staticClass:"product__sku"},[t._v(" COD: "+t._s(t.body.sku)+" ")])]})),a(t.isSSR?"portal":"div",{tag:"component",attrs:{selector:"#product-actions"}},[t._t("rating",(function(){return[t._m(0)]})),t.body.available?t.isInStock?[t._t("prices",(function(){return[a("p",{staticClass:"product__prices"},[a("a-prices",{attrs:{product:t.ghostProductForPrices,"is-literal":!0,"is-big":!0},on:{"fix-price":function(i){return t.fixedPrice=i}}}),t._t("discount-tag",(function(){return[t.discount>0?a("span",{staticClass:"product__discount"},[t._v(" "+t._s(t.i19discountOf)+" "),a("strong",[t._v(t._s(t.discount)+"%")])]):t._e()]}),null,{discount:t.discount})],2)]})),t.hasVariations?t._t("variations",(function(){return[a("product-variations",{attrs:{product:t.body,"selected-id":t.selectedVariationId,"max-options-btns":t.maxVariationOptionsBtns},on:{"update:selectedId":function(i){t.selectedVariationId=i},"update:selected-id":function(i){t.selectedVariationId=i},"select-option":t.handleGridOption}}),a("a-alert",{attrs:{"can-show":t.hasClickedBuy&&!t.selectedVariationId}},[t._v(" "+t._s(t.i19selectVariationMsg)+" ")]),t._t("variations-info")]})):t._e(),t.body.customizations?t._t("customizations",(function(){return t._l(t.body.customizations,(function(i){return i.custom_value?a("div",{key:i._id,staticClass:"product__customization form-group",class:i.grid_id?"product__customization--"+i.grid_id:null},[a("label",{attrs:{for:"c-"+i._id}},[t._v(" "+t._s(i.label)+" "),i.add_to_price?a("span",{staticClass:"badge badge-secondary"},[t._v(" "+t._s(t.formatAdditionalPrice(i.add_to_price))+" ")]):t._e()]),a("input",{staticClass:"form-control",attrs:{type:"text",id:"c-"+i._id},on:{keyup:function(a){return t.setCustomizationOption(i,a.target.value)}}})]):t._e()}))})):t._e(),t.isKit?a("div",{staticClass:"product__kit"},[t._t("kit",(function(){return[a("transition",{attrs:{"enter-active-class":"animated fadeInUp"}},[t.kitItems.length?a("quantity-selector",{attrs:{items:t.kitItems,min:t.body.min_quantity,max:t.body.quantity,slug:t.body.slug,"kit-product-id":t.body._id,"kit-name":t.name,"kit-price":t.fixedPrice},on:{buy:function(i){return t.$emit("buy",i)}},scopedSlots:t._u([{key:"buy-button-content",fn:function(){return[t._t("buy-button-content")]},proxy:!0}],null,!0)}):t._e()],1),t.kitItems.length?t._e():a("span",{staticClass:"product__kit-loading spinner-border",attrs:{role:"status"}},[a("span",{staticClass:"sr-only"},[t._v("Loading...")])])]}),null,{kitItems:t.kitItems})],2):[t.isVariationInStock?t.hasBuyButton?a("div",{ref:"buy",staticClass:"product__buy"},[a("span",{on:{click:t.buy}},[t._t("buy",(function(){return[a("button",{staticClass:"btn btn-lg btn-primary",attrs:{type:"button",disabled:t.hasClickedBuy&&!t.isOnCart}},[t._t("buy-button-content",(function(){return[a("i",{staticClass:"fas fa-shopping-bag mr-1"}),t._v(" "+t._s(t.strBuy)+" ")]}))],2)]}),null,{hasClickedBuy:t.hasClickedBuy,isOnCart:t.isOnCart})],2)]):t._e():a("div",{staticClass:"product__out-of-stock"},[t._t("out-of-stock",(function(){return[t._v(" "+t._s(t.i19outOfStock)+" ")]}))],2),t.isLowQuantity?a("p",{staticClass:"product__short-stock"},[a("i",{staticClass:"fas fa-forward mr-1"}),t._v(" "+t._s(t.i19only)+" "),a("strong",[t._v(t._s(t.productQuantity))]),t._v(" "+t._s(t.i19unitsInStock)+" ")]):t._e()],t._t("share",(function(){return[t.body.slug?a("a-share",{staticClass:"mb-3",attrs:{url:"/"+t.body.slug,title:t.body.name,description:t.body.short_description}}):t._e()]})),a("transition",{attrs:{"enter-active-class":"animated fadeInUp"}},[!t.isQuickview&&t.paymentOptions.length?t._t("payment-gateways",(function(){return[a("article",[a("div",{staticClass:"product__payment card mb-3"},[a("a",{staticClass:"card-header",attrs:{id:"product-payment-header",role:"button",href:"#product-payment","data-toggle":"collapse","aria-expanded":"false","aria-controls":"product-payment"}},[a("span",[t._v(t._s(t.i19paymentOptions))]),a("i",{staticClass:"fas fa-chevron-down"})]),a("div",{staticClass:"collapse",attrs:{id:"product-payment","aria-labelledby":"product-payment-header"}},[a("div",{staticClass:"card-body pb-0"},t._l(t.paymentOptions,(function(i){return a("div",{key:i.app_id,staticClass:"mb-3",attrs:{id:"product-payment-"+i.app_id}},t._l(i.payment_gateways,(function(s,n){return a("payment-option",{key:i.app_id+"-"+n,attrs:{"payment-gateway":s,"installments-option":i.installments_option,price:t.fixedPrice}})})),1)})),0)])])])]}),null,{paymentOptions:t.paymentOptions}):t._e()],2),t.body.production_time&&t.body.production_time.days?a("p",{staticClass:"product__production"},[a("i",{staticClass:"fas fa-info-circle mr-1"}),t._v(" "+t._s(t.i19productionDeadline)+": "),a("strong",[t._v(" "+t._s(t.body.production_time.days)+" "+t._s(t.body.production_time.working_days?t.i19workingDays:t.i19days)+" "),t.body.production_time.cumulative?[t._v(" "+t._s(t.i19perUnit)+" ")]:t._e()],2)]):t._e(),t.isQuickview?t._e():t._t("shipping",(function(){return[a("shipping-calculator",{attrs:{shippedItems:[Object.assign({},t.body,{product_id:t.body._id,quantity:t.body.min_quantity||1})]},scopedSlots:t._u([{key:"free-from-value",fn:function(i){var s=i.amountSubtotal,n=i.freeFromValue;return[a("div",{staticClass:"product__free-shipping-from"},[t._v(" "+t._s(t.i19freeShippingFrom)+" "),a("strong",[t._v(" "+t._s(Math.ceil(n/s))+" "+t._s(t.i19units)+" ")])])]}}],null,!1,3999804120)})]})),t._t("track-price",(function(){return[t._m(1)]}))]:a("div",{staticClass:"product__out-of-stock"},[t._t("out-of-stock",(function(){return[t._v(" "+t._s(t.i19outOfStock)+" ")]}))],2):a("div",{staticClass:"product__unavailable"},[t._t("unavailable",(function(){return[t._v(" "+t._s(t.i19unavailable)+" ")]}))],2)],2),!t.isSSR&&t.body.short_description?t._t("short-description",(function(){return[a("p",{staticClass:"product__info lead"},[t._v(" "+t._s(t.body.short_description)+" ")])]})):t._e()],2)],2):t._e()]),!t.isQuickview&&t.hasStickyBuyButton&&t.body.available&&t.isInStock?[a("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut fast"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isStickyBuyVisible,expression:"isStickyBuyVisible"}],ref:"sticky",staticClass:"product__sticky"},[a("div",{staticClass:"product__sticky-container container"},[a("div",{staticClass:"product__sticky-info"},[a("a-picture",{staticClass:"product__sticky-picture",attrs:{"can-calc-height":!1,src:t.thumbnail}}),a("h5",[t._v(t._s(t.name))])],1),a("div",{staticClass:"product__sticky-buy"},[a("a-prices",{attrs:{product:t.ghostProductForPrices,"is-literal":!1,"can-show-price-options":!0}}),a("a",{staticClass:"btn btn-lg btn-primary",on:{click:t.buyOrScroll}},[a("i",{staticClass:"fas fa-shopping-bag mr-1"}),t._v(" "+t._s(t.strBuy)+" ")])],1)])])])]:t._e(),t.body._id?t._e():t._t("default")],2)},n=[function(){var t=this,i=t.$createElement;return(t._self._c||i)("div",{staticClass:"product__rating",attrs:{"data-sku":t.body.sku}})},function(){var t=this,i=t.$createElement;return(t._self._c||i)("div",{staticClass:"product__track-price",attrs:{"data-sku":t.body.sku}})}]}},0,[38,39]]);