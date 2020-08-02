


import React, { Component } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Main } from '../components/Main';
import { connect } from 'react-redux';
@connect(
    state=>{
        return {
            data:state.data
        }
    },
    dispatch=>{
        return {
            
        }
    }
)
export default class Indexcpt extends Component {
    render() {
        console.log(this.props)
        const {
            data:{
                city,
                count
            }
        } = this.props;
        return (
            <div>
                <div style={{width:'100%',height:'60px',backgroundColor:'#666'}}>
                    <Header />
                    <h2>city----{ city }</h2>
                </div>
                <div>
                    <Main/>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}