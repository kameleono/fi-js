// verbs.js

/**
 * Acciones (fi.js IF Engine)
 * Licencia MIT (c) baltasar@gmail.com 201405
 */

// --------------------------------------------------------- Examine
var examineAction = actions.crea( "examine",
        [ "ekzameni", "ekz" ]
);

examineAction.exe = function(s) {
    var toret = "Tio ne troviĝas ĉirkaŭe.";

    if ( s.term1 == null ) {
        toret = "Kion vi volas ekzameni?";
    }
    else
    if ( s.obj1 != null ) {
        var takeAction = actions.getAction( "take" );
        toret = s.obj1.desc;

        if ( s.obj1.isOpen()
          && s.obj1.objs.length > 0 )
        {
            var vCogibles = [];
            var vExaminables = [];

            // Crear vector de objetos cogibles
            // y otro con aquellos solo examinables
            for(var i = 0; i < s.obj1.objs.length; ++i) {
                if ( s.obj1.objs[ i ].isScenery() ) {
                    vExaminables.push( s.obj1.objs[ i ] );
                } else {
                    vCogibles.push( s.obj1.objs[ i ] );
                }
            }

            if ( vExaminables.length > 0 ) {
                toret += "<br>Vi vidas: ";
                toret += ctrl.listVector( vExaminables, examineAction.verbs[ 0 ] );
            }

            if ( vCogibles.length > 0 ) {
                toret += "<br>Vi havas: ";
                toret += ctrl.listVector( vCogibles, takeAction.verbs[ 0 ] );
            }
        }
    }

    return toret;
};

examineAction.doIt = function(s) {
    var toret = "Tio ne troviĝas ĉirkaŭe.";

    if ( s.term1 == null ) {
        toret = "Kion vi volas ekzameni?";
    }
    else
    if ( s.obj1 != null ) {
        if ( typeof( s.obj1.preExamine ) === "function" ) {
            toret = s.obj1.preExamine();
        } else {
            toret = this.exe( s );
        }

        if ( typeof( s.obj1.postExamine ) === "function" ) {
            s.obj1.postExamine();
        }
    }

    return toret;
};

// ----------------------------------------------------------- Attack
var attackAction = actions.crea( "attack",
        [ "ataki", "mortigi", "bati",
          "frapi", "rompi", "piedbati" ]
);

attackAction.exe = function(s) {
    var toret = "Tio ne troviĝas ĉirkaŭe.";

    if ( s.term1 == null ) {
        toret = "Kion?";
    }
    else
    if ( s.obj1 != null ) {
        if ( s.obj1.isReachable() ) {
            toret = "Perforto ne estas la solvo.";
        } else {
            toret = "Ĝo ne estas atingebla.";
        }
    }

    return toret;
};

attackAction.doIt = function(s) {
    var toret = "Tio ne troviĝas ĉirkaŭe.";

    if ( s.term1 == null ) {
        toret = "Kion?";
    }
    else
    if ( s.obj1 != null ) {
        if ( typeof( s.obj1.preAttack ) === "function" ) {
            toret = s.obj1.preAttack();
        } else {
            toret = this.exe( s );
        }

        if ( typeof( s.obj1.postAttack ) === "function" ) {
            s.obj1.postAttack();
        }
    }

    return toret;
};

// ----------------------------------------------------------- Start
var startAction = actions.crea( "start",
        [ "ŝalti", "startigi" "aktivigi" ]
);

startAction.exe = function(s) {
    var toret = "Tio ne troviĝas ĉirkaŭe.";

    if ( s.term1 == null ) {
        toret = "Kion?";
    }
    else
    if ( s.obj1 != null ) {
        if ( s.obj1.isReachable() ) {
            toret = "Lastmomente vi decidas ne fari tion.";
        } else {
            toret = "Ĝi estas ne atingebla.";
        }
    }

    return toret;
};

startAction.doIt = function(s) {
    var toret = "Tio ne troviĝas ĉirkaŭe";

    if ( s.term1 == null ) {
        toret = "Kion?";
    }
    else
    if ( s.obj1 != null ) {
        if ( typeof( s.obj1.preStart ) === "function" ) {
            toret = s.obj1.preStart();
        } else {
            toret = this.exe( s );
        }

        if ( typeof( s.obj1.postStart ) === "function" ) {
            s.obj1.postStart();
        }
    }

    return toret;
};

// ----------------------------------------------------------- Shutdown
var shutdownAction = actions.crea( "shutdown",
        [ "malsalti", "malŝalti", "malaktivigi",
          "malstartigi" ]
);

shutdownAction.exe = function(s) {
    var toret = "Tio ne troviĝas ĉirkaŭe.";

    if ( s.term1 == null ) {
        toret = "Kion?";
    }
    else
    if ( s.obj1 != null ) {
        if ( s.obj1.isReachable() ) {
            toret = "Lastmomente vi decidas ne fari tion.";
        } else {
            toret = "Ĝi ne estas atingebla.";
        }
    }

    return toret;
};

shutdownAction.doIt = function(s) {
    var toret = "No veo de eso en derredor.";

    if ( s.term1 == null ) {
        toret = "Kion?";
    }
    else
    if ( s.obj1 != null ) {
        if ( typeof( s.obj1.preShutdown ) === "function" ) {
            toret = s.obj1.preShutdown();
        } else {
            toret = this.exe( s );
        }

        if ( typeof( s.obj1.postShutdown ) === "function" ) {
            s.obj1.postShutdown();
        }
    }

    return toret;
};

// ------------------------------------------------------------ Look
var lookAction = actions.crea( "look", [ "rigardi", "vidi", "esplori" ] );

lookAction.transInput = function(s) {
    // Look x "mirar x" = examine x
    if ( lookAction.match( s )
      && s.term1 != null
      && s.prep == null )
    {
		s.verb = examineAction.verbs[ 0 ];
    }

    return "";
}

lookAction.exe = function(s, desc) {
	ctrl.places.doDesc( ctrl.places.getCurrentLoc(), desc );
    return "";
};

lookAction.doIt = function(s) {
    var loc = ctrl.places.getCurrentLoc();

    if ( typeof( loc.preLook ) === "function" ) {
        this.exe( s, loc.preLook() );
    } else {
        this.exe( s );
    }

    if ( typeof( loc.postLook ) === "function" )
    {
        loc.postLook();
    }

    return "";
};

