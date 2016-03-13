% Download - microG Project
%
%

Download
--------
These page provides details to download sources for APK files from the microG Project.
For non-APK components, please consult the corresponding documentation.

<noscript>
    <div class="alert alert-danger" role="alert">This page requires JavaScript for full functionality.</div>
</noscript>

### F-Droid repository
The best method to download and update components of the microG Project is to use our F-Droid repositories.
It currently provides stable and nightly updates for GmsCore as well as releases of GsfProxy and FakeStore.

<noscript>
    <div class="static_content">
        <div class="row">
            <div class="col-md-7 repo-desc">
                <div class="desc-entry"><span class="attrib">Address </span><span class="value">https://microg.org/fdroid/repo</span>
                </div>
                <div class="desc-entry"><span
                        class="attrib">Fingerprint of the signing key (SHA-256) </span><span class="value">9B D0 67 27 E6 27 96 C0 13 0E B6 DA B3 9B 73 15 74 51 58 2C BD 13 8E 86 C4 68 AC C3 95 D1 41 65</span>
                </div>
            </div>
            <div class="col-md-5 repo-desc">
                <img src="https://chart.googleapis.com/chart?cht=qr&amp;chl=https%3A%2F%2Fmicrog.org%2Ffdroid%2Frepo%3Ffingerprint%3D9bd06727e62796c0130eb6dab39b73157451582cbd138e86c468acc395d14165&amp;chs=256x256&amp;choe=UTF-8&amp;chld=L|0">
            </div>
        </div>
    </div>
</noscript>
<div class="dynamic_content">
  <div id="mainrepo"></div>
</div>

### Direct downloads
Nonetheless we provide direct downloads of apk files.

<noscript>
    <div class="static_content">
        <div id="static_app_com.google.android.gms" class="dl-app">
            <div class="row">
                <div class="col-xs-2 col-sm-1"><img src="https://microg.org/img/gmscore_96px.png" height="48"></div>
                <div class="col-xs-10 col-sm-7 dl-desc">
                    <div class="dl-desc-name">microG Services Core</div>
                    <div class="dl-desc-summary">com.google.android.gms</div>
                </div>
                <div class="col-xs-12 col-sm-4 btn-group">
                    <a class="btn btn-default btn-dl"
                       href="https://github.com/microg/android_packages_apps_GmsCore/releases">
                        Download stable
                        <div class="dl-btn-ver">via GitHub</div>
                    </a>
                </div>
            </div>
        </div>
        <div id="static_app_com.google.android.gsf" class="dl-app">
            <div class="row">
                <div class="col-xs-2 col-sm-1"><img src="https://microg.org/img/gmscore_96px.png" height="48"></div>
                <div class="col-xs-10 col-sm-7 dl-desc">
                    <div class="dl-desc-name">microG Services Framework Proxy</div>
                    <div class="dl-desc-summary">com.google.android.gsf</div>
                </div>
                <div class="col-xs-12 col-sm-4 btn-group">
                    <a class="btn btn-default btn-dl"
                       href="https://github.com/microg/android_packages_apps_GsfProxy/releases">
                        Download stable
                        <div class="dl-btn-ver">via GitHub</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</noscript>
<div class="dynamic_content">
    <div id="app_com.google.android.gms" class="dl-app"></div>
    <div id="app_com.google.android.gsf" class="dl-app"></div>
</div>
<div class="static_content">
    <div id="static_app_org.microg.unifiednlp" class="dl-app">
        <div class="row">
            <div class="col-xs-2 col-sm-1"><img src="/img/unifiednlp_96px.png" height="48"></div>
            <div class="col-xs-10 col-sm-7 dl-desc">
                <div class="dl-desc-name">microG UnifiedNlp</div>
                <div class="dl-desc-summary">org.microg.unifiednlp</div>
            </div>
            <div class="col-xs-12 col-sm-4 btn-group">
                <a class="btn btn-default btn-dl"
                   href="https://github.com/microg/android_packages_apps_UnifiedNlp/releases">
                    Download stable
                    <div class="dl-btn-ver">via GitHub</div>
                </a>
            </div>
        </div>
    </div>
    <div id="static_app_com.android.vending" class="dl-app">
        <div class="row">
            <div class="col-xs-2 col-sm-1"><img src="/img/store_96px.png" height="48"></div>
            <div class="col-xs-10 col-sm-7 dl-desc">
                <div class="dl-desc-name">microG Store (FakeStore release)</div>
                <div class="dl-desc-summary">com.android.vending</div>
            </div>
            <div class="col-xs-12 col-sm-4 btn-group">
                <a class="btn btn-default btn-dl"
                   href="https://github.com/microg/android_packages_apps_FakeStore/releases">
                    Download stable
                    <div class="dl-btn-ver">via GitHub</div>
                </a>
            </div>
        </div>
    </div>
