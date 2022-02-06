<h2 dir="auto">Telegram Bot API Worker</h2>
<p dir="auto">You can use this script to create a CloudFlare Worker to 
send requests to Telegram Bot API if your ISP or Web host does not allow
 it.</p>
<h2 dir="auto"><a id="user-content-how-to-deploy" class="anchor" aria-hidden="true" href="https://github.com/elenorgt500/telegram#how-to-deploy"><svg class="octicon octicon-link" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"></svg></a></h2>
<h2 dir="auto">How to Deploy</h2>
<ul dir="auto">
<li>
<p dir="auto">Goto <a href="https://dash.cloudflare.com" rel="nofollow">CloudFlare Dashboard</a>
 and sign up/in. If you are new to CloudFlare, it may ask you to add a 
domain. If you don't want to add a domain, just open the above link 
again.</p>
</li>
<li>
<p dir="auto">On the Dashboard goto Workers and verify your email if needed.</p>
</li>
<li>
<p dir="auto">You will be asked to create a Workers subdomain. Enter the subdomain you want.</p>
</li>
<li>
<p dir="auto">Create a Worker or Edit if you have already created one.</p>
</li>
<li>
<p dir="auto">Set a short name for your worker to shorten the URL a bit.</p>
</li>
<li>
<p dir="auto">Copy the code from <a href="https://github.com/elenorgt500/telegram/blob/master/cf_worker.js">cf_worker.js</a> and paste into the Editor given on the Create Worker page.</p>
</li>
<li>
<p dir="auto"><em>Save and Deploy</em></p>
</li>
</ul>
<h2 dir="auto"><a id="user-content-how-to-use-in-oc-telegram-plugins" class="anchor" aria-hidden="true" href="https://github.com/elenorgt500/telegram#how-to-use-in-oc-telegram-plugins"><svg class="octicon octicon-link" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"></svg></a></h2>
<h2 dir="auto">How to use in OC Telegram plugins</h2>
<p dir="auto">After you deploy the Worker, simply copy the worker URL and paste in plugin settings. The URL may look like this <br> <code>https://my-worker.mysubdomain.workers.dev</code></p>
