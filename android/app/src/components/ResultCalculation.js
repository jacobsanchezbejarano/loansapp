import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ResultCalculation(props) {
    
    const {capital,interes,months,total,errorMessage} = props;
    return (
        <View style={styles.content}>
            {total && (
                <View style={styles.boxResult}>

                    <Text style={styles.title}>Resumen</Text>
                    
                    <DataResult title="Cantidad Solicitada: " value={capital+" BOB"}/>
                    <DataResult title="Interés: " value={interes+"%"}/>
                    <DataResult title="Plazo: " value={months+" meses."}/>
                    <DataResult title="Pago Mensual: " value={total.monthlyFee+" BOB"}/>
                    <DataResult title="Total a pagar: " value={total.totalPayable+" BOB"}/>

                </View>
                
            )}
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    );
}

function DataResult(props) {
    const{title,value} = props;

    return(
        <View style={styles.value}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>       
    );

}


const styles = StyleSheet.create({
    content:{
        marginHorizontal:40,
    },
    boxResult:{
        padding:30,
    },
    title:{
        fontSize:25,
        textAlign:'center',
        fontWeight:'bold',
        marginBottom:25,
    },
    value:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:15,
    },
    error:{
        textAlign:'center',
        color:'#f00',
        fontWeight:'bold',
        fontSize:20,
    },
})
