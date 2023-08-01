import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Button, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import "firebase/firestore";
import { useState } from 'react';
import ReferralImage from './src/configs/referralImage';
import ClipboardIcon from './src/configs/clipboardIcon';

export default function App() {
  const [isReferralModalOpen,setIsReferralModalOpen] = useState()

  function toggleModal(){
    setIsReferralModalOpen(!isReferralModalOpen)
  }

  const brand = "sumicity"
  const primaryColor = "#00174F"
  const isLoading = true
  const code="DH8JUI"

  


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Modal
        animationType="slide"
        transparent={false}        
        visible={isReferralModalOpen}
        onRequestClose={toggleModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

          <TouchableOpacity style={{padding:10, right:10,top:10,position:'absolute'}}
            onPress={toggleModal}
          >
            <Text>Fechar</Text>
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

              <Text style={{textAlign:'center', fontWeight:400, margin:5}}> 1- Compartilhe seu código com quem você quiser </Text>
              <Text style={{textAlign:'center', fontWeight:400, margin:5}}> 2- Peça para que seu amigo acesse o site da {brand.toUpperCase()} e escolha um dos planos </Text>
              <Text style={{textAlign:'center', fontWeight:400, margin:5}}> 3- Basta seu amigo inserir o código no momento da assinatura no campo: Código de desconto, e finalizar o pedido</Text>                

            
            
              <View style={{backgroundColor:!code ? primaryColor:'white', width:'70%', borderRadius:10, marginTop:50, alignItems:'center', borderColor:code ? primaryColor:undefined, borderWidth:code ? 1:undefined}}>
                <Pressable onPress={()=>setIsReferralModalOpen(true)} style={{padding:10}}>

                  {code ? (<View style={{flexDirection:'row', alignItems:'center'}}>
                  <Text style={{color:primaryColor, textAlign:'center', marginRight:8}}>{code}</Text>
                  <ClipboardIcon />
                  </View>
                  ):null}

                  {!code && isLoading ? <ActivityIndicator /> :null}

                  {!code && !isLoading && (<Text>
                    GERAR CUPOM
                  </Text>
                  )}
                  

                </Pressable> 
              </View>
              
          </View>
        </View>
      </Modal>

      <View style={{backgroundColor:primaryColor, width:"90%", height:"23%", borderRadius:16,  justifyContent:'center', alignItems:'center'}}>
        <Text style={{color:'#FFFFFF',  lineHeight:25, fontSize:20, fontWeight:700}}>
          Indicou, Ganhou!  
        </Text>

        <Text style={{color:"#FFFFFF",lineHeight:15, fontWeight:600, fontSize:12, padding:30}}>
          Ganhe 100% de desconto na próxima fatura* indicando um amigo com seu cupom exclusivo
        </Text>



        <View style={{backgroundColor:'white', width:'50%', borderRadius:16}}>
          <Pressable onPress={()=>setIsReferralModalOpen(true)}>
          <Button title='SAIBA MAIS' color={primaryColor} onPress={()=>setIsReferralModalOpen(true)}/>   
          </Pressable> 
        </View>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
});