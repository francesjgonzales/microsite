/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "width",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'slideshow2',
                type: 'image',
                rect: ['1px', '0px','1200px','800px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"slideshow.gif",'0px','0px']
            },
            {
                id: 'contactUs',
                type: 'group',
                rect: ['-532px', '4006px','1733','800','auto', 'auto'],
                opacity: 1,
                c: [
                {
                    id: 'Contact',
                    type: 'image',
                    rect: ['532px', '0px','1200px','626px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"Contact.jpg",'0px','0px']
                },
                {
                    id: 'Rectangle2',
                    type: 'rect',
                    rect: ['1200px', '0px','532px','626px','auto', 'auto'],
                    fill: ["rgba(85,85,85,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'ContactUs',
                    type: 'group',
                    rect: ['533px', '626px','1200','174','auto', 'auto'],
                    cursor: ['pointer'],
                    c: [
                    {
                        id: 'Rectangle3',
                        type: 'rect',
                        rect: ['0px', '0px','1200px','174px','auto', 'auto'],
                        fill: ["rgba(137,137,137,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'ExclusiveMarket',
                        type: 'text',
                        rect: ['267px', '32px','auto','auto','auto', 'auto'],
                        text: "Exclusively Marketed by:",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 13, "rgba(255,255,255,1)", "600", "none", "normal"]
                    },
                    {
                        id: 'ColliersAddress',
                        type: 'text',
                        rect: ['267px', '53px','auto','auto','auto', 'auto'],
                        text: "Colliers International Pte Ltd     1 Raffles Place, #45-00 Raffles Place, Singapore 048616",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 15, "rgba(255,255,255,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'ColliersAddressCopy',
                        type: 'text',
                        rect: ['835px', '57px','auto','auto','auto', 'auto'],
                        text: "CEA Licence No. L3004691J     |     RCB No. 19890135R",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 10, "rgba(255,255,255,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'ColliersAddressCopy2',
                        type: 'text',
                        rect: ['267px', '96px','818px','47px','auto', 'auto'],
                        text: "This publication has been prepared by Colliers International for general information only. Colliers International makes no guarantees, representations or warranties of any kind, express or implied, regarding the information including, but not limited to, warranties of content, accuracy and reliability. Any interested party should undertake their own inquiries as to the accuracy of the information. Colliers International excludes unequivocally all inferred or implied terms, conditions and warranties arising out of this publication and excludes all liability for loss and damages arising there from. This publication is the copyrighted property of Colliers International and/or its licensor(s). © 2014. All rights reserved.",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 9, "rgba(255,255,255,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'AcceleratingSuccessWhite2',
                        type: 'image',
                        rect: ['81px', '30px','164px','109px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"AcceleratingSuccessWhite2.png",'0px','0px']
                    }]
                },
                {
                    id: 'phone',
                    type: 'text',
                    rect: ['1406px', '219px','auto','auto','auto', 'auto'],
                    text: "+65 6531 8510",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 52, "rgba(255,255,255,1.00)", "normal", "none", ""]
                },
                {
                    id: 'fax',
                    type: 'text',
                    rect: ['1406px', '282px','auto','auto','auto', 'auto'],
                    text: "+65 6222 4901",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 52, "rgba(255,255,255,1.00)", "normal", "none", ""]
                },
                {
                    id: 'email',
                    type: 'text',
                    rect: ['1321px', '341px','auto','auto','auto', 'auto'],
                    cursor: ['pointer'],
                    text: "singapore.retail@colliers.com",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 52, "rgba(255,255,255,1.00)", "normal", "none", ""]
                },
                {
                    id: 'contactUS',
                    type: 'text',
                    rect: ['1359px', '176px','auto','auto','auto', 'auto'],
                    text: "CONTACT OUR MARKETING AGENT",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 13, "rgba(255,255,255,1.00)", "600", "underline", ""]
                },
                {
                    id: 'contact2',
                    type: 'image',
                    rect: ['1351px', '210px','41px','160px','auto', 'auto'],
                    clip: ['rect(0px 41px 97.037109375px 0px)'],
                    fill: ["rgba(0,0,0,0)",im+"contact2.png",'0px','0px']
                },
                {
                    id: 'contact2Copy',
                    type: 'image',
                    rect: ['1270px', '215px','41px','160px','auto', 'auto'],
                    clip: ['rect(120.9873046875px 41px 161.23486328125px 0px)'],
                    fill: ["rgba(0,0,0,0)",im+"contact2.png",'0px','0px']
                }]
            },
            {
                id: 'opportunity',
                type: 'group',
                rect: ['0px', '3206px','1200','800','auto', 'auto'],
                opacity: 1,
                c: [
                {
                    id: 'Opportunities',
                    type: 'image',
                    rect: ['0px', '0px','1200px','800px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"Opportunities.jpg",'0px','0px']
                },
                {
                    id: 'Opprtunities',
                    type: 'text',
                    rect: ['533px', '183px','auto','auto','auto', 'auto'],
                    text: "OPPORTUNITIES",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 13, "rgba(255,255,255,1.00)", "600", "underline", ""]
                },
                {
                    id: 'oPP',
                    type: 'text',
                    rect: ['400px', '254px','auto','auto','auto', 'auto'],
                    text: "Opportunities Available.",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 52, "rgba(255,255,255,1.00)", "normal", "none", ""]
                },
                {
                    id: 'FB',
                    type: 'text',
                    rect: ['180px', '563px','auto','auto','auto', 'auto'],
                    opacity: 1,
                    text: "Food &amp; Beverage",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 52, "rgba(255,255,255,1.00)", "normal", "none", ""]
                },
                {
                    id: 'FBCopy',
                    type: 'text',
                    rect: ['548px', '563px','auto','auto','auto', 'auto'],
                    text: "Food Court",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 52, "rgba(255,255,255,1.00)", "normal", "none", ""]
                },
                {
                    id: 'FBCopy2',
                    type: 'text',
                    rect: ['867px', '563px','auto','auto','auto', 'auto'],
                    opacity: 1,
                    text: "Retail",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 52, "rgba(255,255,255,1.00)", "normal", "none", ""]
                },
                {
                    id: 'retail',
                    type: 'image',
                    rect: ['820px', '353px','184px','185px','auto', 'auto'],
                    opacity: 1,
                    fill: ["rgba(0,0,0,0)",im+"retail.png",'0px','0px'],
                    transform: [[],[],[],['0','0']]
                },
                {
                    id: 'fnb',
                    type: 'image',
                    rect: ['192px', '353px','190px','185px','auto', 'auto'],
                    opacity: 1,
                    fill: ["rgba(0,0,0,0)",im+"fnb.png",'0px','0px'],
                    transform: [[],[],[],['0','0']]
                },
                {
                    id: 'foodcourt',
                    type: 'image',
                    rect: ['523px', '353px','190px','185px','auto', 'auto'],
                    opacity: 1,
                    fill: ["rgba(0,0,0,0)",im+"foodcourt.png",'0px','0px'],
                    transform: [[],[],[],['0','0']]
                }]
            },
            {
                id: 'home',
                type: 'group',
                rect: ['0px', '0px','1200','802','auto', 'auto'],
                opacity: 1,
                c: [
                {
                    id: 'Text',
                    type: 'text',
                    rect: ['349px', '410px','auto','auto','auto', 'auto'],
                    opacity: 1,
                    text: "SUTD East Coast<br>Campus Retail Space",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 52, "rgba(255,255,255,1.00)", "normal", "none", ""]
                },
                {
                    id: 'TextCopy',
                    type: 'text',
                    rect: ['428px', '520px','auto','auto','auto', 'auto'],
                    opacity: 1,
                    text: "Now Available",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 52, "rgba(255,255,255,1.00)", "600", "none", ""]
                },
                {
                    id: 'scrollButtn',
                    type: 'image',
                    rect: ['573px', '620px','52px','18px','auto', 'auto'],
                    cursor: ['pointer'],
                    opacity: 1,
                    fill: ["rgba(0,0,0,0)",im+"scrollButtn.png",'0px','0px']
                },
                {
                    id: 'SUTDlogo3',
                    type: 'image',
                    rect: ['472px', '234px','253px','135px','auto', 'auto'],
                    cursor: ['pointer'],
                    opacity: 1,
                    fill: ["rgba(0,0,0,0)",im+"SUTDlogo3.png",'0px','0px']
                }]
            },
            {
                id: 'location',
                type: 'group',
                rect: ['-1px', '2406px','1200','800','auto', 'auto'],
                opacity: 1,
                c: [
                {
                    id: 'Location22',
                    type: 'image',
                    rect: ['0px', '0px','1200px','800px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"Location2.jpg",'0px','0px']
                },
                {
                    id: 'MapNEW4',
                    type: 'image',
                    rect: ['1219px', '47px','1110px','767px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"Map.png",'0px','0px']
                },
                {
                    id: 'About-headerCopy2',
                    type: 'text',
                    rect: ['-510px', '357px','auto','auto','auto', 'auto'],
                    text: "8 Somapah Road",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 52, "rgba(255,255,255,1.00)", "bold", "none", ""]
                },
                {
                    id: 'About-headerCopy',
                    type: 'text',
                    rect: ['-510px', '268px','auto','auto','auto', 'auto'],
                    text: "We are located along<br>Upper Changi Road East at",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 52, "rgba(255,255,255,1.00)", "normal", "none", ""]
                },
                {
                    id: 'LOCATION',
                    type: 'text',
                    rect: ['-510px', '232px','auto','auto','auto', 'auto'],
                    text: "LOCATION",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 13, "rgba(255,255,255,1.00)", "600", "underline", ""]
                },
                {
                    id: 'legendaryMAP',
                    type: 'image',
                    rect: ['-510px', '463px','225px','149px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"legendaryMAP.png",'0px','0px']
                }]
            },
            {
                id: 'AboutTITLE',
                type: 'group',
                rect: ['-1px', '802px','1200','800','auto', 'auto'],
                opacity: 1,
                c: [
                {
                    id: 'about',
                    type: 'image',
                    rect: ['0px', '0px','1200px','800px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"about.jpg",'0px','0px']
                },
                {
                    id: 'About-header',
                    type: 'text',
                    rect: ['345px', '414px','auto','auto','auto', 'auto'],
                    text: "SUTD East Coast Campus",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 52, "rgba(255,255,255,1.00)", "normal", "none", ""]
                },
                {
                    id: 'About-subhead',
                    type: 'text',
                    rect: ['305px', '459px','724px','auto','auto', 'auto'],
                    text: "The design and technology hub in Singapore",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(255,255,255,1.00)", "normal", "none", ""]
                },
                {
                    id: 'ABOUT',
                    type: 'text',
                    rect: ['641px', '373px','auto','auto','auto', 'auto'],
                    text: "ABOUT",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 13, "rgba(255,255,255,1.00)", "600", "underline", ""]
                },
                {
                    id: 'gallery',
                    type: 'group',
                    rect: ['440px', '918px','109','75','auto', 'auto'],
                    c: [
                    {
                        id: 'campusGallery',
                        type: 'text',
                        rect: ['4px', '62px','auto','auto','auto', 'auto'],
                        text: "CAMPUS GALLERY",
                        align: "center",
                        font: ['Arial, Helvetica, sans-serif', 10, "rgba(255,255,255,1.00)", "600", "none", ""]
                    },
                    {
                        id: 'AboutGallery',
                        type: 'image',
                        rect: ['-5px', '-8px','112px','74px','auto', 'auto'],
                        cursor: ['pointer'],
                        fill: ["rgba(0,0,0,0)",im+"AboutGallery.png",'0px','0px'],
                        transform: [[],[],[],['0.78','0.78']]
                    }]
                },
                {
                    id: 'videobutton',
                    type: 'group',
                    rect: ['740px', '924px','72','69','auto', 'auto'],
                    cursor: ['pointer'],
                    c: [
                    {
                        id: 'Play',
                        type: 'text',
                        rect: ['5px', '56px','auto','auto','auto', 'auto'],
                        text: "PLAY VIDEO",
                        align: "center",
                        font: ['Arial, Helvetica, sans-serif', 10, "rgba(255,255,255,1.00)", "600", "none", ""]
                    },
                    {
                        id: 'AboutPlaybtn',
                        type: 'image',
                        rect: ['12px', '-7px','49px','60px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"AboutPlaybtn.png",'0px','0px'],
                        transform: [[],[],[],['0.78','0.78']]
                    }]
                },
                {
                    id: 'house',
                    type: 'group',
                    rect: ['109px', '587px','192','277','auto', 'auto'],
                    c: [
                    {
                        id: 'AboutHousing2',
                        type: 'image',
                        rect: ['-8px', '4px','208px','213px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"AboutHousing2.png",'0px','0px'],
                        transform: [[],[],[],['0.92','0.92']]
                    },
                    {
                        id: 'housing',
                        type: 'text',
                        rect: ['49px', '207px','auto','auto','auto', 'auto'],
                        text: "Housing",
                        align: "center",
                        font: ['Arial, Helvetica, sans-serif', 25, "rgba(255,255,255,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'housingCopy',
                        type: 'text',
                        rect: ['0px', '245px','192px','32px','auto', 'auto'],
                        text: "3 residential blocks <br>just walks away <br>from campus",
                        align: "center",
                        font: ['Arial, Helvetica, sans-serif', 15, "rgba(255,255,255,1)", "400", "none", "normal"]
                    }]
                },
                {
                    id: 'studentgrp',
                    type: 'group',
                    rect: ['373px', '585px','198','279','auto', 'auto'],
                    c: [
                    {
                        id: 'students',
                        type: 'image',
                        rect: ['-8px', '3px','215px','215px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"students.png",'0px','0px'],
                        transform: [[],[],[],['0.92','0.92']]
                    },
                    {
                        id: 'student',
                        type: 'text',
                        rect: ['49px', '209px','auto','auto','auto', 'auto'],
                        text: "Students",
                        align: "center",
                        font: ['Arial, Helvetica, sans-serif', 25, "rgba(255,255,255,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'student2',
                        type: 'text',
                        rect: ['0px', '247px','192px','32px','auto', 'auto'],
                        text: "Currently 1,000 students<br>to increase to 4,000 <br>when fully established",
                        align: "center",
                        font: ['Arial, Helvetica, sans-serif', 15, "rgba(255,255,255,1)", "400", "none", "normal"]
                    }]
                },
                {
                    id: 'transpo',
                    type: 'group',
                    rect: ['641px', '587px','194','278','auto', 'auto'],
                    c: [
                    {
                        id: 'transportation',
                        type: 'image',
                        rect: ['-8px', '4px','210px','212px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"transportation.png",'0px','0px'],
                        transform: [[],[],[],['0.92','0.92']]
                    },
                    {
                        id: 'transpo1',
                        type: 'text',
                        rect: ['17px', '208px','auto','auto','auto', 'auto'],
                        text: "Transportation",
                        align: "center",
                        font: ['Arial, Helvetica, sans-serif', 25, "rgba(255,255,255,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'transpo2',
                        type: 'text',
                        rect: ['2px', '246px','192px','32px','auto', 'auto'],
                        text: "Upper Changi MRT <br>station atthe doorstep",
                        align: "center",
                        font: ['Arial, Helvetica, sans-serif', 15, "rgba(255,255,255,1)", "400", "none", "normal"]
                    }]
                },
                {
                    id: '_24hr',
                    type: 'group',
                    rect: ['902px', '587px','192','278','auto', 'auto'],
                    c: [
                    {
                        id: 'About24hr2',
                        type: 'image',
                        rect: ['-7px', '4px','206px','213px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"About24hr2.png",'0px','0px'],
                        transform: [[],[],[],['0.92','0.92']]
                    },
                    {
                        id: 'transpo1Copy',
                        type: 'text',
                        rect: ['67px', '208px','auto','auto','auto', 'auto'],
                        text: "24-hr ",
                        align: "center",
                        font: ['Arial, Helvetica, sans-serif', 25, "rgba(255,255,255,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'transpo2Copy',
                        type: 'text',
                        rect: ['0px', '246px','192px','32px','auto', 'auto'],
                        text: "access to campus <br>centre,auditorium &amp; <br>research facility",
                        align: "center",
                        font: ['Arial, Helvetica, sans-serif', 15, "rgba(255,255,255,1)", "400", "none", "normal"]
                    }]
                }]
            },
            {
                id: 'campgallery',
                type: 'group',
                rect: ['1199px', '1608px','1200','800','auto', 'auto'],
                opacity: 1,
                c: [
                {
                    id: 'Group',
                    type: 'group',
                    rect: ['150px', '130px','901','500','auto', 'auto'],
                    c: [
                    {
                        id: 'Rectangle5',
                        type: 'rect',
                        rect: ['-150px', '-130px','1200px','800px','auto', 'auto'],
                        fill: ["rgba(49,49,49,1)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'PLAYBACK',
                        type: 'group',
                        rect: ['511px', '528px','62','67','auto', 'auto'],
                        cursor: ['pointer'],
                        c: [
                        {
                            id: 'AboutPlaybtnCopy',
                            type: 'image',
                            rect: ['7px', '-7px','49px','60px','auto', 'auto'],
                            opacity: 0.61391562732876,
                            fill: ["rgba(0,0,0,0)",im+"AboutPlaybtn.png",'0px','0px'],
                            transform: [[],[],[],['0.78','0.78']]
                        },
                        {
                            id: 'PlayCopy',
                            type: 'text',
                            rect: ['0px', '56px','auto','auto','auto', 'auto'],
                            text: "PLAY VIDEO",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', 10, "rgba(255,255,255,1.00)", "600", "none", ""]
                        }]
                    },
                    {
                        id: 'GOBACK',
                        type: 'group',
                        rect: ['365px', '520px','68','75','auto', 'auto'],
                        c: [
                        {
                            id: 'goback',
                            type: 'text',
                            rect: ['10px', '64px','auto','auto','auto', 'auto'],
                            text: "GO BACK",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', 10, "rgba(255,255,255,1.00)", "600", "none", ""]
                        },
                        {
                            id: 'goBack2',
                            type: 'image',
                            rect: ['0px', '0px','68px','62px','auto', 'auto'],
                            opacity: 0.61,
                            fill: ["rgba(0,0,0,0)",im+"goBack.png",'0px','0px']
                        }]
                    },
                    {
                        id: 'rightBTN',
                        type: 'image',
                        rect: ['872px', '221px','29px','57px','auto', 'auto'],
                        cursor: ['pointer'],
                        fill: ["rgba(0,0,0,0)",im+"rightBTN.png",'0px','0px']
                    },
                    {
                        id: 'LeftBtn',
                        type: 'image',
                        rect: ['0px', '221px','28px','57px','auto', 'auto'],
                        cursor: ['pointer'],
                        fill: ["rgba(0,0,0,0)",im+"LeftBtn.png",'0px','0px']
                    },
                    {
                        id: 'mainPhoto',
                        type: 'image',
                        tag: 'img',
                        rect: ['109px', '0px','700px','500px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"photo_1.jpg",'0px','0px']
                    },
                    {
                        id: 'textCount',
                        type: 'text',
                        rect: ['733px', '461px','auto','auto','auto', 'auto'],
                        opacity: 0.5,
                        text: "1",
                        font: ['Arial, Helvetica, sans-serif', 24, "rgba(249,248,248,1.00)", "normal", "none", ""]
                    },
                    {
                        id: 'textTotal',
                        type: 'text',
                        rect: ['751px', '461px','auto','auto','auto', 'auto'],
                        opacity: 0.5,
                        text: "of 7",
                        font: ['Arial, Helvetica, sans-serif', 24, "rgba(249,248,248,1.00)", "normal", "none", ""]
                    }]
                }]
            },
            {
                id: 'redBar',
                type: 'group',
                rect: ['1', '0','1200','70','auto', 'auto'],
                c: [
                {
                    id: 'redBar4',
                    type: 'image',
                    rect: ['-1px', '0px','1200px','70px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"redBar4.png",'0px','0px']
                },
                {
                    id: 'Rectangle',
                    type: 'rect',
                    rect: ['70px', '11px','162px','52px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(49,49,49,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'HOMEHOVER',
                    type: 'rect',
                    rect: ['511px', '-71px','120px','70px','auto', 'auto'],
                    opacity: 1,
                    fill: ["rgba(224,214,217,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'HOMEBTN',
                    type: 'text',
                    rect: ['554px', '27px','38px','16px','auto', 'auto'],
                    clip: ['rect(-22px 59px 37px -23px)'],
                    cursor: ['pointer'],
                    text: "HOME",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 12, "rgba(255,255,255,1)", "700", "none", "normal"]
                },
                {
                    id: 'HOMEHOVERCopy2',
                    type: 'rect',
                    rect: ['511px', '0px','120px','70px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(98,0,32,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'ABOUTHOVER',
                    type: 'rect',
                    rect: ['628px', '-70px','120px','70px','auto', 'auto'],
                    cursor: ['pointer'],
                    opacity: 1,
                    fill: ["rgba(104,0,34,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'ABOUTBTN',
                    type: 'text',
                    rect: ['668px', '27px','auto','auto','auto', 'auto'],
                    clip: ['rect(-22px 64px 39px -18px)'],
                    cursor: ['pointer'],
                    text: "ABOUT",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 12, "rgba(255,255,255,1)", "700", "none", "normal"]
                },
                {
                    id: 'ABOUTHOVERCopy3',
                    type: 'rect',
                    rect: ['628px', '0px','120px','70px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(224,214,217,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'LOCATIONHOVER',
                    type: 'rect',
                    rect: ['760px', '-71px','120px','70px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(104,0,34,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'LOCATIONBTN',
                    type: 'text',
                    rect: ['789px', '27px','45px','16px','auto', 'auto'],
                    clip: ['rect(-20px 89px 38px -26px)'],
                    cursor: ['pointer'],
                    text: "LOCATION",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 12, "rgba(255,255,255,1)", "700", "none", "normal"]
                },
                {
                    id: 'LOCATIONHOVERCopy',
                    type: 'rect',
                    rect: ['760px', '0px','120px','70px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(224,214,217,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'OPPHOVER',
                    type: 'rect',
                    rect: ['906px', '-73px','120px','70px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(104,0,34,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'OPPBTN',
                    type: 'text',
                    rect: ['919px', '27px','45px','16px','auto', 'auto'],
                    clip: ['rect(-20px 116px 37px -11px)'],
                    cursor: ['pointer'],
                    text: "OPPORTUNITIES",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 12, "rgba(255,255,255,1)", "700", "none", "normal"]
                },
                {
                    id: 'OPPHOVERCopy2',
                    type: 'rect',
                    rect: ['906px', '0px','120px','70px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(224,214,217,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'CONTACTHOVER',
                    type: 'rect',
                    rect: ['1050px', '-71px','120px','70px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(104,0,34,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'CONTACTBTN',
                    type: 'text',
                    rect: ['1068px', '27px','87px','16px','auto', 'auto'],
                    clip: ['rect(-22px 136px 33px -52px)'],
                    cursor: ['pointer'],
                    text: "CONTACT US",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 12, "rgba(255,255,255,1)", "700", "none", "normal"]
                },
                {
                    id: 'CONTACTHOVERCopy',
                    type: 'rect',
                    rect: ['1050px', '0px','120px','70px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(224,214,217,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                }]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_transpo2}": [
                ["style", "top", '246px'],
                ["style", "height", '32px'],
                ["style", "width", '192px'],
                ["style", "left", '2px'],
                ["style", "font-size", '15px']
            ],
            "${_ABOUTHOVER}": [
                ["style", "top", '-70px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '70px'],
                ["style", "opacity", '1'],
                ["style", "left", '628px'],
                ["color", "background-color", 'rgba(104,0,34,1.00)']
            ],
            "${_slideshow2}": [
                ["style", "top", '0px'],
                ["style", "height", '800px'],
                ["style", "left", '1px'],
                ["style", "width", '1200px']
            ],
            "${_campusGallery}": [
                ["style", "top", '62px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '4px'],
                ["style", "font-size", '10px']
            ],
            "${__24hr}": [
                ["style", "left", '902px'],
                ["style", "top", '313px']
            ],
            "${_ABOUTHOVERCopy3}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(153,0,51,1)'],
                ["style", "height", '70px'],
                ["style", "opacity", '0'],
                ["style", "left", '628px'],
                ["style", "cursor", 'pointer']
            ],
            "${_OPPBTN}": [
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", '700'],
                ["style", "left", '919px'],
                ["style", "width", 'auto'],
                ["style", "top", '27px'],
                ["style", "height", '16px'],
                ["style", "font-size", '12px'],
                ["style", "clip", [-20,116,37,-11], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "cursor", 'pointer']
            ],
            "${_oPP}": [
                ["style", "line-height", '45px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '400px'],
                ["style", "font-size", '38px'],
                ["style", "top", '254px'],
                ["style", "text-align", 'center'],
                ["style", "height", '42px'],
                ["style", "width", '411px']
            ],
            "${_housing}": [
                ["style", "top", '207px'],
                ["style", "left", '49px'],
                ["style", "font-size", '25px']
            ],
            "${_Opportunities}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_ContactUs}": [
                ["style", "top", '626px'],
                ["style", "left", '533px'],
                ["style", "cursor", 'pointer']
            ],
            "${_FB}": [
                ["style", "line-height", '25px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '180px'],
                ["style", "font-size", '26px'],
                ["style", "top", '563px'],
                ["style", "text-align", 'center'],
                ["style", "height", '21px'],
                ["motion", "location", '286.5px 573.5px'],
                ["style", "width", '213px']
            ],
            "${_TextCopy}": [
                ["style", "-webkit-transform-origin", [51,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [51,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [51,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [51,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [51,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '428px'],
                ["style", "font-size", '52px'],
                ["style", "top", '520px'],
                ["style", "width", '352px'],
                ["style", "text-align", 'center'],
                ["transform", "skewX", '0deg'],
                ["motion", "location", '608.52px 552px'],
                ["transform", "scaleY", '1'],
                ["style", "opacity", '1'],
                ["transform", "scaleX", '1']
            ],
            "${_opportunity}": [
                ["style", "top", '3206px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${_GOBACK}": [
                ["style", "left", '365px'],
                ["style", "top", '520px']
            ],
            "${_transportation}": [
                ["transform", "scaleX", '0.92'],
                ["style", "left", '-8px'],
                ["transform", "scaleY", '0.92'],
                ["style", "top", '4px']
            ],
            "${_home}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1']
            ],
            "${_CONTACTBTN}": [
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", '700'],
                ["style", "left", '1068px'],
                ["style", "width", '87px'],
                ["style", "top", '27px'],
                ["style", "font-size", '12px'],
                ["style", "height", '16px'],
                ["transform", "scaleX", '1'],
                ["style", "clip", [-22,136,33,-52], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "cursor", 'pointer']
            ],
            "${_retail}": [
                ["style", "top", '353px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["style", "left", '820px']
            ],
            "${_SUTDlogo3}": [
                ["style", "top", '234px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '135px'],
                ["style", "opacity", '1'],
                ["style", "left", '472px'],
                ["style", "width", '253px']
            ],
            "${_MapNEW4}": [
                ["style", "top", '47px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '1219px'],
                ["style", "width", '1110px']
            ],
            "${_PLAYBACK}": [
                ["style", "top", '528px'],
                ["style", "left", '511px'],
                ["style", "cursor", 'pointer']
            ],
            "${_HOMEHOVER}": [
                ["style", "top", '-71px'],
                ["style", "height", '70px'],
                ["style", "opacity", '1'],
                ["style", "left", '511px'],
                ["color", "background-color", 'rgba(104,0,34,1.00)']
            ],
            "${_ColliersAddressCopy}": [
                ["style", "top", '57px'],
                ["style", "text-align", 'left'],
                ["style", "left", '835px'],
                ["style", "font-weight", '400'],
                ["style", "text-decoration", 'none'],
                ["style", "font-size", '10px']
            ],
            "${_AboutPlaybtnCopy}": [
                ["style", "top", '-7px'],
                ["transform", "scaleY", '0.78'],
                ["style", "height", '60px'],
                ["transform", "scaleX", '0.78'],
                ["style", "opacity", '0.61391562732876'],
                ["style", "left", '7px'],
                ["style", "width", '49px']
            ],
            "${_ABOUT}": [
                ["style", "top", '99px'],
                ["style", "font-weight", '600'],
                ["style", "text-align", 'center'],
                ["style", "left", '575px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '1'],
                ["style", "text-decoration", 'underline'],
                ["style", "font-size", '13px']
            ],
            "${_OPPHOVER}": [
                ["style", "top", '-73px'],
                ["style", "height", '70px'],
                ["style", "left", '906px'],
                ["style", "cursor", 'pointer'],
                ["color", "background-color", 'rgba(104,0,34,1.00)']
            ],
            "${_student2}": [
                ["style", "top", '247px'],
                ["style", "height", '32px'],
                ["style", "font-size", '15px'],
                ["style", "left", '0px'],
                ["style", "width", '192px']
            ],
            "${_Text}": [
                ["style", "line-height", '51px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '349px'],
                ["style", "font-size", '52px'],
                ["style", "top", '410px'],
                ["style", "text-align", 'center'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1']
            ],
            "${_Rectangle5}": [
                ["style", "top", '-130px'],
                ["style", "height", '800px'],
                ["style", "left", '-150px'],
                ["style", "width", '1200px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(49,49,49,1.00)'],
                ["style", "width", '1200px'],
                ["style", "height", '800px'],
                ["style", "overflow", 'hidden']
            ],
            "${_HOMEBTN}": [
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", '700'],
                ["style", "left", '554px'],
                ["style", "width", 'auto'],
                ["style", "top", '27px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '16px'],
                ["style", "font-size", '12px'],
                ["style", "clip", [-22,59,37,-23], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "cursor", 'pointer']
            ],
            "${_AboutPlaybtn}": [
                ["style", "top", '-7px'],
                ["transform", "scaleY", '0.78'],
                ["style", "height", '60px'],
                ["transform", "scaleX", '0.78'],
                ["style", "left", '12px'],
                ["style", "width", '49px']
            ],
            "${_about}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_contactUs}": [
                ["style", "top", '4006px'],
                ["style", "opacity", '1'],
                ["style", "left", '-532px']
            ],
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(85,85,85,1.00)'],
                ["style", "height", '626px'],
                ["style", "top", '0px'],
                ["style", "left", '1200px'],
                ["style", "width", '532px']
            ],
            "${_contact2}": [
                ["style", "top", '210px'],
                ["style", "opacity", '0'],
                ["style", "left", '1351px'],
                ["style", "clip", [0,41,97.037109375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Play}": [
                ["style", "top", '56px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '5px'],
                ["style", "font-size", '10px']
            ],
            "${_LOCATIONHOVERCopy}": [
                ["color", "background-color", 'rgba(153,0,51,1)'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '70px'],
                ["style", "opacity", '0'],
                ["style", "left", '760px'],
                ["style", "top", '0px']
            ],
            "${_transpo2Copy}": [
                ["style", "top", '246px'],
                ["style", "height", '32px'],
                ["style", "font-size", '15px'],
                ["style", "left", '0px'],
                ["style", "width", '192px']
            ],
            "${_ColliersAddressCopy2}": [
                ["style", "top", '96px'],
                ["style", "font-size", '9px'],
                ["style", "text-align", 'left'],
                ["style", "text-decoration", 'none'],
                ["style", "height", '47px'],
                ["style", "font-weight", '400'],
                ["style", "left", '267px'],
                ["style", "width", '818px']
            ],
            "${_fax}": [
                ["style", "line-height", '25px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '1406px'],
                ["style", "font-size", '26px'],
                ["style", "top", '282px'],
                ["style", "text-align", 'left'],
                ["style", "height", '21px'],
                ["style", "width", '171px']
            ],
            "${_email}": [
                ["style", "line-height", '25px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '1321px'],
                ["style", "font-size", '26px'],
                ["style", "top", '341px'],
                ["style", "text-align", 'left'],
                ["style", "height", '21px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '341px']
            ],
            "${_goback}": [
                ["style", "top", '64px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '10px'],
                ["style", "font-size", '10px']
            ],
            "${_transpo1Copy}": [
                ["style", "top", '208px'],
                ["style", "left", '67px'],
                ["style", "font-size", '25px']
            ],
            "${_OPPHOVERCopy2}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(153,0,51,1)'],
                ["style", "height", '70px'],
                ["style", "opacity", '0'],
                ["style", "left", '906px'],
                ["style", "cursor", 'pointer']
            ],
            "${_student}": [
                ["style", "top", '209px'],
                ["style", "left", '49px'],
                ["style", "font-size", '25px']
            ],
            "${_ABOUTBTN}": [
                ["style", "top", '27px'],
                ["style", "clip", [-22,64,39,-18], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "cursor", 'pointer'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", '700'],
                ["style", "left", '668px'],
                ["style", "font-size", '12px']
            ],
            "${_Opprtunities}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '533px'],
                ["style", "font-size", '13px'],
                ["style", "top", '183px'],
                ["style", "text-align", 'center'],
                ["style", "height", '16px'],
                ["style", "opacity", '1'],
                ["style", "text-decoration", 'underline'],
                ["style", "width", '120px']
            ],
            "${_LOCATION}": [
                ["style", "top", '232px'],
                ["style", "opacity", '1'],
                ["style", "text-align", 'center'],
                ["style", "text-decoration", 'underline'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '-510px'],
                ["style", "font-size", '13px']
            ],
            "${_PlayCopy}": [
                ["style", "top", '56px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '0px'],
                ["style", "font-size", '10px']
            ],
            "${_contact2Copy}": [
                ["style", "top", '215px'],
                ["style", "opacity", '0'],
                ["style", "left", '1270px'],
                ["style", "clip", [120.9873046875,41,161.23486328125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_rightBTN}": [
                ["style", "top", '221px'],
                ["style", "left", '872px'],
                ["style", "cursor", 'pointer']
            ],
            "${_mainPhoto}": [
                ["style", "left", '109px'],
                ["style", "top", '0px']
            ],
            "${_videobutton}": [
                ["style", "top", '650px'],
                ["style", "left", '740px'],
                ["style", "cursor", 'pointer']
            ],
            "${_FBCopy2}": [
                ["style", "line-height", '25px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '867px'],
                ["style", "font-size", '26px'],
                ["style", "top", '563px'],
                ["style", "text-align", 'center'],
                ["style", "height", '21px'],
                ["style", "width", '87px']
            ],
            "${_house}": [
                ["style", "left", '109px'],
                ["style", "top", '313px']
            ],
            "${_CONTACTHOVERCopy}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(153,0,51,1)'],
                ["style", "height", '70px'],
                ["style", "opacity", '0'],
                ["style", "left", '1050px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Group}": [
                ["style", "left", '150px'],
                ["style", "top", '130px']
            ],
            "${_Rectangle3}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(137,137,137,1.00)']
            ],
            "${_About-header}": [
                ["style", "line-height", '51px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '278px'],
                ["style", "font-size", '52px'],
                ["style", "top", '140px'],
                ["style", "text-align", 'center'],
                ["style", "height", '60px'],
                ["style", "width", '644px']
            ],
            "${_LeftBtn}": [
                ["style", "top", '221px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${_gallery}": [
                ["style", "top", '644px'],
                ["style", "left", '440px']
            ],
            "${_students}": [
                ["transform", "scaleX", '0.92'],
                ["style", "left", '-8px'],
                ["transform", "scaleY", '0.92'],
                ["style", "top", '3px']
            ],
            "${_AboutGallery}": [
                ["style", "top", '-8px'],
                ["transform", "scaleY", '0.78'],
                ["transform", "scaleX", '0.78'],
                ["style", "left", '-5px'],
                ["style", "cursor", 'pointer']
            ],
            "${_About-headerCopy}": [
                ["style", "line-height", '45px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '-510px'],
                ["style", "font-size", '38px'],
                ["style", "top", '268px'],
                ["style", "text-align", 'left'],
                ["style", "height", '98px'],
                ["style", "width", '476px']
            ],
            "${_phone}": [
                ["style", "line-height", '25px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '1406px'],
                ["style", "font-size", '26px'],
                ["style", "top", '219px'],
                ["style", "text-align", 'left'],
                ["style", "height", '21px'],
                ["style", "width", '171px']
            ],
            "${_Rectangle}": [
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0']
            ],
            "${_textCount}": [
                ["style", "top", '461px'],
                ["color", "color", 'rgba(249,248,248,1)'],
                ["style", "opacity", '0.5'],
                ["style", "left", '733px'],
                ["style", "font-size", '24px']
            ],
            "${_AboutTITLE}": [
                ["style", "top", '802px'],
                ["style", "opacity", '1'],
                ["style", "left", '-1px'],
                ["transform", "scaleY", '1']
            ],
            "${_Contact}": [
                ["style", "top", '0px'],
                ["style", "left", '532px'],
                ["style", "clip", [0,1200,626,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_fnb}": [
                ["style", "top", '353px'],
                ["transform", "scaleY", '0'],
                ["motion", "location", '287px 445.5px'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["style", "left", '192px'],
                ["style", "width", '190px']
            ],
            "${_FBCopy}": [
                ["style", "line-height", '25px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '548px'],
                ["style", "font-size", '26px'],
                ["style", "top", '563px'],
                ["style", "text-align", 'center'],
                ["style", "height", '21px'],
                ["style", "width", '139px']
            ],
            "${_LOCATIONHOVER}": [
                ["color", "background-color", 'rgba(104,0,34,1.00)'],
                ["style", "height", '70px'],
                ["style", "top", '-71px'],
                ["style", "left", '760px'],
                ["style", "cursor", 'pointer']
            ],
            "${_About24hr2}": [
                ["transform", "scaleX", '0.92'],
                ["style", "left", '-7px'],
                ["transform", "scaleY", '0.92'],
                ["style", "top", '4px']
            ],
            "${_transpo}": [
                ["style", "left", '641px'],
                ["style", "top", '313px']
            ],
            "${_ColliersAddress}": [
                ["style", "top", '53px'],
                ["style", "text-align", 'left'],
                ["style", "text-decoration", 'none'],
                ["style", "font-weight", '400'],
                ["style", "left", '267px'],
                ["style", "font-size", '15px']
            ],
            "${_ExclusiveMarket}": [
                ["style", "top", '32px'],
                ["style", "text-align", 'left'],
                ["style", "font-weight", '600'],
                ["style", "text-decoration", 'none'],
                ["style", "left", '267px']
            ],
            "${_studentgrp}": [
                ["style", "left", '373px'],
                ["style", "top", '311px']
            ],
            "${_textTotal}": [
                ["style", "top", '461px'],
                ["color", "color", 'rgba(249,248,248,1)'],
                ["style", "opacity", '0.5'],
                ["style", "left", '751px'],
                ["style", "font-size", '24px']
            ],
            "${_About-headerCopy2}": [
                ["style", "line-height", '51px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '-510px'],
                ["style", "font-size", '38px'],
                ["style", "top", '357px'],
                ["style", "text-align", 'left'],
                ["style", "height", '60px'],
                ["style", "width", '476px'],
                ["style", "font-weight", '700']
            ],
            "${_About-subhead}": [
                ["style", "line-height", '51px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '413px'],
                ["style", "width", '373px'],
                ["style", "top", '185px'],
                ["style", "text-align", 'center'],
                ["style", "height", '42px'],
                ["style", "font-size", '18px']
            ],
            "${_legendaryMAP}": [
                ["style", "height", '149px'],
                ["style", "top", '463px'],
                ["style", "left", '-510px'],
                ["style", "width", '225px']
            ],
            "${_goBack2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.61'],
                ["style", "left", '0px']
            ],
            "${_foodcourt}": [
                ["style", "top", '353px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["style", "left", '523px'],
                ["style", "width", '190px']
            ],
            "${_HOMEHOVERCopy2}": [
                ["style", "top", '0px'],
                ["style", "left", '511px'],
                ["style", "height", '70px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["color", "background-color", 'rgba(98,0,32,1.00)']
            ],
            "${_transpo1}": [
                ["style", "top", '208px'],
                ["style", "left", '17px'],
                ["style", "font-size", '25px']
            ],
            "${_scrollButtn}": [
                ["style", "top", '620px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '18px'],
                ["style", "opacity", '1'],
                ["style", "left", '573px'],
                ["style", "width", '52px']
            ],
            "${_CONTACTHOVER}": [
                ["style", "top", '-71px'],
                ["style", "height", '70px'],
                ["style", "left", '1050px'],
                ["style", "cursor", 'pointer'],
                ["color", "background-color", 'rgba(104,0,34,1.00)']
            ],
            "${_AboutHousing2}": [
                ["style", "top", '4px'],
                ["style", "left", '-8px'],
                ["transform", "scaleY", '0.92'],
                ["transform", "scaleX", '0.92']
            ],
            "${_campgallery}": [
                ["style", "top", '1608px'],
                ["style", "opacity", '1'],
                ["style", "left", '1199px']
            ],
            "${_AcceleratingSuccessWhite2}": [
                ["style", "top", '30px'],
                ["style", "height", '109px'],
                ["style", "left", '81px'],
                ["style", "width", '164px']
            ],
            "${_housingCopy}": [
                ["style", "top", '245px'],
                ["style", "height", '32px'],
                ["style", "width", '192px'],
                ["style", "left", '0px'],
                ["style", "font-size", '15px']
            ],
            "${_Location22}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${_redBar4}": [
                ["style", "left", '-1px'],
                ["style", "top", '0px']
            ],
            "${_LOCATIONBTN}": [
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", '700'],
                ["style", "left", '789px'],
                ["style", "width", 'auto'],
                ["style", "top", '27px'],
                ["style", "height", '16px'],
                ["style", "font-size", '12px'],
                ["style", "clip", [-20,89,38,-26], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "cursor", 'pointer']
            ],
            "${_contactUS}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '1359px'],
                ["style", "font-size", '13px'],
                ["style", "top", '176px'],
                ["style", "text-align", 'center'],
                ["style", "height", '16px'],
                ["style", "width", '253px'],
                ["style", "text-decoration", 'underline'],
                ["style", "opacity", '0']
            ],
            "${_location}": [
                ["style", "top", '2406px'],
                ["style", "opacity", '1'],
                ["style", "left", '-1px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 42000,
            autoPlay: false,
            labels: {
                "home": 0,
                "homehover": 859,
                "about": 3851,
                "abouthover": 4867,
                "gallery": 7500,
                "galleryhover": 8350,
                "galleryout": 9332,
                "location": 11000,
                "locationhover": 11847,
                "opportunity": 14626,
                "opphover": 16367,
                "contact": 19000,
                "contacthover": 20087,
                "homeout": 22250,
                "aboutout": 26500,
                "locationout": 33347,
                "oppout": 37850,
                "contactout": 41344
            },
            timeline: [
                { id: "eid1768", tween: [ "style", "${_About-headerCopy}", "left", '83px', { fromValue: '-510px'}], position: 12250, duration: 597, easing: "easeInOutBack" },
                { id: "eid1796", tween: [ "style", "${_FBCopy2}", "opacity", '1', { fromValue: '0'}], position: 16583, duration: 767, easing: "easeInOutBack" },
                { id: "eid1822", tween: [ "style", "${_contact2Copy}", "top", '296px', { fromValue: '215px'}], position: 20390, duration: 454, easing: "easeInOutBack" },
                { id: "eid1798", tween: [ "style", "${_FBCopy}", "top", '580px', { fromValue: '563px'}], position: 16583, duration: 767, easing: "easeInOutBack" },
                { id: "eid1793", tween: [ "transform", "${_foodcourt}", "scaleX", '1', { fromValue: '0'}], position: 16583, duration: 767, easing: "easeInOutBack" },
                { id: "eid1817", tween: [ "style", "${_contact2}", "opacity", '1', { fromValue: '0'}], position: 20390, duration: 454, easing: "easeInOutBack" },
                { id: "eid1692", tween: [ "style", "${_home}", "top", '-802px', { fromValue: '0px'}], position: 4867, duration: 1133, easing: "easeInOutExpo" },
                { id: "eid1702", tween: [ "style", "${_home}", "top", '-796px', { fromValue: '-796px'}], position: 11000, duration: 0, easing: "easeInOutExpo" },
                { id: "eid1726", tween: [ "style", "${_home}", "top", '-1601px', { fromValue: '-796px'}], position: 11847, duration: 1000, easing: "easeInOutExpo" },
                { id: "eid1736", tween: [ "style", "${_home}", "top", '-1601px', { fromValue: '-1601px'}], position: 14626, duration: 0, easing: "easeInOutExpo" },
                { id: "eid1740", tween: [ "style", "${_home}", "top", '-2401px', { fromValue: '-1601px'}], position: 16367, duration: 983, easing: "easeInOutExpo" },
                { id: "eid1746", tween: [ "style", "${_home}", "top", '-2401px', { fromValue: '-2401px'}], position: 19000, duration: 0, easing: "easeInOutExpo" },
                { id: "eid1750", tween: [ "style", "${_home}", "top", '-3200px', { fromValue: '-2401px'}], position: 20087, duration: 757, easing: "easeInOutExpo" },
                { id: "eid1003", tween: [ "style", "${_ABOUTHOVER}", "top", '0px', { fromValue: '-70px'}], position: 4867, duration: 1133, easing: "easeInOutExpo" },
                { id: "eid1020", tween: [ "style", "${_ABOUTHOVER}", "top", '-71px', { fromValue: '0px'}], position: 11847, duration: 1000, easing: "easeInOutExpo" },
                { id: "eid1491", tween: [ "style", "${_HOMEHOVER}", "top", '0px', { fromValue: '-71px'}], position: 859, duration: 891, easing: "easeInOutExpo" },
                { id: "eid1492", tween: [ "style", "${_HOMEHOVER}", "top", '-71px', { fromValue: '0px'}], position: 4867, duration: 1133, easing: "easeInOutExpo" },
                { id: "eid1797", tween: [ "style", "${_FB}", "opacity", '1', { fromValue: '0'}], position: 16583, duration: 767, easing: "easeInOutBack" },
                { id: "eid1814", tween: [ "style", "${_email}", "opacity", '1', { fromValue: '0'}], position: 20390, duration: 454, easing: "easeInOutBack" },
                { id: "eid1800", tween: [ "motion", "${_FB}", [[286.5, 573.5, 0, 0],[286.5, 590.5, 0, 0]]], position: 16583, duration: 767, easing: "easeInOutBack" },
                { id: "eid1789", tween: [ "transform", "${_fnb}", "scaleX", '1', { fromValue: '0'}], position: 16583, duration: 767, easing: "easeInOutBack" },
                { id: "eid1696", tween: [ "style", "${_location}", "top", '800px', { fromValue: '2406px'}], position: 4867, duration: 1133, easing: "easeInOutExpo" },
                { id: "eid1701", tween: [ "style", "${_location}", "top", '806px', { fromValue: '806px'}], position: 11000, duration: 0, easing: "easeInOutExpo" },
                { id: "eid1728", tween: [ "style", "${_location}", "top", '1px', { fromValue: '806px'}], position: 11847, duration: 1000, easing: "easeInOutExpo" },
                { id: "eid1735", tween: [ "style", "${_location}", "top", '1px', { fromValue: '1px'}], position: 14626, duration: 0, easing: "easeInOutExpo" },
                { id: "eid1742", tween: [ "style", "${_location}", "top", '-799px', { fromValue: '1px'}], position: 16367, duration: 983, easing: "easeInOutExpo" },
                { id: "eid1745", tween: [ "style", "${_location}", "top", '-799px', { fromValue: '-799px'}], position: 19000, duration: 0, easing: "easeInOutExpo" },
                { id: "eid1752", tween: [ "style", "${_location}", "top", '-1598px', { fromValue: '-799px'}], position: 20087, duration: 757, easing: "easeInOutExpo" },
                { id: "eid1767", tween: [ "style", "${_LOCATION}", "left", '83px', { fromValue: '-510px'}], position: 12250, duration: 597, easing: "easeInOutBack" },
                { id: "eid1823", tween: [ "style", "${_contact2}", "top", '291px', { fromValue: '210px'}], position: 20390, duration: 454, easing: "easeInOutBack" },
                { id: "eid1065", tween: [ "style", "${_CONTACTHOVER}", "top", '0px', { fromValue: '-71px'}], position: 20087, duration: 757, easing: "easeInOutExpo" },
                { id: "eid1066", tween: [ "style", "${_CONTACTHOVER}", "top", '-71px', { fromValue: '0px'}], position: 41344, duration: 656, easing: "easeInOutExpo" },
                { id: "eid1821", tween: [ "style", "${_fax}", "top", '363px', { fromValue: '282px'}], position: 20390, duration: 454, easing: "easeInOutBack" },
                { id: "eid1693", tween: [ "style", "${_opportunity}", "top", '1600px', { fromValue: '3206px'}], position: 4867, duration: 1133, easing: "easeInOutExpo" },
                { id: "eid1703", tween: [ "style", "${_opportunity}", "top", '1606px', { fromValue: '1606px'}], position: 11000, duration: 0, easing: "easeInOutExpo" },
                { id: "eid1727", tween: [ "style", "${_opportunity}", "top", '801px', { fromValue: '1606px'}], position: 11847, duration: 1000, easing: "easeInOutExpo" },
                { id: "eid1737", tween: [ "style", "${_opportunity}", "top", '801px', { fromValue: '801px'}], position: 14626, duration: 0, easing: "easeInOutExpo" },
                { id: "eid1741", tween: [ "style", "${_opportunity}", "top", '1px', { fromValue: '801px'}], position: 16367, duration: 983, easing: "easeInOutExpo" },
                { id: "eid1747", tween: [ "style", "${_opportunity}", "top", '1px', { fromValue: '1px'}], position: 19000, duration: 0, easing: "easeInOutExpo" },
                { id: "eid1751", tween: [ "style", "${_opportunity}", "top", '-798px', { fromValue: '1px'}], position: 20087, duration: 757, easing: "easeInOutExpo" },
                { id: "eid1691", tween: [ "style", "${_AboutTITLE}", "top", '0px', { fromValue: '802px'}], position: 4867, duration: 1133, easing: "easeInOutExpo" },
                { id: "eid1700", tween: [ "style", "${_AboutTITLE}", "top", '6px', { fromValue: '6px'}], position: 11000, duration: 0, easing: "easeInOutExpo" },
                { id: "eid1725", tween: [ "style", "${_AboutTITLE}", "top", '-799px', { fromValue: '6px'}], position: 11847, duration: 1000, easing: "easeInOutExpo" },
                { id: "eid1734", tween: [ "style", "${_AboutTITLE}", "top", '-799px', { fromValue: '-799px'}], position: 14626, duration: 0, easing: "easeInOutExpo" },
                { id: "eid1739", tween: [ "style", "${_AboutTITLE}", "top", '-1599px', { fromValue: '-799px'}], position: 16367, duration: 983, easing: "easeInOutExpo" },
                { id: "eid1744", tween: [ "style", "${_AboutTITLE}", "top", '-1599px', { fromValue: '-1599px'}], position: 19000, duration: 0, easing: "easeInOutExpo" },
                { id: "eid1749", tween: [ "style", "${_AboutTITLE}", "top", '-2398px', { fromValue: '-1599px'}], position: 20087, duration: 757, easing: "easeInOutExpo" },
                { id: "eid1695", tween: [ "style", "${_contactUs}", "top", '2400px', { fromValue: '4006px'}], position: 4867, duration: 1133, easing: "easeInOutExpo" },
                { id: "eid1704", tween: [ "style", "${_contactUs}", "top", '2406px', { fromValue: '2406px'}], position: 11000, duration: 0, easing: "easeInOutExpo" },
                { id: "eid1729", tween: [ "style", "${_contactUs}", "top", '1601px', { fromValue: '2406px'}], position: 11847, duration: 1000, easing: "easeInOutExpo" },
                { id: "eid1738", tween: [ "style", "${_contactUs}", "top", '1601px', { fromValue: '1601px'}], position: 14626, duration: 0, easing: "easeInOutExpo" },
                { id: "eid1743", tween: [ "style", "${_contactUs}", "top", '801px', { fromValue: '1601px'}], position: 16367, duration: 983, easing: "easeInOutExpo" },
                { id: "eid1748", tween: [ "style", "${_contactUs}", "top", '801px', { fromValue: '801px'}], position: 19000, duration: 0, easing: "easeInOutExpo" },
                { id: "eid1753", tween: [ "style", "${_contactUs}", "top", '2px', { fromValue: '801px'}], position: 20087, duration: 757, easing: "easeInOutExpo" },
                { id: "eid1026", tween: [ "style", "${_LOCATIONHOVER}", "top", '0px', { fromValue: '-71px'}], position: 11847, duration: 1000, easing: "easeInOutExpo" },
                { id: "eid1046", tween: [ "style", "${_LOCATIONHOVER}", "top", '-71px', { fromValue: '0px'}], position: 16367, duration: 983, easing: "easeInOutExpo" },
                { id: "eid1795", tween: [ "style", "${_FBCopy}", "opacity", '1', { fromValue: '0'}], position: 16583, duration: 767, easing: "easeInOutBack" },
                { id: "eid1765", tween: [ "style", "${_MapNEW4}", "left", '83px', { fromValue: '1219px'}], position: 12115, duration: 732, easing: "easeInOutBack" },
                { id: "eid1799", tween: [ "style", "${_FBCopy2}", "top", '580px', { fromValue: '563px'}], position: 16583, duration: 767, easing: "easeInOutBack" },
                { id: "eid1769", tween: [ "style", "${_About-headerCopy2}", "left", '83px', { fromValue: '-510px'}], position: 12250, duration: 597, easing: "easeInOutBack" },
                { id: "eid1790", tween: [ "transform", "${_fnb}", "scaleY", '1', { fromValue: '0'}], position: 16583, duration: 767, easing: "easeInOutBack" },
                { id: "eid1766", tween: [ "style", "${_legendaryMAP}", "left", '83px', { fromValue: '-510px'}], position: 12250, duration: 597, easing: "easeInOutBack" },
                { id: "eid1815", tween: [ "style", "${_fax}", "opacity", '1', { fromValue: '0'}], position: 20390, duration: 454, easing: "easeInOutBack" },
                { id: "eid1791", tween: [ "transform", "${_retail}", "scaleX", '1', { fromValue: '0'}], position: 16583, duration: 767, easing: "easeInOutBack" },
                { id: "eid1694", tween: [ "style", "${_campgallery}", "top", '0px', { fromValue: '1608px'}], position: 4867, duration: 1133, easing: "easeInOutExpo" },
                { id: "eid1697", tween: [ "style", "${_campgallery}", "top", '-27px', { fromValue: '-27px'}], position: 7500, duration: 0, easing: "easeInOutExpo" },
                { id: "eid1818", tween: [ "style", "${_phone}", "opacity", '1', { fromValue: '0'}], position: 20390, duration: 454, easing: "easeInOutBack" },
                { id: "eid1238", tween: [ "style", "${_OPPHOVER}", "top", '0px', { fromValue: '-73px'}], position: 16367, duration: 983, easing: "easeInOutExpo" },
                { id: "eid1239", tween: [ "style", "${_OPPHOVER}", "top", '-71px', { fromValue: '0px'}], position: 20087, duration: 757, easing: "easeInOutExpo" },
                { id: "eid1820", tween: [ "style", "${_email}", "top", '422px', { fromValue: '341px'}], position: 20390, duration: 454, easing: "easeInOutBack" },
                { id: "eid1792", tween: [ "transform", "${_retail}", "scaleY", '1', { fromValue: '0'}], position: 16583, duration: 767, easing: "easeInOutBack" },
                { id: "eid1794", tween: [ "transform", "${_foodcourt}", "scaleY", '1', { fromValue: '0'}], position: 16583, duration: 767, easing: "easeInOutBack" },
                { id: "eid1698", tween: [ "style", "${_campgallery}", "left", '-2px', { fromValue: '1199px'}], position: 8350, duration: 982, easing: "easeInOutExpo" },
                { id: "eid1699", tween: [ "style", "${_campgallery}", "left", '1188px', { fromValue: '-2px'}], position: 9332, duration: 597, easing: "easeInOutExpo" },
                { id: "eid1816", tween: [ "style", "${_contact2Copy}", "opacity", '1', { fromValue: '0'}], position: 20390, duration: 454, easing: "easeInOutBack" },
                { id: "eid1824", tween: [ "style", "${_phone}", "top", '300px', { fromValue: '219px'}], position: 20390, duration: 454, easing: "easeInOutBack" },
                { id: "eid1819", tween: [ "style", "${_contactUS}", "top", '257px', { fromValue: '176px'}], position: 20390, duration: 454, easing: "easeInOutBack" },
                { id: "eid1813", tween: [ "style", "${_contactUS}", "opacity", '1', { fromValue: '0'}], position: 20390, duration: 454, easing: "easeInOutBack" }            ]
        }
    }
},
"redbar": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '1276px', '800px', 'auto', 'auto'],
                    id: 'redBar',
                    opacity: 1,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/redBar.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_redBar}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '800px'],
                ["style", "width", '1276px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 30418,
            autoPlay: true,
            timeline: [
                { id: "eid55", tween: [ "style", "${_redBar}", "top", '417px', { fromValue: '0px'}], position: 21418, duration: 9000, easing: "easeOutSine" }            ]
        }
    }
},
"video": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '453px'],
                ["style", "width", '802px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"about": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '100px', '47px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRect',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RoundRect}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '47px'],
                ["style", "width", '100px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"location": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '100px', '47px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRect2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RoundRect2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '47px'],
                ["style", "width", '100px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-4390865");
