import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,a as l,b as t,e as o,f as n,d as i,r as c,o as d}from"./app-DgLGUeOp.js";const h={};function p(g,e){const a=c("RouteLink");return d(),r("div",null,[e[6]||(e[6]=l('<h1 id="ocelot-social-deploy-and-rebranding" tabindex="-1"><a class="header-anchor" href="#ocelot-social-deploy-and-rebranding"><span>Ocelot.Social Deploy And Rebranding</span></a></h1><p><a href="https://github.com/Ocelot-Social-Community/Ocelot-Social-Deploy-Rebranding/actions" target="_blank" rel="noopener noreferrer"><img src="https://github.com/Ocelot-Social-Community/Ocelot-Social-Deploy-Rebranding/actions/workflows/publish.yml/badge.svg" alt="Build Status Publish" loading="lazy"></a><a href="https://github.com/Ocelot-Social-Community/Ocelot-Social-Deploy-Rebranding/blob/master/LICENSE.md" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/license-MIT-green.svg" alt="MIT License" loading="lazy"></a><a href="https://discord.gg/AJSX9DCSUA" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/discord/489522408076738561.svg" alt="Discord Channel" loading="lazy"></a><a href="https://www.codetriage.com/ocelot-social-community/ocelot-social-deploy-rebranding" target="_blank" rel="noopener noreferrer"><img src="https://www.codetriage.com/ocelot-social-community/ocelot-social-deploy-rebranding/badges/users.svg" alt="Open Source Helpers" loading="lazy"></a></p><p>This repository is an in use template to rebrand, configure, and deploy <a href="https://github.com/Ocelot-Social-Community/Ocelot-Social" target="_blank" rel="noopener noreferrer">ocelot.social</a> networks. The forked original repository is <a href="https://github.com/Ocelot-Social-Community/stage.ocelot.social" target="_blank" rel="noopener noreferrer">stage.ocelot.social</a>.</p><p style="text-align:center;"><a href="https://ocelot.social" target="_blank"><img src="https://raw.githubusercontent.com/Ocelot-Social-Community/Ocelot-Social/master/webapp/static/img/custom/logo-squared.svg" alt="ocelot.social" width="40%" height="40%"></a></p><h2 id="live-demo" tabindex="-1"><a class="header-anchor" href="#live-demo"><span>Live demo</span></a></h2><p><strong>Try out our deployed <a href="https://stage.ocelot.social" target="_blank" rel="noopener noreferrer">development environment</a>.</strong></p><p>Visit our staging networks:</p><ul><li>central staging network: <a href="https://stage.ocelot.social" target="_blank" rel="noopener noreferrer">stage.ocelot.social</a></li></ul><p>Logins:</p><table><thead><tr><th style="text-align:left;">email</th><th style="text-align:left;">password</th><th style="text-align:left;">role</th></tr></thead><tbody><tr><td style="text-align:left;"><code>user@example.org</code></td><td style="text-align:left;">1234</td><td style="text-align:left;">user</td></tr><tr><td style="text-align:left;"><code>moderator@example.org</code></td><td style="text-align:left;">1234</td><td style="text-align:left;">moderator</td></tr><tr><td style="text-align:left;"><code>admin@example.org</code></td><td style="text-align:left;">1234</td><td style="text-align:left;">admin</td></tr></tbody></table><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><p>Fork this repository to configure and rebrand it for your own <a href="https://github.com/Ocelot-Social-Community/Ocelot-Social" target="_blank" rel="noopener noreferrer">ocelot.social</a> network.</p><h3 id="package-json-and-dockerhub-organisation" tabindex="-1"><a class="header-anchor" href="#package-json-and-dockerhub-organisation"><span>Package.Json And DockerHub Organisation</span></a></h3><p>Write your own data into the main configuration file:</p><ul><li><a href="https://github.com/Ocelot-Social-Community/Ocelot-Social/blob/master/package.json" target="_blank" rel="noopener noreferrer">package.json</a></li></ul><p>Since all deployment methods described here depend on <a href="https://docker.com" target="_blank" rel="noopener noreferrer">Docker</a> and <a href="https://hub.docker.com" target="_blank" rel="noopener noreferrer">DockerHub</a>, you need to create your own organisation on DockerHub and put its name in the <a href="https://github.com/Ocelot-Social-Community/Ocelot-Social/blob/master/package.json" target="_blank" rel="noopener noreferrer">package.json</a> file as your <code>dockerOrganisation</code>.</p><h3 id="configure-and-branding" tabindex="-1"><a class="header-anchor" href="#configure-and-branding"><span>Configure And Branding</span></a></h3><p>The next step is:</p>',18)),t("ul",null,[t("li",null,[o(a,{to:"/deployment/deployment-values.html"},{default:n(()=>e[0]||(e[0]=[i("Set Environment Variables and Configurations")])),_:1})])]),t("ul",null,[t("li",null,[o(a,{to:"/deployment/configurations/stage.ocelot.social/branding/"},{default:n(()=>e[1]||(e[1]=[i("Configure And Branding")])),_:1})])]),e[7]||(e[7]=l(`<h3 id="optional-locally-testing-configuration-and-branding" tabindex="-1"><a class="header-anchor" href="#optional-locally-testing-configuration-and-branding"><span>Optional: Locally Testing Configuration And Branding</span></a></h3><p>Just in case you have Docker installed and run the following, you can check your branding locally:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># in main folder</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker-compose</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> up</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># fill the database with an initial admin</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker-compose</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exec</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> backend</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> prod:migrate</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> init</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The database is then initialised with the default administrator:</p><ul><li>E-mail: admin@example.org</li><li>Password: 1234</li></ul><p>For login or registration have a look in your browser at <code>http://localhost:3000/</code>.<br> For the maintenance page have a look in your browser at <code>http://localhost:5000/</code>.</p><h3 id="push-changes-to-github" tabindex="-1"><a class="header-anchor" href="#push-changes-to-github"><span>Push Changes To GitHub</span></a></h3><p>Before merging these changes into the &quot;master&quot; branch on your GitHub fork repository, you need to configure the GitHub repository secrets. This is necessary to <a href="https://github.com/Ocelot-Social-Community/Ocelot-Social/blob/master/.github/workflows/publish.yml" target="_blank" rel="noopener noreferrer">publish</a> the Docker images by pushing them via GitHub actions to repositories belonging to your DockerHub organisation.</p><p>First, go to your DockerHub profile under <code>Account Settings</code> and click on the <code>Security</code> tab. There you create an access token called <code>&lt;your-organisation&gt;-access-token</code> and copy the token to a safe place.</p><p>Secondly, in your GitHub repository, click on the &#39;Settings&#39; tab and go to the &#39;Secrets&#39; tab. There you create two secrets by clicking on <code>New repository secret</code>:</p><ol><li>Named <code>DOCKERHUB_TOKEN</code> with the newly created DockerHub token (only the code, not the token name).</li><li>Named <code>DOCKERHUB_USERNAME</code> with your DockerHub username.</li></ol><h3 id="optional-locally-testing-your-dockerhub-images" tabindex="-1"><a class="header-anchor" href="#optional-locally-testing-your-dockerhub-images"><span>Optional: Locally Testing Your DockerHub Images</span></a></h3><p>Just in case you like to check your pushed Docker images in your organisation&#39;s DockerHub repositories locally:</p><ul><li>rename the file <code>docker-compose.ocelotsocial-branded.yml</code> with your network name</li><li>in the file, rename the ocelot.social DockerHub organisation <code>ocelotsocialnetwork</code> to your organisations name</li></ul><p>Remove any local Docker images if necessary and do the following:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># in main folder</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker-compose</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker-compose.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">your-organisatio</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">n&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">-branded.yml</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> up</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># fill the database with an initial admin</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker-compose</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exec</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> backend</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> prod:migrate</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> init</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>See the login details and browser addresses above.</p><h3 id="deployment" tabindex="-1"><a class="header-anchor" href="#deployment"><span>Deployment</span></a></h3>`,18)),t("p",null,[e[3]||(e[3]=i("Afterwards you can ")),o(a,{to:"/deployment/deployment.html"},{default:n(()=>e[2]||(e[2]=[i("deploy")])),_:1}),e[4]||(e[4]=i(" it on your server:"))]),t("ul",null,[t("li",null,[o(a,{to:"/deployment/src/kubernetes/"},{default:n(()=>e[5]||(e[5]=[i("Kubernetes with Helm")])),_:1})])]),e[8]||(e[8]=l('<h2 id="developer-chat" tabindex="-1"><a class="header-anchor" href="#developer-chat"><span>Developer Chat</span></a></h2><p>Join our friendly open-source community on <a href="https://discord.gg/AJSX9DCSUA" target="_blank" rel="noopener noreferrer">Discord</a> 😻 Just introduce yourself at <code>#introduce-yourself</code> and mention <code>@@Mentor</code> to get you onboard :neckbeard: Check out the <a href="https://github.com/Ocelot-Social-Community/Ocelot-Social/blob/master/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">contribution guideline</a>, too!</p><p>We give write permissions to every developer who asks for it. Just text us on <a href="https://discord.gg/AJSX9DCSUA" target="_blank" rel="noopener noreferrer">Discord</a>.</p><h2 id="technology-stack" tabindex="-1"><a class="header-anchor" href="#technology-stack"><span>Technology Stack</span></a></h2><ul><li><a href="https://www.docker.com" target="_blank" rel="noopener noreferrer">Docker</a></li><li><a href="https://kubernetes.io" target="_blank" rel="noopener noreferrer">Kubernetes</a></li><li><a href="https://helm.sh" target="_blank" rel="noopener noreferrer">Helm</a></li></ul><h2 id="license" tabindex="-1"><a class="header-anchor" href="#license"><span>License</span></a></h2><p>See the <a href="https://github.com/Ocelot-Social-Community/Ocelot-Social/blob/master/LICENSE.md" target="_blank" rel="noopener noreferrer">LICENSE</a> file for license rights and limitations (MIT).</p><p>We need <code>DOCKER_BUILDKIT=0</code> for this to work.</p>',8))])}const m=s(h,[["render",p],["__file","index.html.vue"]]),b=JSON.parse('{"path":"/deployment/","title":"Ocelot.Social Deploy And Rebranding","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Live demo","slug":"live-demo","link":"#live-demo","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Package.Json And DockerHub Organisation","slug":"package-json-and-dockerhub-organisation","link":"#package-json-and-dockerhub-organisation","children":[]},{"level":3,"title":"Configure And Branding","slug":"configure-and-branding","link":"#configure-and-branding","children":[]},{"level":3,"title":"Optional: Locally Testing Configuration And Branding","slug":"optional-locally-testing-configuration-and-branding","link":"#optional-locally-testing-configuration-and-branding","children":[]},{"level":3,"title":"Push Changes To GitHub","slug":"push-changes-to-github","link":"#push-changes-to-github","children":[]},{"level":3,"title":"Optional: Locally Testing Your DockerHub Images","slug":"optional-locally-testing-your-dockerhub-images","link":"#optional-locally-testing-your-dockerhub-images","children":[]},{"level":3,"title":"Deployment","slug":"deployment","link":"#deployment","children":[]}]},{"level":2,"title":"Developer Chat","slug":"developer-chat","link":"#developer-chat","children":[]},{"level":2,"title":"Technology Stack","slug":"technology-stack","link":"#technology-stack","children":[]},{"level":2,"title":"License","slug":"license","link":"#license","children":[]}],"git":{"createdTime":1738098450000,"updatedTime":1738098450000,"contributors":[{"name":"mahula","email":"lenzmath@posteo.de","commits":1}]},"readingTime":{"minutes":2.44,"words":732},"filePathRelative":"deployment/README.md","localizedDate":"January 28, 2025","excerpt":"\\n<p><a href=\\"https://github.com/Ocelot-Social-Community/Ocelot-Social-Deploy-Rebranding/actions\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><img src=\\"https://github.com/Ocelot-Social-Community/Ocelot-Social-Deploy-Rebranding/actions/workflows/publish.yml/badge.svg\\" alt=\\"Build Status Publish\\" loading=\\"lazy\\"></a>\\n<a href=\\"https://github.com/Ocelot-Social-Community/Ocelot-Social-Deploy-Rebranding/blob/master/LICENSE.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><img src=\\"https://img.shields.io/badge/license-MIT-green.svg\\" alt=\\"MIT License\\" loading=\\"lazy\\"></a>\\n<a href=\\"https://discord.gg/AJSX9DCSUA\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><img src=\\"https://img.shields.io/discord/489522408076738561.svg\\" alt=\\"Discord Channel\\" loading=\\"lazy\\"></a>\\n<a href=\\"https://www.codetriage.com/ocelot-social-community/ocelot-social-deploy-rebranding\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><img src=\\"https://www.codetriage.com/ocelot-social-community/ocelot-social-deploy-rebranding/badges/users.svg\\" alt=\\"Open Source Helpers\\" loading=\\"lazy\\"></a></p>"}');export{m as comp,b as data};
