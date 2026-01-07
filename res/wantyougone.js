// want-you-gone-web: the script
// Portal 2 ending credits adaptation

const CURSOR_BLINK_TIME = 300; // 0.3 seconds in ms
const LYRICS_COLOR = "rgba(240, 182, 0, 0.27)"; // 240 182 0 70 (70/255 ≈ 0.27)
const CREDITS_COLOR = "rgba(0, 0, 0, 0.75)"; // 0 0 0 192 (192/255 ≈ 0.75)
const SONG_START_TIME = 0;
const SCROLL_TIME = 35; // scrolltime in ms per character
const SCROLL_CREDITS_START = 5000; // 5 seconds in ms (when "Well here we are again" starts)
const LINE_SEPARATION = 5; // separation between lines

const CREDIT_DATA = [		// Portal 2 credits
	">LIST PERSONNEL",
	"Michael Abrash",
	"Mike Ambinder",
	"Matthew An",
	"Elizabeth Andrade",
	"Max Aristov",
	"Ricardo Ariza",
	"Gautam Babbar",
	"Ted Backman",
	"William Bacon",
	"Jeff Ballinger",
	"Ken Banks",
	"Aaron Barber",
	"Jeep Barnett",
	"John Bartkiw",
	"Mark Behm",
	"Mike Belzer",
	"Caleb Benefiel",
	"Jeremy Bennett",
	"Dan Berger",
	"Yahn Bernier",
	"Amanda Beste",
	"Ken Birdwell",
	"Derrick Birum",
	"Mike Blaszczak",
	"Iestyn Bleasdale-Shepherd",
	"Steve Bond",
	"Matt Boone",
	"Michael Booth",
	"Antoine Bourdon",
	"Christopher Boyd",
	"Jason Brashill",
	"Charlie Brown",
	"Jeff Brown",
	"Tom Bui",
	"Charlie Burgin",
	"Andrew Burke",
	"Augusta Butlin",
	"Tobin Buttram",
	"Liz Cambridge",
	"Heather Campbell",
	"Matt Campbell",
	"Chris Carollo",
	"Dario Casali",
	"Matt Charlesworth",
	"Pongthep Bank Charnchaichujit",
	"Grégoire Cherlin",
	"Chris Chin",
	"Kurtis Chinn",
	"Jared Christen",
	"Doug Church",
	"Jess Cliffe",
	"Phil Co",
	"John Cook",
	"Christen Coomer",
	"Greg Coomer",
	"Michael Coupland",
	"Scott Dalton",
	"Kerry Davis",
	"Kyle Davis",
	"Bruce Dawson",
	"Joe Demers",
	"Ariel Diaz",
	"Viktoria Dillon",
	"Quintin Doroquez",
	"Chris Douglass",
	"Shanon Drone",
	"Laura Dubuk",
	"Mike Dunkle",
	"Fletcher Dunn",
	"Mike Durand",
	"Marcus Egan",
	"Zach Eller",
	"Dhabih Eng",
	"Brett English",
	"Miles Estes",
	"Chet Faliszek",
	"Al Farnsworth",
	"Dave Feise",
	"Adrian Finol",
	"Bill Fletcher",
	"Adam Foster",
	"Zachary Franks",
	"Reuben Fries",
	"Stephane Gaudette",
	"Rich Geldreich",
	"Vitaliy Genkin",
	"Derrick Gennrich",
	"Cayle George",
	"Henry Goffin",
	"Paul Graham",
	"Chris Green",
	"Bronwen Grimes",
	"Chris Grinstead",
	"John Guthrie",
	"Aaron Halifax",
	"Jeff Hameluck",
	"Joe Han",
	"Romy Hatfield",
	"Nate Heller",
	"Don Holden",
	"Jason Holtman",
	"Eric Hope",
	"Gray Horsfield",
	"Keith Huggins",
	"Jim Hughes",
	"Brandon Idol",
	"Brian Jacobson",
	"Lars Jensvold",
	"Burton Johnsey",
	"Erik Johnson",
	"Rick Johnson",
	"Adrian Johnston",
	"Jakob Jungels",
	"Neil Kaethler",
	"Rich Kaethler",
	"Steve Kalning",
	"Kristopher Katz",
	"Aaron Kearly",
	"Emily Kent",
	"Iikka Keränen",
	"Andrew Kim",
	"David Kircher",
	"Eric Kirchmer",
	"Zoid Kirsch",
	"Tejeev Kohli",
	"Peter Konig",
	"Ted Kosmatka",
	"Alden Kroll",
	"Laure Lacascade",
	"Marc Laidlaw",
	"Stefan Landvogt",
	"Jeff Lane",
	"Keith Lango",
	"Tim Larkin",
	"Liam Lavery",
	"Jinwoo Lee",
	"Isabelle Lemay",
	"Tom Leonard",
	"Justin Lesamiz",
	"Jeff Lind",
	"Jon Lippincott",
	"Jane Lo",
	"Matt Logue",
	"Doug Lombardi",
	"Andrew Loomer",
	"Richard Lord",
	"Realm Lovejoy",
	"Joe Ludwig",
	"Scott Ludwig",
	"Randy Lundeen",
	"Roger Lundeen",
	"Scott Lynch",
	"Antonello Maddalena",
	"Ido Magal",
	"Nick Maggiore",
	"Yasser Malaika",
	"Connor Malone",
	"Alexander Mark",
	"Michael Marcus",
	"John McCaskey",
	"Patrick McClard",
	"Noel McGinn",
	"Hamish McKenzie",
	"Gary McTaggart",
	"Sergiy Migdalskiy",
	"Jason Mitchell",
	"Caroline Müller",
	"Kyle Monroe",
	"Mike Morasky",
	"John Morello II",
	"Chandler Murch",
	"Jim Murray",
	"Marc Nagel",
	"Olivier Nallet",
	"Arsenio N. Navarro II",
	"Dina Nelson",
	"Gabe Newell",
	"Milton Ngan",
	"Aaron Nicholls",
	"Matt Nickerson",
	"Andy Nisbet",
	"Michael Avon Oeming",
	"Martin Otten",
	"Corey Peters",
	"Christine Phelan",
	"Jay Pinkerton",
	"DJ Powers",
	"Karen Prell",
	"Matt Pritchard",
	"Bay Raitt",
	"Lindsay Randall",
	"Alireza Razmpoosh",
	"Tristan Reidford",
	"Brandon Reinhart",
	"Alfred Reynolds",
	"Matt Rhoten",
	"Mark Richardson",
	"Garret Rickey",
	"Dave Riller",
	"Ted Rivera",
	"Christian Rivers",
	"Erik Robson",
	"Joe Rohde",
	"Elan Ruskin",
	"Matthew Russell",
	"Jason Ruymen",
	"Phillip Saltzman",
	"Michael Sartain",
	"Dave Saunders",
	"David Sawyer",
	"Marc Scaparro",
	"Thorsten Scheuermann",
	"Florent Schiffer",
	"Wade Schin",
	"Matthew Scott",
	"Gregory Sedgwick",
	"Aaron Seeler",
	"Chris Shambaugh",
	"Taylor Sherman",
	"James Shin",
	"Joel Shoop",
	"Ivan Simoncini",
	"Justin Skinner",
	"Eric Smith",
	"Jacob J. Smith",
	"Jeff Sorensen",
	"David Speyrer",
	"Kutta Srinivasan",
	"Mellissa Stanfield",
	"Jay Stelly",
	"Jenny Stendahl",
	"Mike Stevens",
	"Eric Strand",
	"Jonathan Sutton",
	"Anna Sweet",
	"Eric Tams",
	"Ryan Thorlakson",
	"Kelly Thornton",
	"Paul G. Thuriot",
	"Greg Towner",
	"Ray Ueno",
	"Jeff Unay",
	"Doug Valente",
	"Bill Van Buren",
	"Gabe Van Engel",
	"Alex Vlachos",
	"Robin Walker",
	"Eric Wanless",
	"Chad Weaver",
	"Joshua Weier",
	"Chris Welch",
	"Thad Wharton",
	"Karl Whinnie",
	"Andrea Wicklund",
	"Andrew Wolf",
	"Erik Wolpaw",
	"Doug Wood",
	"Matt T. Wood",
	"Danika Wright",
	"Matt Wright",
	"Pieter Wycoff",
	"Shawn Zabecki",
	"Torsten Zabka",
	"",
	"",
	"Voices:",
	"Ellen McLain - GlaDOS, Turrets",
	"Stephen Merchant - Wheatley",
	"J.K. Simmons - Cave Johnson",
	"Joe Michaels - Announcer",
	"Nolan North - Cores,",
	"              Defective Turrets",
	"Dee Bradley Baker - Atlas,",
	"                    P-Body",
	"",
	"",
	"Thanks for the use of their face:",
	"Alesia Glidewell - Chell",
	"",
	"",
	"Songs:",
	"'Exile Vilify'",
	"Written by Matthew Berninger",
	"and Aaron Dessner",
	"Published by",
	"Val Jester Music (ASCAP)",
	"and ABD 13 Music (ASCAP)",
	"administered by Bug",
	"Performed by The National",
	"",
	"'Still Alive' by:",
	"Jonathan Coulton",
	"",
	"'Want You Gone' by:",
	"Jonathan Coulton",
	"",
	"",
	"Voice Recording:",
	"Pure Audio, Seattle, WA",
	"",
	"",
	"Translations:",
	"SDL",
	"",
	"",
	"Special thanks to everyone at:",
	"Alienware",
	"ATI",
	"Dell",
	"Falcon Northwest",
	"Havok",
	"Sam Gray",
	"Jamie Hunsdale",
	"",
	"Photo credit of Earth:",
	"NASA",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	""
];
let creditCurrentPosition = 0;

