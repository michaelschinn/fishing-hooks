import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import img01 from '../assets/img/01.jpg';
import img02 from '../assets/img/02.jpg';
import img03 from '../assets/img/03.jpg';
import img04 from '../assets/img/04.jpg';
import img05 from '../assets/img/05.jpg';
import img06 from '../assets/img/06.jpg';
import img07 from '../assets/img/07.jpg';
import img08 from '../assets/img/08.jpg';
import img09 from '../assets/img/09.jpg';
import img10 from '../assets/img/10.jpg';
import img11 from '../assets/img/11.jpg';
import img12 from '../assets/img/12.jpg';
import img13 from '../assets/img/13.jpg';
import img14 from '../assets/img/14.jpg';
import img15 from '../assets/img/15.jpg';
import img16 from '../assets/img/16.jpg';
import img17 from '../assets/img/17.jpg';
import img18 from '../assets/img/18.jpg';
import img19 from '../assets/img/19.jpg';
import img20 from '../assets/img/20.jpg';
import Button from "react-bootstrap/Button";

export default function Product(){
    const products = [
        {
            id : '01',
            name : 'Bruiser Baits Intruder 4.25"',
            price : '$3.99',
            image : img01,
            description : [
                'A great bait for flipping and pitching, the Bruiser Baits Intruder is the bait that Brandon McMillan used to set the four-day FLW record of 106lbs 10oz at the 2011 FLW Tour Event on Okeechobee Lake in Florida. The little arms on the side of the bait are very streamlined when punching, but when they hit the bottom, they flair open similar to a jig.  They also come to life with the slightest twitch of the rod. Available in several proven colors, Texas-rigging the Bruiser Baits Intruder with the proper weight can result in big fish and lots of them.'
            ]
        },
        {
            id : '02',
            name : 'Bruiser Baits Intruder Jr 3.5" 10pk',
            price : '$4.39',
            image : img02,
            description : [
                'An excellent choice for flipping and pitching, the Bruiser Baits Intruder Jr is the smaller version of the bait that Brandon McMillan used to flip his way to victory and a four-day FLW record of 106lbs 10oz at the 2011 FLW Tour event on Okeechobee Lake in Florida. The little arms on the side of the Intruder Jr. are very streamlined when punching through vegetation, and when the bait hits the bottom, they flair open similar to a jig, and come to life with the slightest twitch of the rod. Available in several proven colors, Texas-rigging the Bruiser Baits Intruder Jr. with the proper weight can result in big fish and lots of them.'
            ]
        },
        {
            id : '03',
            name : 'Riot Baits Fuzzy Beaver',
            price : '$5.99',
            image : img03,
            description : [
                'The Riot Baits Fuzzy Beaver is the quintessential punching and flipping bait. Made from a soft, yet buoyant plastic, the Riot Baits Fuzzy Beaver features a combination of rounded appendages and textured claws that lay flat against the body as it enters vegetation, and then flare out once it’s below the surface.',
                'Built with a patent-pending Alternate Ridge Design (A.R.D.), the Riot Baits Fuzzy Beaver features chevron-shaped ribbing that traps air and releases bubbles as it moves through the water for even more attraction. Offered in a number of proven colors, the Riot Baits Fuzzy Beaver is sure to put your flipping and punching gear to the test.'
            ]
        },
        {
            id : '04',
            name : 'Riot Baits Little Fuzzy',
            price : '$5.99',
            image : img04,
            description : [
                'A smaller version of the highly successful Fuzzy Beaver, the Riot Baits Little Fuzzy has all the same great action as its bigger brother - now in a more compact and versatile package. Built with Riot Bait’s patent-pending Alternate Ridge Design (A.R.D.), which gives the Little Fuzzy a flange on the opposite sides of each claw, this design produces a unique, tantalizing action that big bass can’t resist. Its chevron-shaped, serrated body also traps air and releases a bubble trail as it is falling through the water column or as you twitch or hop it along the bottom.  Its specially-engineered legs along each side are designed to lay flat as it moves through vegetation as well, and then slowly flower open when it hits the bottom, providing an incredibly lifelike crawdad action.'
            ]
        },
        {
            id : '05',
            name : '10,000 Fish Sukoshi Bug 6pk',
            price : '$5.29',
            image : img05,
            description : [
                'A tasty little snack for any bass, the 10000 Fish Sukoshi Bug is a minimalist finesse creature bait that will help you trigger more bites in tough conditions. Made from ultra-durable, high buoyancy Stretch-X plastic, the 10000 Fish Sukoshi Bug floats upward to ensure a constant upright position when on the bottom, which begs fish to come investigate and bite. It also features eight unique flapping appendages that produce a tantalizing action even with the slightest movements from the rod tip.',
                'Perfect for a variety of finesse applications when you need to downsize your presentation to generate strikes, the 10000 Fish Sukoshi Bug was originally designed for a Ned rig, but it is also highly effective as a jig trailer or on a micro Carolina-rig. Offered in a variety of colors, the 10000 Fish Sukoshi Bug needs to be in every angler’s arsenal.'
            ]
        },
        {
            id : '06',
            name : '13 Fishing Rabbit Ear Tail Invader 4.25" 6pk',
            price : '$5.99',
            image : img06,
            description : [
                'Attack the dark deep honey holes where the biggest bass live with the 13 Fishing Rabbit Ear Tail Invader. Developed for the punching technique, the 13 Fishing Rabbit Ear Tail Invader features a streamlined body shape that slips through small holes and cracks in heavy cover like a knife. It is also molded with 13 Fishing’s Rabbit Ear Tail design, which forces the appendages to spread apart on the fall and produce a hard kicking action that triggers bass to strike.',
                'Not only is a great punching bait, but the 13 Fishing Rabbit Ear Tail Invader also makes a phenomenal jig trailer and is extremely effective on a shaky head or Carolina-rig as well. Finished with a heavy dose of Donkey Sauce to produce even more bites, the 13 Fishing Rabbit Ear Tail Invader is sure to become a staple in your creature bait arsenal.'
            ]
        },
        {
            id : '07',
            name : '6th Sense Hogwalla Creature Bait',
            price : '$4.99',
            image : img07,
            description : [
                `Designed with versatility in mind, the 6th Sense Hogwalla Creature Bait is the latest and greatest hybrid soft plastic on the market. A cross between a lizard and creature, the Hogwalla shares a similar body design as the 6th Sense Stroker Craw, but features six total appendages and a ribbed body section that provides a unique swimming action in the water.`,
                `It doesn't matter how you choose to fish the Hogwalla. The rigging options are endless, which can be incredibly useful when conditions change or the area you are fishing calls for some adaptability. Texas- or Carolina-rig it, flip it, drag it, or shake it, the 6th Sense Hogwalla Creature Bait will perform. Poured in a wide range proven fish-catching colors and proudly made in the USA!`
            ]
        },
        {
            id : '08',
            name : '6th Sense Prawn Creature Bait',
            price : '$4.99',
            image : img08,
            description : [
                `Designed to be your go-to flipping bait around the thickest of cover, the 6th Sense Prawn Creature Bait is built to slide in, out, and through vegetation with ease. Whether you’re fishing shallow grass, shoreline brush, or deep hydrilla, the subtle action of its customizable appendages will trigger big bites from the monsters that live in your lakes’ dense jungles. The Prawn Creature Bait includes unmatched features such as its textured antennae, life-like appendages, and meticulous body design. The detailed body of the bait showcases aggressive forward-facing ribs that create pressure waves and move a tremendous amount of water as the bait is dragged and hopped. Its dense and extremely durable plastic construction provides the ability to do combat with multiple angry fish without the need to tie on a new bait, which can be a critical time-saver on tournament day. Perfect for punching, flipping, as a jig trailer, or Texas/Carolina rigged, the 6th Sense Prawn Creature Bait is destined to be a favorite for those looking for lunkers in labyrinths of vegetation.`
            ]
        },
        {
            id : '09',
            name : 'Arizona Custom Baits Tiny Weed Pigs 3" 10pk',
            price : '$4.49',
            image : img09,
            description : [
                `Ideal for those times when you need a smaller and more active bait, the Arizona Custom Baits Tiny Weed Pig offers a big action in a bite-sized package. The Tiny Weed Pig features a compact creature style body with multiple appendages, which produce a lively crawdad action that will entice bites from even the wariest fish. Its small stature also makes it very versatile. It can be used on a Texas-rig, as a jig trailer, and can even be used on a drop shot.`,
                `The Tiny Weed Pig is hand-poured with super soft plastic that enhances its natural action and is still tough enough to flip into heavy cover without tearing. Available in a variety of custom-blended color patterns, the Arizona Custom Baits Tiny Weed Pig delivers hand-made quality performance.`
            ]
        },
        {
            id : '10',
            name : `Arkie Salty Crawlin' Fry 20pk`,
            price : '$6.99',
            image : img10,
            description : [
                `Another member of the Crawlin’ series, the Arkie Salty Crawlin Fry features lifelike legs on the body of a 4.25" fry. A deadly bait on a variety of rigs, bass can't resist the pulsating action of its numerous legs. Available in several colors, fish the Arkie Salty Crawlin Fry on a Carolina-rig, Texas-rig or jig head - and hold on.`,
                `Made in the USA`
            ]
        },
        {
            id : '11',
            name : `Arsenal Fishing Assault Bug 8pk`,
            price : '$5.49',
            image : img11,
            description : [
                `Combining the best attributes of a creature, crawdad, and bug style lure all into one, the Arsenal Assault Bug is an extremely versatile bait that will put fish in the boat 365 days a year. First, the top half of the body features soft spacious ribs, which generate vibration and move a good amount of water. Then the head and bottom of the body are made solid to provide enhanced durability to improve longevity from repeated hook threading. Last, the perfectly sized claws are molded with side ribbed lips to induce a kicking action when in motion while a set of lightweight antennas flutter to create a lifelike crawdad imitation. `,
                `Equally effective on a wide range of applications, the Arsenal Assault Bug is perfectly suited for flipping and pitching, Carolina-rigs, Texas-rigs, jig trailers, and even shaky heads. They are also baked with salt for even weight distribution and marinated in garlic scent that is irresistible to all gamefish. Offered in a selection of fish catching colors, the Arsenal Assault Bug will keep your rod bent and your livewell full all year long.`
            ]
        },
        {
            id : '12',
            name : `Bass Assassin Heavy Punch Craw 6pk`,
            price : '$5.99',
            image : img12,
            description : [
                `Built for pairing with heavy punching gear, the Bass Assassin Heavy Punch Craw delivers a bite-inducing craw imitation that is right-at-home underneath matted vegetation. Designed with a round, ribbed construction, the Bass Assassin Heavy Punch Craw provides more-than-enough body to accommodate larger gauge hooks. At the top, the Bass Assassin Heavy Punch Craw is shaped with a pyramid-like taper that snugs nicely against concave punch weights.`,
                `Delivering multi-dimensional attraction, the Bass Assassin Heavy Punch Craw features two large, flailing claws that move plenty of water and are built to accommodate a rattle. Infused with a heavy dose of Bang scenting, the Bass Assassin Heavy Punch Craw tempts fish with a mouthwatering aroma right out of the package. Offered in a number of classic bass colors, the Bass Assassin Heavy Punch Craw provides everything anglers need to dive into the slop and wrestle big bass into the boat.`
            ]
        },
        {
            id : '13',
            name : `Bass Assassin Skunk Ape 7pk`,
            price : '$4.99',
            image : img13,
            description : [
                `Take your flipping game to the next level with the Bass Assassin Skunk Ape. Perfect for flipping, pitching, and punching heavy vegetation, the Bass Assassin Skunk Ape features a fully ribbed body and fully ribbed appendages that displace a tremendous amount of water and entice big fish to bite. The Bass Assassin Skunk Ape also features appendages that can be left attached for a more subtle gliding action or split apart to create a more aggressive flapping action, which gives anglers maximum versatility. `,
                `Highly effective 365 days a year, the Bass Assassin Skunk Ape is built for flipping, but also works extremely well as a jig trailer, on a Carolina-rig, or on a swinging jighead. Offered in a range of custom color combinations, the Bass Assassin Skunk Ape will make a fine addition to any angler’s tackle box. `
            ]
        },
        {
            id : '14',
            name : `Berkley Powerbait Crazy Legs Chigger Craw`,
            price : '$4.99',
            image : img14,
            description : [
                `NEW Berkley PowerBait Crazy Leg Chigger Craw is the same bait that won the 2007 Bassmaster Classic, only BETTER! The Chigger Craw now comes with CRAZY LEGS that greatly enhance the bait's action while swimming, or on the drop. This new feature along with the high action Chigger Craw pinchers and the magic of PowerBait fish-attracting scent make it completely irresistible to bass. Fish it alone, or as a jig trailer, slow, or fast, and watch the pinchers and crazy legs swim wildly back and forth - driving big bass crazy.`,
                `The Black Blue Chigger Craw helped Skeet Reese win the 2009 Bassmaster Classic.`
            ]
        },
        {
            id : '15',
            name : `Berkley Gulp Alive Crabby 2" Pint`,
            price : '$14.97',
            image : img15,
            description : [
                `Absolutely deadly anywhere that gamefish are feeding on small crustaceans, the Berkley Gulp Alive Crabby 2” Pint offers the best alternative to live bait ever produced. Featuring high-action legs and claws that produce an enticing flutter, the Berkley Gulp Alive Crabby 2” Pint is molded with a keeled belly that helps keep it tracking straight during the retrieve and maintain a horizontal posture while free-falling to create a more natural presentation. `,
                `The Gulp Alive Crabby also comes in a pint jar and soaked in a powerful attractant that delivers maximum scent dispersion to expand your strike zone. When your done using a bait you can put it back in the jar to re-charge its effectiveness as well. Rig it on your favorite jig head or a Carolina rig, the Berkley Gulp Alive Crabby 2” Pint is available in a selection of realistic colors that will put your livewell system to the ultimate test. `
            ]
        },
        {
            id : '16',
            name : `Berkley Powerbait Bunker Hawg 10pk`,
            price : '$5.99',
            image : img16,
            description : [
                `Taking the classic beaver style bait to new heights, the Berkley Powerbait Bunker Hawg is designed for bunker-busting through heavy cover and triggering bites from hog-sized bass. Equipped with specially cuts tails to generate a slight kicking action on the fall, the Berkley Powerbait Bunker Hawg features a tapered body shape that allows it to easily slip in and out of cover where the biggest fish like to hide. It is also fitted with a trough style belly to provide less resistance when setting the hook for superior hook penetration.`,
                `Originally created for flipping and pitching into thick vegetation, the Berkley Powerbait Bunker Hawg is extremely versatile and also works great as a jig trailer, on a Carolina-rig, and even a shaky head. Infused with Berkley’s proven Powerbait scent formula, the Berkley Powerbait Bunker Hawg is a tool that every competitive angler should have in their tackle box. `
            ]
        },
        {
            id : '17',
            name : `Berkley Powerbait Mantis Bug 8pk`,
            price : '$3.97',
            image : img17,
            description : [
                `Delivering a big presence in a compact package, the Berkley Powerbait Mantis Bug is ideal for those times when you need a smaller and more active bait. Crafted with a variety of appendages and a flat bottom, the Berkley Powerbait Mantis Bug generates multiple leg movements at once as it glides through the water column. The compact body shape of the Berkley Powerbait Mantis Bug also makes it ideal for a jig trailer, Texas-rig, Carolina-rig, and even a shaky head. Fortified with Berkley’s proven Powerbait scent and flavor that makes fish hold on up to 18x longer, the Berkley Powerbait Mantis Bug is perfect for those situations when you need to downsize your offering.`
            ]
        },
        {
            id : '18',
            name : `Berkley Powerbait Maxscent Creature Hawg`,
            price : '$6.99',
            image : img18,
            description : [
                `Built for heavy cover, the Berkley Powerbait Maxscent Creature Hawg gives anglers the upper hand on big fish with a reinforced scenting and a streamlined creature bait profile. Perfect for flipping, pitching, and punching, the Berkley Powerbait Maxscent Creature Hawg features a ribbed body that maximizes scent release, moves water, and conceals the point of your hook. Offered in a number of big fish colors, the Berkley Powerbait Maxscent Creature Hawg delivers flailing, scent rich attraction that spells bad news for big fish in heavy cover.`,
                `Powerbait’s new Maxscent line of baits release a super-charged scent field that attracts fish with a never before seen effectiveness. This all-new material provides an ultra-realistic texture and comes in natural matte colors to fool the most discerning fish. Engineered with enhanced flavor to keep fish from letting go, Berkley’s Maxscent offers a soft, yet durable construction that ensures a lifelike action and better hook-ups.`
            ]
        },
        {
            id : '19',
            name : `Berkley Powerbait Pit Boss`,
            price : '$3.99',
            image : img19,
            description : [
                `Designed by Elite Series veteran and 2009 Bassmaster Classic Champion, Skeet Reese, the Berkley Powerbait Pit Boss was created to give anglers the ultimate flipping and pitching bait. Built with a unique saber tail design, the Berkley Powerbait Pit Boss provides a quick fluttering action at any speed that mimics all types of baitfish and crawfish. The Berkley Powerbait Pit Boss also features a streamlined body shape that is perfect for getting in and out of heavy cover, as well as, a slotted hook keeper to increase hook setting performance. Finished with a heavy dose of Berkley’s Powerbait scent for an added level of attraction, the Berkley Powerbait Pit Boss delivers flipping performance that is second to none. `
            ]
        },
        {
            id : '20',
            name : `Berkley Powerbait Power Hawg`,
            price : '$4.29 - $4.79',
            image : img20,
            description : [
                `The Berkley Powerbait Power Hawg offers exceptional versatility. Great for flipping or covering a lot of water with long casts, the Berkley Power Hawg is a key impulse strike bait. The unique appendages create a compelling action in the water while the slender body is easy to rig and helps the Power Hawg cast like a bullet. Great as a jig trailer or Texas or Carolina rigged, the original scent and flavor enhanced Powerbait formula only adds to its appeal. Once a fish bites into a Power Hawg, the Powerbait flavor impregnated into the bait, causes fish to hang on longer for more positive hooksets. The Berkley Powerbait Power Hawg is a great creature bait with a proven track record of success.`
            ]
        }
    ]

    return(
        <Container>
            <Row>
                <Col>
                    <h2 className="display-3 mt-5">Bait</h2>
                </Col>
            </Row>
            <Row>
                <CardGroup>
                {
                    products.map(item => {
                        return(
                            <Col xs={12} sm={6} md={4} lg={3}>
                                <Card>
                                    <Card.Img variant="top" src={item.image} />
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>
                                        {
                                            `${item.description[0].slice(0,99)}... Read More`
                                        }
                                        </Card.Text>
                                        <Button>Add to Cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
                </CardGroup>
            </Row>
        </Container>
    )
}