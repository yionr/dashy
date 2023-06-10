"use strict";(self.webpackChunkdashy=self.webpackChunkdashy||[]).push([[171],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=u(n),p=i,f=h["".concat(l,".").concat(p)]||h[p]||d[p]||s;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[h]="string"==typeof e?e:i,r[1]=o;for(var u=2;u<s;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4114:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(7462),i=(n(7294),n(3905));const s={},r="Status Indicators",o={unversionedId:"status-indicators",id:"status-indicators",isDocsHomePage:!1,title:"Status Indicators",description:"Dashy has an optional feature that can display a small icon next to each of your running services, indicating it's current status. This can be useful if you are using Dashy as your homelab's start page, as it gives you an overview of the health of each of your running services. The status feature will show response time, response code, online/ offline check and if applicable, a relevant error message.",source:"@site/docs/status-indicators.md",sourceDirName:".",slug:"/status-indicators",permalink:"/docs/status-indicators",editUrl:"https://github.com/Lissy93/dashy/edit/gh-pages/docs/docs/status-indicators.md",version:"current",frontMatter:{},sidebar:"dashySidebar",previous:{title:"Theming",permalink:"/docs/theming"},next:{title:"Authentication",permalink:"/docs/authentication"}},l=[{value:"Enabling Status Indicators",id:"enabling-status-indicators",children:[]},{value:"Continuous Checking",id:"continuous-checking",children:[]},{value:"Using a Different Endpoint",id:"using-a-different-endpoint",children:[]},{value:"Setting Custom Headers",id:"setting-custom-headers",children:[]},{value:"Disabling Security",id:"disabling-security",children:[]},{value:"Allowing Alternative Status Codes",id:"allowing-alternative-status-codes",children:[]},{value:"Troubleshooting Failing Status Checks",id:"troubleshooting-failing-status-checks",children:[]},{value:"How it Works",id:"how-it-works",children:[]}],u={toc:l},c="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"status-indicators"},"Status Indicators"),(0,i.kt)("p",null,"Dashy has an optional feature that can display a small icon next to each of your running services, indicating it's current status. This can be useful if you are using Dashy as your homelab's start page, as it gives you an overview of the health of each of your running services. The status feature will show response time, response code, online/ offline check and if applicable, a relevant error message."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"800",src:"/docs/assets/status-check-demo.gif"})),(0,i.kt)("h2",{id:"enabling-status-indicators"},"Enabling Status Indicators"),(0,i.kt)("p",null,"By default, this feature is off. If you do not want this feature, just don't add the ",(0,i.kt)("inlineCode",{parentName:"p"},"statusCheck")," to your conf.yml file, then no requests will be made."),(0,i.kt)("p",null,"To enable status checks, you can either turn it on for all items, by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"appConfig.statusCheck: true"),", like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"appConfig:\n  statusCheck: true\n")),(0,i.kt)("p",null,"Or you can enable/ disable it on a per-item basis, with the ",(0,i.kt)("inlineCode",{parentName:"p"},"item[n].statusCheck")," attribute"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"sections:\n- name: Firewall\n  items:\n  - title: OPNsense\n    description: Firewall Central Management\n    icon: networking/opnsense.png\n    url: https://192.168.1.1\n    statusCheck: false\n  - title: MalTrail\n    description: Malicious traffic detection system\n    icon: networking/maltrail.png\n    url: http://192.168.1.1:8338\n    statusCheck: true\n  - title: Ntopng\n    description: Network traffic probe and network use monitor\n    icon: networking/ntop.png\n    url: http://192.168.1.1:3001\n    statusCheck: true\n")),(0,i.kt)("h2",{id:"continuous-checking"},"Continuous Checking"),(0,i.kt)("p",null,"By default, with status indicators enabled Dashy will check an applications status on page load, and will not keep indicators updated. This is usually desirable behavior. However, if you do want the status indicators to continue to poll your running services, this can be enabled by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"statusCheckInterval")," attribute. Here you define an interval as an integer in seconds, and Dashy will poll your apps every x seconds. Note that if this number is very low (below 5 seconds), you may notice the app running slightly slower."),(0,i.kt)("p",null,"The following example, will instruct Dashy to continuously check the status of your services every 20 seconds."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"appConfig:\n  statusCheck: true\n  statusCheckInterval: 20\n")),(0,i.kt)("h2",{id:"using-a-different-endpoint"},"Using a Different Endpoint"),(0,i.kt)("p",null,"By default, the status checker will use the URL of each application being checked. In some situations, you may want to use a different endpoint for status checking. Similarly, some services provide a dedicated path for uptime monitoring."),(0,i.kt)("p",null,"You can set the ",(0,i.kt)("inlineCode",{parentName:"p"},"statusCheckUrl")," property on any given item in order to do this. The status checker will then ping that endpoint, instead of the apps main ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," property."),(0,i.kt)("h2",{id:"setting-custom-headers"},"Setting Custom Headers"),(0,i.kt)("p",null,"If your service is responding with an error, despite being up and running, it is most likely because custom headers for authentication, authorization or encoding are required. You can define these headers under the ",(0,i.kt)("inlineCode",{parentName:"p"},"statusCheckHeaders")," property for any service. It should be defined as an object format, with the name of header as the key, and header content as the value.\nFor example, ",(0,i.kt)("inlineCode",{parentName:"p"},"statusCheckHeaders: { 'X-Custom-Header': 'foobar' }")),(0,i.kt)("h2",{id:"disabling-security"},"Disabling Security"),(0,i.kt)("p",null,"By default, (if you're using HTTPS) any requests to insecure or non-HTTPS content will be blocked. This will cause the status check to fail. If you trust the endpoint (e.g. you're self-hosting it), then you can disable this security measure for an individual item. This is done by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"statusCheckAllowInsecure: true")),(0,i.kt)("h2",{id:"allowing-alternative-status-codes"},"Allowing Alternative Status Codes"),(0,i.kt)("p",null,"If you expect your service to return a status code that is not in the 2XX range, and still want the indicator to be green, then you can specify an expected status code under ",(0,i.kt)("inlineCode",{parentName:"p"},"statusCheckAcceptCodes")," for a given item. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"statusCheckAcceptCodes: '403,418'")),(0,i.kt)("h2",{id:"troubleshooting-failing-status-checks"},"Troubleshooting Failing Status Checks"),(0,i.kt)("p",null,"If you're using status checks, and despite a given service being online, the check is displaying an error, there are a couple of things you can look at:"),(0,i.kt)("p",null,"If your service requires requests to include any authorization in the headers, then use the  ",(0,i.kt)("inlineCode",{parentName:"p"},"statusCheckHeaders")," property, as described  ",(0,i.kt)("a",{parentName:"p",href:"#setting-custom-headers"},"above"),"."),(0,i.kt)("p",null,"If you are still having issues, it may be because your target application is blocking requests from Dashy's IP. This is a ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"CORS error"),", and can be fixed by setting the headers on your target app, to include:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Access-Control-Allow-Origin: https://location-of-dashy/\nVary: Origin\n")),(0,i.kt)("p",null,"If the URL you are checking has an unsigned certificate, or is not using HTTPS, then you may need to disable the rejection of insecure requests. This can be done by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"statusCheckAllowInsecure")," to true for a given item."),(0,i.kt)("p",null,"If your service is online, but responds with a status code that is not in the 2xx range, then you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"statusCheckAcceptCodes")," to set an accepted status code."),(0,i.kt)("p",null,"If you get an error, like ",(0,i.kt)("inlineCode",{parentName:"p"},"Service Unavailable: Server resulted in a fatal error"),", even when it's definitely online, this is most likely caused by missing the protocol. Don't forget to include ",(0,i.kt)("inlineCode",{parentName:"p"},"https://")," (or whatever protocol) before the URL, and ensure that if needed, you've specified the port."),(0,i.kt)("p",null,"Running Dashy in HOST network mode, instead of BRIDGE will allow status check access to other services in HOST mode. For more info, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/discussions/445"},"#445"),"."),(0,i.kt)("p",null,"If you have firewall rules configured, then ensure that they don't prevent Dashy from making requests to the other services you are trying to access."),(0,i.kt)("p",null,"Currently, the status check needs a page to be rendered, so if this URL in your browser does not return anything, then status checks will not work. This may be modified in the future, but in the meantime, a fix would be to make your own status service, which just checks if your app responds with whatever code you'd like, and then return a 200 plus renders an arbitrary message. Then just point ",(0,i.kt)("inlineCode",{parentName:"p"},"statusCheckUrl")," to your custom page."),(0,i.kt)("p",null,"For further troubleshooting, use an application like ",(0,i.kt)("a",{parentName:"p",href:"https://postman.com"},"Postman")," to diagnose the issue. Set the parameter to ",(0,i.kt)("inlineCode",{parentName:"p"},"GET"),", and then make a call to: ",(0,i.kt)("inlineCode",{parentName:"p"},"https://[url-of-dashy]/status-check/?&url=[service-url]"),". Where the service URL must have first been encoded (e.g. with ",(0,i.kt)("inlineCode",{parentName:"p"},"encodeURIComponent()")," or ",(0,i.kt)("a",{parentName:"p",href:"https://www.urlencoder.io/"},"urlencoder.io"),")"),(0,i.kt)("p",null,"If you're serving Dashy though a CDN, instead of using the Node server or Docker image, then the Node endpoint that makes requests will not be available to you, and all requests will fail. A workaround for this may be implemented in the future, but in the meantime, your only option is to use the Docker or Node deployment method."),(0,i.kt)("h2",{id:"how-it-works"},"How it Works"),(0,i.kt)("p",null,"When the app is loaded, if ",(0,i.kt)("inlineCode",{parentName:"p"},"appConfig.statusCheck: true")," is set, or if any items have the ",(0,i.kt)("inlineCode",{parentName:"p"},"statusCheck: true")," enabled, then Dashy will make a request, to ",(0,i.kt)("inlineCode",{parentName:"p"},"https://[your-host-name]/status-check?url=[address-or-servce]")," (may al include GET params for headers and the secure flag), which in turn will ping that running service, and respond with a status code. Response time is calculated from the difference between start and end time of the request."),(0,i.kt)("p",null,"When the response completes, an indicator will display next to each item. The color denotes the status: Yellow while waiting for the response to return, green if request was successful, red if it failed, and grey if it was unable to make the request all together."),(0,i.kt)("p",null,"All requests are made straight from your server, there is no intermediary. So providing you are hosting Dashy yourself, and are checking the status of other self-hosted services, there shouldn't be any privacy concerns. Requests are made asynchronously, so this won't have any significant impact on page load speeds. However recurring requests (using ",(0,i.kt)("inlineCode",{parentName:"p"},"statusCheckInterval"),") may run more slowly if the interval between requests is very short."))}h.isMDXComponent=!0}}]);