// ------------------------------------------------------- Inventory
var inventoryAction = actions.crea( "inv", [ "i", "inv", "inventaro" ] );

inventoryAction.exe = function(s, persona) {
	var toret = "";

	if ( arguments.length < 2
	  || persona == null )
	{
		persona = ctrl.personas.getPlayer();
	}

    toret += persona.desc + "<br />" + ctrl.list( persona );
    return toret;
};

inventoryAction.doIt = function(s) {
    var player = ctrl.personas.getPlayer();
    var toret = "";

    if ( typeof( player.preInv ) === "function" ) {
        toret = player.preInv();
    } else {
        toret = this.exe( s );
    }

    if ( typeof( player.postInv ) === "function" )
    {
        player.postInv();
    }

    return toret;
};

// -------------------------------------------------------------- Go
var goAction = actions.crea( "go", [ "iri", "iru" ] );

goAction.transInput = function(s) {
    var goAction = actions.getAction( "go" );

    // Shortcuts for directions
    if ( s.verb != null
      && s.term1 == null
      && s.prep == null
      && s.term2 == null )
    {
        var transformed = false;
        var loc = ctrl.places.getCurrentLoc();
        var shortCompass = loc.brevCompas;
        var compass = loc.compas;

        // Inspect short compass
        for(var i = 0; i < shortCompass.length; ++i) {
            if ( shortCompass[ i ] === s.verb ) {
                s.act = goAction;
                s.verb = goAction.verbs[ 0 ];
                s.term1 = compass[ i ];
                transformed = true;
                break;
            }
        }

        if ( !transformed ) {
            // Inspect compass
            for(var i = 0; i < compass.length; ++i) {
                if ( compass[ i ] === s.verb ) {
                    s.act = goAction;
                    s.verb = goAction.verbs[ 0 ];
                    s.term1 = compass[ i ];
                    break;
                }
            }
        }
    }

    return "";
}

goAction.exe = function(s, loc) {
	var toret = "";

	if ( arguments.length < 2
	  || loc == null )
	{
		loc = ctrl.places.getCurrentLoc();
	}

    var locDest = loc.getExit( s.term1 );

    if ( locDest != null ) {
        ctrl.goto( locDest );
    } else {
        toret = "Ne eblas iri tien.";
    }

    return toret;
}

goAction.doIt = function(s) {
    var loc = ctrl.places.getCurrentLoc();

    if ( typeof( loc.preGo ) === "function" ) {
        toret = loc.preGo();
    } else {
        toret = this.exe( s );
    }

    if ( typeof( loc.postGo ) === "function" ) {
        loc.postGo();
    }

    return toret;
};

// --------------------------------------------------------------- Exits
var exitsAction = actions.crea( "exits",
    [ "elirejoj", "eliro" ]
);

exitsAction.exe = function(s, loc) {
    var toret = "";
    var realExits = []

    if ( arguments.length < 2
	  || loc == null )
	{
		loc = ctrl.places.getCurrentLoc();
	}

    if ( arguments.length === 0 ) {
        s = null;
    }

    toret = "Vi povas vidi la sekvajn elirejojn: ";

    // Collect all exits
    for(var i = 0; i < loc.exits.length; ++i) {
        if ( loc.exits[ i ] != null ) {
            realExits.push( i );
        }
    }

    // Compose exits
    for(var i = 0; i < realExits.length; ++i) {
        var compasDir = realExits[ i ];

        toret += "${"
            + loc.compas[ compasDir ]
            + ',' + loc.compas[ compasDir ]
            + "}";

        if ( i < ( realExits.length - 1 ) ) {
            toret += ", ";
        } else {
            toret += ".";
        }
    }

    // Unless there are no exits...
    if ( realExits.length === 0 ) {
        toret = "Ne estas videblaj elirejoj.";
    }

    return toret;
}

exitsAction.doIt = function(s) {
    var toret = "";
    var loc = ctrl.places.getCurrentLoc();


    if ( typeof( loc.preExits ) === "function" ) {
        toret = loc.preExits();
    } else {
        toret = this.exe( s );
    }

    if ( typeof( loc.postExits ) === "function" ) {
        loc.postExits();
    }

    return toret;
};

// ------------------------------------------------------------ Enter
var enterAction = actions.crea( "enter",
    [ "eniri", "enen" ]
);

enterAction.getDestObj = function(s)
{
	var loc = ctrl.places.getCurrentLoc();
    var objDest = s.obj1;

    if ( objDest == null
      && s.term1 == null )
    {
		objDest = loc;
	}

	return objDest;
}

enterAction.exe = function(s, obj) {
    var toret = "Tio ne troviĝas ĉirkaŭe.";

    if ( arguments.length < 2
      || obj == null )
    {
		obj = this.getDestObj();
	}

    if ( obj != null ) {
        if ( obj.isReachable() ) {
            toret = "Ne eblas.";
        } else {
            toret = "Ĝi ne estas atingebla.";
        }
    }

    return toret;
}

enterAction.doIt = function(s) {
    var toret = "Tio ne troviĝas ĉirkaŭe.";
    var objDest = this.getDestObj(s);

    if ( objDest != null ) {
      if ( typeof( objDest.preEnter ) === "function" ) {
          toret = objDest.preEnter();
      } else {
          toret = this.exe( s );
      }

      if ( typeof( objDest.postEnter ) === "function" ) {
        objDest.postEnter();
      }
    }

    return toret;
};

// ------------------------------------------------------------ Exit
var exitAction = actions.crea( "exit",
    [ "eliri", "eksteren" ]
);

exitAction.getDestObj = function(s)
{
	var loc = ctrl.places.getCurrentLoc();
    var objDest = s.obj1;

    if ( objDest == null
      && s.term1 == null )
    {
		objDest = loc;
	}

	return objDest;
}

exitAction.exe = function(s, obj) {
    var toret = "Tio ne troviĝas ĉirkaŭe.";

    if ( arguments.length < 2
      || obj == null )
    {
		obj = this.getDestObj( s );
	}

    if ( obj != null ) {
        if ( obj.isReachable() ) {
            toret = "Ne eblas.";
        } else {
            toret = "Ĝi ne estas atingebla.";
        }
    }

    return toret;
}

exitAction.doIt = function(s) {
    var toret = "Tio ne troviĝas ĉirkaŭe.";
    var objDest = this.getDestObj( s );

    if ( objDest != null ) {
      if ( typeof( objDest.preExit ) === "function" ) {
          toret = objDest.preExit();
      } else {
          toret = this.exe( s );
      }

      if ( typeof( objDest.postExit ) === "function" ) {
        objDest.postExit();
      }
    }

    return toret;
};

