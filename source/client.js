import React from "react";
import ReactDOM from "react-dom";
import App from './components/app';
import {default as Portfolio} from './components/portfolio';
import About from './components/about';
import Contact from './components/contact';
import Header from './components/header';


let portfolioModel = [
    {img:"cabin",link:"http://github.com/venkatram64"},
    {img:"cake",link:"http://github.com/venkatram1964"},
    {img:"circus",link:"http://google.com"},
    {img:"game",link:"http://apple.com"},
    {img:"safe",link:"http://msn.com"},
    {img:"submarine",link:"http://javaworld.com"}
];

let headerModel = {
    title:"Master React Components",
    subt:"React - Components - JSX - ES6"
}

let footerModel = [
	{title:"Location", content:"3481 Melrose Place<br/>Beverly Hills, CA 90210"},
	{title:"Around the Web", content:[
		{link:"#", name:"facebook"},
		{link:"#", name:"google-plus"},
		{link:"#", name:"twitter"},
		{link:"#", name:"linkedin"},
		{link:"#", name:"dribbble"}
	]},
	{title:"About Freelancer", content:"Freelance is a free to use, open source Bootstrap theme created by Start Bootstrap."}
];


let mv = {
        header:{model:headerModel, view:Header, label:"React Components"},
        portfolio:{model:portfolioModel, view:Portfolio, label:"Portfolio"},
        about:{view:About, label:"About"},
        contact:{view:Contact, label:"Contact"},
        footer:{model:footerModel}
    };


ReactDOM.render(<App data={mv}/>, document.getElementById("react-app"));