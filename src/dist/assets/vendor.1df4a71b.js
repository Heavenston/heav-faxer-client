function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n){t.appendChild(n)}function s(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}function l(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function d(t){return Array.from(t.childNodes)}function p(t,n,e,o){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===n){let n=0;const c=[];for(;n<o.attributes.length;){const t=o.attributes[n++];e[t.name]||c.push(t.name)}for(let t=0;t<c.length;t++)o.removeAttribute(c[t]);return t.splice(r,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):f(n)}function h(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return i(n)}let $;function g(t){$=t}const m=[],b=[],y=[],_=[],x=Promise.resolve();let k=!1;function w(t){y.push(t)}let v=!1;const E=new Set;function A(){if(!v){v=!0;do{for(let t=0;t<m.length;t+=1){const n=m[t];g(n),N(n.$$)}for(g(null),m.length=0;b.length;)b.pop()();for(let t=0;t<y.length;t+=1){const n=y[t];E.has(n)||(E.add(n),n())}y.length=0}while(m.length);for(;_.length;)_.pop()();k=!1,v=!1,E.clear()}}function N(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(w)}}const S=new Set;function j(t,n){-1===t.$$.dirty[0]&&(m.push(t),k||(k=!0,x.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function O(c,u,s,f,i,l,p=[-1]){const h=$;g(c);const m=c.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:u.context||[]),callbacks:e(),dirty:p,skip_bound:!1};let b=!1;if(m.ctx=s?s(c,u.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return m.ctx&&i(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),b&&j(c,t)),n})):[],m.update(),b=!0,o(m.before_update),m.fragment=!!f&&f(m.ctx),u.target){if(u.hydrate){const t=d(u.target);m.fragment&&m.fragment.l(t),t.forEach(a)}else m.fragment&&m.fragment.c();u.intro&&((y=c.$$.fragment)&&y.i&&(S.delete(y),y.i(_))),function(t,e,c,u){const{fragment:s,on_mount:a,on_destroy:f,after_update:i}=t.$$;s&&s.m(e,c),u||w((()=>{const e=a.map(n).filter(r);f?f.push(...e):o(e),t.$$.on_mount=[]})),i.forEach(w)}(c,u.target,u.anchor,u.customElement),A()}var y,_;g(h)}class C{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{C as S,d as a,h as b,p as c,a as d,f as e,l as f,s as g,u as h,O as i,t as n,c as s,i as t};
