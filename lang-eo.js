var compas = [ "nordo", "sudo", "oriento", "okcidento", "supro", "malsupro" ];
var brevCompas = [ "n", "s", "oro", "oko", "sro", "msro" ];

var lang = ( function() {

	var accentedVowels = "";
	var regularVowels = "aeiou";
	var specialChars = "ĉĝĥĵŝŭ";
	var regularChars = "cghjsu";

    function canonical ( w )
    {
        if ( w == null ) {
            w = "";
        }

        return w.split( ' ' )[ 0 ].trim().toLowerCase();
    }

    var IgnoredWords = ( function() {
        var Particles = [
            "la", "kaj", "au", "mi",
            "sed", "ene", "zorge", "malrapide", "rapide"
        ];

        var Prepositions = [
            "al", "antaŭ", "aub", "kun", "kontraŭ", "de",
            "ekde", "en", "inter", "gis", "por", "trans",
            "laŭ", "sen", "pro", "pri", "tra", "per"
        ];

        function isIgnorable(w)
        {
            return ( Particles.indexOf( canonical( w ) ) >= 0 );
        }

        function isPreposition(w)
        {
            return ( Prepositions.indexOf( canonical( w ) ) >= 0 );
        }

        return {
            "Particles": Particles,
            "Prepositions": Prepositions,
            "Palabras": Particles,
            "Preposiciones": Prepositions,
            "isIgnorable": isIgnorable,
            "esIgnorable": isIgnorable,
            "isPreposition": isPreposition,
            "esPreposicion": isPreposition,
        };
    } )();

    function ws_to_Particles (ws, sentence)
    {

        for(var i = 0; i < ws.length; ++i )
        {
            var w = canonical( ws[ i ] );

            var rekta_objekto = /^[a-z].+(n)$/
            var verbo_i = /^[a-z].+(i)$/
            var verbo_as = /^[a-z].+(as)$/
            var nerekta_objekto = /^[a-z].+(o)$/
            
            // Set verb
            if(verbo_i.test(w)){
                sentence.verb = w;
            }

            if(verbo_as.test(w)){
                var radiko = w.substring(0, (w.length - 2));
                sentence.verb = radiko + "i";
            }

            // Set noun1
            if(rekta_objekto.test(w)){
                var ovorto = w.substring(0, (w.length - 1));
                sentence.term1 = ovorto;
            }

            // Set noun2
            if(nerekta_objekto.test(w)){
                if ( sentence.prep != null ) {
                    if ( sentence.term1 != null ) {
                        sentence.term2 = w;
                    } else {
                        sentence.term1 = w;
                    }
                }
            }

            // Set preposition
            if ( IgnoredWords.isPreposition( w ) ) {
                sentence.prep = w;
            }

        }

        return;
    }

    return {
        "IgnoredWords": IgnoredWords,
        "PalabrasIgnoradas": IgnoredWords,
        "canonical": canonical,
        "canonica": canonical,
        "ws_to_Particles": ws_to_Particles,
	    "accentedVowels": accentedVowels,
        "regularVowels": regularVowels,
        "specialChars": specialChars,
        "regularChars": regularChars,
    };

}() );
