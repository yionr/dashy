"use strict";(self.webpackChunkdashy=self.webpackChunkdashy||[]).push([[720],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(a),h=n,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||r;return a?o.createElement(m,l(l({ref:t},d),{},{components:a})):o.createElement(m,l({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7376:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var o=a(7462),n=(a(7294),a(3905));const r={},l="Deployment",i={unversionedId:"deployment",id:"deployment",isDocsHomePage:!1,title:"Deployment",description:"Welcome to Dashy, so glad you're here :) Deployment is super easy, and there are several methods available depending on what type of system you're using. If you're self-hosting, then deploying with Docker (or similar container engine) is the recommended approach.",source:"@site/docs/deployment.md",sourceDirName:".",slug:"/deployment",permalink:"/docs/deployment",editUrl:"https://github.com/Lissy93/dashy/edit/gh-pages/docs/docs/deployment.md",version:"current",frontMatter:{},sidebar:"dashySidebar",previous:{title:"Quick Start",permalink:"/docs/quick-start"},next:{title:"Configuring",permalink:"/docs/configuring"}},s=[{value:"Quick Start",id:"quick-start",children:[]},{value:"Deployment Methods",id:"deployment-methods",children:[]},{value:"Deploy with Docker",id:"deploy-with-docker",children:[]},{value:"Using Docker Compose",id:"using-docker-compose",children:[]},{value:"Unraid",id:"unraid",children:[]},{value:"Synology NAS",id:"synology-nas",children:[]},{value:"Build from Source",id:"build-from-source",children:[]},{value:"Deploy to cloud service",id:"deploy-to-cloud-service",children:[{value:"Netlify",id:"netlify",children:[]},{value:"Heroku",id:"heroku",children:[]},{value:"Cloudflare Workers",id:"cloudflare-workers",children:[]},{value:"Vercel",id:"vercel",children:[]},{value:"DigitalOcean",id:"digitalocean",children:[]},{value:"Google Cloud Platform",id:"google-cloud-platform",children:[]},{value:"Platform.sh",id:"platformsh",children:[]},{value:"Render",id:"render",children:[]},{value:"Scalingo",id:"scalingo",children:[]},{value:"Play-with-Docker",id:"play-with-docker",children:[]},{value:"Surge.sh",id:"surgesh",children:[]}]},{value:"Hosting with CDN",id:"hosting-with-cdn",children:[]},{value:"Requirements",id:"requirements",children:[{value:"System Requirements",id:"system-requirements",children:[]},{value:"Docker",id:"docker",children:[]},{value:"Bare Metal",id:"bare-metal",children:[]},{value:"CDN / Cloud Deploy",id:"cdn--cloud-deploy",children:[]},{value:"Browser Support",id:"browser-support",children:[]}]}],p={toc:s},d="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"deployment"},"Deployment"),(0,n.kt)("p",null,"Welcome to Dashy, so glad you're here :) Deployment is super easy, and there are several methods available depending on what type of system you're using. If you're self-hosting, then deploying with Docker (or similar container engine) is the recommended approach."),(0,n.kt)("h2",{id:"quick-start"},"Quick Start"),(0,n.kt)("p",null,"If you want to skip the fuss, and ",(0,n.kt)("a",{parentName:"p",href:"/docs/quick-start"},"get straight down to it"),", then you can spin up a new instance of Dashy by running:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 8080:80 lissy93/dashy\n")),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/docs/management"},"Management Docs")," for info about securing, monitoring, updating, health checks, auto starting, web server configuration, etc"),(0,n.kt)("p",null,"Once you've got Dashy up and running, you'll want to configure it with your own content, for this you can reference the ",(0,n.kt)("a",{parentName:"p",href:"/docs/configuring"},"configuring docs"),"."),(0,n.kt)("h2",{id:"deployment-methods"},"Deployment Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#deploy-with-docker"},"Deploy with Docker")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#using-docker-compose"},"Using Docker Compose")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#unraid"},"Unraid")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#synology-nas"},"Synology NAS")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#build-from-source"},"Build from Source")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#hosting-with-cdn"},"Hosting with CDN")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#run-as-executable"},"Run as executable")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#install-with-npm"},"Install with NPM")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#deploy-to-cloud-service"},"Deploy to cloud service")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#use-managed-instance"},"Use managed instance"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"deploy-with-docker"},"Deploy with Docker"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Container Info"),": ",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/lissy93/dashy"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Architectures-amd64%20%7C%20arm32v7%20%7C%20arm64v8-6ba6e5",alt:"Docker Supported Architecture"}),(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Base_Image-Alpine_3.14-6ba6e5",alt:"Docker Base Image"}),(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Hosted_on-DockerHub-6ba6e5",alt:"Docker Hosted on"})),(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Status"),": ",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/lissy93/dashy"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/docker/cloud/build/lissy93/dashy?label=Docker%20Build",alt:"Docker Build Status"}),(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/docker/pulls/lissy93/dashy?color=ecb2f7",alt:"Docker Pulls"}),(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/docker/stars/lissy93/dashy?color=f7f754&label=Docker%20Stars",alt:"Docker Stars"}),(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/docker/image-size/lissy93/dashy/latest?color=1eea76",alt:"Docker Image Size"}),(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/docker/cloud/automated/lissy93/dashy?color=f4a966&label=Docker%20Build",alt:"Docker Cloud Build"}))),(0,n.kt)("p",null,"Dashy has a built container image hosted on ",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/lissy93/dashy"},"Docker Hub"),". You will need ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker")," installed on your system."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d \\\n  -p 8080:80 \\\n  -v /root/my-local-conf.yml:/app/public/conf.yml \\\n  --name my-dashboard \\\n  --restart=always \\\n  lissy93/dashy:latest\n")),(0,n.kt)("p",null,"Explanation of the above options:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-d")," Detached mode (not running in the foreground of your terminal)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-p")," The port that should be exposed, and the port it should be mapped to in your host system ",(0,n.kt)("inlineCode",{parentName:"li"},"[host-port][container-port]"),", leave the container port as is"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-v")," Specify volumes, to pass data from your host system to the container, in the format of ",(0,n.kt)("inlineCode",{parentName:"li"},"[host-path]:[container-path]"),", you can use this to pass your config file, directory of assets (like icons), custom CSS or web assets (like favicon.ico, manifest.json etc)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--name")," Give your container a human-readable name"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--restart=always")," Spin up the container when the daemon starts, or after it has been stopped"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"lissy93/dashy:latest")," This last option is the image the container should be built from, you can also use a specific version or architecture type, by replacing ",(0,n.kt)("inlineCode",{parentName:"li"},":latest")," with one of the ",(0,n.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/lissy93/dashy/tags"},"tags"))),(0,n.kt)("p",null,"For all available options, and to learn more, see the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/run/"},"Docker Run Docs")),(0,n.kt)("p",null,"Dashy is also available through GHCR: ",(0,n.kt)("inlineCode",{parentName:"p"},"docker pull ghcr.io/lissy93/dashy:latest")),(0,n.kt)("p",null,"If you're deploying Dashy on a modern ARM-based board, such as a Raspberry Pi (2+), then you'll need to use one of Dashy's ARM images. Set the base image + tag to either ",(0,n.kt)("inlineCode",{parentName:"p"},"lissy93/dashy:arm64v8")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"lissy93/dashy:arm32v7"),", depending on your system architecture. You can also use the ",(0,n.kt)("inlineCode",{parentName:"p"},"multi-arch")," image, which should work on all system architectures."),(0,n.kt)("p",null,"The image defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},":latest"),", but you can instead specify a specific version, e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"docker pull lissy93/dashy:release-1.5.0")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"using-docker-compose"},"Using Docker Compose"),(0,n.kt)("p",null,"Using Docker Compose can be useful for saving your specific config in files, without having to type out a long run command each time. Save compose config as a YAML file, and then run ",(0,n.kt)("inlineCode",{parentName:"p"},"docker compose up -d")," (optionally use the ",(0,n.kt)("inlineCode",{parentName:"p"},"-f")," flag to specify file location, if it isn't located at ",(0,n.kt)("inlineCode",{parentName:"p"},"./docker-compose.yml"),"), ",(0,n.kt)("inlineCode",{parentName:"p"},"-d")," is detached mode (not running in the foreground of your terminal). Compose is also useful if you are using clusters, as the format is very similar to stack files, used with Docker Swarm."),(0,n.kt)("p",null,"The following is a complete example of a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/docker-compose.yml"},(0,n.kt)("inlineCode",{parentName:"a"},"docker-compose.yml"))," for Dashy. Run it as is, or uncomment the additional options you need."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nversion: \"3.8\"\nservices:\n  dashy:\n    # To build from source, replace 'image: lissy93/dashy' with 'build: .'\n    # build: .\n    image: lissy93/dashy\n    container_name: Dashy\n    # Pass in your config file below, by specifying the path on your host machine\n    # volumes:\n      # - /root/my-config.yml:/app/public/conf.yml\n    ports:\n      - 4000:80\n    # Set any environmental variables\n    environment:\n      - NODE_ENV=production\n    # Specify your user ID and group ID. You can find this by running `id -u` and `id -g`\n    #  - UID=1000\n    #  - GID=1000\n    # Specify restart policy\n    restart: unless-stopped\n    # Configure healthchecks\n    healthcheck:\n      test: ['CMD', 'node', '/app/services/healthcheck']\n      interval: 1m30s\n      timeout: 10s\n      retries: 3\n      start_period: 40s\n")),(0,n.kt)("p",null,"You can use a different tag, by for example setting ",(0,n.kt)("inlineCode",{parentName:"p"},"image: lissy93/dashy:arm64v8"),", or pull from GHCR instead by setting ",(0,n.kt)("inlineCode",{parentName:"p"},"image: ghcr.io/lissy93/dashy"),"."),(0,n.kt)("p",null,"If you are building from source, and would like to use one of the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/tree/master/docker"},"other Dockerfiles"),", then under ",(0,n.kt)("inlineCode",{parentName:"p"},"services.dashy")," first set ",(0,n.kt)("inlineCode",{parentName:"p"},"context: ."),", then specify the the path to the dockerfile, e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"dockerfile: ./docker/Dockerfile-arm32v7")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"unraid"},"Unraid"),(0,n.kt)("p",null,"// TODO"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"synology-nas"},"Synology NAS"),(0,n.kt)("p",null,"Installing dashy is really simply and fast:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install Docker via Synology ",(0,n.kt)("inlineCode",{parentName:"p"},"Package Center"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("inlineCode",{parentName:"p"},"File Station")," and open the ",(0,n.kt)("inlineCode",{parentName:"p"},"docker")," folder. Inside the docker folder, create one new folder and name it ",(0,n.kt)("inlineCode",{parentName:"p"},"dashy"),"."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Note: Be careful to enter only lowercase, not uppercase letters."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to Control Panel / Task Scheduler / Create / Scheduled Task / User-defined script.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Once you click on ",(0,n.kt)("inlineCode",{parentName:"p"},"User-defined")," script a new window will open.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Follow the instructions below:")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'General: In the Task field type in Install dashy. Uncheck "Enabled" option. Select root User.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Schedule: Select Run on the following date then select "Do not repeat".')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Task Settings: Check "Send run details by email", add your email then copy paste the code below in the Run command area. After that click OK.'))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d \\\n  -p 4000:80 \\\n  -v /volume1/docker/dashy/my-local-conf.yml:/app/public/conf.yml \\\n  --name dashy \\\n  --restart=always \\\n  lissy93/dashy:latest\n")),(0,n.kt)("p",null,"dashy should be up within 1-2min after you've started the install task procedure"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"build-from-source"},"Build from Source"),(0,n.kt)("p",null,"If you do not want to use Docker, you can run Dashy directly on your host system. For this, you will need both ",(0,n.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"git")," and the latest or LTS version of ",(0,n.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js")," installed, and optionally ",(0,n.kt)("a",{parentName:"p",href:"https://yarnpkg.com/"},"yarn")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Get Code: ",(0,n.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/Lissy93/dashy.git")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"cd dashy")),(0,n.kt)("li",{parentName:"ol"},"Configuration: Fill in you're settings in ",(0,n.kt)("inlineCode",{parentName:"li"},"./public/conf.yml")),(0,n.kt)("li",{parentName:"ol"},"Install dependencies: ",(0,n.kt)("inlineCode",{parentName:"li"},"yarn")),(0,n.kt)("li",{parentName:"ol"},"Build: ",(0,n.kt)("inlineCode",{parentName:"li"},"yarn build")),(0,n.kt)("li",{parentName:"ol"},"Run: ",(0,n.kt)("inlineCode",{parentName:"li"},"yarn start"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"deploy-to-cloud-service"},"Deploy to cloud service"),(0,n.kt)("p",null,"If you don't have a home server, then fear not - Dashy can be deployed to pretty much any cloud provider. The above Docker and NPM guides will work exactly the same on a VPS, but I've also setup some 1-Click deploy links for 10+ of the most common cloud providers, to make things easier. Note that if your instance is exposed to the internet, it will be your responsibility to adequately secure it."),(0,n.kt)("p",null,"Some hosting providers required a bit of extra configuration, which was why I've made separate branches for deploying to those services (named: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/tree/deploy_cloudflare"},(0,n.kt)("inlineCode",{parentName:"a"},"deploy_cloudflare")),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/tree/deploy_digital-ocean"},(0,n.kt)("inlineCode",{parentName:"a"},"deploy_digital-ocean")),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/tree/deploy_platform-sh"},(0,n.kt)("inlineCode",{parentName:"a"},"deploy_platform-sh"))," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/tree/deploy_render"},(0,n.kt)("inlineCode",{parentName:"a"},"deploy_render")),"). If there's another cloud service which you'd like 1-click deployment to be supported for, feel free to raise an issue."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note")," If you use a static hosting provider, then status checks, writing new config changes to disk from the UI, and triggering a rebuild through the UI will not be available. This is because these features need endpoints provided by Dashy's local Node server. Everything else should work just the same though."),(0,n.kt)("h3",{id:"netlify"},"Netlify"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://app.netlify.com/start/deploy?repository=https://github.com/lissy93/dashy"},(0,n.kt)("img",{parentName:"a",src:"https://i.ibb.co/GtKMysT/deploy-netlify-button.png",alt:"Deploy to Netlify"}))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.netlify.com/"},"Netlify")," offers Git-based serverless cloud hosting for web applications. Their services are free to use for personal use, and they support deployment from both public and private repos, as well as direct file upload. The free plan also allows you to use your own custom domain or sub-domain, and is easy to setup."),(0,n.kt)("p",null,"To deploy Dashy to Netlify, use the following link"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"https://app.netlify.com/start/deploy?repository=https://github.com/lissy93/dashy\n")),(0,n.kt)("h3",{id:"heroku"},"Heroku"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://heroku.com/deploy?template=https://github.com/Lissy93/dashy"},(0,n.kt)("img",{parentName:"a",src:"https://i.ibb.co/GdMFzBP/deploy-heroku-button.png",alt:"Deploy to Heroku"}))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.heroku.com/"},"Heroku")," is a fully managed cloud platform as a service. You define app settings in a Procfile and app.json, which specifying how the app should be build and how the server should be started. Heroku costs a minimum of $5 for 1,000 dyno hours per month (there are around 720 hours in a  month), and supports custom domains. Heroku's single-dyno service is not as quite performant as some other providers, and the app will have a short wake-up time when not visited for a while"),(0,n.kt)("p",null,"To deploy Dashy to Heroku, use the following link"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"https://heroku.com/deploy?template=https://github.com/Lissy93/dashy\n")),(0,n.kt)("h3",{id:"cloudflare-workers"},"Cloudflare Workers"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://deploy.workers.cloudflare.com/?url=https://github.com/lissy93/dashy/tree/deploy_cloudflare"},(0,n.kt)("img",{parentName:"a",src:"https://i.ibb.co/jf9xVdm/deploy-cloudflare-button.png",alt:"Deploy to Cloudflare Workers"}))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://workers.cloudflare.com/"},"Cloudflare Workers")," is a simple yet powerful service for running cloud functions and hosting web content. It requires a Cloudflare account, but is completely free for smaller projects, and very reasonably priced ($0.15/million requests per month) for large applications. You can use your own domain, and applications are protected with Cloudflare's state of the art DDoS protection. For more info, see the docs on ",(0,n.kt)("a",{parentName:"p",href:"https://developers.cloudflare.com/workers/platform/sites"},"Worker Sites")),(0,n.kt)("p",null,"To deploy Dashy to Cloudflare, use the following link"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"https://deploy.workers.cloudflare.com/?url=https://github.com/lissy93/dashy/tree/deploy_cloudflare\n")),(0,n.kt)("h3",{id:"vercel"},"Vercel"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://vercel.com/new/project?template=https://github.com/lissy93/dashy"},(0,n.kt)("img",{parentName:"a",src:"https://i.ibb.co/mJF3R7m/deploy-vercel-button.png",alt:"Deploy with Vercel"}))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://vercel.com/"},"Vercel")," is a performance-focused platform for hosting static frontend apps. It comes bundled with some useful tools for monitoring and analyzing application performance and other metrics. Vercel is free for personal use, allows for custom domains and has very reasonable limits."),(0,n.kt)("p",null,"To deploy Dashy to Vercel, use the following link"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"https://vercel.com/new/project?template=https://github.com/lissy93/dashy\n")),(0,n.kt)("h3",{id:"digitalocean"},"DigitalOcean"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://cloud.digitalocean.com/apps/new?repo=https://github.com/lissy93/dashy/tree/deploy_digital-ocean&refcode=3838338e7f79"},(0,n.kt)("img",{parentName:"a",src:"https://i.ibb.co/PFt0PkB/deploy-digital-ocean-button.png",alt:"Deploy to DO"}))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/"},"DigitalOcean")," is a cloud service providing affordable developer-friendly virtual machines from $5/month. But they also have an app platform, where you can run web apps, static sites, APIs and background workers. CDN-backed static sites are free for personal use."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"https://cloud.digitalocean.com/apps/new?repo=https://github.com/lissy93/dashy/tree/deploy_digital-ocean\n")),(0,n.kt)("h3",{id:"google-cloud-platform"},"Google Cloud Platform"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://deploy.cloud.run/?git_repo=https://github.com/lissy93/dashy.git"},(0,n.kt)("img",{parentName:"a",src:"https://i.ibb.co/LkvHttd/deploy-google-cloud-button.png",alt:"Run on Google Cloud"}))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/run/"},"Cloud Run")," is a service offered by ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/"},"Google Cloud"),". It's a fully managed serverless platform, for developing and deploying highly scalable containerized applications. Similar to AWS and Azure, GCP offers a wide range of cloud services, which are billed on a pay\u2010per\u2010use basis, but Cloud Run has a ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/run/pricing"},"free tier")," offering 180,000 vCPU-seconds, 360,000 GiB-seconds, and 2 million requests per month."),(0,n.kt)("p",null,"To deploy Dashy to GCP, use the following link"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"https://deploy.cloud.run/?git_repo=https://github.com/lissy93/dashy.git\n")),(0,n.kt)("h3",{id:"platformsh"},"Platform.sh"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://console.platform.sh/projects/create-project/?template=https://github.com/lissy93/dashy&utm_campaign=deploy_on_platform?utm_medium=button&utm_source=affiliate_links&utm_content=https://github.com/lissy93/dashy"},(0,n.kt)("img",{parentName:"a",src:"https://i.ibb.co/nPnJgJP/deploy-platform-sh-button.png",alt:"Deploy to Platform.sh"}))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://platform.sh"},"Platform.sh")," is an end-to-end solution for developing and deploying applications. It is geared towards enterprise users with large teams, and focuses on allowing applications to scale up and down. Unlike the above providers, Platform.sh is not free, although you can deploy a test app to it without needing a payment method"),(0,n.kt)("p",null,"To deploy Dashy to Platform.sh, use the following link"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"https://console.platform.sh/projects/create-project/?template=https://github.com/lissy93/dashy\n")),(0,n.kt)("h3",{id:"render"},"Render"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://render.com/deploy?repo=https://github.com/lissy93/dashy/tree/deploy_render"},(0,n.kt)("img",{parentName:"a",src:"https://i.ibb.co/QXNCbxT/deploy-render-button.png",alt:"Deploy to Render"}))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://render.com"},"Render")," is cloud provider that provides easy deployments for static sites, Docker apps, web services, databases and background workers. Render is great for developing applications, and very easy to use. Static sites are free, and services start at $7/month. Currently there are only 2 server locations - Oregon, USA and Frankfurt, Germany. For more info, see the ",(0,n.kt)("a",{parentName:"p",href:"https://render.com/docs"},"Render Docs")),(0,n.kt)("p",null,"To deploy Dashy to Render, use the following link"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"https://render.com/deploy?repo=https://github.com/lissy93/dashy/tree/deploy_render\n")),(0,n.kt)("h3",{id:"scalingo"},"Scalingo"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://my.scalingo.com/deploy?source=https://github.com/lissy93/dashy#master"},(0,n.kt)("img",{parentName:"a",src:"https://i.ibb.co/nj0KxyH/deploy-scalingo-button.png",alt:"Deploy on Scalingo"}))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://scalingo.com/"},"Scalingo")," is a scalable container-based cloud platform as a service. It's focus is on compliance and uptime, and is geared towards enterprise users. Scalingo is also not free, although they do have a 3-day free trial that does not require a payment method."),(0,n.kt)("p",null,"To deploy Dashy to Scalingo, use the following link"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"https://my.scalingo.com/deploy?source=https://github.com/lissy93/dashy#master\n")),(0,n.kt)("h3",{id:"play-with-docker"},"Play-with-Docker"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://labs.play-with-docker.com/?stack=https://raw.githubusercontent.com/Lissy93/dashy/master/docker-compose.yml"},(0,n.kt)("img",{parentName:"a",src:"https://i.ibb.co/SfbH7Zy/deploy-pwd-button.png",alt:"Try in PWD"}))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://labs.play-with-docker.com/"},"Play with Docker")," is a community project by Marcos Liljedhal and Jonathan Leibiusky and sponsored by Docker, intended to provide a hands-on learning environment. Their labs let you quickly spin up a Docker container or stack, and test out the image in a temporary, sandboxed environment. There's no need to sign up, and it's completely free."),(0,n.kt)("p",null,"To run Dashy in PWD, use the following URL:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"https://labs.play-with-docker.com/?stack=https://raw.githubusercontent.com/Lissy93/dashy/master/docker-compose.yml\n")),(0,n.kt)("h3",{id:"surgesh"},"Surge.sh"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.ibb.co/XkcKzKz/deploy-surge-button.png",alt:"Follow instructions below"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://surge.sh/"},"Surge.sh")," is quick and easy static web publishing platform for frontend-apps.\nSurge supports ",(0,n.kt)("a",{parentName:"p",href:"https://surge.sh/help/adding-password-protection-to-a-project"},"password-protected projects"),". You can also ",(0,n.kt)("a",{parentName:"p",href:"https://surge.sh/help/adding-a-custom-domain"},"add a custom domain")," and then ",(0,n.kt)("a",{parentName:"p",href:"https://surge.sh/help/using-https-by-default"},"force HTTPS by default")," and optionally ",(0,n.kt)("a",{parentName:"p",href:"https://surge.sh/help/securing-your-custom-domain-with-ssl"},"set a custom SSL certificate")),(0,n.kt)("p",null,"To deploy Dashy to Surge.sh, first clone and cd into Dashy, install dependencies, and then use the following commands"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add -g surge\nyarn build\nsurge ./dist\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"hosting-with-cdn"},"Hosting with CDN"),(0,n.kt)("p",null,"Once Dashy has been built, it is effectively just a static web app. This means that it can be served up with pretty much any static host, CDN or web server. To host Dashy through a CDN, the steps are very similar to building from source: clone the project, cd into it, install dependencies, write your config file and build the app. Once build is complete you will have a ",(0,n.kt)("inlineCode",{parentName:"p"},"./dist")," directory within Dashy's root, and this is the build application which is ready to be served up."),(0,n.kt)("p",null,"However without Dashy's node server, there are a couple of features that will be unavailable to you, including: Writing config changes to disk through the UI, triggering a rebuild through the UI and application status checks. Everything else will work fine."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("h3",{id:"system-requirements"},"System Requirements"),(0,n.kt)("p",null,"Dashy works well on a Raspberry Pi (tested on Pi 3 and later), but should also run well on any system."),(0,n.kt)("h3",{id:"docker"},"Docker"),(0,n.kt)("p",null,"Initial app build causes a spike in resource usage, but once the built app is running it is fairly steady. For this reason, Dashy works best with a minimum of 1GB of memory, and 1GB of disk space."),(0,n.kt)("h3",{id:"bare-metal"},"Bare Metal"),(0,n.kt)("p",null,"Minimum 526mb mem, 2GB disk space."),(0,n.kt)("h3",{id:"cdn--cloud-deploy"},"CDN / Cloud Deploy"),(0,n.kt)("p",null,"No specific requirements. The built application alone (without the Node server) is very light-weight, and can be handled smoothly by pretty much any CDN or cloud deployment service (see ",(0,n.kt)("a",{parentName:"p",href:"/docs/deploymentdeploy-to-cloud-service"},"this list")," or natively supported cloud providers)."),(0,n.kt)("p",null,"If you're using your own icons, or other assets, additional disk space will be required for those resources."),(0,n.kt)("h3",{id:"browser-support"},"Browser Support"),(0,n.kt)("p",null,"JavaScript is required to run Dashy."),(0,n.kt)("p",null,"In terms of browser support, pretty much any browser released since 2018 should render content just fine. However, for Internet Explorer, only IE11+ is supported, yet performance here is still not optimal. The recommended browser is either a Chromium-based / Webkit browser (Chrome, Brave, Vivaldi, Edge, Yandex, etc), or Firefox or one of it's forks (FF-ESR, Tor, LibreWolf, etc). Recent versions of Safari and Opera are also supported, but with limited continuous testing."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"500",src:"https://i.ibb.co/pjnmbw9/browser-compatibility.png"})))}c.isMDXComponent=!0}}]);