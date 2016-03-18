% F-Droid repository - microG Project
%
%

F-Droid repository
------------------
The official repositories providing apps from the microG Project.


[](id:mainrepo)
> %fdroid-repo-desc%
> > %row%
> > > %col-md-7%
> > > [Name](class:key) [microG F-Droid repo](class:val)
> > > [Address](class:key) [https://microg.org/fdroid/repo](class:val)
> > > [Fingerprint of the signing key (SHA-256)](class:key) [9B D0 67 27 E6 27 96 C0 13 0E B6 DA B3 9B 73 15 74 51 58 2C BD 13 8E 86 C4 68 AC C3 95 D1 41 65](class:val)
> >
> > > %col-md-5%
> > > <img src="https://chart.googleapis.com/chart?cht=qr&amp;chl=https%3A%2F%2Fmicrog.org%2Ffdroid%2Frepo%3Ffingerprint%3D9bd06727e62796c0130eb6dab39b73157451582cbd138e86c468acc395d14165&amp;chs=256x256&amp;choe=UTF-8&amp;chld=L|0">


[](id:archiverepo)
> %fdroid-repo-desc%
> > %row%
> > > %col-md-7%
> > > [Name](class:key) [microG F-Droid archive](class:val)
> > > [Address](class:key) [https://microg.org/fdroid/archive](class:val)
> > > [Fingerprint of the signing key (SHA-256)](class:key) [9B D0 67 27 E6 27 96 C0 13 0E B6 DA B3 9B 73 15 74 51 58 2C BD 13 8E 86 C4 68 AC C3 95 D1 41 65](class:val)
> >
> > > %col-md-5%
> > > <img src="https://chart.googleapis.com/chart?cht=qr&amp;chl=https%3A%2F%2Fmicrog.org%2Ffdroid%2Farchive%3Ffingerprint%3D9bd06727e62796c0130eb6dab39b73157451582cbd138e86c468acc395d14165&amp;chs=256x256&amp;choe=UTF-8&amp;chld=L|0">

<script src="/js/fdroid.js"></script>
<script type="text/javascript">
    fdroid.getRepoInfo("https://microg.org/fdroid/repo", function(repoInfo) {
        $("#mainrepo").parent().next().children(".row").replaceWith(fdroid.createRepoDetails(repoInfo));
    }
    fdroid.getRepoInfo("https://microg.org/fdroid/archive", function(repoInfo) {
        $("#archiverepo").parent().next().children(".row").replaceWith(fdroid.createRepoDetails(repoInfo));
    }
</script>