const TERMINAL_CURSOR_BLINK_INTERVAL = CURSOR_BLINK_TIME;
let terminalCursorElem = $("<span id='terminal_cursor'>_</span>");
let terminalCreditCursorElem = $("<span id='terminal_cursor_credit'>_</span>");

let gettingfaster = false;

positionTerminalCursor($(".container_lyrics_before_loading>span"));
startBlinkTerminalCursor();
setTimeout(function() {
    for(let i = 0, len = 16; i < len; i++) $(".container_credits").append("<span class='row row" + i + "' ></span>" + (i != len - 1 ? "<br class='force-display'>" : ""));
    terminalCreditCursorElem.appendTo($(".container_credits"));
    startBlinkCreditTerminalCursor();
}, SCROLL_CREDITS_START);

$("#wantyougone_bgm").on("canplaythrough", function() {
    $(".container_lyrics_before_loading").remove();

    $(".container_lyrics_before_mobile").css("display", "block");
    positionTerminalCursor($(".container_lyrics_before_mobile>span"));
});

$(".container_lyrics_before_mobile>a").click(function() {
    $(".container_lyrics_before_mobile").remove();

    startTypingCurrentLyrics();
    startChangeLyricsContainer();
    $("#wantyougone_bgm")[0].play();
    
    $("body").addClass("playing");
    
    setTimeout(function() { startTypingCredits(); }, SCROLL_CREDITS_START);
});

