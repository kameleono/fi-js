// vampiro.js
/*
	generado por FI.JS@txtMap, v0.1/ v0.6 20140612
	Sun Aug 31 22:46:09 2014

        * Adaptado para fi.js, como demo.

        (c) Jaume Alcazo Castellarnau 1998
        (c) baltasarq 2014

*/

ctrl.ponTitulo( "Vampiro" );
ctrl.ponIntro( "<p><h2>Memoraĵoj de reXXe</h2><br>\
                <b>\
                \"Vampiro\" estas originala verkaĵo kreita de Jaume \
                Alcazo Castellarnau en 1998.\
                </b><br>\
                <br><i>La <a href=\"http://wiki.caad.es/Proyecto_Vampiro\" \
                target=\"_blank\">projekto vampiro </a> \
                konkistas en rekreo de tre simpla aventuro \
                per nova sintaksa analizilo, tial por \
                sperta aŭtoro, ĝi ne prezentas grandan defion. \
                En tiu ĉi okazo, la celo estas elmontri la eblecojn \
                de <a target=\"_blank\" href=\"http://caad.es/baltasarq/prys/fi.js/\">fi.js</a>\
                </i></p>" );
ctrl.ponImg( "res/portada_vampiro.jpg" );
ctrl.ponAutor( "baltasarq" );
ctrl.ponVersion( "20140831" );

// *** Locs --

var locBiblioteca = ctrl.lugares.creaLoc(
	"Biblioteko",
	[ "biblioteko" ],
	"Vi estas en la biblioteko de la kastelo. Ne estas necese diri \
        ke ĝi estas plena je interesaj ${libroj, ekzameni la librojn}, sed \
        malfeliĉe vi ne havas \
        tempon por legi ilin.<br>Videblaj elirejoj: ${okcidento, okcidento}."
);
locBiblioteca.pic = "res/biblioteca.jpg";

var locCocina = ctrl.lugares.creaLoc(
	"Kuirejo",
	[ "kuirejo", "ĉambro" ],
	"Vi estas en la kuirejo de la kastelo. Ĝi estas plena je \
        ${kaseroloj, ekz la kaserolojn} kaj ${aĵoj, ekz la aĵojn} \
        por kuiri. Estas ${forno, ekz la fornon}, \
        ${lavujo, ekz la lavujon} kaj malgranda ${ŝranko, ekz la ŝrankon}.\
        <br>Videblaj elirejoj: \
        ${oriento, oriento}."
);
locCocina.pic = "res/cocina.jpg";

var locDormitorio = ctrl.lugares.creaLoc(
	"Dormoĉambro",
	[ "dormocambro" ],
	"Vi estas en dormoĉambro nek granda nek malgranda. \
        Ĝi estas tre aŭstera. Nur estas ${lito, ekz la liton} \
        kaj ${ŝranko, ekz la ŝrankon}.\
        <br>Videblaj elirejoj: ${oriento, oriento}."
);
locDormitorio.pic = "res/dormitorio.jpg";


var locElFinal = ctrl.lugares.creaLoc(
	"La Fino",
	[ "cambro" ],
	"Vi estas en nuda ĉambro. Nur estas \
         ${altaro, ekz altaron} en la mezo. \
         Sur la altaro vi povas vidi ${ĉerkon, ekz ĉerkon}.\
         <br>Videblaj elirejoj: ${oriento, oriento}."
);
locElFinal.pic = "res/final.jpg";

var locEscaleras = ctrl.lugares.creaLoc(
	"Ŝtuparo",
	[ "stuparo" ],
	"Vi troviĝas ĉe la fino de la koridoro. Antaŭ vi, vi vidas \
        unu ŝtuparon kiu ${supreniras, supreniri} kaj aliaj kiu ${malsupreniras, malsupreniri}. \
        ${Okcidente, okcidento} estas la ${dormoĉambro, okcidento} kaj ${oriente, oriente} \
        la ${vivĉambro, oriento}.<br>Videblaj elirejoj: \
        ${sudo, sudo}, ${oriento, oriento}, ${okcidento, okcidento}, \
        ${supro, supro}, ${malsupro, malsupro}."
);
locEscaleras.pic = "res/escaleras.jpg";