</div>


<script src="/js/fdroid.js"></script>
<script type="text/javascript">
  function showAppDetails(name, repoInfo) {
    var app = document.getElementById("app_"+name);
    var row = document.createElement("div");
    row.classList.add("row");

    var div_icon = document.createElement("div");
    div_icon.classList.add("col-xs-2");
    div_icon.classList.add("col-sm-1");
    var img_icon = document.createElement("img");
    img_icon.src = repoInfo.packages[name].icon_src;
    div_icon.appendChild(img_icon);
    row.appendChild(div_icon);

    var div_desc = document.createElement("div");
    div_desc.classList.add("col-xs-10");
    div_desc.classList.add("col-sm-7");
    div_desc.classList.add("dl-desc");
    var div_name = document.createElement("div");
    div_name.classList.add("dl-desc-name");
    div_name.appendChild(document.createTextNode(repoInfo.packages[name].name));
    div_desc.appendChild(div_name);
    var div_summary = document.createElement("div");
    div_summary.classList.add("dl-desc-summary");
    div_summary.appendChild(document.createTextNode(repoInfo.packages[name].package_name));
    div_desc.appendChild(div_summary);
    row.appendChild(div_desc);

    var btn_group = document.createElement("div");
    btn_group.classList.add("col-xs-12");
    btn_group.classList.add("col-sm-4");
    btn_group.classList.add("btn-group");
    var btn_dl_stable = document.createElement("a");
    btn_dl_stable.classList.add("btn");
    btn_dl_stable.classList.add("btn-default");
    btn_dl_stable.classList.add("btn-dl");
    btn_dl_stable.appendChild(document.createTextNode("Download stable"));
    btn_dl_stable.href = repoInfo.url + "/" + name + "-" + repoInfo.packages[name].marketvercode + ".apk";
    var dl_ver = document.createElement("div");
    dl_ver.classList.add("dl-btn-ver");
    dl_ver.appendChild(document.createTextNode(repoInfo.packages[name].marketvername.replace(/.*\(microG (.*)\)/, "$1")));
    btn_dl_stable.appendChild(dl_ver);
    btn_group.appendChild(btn_dl_stable);

    if (Object.keys(repoInfo.packages[name].versions).length > 1) {
      var btn_toggle = document.createElement("button");
      btn_toggle.classList.add("btn");
      btn_toggle.classList.add("btn-default");
      btn_toggle.classList.add("dropdown-toggle");
      btn_toggle.classList.add("btn-dl");
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
      if (Math.max.apply(null, Object.keys(repoInfo.packages[name].versions)) > repoInfo.packages[name].marketvercode) {
        var desc = document.createElement("li");
        desc.classList.add("dropdown-header");
        desc.appendChild(document.createTextNode("Preview releases"));
        menu.appendChild(desc);
      }
      Object.keys(repoInfo.packages[name].versions).sort().reverse().forEach(function (vcode) {
        if (repoInfo.packages[name].marketvercode != vcode) {
          var li = document.createElement("li");
          var a = document.createElement("a");
          a.href = repoInfo.url + "/" + name + "-" + vcode + ".apk";
          a.appendChild(document.createTextNode(repoInfo.packages[name].versions[vcode]));
          li.appendChild(a);
          menu.appendChild(li);
        } else {
          var desc = document.createElement("li");
          desc.classList.add("dropdown-header");
          desc.appendChild(document.createTextNode("Current stable release"));
          menu.appendChild(desc);
          var li = document.createElement("li");
          var a = document.createElement("a");
          a.href = repoInfo.url + "/" + name + "-" + vcode + ".apk";
          a.appendChild(document.createTextNode(repoInfo.packages[name].versions[vcode]));
          li.appendChild(a);
          menu.appendChild(li);
          desc = document.createElement("li");
          desc.classList.add("dropdown-header");
          desc.appendChild(document.createTextNode("Older releases"));
          menu.appendChild(desc);
        }
      });
      btn_group.appendChild(menu);
    }

    row.appendChild(btn_group);
    app.appendChild(row);
  }

  getRepoInfo("https://microg.org/fdroid/repo", function(repoInfo) {
    showAppDetails("com.google.android.gms", repoInfo);
    showAppDetails("com.google.android.gsf", repoInfo);
  });
  appendRepoInfo("https://microg.org/fdroid/repo", document.getElementById("mainrepo"), "Main repository");
</script>