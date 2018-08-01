var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TextNav' });
});

router.get('/navigate', function(req, res, next) {
  res.json(
    {
      "geocoded_waypoints" : [
         {
            "geocoder_status" : "OK",
            "partial_match" : true,
            "place_id" : "ChIJRfmN6Oot3okR5nbXeLVcAxY",
            "types" : [ "street_address" ]
         },
         {
            "geocoder_status" : "OK",
            "place_id" : "ChIJhfOIwObR34kRCK6ecEcpzf0",
            "types" : [ "street_address" ]
         }
      ],
      "routes" : [
         {
            "bounds" : {
               "northeast" : {
                  "lat" : 43.3080039,
                  "lng" : -73.63203899999999
               },
               "southwest" : {
                  "lat" : 43.15314739999999,
                  "lng" : -73.7115068
               }
            },
            "copyrights" : "Map data ©2018 Google",
            "legs" : [
               {
                  "distance" : {
                     "text" : "15.7 mi",
                     "value" : 25236
                  },
                  "duration" : {
                     "text" : "22 mins",
                     "value" : 1304
                  },
                  "end_address" : "14 Hudson Ave, Glens Falls, NY 12801, USA",
                  "end_location" : {
                     "lat" : 43.3080039,
                     "lng" : -73.6464534
                  },
                  "start_address" : "156 Lindsay Rd, Schuylerville, NY 12871, USA",
                  "start_location" : {
                     "lat" : 43.1563895,
                     "lng" : -73.63203899999999
                  },
                  "steps" : [
                     {
                        "distance" : {
                           "text" : "0.9 mi",
                           "value" : 1426
                        },
                        "duration" : {
                           "text" : "1 min",
                           "value" : 86
                        },
                        "end_location" : {
                           "lat" : 43.156472,
                           "lng" : -73.649311
                        },
                        "html_instructions" : "Head \u003cb\u003ewest\u003c/b\u003e on \u003cb\u003eLindsay Rd\u003c/b\u003e/\u003cb\u003eLindsay Hill Rd\u003c/b\u003e towards \u003cb\u003eForest Ln Dr\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Lindsay Rd\u003c/div\u003e",
                        "polyline" : {
                           "points" : "m~kfGfgl`MNpCx@tOV~G^xHh@~OJlG@nACj@Ed@o@zDe@dCSjAs@bFa@hDEt@At@?tAHhB?j@Av@"
                        },
                        "start_location" : {
                           "lat" : 43.1563895,
                           "lng" : -73.63203899999999
                        },
                        "travel_mode" : "DRIVING"
                     },
                     {
                        "distance" : {
                           "text" : "0.3 mi",
                           "value" : 453
                        },
                        "duration" : {
                           "text" : "1 min",
                           "value" : 34
                        },
                        "end_location" : {
                           "lat" : 43.1573909,
                           "lng" : -73.6544961
                        },
                        "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eColebrook Rd\u003c/b\u003e",
                        "maneuver" : "turn-slight-right",
                        "polyline" : {
                           "points" : "}~kfGdso`MK\\kCtHg@|AM~@Gv@BdBX|J"
                        },
                        "start_location" : {
                           "lat" : 43.156472,
                           "lng" : -73.649311
                        },
                        "travel_mode" : "DRIVING"
                     },
                     {
                        "distance" : {
                           "text" : "1.3 mi",
                           "value" : 2084
                        },
                        "duration" : {
                           "text" : "2 mins",
                           "value" : 121
                        },
                        "end_location" : {
                           "lat" : 43.15422239999999,
                           "lng" : -73.67969579999999
                        },
                        "html_instructions" : "Continue straight onto \u003cb\u003eDuncan Rd\u003c/b\u003e",
                        "maneuver" : "straight",
                        "polyline" : {
                           "points" : "udlfGrsp`MHlDR`Dh@lFNvA`@zGl@tJThCV`C`@tCr@rEZzB`@hDXvCTbCZtFJtBr@dPb@xITbEXxGL|Bl@pKBx@Bd@?h@?Z?RAL?FAFCHKR"
                        },
                        "start_location" : {
                           "lat" : 43.1573909,
                           "lng" : -73.6544961
                        },
                        "travel_mode" : "DRIVING"
                     },
                     {
                        "distance" : {
                           "text" : "0.1 mi",
                           "value" : 187
                        },
                        "duration" : {
                           "text" : "1 min",
                           "value" : 20
                        },
                        "end_location" : {
                           "lat" : 43.15314739999999,
                           "lng" : -73.68145609999999
                        },
                        "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eNY-50 S\u003c/b\u003e",
                        "maneuver" : "turn-left",
                        "polyline" : {
                           "points" : "{pkfGbqu`Mx@nAXd@Tb@NXLVVj@t@fB"
                        },
                        "start_location" : {
                           "lat" : 43.15422239999999,
                           "lng" : -73.67969579999999
                        },
                        "travel_mode" : "DRIVING"
                     },
                     {
                        "distance" : {
                           "text" : "2.0 mi",
                           "value" : 3157
                        },
                        "duration" : {
                           "text" : "3 mins",
                           "value" : 185
                        },
                        "end_location" : {
                           "lat" : 43.1687517,
                           "lng" : -73.7115068
                        },
                        "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eBallard Rd\u003c/b\u003e",
                        "maneuver" : "turn-right",
                        "polyline" : {
                           "points" : "ejkfGb|u`Mw@r@g@f@s@t@g@h@]^a@`@[\\Y\\Y\\SZ_@f@i@x@q@dAi@x@w@nAcA`BqEpHgCbEaBlC_AxAa@n@g@t@gBfC{@pAkBzCyAfCgC|EaAlBMTGNSh@Ml@I^GZE\\Gb@E^O|AKhAOrA]tD[xCIz@KhAKbAGr@C`@IbAG|@Er@ALSjCGfAKxACb@AV?`@?h@@P@XHvBDjAJvBBpA@\\AXARAPCVGXEJGPGNGNKPIJKJKLYVUPMJi@b@kA|@gBpAm@d@e@d@g@j@y@~@}@hA_BrBo@x@k@t@}AxBiAdBmApB"
                        },
                        "start_location" : {
                           "lat" : 43.15314739999999,
                           "lng" : -73.68145609999999
                        },
                        "travel_mode" : "DRIVING"
                     },
                     {
                        "distance" : {
                           "text" : "9.2 mi",
                           "value" : 14764
                        },
                        "duration" : {
                           "text" : "8 mins",
                           "value" : 490
                        },
                        "end_location" : {
                           "lat" : 43.2952489,
                           "lng" : -73.6795722
                        },
                        "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to merge onto \u003cb\u003eI-87 N\u003c/b\u003e",
                        "polyline" : {
                           "points" : "uknfG|w{`Ma@Ug@WWMSIQGUGMCOCKCK?QAKAO?oB@qA?WASAUCSAWEUGSGEAC?C?C?SB_Bi@y@YoAa@EAaCu@wA_@AAmA[m@OoA[qA[}@SuA[gBa@gAW{EcAkDw@yBg@wBg@sIkBkDw@sA[aAW_Ba@sCw@cBe@mCy@kA_@}@Yw@WsAe@qAe@uAe@oAg@gBq@uAk@wB}@uAm@i@Um@YqAm@_Ae@gAg@cB{@kBaA_CoA}A{@}A}@mF_DkC}AgBcAqDuB_B_AoAs@sAs@}BmA{Au@wAq@qAm@_Ac@qAk@y@]eBs@aAa@uDwAcA_@aCy@yBq@_Cs@uBm@mBi@sA]kCo@oDw@gAUiAUmAWqAUmB[cBWgC_@qAO_CYiCWcGi@oBM}BMk@CqAG_AEeDImACqCGi@?eAAyAA}A?iDBiCBmDBu@@sGFiDBkB@wJJuEB{BB{BBcA?a@@s@@iDBqGD{DDiB@g@@eB@qDBuABaC@eAAY?YAYA}@EwAK_AMgEw@iBg@]I_@Kc@OaA_@y@[s@]g@Yg@WaAk@k@a@s@e@{@o@aAy@o@k@aByAoAiAgB_BaCwB{BqBsBiBoBgBa@_@GGuAoAgBaBmAcAm@g@}AkAaAu@{B_BeAs@wA}@wA}@o@_@qBiAYOs@_@}@e@kAk@uFeCqEqBoAo@uAm@cBw@i@Uo@YiD{AqAi@{CwAeBw@{Aq@qBy@sIcEm@WqD_BaAa@}@]q@Ss@Ug@McASaBWKCc@Ge@Gi@Cg@CeBEaAAsABmBFi@Fu@Fo@FcAPaB\\kA\\q@R_AZq@X_CbAkAh@{Ap@yAn@uClAeIjDoB|@uF`CeEhBoAh@_A^c@PeA\\}@\\iA^_Cn@sAXo@Ne@HuAVoAPeANu@Jo@Hg@Do@FuAJ}AH}AD}ABkB?eAA_ACq@AwAGq@Cs@Es@Ey@Iw@Ia@GqAQ_AM{AWgB]iEu@cDk@iB_@"
                        },
                        "start_location" : {
                           "lat" : 43.1687517,
                           "lng" : -73.7115068
                        },
                        "travel_mode" : "DRIVING"
                     },
                     {
                        "distance" : {
                           "text" : "0.2 mi",
                           "value" : 292
                        },
                        "duration" : {
                           "text" : "1 min",
                           "value" : 28
                        },
                        "end_location" : {
                           "lat" : 43.2976614,
                           "lng" : -73.6781555
                        },
                        "html_instructions" : "Take exit \u003cb\u003e18\u003c/b\u003e towards \u003cb\u003eCivic Center\u003c/b\u003e/\u003cb\u003eW Mountain\u003c/b\u003e",
                        "maneuver" : "ramp-right",
                        "polyline" : {
                           "points" : "ibggGhpu`My@c@C?y@UKEOG_@Q_Ai@m@_@mAm@s@a@}@e@"
                        },
                        "start_location" : {
                           "lat" : 43.2952489,
                           "lng" : -73.6795722
                        },
                        "travel_mode" : "DRIVING"
                     },
                     {
                        "distance" : {
                           "text" : "0.8 mi",
                           "value" : 1366
                        },
                        "duration" : {
                           "text" : "3 mins",
                           "value" : 158
                        },
                        "end_location" : {
                           "lat" : 43.3025423,
                           "lng" : -73.66270519999999
                        },
                        "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eMain St\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Dollar General (on the left in 0.5&nbsp;mi)\u003c/div\u003e",
                        "maneuver" : "turn-right",
                        "polyline" : {
                           "points" : "kqggGngu`M[eDg@{CSoAGa@Ia@EUSgAEUQaAoAuGMs@I]g@mCI]SgAMk@a@wBOw@Ou@UcAiAsEWgAU_AU_Aa@aBcDyM[kAcAgDSq@Us@Ma@s@_C"
                        },
                        "start_location" : {
                           "lat" : 43.2976614,
                           "lng" : -73.6781555
                        },
                        "travel_mode" : "DRIVING"
                     },
                     {
                        "distance" : {
                           "text" : "0.4 mi",
                           "value" : 590
                        },
                        "duration" : {
                           "text" : "1 min",
                           "value" : 74
                        },
                        "end_location" : {
                           "lat" : 43.30514970000001,
                           "lng" : -73.6563609
                        },
                        "html_instructions" : "Continue onto \u003cb\u003eBroad St\u003c/b\u003e",
                        "polyline" : {
                           "points" : "{ohgG|fr`M]kAK]a@mAYaAUs@}AcFYaAg@_BUu@Y_AUs@]gAOc@w@gC_@mAMa@Ss@"
                        },
                        "start_location" : {
                           "lat" : 43.3025423,
                           "lng" : -73.66270519999999
                        },
                        "travel_mode" : "DRIVING"
                     },
                     {
                        "distance" : {
                           "text" : "0.6 mi",
                           "value" : 917
                        },
                        "duration" : {
                           "text" : "2 mins",
                           "value" : 108
                        },
                        "end_location" : {
                           "lat" : 43.3080039,
                           "lng" : -73.6464534
                        },
                        "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eHudson Ave\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                        "maneuver" : "turn-slight-right",
                        "polyline" : {
                           "points" : "e`igGf_q`MM_D?AAUGiAEq@A]ScDCa@C{@GiAGi@IkAGsAA[E{@KqBCk@Es@A]Es@DS?AC_AAWCUAYEQKe@KYKSU[EIIGSOg@[q@a@][Y[QWKSeB}Cs@qAAE"
                        },
                        "start_location" : {
                           "lat" : 43.30514970000001,
                           "lng" : -73.6563609
                        },
                        "travel_mode" : "DRIVING"
                     }
                  ],
                  "traffic_speed_entry" : [],
                  "via_waypoint" : []
               }
            ],
            "overview_polyline" : {
               "points" : "m~kfGfgl`MhAfTv@xQh@~OJlG@nACj@Ed@o@zDy@pEuAlKGjB?tAHhBAbBwCrIg@|AM~@Gv@BdBb@jPR`Dh@lFp@rJl@tJThCx@vGnAnIz@`ITbCZtF~@zSx@|Of@vKp@jMBnAAdAEPKRx@nAn@hA\\p@lArC_BzA{C`DcBtBeD`FuMfTkFlIcDxEeEbH_FpJSh@Ml@Qz@c@~DwBvTaAlNO|BAx@@z@JpCPbEDnBCl@Eh@Md@O`@i@x@iAbAuB`BuCvBmApAwBhCyG|IwCvEiAm@k@Wg@Ou@K}CAiBAi@Ek@Gi@OQASB_Bi@iC{@aFyA}GcB}\\uHuSwEsFyAqF_BuGwB_JeDmImDgGuCoE}B}EkC_Q_KuL}GyEcCiD_BqHaDwFyBeEyAyFeBcFwA_FmAwFmAwI_BkFw@qEi@mKaAmF[cJ[oIMwDAsHFaTPcNLqIFuGFaVPuKJ{FAwAGwCYgEw@iBg@}@UeBo@mBy@oAq@mBmAoBuAqBeB{K{JaKcJ}AwAuDeDkCsB}DuC}CqBgC}A}F_DcRsIsGuC{FeCaGoCmEkBaK{EsFaCoBq@{Ac@eDk@o@KoAKmCIuC@wCNeBNeDn@}Bp@qBt@kElBqSzIeJ~DuGrCgFlBiEnAcCh@{B`@uC`@}Db@sDT{DHqDAqBEqFWeFm@mMyBmGkA}@c@eA[o@YmBiAaCoA}@e@[eD{@kFk@aDeEsToAqGmC_LwFgU{BoHoDmLcGwRuB{GSs@M_DAWOyCc@kIQuBIoB[mGGqADUKgCQw@Wm@[e@]WyA}@w@w@wD{GAE"
            },
            "summary" : "I-87 N",
            "warnings" : [],
            "waypoint_order" : []
         }
      ],
      "status" : "OK"
   }
  );
});


module.exports = router;