// ------------------------------------------------------------ Push
var pushAction = actions.crea( "push",
    [
        "puŝi", "pusi", "movi"
    ]
);

pushAction.exe = function(s, obj) {
    var toret = "";

    if ( arguments.length < 2
      || obj == null )
    {
		obj = s.obj1;
	}

    if ( obj.isReachable() ) {
        toret = "Ne eblas.";
    } else {
        toret = "Ĝi ne estas atingebla.";
    }

    return toret;
}

pushAction.doIt = function(s) {
    var toret = "";
    var objDest = s.obj1;

    if ( objDest != null ) {
      if ( typeof( objDest.prePush ) === "function" ) {
        toret = objDest.prePush();
      } else {
        toret = this.exe( s );
      }

      if ( typeof( objDest.postPush ) === "function" ) {
        objDest.postPush();
      }
    } else {
        toret = "No hay de eso por aqu&iacute;.";
    }

    return toret;
};

// ------------------------------------------------------------ Pull
var pullAction = actions.crea( "pull",
    [
        "tiri", "treni",
    ]
);

pullAction.transInput = function(s)
{
    var dropAction = actions.getAction( "drop" );

    if ( this.match( s )
      && s.prep == null )
    {
        s.verb = dropAction.verbs[ 0 ];
    }

    return "";
}

pullAction.exe = function(s, obj) {
    var toret = "";

    if ( arguments.length < 2
      || obj == null )
    {
		obj = s.obj1;
	}

    if ( obj.isReachable() ) {
        toret = "Ne eblas.";
    } else {
        toret = "Ĝi ne estas atingebla.";
    }

    return toret;
}

pullAction.doIt = function(s) {
    var toret = "";
    var objDest = s.obj1;

    if ( objDest != null ) {
      if ( typeof( objDest.prePull ) === "function" ) {
        toret = objDest.prePull();
      } else {
        toret = this.exe( s );
      }

      if ( typeof( objDest.postPull ) === "function" ) {
          objDest.postPull();
      }
    } else {
        toret = "Tio ne troviĝas ĉirkaŭe.";
    }

    return toret;
};

// ------------------------------------------------------------ Drop
var dropAction = actions.crea( "drop",
	[ "lasi", "ĵeti", "delasi", "jeti" ]
);

dropAction.getContainer = function(s) {
	var toret = s.obj2;

	if ( toret == null ) {
		toret = ctrl.places.getCurrentLoc();
	}

    return toret;
}

dropAction.exe = function(s, obj, cont, persona) {
    var toret = "";

    if ( arguments.length < 4
      || persona == null )
    {
        persona = ctrl.personas.getPlayer();
    }

    if ( arguments.length < 3
      || cont == null )
    {
        cont = this.getContainer( s );
    }

    if ( arguments.length < 2
      || obj == null )
    {
        obj = s.obj1;
    }

    if ( obj != null ) {
        // The very same place?
        if ( obj.owner === persona ) {
            if ( cont.isReachable() ) {
                if ( cont.isContainer() ) {

                    if ( obj.isClothing() ) {
                        obj.setWorn( false );
                    }

                    obj.moveTo( cont );
                    toret = "Farite.";
                } else {
                    toret = "Tio ne ŝajnas oportuna.";
                }
            } else {
                toret = "Ĝi ne estas atingebla.";
            }
        } else {
            toret = "Vi ne posedas tion.";
        }
    } else {
        toret = "No hay de eso por aqu&iacute;.";
    }

    return toret;
}

dropAction.doIt = function(s) {
    var toret = "";
    var cont = this.getContainer( s );
    var objDest = s.obj1;
    var verb = s.verb;
    var objTerm = s.term1;

	// No se encuentra el contenedor, pero se ha especificado
    if ( s.term2 != null
      && s.obj2 == null  )
    {
        objDest = null;
    }

    if ( objDest != null ) {
        if ( objDest.owner == ctrl.personas.getPlayer() ) {
            if ( typeof( objDest.preDrop ) === "function" ) {
                toret = objDest.preDrop();
            } else {
                toret = this.exe( s );
            }

            actions.execute( "look" );

            // Set 's' again back to "take"
            s.act = this;
            s.verb = verb;
            s.obj1 = objDest;
            s.term1 = objTerm;

            if ( typeof( objDest.postDrop ) === "function" ) {
                objDest.postDrop();
            }
        } else {
            toret = "No est&aacute; siendo llevado.";
        }
    } else {
        toret = "No hay de eso por aqu&iacute;.";
    }

    return toret;
};

// ------------------------------------------------------------ Take
var takeAction = actions.crea( "take",
    [
        "preni",
    ]
);

takeAction.exe = function(s, obj, persona) {
    var toret = "Tio ne troviĝas ĉirkaŭe.";

    if ( arguments.length < 3
      || persona == null )
    {
        persona = ctrl.personas.getPlayer();
    }

    if ( arguments.length < 2
      || obj == null )
    {
        obj = s.obj1;
    }

    if ( obj != null ) {
        if ( obj.isReachable() ) {
            if ( !obj.isScenery() ) {
				if ( !persona.has( obj ) ) {
					obj.moveTo( persona );

					if ( obj.isClothing() ) {
						obj.setWorn( false );
					}

					toret = "Prenite.";
				} else {
					toret = "Vi jam havas ĝin.";
				}
            } else {
                toret = "Ĝi ne estas utila al vi.";
            }
        } else {
            toret = "Ĝi ne estas atingebla.";
        }
    }

    return toret;
}

takeAction.doIt = function(s) {
    var toret = "";
    var objDest = s.obj1;
    var objTerm = s.term1;
    var verb = s.verb;

    if ( objDest != null ) {
      if ( typeof( objDest.preTake ) === "function" ) {
          toret = objDest.preTake();
      } else {
          toret = this.exe( s );
      }

      actions.execute( "look" );

      // Set 's' again back to "take"
      s.act = this;
      s.verb = verb;
      s.obj1 = objDest;
      s.term1 = objTerm;

      if ( typeof( objDest.postTake ) === "function" ) {
        objDest.postTake();
      }
    } else {
        toret = "Tio ne troviĝas ĉirkaŭe";
    }

    return toret;
};