var locEscalerasSuperiores = ctrl.lugares.creaLoc(
	"Supra ŝtuparo",
	[ "stuparo" ],
	"Vi estas en la supra etaĝo de la kastelo. Ĉi tie estas eĉ pli \
        malvarme ol ${malsupre, malsupro}. Malantaŭ vi troviĝas la \
        ŝtuparo kiu ${malsupreniras, malsupreniri} kaj \
        ${okcidente, okcidento} estas la ${ĉambro, okcidento} de la \
        vampiro.<br>Videblaj elirejoj: ${okcidento, okcidento}, ${malsupro, malsupro}."
);
locEscalerasSuperiores.pic = "res/escaleras_superiores.jpg";

var locPasillo = ctrl.lugares.creaLoc(
	"Koridoro",
	[ "koridoro" ],
	"Vi troviĝas meze de la ĉefa koridoro de tiu ĉi etaĝo. \
         En la ${okcidento, okcidento} estas la ${kuirejo, okcidento} kaj en la ${oriento, oriento} \
         la ${biblioteko, oriento}. La koridoro plu iras ĝis la \
         ${nordo, nordo}.<br>Videblaj elirejoj: \
         ${nordo, nordo}, ${sudo, sudo}, ${oriento, oriento}, ${akcidento, okcidento}."
);
locPasillo.pic = "res/pasillo.jpg";


var locSalaDeEstar = ctrl.lugares.creaLoc(
	"Vivoĉambro",
	[ "vivocambro", "cambro", "vivcambro", "sidcambro" ],
	"Tiu ĉi estas la plej invita ĉambro de la tuta kastelo. \
        En la ${kameno, ekz la kamenon} \
        la lastaj ${restaĵoj el fajro, ekz la fajron} \
        sparkas kamarade kaj komplice. \
        Estas granda ${tablo, ekz la tablon} kaj apude staras ${seĝo, ekz la seĝon} \
        Sur la muro pendas \
        multaj ĉasaj ${trofeoj, ekz la trofeojn} kaj diversaj \
        ${ornamaĵoj, ekz la orgamaĵojn}.<br>Videblaj elirejoj: \
        ${okcidento, okcidento}.\n"
);
locSalaDeEstar.pic = "res/sala_estar.jpg";

var locSotano = ctrl.lugares.creaLoc(
	"Kelo",
	[ "kelo" ],
	"En tiu ĉi malgranda kelo estas tre malvarme, Sento de \
        izoleco kaptas vin. Ĉio estas malpura. Estas \
        ${barelo, ekz la barelon} \
        ĉi tie, ankaŭ ${ŝtuparo, ekz la ŝtuparon} kiu \
        ${supreniras, supreniri}.<br>Videblaj elirejoj: \
        ${supro, supro}.\n"
);
locSotano.pic = "res/sotano.jpg";

var locVestibulo = ctrl.lugares.creaLoc(
	"Vestiblo",
	[ "antaŭĉambro" ],
	"Vi estas en la vestiblo de la kastelo. Estas tre humide \
        kaj malvarme. Vi estas en koridoro kiu etendiĝas ĝis la \
        ${nordo, nordo}. En la ${sudo, sudo} staras la \
        ${enirpordo, ekzameni la pordon} al la kastelo.<br>Videblaj \
        elirejoj: ${nordo, nordo}.\n"
);
locVestibulo.pic = "res/vestibulo.jpg";

locVestibulo.preGo = function() {
        var loc = ctrl.lugares.devLocActual();
        var s = parser.sentencia;
        var toret = "";

        if ( s.term1 !== "sur" ) {
                toret = acciones.devAccion( "go" ).exe( s );
        } else {
                toret = objPuertaEntrada.desc;
        }

        return toret;
}

var objPuertaEntrada = ctrl.creaObj(
	"pordo",
	[ "enirejo" ],
	"Ĉu vere?, vi ĵus alvenis! vi devas plenumi \
         vian mision.",
	locVestibulo,
	Ent.Escenario
);

objPuertaEntrada.preOpen = function() {
        return objPuertaEntrada.desc;
}


// *** Compas --

// -- locBiblioteca
locBiblioteca.ponSalidaBi( "okcidento", locPasillo );

// -- locElFinal
locElFinal.ponSalidaBi( "oriento", locEscalerasSuperiores );

