(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[592],{6073:(e,t,a)=>{"use strict";a.d(t,{Q:()=>g});var r=a(5366),n=a(6757),s=a(1116);const i=function(e){return{page:e}};function l(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"li",1),r["\u0275\u0275elementStart"](1,"a",9),r["\u0275\u0275text"](2),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit,a=r["\u0275\u0275nextContext"]();r["\u0275\u0275classProp"]("active",a.currentPage==e),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("queryParams",r["\u0275\u0275pureFunction1"](4,i,e)),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate"](e)}}function o(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"li",10),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"]("of ",e.lastPage,"")}}let g=(()=>{class e{constructor(e,t){this.activeRoute=e,this.router=t,this.adClass="",this.perPage=12,this.total=6,this.currentPage=1,this.lastPage=1,this.startIndex=1,this.pagesToBeShown=[],this.params={},e.queryParams.subscribe(e=>{this.params=e,this.refresh()})}ngOnChanges(){this.refresh()}ngOnInit(){}refresh(){this.currentPage=this.params.page?parseInt(this.params.page):1,this.lastPage=Math.floor(this.total/this.perPage)+(this.total%this.perPage?1:0),this.startIndex=this.currentPage%this.perPage?this.perPage*Math.floor(this.currentPage/this.perPage):this.currentPage,this.pagesToBeShown=[];let e=Math.floor(this.total/this.perPage)+(0<this.total%this.perPage?1:0);for(let t=-1;t<2&&e>=3;t++)1<this.currentPage&&this.currentPage<e&&this.pagesToBeShown.push(this.currentPage+t),1===this.currentPage&&this.pagesToBeShown.push(this.currentPage+t+1),this.currentPage===e&&this.pagesToBeShown.push(this.currentPage+t-1);for(let t=0;t<e&&e<3;t++)this.pagesToBeShown.push(t+1)}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](n.gz),r["\u0275\u0275directiveInject"](n.F0))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["molla-pagination"]],inputs:{adClass:"adClass",perPage:"perPage",total:"total"},features:[r["\u0275\u0275NgOnChangesFeature"]],decls:14,vars:12,consts:[[1,"pagination","justify-content-center"],[1,"page-item"],["queryParamsHandling","merge",1,"page-link","page-link-prev",3,"routerLink","queryParams"],["aria-hidden","true"],[1,"icon-long-arrow-left"],["class","page-item",3,"active",4,"ngFor","ngForOf"],["class","page-item-total pl-3",4,"ngIf"],["queryParamsHandling","merge",1,"page-link","page-link-next",3,"routerLink","queryParams"],[1,"icon-long-arrow-right"],["queryParamsHandling","merge",1,"page-link",3,"routerLink","queryParams"],[1,"page-item-total","pl-3"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"nav"),r["\u0275\u0275elementStart"](1,"ul",0),r["\u0275\u0275elementStart"](2,"li",1),r["\u0275\u0275elementStart"](3,"a",2),r["\u0275\u0275elementStart"](4,"span",3),r["\u0275\u0275element"](5,"i",4),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](6,"Prev "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](7,l,3,6,"li",5),r["\u0275\u0275template"](8,o,2,1,"li",6),r["\u0275\u0275elementStart"](9,"li",1),r["\u0275\u0275elementStart"](10,"a",7),r["\u0275\u0275text"](11," Next "),r["\u0275\u0275elementStart"](12,"span",3),r["\u0275\u0275element"](13,"i",8),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](2),r["\u0275\u0275classProp"]("disabled",t.currentPage<2),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("queryParams",r["\u0275\u0275pureFunction1"](8,i,t.currentPage-1)),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("ngForOf",t.pagesToBeShown),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.lastPage>3),r["\u0275\u0275advance"](1),r["\u0275\u0275classProp"]("disabled",t.currentPage===t.lastPage),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("queryParams",r["\u0275\u0275pureFunction1"](10,i,t.currentPage+1)))},directives:[n.yS,s.NgForOf,s.NgIf],styles:[""]}),e})()}}]);