// ---------------------------------------------------------------- Open
var openAction = actions.crea( "open",
    [ "malfermi", "malbloki" ]
);

openAction.exe = function(s, obj) {
    var toret = "";

    if ( arguments.length < 2
      || obj == null )
    {
        obj = s.obj1;
    }

    if ( obj != null ) {
        if ( obj.isReachable() ) {
            toret = "Ne estas necese.";

            if ( obj.isCloseable()
              && !obj.isOpen() )
            {
                obj.setOpen();
                toret = "Farite.";
            }
        } else {
            toret = "Ĝi ne estas atingebla.";
        }
    } else {
        toret = "Tio ne troviĝas ĉirkaŭe.";
    }

    return toret;
}

openAction.doIt = function(s) {
    var toret = "";
    var objDest = s.obj1;

    if ( objDest != null ) {
      if ( typeof( objDest.preOpen ) === "function" ) {
        toret = objDest.preOpen();
      } else {
          toret = this.exe( s );
      }

      if ( typeof( objDest.postOpen ) === "function" ) {
        objDest.postOpen();
      }
    } else {
        toret = "Tio ne troviĝas ĉirkaŭe;.";
    }

    return toret;
};

// --------------------------------------------------------------- Close
var closeAction = actions.crea( "close",
    [ "fermi" ]
);

closeAction.exe = function(s, obj) {
    var toret = "";

    if ( arguments.length < 2
      || obj == null )
    {
        obj = s.obj1;
    }

    if ( obj != null ) {
        if ( obj.isReachable() ) {
            toret = "Ne estas necece.";

            if ( obj.isCloseable()
              && obj.isOpen() )
            {
                obj.setOpen( false );
                toret = "Farite.";
            }
        } else {
            toret = "Ĝi ne estas atingebla.";
        }
    } else {
        toret = "Tio ne troviĝas ĉirkaŭe.";
    }

    return toret;
}

closeAction.doIt = function(s) {
    var toret = "";
    var objDest = s.obj1;

    if ( objDest != null ) {
      if ( typeof( objDest.preClose ) === "function" ) {
        toret = objDest.preClose();
      } else {
          toret = this.exe( s );
      }

      if ( typeof( objDest.postClose ) === "function" ) {
        objDest.postClose();
      }
    } else {
        toret = "Tio ne troviĝas ĉirkaŭe.";
    }

    return toret;
};

// ------------------------------------------------------------ Swim
var swimAction = actions.crea( "swim",
	[ "naĝi", "nagi", "nado", "subnaĝi", "subnagi" ]
);

swimAction.exe = function(s) {
    return "Ahora no.";
}

swimAction.doIt = function(s) {
    var toret = "";
    var loc = ctrl.places.getCurrentLoc();

    if ( typeof( loc.preSwim ) === "function" ) {
        toret = loc.preSwim();
    } else {
        toret = this.exe( s );
    }

    if ( typeof( loc.postSwim ) === "function" ) {
        loc.postSwim();
    }

    return toret;
};

// ---------------------------------------------------------------- Talk
var talkAction = actions.crea( "talk", [ "paroli", "konversacii", "babili" ] );

talkAction.exe = function(s) {
	var toret = "";
    var persona = s.obj1;

	if ( s.term1 == null ) {
		toret = "Paroli sola ne ŝajnas bona ideo.";
	}
	else
	if ( persona == null ) {
		toret = "Tio ne troviĝas ĉirkaŭe.";
	}
	else
	if ( !( persona instanceof Persona ) ) {
		toret = "Ne eblas paroli kun tio.";
	} else {
		if ( persona.isReachable() ) {
			toret = "Ĝi ne atentas vin.";
		} else {
			toret = "Vi estas tro for por povi paroli.";
		}
	}

    return toret;
}

talkAction.doIt = function(s) {
    var toret = "";
    var persona = s.obj1;

	if ( s.term1 == null ) {
		toret = "Paroli sola ne ŝajnas bona ideo.";
	}
	else
	if ( persona == null ) {
		toret = "Tio ne troviĝas ĉirkaŭe.";
	}
	else {
		if ( typeof( persona.preTalk ) === "function" ) {
			toret = persona.preTalk();
		} else {
			toret = this.exe( s );
		}

		if ( typeof( persona.postTalk ) === "function" ) {
			persona.postTalk();
		}
	}

    return toret;
};

// -------------------------------------------------------------- Search
var searchAction = actions.crea( "search",
	[ "serĉi", "serci", "esplori" ]
);

searchAction.transInput = function(s) {
    var searchAction = actions.getAction( "search" );

    // Look in "mirar en" = search "registra"
    if ( lookAction.match( s )
      && s.prep === "en" )
    {
		s.prep = "";
		s.verb = searchAction.verbs[ 0 ];
    }

    return "";
}

searchAction.exe = function(s) {
    var toret = "";
    var objDest = s.obj1;

	if ( s.term1 == null ) {
		toret = "Kion?";
	}
	else
	if ( objDest == null ) {
		toret = "Tio ne troviĝas ĉirkaŭe.";
	}
    else {
        if ( !objDest.isReachable() ) {
            toret = "Ĝi ne estas atingebla.";
        } else {
            toret = "Vi trovis nenion specialan.";
        }
    }

    return toret;
}

searchAction.doIt = function(s)
{
    var toret = "";
    var objDest = s.obj1;

	if ( s.term1 == null ) {
		toret = "Kion?";
	}
	else
	if ( objDest == null ) {
		toret = "Tio ne troviĝas ĉirkaŭe.";
	}
	else {
		if ( typeof( objDest.preSearch ) === "function" ) {
			toret = objDest.preSearch();
		} else {
			toret = this.exe( s );
		}

		if ( typeof( objDest.postSearch ) === "function" ) {
			objDest.postSearch();
		}
	}

    return toret;
}

// ------------------------------------------------------------- Listen
var listenAction = actions.crea( "listen",
	[ "aŭskulti", "auskulti", "aŭdi",
      "audi" ]
);

listenAction.exe = function(s) {
    var toret = "";
    var objDest = s.obj1;

	if ( s.term1 == null ) {
		objDest = ctrl.places.getCurrentLoc();
	}

	if ( objDest == null ) {
		toret = "Tio ne troviĝas ĉirkaŭe.";
	}
    else {
        if ( !objDest.isReachable() ) {
            toret = "Ĝi ne estas atingebla.";
        } else {
            toret = "Vi aŭdas nenion specialan.";
        }
    }

    return toret;
}

