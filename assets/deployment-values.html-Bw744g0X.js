import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,a as s,o as t}from"./app-DgLGUeOp.js";const n={};function l(d,e){return t(),i("div",null,e[0]||(e[0]=[s(`<h1 id="deployment-values" tabindex="-1"><a class="header-anchor" href="#deployment-values"><span>Deployment Values</span></a></h1><p>For each deployment, you need to set the environment variables and configurations. Here is some specific information on how to set the values.</p><h2 id="webapp" tabindex="-1"><a class="header-anchor" href="#webapp"><span>Webapp</span></a></h2><p>We have several configuration possibilities just in the frontend.</p><h3 id="date-time" tabindex="-1"><a class="header-anchor" href="#date-time"><span>Date Time</span></a></h3><p>In file <code>branding/constants/dateTime.js</code>.</p><ul><li><code>RELATIVE_DATETIME</code><ul><li><code>true</code> (default) or <code>false</code></li></ul></li><li><code>ABSOLUT_DATETIME_FORMAT</code><ul><li>definition see <a href="https://date-fns.org/v3.3.1/docs/format" target="_blank" rel="noopener noreferrer">date-fns, format</a>: <ul><li><code>P</code>: just localized date</li><li><code>Pp</code>: just localized date and time</li></ul></li></ul></li></ul><h2 id="e-mails" tabindex="-1"><a class="header-anchor" href="#e-mails"><span>E-Mails</span></a></h2><p>You need to set environment variables to send registration and invitation information or notifications to users, for example.</p><h3 id="spf-and-dkim" tabindex="-1"><a class="header-anchor" href="#spf-and-dkim"><span>SPF and DKIM</span></a></h3><p>More and more e-mail providers require settings for authorization and verification of e-mail senders.</p><h3 id="spf" tabindex="-1"><a class="header-anchor" href="#spf"><span>SPF</span></a></h3><p>Sometimes it is enough to create an SPF record in your DNS.</p><h3 id="dkim" tabindex="-1"><a class="header-anchor" href="#dkim"><span>DKIM</span></a></h3><p>However, if you need DKIM authorization and verification, you must set the appropriate environment variables in: <code>.env</code>, <code>docker-compose.yml</code> or Helm script <code>values.yaml</code>:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">SMTP_DKIM_DOMAINNAME</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">your</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> e-mail</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sender</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> domai</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">n&gt;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">SMTP_DKIM_KEYSELECTOR</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">2017</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">SMTP_DKIM_PRIVATKEY</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;-----BEGIN RSA PRIVATE KEY-----\\n&lt;your base64 encoded privat key data&gt;\\n-----END RSA PRIVATE KEY-----\\n&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can find out how DKIM works here:</p><p><a href="https://www.ionos.com/digitalguide/e-mail/e-mail-security/dkim-domainkeys/" target="_blank" rel="noopener noreferrer">https://www.ionos.com/digitalguide/e-mail/e-mail-security/dkim-domainkeys/</a></p><p>To create the private and public DKIM key, see here:</p><p><a href="https://knowledge.ondmarc.redsift.com/en/articles/2141592-generating-2048-bits-dkim-public-and-private-keys-using-openssl-on-a-mac" target="_blank" rel="noopener noreferrer">https://knowledge.ondmarc.redsift.com/en/articles/2141592-generating-2048-bits-dkim-public-and-private-keys-using-openssl-on-a-mac</a></p><p>Information about the required PEM format can be found here:</p><p><a href="https://docs.progress.com/bundle/datadirect-hybrid-data-pipeline-installation-46/page/PEM-file-format.html" target="_blank" rel="noopener noreferrer">https://docs.progress.com/bundle/datadirect-hybrid-data-pipeline-installation-46/page/PEM-file-format.html</a></p><h2 id="neo4j-database" tabindex="-1"><a class="header-anchor" href="#neo4j-database"><span>Neo4j Database</span></a></h2><p>We have several configuration options for our Neo4j database.</p><h3 id="dbms-default-database-–-default-database-name-to-be-used" tabindex="-1"><a class="header-anchor" href="#dbms-default-database-–-default-database-name-to-be-used"><span>DBMS_DEFAULT_DATABASE – Default Database Name to be Used</span></a></h3><p>If you need to set the default database name in Neo4j to be used for all operations and terminal commands like our backup scripts, you must set the appropriate environment variable in: <code>.env</code>, <code>docker-compose.yml</code> or Helm script <code>values.yaml</code>:</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">DBMS_DEFAULT_DATABASE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;graph.db&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The default value is <code>neo4j</code> if it is not set.</p><p>As example see files:</p><ul><li><code>neo4j/.env.template</code></li><li><code>deployment/docker-compose.yml</code></li><li><code>deployment/configurations/stage.ocelot.social/kubernetes/values.yaml.template</code></li></ul>`,30)]))}const p=a(n,[["render",l],["__file","deployment-values.html.vue"]]),h=JSON.parse('{"path":"/deployment/deployment-values.html","title":"Deployment Values","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Webapp","slug":"webapp","link":"#webapp","children":[{"level":3,"title":"Date Time","slug":"date-time","link":"#date-time","children":[]}]},{"level":2,"title":"E-Mails","slug":"e-mails","link":"#e-mails","children":[{"level":3,"title":"SPF and DKIM","slug":"spf-and-dkim","link":"#spf-and-dkim","children":[]},{"level":3,"title":"SPF","slug":"spf","link":"#spf","children":[]},{"level":3,"title":"DKIM","slug":"dkim","link":"#dkim","children":[]}]},{"level":2,"title":"Neo4j Database","slug":"neo4j-database","link":"#neo4j-database","children":[{"level":3,"title":"DBMS_DEFAULT_DATABASE – Default Database Name to be Used","slug":"dbms-default-database-–-default-database-name-to-be-used","link":"#dbms-default-database-–-default-database-name-to-be-used","children":[]}]}],"git":{"createdTime":1738098450000,"updatedTime":1738098450000,"contributors":[{"name":"mahula","email":"lenzmath@posteo.de","commits":1}]},"readingTime":{"minutes":1.01,"words":304},"filePathRelative":"deployment/deployment-values.md","localizedDate":"January 28, 2025","excerpt":"\\n<p>For each deployment, you need to set the environment variables and configurations.\\nHere is some specific information on how to set the values.</p>\\n<h2>Webapp</h2>\\n<p>We have several configuration possibilities just in the frontend.</p>\\n<h3>Date Time</h3>\\n<p>In file <code>branding/constants/dateTime.js</code>.</p>"}');export{p as comp,h as data};
