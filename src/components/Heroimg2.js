import React,{Component} from 'react'
import "./Heroimg2styles.css"
import Slide from 'react-reveal/Slide';
class Heroimg2 extends Component {
    render(){
        return (
         <Slide bottom cascade duration={700}>   
        <div className='hero-img'>
            <div className='heading'>
                <Slide top cascade duration={700}><h1>{this.props.heading}</h1> </Slide>
                <p>{this.props.text}</p>
            </div>
        </div>
        </Slide>
        );
    }
}

export default Heroimg2