listenAction.doIt = function(s)
{
    var toret = "";
    var objDest = s.obj1;

	if ( s.term1 == null ) {
		objDest = ctrl.places.getCurrentLoc();
	}

	if ( objDest == null ) {
		toret = "Tio ne troviĝas ĉirkaŭe.";
	}
	else {
		if ( typeof( objDest.preListen ) === "function" ) {
			toret = objDest.preListen();
		} else {
			toret = this.exe( s );
		}

		if ( typeof( objDest.postListen ) === "function" ) {
			objDest.postListen();
		}
	}

    return toret;
}

// --------------------------------------------------------------- Sing
var singAction = actions.crea( "sing",
	[ "kanti" ]
);

singAction.exe = function(s) {
    return "Preferinde ne: vi kantas tre malbone.";
}

singAction.doIt = function(s)
{
    var toret = "";
    var loc = ctrl.places.getCurrentLoc();

    if ( typeof( loc.preSing ) === "function" ) {
        toret = loc.preSing();
    } else {
        toret = this.exe( s );
    }

    if ( typeof( loc.postSing ) === "function" ) {
        loc.postSing();
    }

    return toret;
}

// --------------------------------------------------------------- Jump
var jumpAction = actions.crea( "jump",
	[ "salti" ]
);

jumpAction.transInput = function(s) {
    var climbAction = actions.getAction( "climb" );

    // "salta [a/sobre] x" => "sube a x"
    if ( this.match( s )
      && s.term1 != null )
    {
        s.verb = climbAction.verbs[ 0 ];
    }

    return "";
}

jumpAction.exe = function(s) {
    return "Lastmomente, vi decidas ne fari tion.";
}

jumpAction.doIt = function(s)
{
    var toret = "";
    var loc = ctrl.places.getCurrentLoc();

    if ( typeof( loc.preJump ) === "function" ) {
        toret = loc.preJump();
    } else {
        toret = this.exe( s );
    }

    if ( typeof( loc.postJump ) === "function" ) {
        loc.postJump();
    }

    return toret;
}

// --------------------------------------------------------------- Shout
var shoutAction = actions.crea( "shout",
	[ "krii" ]
);

shoutAction.exe = function(s) {
    return "Lastmomente vi decidas ne fari tion.";
}

shoutAction.doIt = function(s)
{
    var toret = "";
    var loc = ctrl.places.getCurrentLoc();

    if ( typeof( loc.preShout ) === "function" ) {
        toret = loc.preShout();
    } else {
        toret = this.exe( s );
    }

    if ( typeof( loc.postShout ) === "function" ) {
        loc.postShout();
    }

    return toret;
}

// ------------------------------------------------------------- Sleep
var sleepAction = actions.crea( "sleep",
	[ "dormi" ]
);

sleepAction.exe = function(s) {
    return "Lastmomente vi decidas ne fari tion.";
}

sleepAction.doIt = function(s)
{
    var toret = "";
    var loc = ctrl.places.getCurrentLoc();

    if ( typeof( loc.preSleep ) === "function" ) {
        toret = loc.preSleep();
    } else {
        toret = this.exe( s );
    }

    if ( typeof( loc.postSleep ) === "function" ) {
        loc.postSleep();
    }

    return toret;
}

// --------------------------------------------------------------- Taste
var tasteAction = actions.crea( "taste",
	[ "gustumi", "provi", "leki" ]
);

tasteAction.exe = function(s) {
    var toret = "";
    var objDest = s.obj1;

	if ( s.term1 == null ) {
		toret = "Kion?.";
	}
    else
	if ( objDest == null ) {
		toret = "Tio ne troviĝas ĉirkaŭe.";
	}
    else {
        if ( !objDest.isReachable() ) {
            toret = "Ĝi ne estas atingebla.";
        } else {
            toret = "Lastmomente vi decidas ne fari tion.";
        }
    }

    return toret;
}

tasteAction.doIt = function(s)
{
    var toret = "";
    var objDest = s.obj1;

	if ( s.term1 == null ) {
		toret = "Kion?";
	}
    else
	if ( objDest == null ) {
		toret = "Tio ne troviĝas ĉirkaŭe";
	}
	else {
		if ( typeof( objDest.preTaste ) === "function" ) {
			toret = objDest.preTaste();
		} else {
			toret = this.exe( s );
		}

		if ( typeof( objDest.postTaste ) === "function" ) {
			objDest.postTaste();
		}
	}

    return toret;
}

// --------------------------------------------------------------- Touch
var touchAction = actions.crea( "touch",
	[ "tuŝi", "tusi", "karesi" ]
);

touchAction.exe = function(s) {
    var toret = "";
    var objDest = s.obj1;

	if ( s.term1 == null ) {
		toret = "Kion?";
	}
    else
	if ( objDest == null ) {
		toret = "Tio ne troviĝas ĉirkaŭe.";
	}
    else {
        if ( !objDest.isReachable() ) {
            toret = "Ĝi ne estas atingebla.";
        } else {
            toret = "Lastmomente vi decidas ne fari tion.";
        }
    }

    return toret;
}

touchAction.doIt = function(s)
{
    var toret = "";
    var objDest = s.obj1;

	if ( s.term1 == null ) {
		toret = "Kion?";
	}
    else
	if ( objDest == null ) {
		toret = "Tio ne troviĝas ĉirkaŭe";
	}
	else {
		if ( typeof( objDest.preTouch ) === "function" ) {
			toret = objDest.preTouch();
		} else {
			toret = this.exe( s );
		}

		if ( typeof( objDest.postTouch ) === "function" ) {
			objDest.postTouch();
		}
	}

    return toret;
}

// --------------------------------------------------------------- Smell
var smellAction = actions.crea( "smell",
	[ "flari" ]
);

smellAction.exe = function(s) {
    var toret = "";
    var objDest = s.obj1;

	if ( s.term1 == null ) {
		toret = "Kion?";
	}
    else
	if ( objDest == null ) {
		toret = "Tio ne troviĝas ĉirkaŭe.";
	}
    else {
        if ( !objDest.isReachable() ) {
            toret = "Ĝi ne estas atingebla.";
        } else {
            toret = "Nenio vere odorinda.";
        }
    }

    return toret;
}

