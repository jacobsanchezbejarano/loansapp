import React,{useState, useEffect} from "react";
import {StyleSheet, View, Text, SafeAreaView, StatusBar} from "react-native";
import Form from "./android/app/src/components/Form.js";
import Footer from "./android/app/src/components/Footer.js";
import ResultCalculation from "./android/app/src/components/ResultCalculation.js";
import colors from "./android/app/src/utils/colors.js";



export default function App(){

  const [capital,setCapital]=useState(null);
  const [interes,setInteres]=useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(()=>{
      if(capital&&interes&&months) calculate();
      else reset();
      
  },[capital,interes,months]);

  const calculate = () => {

      reset();

      if(!capital){
          setErrorMessage('Añade el capital.');
      }else if(!interes){
          setErrorMessage('Añade el interés.');
      }else if(!months){
          setErrorMessage('Añade el periodo.');
      }

      else{
        
          const i = interes/100;
          const fee = capital /((1-Math.pow(i+1,-months))/i);
          console.log(fee.toFixed(2));
          console.log((fee*months).toFixed(2));
          setTotal({
            monthlyFee:(fee.toFixed(2)),
            totalPayable: ((fee*months).toFixed(2)),
          });
        
      }

      

  };

  const reset = () => {
    setErrorMessage("");
    setTotal(null)
  };

  return(

    <>
      <StatusBar barStyle='light-content'/>
    
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background}/>
        <Text style={styles.titleApp}>Cotizador de Préstamos</Text>

        <Form 
          setCapital={setCapital} 
          setInteres={setInteres} 
          setMonths={setMonths}
          />
        
      </SafeAreaView>

      <ResultCalculation 
      
      capital={capital}
      interes={interes}
      months={months}
      total={total}
      errorMessage={errorMessage}/>

      <Footer calculate={calculate}/>
      
    </>

  );

}

const styles = StyleSheet.create({
  safeArea:{
    
    height:290,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems:'center',
  },
  background:{
    backgroundColor:colors.PRIMARY_COLOR,
    height:200,
    width:"100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position:"absolute",
    zIndex:-1,
    
  },
  titleApp:{
    fontSize:25,
    fontWeight:"bold",
    color:'#fff',
    marginTop:15,
  },
});