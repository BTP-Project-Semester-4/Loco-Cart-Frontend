import React,{Component} from 'react';
export class Colors extends Component{
    render()
    {
        const {colors}=this.props;
        return(
            // <div>
                 <div className="colors">
                  {
                       colors.map((color,index)=>(
                      <button style={{background:color}} key={index}></button>
                    ))
                  }
                {/* </div> */}
            </div>
        )
    }
}
export default Colors;