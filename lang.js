var lang = ( function() {

	var accentedVowels = "áéíóúäëïöüâêîôûàèìòùÁÉÍÓÚÄËÏÖÜÂÊÎÔÛÀÈÌÒÙ";
	var regularVowels = "aeiou";
	var specialChars = "ñÑçÇ";
	var regularChars = "nNcC";
    var compas = [ "norte", "sur", "este", "oeste", "arriba", "abajo" ];
    var brevCompas = [ "n", "s", "e", "o", "ar", "ab" ];

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

    // Mensajes

    var tit = "Ficción interactiva";
    var intro = "¡Comienza la aventura!";
    var venkis = "Has ganado.";
    var eblasvidi = "Aquí puedes ver:";
    var portas = "Llevas contigo: ";
    var vidas = "También puedes ver: ";
    var akuzativo = "";
    var portasnenion = "No llevas nada contigo.";
    var nepovas = "No puedes hacer eso.";
    var neniookazis = "No ha pasado nada.";
    var nesencas = "No tiene sentido";
    var kaj = " y ";
    var surmetita = "puesto";

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
        "compas": compas,
        "brevCompas": brevCompas,
        "tit": tit,
        "intro": intro,
        "venkis": venkis,
        "eblasvidi": eblasvidi,
        "portas": portas,
        "vidas": vidas,
        "akuzativo": akuzativo,
        "portasnenion": portasnenion,
        "nepovas": nepovas,
        "neniookazis": neniookazis,
        "nesencas": nesencas,
        "kaj": kaj,
        "surmetita": surmetita,
    };

}() );
