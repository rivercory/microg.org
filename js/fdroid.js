fdroid = {};
fdroid.shalib = {}; !function(r,e){"use strict";var t="undefined"!=typeof module;t&&(r=global);var o=("undefined"!=typeof Uint8Array,"0123456789abcdef".split("")),a=[-2147483648,8388608,32768,128],n=[24,16,8,0],f=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],i=[],s=function(r){return u(r,!0)},u=function(e,t){var s="string"!=typeof e;s&&e.constructor==r.ArrayBuffer&&(e=new Uint8Array(e));var u,d,c,h,l,v,y,A,p,b,g,S,_,m,w,C,T,U,x,B,E,H,J=!0,j=!1,k=0,q=0,z=0,D=e.length;t?(u=3238371032,d=914150663,c=812702999,h=4144912697,l=4290775857,v=1750603025,y=1694076839,A=3204075428):(u=1779033703,d=3144134277,c=1013904242,h=2773480762,l=1359893119,v=2600822924,y=528734635,A=1541459225),p=0;do{if(i[0]=p,i[16]=i[1]=i[2]=i[3]=i[4]=i[5]=i[6]=i[7]=i[8]=i[9]=i[10]=i[11]=i[12]=i[13]=i[14]=i[15]=0,s)for(g=q;D>k&&64>g;++k)i[g>>2]|=e[k]<<n[3&g++];else for(g=q;D>k&&64>g;++k)b=e.charCodeAt(k),128>b?i[g>>2]|=b<<n[3&g++]:2048>b?(i[g>>2]|=(192|b>>6)<<n[3&g++],i[g>>2]|=(128|63&b)<<n[3&g++]):55296>b||b>=57344?(i[g>>2]|=(224|b>>12)<<n[3&g++],i[g>>2]|=(128|b>>6&63)<<n[3&g++],i[g>>2]|=(128|63&b)<<n[3&g++]):(b=65536+((1023&b)<<10|1023&e.charCodeAt(++k)),i[g>>2]|=(240|b>>18)<<n[3&g++],i[g>>2]|=(128|b>>12&63)<<n[3&g++],i[g>>2]|=(128|b>>6&63)<<n[3&g++],i[g>>2]|=(128|63&b)<<n[3&g++]);z+=g-q,q=g-64,k==D&&(i[g>>2]|=a[3&g],++k),p=i[16],k>D&&56>g&&(i[15]=z<<3,j=!0);var F=u,G=d,I=c,K=h,L=l,M=v,N=y,O=A;for(S=16;64>S;++S)C=i[S-15],_=(C>>>7|C<<25)^(C>>>18|C<<14)^C>>>3,C=i[S-2],m=(C>>>17|C<<15)^(C>>>19|C<<13)^C>>>10,i[S]=i[S-16]+_+i[S-7]+m<<0;for(H=G&I,S=0;64>S;S+=4)J?(t?(x=300032,C=i[0]-1413257819,O=C-150054599<<0,K=C+24177077<<0):(x=704751109,C=i[0]-210244248,O=C-1521486534<<0,K=C+143694565<<0),J=!1):(_=(F>>>2|F<<30)^(F>>>13|F<<19)^(F>>>22|F<<10),m=(L>>>6|L<<26)^(L>>>11|L<<21)^(L>>>25|L<<7),x=F&G,w=x^F&I^H,U=L&M^~L&N,C=O+m+U+f[S]+i[S],T=_+w,O=K+C<<0,K=C+T<<0),_=(K>>>2|K<<30)^(K>>>13|K<<19)^(K>>>22|K<<10),m=(O>>>6|O<<26)^(O>>>11|O<<21)^(O>>>25|O<<7),B=K&F,w=B^K&G^x,U=O&L^~O&M,C=N+m+U+f[S+1]+i[S+1],T=_+w,N=I+C<<0,I=C+T<<0,_=(I>>>2|I<<30)^(I>>>13|I<<19)^(I>>>22|I<<10),m=(N>>>6|N<<26)^(N>>>11|N<<21)^(N>>>25|N<<7),E=I&K,w=E^I&F^B,U=N&O^~N&L,C=M+m+U+f[S+2]+i[S+2],T=_+w,M=G+C<<0,G=C+T<<0,_=(G>>>2|G<<30)^(G>>>13|G<<19)^(G>>>22|G<<10),m=(M>>>6|M<<26)^(M>>>11|M<<21)^(M>>>25|M<<7),H=G&I,w=H^G&K^E,U=M&N^~M&O,C=L+m+U+f[S+3]+i[S+3],T=_+w,L=F+C<<0,F=C+T<<0;u=u+F<<0,d=d+G<<0,c=c+I<<0,h=h+K<<0,l=l+L<<0,v=v+M<<0,y=y+N<<0,A=A+O<<0}while(!j);var P=o[u>>28&15]+o[u>>24&15]+o[u>>20&15]+o[u>>16&15]+o[u>>12&15]+o[u>>8&15]+o[u>>4&15]+o[15&u]+o[d>>28&15]+o[d>>24&15]+o[d>>20&15]+o[d>>16&15]+o[d>>12&15]+o[d>>8&15]+o[d>>4&15]+o[15&d]+o[c>>28&15]+o[c>>24&15]+o[c>>20&15]+o[c>>16&15]+o[c>>12&15]+o[c>>8&15]+o[c>>4&15]+o[15&c]+o[h>>28&15]+o[h>>24&15]+o[h>>20&15]+o[h>>16&15]+o[h>>12&15]+o[h>>8&15]+o[h>>4&15]+o[15&h]+o[l>>28&15]+o[l>>24&15]+o[l>>20&15]+o[l>>16&15]+o[l>>12&15]+o[l>>8&15]+o[l>>4&15]+o[15&l]+o[v>>28&15]+o[v>>24&15]+o[v>>20&15]+o[v>>16&15]+o[v>>12&15]+o[v>>8&15]+o[v>>4&15]+o[15&v]+o[y>>28&15]+o[y>>24&15]+o[y>>20&15]+o[y>>16&15]+o[y>>12&15]+o[y>>8&15]+o[y>>4&15]+o[15&y];return t||(P+=o[A>>28&15]+o[A>>24&15]+o[A>>20&15]+o[A>>16&15]+o[A>>12&15]+o[A>>8&15]+o[A>>4&15]+o[15&A]),P};!r.JS_SHA256_TEST&&t?(u.sha256=u,u.sha224=s,module.exports=u):r&&(r.sha256=u,r.sha224=s)}(fdroid.shalib);