smellAction.doIt = function(s)
{
    var toret = "";
    var objDest = s.obj1;

	if ( s.term1 == null ) {
		toret = "Kion?";
	}
    else
	if ( objDest == null ) {
		toret = "Tio ne troviĝas ĉirkaŭe.";
	}
	else {
		if ( typeof( objDest.preSmell ) === "function" ) {
			toret = objDest.preSmell();
		} else {
			toret = this.exe( s );
		}

		if ( typeof( objDest.postSmell ) === "function" ) {
			objDest.postSmell();
		}
	}

    return toret;
}

// ---------------------------------------------------------------- Have
var haveAction = actions.crea( "have",
	[ "manĝi", "mangi", "trinki" ]
);

haveAction.exe = function(s) {
    var toret = "";
    var objDest = s.obj1;

	if ( s.term1 == null ) {
		toret = "Kion?";
	}
    else
	if ( objDest == null ) {
		toret = "Tio ne troviĝas ĉirkaŭe.";
	}
    else {
        if ( !objDest.isReachable() ) {
            toret = "Ĝi ne estas atingebla.";
        } else {
            toret = "Lastmomente vi decidas ne fari tion.";
        }
    }

    return toret;
}

haveAction.doIt = function(s)
{
    var toret = "";
    var objDest = s.obj1;

	if ( s.term1 == null ) {
		toret = "Kion?";
	}
    else
	if ( objDest == null ) {
		toret = "Tio ne troviĝas ĉirkaŭe.";
	}
	else {
		if ( typeof( objDest.preHave ) === "function" ) {
			toret = objDest.preHave();
		} else {
			toret = this.exe( s );
		}

		if ( typeof( objDest.postHave ) === "function" ) {
			objDest.postHave();
		}
	}

    return toret;
}

// ------------------------------------------------------------- Descend
var descendAction = actions.crea( "descend",
    [ "malsupreniri" ]
);

descendAction.transInput = function(s) {
    var loc = ctrl.places.getCurrentLoc();

    // Baja => ir abajo
    if ( this.match( s )
      && s.term1 == null )
    {
        s.verb = actions.getAction( "go" ).verbs[ 0 ];
        s.term1 = loc.compas[ 5 ];
    }

    return "";
}

descendAction.exe = function(s) {
    var toret = "";
    var objDest = s.obj1;

	if ( s.term1 == null ) {
		toret = "Kien?";
	}
    else
	if ( objDest == null ) {
		toret = "Tio ne troviĝas ĉirkaŭe.";
	}
    else {
        if ( !objDest.isReachable() ) {
            toret = "Ĝi ne estas atingebla.";
        } else {
            toret = "Lastmomente vi decidas ne fari tion.";
        }
    }

    return toret;
}

descendAction.doIt = function(s)
{
    var toret = "";
    var objDest = s.obj1;

	if ( s.term1 == null ) {
		toret = "Kien?";
	}
    else
	if ( objDest == null ) {
		toret = "Tio ne troviĝas ĉirkaŭe.";
	}
	else {
		if ( typeof( objDest.preDescend ) === "function" ) {
			toret = objDest.preDescend();
		} else {
			toret = this.exe( s );
		}

		if ( typeof( objDest.postDescend ) === "function" ) {
			objDest.postDescend();
		}
	}

    return toret;
}


// --------------------------------------------------------------- Climb
var climbAction = actions.crea( "climb",
	[ "supreniri", "grimpi" ]
);

climbAction.transInput = function(s) {
    var loc = ctrl.places.getCurrentLoc();

    // Sube => ir arriba
    if ( this.match( s )
      && s.term1 == null )
    {
        s.verb = actions.getAction( "go" ).verbs[ 0 ];
        s.term1 = loc.compas[ 4 ];
    }

    return "";
}

climbAction.exe = function(s) {
    var toret = "";
    var objDest = s.obj1;

	if ( s.term1 == null ) {
		toret = "Kion?";
	}
    else
	if ( objDest == null ) {
		toret = "Tio ne troviĝas ĉirkaŭe.";
	}
    else {
        if ( !objDest.isReachable() ) {
            toret = "Ĝi ne estas atingebla.";
        } else {
            toret = "Lastmomente vi decidas ne fari tion.";
        }
    }

    return toret;
}

climbAction.doIt = function(s)
{
    var toret = "";
    var objDest = s.obj1;

	if ( s.term1 == null ) {
		toret = "Kion?";
	}
    else
	if ( objDest == null ) {
		toret = "Tio ne troviĝas ĉirkaŭe.";
	}
	else {
		if ( typeof( objDest.preClimb ) === "function" ) {
			toret = objDest.preClimb();
		} else {
			toret = this.exe( s );
		}

		if ( typeof( objDest.postClimb ) === "function" ) {
			objDest.postClimb();
		}
	}

    return toret;
}

// --------------------------------------------------------------- Shake
var shakeAction = actions.crea( "shake",
	[ "skui", "svingi" ]
);

shakeAction.exe = function(s) {
    var toret = "";
    var objDest = s.obj1;

	if ( s.term1 == null ) {
		toret = "Kien?";
	}
    else
	if ( objDest == null ) {
		toret = "Tio ne troviĝas ĉirkaŭe.";
	}
    else {
        if ( !objDest.isReachable() ) {
            toret = "Ĝi ne estas atingebla.";
        } else {
            toret = "Lastmomente vi decidas ne fari tion.";
        }
    }

    return toret;
}

shakeAction.doIt = function(s)
{
    var toret = "";
    var objDest = s.obj1;

	if ( s.term1 == null ) {
		toret = "Kien?";
	}
    else
	if ( objDest == null ) {
		toret = "Tio ne troviĝas ĉirkaŭe.";
	}
	else {
		if ( typeof( objDest.preShake ) === "function" ) {
			toret = objDest.preShake();
		} else {
			toret = this.exe( s );
		}

		if ( typeof( objDest.postShake ) === "function" ) {
			objDest.postShake();
		}
	}

    return toret;
}

// ---------------------------------------------------------------- Show
var showAction = actions.crea( "show",
	[ "montri" ]
);

