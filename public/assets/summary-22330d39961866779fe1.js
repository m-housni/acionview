webpackJsonp([31],{30:function(e,t,n){try{(function(){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(e,t,n){for(var r=!0;r;){var l=e,a=t,o=n;r=!1,null===l&&(l=Function.prototype);var i=Object.getOwnPropertyDescriptor(l,a);if(void 0!==i){if("value"in i)return i.value;var u=i.get;if(void 0===u)return;return u.call(o)}var s=Object.getPrototypeOf(l);if(null===s)return;e=s,t=a,n=o,r=!0,i=s=void 0}},u=n(1),s=r(u),c=n(15),d=function(e){function t(e){l(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.state={visible:!1},this.timer=null,this.scrollToTop=this.scrollToTop.bind(this)}return a(t,e),o(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.visibilityHeight,n=void 0===t?400:t,r=c(".doc-container");r.unbind("scroll").scroll(function(){var t=r.scrollTop();e.setState({visible:t>n})})}},{key:"componentWillUnmount",value:function(){c(".doc-container").unbind("scroll")}},{key:"scrollToTop",value:function(){var e=this,t=c(".doc-container"),n=50*(parseInt(t.scrollTop()/1e3)+1);cancelAnimationFrame(this.timer),this.timer=requestAnimationFrame(function r(){var l=t.scrollTop();l>0?(t.scrollTop(l-n>0?l-n:0),e.timer=requestAnimationFrame(r)):cancelAnimationFrame(e.timer)})}},{key:"render",value:function(){var e=this.state.visible,t=void 0!==e&&e;return s.default.createElement("div",{id:"backtop",className:"back-top",style:{visibility:t&&"visible"||"hidden"},onClick:this.scrollToTop},s.default.createElement("div",{className:"back-top-content"},s.default.createElement("div",{className:"back-top-icon"})))}}],[{key:"propTypes",value:{visibilityHeight:u.PropTypes.number},enumerable:!0}]),t}(u.Component);t.default=d,e.exports=t.default}).call(this)}finally{}},41:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}Object.defineProperty(t,"__esModule",{value:!0}),t.CheckboxGroup=t.Checkbox=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(1),i=r(o);t.Checkbox=i.default.createClass({displayName:"Checkbox",contextTypes:{checkboxGroup:i.default.PropTypes.object.isRequired},componentWillMount:function(){if(!this.context||!this.context.checkboxGroup)throw new Error("The `Checkbox` component must be used as a child of `CheckboxGroup`.")},render:function(){var e=this.context.checkboxGroup,t=e.name,n=e.checkedValues,r=e.onChange,l={};return n&&(l.checked=n.indexOf(this.props.value)>=0),"function"==typeof r&&(l.onChange=r.bind(null,this.props.value)),i.default.createElement("input",a({},this.props,{type:"checkbox",name:t},l))}}),t.CheckboxGroup=i.default.createClass({displayName:"CheckboxGroup",propTypes:{name:o.PropTypes.string,defaultValue:o.PropTypes.array,value:o.PropTypes.array,onChange:o.PropTypes.func,children:o.PropTypes.node.isRequired,Component:o.PropTypes.oneOfType([o.PropTypes.string,o.PropTypes.func,o.PropTypes.object])},getDefaultProps:function(){return{Component:"div"}},childContextTypes:{checkboxGroup:i.default.PropTypes.object},getChildContext:function(){return{checkboxGroup:{name:this.props.name,checkedValues:this.state.value,onChange:this._onCheckboxChange}}},getInitialState:function(){return{value:this.props.value||this.props.defaultValue||[]}},componentWillReceiveProps:function(e){e.value&&this.setState({value:e.value})},render:function(){var e=this.props,t=e.Component,n=(e.name,e.value,e.onChange,e.children),r=l(e,["Component","name","value","onChange","children"]);return i.default.createElement(t,r,n)},getValue:function(){return this.state.value},_isControlledComponent:function(){return!!this.props.value},_onCheckboxChange:function(e,t){var n;n=t.target.checked?this.state.value.concat(e):this.state.value.filter(function(t){return t!==e}),this._isControlledComponent()?this.setState({value:this.props.value}):this.setState({value:n}),"function"==typeof this.props.onChange&&this.props.onChange(n)}})},425:function(e,t,n){try{(function(){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(e,t,n){for(var r=!0;r;){var l=e,a=t,o=n;r=!1,null===l&&(l=Function.prototype);var i=Object.getOwnPropertyDescriptor(l,a);if(void 0!==i){if("value"in i)return i.value;var u=i.get;if(void 0===u)return;return u.call(o)}var s=Object.getPrototypeOf(l);if(null===s)return;e=s,t=a,n=o,r=!0,i=s=void 0}},u=n(1),s=r(u),c=n(2),d=n(5),p=function(e){function t(e){l(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.confirm=this.confirm.bind(this),this.cancel=this.cancel.bind(this)}return a(t,e),o(t,[{key:"confirm",value:function(){var e,t,n,r,l;return regeneratorRuntime.async(function(a){for(;;)switch(a.prev=a.next){case 0:return e=this.props,t=e.close,n=e.archive,r=e.data,t(),a.next=7,regeneratorRuntime.awrap(n(r.id));case 7:l=a.sent,0===l?d.notify.show("项目已归档。","success",2e3):d.notify.show("归档失败。","error",2e3);case 9:case"end":return a.stop()}},null,this)}},{key:"cancel",value:function(){var e=this.props.close;e()}},{key:"render",value:function(){var e=this.props.data;return s.default.createElement(c.Modal,{show:!0,onHide:this.cancel,backdrop:"static","aria-labelledby":"contained-modal-title-sm"},s.default.createElement(c.Modal.Header,{closeButton:!0},s.default.createElement(c.Modal.Title,{id:"contained-modal-title-la"},"项目归档")),s.default.createElement(c.Modal.Body,null,"归档后项目将变成完全只读。",s.default.createElement("br",null),"确认要将【",e.name,"】此项目归档？"),s.default.createElement(c.Modal.Footer,null,s.default.createElement(c.Button,{onClick:this.confirm},"确定"),s.default.createElement(c.Button,{bsStyle:"link",onClick:this.cancel},"取消")))}}],[{key:"propTypes",value:{close:u.PropTypes.func.isRequired,archive:u.PropTypes.func.isRequired,data:u.PropTypes.object.isRequired},enumerable:!0}]),t}(u.Component);t.default=p,e.exports=t.default}).call(this)}finally{}},426:function(e,t,n){try{(function(){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e,t,n){for(var r=!0;r;){var l=e,a=t,o=n;r=!1,null===l&&(l=Function.prototype);var i=Object.getOwnPropertyDescriptor(l,a);if(void 0!==i){if("value"in i)return i.value;var u=i.get;if(void 0===u)return;return u.call(o)}var s=Object.getPrototypeOf(l);if(null===s)return;e=s,t=a,n=o,r=!0,i=s=void 0}},s=n(1),c=r(s),d=n(8),p=n(2),f=n(7),m=r(f),y=n(3),h=r(y),v=n(38),E=r(v),b=n(5),k=n(4),g=function(e,t){var n={};return e.name||(n.name="必填"),e.principal||(n.principal="必填"),n},w=function(e){function t(e){l(this,n),u(Object.getPrototypeOf(n.prototype),"constructor",this).call(this,e),this.state={ecode:0},this.handleSubmit=this.handleSubmit.bind(this),this.handleCancel=this.handleCancel.bind(this)}a(t,e),i(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.initializeForm,n=e.data;t(n)}},{key:"searchUsers",value:function(e){var t,n;return regeneratorRuntime.async(function(r){for(;;)switch(r.prev=r.next){case 0:if(e=e.toLowerCase()){r.next=3;break}return r.abrupt("return",{options:[]});case 3:return t=new E.default,r.next=6,regeneratorRuntime.awrap(t.request({url:"/user/search?s="+e}));case 6:return n=r.sent,r.abrupt("return",{options:h.default.map(n.data,function(e){return e.name=e.name+"("+e.email+")",e})});case 8:case"end":return r.stop()}},null,this)}},{key:"handleSubmit",value:function(){var e,t,n,r,l;return regeneratorRuntime.async(function(a){for(;;)switch(a.prev=a.next){case 0:return e=this.props,t=e.values,n=e.update,r=e.close,a.next=6,regeneratorRuntime.awrap(n(t.id,h.default.extend({},h.default.omit(t,["id"]),{principal:t.principal&&t.principal.id||""})));case 6:l=a.sent,0===l?(this.setState({ecode:0}),r(),b.notify.show("项目已更新。","success",2e3)):this.setState({ecode:l});case 8:case"end":return a.stop()}},null,this)}},{key:"handleCancel",value:function(){var e=this.props,t=e.close,n=e.submitting;n||(this.setState({ecode:0}),t())}},{key:"render",value:function(){var e=this.props,t=e.i18n.errMsg,n=e.fields,r=n.id,l=n.name,a=n.principal,i=n.description,u=e.handleSubmit,s=e.invalid,d=e.dirty,f=e.submitting,y=e.data;return c.default.createElement(p.Modal,{show:!0,onHide:this.handleCancel,backdrop:"static","aria-labelledby":"contained-modal-title-sm"},c.default.createElement(p.Modal.Header,{closeButton:!0},c.default.createElement(p.Modal.Title,{id:"contained-modal-title-la"},"编辑项目 - "+y.name)),c.default.createElement("form",{onSubmit:u(this.handleSubmit),onKeyDown:function(e){13==e.keyCode&&e.preventDefault()}},c.default.createElement(p.Modal.Body,null,c.default.createElement(p.FormGroup,{controlId:"formControlsText",validationState:l.touched&&l.error?"error":null},c.default.createElement(p.ControlLabel,null,c.default.createElement("span",{className:"txt-impt"},"*"),"名称"),c.default.createElement(p.FormControl,o({type:"hidden"},r)),c.default.createElement(p.FormControl,o({disabled:f,type:"text"},l,{placeholder:"问题状态名"})),l.touched&&l.error&&c.default.createElement(p.HelpBlock,{style:{"float":"right"}},l.error)),c.default.createElement(p.FormGroup,{controlId:"formControlsText",validationState:a.touched&&a.error?"error":null},c.default.createElement(p.ControlLabel,null,c.default.createElement("span",{className:"txt-impt"},"*"),"责任人"),c.default.createElement(m.default.Async,{clearable:!1,disabled:f,options:[],value:a.value,onChange:function(e){a.onChange(e)},valueKey:"id",labelKey:"name",loadOptions:this.searchUsers.bind(this),placeholder:"输入责任人"}),a.touched&&a.error&&c.default.createElement(p.HelpBlock,{style:{"float":"right"}},a.error)),c.default.createElement(p.FormGroup,{controlId:"formControlsText"},c.default.createElement(p.ControlLabel,null,"描述"),c.default.createElement(p.FormControl,o({disabled:f,type:"text"},i,{placeholder:"状态描述"})))),c.default.createElement(p.Modal.Footer,null,c.default.createElement("span",{className:"ralign"},0!==this.state.ecode&&!f&&t[this.state.ecode]),c.default.createElement("img",{src:k,className:f?"loading":"hide"}),c.default.createElement(p.Button,{disabled:!d||f||s,type:"submit"},"确定"),c.default.createElement(p.Button,{bsStyle:"link",disabled:f,onClick:this.handleCancel},"取消"))))}}],[{key:"propTypes",value:{i18n:s.PropTypes.object.isRequired,submitting:s.PropTypes.bool,invalid:s.PropTypes.bool,dirty:s.PropTypes.bool,values:s.PropTypes.object,fields:s.PropTypes.object,handleSubmit:s.PropTypes.func.isRequired,close:s.PropTypes.func.isRequired,data:s.PropTypes.object.isRequired,initializeForm:s.PropTypes.func.isRequired,update:s.PropTypes.func.isRequired},enumerable:!0}]);var n=t;return t=(0,d.reduxForm)({form:"project",fields:["id","name","principal","description"],validate:g})(t)||t}(s.Component);t.default=w,e.exports=t.default}).call(this)}finally{}},2009:function(e,t,n){try{(function(){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function l(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{actions:(0,m.bindActionCreators)(h,e),projectActions:(0,m.bindActionCreators)(E,e)}}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=function(e,t,n){for(var r=!0;r;){var l=e,a=t,o=n;r=!1,null===l&&(l=Function.prototype);var i=Object.getOwnPropertyDescriptor(l,a);if(void 0!==i){if("value"in i)return i.value;var u=i.get;if(void 0===u)return;return u.call(o)}var s=Object.getPrototypeOf(l);if(null===s)return;e=s,t=a,n=o,r=!0,i=s=void 0}},d=n(1),p=l(d),f=n(22),m=n(23),y=n(2092),h=r(y),v=n(342),E=r(v),b=n(2010),k=function(e){function t(e){a(this,n),c(Object.getPrototypeOf(n.prototype),"constructor",this).call(this,e),this.pid=""}o(t,e),s(t,[{key:"index",value:function(){return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.props.actions.index(this.pid));case 2:return e.abrupt("return",this.props.summary.ecode);case 3:case"end":return e.stop()}},null,this)}},{key:"archive",value:function(e){var t;return regeneratorRuntime.async(function(n){for(;;)switch(n.prev=n.next){case 0:return t=this.props.projectActions,n.next=3,regeneratorRuntime.awrap(t.archive(e));case 3:return n.abrupt("return",this.props.project.ecode);case 4:case"end":return n.stop()}},null,this)}},{key:"update",value:function(e,t){var n;return regeneratorRuntime.async(function(r){for(;;)switch(r.prev=r.next){case 0:return n=this.props.projectActions,r.next=3,regeneratorRuntime.awrap(n.update(e,t));case 3:return r.abrupt("return",this.props.project.ecode);case 4:case"end":return r.stop()}},null,this)}},{key:"componentWillMount",value:function(){var e=this.props,t=e.actions,n=e.params.key;t.index(n),this.pid=n}},{key:"componentWillReceiveProps",value:function(e){var t=this.props.actions,n=e.params.key;n!==this.pid&&(t.index(n),this.pid=n)}},{key:"render",value:function(){return p.default.createElement("div",null,p.default.createElement(b,u({i18n:this.props.i18n,layout:this.props.layout,index:this.index.bind(this),archive:this.archive.bind(this),update:this.update.bind(this),project:this.props.project.item,user:this.props.session.user},this.props.summary)))}}],[{key:"propTypes",value:{i18n:d.PropTypes.object.isRequired,actions:d.PropTypes.object.isRequired,projectActions:d.PropTypes.object.isRequired,location:d.PropTypes.object.isRequired,params:d.PropTypes.object.isRequired,layout:d.PropTypes.object.isRequired,session:d.PropTypes.object.isRequired,project:d.PropTypes.object.isRequired,summary:d.PropTypes.object.isRequired},enumerable:!0}]);var n=t;return t=(0,f.connect)(function(e){var t=e.i18n,n=e.layout,r=e.session,l=e.project,a=e.summary;return{i18n:t,layout:n,session:r,project:l,summary:a}},i)(t)||t}(d.Component);t.default=k,e.exports=t.default}).call(this)}finally{}},2010:function(e,t,n){try{(function(){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(e,t,n){for(var r=!0;r;){var l=e,a=t,o=n;r=!1,null===l&&(l=Function.prototype);var i=Object.getOwnPropertyDescriptor(l,a);if(void 0!==i){if("value"in i)return i.value;var u=i.get;if(void 0===u)return;return u.call(o)}var s=Object.getPrototypeOf(l);if(null===s)return;e=s,t=a,n=o,r=!0,i=s=void 0}},u=n(1),s=r(u),c=n(21),d=n(2),p=n(41),f=n(201),m=(n(5),n(3)),y=r(m),h=n(60),v=n(4),E=n(30),b=n(425),k=n(426),g=function(e){function t(e){l(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.state={pulseShowModel:"charts",pulseStatItems:["new","resolve","close"],assigneeShowModel:"percentage",priorityShowModel:"percentage",moduleShowModel:"percentage",editModalShow:!1,archiveNotifyShow:!1}}return a(t,e),o(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.i18n,r=t.layout,l=t.user,a=t.project,o=t.data,i=t.update,u=t.archive,m=t.options,g=t.loading,w={marginRight:"50px"},j=["#58ca9a","#ee706d","#f7da47","#447eff"];return g?s.default.createElement("div",{style:{marginTop:"50px",textAlign:"center"}},s.default.createElement("img",{src:v,className:"loading"})):s.default.createElement("div",{style:{marginTop:"20px",marginBottom:"30px"}},s.default.createElement(E,null),s.default.createElement("div",{className:"project-summary-header"},s.default.createElement("span",{style:{fontSize:"16px"}},a.name||"-"),s.default.createElement("span",{style:{marginLeft:"15px"}},"active"==a.status?s.default.createElement("span",{className:"project-inprogress-label"},"活动中"):s.default.createElement("span",{className:"project-close-label"},"已归档")),s.default.createElement("span",{className:"item-title"},"键值："),s.default.createElement("span",null,a.key||"-"),s.default.createElement("span",{className:"item-title"},"负责人："),s.default.createElement("span",null,a.principal&&a.principal.name||"-"),s.default.createElement("span",{className:"item-title"},"描述："),s.default.createElement("span",null,a.description||"-"),"active"==a.status&&a.principal&&a.principal.id==l.id&&s.default.createElement("span",{style:{"float":"right"}},s.default.createElement("span",{className:"project-summary-button",onClick:function(){e.setState({editModalShow:!0})},title:"编辑"},s.default.createElement("i",{className:"fa fa-edit"})),s.default.createElement("span",{className:"project-summary-button",onClick:function(){e.setState({archiveNotifyShow:!0})},title:"归档"},s.default.createElement("i",{className:"fa fa-archive"})))),o.filters&&o.filters.length>0?s.default.createElement("div",{style:{height:"160px",marginBottom:"20px",padding:"16px 0px",backgroundColor:"#f7f7f7",borderRadius:"4px",borderBottom:"1px solid #ddd"}},y.default.map(o.filters||[],function(e,t){return s.default.createElement(d.Col,{sm:3,key:t},s.default.createElement("div",{style:{padding:"30px 0px",textAlign:"center",backgroundColor:j[t],borderRadius:"4px"}},s.default.createElement("div",{style:{fontWeight:600,fontSize:"30px"}},s.default.createElement(c.Link,{to:"/project/"+a.key+"/issue"+(y.default.isEmpty(e.query)?"":"?"+h.stringify(e.query||{})),style:{color:"#fff"}},e.count)),s.default.createElement("div",{style:{fontSize:"14px",color:"#fff",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},title:e.name},e.name)))})):s.default.createElement("div",{style:{marginBottom:"20px",padding:"15px",backgroundColor:"#f7f7f7",borderRadius:"4px",borderBottom:"1px solid #ddd"}},s.default.createElement("span",{style:w},s.default.createElement(c.Link,{to:"/project/"+a.key+"/issue"},"全部问题")),s.default.createElement("span",{style:w},s.default.createElement(c.Link,{to:"/project/"+a.key+"/issue?resolution=Unresolved"},"未解决的")),s.default.createElement("span",{style:w},s.default.createElement(c.Link,{to:"/project/"+a.key+"/issue?assignee=me&resolution=Unresolved"},"分配给我的")),s.default.createElement("span",{style:w},s.default.createElement(c.Link,{to:"/project/"+a.key+"/issue?reporter=me"},"我报告的")),s.default.createElement("span",{style:w},s.default.createElement(c.Link,{to:"/project/"+a.key+"/issue?watcher=me"},"我关注的")),s.default.createElement("span",{style:w},s.default.createElement(c.Link,{to:"/project/"+a.key+"/issue?created_at=-14d~"},"最近增加的")),s.default.createElement("span",{style:w},s.default.createElement(c.Link,{to:"/project/"+a.key+"/issue?updated_at=-14d~"},"最近更新的")),s.default.createElement("span",{style:w},s.default.createElement(c.Link,{to:"/project/"+a.key+"/issue?resolved_at=-14d~"},"最近解决的")),s.default.createElement("span",{style:w},s.default.createElement(c.Link,{to:"/project/"+a.key+"/issue?closed_at=-14d~"},"最近关闭的"))),s.default.createElement(d.Panel,{style:{height:"320px"},header:s.default.createElement("div",null,s.default.createElement("span",null,"问题动态："+(m.twoWeeksAgo||"")+" ~ 现在"),s.default.createElement("span",{className:"exchange-icon",onClick:function(){return e.setState({pulseShowModel:"detail"==e.state.pulseShowModel?"charts":"detail"})},title:"切换"},s.default.createElement("i",{className:"fa fa-retweet"})))},"detail"==this.state.pulseShowModel&&s.default.createElement(d.Table,{responsive:!0,hover:!0},s.default.createElement("thead",null,s.default.createElement("tr",null,s.default.createElement("th",null,"日期"),y.default.map(o.trend||[],function(e,t){return s.default.createElement("th",{key:t},e.day.substr(5))}),s.default.createElement("th",null,"合计"))),s.default.createElement("tbody",null,s.default.createElement("tr",null,s.default.createElement("td",null,s.default.createElement(c.Link,{to:"/project/"+a.key+"/issue?created_at=-14d~"},"新建问题")),y.default.map(o.trend||[],function(e,t){return s.default.createElement("td",{key:t},s.default.createElement(c.Link,{to:"/project/"+a.key+"/issue?created_at="+e.day+"~"+e.day},e.new))}),s.default.createElement("td",null,s.default.createElement(c.Link,{to:"/project/"+a.key+"/issue?created_at=-14d~"},y.default.reduce(o.trend||[],function(e,t){return e+t.new},0)))),s.default.createElement("tr",null,s.default.createElement("td",null,s.default.createElement(c.Link,{to:"/project/"+a.key+"/issue?resolved_at=-14d~"},"解决问题")),y.default.map(o.trend||[],function(e,t){return s.default.createElement("td",{key:t},s.default.createElement(c.Link,{to:"/project/"+a.key+"/issue?resolved_at="+e.day+"~"+e.day},e.resolved))}),s.default.createElement("td",null,s.default.createElement(c.Link,{to:"/project/"+a.key+"/issue?resolved_at=-14d~"},y.default.reduce(o.trend||[],function(e,t){return e+t.resolved},0)))),s.default.createElement("tr",null,s.default.createElement("td",null,s.default.createElement(c.Link,{to:"/project/"+a.key+"/issue?closed_at=-14d~"},"关闭问题")),y.default.map(o.trend||[],function(e,t){return s.default.createElement("td",{key:t},s.default.createElement(c.Link,{to:"/project/"+a.key+"/issue?closed_at="+e.day+"~"+e.day},e.closed))}),s.default.createElement("td",null,s.default.createElement(c.Link,{to:"/project/"+a.key+"/issue?closed_at=-14d~"},y.default.reduce(o.trend||[],function(e,t){return e+t.closed},0)))))),"charts"==this.state.pulseShowModel&&s.default.createElement("div",null,s.default.createElement(p.CheckboxGroup,{name:"statItems",value:this.state.pulseStatItems,onChange:function(t){e.setState({pulseStatItems:t})},style:{"float":"right",margin:"5px 10px 0px 0px",height:"30px"}},s.default.createElement("div",{style:{"float":"left"}},s.default.createElement("label",{style:{fontWeight:400}},s.default.createElement(p.Checkbox,{value:"new",style:{"float":"left"}}),s.default.createElement("span",{style:{marginLeft:"2px"}},"新建的"))),s.default.createElement("div",{style:{"float":"left",marginLeft:"8px"}},s.default.createElement("label",{style:{fontWeight:400}},s.default.createElement(p.Checkbox,{value:"resolve"}),s.default.createElement("span",{style:{marginLeft:"2px"}},"已解决的"))),s.default.createElement("div",{style:{"float":"left",marginLeft:"8px"}},s.default.createElement("label",{style:{fontWeight:400}},s.default.createElement(p.Checkbox,{value:"close"}),s.default.createElement("span",{style:{marginLeft:"2px"}},"已关闭的"))))),"charts"==this.state.pulseShowModel&&s.default.createElement("div",{className:"report-shape-container"},s.default.createElement(f.LineChart,{width:.95*r.containerWidth,height:200,data:o.trend||[],style:{margin:"35px auto"}},s.default.createElement(f.XAxis,{dataKey:"day"}),s.default.createElement(f.YAxis,null),s.default.createElement(f.CartesianGrid,{strokeDasharray:"3 3"}),s.default.createElement(f.Tooltip,null),s.default.createElement(f.Legend,null),this.state.pulseStatItems.indexOf("new")!==-1&&s.default.createElement(f.Line,{type:"monotone",dataKey:"new",name:"新建的",stroke:"#4572A7",fill:"#4572A7"}),this.state.pulseStatItems.indexOf("resolve")!==-1&&s.default.createElement(f.Line,{type:"monotone",dataKey:"resolved",name:"已解决的",stroke:"#89A54E",fill:"#89A54E"}),this.state.pulseStatItems.indexOf("close")!==-1&&s.default.createElement(f.Line,{type:"monotone",dataKey:"closed",name:"已关闭的",stroke:"#AA4643",fill:"#AA4643"})))),s.default.createElement(d.Panel,{header:s.default.createElement("div",null,s.default.createElement("span",null,"未解决问题：按负责人"),s.default.createElement("span",{className:"exchange-icon",onClick:function(){return e.setState({assigneeShowModel:"detail"==e.state.assigneeShowModel?"percentage":"detail"})},title:"切换"},s.default.createElement("i",{className:"fa fa-retweet"})))},o.assignee_unresolved_issues&&!y.default.isEmpty(o.assignee_unresolved_issues)?s.default.createElement(d.Table,{responsive:!0,hover:!0},"detail"==this.state.assigneeShowModel&&s.default.createElement("thead",null,s.default.createElement("tr",null,s.default.createElement("th",null,"负责人"),s.default.createElement("th",null,"问题"),y.default.map(m.types||[],function(e){return s.default.createElement("th",{key:e.id},e.name)}))),"percentage"==this.state.assigneeShowModel&&s.default.createElement("thead",null,s.default.createElement("tr",null,s.default.createElement("th",null,"负责人"),s.default.createElement("th",null,"问题"),s.default.createElement("th",null,"百分比"))),"detail"==this.state.assigneeShowModel&&s.default.createElement("tbody",null,y.default.map(o.assignee_unresolved_issues,function(e,t){return s.default.createElement("tr",{key:t},s.default.createElement("td",{style:{width:"20%"}},s.default.createElement(c.Link,{to:"/project/"+a.key+"/issue?resolution=Unresolved&assignee="+t},m.users&&m.users[t]||"")),s.default.createElement("td",{style:{width:"10%"}},s.default.createElement(c.Link,{to:"/project/"+a.key+"/issue?resolution=Unresolved&assignee="+t},e.total||0)),y.default.map(m.types||[],function(n){return s.default.createElement("td",{key:n.id},s.default.createElement(c.Link,{to:"/project/"+a.key+"/issue?resolution=Unresolved&type="+n.id+"&assignee="+t},e[n.id]||0))}))})),"percentage"==this.state.assigneeShowModel&&s.default.createElement("tbody",null,y.default.map(o.assignee_unresolved_issues,function(e,t){return s.default.createElement("tr",{key:t},s.default.createElement("td",{style:{width:"20%"}},s.default.createElement(c.Link,{to:"/project/"+a.key+"/issue?resolution=Unresolved&assignee="+t},m.users&&m.users[t]||"")),s.default.createElement("td",{style:{width:"10%"}},s.default.createElement(c.Link,{to:"/project/"+a.key+"/issue?resolution=Unresolved&assignee="+t},e.total||0)),s.default.createElement("td",null,s.default.createElement("table",{style:{width:"100%"}},s.default.createElement("tbody",null,s.default.createElement("tr",null,s.default.createElement("td",{style:{width:e.percent+"%"}},s.default.createElement("div",{className:"color-bar"})),s.default.createElement("td",{style:{width:100-e.percent+"%",paddingLeft:"10px"}},e.percent+"%"))))))}))):s.default.createElement("div",null,"暂无信息")),s.default.createElement(d.Panel,{header:s.default.createElement("div",null,s.default.createElement("span",null,"未解决问题：按优先级"),s.default.createElement("span",{className:"exchange-icon",onClick:function(){return e.setState({priorityShowModel:"detail"==e.state.priorityShowModel?"percentage":"detail"})},title:"切换"},s.default.createElement("i",{className:"fa fa-retweet"})))},o.priority_unresolved_issues&&!y.default.isEmpty(o.priority_unresolved_issues)?s.default.createElement(d.Table,{responsive:!0,hover:!0},"detail"==this.state.priorityShowModel&&s.default.createElement("thead",null,s.default.createElement("tr",null,s.default.createElement("th",null,"优先级"),s.default.createElement("th",null,"问题"),y.default.map(m.types||[],function(e){return s.default.createElement("th",{key:e.id},e.name)}))),"percentage"==this.state.priorityShowModel&&s.default.createElement("thead",null,s.default.createElement("tr",null,s.default.createElement("th",null,"优先级"),s.default.createElement("th",null,"问题"),s.default.createElement("th",null,"百分比"))),"detail"==this.state.priorityShowModel&&s.default.createElement("tbody",null,y.default.map(o.priority_unresolved_issues,function(e,t){return s.default.createElement("tr",{key:t},s.default.createElement("td",{style:{width:"20%"}},m.priorities&&m.priorities[t]?s.default.createElement(c.Link,{to:"/project/"+a.key+"/issue?resolution=Unresolved&priority="+t},m.priorities[t]):"其他"),s.default.createElement("td",{style:{width:"10%"}},m.priorities&&m.priorities[t]?s.default.createElement(c.Link,{to:"/project/"+a.key+"/issue?resolution=Unresolved&priority="+t},e.total||0):e.total||0),y.default.map(m.types||[],function(n){return s.default.createElement("td",{key:n.id},m.priorities&&m.priorities[t]?s.default.createElement(c.Link,{to:"/project/"+a.key+"/issue?resolution=Unresolved&type="+n.id+"&priority="+t},e[n.id]||0):e[n.id]||0)}))})),"percentage"==this.state.priorityShowModel&&s.default.createElement("tbody",null,y.default.map(o.priority_unresolved_issues,function(e,t){return s.default.createElement("tr",{key:t},s.default.createElement("td",{style:{width:"20%"}},m.priorities&&m.priorities[t]?s.default.createElement(c.Link,{to:"/project/"+a.key+"/issue?resolution=Unresolved&priority="+t},m.priorities[t]):"其他"),s.default.createElement("td",{style:{width:"10%"}},m.priorities&&m.priorities[t]?s.default.createElement(c.Link,{to:"/project/"+a.key+"/issue?resolution=Unresolved&priority="+t},e.total||0):e.total||0),s.default.createElement("td",null,s.default.createElement("table",{style:{width:"100%"}},s.default.createElement("tbody",null,s.default.createElement("tr",null,s.default.createElement("td",{
style:{width:e.percent+"%"}},s.default.createElement("div",{className:"color-bar"})),s.default.createElement("td",{style:{width:100-e.percent+"%",paddingLeft:"10px"}},e.percent+"%"))))))}))):s.default.createElement("div",null,"暂无信息")),s.default.createElement(d.Panel,{header:s.default.createElement("div",null,s.default.createElement("span",null,"未解决问题：按模块"),s.default.createElement("span",{className:"exchange-icon",onClick:function(){return e.setState({moduleShowModel:"detail"==e.state.moduleShowModel?"percentage":"detail"})},title:"切换"},s.default.createElement("i",{className:"fa fa-retweet"})))},o.module_unresolved_issues&&!y.default.isEmpty(o.module_unresolved_issues)?s.default.createElement(d.Table,{responsive:!0,hover:!0},"detail"==this.state.moduleShowModel&&s.default.createElement("thead",null,s.default.createElement("tr",null,s.default.createElement("th",null,"模块"),s.default.createElement("th",null,"问题"),y.default.map(m.types||[],function(e){return s.default.createElement("th",{key:e.id},e.name)}))),"percentage"==this.state.moduleShowModel&&s.default.createElement("thead",null,s.default.createElement("tr",null,s.default.createElement("th",null,"模块"),s.default.createElement("th",null,"问题"),s.default.createElement("th",null,"百分比"))),"detail"==this.state.moduleShowModel&&s.default.createElement("tbody",null,y.default.map(o.module_unresolved_issues,function(e,t){return s.default.createElement("tr",{key:t},s.default.createElement("td",{style:{width:"20%"}},m.modules&&m.modules[t]?s.default.createElement(c.Link,{to:"/project/"+a.key+"/issue?resolution=Unresolved&module="+t},m.modules[t]):"其他"),s.default.createElement("td",{style:{width:"10%"}},m.modules&&m.modules[t]?s.default.createElement(c.Link,{to:"/project/"+a.key+"/issue?resolution=Unresolved&module="+t},e.total||0):e.total||0),y.default.map(m.types||[],function(n){return s.default.createElement("td",{key:n.id},m.modules&&m.modules[t]?s.default.createElement(c.Link,{to:"/project/"+a.key+"/issue?resolution=Unresolved&type="+n.id+"&module="+t},e[n.id]||0):e[n.id]||0)}))})),"percentage"==this.state.moduleShowModel&&s.default.createElement("tbody",null,y.default.map(o.module_unresolved_issues,function(e,t){return s.default.createElement("tr",{key:t},s.default.createElement("td",{style:{width:"20%"}},m.modules&&m.modules[t]?s.default.createElement(c.Link,{to:"/project/"+a.key+"/issue?resolution=Unresolved&module="+t},m.modules[t]):"其他"),s.default.createElement("td",{style:{width:"10%"}},m.modules&&m.modules[t]?s.default.createElement(c.Link,{to:"/project/"+a.key+"/issue?resolution=Unresolved&module="+t},e.total||0):e.total||0),s.default.createElement("td",null,s.default.createElement("table",{style:{width:"100%"}},s.default.createElement("tbody",null,s.default.createElement("tr",null,s.default.createElement("td",{style:{width:e.percent+"%"}},s.default.createElement("div",{className:"color-bar"})),s.default.createElement("td",{style:{width:100-e.percent+"%",paddingLeft:"10px"}},e.percent+"%"))))))}))):s.default.createElement("div",null,"暂无信息")),this.state.editModalShow&&s.default.createElement(k,{show:!0,close:function(){e.setState({editModalShow:!1})},update:i,data:a,i18n:n}),this.state.archiveNotifyShow&&s.default.createElement(b,{show:!0,close:function(){e.setState({archiveNotifyShow:!1})},data:a,archive:u}))}}],[{key:"propTypes",value:{i18n:u.PropTypes.object.isRequired,layout:u.PropTypes.object.isRequired,user:u.PropTypes.object.isRequired,project:u.PropTypes.object.isRequired,data:u.PropTypes.object.isRequired,options:u.PropTypes.object.isRequired,loading:u.PropTypes.bool.isRequired,update:u.PropTypes.func.isRequired,archive:u.PropTypes.func.isRequired,index:u.PropTypes.func.isRequired},enumerable:!0}]),t}(u.Component);t.default=g,e.exports=t.default}).call(this)}finally{}},2092:function(e,t,n){try{(function(){"use strict";function e(e){return(0,r.asyncFuncCreator)({constant:"PROJECT_SUMMARY",promise:function(t){return t.request({url:"/project/"+e+"/summary"})}})}Object.defineProperty(t,"__esModule",{value:!0}),t.index=e;var r=n(27)}).call(this)}finally{}}});
//# sourceMappingURL=summary-22330d39961866779fe1.js.map