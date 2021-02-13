	/*https://github.com/janelleshane/candy-hearts*/
    var phrases = ["LAUGH", "RECIPE 4 LOVE", "TABLE 4 TWO", "STIR MY HEART", "MY TREAT", "TOP CHEF", "SUGAR PIE", "SWEET LOVE", "HONEY BUN", "SPICE IT UP", "YUM YUM", "MELT MY ♥", "IN A FOG", "CHILL OUT", "CLOUD NINE", "HEAT WAVE", "SUN SHINE", "GET MY DRIFT", "WILD LIFE", "NATURE LOVER", "DO GOOD", "COOL CAT", "PUPPY LOVE", "TAKE A WALK", "MY PET", "BEAR HUG", "TOP DOG", "URA TIGER", "GO FISH", "LOVE BIRD", "PURR FECT", "HOUSE PARTY", "HOME RUN", "CALL HOME", "SWEET HOME", "GO HOME", "HOME SOON", "HOME SICK", "#1 FAN", "DREAM TEAM", "FIT FOR LOVE", "LOVE LIFE", "BE A SPORT", "LOVE MY TEAM", "CHEER ME ON", "BE MY HERO", "HEART OF GOLD", "ALL-STAR", "3 WISHES", "EVER AFTER", "NEW YOU", "MAGICNEW LOVE", "DREAM", "CHARM ME", "START NOW", "IM ME", "WRITE ME", "CLASS ACT", "WHIZ KID", "WISE UP", "TEACH ME", "LOVE LETTER", "PEN PAL", "BOOK CLUB", "SCHOOL MATE", "LET’S READ", "LOOK GOOD", "IN STYLE", "VOGUE", "TRES CHIC", "DRESS UP", "DIVA", "WHAT’S UP", "URA QT", "THAT SMILE", "TWO HEARTS", "LOVE 2001", "ODYSSEY", "MOON BEAM", "UR A STAR", "VENUS", "STAR DUST", "RISING STAR", "YOU & ME", "TOO SWEET", "THANK YOU", "AMORE", "ROMEO", "SWING TIME", "IN THE MOOD", "MUCH ADO", "2000 HUGS", "2000 KISSES", "GOT LOVE", "TIME OUT", "PEACE SYMBOL", "YOU ROCK", "LET’S DO LUNCH", "I WONDER", "1-800 CUPID", "AS IF", "LOVE ME TENDER", "MY WAY", "I GOT U BABE", "LET IT BE", "WALK ON BY", "YOU GO, GIRL", "YEAH RIGHT", "WWW.CUPID", "BE MY ICON", "FAX ME", "PAGE ME", "NO WAY", "COOL DUDE", "SWEET PEA", "BE HAPPY", "BEST DAY", "LET’S READ", "LOVE BUG", "DIG ME", "HOT CHA", "SAUCY BOY", "GIRL POWER", "OH YOU KID", "WHY NOT", "GROOVY", "MY, SUCH EYES", "TELL ME HOW", "YOU ARE LATE", "OH BOY", "YOU ARE GAY", "OOH LA LA", "WICKED COOL", "OCCUPY MY <3", "LET’S READ", "LIVE N LOVE", "#LOVE", "1 4 3", "DREAM BIG", "SHINE BRITE", "GIGGLE", "ANGEL", "ASK ME", "BE MINE", "CALL ME", "CRAZY 4 U", "QT PIE", "FIRST KISS", "HOLD HANDS", "HUG ME", "KISS ME", "LOVE ME", "I LOVE YOU", "MARRY ME", "YOU & I", "MISS YOU", "MY LOVE", "REAL <3", "SAY YES", "SOUL MATE", "SWEET TALK", "TXT ME", "TRUE LOVE", "TWEET", "U R HOT", "WINK WINK", "XOXO", "LET’S KISS", "MELT MY <3", "SWEET STUFF", "DATE NITE", "PUGS N KITTENS", "LUV 2 DANCE", "ALL MINE", "GUESS WHO", "LUSH LIPS", "ANGEL FACE", "HAPPY BIRTHDAY", "MAKE UP", "BE GOOD", "HARD LUCK", "MY ALL", "HEART DESIRE", "MY ANGEL", "BEST MATE", "HEART THROB", "MY BOY", "BLESS YOU", "HELLO", "MY GIRL", "BLUE EYES", "HI BABY", "MY HERO", "BYE BYE", "HOLD ME", "MY IDEAL", "CANNY LAD", "HOW NICE", "NEAT", "CATCH ME", "NEW LOVE", "CHASE ME", "HUNK", "CHEEKY BOY", "I HOPE", "ONLY YOU", "REAL LOVE", "CHEER UP", "I SPY", "RELAX", "I SURRENDER", "COOL KID", "IN LOVE", "SMILE", "CRAZY", "I'M SHY", "SPOIL ME", "CUDDLE ME", "ITS LOVE", "SWEET HEART", "CUTE KID", "ITS TRUE", "SWEET KISS", "DEAR ONE", "I WANT U", "SWEET YOU", "DISHY", "JUST ME", "TAKE IT EASY", "DREAM BOY", "KEEP COOL", "DREAM GIRL", "TOO MUCH", "DREAM ON", "LETS DANCE", "LETS KISS", "TRY ME", "EVER YOURS", "LIKE YOU", "WICKED", "FIND ME", "LITTLE KISS", "WILL YOU", "FIRST LOVE", "LOOKING GOOD", "WOW", "FOR EVER", "YES DEAR", "FOR KEEPS", "LOVE HEART", "YOU AND I", "FUNNY FACE", "LOVE YOU", "YOU WIN", "GOOD PALS", "LOVER", "YOU'RE FAB", "GREAT GUY", "LUCK LIPS", "YOU'RE GORGEOUS", "GROW UP", "LUCKY LIPS", "YOU'RE MINE", "YOURS", "YAAS", "U UP?", "SWIPE RIGHT", "1 ON 1", "AWE-SOME", "BLING", "BOOGIE", "BFF", "FRIEND ME", "GAME ON", "GET REAL", "GOT LUV?", "HIGH FIVE", "LET’S RIDE", "LOL", "MAD 4 U", "PEACE", "PLAY TIME", "SHAKE IT", "SUP BABE", "TIME 2 DANCE", "TTYL", "U MOVE ME", "WHUZ UP?", "PROPER", "BOTHERED", "IN IT", "YOU WHAT", "WHATEVER", "MINT", "RESPECT ", "GRANNY P", "HAPPY HARRY", "HEART BABY", "ME JULIE BEST MUM", "MERMAID ELOISE", "I LUV ALAN", "JOYFUL JO", "JUICY JESSIE", "KIN OF U HOME", "THINK PINK", "HOW R U", "THUMBS UP", ":D", "FOREVER TOGETHER", "ALL YOURS", "DATE ME", "EMAIL ME", "HOT LIPS", "U ROCK", "TRUST ME", "DON'T CRY"];
    var quotes = ["If music be the food of love, play on", "There's beggary in love that can be reckoned", "Speak low if you speak love", "The course of true love never did run smooth", "Love goes by haps; Some Cupid kills with arrows, some with traps", "The stroke of death is as a lovers pinch, Which hurts and is desired", "She's beautiful, and therefore to be wooed; She is woman, and therefore to be won", "Love looks not with the eyes, but with the mind, And therefore is winged Cupid painted blind", "Hear my soul speak. Of the very instant that I saw you, Did my heart fly at your service", "Who ever loved that loved not at first sight?", "Love is a smoke and is made with the fume of sighs", "I love you more than words can wield the matter, Dearer than eyesight, space and liberty", "Love is like a child, That longs for everything it can come by", "The sight of lovers feedeth those in love", "What is light, if Sylvia be not seen? What is joy if Sylvia be not by?", "Love is blind, and lovers cannot see, The pretty follies that themselves commit", "Love sought is good, but given unsought is better", "Cupid is a knavish lad, thus to make females mad", "Come what sorrow can, It cannot countervail the exchange of joy, That one short minute gives me in her sight", "Doubt that the stars are fire, Doubt that the sun doth move his aides, Doubt truth to be a liar, But never doubt I love", "I would not wish any companion in the world but you", "I pray you, do not fall in love with me, For I am falser than vows made in wine", "Her passions are made of nothing but the finest part of pure love", "Lovers can do their amorous rites by their own beauties", "Love hath made thee a tame snake", "She loved me for the dangers I had passed, And I loved her that she did pity them", "Oh, how this spring of love resembleth, The uncertain glory of an April day, Which now shows all beauty of the Sun, And by and by a cloud takes all away", "I will not be sworn but love may transform me to an oyster", "Mistress, you know yourself, down on your knees, And thank heaven, fasting, for a good man's love", "In thy youth wast as true a lover, As ever sighed upon a midnight pillow", "A heart to love, and in that heart, Courage, to make's love known", "For where thou art, there is the world itself, And where thou art not, desolation", "You cannot call it love, for at your age the heyday in the blood is tame", "She will die if you love her not, And she will die ere she might make her love known", "Men have died from time to time, and worms have eaten them, but not for love", "Men's vows are women's traitors", "Alas, that love, so gentle in his view, Should be so tyrannous and rough in proof", "Love will not be spurred to what it loathes", "This bud of love by summer's ripening breath, May prove a beauteous flower when next we meet", "To be wise and love, Exceeds man's might", "They are in the very wrath of love, and they will go together. Clubs cannot part them", "His unkindness may defeat my life, But never taint my love", "What a pretty thing man is when he goes in his doublet and hose and leaves off his wit!", "Is this the generation of love? Hot blood, hot thoughts and hot deeds? Why, they are vipers. Is love a generation of vipers?", "Love is begun by time, And time qualifies the spark and fire of it", "The sight of lovers feedeth those in love", "Excellent wretch! Perdition catch my soul, but I do love thee, and when I love thee not, chaos is come again", "Lovers ever run before the clock", "I know a lady in Venice would have walked barefoot to Palestine for a touch of his nether lip", "I know no ways to mince it in love, but directly to say 'I love you', I'll make my heaven in a lady's lap", "You have witchcraft in your lips", "I humbly do beseech of your pardon, For too much loving you", "Kiss me, Kate, we shall be married o'Sunday", "I had rather hear my dog bark at a crow than a man swear he loves me"]
    var icons = ["💓", "💗", "💘", "💓", "💗", "💘", "💙", "💚", "💛", "💜", "🧡"]
    function getCss(gridSize, is3d) {
        var doodl = `:doodle {
@grid:${gridSize}/ 100%;
width:100vw;height:100vh;
}
:container {
transform-style:flat;
}
:after {
content:@p(💌,💏,💑,💓,💔,💕,💖,💗,💘,💙,💚,💛,💜,💝,💞,💟,🖤,🧡,💋);
text-shadow:2px 2px black;
}
animation: bubbling @r(10s, 40s) infinite linear;
will-change:transform;
position:absolute;
left:@r(0%,100%);
top:@r(0%,100%);
perspective:200vmax;

@keyframes bubbling {
0% {
transform: scale(.01) translateZ(-100vmax) translateX(@p(-10px, 10px));
}
50% {
translateX(sin(@index()*@r(0,2)));
}
90% {
  opacity:.95;
}
100% {
  opacity:0;
  transform:scale(1)
  perspective(@r(200vmax))
  translateX(calc(@p(-1,1)*@r(10)*1vmax))
  translateY(calc(-1*@r(100)*1vmax))
  rotate(@r(-20deg,20deg));
}
}
`;
        return doodl;
    }

    /*INITIALIZE*/
    var dood = document.getElementById("dood");
    var bod = document.querySelector("body");
    var quoteEl = document.querySelector("#quotes");
    var banner = document.querySelector("#banner");


    dood.update(getCss(15, !isCrappyBrowser()));
    var params = new URLSearchParams(document.location.search);
    if (params.has("for")) {
        banner.innerHTML = `Happy Valentine's Day, ${params.get("for")}!`;
        banner.style.fontSize = "150%";
    }

    function isCrappyBrowser() {

        let isMobile = window.matchMedia("only screen and (max-width: 640px), only screen and (max-height:640px)").matches;
        console.log(isMobile);
        return isMobile || navigator.userAgent.indexOf("Firefox") != -1 || navigator.userAgent.indexOf("Silk") != -1;

    }

    //Happy Logo
    window.addEventListener('load', () => {
      textAnim()
      smallHeartAnim()
    });
    
    // Insert smallHearts element
    const total = 13
    const container = document.querySelector('.smallHearts')
    for (var i = 0, span; i < total; i++) {
      span = document.createElement('span')
      span.className = 'smallHeart'
      container.appendChild(span)
    }
    
    // Text animation
    function textAnim() {
      const tl = gsap.timeline()
      tl.set('.s', {
        opacity: 1,
      })
        .from('.s', {
        duration: 0.4,
        delay: '3',
        ease: 'power1.inOut',
        scale: 0,
        y: 40,
        stagger: 0.04,
      })
    }
    
    // Small hearts animation
    function smallHeartAnim() {
      const tl = gsap.timeline()
      tl.set('.smallHeart', {
        opacity: 1,
      })
        .fromTo(
        '.smallHeart',
        {
          scale: 0,
          rotate: '-=25',
          y: '+=70',
        },
        {
          duration: 3.4,
          delay: '3.6',
          ease: 'slow.out',
          rotate: 'random(-20, 20)',
          scale: 'random(0.5, 1.5)',
          y: '0',
          x: Math.PI * 4,
          modifiers: {
            x: function (x) {
              return Math.sin(parseFloat(x)) * 15 + 'px'
            },
          },
          stagger: {
            each: 0.08,
            from: 'random',
          },
        }
      )
    }