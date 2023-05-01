import React, { Component } from "react";
import BalanceLeft from "./BalanceLeft";
import CryptoNetwork from "./CryptoNetwork";
import FundsAddress from "./FundsAddress";
import EmailAddress from "./EmailAddress";
import ThankYou from "./ThankYou";
import SellingPrice  from "./SellingPrice";
import StoreName from "./StoreName";
import CashOrCard from "./CashOrCard";
import GiftCardPin from "./GiftCardPin";

export default class FormParent extends Component{

    state = {
        step: 1,
        storeName: '',
        balance:'',  //balance left
        sellingPrice:'',
        cryptoNetwork:'',  //Polygon or Ethereum
        fundsAddress:'', //The address user will receive funds at
        cashOrCard:'', //Does user prefer cash deposit or to give card info
        giftCardNumber:'', //if user chose cash deposit
        giftCardPin:'' //if user chose cash deposit
    }

    //Define functions to be passed as props to child companents
    //These functions control the multistep form navigation

    stepBack = () =>{
        const { step } = this.state;
        this.setState({ step: step - 1})
    }

    stepForward = ()=>{
        const { step } = this.state;
        this.setState({ step: step + 1})
    }

    //function to handle form inouts (reactjs: controlled form used here)
    handleChanege = inputName => e =>{
        this.setState({[inputName]:e.target.value})
    }


    render(){
        const { step } = this.state;
        const { storeName, balance, sellingPrice, cryptoNetwork, fundsAddress, cashOrCard, giftCardNumber, giftCardPin} = this.state
        const input_vals = { storeName, balance, sellingPrice, cryptoNetwork, fundsAddress, cashOrCard, giftCardNumber, giftCardPin}


        switch (step) {
            case 1: 
              return (
                <StoreName />
              )
            case 2: 
              return (
                <BalanceLeft />
              )
            case 3: 
              return (
                <SellingPrice />
              )
            case 4:
              return (
                <CryptoNetwork />
              )
              case 5: 
              return (
                <FundsAddress />
              )
            case 6:
              return (
                <CashOrCard />
              )
              case 7: 
              return (
                cashOrCard="cash"? <EmailAddress/>:<giftCardNumber/>                
              )
            case 8:
              return (
                <GiftCardPin />
              )
              case 9: 
              return (
                <ThankYou />
              )
            
            default: 
               //
          }
    }
}
