import React,{Component} from 'react';

class Ninjas extends Component{
    // constructor(props){
    //     super(props);
    //     console.log(this.props);
    // }
    render(){
        const ninjas = this.props.ninjas;
        const ninjaList = ninjas.map((ninja)=>{
            return(
                <div className='ninja' key={ninja.id}>
                    <div>Name:{ninja.name}</div>
                    <div>Age:{ninja.age}</div>
                    <div>Belt:{ninja.belt}</div>
                </div>
            )
        })
        //below is called descructuring syntax
        // const {name,age,belt} = this.props;
        return(
            <div className="ninjaList">
                {ninjaList}
            </div>
        )
        
    }
}

export default Ninjas;