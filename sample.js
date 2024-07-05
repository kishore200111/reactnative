import React, { useState,Component} from 'react';
import { View, Text, TextInput, ScrollView, Image,Button} from 'react-native';
// import { tailwind } from 'tailwindcss-react-native';

class  Operation extends Component{

    // constructor(props){
    //     super(props);
    //     this.state={
    //         num:0,
    //     }        
    // }


render(){
    return(
        <View>
            <Text>{'kj'}</Text>
        {/* <Button onPress={()=>{
            this.state.nuum+1
        }} ></Button> */}
        </View>
    )
}
}
// const name="Ramesh"

// const add=(num1,num2)=>{
//     return num1+num2;
// }
// const Students=props=>{
//     return <Text>Hi {props.
//         names}!!, Welcome to React Native Tutorials!!!!!!!!!!</Text>
// }

// const Start = () => {
//     const [isActive,setIsActive]=useState(false)
//     return (

//         <View style={{backgroundColor:'#00dcff'}}>
//             <Text style={{textAlign:'center',fontSize:25,fontWeight:'500'}}>Welcome to React Js!!</Text>
//             <Text style={{textAlign:'center',margin:'3',}}>{name}</Text>
//             <Text>Sum of Two Numbers:{add(5,5)}</Text>
//             <Image
//                 // source={{uri:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600"}} 
//                 source={require('./app/assets/sampleimage.jpg')}
//                 resizeMode='center'
//                 style={{ width: 300, height: 400, borderRadius: 50 }} />
//             <Students names="Guna"/>
//             <Students names="Fayas"/>
//             <Students names="Raghul"/>
//             <Students names="Baga"/>
//             <TextInput
//             style={{height:40,alignItems:'center',borderWidth:2,margin:10}}
//             defaultValue="Enter Messages Here..."
//             />
//             <Text>{isActive?'Plan Activated':'Plan Not Activated'}</Text>
//             <Button onPress={()=>{setIsActive(true)
//             }}title="Activate"/>
//         </View>

//     );
// }

export default Operation;