showAction.exe = function(s) {
    var toret = "";
    var objDest = s.obj1;
    var pnjDest = s.obj2;

	if ( s.term1 == null ) {
		toret = "Kion?";
	}
    else
	if ( s.term2 == null ) {
		toret = "al kiu vi montros tion?";
	}
    else {
		if ( objDest == null ) {
			toret = "Tio ne troviĝas ĉirkaŭe.";
		}
		else
		if ( pnjDest == null ) {
			toret = "Tio ne troviĝas ĉirkaŭe.";
		}
		else {
			if ( !( pnjDest instanceof Persona ) ) {
				toret = "Kion vi celas fari ne havas sencon.";
			}
			else
			if ( !objDest.isReachable()
			  || !pnjDest.isReachable() )
			{
				toret = "Ĝi ne estas atingebla.";
			} else {
				toret = "Lastmomente vi decidas ne fari tion.";
			}
		}
	}

    return toret;
}

showAction.doIt = function(s)
{
    var toret = "";
    var objDest = s.obj1;
    var pnjDest = s.obj2;

	if ( s.term1 == null ) {
		toret = "Kion vi volas montri?";
	}
    else
	if ( s.term2 == null ) {
		toret = "Al kiu vi volas montri tion?";
	}
    else {
		if ( objDest == null ) {
			toret = "Tio ne troviĝas ĉirkaŭe.";
		}
		else
		if ( pnjDest == null ) {
			toret = "Tio ne troviĝas ĉirkaŭe.";
		}
		else {
			if ( typeof( objDest.preShow ) === "function" ) {
				toret = objDest.preShow();
			} else {
				toret = this.exe( s );
			}

			if ( typeof( objDest.postShow ) === "function" ) {
				objDest.postShow();
			}
		}
	}

    return toret;
}

// ---------------------------------------------------------------- Give
var giveAction = actions.crea( "give",
	[ "doni", "transdoni" ]
);

giveAction.exe = function(s) {
    var toret = "";
    var objDest = s.obj1;
    var pnjDest = s.obj2;

	if ( s.term1 == null ) {
		toret = "Kion?";
	}
    else
	if ( s.term2 == null ) {
		toret = "al kiu?";
	}
    else {
		if ( objDest == null ) {
			toret = "Tio ne troviĝas ĉirkaŭe.";
		}
		else
		if ( pnjDest == null ) {
			toret = "Tio ne troviĝas ĉirkaŭe.";
		}
		else {
			if ( !( pnjDest instanceof Persona ) ) {
				toret = "Kion vi celas fari ne havas sencon.";
			}
			else
			if ( !objDest.isReachable()
			  || !pnjDest.isReachable() )
			{
				toret = "Ĝi ne estas atingebla.";
			} else {
				toret = actions.execute( "drop", objDest.id, pnjDest.id );
			}
		}
	}

    return toret;
}

giveAction.doIt = function(s)
{
    var toret = "";
    var objDest = s.obj1;
    var pnjDest = s.obj2;

	if ( s.term1 == null ) {
		toret = "Kion?";
	}
    else
	if ( s.term2 == null ) {
		toret = "al kiu?";
	}
    else {
		if ( objDest == null ) {
			toret = "Tio ne troviĝas ĉirkaŭe.";
		}
		else
		if ( pnjDest == null ) {
			toret = "Tio ne troviĝas ĉirkaŭe.";
		}
		else {
			if ( typeof( objDest.preGive ) === "function" ) {
				toret = objDest.preGive();
			} else {
				toret = this.exe( s );
			}

			if ( typeof( objDest.postGive ) === "function" ) {
				objDest.postGive();
			}
		}
	}

    return toret;
}

// ---------------------------------------------------------------- Tie
var tieAction = actions.crea( "tie",
	[ "ligi", "botonumi" ]
);

tieAction.exe = function(s) {
    var toret = "";
    var obj1Dest = s.obj1;
    var obj2Dest = s.obj2;

	if ( s.term1 == null ) {
		toret = "Kion?";
	}
    else
	if ( s.term2 == null ) {
		toret = "al kio?";
	}
    else {
		if ( obj1Dest == null
          || obj2Dest == null )
        {
			toret = "Tio ne troviĝas ĉirkaŭe.";
		}
		else {
			if ( !obj1Dest.isReachable()
			  || !obj2Dest.isReachable() )
			{
				toret = "Ĝi ne estas atingebla.";
			} else {
				toret = "Lastmomente vi decidas ne fari tion.";
			}
		}
	}

    return toret;
}

tieAction.doIt = function(s)
{
    var toret = "";
    var obj1Dest = s.obj1;
    var obj2Dest = s.obj2;

	if ( s.term1 == null ) {
		toret = "Deber&iacuteas especificar lo qu&eacute;.";
	}
    else
	if ( s.term2 == null ) {
		toret = "Deber&iacuteas especificar con qu&eacute;.";
	}
    else {
		if ( obj1Dest == null ) {
			toret = "No veo eso en derredor.";
		}
		else
		if ( obj2Dest == null ) {
			toret = "No lo veo en derredor.";
		}
		else {
			if ( typeof( obj1Dest.preTie ) === "function" ) {
				toret = obj1Dest.preTie();
			} else {
				toret = this.exe( s );
			}

			if ( typeof( obj1Dest.postTie ) === "function" ) {
				obj1Dest.postTie();
			}
		}
	}

    return toret;
}

// ---------------------------------------------------------------- Dig
var digAction = actions.crea( "dig",
	[ "fosi", "kavigi" ]
);

digAction.exe = function(s) {
    var toret = "";
    var obj1Dest = s.obj1;
    var obj2Dest = s.obj2;

	if ( s.term1 == null ) {
		toret = "kion?";
	}
    else
	if ( s.term2 == null ) {
		toret = "Per kio?";
	}
    else {
		if ( obj1Dest == null
          || obj2Dest == null )
        {
			toret = "Tio ne troviĝas ĉirkaŭe.";
		}
		else {
			if ( !obj1Dest.isReachable()
			  || !obj2Dest.isReachable() )
			{
				toret = "Ĝi ne estas atingebla.";
			} else {
				toret = "Lastmomente vi decidas ne fari tion.";
			}
		}
	}

    return toret;
}

digAction.doIt = function(s)
{
    var toret = "";
    var obj1Dest = s.obj1;
    var obj2Dest = s.obj2;

	if ( s.term1 == null ) {
		toret = "Kion?";
	}
    else
	if ( s.term2 == null ) {
		toret = "Per kio?";
	}
    else {
		if ( obj1Dest == null ) {
			toret = "Tio ne troviĝas ĉirkaŭe.";
		}
		else
		if ( obj2Dest == null ) {
			toret = "Tio ne troviĝas ĉirkaŭe.";
		}
		else {
			if ( typeof( obj1Dest.preDig ) === "function" ) {
				toret = obj1Dest.preDig();
			} else {
				toret = this.exe( s );
			}

			if ( typeof( obj1Dest.postDig ) === "function" ) {
				obj1Dest.postDig();
			}
		}
	}

    return toret;
}