function startTypingCurrentLyrics() {
    $(".container_lyrics.current").children().each(function() {
        let tagName = $(this).prop("tagName").toLowerCase();
        
        if(tagName == "pre") {
            if($(this).data("start") != undefined) {
                let that = this;
                setTimeout(function() {
                    $(that).addClass("typed");
                }, parseInt($(this).data("start")));
            }
        } else if(tagName != "br") {
            if($(this).data("start") != undefined &&
                $(this).data("dur") != undefined &&
                $(this).data("text") != undefined) {
                    let that = this;

                    setTimeout(function() {
                        if($(that).data("asciiart") != undefined) changeAsciiArt($(that).data("asciiart"));
                        if($(that).hasClass("play-game")) gettingfaster = true;

                        typeOneByOne($(that),
                                    $(that).data("text"),
                                    parseInt($(that).data("dur")),
                                    $(that).data("append-br"));
                    }, parseInt($(this).data("start")));
            }
        } else if(tagName == "br") {
            if($(this).data("show-offset") != undefined) {
                let that = this;
                setTimeout(function() {
                    $(that).css("display", "block");
                    positionTerminalCursor($(that));
                }, parseInt($(this).data("show-offset")));
            }
        }
    });
}

function startTypingCredits() {
    if(creditCurrentPosition < CREDIT_DATA.length) {
        let curCredit = CREDIT_DATA[creditCurrentPosition];

        for(let i = 1, l = 16; i < l; i++) $(".container_credits>span.row" + (i - 1)).text($(".container_credits>span.row" + i).text());

        typeCreditOneByOne(curCredit, SCROLL_TIME * (curCredit == "" ? 1 : curCredit.length));
        creditCurrentPosition++;
    }
}

function startChangeLyricsContainer() {
    $(".container_lyrics").each(function() {
        if($(this).data("start") != undefined) {
            let that = this;

            setTimeout(function() {
                $(".container_lyrics.current").remove();
                $(that).addClass("current");
                startTypingCurrentLyrics();

                if($(that).hasClass("celebrate_credit")) changeAsciiArtRandomly(5000);
            }, parseInt($(this).data("start")));
        }
    });
}

