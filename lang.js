var compas = [ "norte", "sur", "este", "oeste", "arriba", "abajo" ];
var brevCompas = [ "n", "s", "e", "o", "ar", "ab" ];

var lang = ( function() {

    function canonical ( w )
    {
        if ( w == null ) {
            w = "";
        }

        return w.split( ' ' )[ 0 ].trim().toLowerCase();
    }

    var IgnoredWords = ( function() {
        var Particles = [
            "el", "la", "las", "los", "un", "una", "uno", "y", "o",
            "pero", "dentro", "cuidadosamente", "lentamente", "rapidamente"
        ];

        var Prepositions = [
            "a", "al", "ante", "bajo", "cabe", "con", "contra", "de", "del",
            "desde", "en", "entre", "hacia", "hasta", "para", "por",
            "segun", "sin", "so", "sobre", "tras"
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


    function ws_to_Particles(ws, sentence)
    {

        for(var i = 0; i < ws.length; ++i )
        {
            var w = canonical( ws[ i ] );

            // Set verb
            if ( i == 0 ) {
                if ( !IgnoredWords.isPreposition( w ) ) {
                    sentence.verb = w;
                } else {
                    break;
                }
            }
            else
            // Set noun1
            if ( i == 1 ) {
                if ( !IgnoredWords.isPreposition( w ) ) {
                    sentence.term1 = w;
                } else {
                    sentence.prep = w;
                }
            }
            // Set noun2
            else
            if ( i == 2 ) {
                if ( IgnoredWords.isPreposition( w ) ) {
                    sentence.prep = w;
                } else {
                    if ( sentence.term1 != null ) {
                        sentence.term2 = w;
                        break;
                    } else {
                        sentence.term1 = w;
                    }
                }
            } else {
				if ( !IgnoredWords.isPreposition( w ) ) {
					sentence.term2 = w;
					break;
				}
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
    };

}() );