// ----------------------------------------------------------------- Put
var putAction = actions.crea( "put",
	[ "meti", "loki", "surmeti" ]
);

putAction.transInput = function(s) {
    var dropAction = actions.getAction( "drop" );
    var wearAction = actions.getAction( "wear" );

    if ( this.match( s ) ) {
        if ( s.prep === "sur"
          || s.prep === "en" )
        {
            s.verb = dropAction.verbs[ 0 ];
        } else {
            s.verb = wearAction.verbs[ 0 ];
        }
    }

    return "";
}

// -------------------------------------------------------------- Insert
var insertAction = actions.crea( "insert",
	[ "enmeti", "enigi" ]
);

insertAction.transInput = function(s) {
    var dropAction = actions.getAction( "drop" );
    var toret = "";

    if ( this.match( s ) ) {
        if ( s.term1 != null
          && s.term2 != null )
        {
            s.verb = dropAction.verbs[ 0 ];
        } else {
            toret = "En kion?...";
        }
    }

    return toret;
}

// ------------------------------------------------------------- Extract
var extractAction = actions.crea( "extract",
	[ "eligi", "eltiri", "elpreni" ]
);

extractAction.transInput = function(s) {
    var takeAction = actions.getAction( "take" );
    var toret = "";

    if ( this.match( s ) ) {
        if ( s.term1 != null
          && s.term2 != null )
        {
            s.verb = takeAction.verbs[ 0 ];
        } else {
            toret = "El kie?...";
        }
    }

    return toret;
}

// ---------------------------------------------------------------- Wear
var wearAction = actions.crea( "wear",
	[ "vesti", "surmeti"
    ]
);

wearAction.exe = function(s) {
    var toret = "";
    var objDest = s.obj1;

	if ( s.term1 == null ) {
		toret = "Kion?";
	}
    else {
		if ( objDest == null ) {
			toret = "Tio ne troviĝas ĉirkaŭe.";
		}
		else {
			if ( !objDest.isReachable() ) {
				toret = "Ĝi ne estas atingebla.";
			} else {
                if ( objDest.isClothing() ) {
                    if ( !objDest.isWorn() ) {
                        objDest.setWorn();
                        toret = "Farite.";
                    } else {
                        toret = "Vi jam portas tion.";
                    }
                } else {
                    toret = "Tio ne estas vestaĵo.";
                }
			}
		}
	}

    return toret;
}

wearAction.doIt = function(s)
{
    var toret = "";
    var objDest = s.obj1;
    var player = ctrl.personas.getPlayer();

	if ( s.term1 == null ) {
		toret = "Kion?";
	}
    else {
		if ( objDest == null ) {
			toret = "Tio ne troviĝas ĉirkaŭe.";
		}
		else {
            if ( !player.has( objDest ) ) {
                actions.execute( "take", s.term1 );

                if ( !player.has( objDest ) ) {
                    return;
                }
            }

			if ( typeof( objDest.preWear ) === "function" ) {
				toret = objDest.preWear();
			} else {
				toret = this.exe( s );
			}

			if ( typeof( objDest.postWear ) === "function" ) {
				objDest.postWear();
			}
		}
	}

    return toret;
}

// ----------------------------------------------------------- Disrobe
var disrobeAction = actions.crea( "disrobe",
	[ "demeti", "malvesti"
    ]
);

disrobeAction.exe = function(s) {
    var toret = "";
    var objDest = s.obj1;

	if ( s.term1 == null ) {
		toret = "Kion?";
	}
    else {
		if ( objDest == null ) {
			toret = "Tio ne troviĝas ĉirkaŭe.";
		}
		else {
			if ( !objDest.isReachable() ) {
				toret = "Ĝi ne estas atingebla.";
			} else {
                if ( objDest.owner === ctrl.personas.getPlayer()
                  && objDest.isClothing()
                  && objDest.isWorn() )
                {
                    objDest.setWorn( false );
                    toret = "Farite.";
                } else {
                    toret = "Vi ne portas tion.";
                }
			}
		}
	}

    return toret;
}

disrobeAction.doIt = function(s)
{
    var toret = "";
    var objDest = s.obj1;
    var pnjDest = s.obj2;

	if ( s.term1 == null ) {
		toret = "Kion?";
	}
    else {
		if ( objDest == null ) {
			toret = "Tio ne troviĝas ĉirkaŭe.";
		}
		else {
			if ( typeof( objDest.preDisrobe ) === "function" ) {
				toret = objDest.preDisrobe();
			} else {
				toret = this.exe( s );
			}

			if ( typeof( objDest.postDisrobe ) === "function" ) {
				objDest.postDisrobe();
			}
		}
	}

    return toret;
}

// ---------------------------------------------------------------- Status
var statusAction = actions.crea( "status",
	[ "vicoj", "statistikoj", "poentoj" ]
);

statusAction.exe = function(s) {
	var player = ctrl.personas.getPlayer();
	var turns = ctrl.getTurns();
	var toret = "Vi interagis " + turns + " fojojn";

	if ( turns == 1 ) {
		toret += " turno.";
	} else {
		toret += " turnos.";
	}

	if ( ctrl.hasScore() ) {
		toret += "<br> Via nombro de poentoj estas: " + player.score;
	}

    return toret;
}

statusAction.doIt = function(s) {
    var toret = "";
    var player = ctrl.personas.getPlayer();

    if ( typeof( player.preStatus ) === "function" ) {
        toret = player.preStatus();
    } else {
        toret = this.exe( s );
    }

    if ( typeof( player.postStatus ) === "function" ) {
        objDest.postStatus();
    }

    return toret;
}

// ---------------------------------------------------------------- Wait
var waitAction = actions.crea( "wait",
	[ "atendi", "z" ]
);

waitAction.exe = function(s) {
    return "Vi atentas iomete.";
}

waitAction.doIt = function(s) {
    var toret = "";
    var player = ctrl.personas.getPlayer();

    if ( typeof( player.preWait ) === "function" ) {
        toret = player.preWait();
    } else {
        toret = this.exe( s );
    }

    if ( typeof( player.postWait ) === "function" ) {
        objDest.postWait();
    }

    return toret;
}