function typeOneByOne(targetElem, text, duration, shouldAppendBR) {
    let timeoutPerChar = duration / text.length;
    let chars = text.split("");
    let charIdx = 0;

    positionTerminalCursor($(targetElem));

    if(shouldAppendBR) timeoutPerChar = duration / (chars.length + 1);

    for(let i = 0, n = chars.length + (shouldAppendBR ? 1 : 0); i < n; i++) {
        if(chars[i] == " ") chars[i] = "&nbsp;";

        setTimeout(function() {
            if(shouldAppendBR && charIdx == chars.length) {
                let newBR = $("<br class='force-display'>");
                newBR.insertAfter($(targetElem));
                positionTerminalCursor(newBR);
            } else $(targetElem).append(chars[charIdx++]);
        }, timeoutPerChar * i);
    }
}

function typeCreditOneByOne(text, duration) {
    let targetElem = $(".container_credits>span.row15");
    $(targetElem).text("");

    if(text != "") {
        let timeoutPerChar = duration / text.length;
        let chars = text.split("");
        let charIdx = 0;

        positionCreditTerminalCursor($(targetElem));

        for(let i = 0, n = chars.length + 1; i < n; i++) {
            setTimeout(function() {
                $(targetElem).append(chars[charIdx++]);

                if(charIdx == chars.length + 1) startTypingCredits();
            }, timeoutPerChar * i);
        }
    } else setTimeout(startTypingCredits, duration);
}

function positionTerminalCursor(currentLineElem) {
    $("#terminal_cursor").remove();
    terminalCursorElem.insertAfter($(currentLineElem));
}

function positionCreditTerminalCursor(currentLineElem) {
    $("#terminal_cursor_credit").remove();
    terminalCreditCursorElem.insertAfter($(currentLineElem));
}

function startBlinkTerminalCursor() {
    return setInterval(function() {
        if(terminalCursorElem.css("display") == undefined ||
            terminalCursorElem.css("display") == "inline-block")
            terminalCursorElem.css("display", "none");
        else
            terminalCursorElem.css("display", "");
    }, TERMINAL_CURSOR_BLINK_INTERVAL);
}

function startBlinkCreditTerminalCursor() {
    return setInterval(function() {
        if(terminalCreditCursorElem.css("display") == undefined ||
            terminalCreditCursorElem.css("display") == "inline-block")
            terminalCreditCursorElem.css("display", "none");
        else
            terminalCreditCursorElem.css("display", "");
    }, TERMINAL_CURSOR_BLINK_INTERVAL);
}

function changeAsciiArt(aaname) {
    $(".container_asciiart>pre.display").removeClass("display");
    if(aaname != "clear") $(".container_asciiart>pre.asciiart_" + aaname).addClass("display");
}

function changeAsciiArtRandomly(loopdelay) {
    setTimeout(function() {
        let rand = parseInt(Math.random() * $(".container_asciiart>pre").length);
        $(".container_asciiart>pre.display").removeClass("display");
        $($(".container_asciiart>pre").get(rand)).addClass("display");

        if(loopdelay <= 800) $("html, body").addClass("gettingfasterandfaster");
        else if(loopdelay <= 2500) $("html, body").addClass("gettingfaster");

        changeAsciiArtRandomly((loopdelay <= 50 ? 50 : loopdelay - (gettingfaster ? 39 : 0)));
    }, loopdelay);
}

function generateRandomASCIIColumn() {
    const chars = ['█', '▄', '▀', '■', '▪', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    let lines = [];
    for (let i = 0; i < 50; i++) {
        let line = '';
        for (let j = 0; j < 24; j++) {
            line += chars[Math.floor(Math.random() * chars.length)];
        }
        lines.push(line);
    }
    
    return lines.join('\n') + '\n';
}

function getStaticNumbers() {
    return "2.67\n1002\n45.6";
}

function initAnimationBoxes() {
    const asciiStreamDown = document.getElementById('ascii_stream_down');
    const asciiStreamUp = document.getElementById('ascii_stream_up');
    const numbersDisplay = document.getElementById('numbers_display');
    
    if(asciiStreamDown) {
        const asciiContent = generateRandomASCIIColumn();
        asciiStreamDown.textContent = asciiContent + asciiContent;
    }
    
    if(asciiStreamUp) {
        const asciiContent = generateRandomASCIIColumn();
        asciiStreamUp.textContent = asciiContent + asciiContent;
    }
    
    if(numbersDisplay) {
        numbersDisplay.textContent = getStaticNumbers();
    }
}

$(document).ready(function() {
    initAnimationBoxes();
});
