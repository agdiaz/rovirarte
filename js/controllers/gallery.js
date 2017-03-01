var myApp = angular.module('gallery',[]);

myApp.controller('GalleryCtrl', ['$scope', function($scope) {
  $scope.about = [
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060378/bio_001_tx4ic6.jpg", alt: "about" },
    { url: "http://res.cloudinary.com/rovirarte/image/upload/a_hflip/v1488060758/seminario_004_mgmtmv.jpg", alt: "about" }
  ];

  $scope.seminarios = [
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060747/seminario_001_dj877x.jpg", alt: "seminario_01" },
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060770/seminario_005_vs3jyu.png", alt: "seminario_02" },
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060780/seminario_008_fhwyu8.jpg", alt: "seminario_03" },
  ];

  $scope.arts = [
    { url: "", alt: ""},
    { url: "", alt: ""},
    { url: "", alt: ""},
    { url: "", alt: ""},
    { url: "", alt: ""},
    { url: "", alt: ""},
    { url: "", alt: ""},
    { url: "", alt: ""},
    { url: "", alt: ""},
    { url: "", alt: ""},
    { url: "", alt: ""},
    { url: "", alt: ""},
    { url: "", alt: ""},
  ];

  $scope.press = [
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060585/prensa_001_ctothw.jpg", alt: ""},
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060592/prensa_002_u5jw7j.jpg", alt: ""},
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060602/prensa_013_r2e7sh.jpg", alt: ""},
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060605/prensa_014_icasuv.jpg", alt: ""},
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060604/prensa_015_grvryx.jpg", alt: ""},
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060606/prensa_018_chfwdu.jpg", alt: ""},
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060619/prensa_026_ebu1rz.jpg", alt: ""},
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060675/prensa_036_xk3b80.png", alt: ""},
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060702/prensa_048_aca2ch.png", alt: ""},
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060693/prensa_049_hxyket.jpg", alt: ""},
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060658/prensa_023_gyuna3.jpg", alt: ""},
  ];
  $scope.francisco = [
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060462/francisco_004_p2vera.jpg", alt: "Pintando en el Vaticano" },
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060472/francisco_010_n1peko.jpg", alt: "Pintando en el Vaticano" },
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060476/francisco_011_jp7nrw.jpg", alt: "Pintando en el Vaticano" },
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060483/francisco_020_tmaca0.jpg", alt: "Saludando al Papa Francisco" },
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060500/francisco_022_an747f.jpg", alt: "Saludando al Papa Francisco" },
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060495/francisco_023_qzx8qw.jpg", alt: "" },
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060490/francisco_024_c1lc1k.jpg", alt: "" },
  ];

  $scope.social = [
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060561/medalla_003_bbrxwt.jpg", alt: "Cena solidaria" },
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060554/medalla_004_hwd1jj.png", alt: "Reconocimiento" },
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060547/medalla_002_gpdsrk.jpg", alt: "Por su ayuda contra el Ébola" },
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060565/medalla_001_vmvo43.jpg", alt: "Por su ayuda contra el Ébola" }
  ];

  $scope.travel = [
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060795/viaje_001_gdzi8l.jpg", alt: "" },
    { url: "http://res.cloudinary.com/rovirarte/image/upload/a_hflip/v1488060803/viaje_006_whrgas.jpg", alt: "" },
    { url: "http://res.cloudinary.com/rovirarte/image/upload/a_hflip/v1488060804/viaje_009_oqxh9o.jpg", alt: "" },
    { url: "http://res.cloudinary.com/rovirarte/image/upload/a_0/v1488060801/viaje_004_zghzmp.jpg", alt: "" },
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060824/viaje_017_tulukp.jpg", alt: "" },
    { url: "http://res.cloudinary.com/rovirarte/image/upload/a_0/v1488060809/viaje_008_tg06ap.jpg", alt: "" },
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060793/viaje_003_vikd5j.jpg", alt: "" }
  ];

  $scope.jardin = [
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060404/cine_002_t5acib.png", alt: "" },
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060464/cine_003_saffld.png", alt: "" },
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060445/cine_013_g8hue7.png", alt: "" },
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060449/cine_020_wyruyg.png", alt: "" },
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060412/cine_004_t01kkg.png", alt: "" },
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060444/cine_015_dgotpd.png", alt: "" }

  ];

  $scope.billar = [
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488339390/billar_002_udo4lq.png", alt: "" },
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060362/billar_007_s1qfdn.jpg", alt: "" },
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060393/billar_011_rhhkts.png", alt: "" },
    { url: "http://res.cloudinary.com/rovirarte/image/upload/v1488060366/billar_009_p5kklu.jpg", alt: "" }
  ];
}]);