// -- locEscaleras
locEscaleras.ponSalidaBi( "oriento", locSalaDeEstar );
locEscaleras.ponSalidaBi( "okcidento", locDormitorio );
locEscaleras.ponSalidaBi( "supro", locEscalerasSuperiores );
locEscaleras.ponSalidaBi( "malsupro", locSotano );

// -- locEscalerasSuperiores
locEscalerasSuperiores.ponSalidaBi( "okcidento", locElFinal );

// -- locPasillo
locPasillo.ponSalidaBi( "nordo", locEscaleras );
locPasillo.ponSalidaBi( "sudo", locVestibulo );
locPasillo.ponSalidaBi( "oriento", locBiblioteca );
locPasillo.ponSalidaBi( "okcidento", locCocina );

// -- locSalaDeEstar
locSalaDeEstar.ponSalidaBi( "okcidento", locEscaleras );

// -- locVestibulo
locVestibulo.ponSalidaBi( "nordo", locPasillo );


// *** Objs --

var objAdornos = ctrl.creaObj(
	"ornamaĵoj",
	[ "ornamajoj" ],
	"Ili ornamas.",
	locSalaDeEstar,
	Ent.Escenario
);

var objAltar = ctrl.creaObj(
	"altaro",
	[ "altaro" ],
	"Ĝi estas altaro el malmola ŝtono. Sur ĝi estas la \
         ${ĉerko, ekz la ĉerkon}.",
	locElFinal,
	Ent.Escenario
);

var objArmario = ctrl.creaObj(
	"ŝranko",
	[ "sranko" ],
	"Ĝi estas unu el tiaj ŝrankoj uzataj por teleroj. \
         La pordo havas malgrandan seruron. ",
	locCocina,
	Ent.Escenario
);

objArmario.ponAbierto( false );

objArmario.preExamine = function() {
        var toret = objArmario.desc;

        if ( objArmario.estaAbierto() ) {
                toret += "Ĝi estas malfermita.";
        } else {
                toret += "Ĝi estas fermita.";
        }

        return toret;
}

objArmario.preOpen = function() {
        var toret = "Vi ne povas malfermi ĝin per tio.";
        var s = parser.sentencia;

        if ( s.obj2 === null ) {
                s.obj2 = objLlavecita;
        }

        if ( !ctrl.estaPresente( s.obj2 ) ) {
                toret = "Vi ne povas tiel malfermi ĝin.";
        }
        else
        if ( s.obj2 === objLlavecita ) {
                toret = "Ĝi jam estis malfermita.";

                if ( !objArmario.estaAbierto() ) {
                        toret = "Vi malfermis ĝin per la ŝlosileto.";
                        objArmario.ponAbierto();

                        if ( objRistraDeAjos.owner === ctrl.lugares.limbo )
                        {
                                objRistraDeAjos.moveTo( locCocina );
                                toret += " Ene estas \
                                           ${ajlŝnuro, preni la ajlŝnuron}.";
                        }
                }
        }

        return toret;
}

var objArmarioRopero = ctrl.creaObj(
	"vestoŝranko",
	[ "vestosranko", "vestejo" ],
	"La vestoŝranko estas malplena.",
	locDormitorio,
	Ent.Escenario
);

var objAtaud = ctrl.creaObj(
	"ĉerko",
	[ "cerko", "sarkofago" ],
	"Una sencilla caja de pino.",
	locElFinal,
	Ent.Escenario
);

