import { Text, View } from '@react-pdf/renderer';
import React from 'react';

const ProductRow = () => {
  return (
    <View style={{ marginBottom: 4 }}>
      <View style={{ display: 'flex', flexDirection: 'row'}}>
        <Text break style={{ width: 88, fontSize: 8, marginRight: 8 }}>Air Jordan Gym Red Satin Original</Text>
        <Text break style={{ width: 40, fontSize: 8, marginRight: 8 }}>Black, Red</Text>
        <Text break style={{ width: 72, fontSize: 8, marginRight: 8 }}>123543245</Text>
        <Text break style={{ width: 40, fontSize: 8 }}>1 pcs</Text>
      </View>
    </View>
  );
};

export default ProductRow;