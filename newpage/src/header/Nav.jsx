import { Component } from "react";
import menuItems from './header.json'
import { Button2, MenuItem } from '../MainTags';
import styles from './Header.module.css'
class Nav extends Component{
    constructor(){
        super();
    }
   
    render(){
        return(
           <nav>
               <ul className={styles.menu__parent}>
            {menuItems.map(item=>(
                <MenuItem key={item.id}>{item.name}</MenuItem>
            ))}
               </ul>
           </nav>
        )
    }
}


export default Nav;