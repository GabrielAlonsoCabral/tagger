import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import "firebase/firestore";
import useTagger from './src/hooks/useTagger';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

export default function App() {
  const {tagger} = useTagger()
  const {sessionId, setSessionId} = useState()

  useEffect(()=>{    
    tagger({
      collection:'sessions',
      payload:{
        brand:'sumicity',
        document:"30030030030",
        os:'IOS',
        source:'app',
        version:'0.1',
        createdAt:dayjs().format('DD-MM-YYYY HH:mm:ss')
      }
    }, true)
    .then(response=>{
      console.log("RESPONSE",response)
      setSessionId(response)}
      )
  },[])
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title='Clique aqui' onPress={()=>{
        console.log(sessionId)
                tagger({
                  collection:'events',
                  payload:{
                    session_id:sessionId??"",
                    origin:'ONBOARDING_STEP_1',
                    previous_origin:'ONBOARDING_STEP_0',
                    label:'Botão de login',
                    createdAt:dayjs().format('DD-MM-YYYY HH:mm:ss')
                  }
                })
      }}>
          Clique aqui
      </Button>
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
});