fdroid.getXml = function (url, callback, errorCallback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseXML);
        } else if (xhr.readyState === 4 && errorCallback) {
            errorCallback(xhr);
        }
    };
    xhr.open("get", url, true);
    xhr.send();
};

fdroid.getPath = function (obj, name) {
    var sp = name.split("/");
    var x = obj.getElementsByTagName(sp[0])[0];
    if (!x) return {textContent: null};
    if (sp.length == 1) return x;
    return fdroid.getPath(x, sp.slice(1).join("/"));
};

fdroid.getRepoInfo = function (baseUrl, callback) {
    fdroid.getXml(baseUrl + "/index.xml", function (xml) {
        var repoinfo = {};
        var _repo = xml.getElementsByTagName("repo")[0];
        repoinfo.version = _repo.getAttribute("version");
        repoinfo.name = _repo.getAttribute("name");
        repoinfo.icon = _repo.getAttribute("icon");
        repoinfo.pubkey = _repo.getAttribute("pubkey").match(/.{1,2}/g).map(function (str) {
            return parseInt("0x" + str)
        });
        repoinfo.pubkey_sha256 = fdroid.shalib.sha256(repoinfo.pubkey).match(/.{1,2}/g).join(" ").toUpperCase();
        repoinfo.url = _repo.getAttribute("url");
        repoinfo.url_with_key = repoinfo.url + "?fingerprint=" + fdroid.shalib.sha256(repoinfo.pubkey);
        repoinfo.qrcode_src = "https://chart.googleapis.com/chart?cht=qr&chl=" + encodeURIComponent(repoinfo.url_with_key) + "&chs=256x256&choe=UTF-8&chld=L|0";
        repoinfo.timestamp = _repo.getAttribute("timestamp");
        repoinfo.date = new Date(parseInt(repoinfo.timestamp) * 1000);
        repoinfo.description = fdroid.getPath(_repo, "description").textContent;
        repoinfo.packages = {};
        repoinfo.package_count = 0;

        var pkgs = xml.getElementsByTagName("application");
        for (var i = 0; i < pkgs.length; i++) {
            var _pkg = pkgs[i];
            var app = {};
            app.package_name = _pkg.getAttribute("id");
            app.name = fdroid.getPath(_pkg, "name").textContent;
            app.summary = fdroid.getPath(_pkg, "summary").textContent;
            app.description_html = fdroid.getPath(_pkg, "desc").textContent;
            app.description_text = app.description_html.replace(/(<([^>]+)>)/ig, "");
            app.icon_src = repoinfo.url + "/icons/" + fdroid.getPath(_pkg, "icon").textContent;
            app.lastupdate = fdroid.getPath(_pkg, "lastupdate").textContent;
            app.versions = Array.prototype.reduce.call(_pkg.getElementsByTagName("package"), function (total, pkg) {
                total[parseInt(fdroid.getPath(pkg, "versioncode").textContent)] = {
                    "name": fdroid.getPath(pkg, "version").textContent,
                    "url": repoinfo.url + "/" + fdroid.getPath(pkg, "apkname").textContent,
                    "size": parseInt(fdroid.getPath(pkg, "size").textContent)
                };
                return total;
            }, {});
            app.marketvercode = parseInt(fdroid.getPath(_pkg, "marketvercode").textContent);
            if (app.marketvercode <= 0 && !(app.marketvercode in app.versions)) {
                app.marketvercode = Math.max.apply(null, Object.keys(app.versions));
            }
            repoinfo.packages[app.package_name] = app;
            repoinfo.package_count++;
        }

        callback(repoinfo);
    }, function () {
        callback({});
    });
};

