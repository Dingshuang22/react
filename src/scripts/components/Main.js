import React,{ Component } from 'react';

let arr = ['vue','react','小程序']
export class Main extends Component{
    render(){
        return (
            <div>
                {
                    arr.map((item,i)=>{
                        return (
                            <p key={i} style={{backgroundColor:'red',color:'blue'}}>{ item }</p>
                        )
                    })
                }
                <button onClick={()=>alert('点击事件')}>点击事件</button>
            </div>
        )
    }
}