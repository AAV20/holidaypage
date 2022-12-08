
import { Component } from 'react';
// import {Title} from '../MainTags'
import FindGift from './findGift/index';
import Holidays from './holidays/Holidays';
import HowToWork from './howToWork';

class Main extends Component{
    render(){
        return(
            <main>
          <FindGift/>
         <HowToWork/>
         <Holidays/>
            </main>
        )
    }
}


export default Main