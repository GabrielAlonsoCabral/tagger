import { useState } from 'react';
import { insertDocument } from '../firebase/firestore';

const useTagger = () => {
  
  const tagger = async (tag, useAsync=false) => {

    try{    
      if(useAsync){
          const output = await insertDocument(tag.collection, tag.payload)
          return output.id               
      }
      else {
        insertDocument(tag.collection, tag.payload)
        return null        
      }
    } catch (error) {
      console.error('Error adding tag event:', error);
    }
  };

  return {
    tagger
  };
};

export default useTagger;