objAtaud.preOpen = function() {
        var toret = "";

        // La estaca
        if ( !ctrl.estaPresente( objTrozoDeMadera ) )
        {
                toret += "Vi bezonas palison kiun enbati en la \
                          koron de la vampiro.\n";
        } else {
                if ( !objTrozoDeMadera.afilado ) {
                        toret += "Vi povus uzi la lignopecon kiel \
                                  palison sed ĝi ne estas pintigita.\n";
                }
        }

        // El martillo
        if ( !ctrl.estaPresente( objMartillo ) ) {
                toret += "Mankas io per kio bati la palison.\n";
        }

        // El crucifijo
        if ( !ctrl.estaPresente( objCrucifijoPlateado ) ) {
                toret += "Nepras religia protektilo.\n";
        } else {
                if ( !objCrucifijoPlateado.estaPuesto() ) {
                        toret += "La krucifikso devus pendi sur \
                                  via kolo.\n";
                }
        }

        // La ristra de ajos
        if ( !ctrl.estaPresente( objRistraDeAjos ) ) {
                toret += "Nepras pagana protektilo.\n";
        } else {
                if ( !objRistraDeAjos.estaPuesto() ) {
                        toret += "La protekto de la ajlo nur efikas \
                                  se ĝi pendas sur via kolo.\n";
                }
        }

        // Es el final?
        if ( toret.length === 0 ) {
				var dvFrame = ctrl.getHtmlPart( "dvFrame", "missing frame div" );
				dvFrame.style.display = "none";
                ctrl.terminaJuego(
                        "\
                                Vi malfermas la ĉerkon, kaj, sub la protekto de \
                                la ajloj kaj la krucifikso, komencas vian \
                                taskon. La terurplena vizaĝo de la \ vampiro dum vi en lin enbatas la palison \
                                nur estas komparebla kun la pacoplena vizaĝo \
                                kiun vi vidas \
                                kelkajn martelfrapojn poste. \
                                La reduktiĝo je cindroj \
                                konfirmas ke via misio estas jam \
                                plenumita.",
                        "res/portada_vampiro.jpg"
                );
        } else {
                toret = "Kontrolu ke vi havas ĉion necesan......<br>"
                        + toret;
        }

        return toret;
}

var objBarril = ctrl.creaObj(
	"barelo",
	[ "barelo", "kovrilo", "fendo", "entranco" ],
	"Temas pri barelo kun kovrilo, kiu havas malgrandan \
        fendon.",
	locSotano,
	Ent.Escenario
);

objBarril.ponAbierto( false );

objBarril.preExamine = function() {
        var toret = objBarril.desc;

        if ( objBarril.estaAbierto() ) {
                toret += " Ĝi estas malplena.";
        } else {
                toret += " Vi ne povas vidi kio estas ene de la barelo \
                     ĉar ĝi estas fermita.";
        }

        return toret;
}

objBarril.preOpen = function() {
        var toret = "Vi ne povas malfermi ĝin per tio.";
        var s = parser.sentencia;

        if ( s.obj2 === null ) {
                s.obj2 = objPalanca;
        }

        if ( !ctrl.estaPresente( s.obj2 ) ) {
                toret = "Vi ne povas malfermi ĝin tiel.";
        }
        else
        if ( s.obj2 === objPalanca ) {
                toret = "Ĝi jam estas malfermita.";

                if ( !objBarril.estaAbierto() ) {
                        toret = "Vi malfermis ĝin per la stango, aplikante \
                                 forton sur unu el la bordoj de \
                                 la kovrilo, kie troviĝis la fendo.";

                        objBarril.ponAbierto();
                        objMartillo.mueveA( objBarril.owner );
                        toret += " Ene estis \
                                   ${martelo, preni la martelon}.";
                }
        }

        return toret;
}

var objCacerolas = ctrl.creaObj(
	"kaseroloj",
	[ "kaseroloj", "kaserolo", "ajo", "ajoj" ],
	"Simplaj kaseroloj kaj kuirejaj aĵoj.",
	locCocina,
	Ent.Escenario
);

var objCama = ctrl.creaObj(
	"lito",
	[ "lito" ],
	"Ĝi estas kovrita per ${litotukoj, ekz la litotukojn}.",
	locDormitorio,
	Ent.Escenario
);

var objChimenea = ctrl.creaObj(
	"kameno",
	[ "kameno" ],
	"Ĝi estas kameno farita el brikoj kaj ne tre eleganta. \
         En ĝi sparkas la ${restaĵoj el fajro, ekz fajron}.",
	locSalaDeEstar,
	Ent.Escenario
);

var objCrucifijoPlateado = ctrl.creaObj(
	"arĝentokolora  plateado",
	[ "krucifikso" ],
	"Ĝi estas arĝentokolora krucifikso. Ĝi estas unu el la kvar elementoj kiuj utilos al vi por venki la vampiron.",
	locBiblioteca,
	Ent.Portable
);

objCrucifijoPlateado.ponPrenda();

var objCuchillo = ctrl.creaObj(
	"tranĉilo",
	[ "trancilo" ],
	"Ĝi estas simpla kuireja tranĉilo. Ĝi pikas.",
	locCocina,
	Ent.Portable
);