fdroid.createDownloadButton = function (repoInfo, packageName) {
    function dropdownHeader(title) {
        var header = document.createElement("li");
        header.classList.add("dropdown-header");
        header.appendChild(document.createTextNode(title));
        return header;
    }

    var app = repoInfo.packages[packageName];

    var btn_group = document.createElement("div");
    btn_group.classList.add("btn-group");
    var btn_dl_stable = document.createElement("a");
    btn_dl_stable.classList.add("btn", "btn-default", "btn-dl");
    btn_dl_stable.appendChild(document.createTextNode("Download stable"));
    btn_dl_stable.href = app.versions[app.marketvercode].url;
    var dl_ver = document.createElement("span");
    dl_ver.classList.add("ver");
    dl_ver.appendChild(document.createTextNode(app.versions[app.marketvercode].name));
    btn_dl_stable.appendChild(dl_ver);
    btn_group.appendChild(btn_dl_stable);

    if (Object.keys(app.versions).length > 1) {
        var btn_toggle = document.createElement("button");
        btn_toggle.classList.add("btn", "btn-default", "dropdown-toggle", "btn-dl");
        btn_toggle.dataset.toggle = "dropdown";
        var caret = document.createElement("span");
        caret.classList.add("caret");
        btn_toggle.appendChild(caret);
        var sr = document.createElement("span");
        sr.classList.add("sr-only");
        sr.appendChild(document.createTextNode("Toggle dropdown"));
        btn_toggle.appendChild(sr);
        btn_group.appendChild(btn_toggle);
        var menu = document.createElement("ul");
        menu.classList.add("dropdown-menu");
        if (Math.max.apply(null, Object.keys(app.versions)) > app.marketvercode) {
            menu.appendChild(dropdownHeader("Preview releases"));
        }
        var prevCode;
        Object.keys(app.versions).sort().reverse().forEach(function (vcode) {
            if (app.marketvercode == vcode) {
                menu.appendChild(dropdownHeader("Current stable release"));
            } else if (app.marketvercode == prevCode) {
                menu.appendChild(dropdownHeader("Older releases"));
            }
            var li = document.createElement("li");
            var a = document.createElement("a");
            a.href = app.versions[vcode].url;
            a.appendChild(document.createTextNode(app.versions[vcode].name));
            li.appendChild(a);
            menu.appendChild(li);
            prevCode = vcode;
        });
        btn_group.appendChild(menu);
    }
    return btn_group;
};

fdroid.createRepoDetails = function (repoInfo) {
    function createEntry(name, value) {
        var div_entry = document.createElement("div");
        div_entry.classList.add("desc-entry");
        var span_attrib = document.createElement("span");
        span_attrib.classList.add("key");
        span_attrib.appendChild(document.createTextNode(name));
        div_entry.appendChild(span_attrib);
        var span_value = document.createElement("span");
        span_value.classList.add("val");
        span_value.appendChild(document.createTextNode(value));
        div_entry.appendChild(span_value);
        return div_entry;
    }

    var div_repo_details = document.createElement("div");
    div_repo_details.classList.add("row");

    var div_content = document.createElement("div");
    div_content.classList.add("col-md-7");
    div_content.appendChild(createEntry("Name", repoInfo.name));
    div_content.appendChild(createEntry("Address", repoInfo.url));
    div_content.appendChild(createEntry("Description", repoInfo.description));
    div_content.appendChild(createEntry("Number of apps", repoInfo.package_count));
    div_content.appendChild(createEntry("Last update", repoInfo.date.toLocaleString()));
    div_content.appendChild(createEntry("Fingerprint of the signing key (SHA-256)", repoInfo.pubkey_sha256));
    div_repo_details.appendChild(div_content);

    var div_img = document.createElement("div");
    div_img.classList.add("col-md-5");
    var img = document.createElement("img");
    img.src = repoInfo.qrcode_src;
    div_img.appendChild(img);
    div_repo_details.appendChild(div_img);

    return div_repo_details;
};

