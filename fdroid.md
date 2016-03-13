% F-Droid repository - microG Project
%
%

F-Droid repository
------------------
The official repositories providing apps from the microG Project.

<noscript>
<div class="alert alert-danger" role="alert">This page requires JavaScript for full functionality.</div>
<div class="static_content">
  <h2>Main repository</h2>
  <div class="row">
    <div class="col-md-6 repo-desc">
      <div class="desc-entry"><span class="attrib">Address </span><span class="value">https://microg.org/fdroid/repo</span></div>
      <div class="desc-entry"><span class="attrib">Fingerprint of the signing key (SHA-256) </span><span class="value">9B D0 67 27 E6 27 96 C0 13 0E B6 DA B3 9B 73 15 74 51 58 2C BD 13 8E 86 C4 68 AC C3 95 D1 41 65</span></div>
    </div>
    <div class="col-md-6 repo-desc">
      <img src="https://chart.googleapis.com/chart?cht=qr&amp;chl=https%3A%2F%2Fmicrog.org%2Ffdroid%2Frepo%3Ffingerprint%3D9bd06727e62796c0130eb6dab39b73157451582cbd138e86c468acc395d14165&amp;chs=300x300&amp;choe=UTF-8&amp;chld=L|0">
    </div>
  </div>
</div>
</noscript>
<div class="dynamic_content">
  <div id="mainrepo"></div>
  <div id="archiverepo"></div>
</div>

<script src="/js/fdroid.js"></script>
<script type="text/javascript">
  appendRepoInfo("https://microg.org/fdroid/repo", document.getElementById("mainrepo"), "Main repository");
  appendRepoInfo("https://microg.org/fdroid/archive", document.getElementById("archiverepo"), "Archive repository");
</script>