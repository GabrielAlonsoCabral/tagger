import { Modal, TouchableOpacity, View, StyleSheet, Text, ActivityIndicator } from "react-native";
import ClosabeIcon from "../../configs/closabeIcon";
import ClipboardIcon from "../../configs/clipboardIcon";
import ReferralImage from "../../configs/referralImage";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { useState } from "react";
import * as Clipboard from 'expo-clipboard';


export default function CodeReferralModal({toggleModal, visible}){
    const [isLoading,setIsLoading] = useState()
    const [code,setCode] = useState()

    const primaryColor = "#00174F"
    const brand = "sumicity"

    function copyToClipboard(text){
        Clipboard.setStringAsync(text)
        .then(result=>{
            Toast.show({
                type: 'success',
                text1: 'Código copiado',
                text2: 'Seu código está pronto para ser compartilhado.',
                position:'bottom',        
                visibilityTime:2000
              });
        })        
    }
      
    function handleGenerateCupom(){
        if(code){            
          copyToClipboard(code)
          return
        }
    
        setIsLoading(true)
        setCode("")
        
        setTimeout(()=>{
          setIsLoading(false)
          setCode("DBUIJK")
          copyToClipboard(code)
        },1000)
    }


    return <>
    <Modal
        animationType="slide"
        transparent={true}        
        visible={visible}
        onRequestClose={toggleModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

          <TouchableOpacity style={{padding:10, right:10,top:10,position:'absolute'}}
            onPress={toggleModal}
          >
            <ClosabeIcon/>
          </TouchableOpacity>

            <Text style={{color:primaryColor, fontWeight:700, fontSize:20, margin:20}}>Indicou, ganhou!</Text>

            <ReferralImage />

              <Text style={{color:primaryColor, fontSize:14, marginBottom:10, fontWeight:500}}>
              Participe do programa ‘Indique Um Amigo’ e ganhe 100% de desconto na sua fatura.
              </Text>

              <Text style={{fontSize:14, marginBottom:10, fontWeight:400}}>
                Envie seu cupom exclusivo para seus amigos. Eles ganham 20% de desconto e você ganha fatura grátis!
              </Text>

              <Text style={{color:primaryColor, fontWeight:600, fontSize:16, margin:20}}>
              Como usar seu cupom
              </Text>

              <Text style={styles.modalLIText}> 1- Compartilhe seu código com quem você quiser </Text>
              <Text style={styles.modalLIText}> 2- Peça para que seu amigo acesse o site da {brand.toUpperCase()} e escolha um dos planos </Text>
              <Text style={styles.modalLIText}> 3- Basta seu amigo inserir o código no momento da assinatura no campo: Código de desconto, e finalizar o pedido</Text>                
            
            <TouchableOpacity onPress={handleGenerateCupom} style={{width:'70%'}}>
              <View style={{backgroundColor:!code ? primaryColor:'white',  borderRadius:10, marginTop:50, alignItems:'center', borderColor:code ? primaryColor:undefined, borderWidth:code ? 1:undefined, padding:10}}>


                  {code ? (                  
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                      <Text style={{color:primaryColor, textAlign:'center', marginRight:8}}>{code}</Text>
                      <ClipboardIcon />
                    </View>
                  ):null}

                  {!code && isLoading ? <ActivityIndicator /> :null}

                  {!code && !isLoading ? (<Text style={{color:'white'}}>
                    GERAR CUPOM
                  </Text>
                  ):null}
                  
              </View>
              </TouchableOpacity>
              
              <Toast/>

          </View>
        </View>
      </Modal>
    </>
}


      
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      height:"90%",
      width:"90%",
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalLIText:{
      textAlign:'center',
      fontWeight:400,
       margin:5
    }
});