var objFregadero = ctrl.creaObj(
	"lavujo",
	[ "lavujo" ],
	"Ĝi estas ŝtona lavujo. La lavujo estas malplena.",
	locCocina,
	Ent.Escenario
);

var objHorno = ctrl.creaObj(
	"forno",
	[ "forno" ],
	"Simpla forno, ĝi estas tute ne atentinda.",
	locCocina,
	Ent.Escenario
);

var objLibros = ctrl.creaObj(
	"libroj",
	[ "libro", "libroj", "volumo", "volumoj",
          "breto", "librosrankoj", "librosranko",
          "librosranko" ],
	"Amasoj da libroj, sed nun mi ne havas tempon por legi.",
	locBiblioteca,
	Ent.Escenario
);

var objLlavecita = ctrl.creaObj(
	"ŝlosileto",
	[ "slosileto", "slosilo" ],
	"Tiu ĉi malgranda ŝlosilo ŝajnas oportuna por malfermi ŝrankon aŭ ion tian.",
	ctrl.lugares.limbo,
	Ent.Portable
);

var objMartillo = ctrl.creaObj(
	"martelo",
	[ "martelo" ],
	"Granda martelo. Ĝi estas unu el la aĵoj kiuj utilos al vi por venki la vampiron.",
	ctrl.lugares.limbo,
	Ent.Portable
);

var objMesa = ctrl.creaObj(
	"tablo",
	[ "tablo" ],
	"Mahagona tablo, ĝi estas tre granda.",
	locSalaDeEstar,
	Ent.Escenario
);

var objPalanca = ctrl.creaObj(
	"stango",
	[ "stango" ],
	"Ĝi estas stango el ŝtalo. Ĝi utilas por rompe malfermi aĵojn.",
	locBiblioteca,
	Ent.Portable
);

var objRestos = ctrl.creaObj(
	"restaĵoj",
	[ "restajoj", "fajro" ],
	"Kelkaj braĝoj sparkas inter lignaĵoj ankoraŭ bruliĝontaj.",
	locSalaDeEstar,
	Ent.Escenario
);

objRestos.preExamine = function() {
        var toret = objRestos.desc;

        if ( objTrozoDeMadera.owner === ctrl.lugares.limbo ) {
                toret += " Inter la restaĵoj el la fajro vi malkovras \
                           ${lignopecon, preni la lignopecon}.";
                objTrozoDeMadera.moveTo( locSalaDeEstar );
        }

        return toret;
}

var objRistraDeAjos = ctrl.creaObj(
	"ajlŝnuro",
	[ "snuro", "ajloj", "ajlo", "ajlsnuro" ],
	"Ĝi estas plena ajlŝnuro kies odoro estas iom naŭza. Ĝi estas unu el la kvar aĵoj per kiuj vi venkos la vampiron.",
	ctrl.lugares.limbo,
	Ent.Portable
);

objRistraDeAjos.ponPrenda();

var objSabanas = ctrl.creaObj(
	"litotukoj",
	[ "litotukoj" ],
	"Ili estas malordaj kaj malpuraj.",
	locDormitorio,
	Ent.Escenario
);

objSabanas.preExamine = function() {
        var toret = objSabanas.desc;

        if ( objLlavecita.owner = ctrl.lugares.limbo ) {
                objLlavecita.moveTo( locDormitorio );
                toret += " Inter ili vi malkovras \
                ${ŝlosileton, preni la ŝlosileton}.";
        }

        return toret;
}

var objSilla = ctrl.creaObj(
	"seĝo",
	[ "sego" ],
	"Una cómoda silla.",
	locSalaDeEstar,
	Ent.Escenario
);

var objTrajeBarato = ctrl.creaObj(
	"malmultekosta virvesto",
	[ "virvesto" ],
	"Ĝi estas malmultekosta virvesto aĉetita el inter la marĉandaĵoj.",
	locPasillo,
	Ent.Portable
);
objTrajeBarato.ponPrenda();

var objTrofeos = ctrl.creaObj(
	"trofeoj",
	[ "trofeoj", "trofeo" ],
	"Sensignifaj trofeoj.",
	locSalaDeEstar,
	Ent.Escenario
);

