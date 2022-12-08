import React, { Component } from 'react';
import styles from '../Main.module.css';

class Holidays extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            id:1
        }
    }
    componentDidMount(){
        fetch('https://retoolapi.dev/3aP0rG/holidays')
        .then(res=>res.json())
        .then(result=>this.setState({data:result}))
    }

  
    render() {
        return (
            <div>
                <div className={styles['gifthead']}>
                    <h2>Gifts for all Occasions</h2>
                    <p>“Try our web app to find the best gifts for all occasions”</p>
                </div>
                <div className={styles['numberscount']}>
                    <div className={styles['number']}>
                        {[...Array(4)].map((item,index)=>(
                            <h2 onClick={()=>this.setState({id:index+1})} className={index+1===this.state.id ? styles['active'] : undefined} 
                            key = {index}>0{index+1}</h2>
                        ))}
                    </div>
                
               {this.state.data.map(item=>(
                   item.id===this.state.id ? (
                   <div key={item.id}>
                       <img src={item.img} alt="" />
                       <p>{item.name}</p>
                       <button>See More›</button>
                   </div>) : null
               ))} 
               </div>
            </div>
        );
    }
}

export default Holidays;