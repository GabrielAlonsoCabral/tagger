import { Button, Pressable, View,  Text } from "react-native";
import CodeReferralModal from "./modals/CodeReferralModal";
import { useState } from "react";

export default function AccountReferral(){
    const [isReferralModalOpen,setIsReferralModalOpen] = useState()
  
    function toggleModal(){
        setIsReferralModalOpen(!isReferralModalOpen)
    }

    const primaryColor = "#00174F"
    
    return (<>
        <CodeReferralModal toggleModal={toggleModal} visible={isReferralModalOpen}/>


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
    </>
    )
}