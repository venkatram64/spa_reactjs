import React from "react";

class Element extends React.Component{
    render(){
        return <div className="footer-col col-md-4">
                <h3>{this.props.title}</h3>
                {this.props.children}
            </div>;
    }
}
class TextFooter extends React.Component{

    static get defaultProps(){
        return {
            title: "Venkatram, you forgot the title.",
            content: "Venkatram, you still rocks."
        }
    }

    static get propTypes(){
        return {
            title: React.PropTypes.string,
            content:React.PropTypes.node
        };
    }
    
    render(){
        return <Element title={this.props.title}>
                    <p>{this.props.content}</p>
                </Element>
    }
}

class SocialLink extends React.Component {
    render(){
        let className = "fa fa-fw fa-" + this.props.name; 
        return <li>
                <a href={this.props.link} className="btn-social btn-outline">
                <i className={className}></i></a>
            </li>
    }
}
class ComplexFooter extends React.Component {

    render(){
        let children = [];
        for (let sl of this.props.content){
            children.push(<SocialLink {...sl} key={sl.name}/>);
        }

        return <Element title={this.props.title}>
                    <ul className="list-inline">{children}</ul>
                </Element>;
    }
}
export default class Footer extends React.Component{
    render(){
        return <footer className="text-center">
                    <div className="footer-above">
                        <div className="container">
                            <div className="row">
                                <TextFooter {...this.props.data[0]}/> 
                                <ComplexFooter {...this.props.data[1]}/>
                                <TextFooter {...this.props.data[2]}/>
                            </div>
                        </div>
                    </div>
                    <div className="footer-below">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    Copyright &copy; Your Website 2014
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>;
    }
}