var objTrozoDeMadera = ctrl.creaObj(
	"lignopeco",
	[ "peco", "ligno", "lignajo", "stango" ],
	"Longa ortangula lignopeco.",
	ctrl.lugares.limbo,
	Ent.Portable
);

objTrozoDeMadera.preExamine = function() {
        var toret = objTrozoDeMadera.desc;

        if ( objTrozoDeMadera.afilado ) {
                toret += " Nun ĝi ŝajnas paliso.";
        }

        return toret;
}

objTrozoDeMadera.afilado = false;

objTrozoDeMadera.preSharpen = function() {
        var toret = "Vi ne povas pintigi ĝin per tio.";
        var s = parser.sentencia;

        if ( s.obj2 === null
          || s.obj2 === objTrozoDeMadera )
        {
                s.obj2 = objCuchillo;
        }

        if ( !ctrl.estaPresente( s.obj2 ) ) {
                toret = "Vi ne povas pintigi ĝin tiel.";
        }
        else
        if ( s.obj2 === objCuchillo ) {
                toret = "Ĝi jam estas pintigita.";

                if ( !objTrozoDeMadera.afilado ) {
                        toret = "Vi pintigis la lignopecon per la tranĉilo.";
                        objTrozoDeMadera.afilado = true;
                }
        }

        return toret;
}

// --- Jugador ---------------------------------------------------------
var jugador = ctrl.personas.creaPersona( "reXXe",
                    [ "rexxe", "casisto", "vampircasisto" ],
                    "reXXe, sperta vampirĉasisto.",
                    locVestibulo
);

var murcielagos = ctrl.personas.creaPersona( "vespertoj",
                    [ "vesperto" ],
                    "Pluraj vespertoj, ŝajne ili ne scias kion pensi pri vi.",
                    ctrl.lugares.limbo
);
murcielagos.ponAlcanzable( false );

murcielagos.preTalk = function() {
        return "Sed, kiucele? ...ne ĝenu la kompatindajn vespertojn...";
}

locPasillo.preSing = function() {
        return "Vi serĉas iun senprudentulon por la plenumo de via krimo...<br>"
                + acciones.ejecuta( "talk", "vespertoj" );
}

murcielagos.daemon = function() {
        if ( ctrl.getTurns() % 7 == 0 ) {
                if ( ctrl.lugares.getCurrentLoc() == murcielagos.owner ) {
                        ctrl.print( "Vespertoj bruadas kriante unuj la aliajn..." );
                } else {
                        ctrl.print( "Sufokitaj, malfortaj krioj venas el ie..." );
                }
        }
}

ctrl.ponAlarma( 3, function() {
        murcielagos.mueveA( locPasillo );

        if ( ctrl.lugares.devLocActual() == murcielagos.owner ) {
                ctrl.print( "Vekiĝintaj pro via ĉeesto, la verpertoj krias kiel komencante streĉi siajn membrojn..." );
        } else {
                ctrl.print( "Vi aŭdas forajn malfortajn kriojn..." );
        }

        ctrl.ponDaemon( "bats", murcielagos.daemon );
});

// --- Acciones --------------------------------------------------------
var sharpenAction = acciones.crea( "sharpen",
        [ "pintigi"]
);

sharpenAction.exe = function(s) {
    var toret = "Tio ne troviĝas ĉirkaŭe.";

    if ( s.term1 === null ) {
        toret = "Kion vi volas pintigi?.";
    }
    else
    if ( s.obj1 !== null ) {
        if ( s.obj1.isReachable() ) {
            toret = "Perforto ne estas la solvo.";
        } else {
            toret = "Ĝi ne estas atingebla.";
        }
    }

    return toret;
};

sharpenAction.doIt = function(s) {
    var toret = "Tio ne troviĝas ĉirkaŭe.";

    if ( s.term1 === null ) {
        toret = "Kion vi volas pintigi?";
    }
    else
    if ( s.obj1 != null ) {
        if ( typeof( s.obj1.preSharpen ) === "function" ) {
            toret = s.obj1.preSharpen();
        } else {
            toret = this.exe( s );
        }

        if ( typeof( s.obj1.postSharpen ) === "function" ) {
            s.obj1.postSharpen();
        }
    }

    return toret;
};

// Arranque ------------------------------------------------------------
ctrl.personas.cambiaJugador( jugador );
ctrl.lugares.ponInicio( locVestibulo );

