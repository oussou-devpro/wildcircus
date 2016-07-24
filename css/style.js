import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "h1": {
        "fontFamily": "'Fjalla One', sans-serif",
        "color": "#47adcb"
    },
    "h2": {
        "fontFamily": "'Fjalla One', sans-serif"
    },
    "h3": {
        "fontFamily": "'Fjalla One', sans-serif"
    },
    "h4": {
        "fontFamily": "'Fjalla One', sans-serif"
    },
    "divider": {
        "backgroundImage": "url('../img/divider-pattern.png')",
        "backgroundRepeat": "repeat-x",
        "height": 4,
        "width": "100%"
    },
    "navbar brand": {
        "fontFamily": "'Merienda', cursive",
        "fontSize": 28
    },
    "carousel-control": {
        "border": "none",
        "width": 60,
        "height": 60,
        "lineHeight": 50,
        "fontSize": 40,
        "MozBorderRadius": 3,
        "WebkitBorderRadius": 3,
        "borderRadius": 3
    },
    "carousel-caption": {
        "background": "none",
        "maxWidth": 800,
        "top": 150,
        "paddingTop": 0,
        "paddingRight": 200,
        "paddingBottom": 0,
        "paddingLeft": 200
    },
    "carousel-caption h1": {
        "textShadow": "0px 2px #222"
    },
    "carousel-caption a": {
        "marginTop": 20
    },
    "heading": {
        "textAlign": "center",
        "paddingTop": 50,
        "paddingRight": 0,
        "paddingBottom": 50,
        "paddingLeft": 0
    },
    "screenshots": {
        "textAlign": "center",
        "paddingTop": 50,
        "paddingRight": 0,
        "paddingBottom": 50,
        "paddingLeft": 0
    },
    "features": {
        "textAlign": "center",
        "paddingTop": 50,
        "paddingRight": 0,
        "paddingBottom": 50,
        "paddingLeft": 0
    },
    "download": {
        "textAlign": "center",
        "paddingTop": 50,
        "paddingRight": 0,
        "paddingBottom": 50,
        "paddingLeft": 0
    },
    "about divrow": {
        "paddingTop": 50,
        "paddingRight": 0,
        "paddingBottom": 50,
        "paddingLeft": 0
    },
    "screenshots h1": {
        "paddingBottom": 30
    },
    "footer": {
        "backgroundColor": "#1b1b1b",
        "color": "#999999"
    },
    "footer span12": {
        "textAlign": "center"
    },
    "social li a": {
        "backgroundImage": "url(../img/social-media-icons.png)",
        "backgroundRepeat": "no-repeat",
        "display": "block",
        "height": 32,
        "width": 32
    },
    "social li afacebook-icon": {
        "backgroundPosition": "0px 0px"
    },
    "social li a:hoverfacebook-icon": {
        "backgroundPosition": "0px -32px"
    },
    "social li atwitter-icon": {
        "backgroundPosition": "-32px 0px"
    },
    "social li a:hovertwitter-icon": {
        "backgroundPosition": "-32px -32px"
    },
    "social li agoogle-icon": {
        "backgroundPosition": "-64px 0px"
    },
    "social li a:hovergoogle-icon": {
        "backgroundPosition": "-64px -32px"
    }
});