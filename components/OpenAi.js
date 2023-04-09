// import React, { useState } from 'react';
// import { View, TextInput, Button, Text,Dimensions, TouchableOpacity } from 'react-native';

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;


// const OpenAi = () => {
//   const [question, setQuestion] = useState('');
//   const [answer, setAnswer] = useState('');

//   const handleSubmit = async () => {
//     try {
//       const response = await fetch(
//         'https://api.openai.com/v1/engines/text-davinci-002/completions',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer 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`
//           },
//           body: JSON.stringify({
//             prompt: question,
//             max_tokens: 50,
//             temperature: 0.5,
//           }),
//         }
//       );

//       const result = await response.json();
//       setAnswer(result.choices[0].text);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <View>
//       <TextInput
//         value={question}
//         onChangeText={text => setQuestion(text)}
//         placeholder="Ask a question"
//         style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
//       />
//       {/* <Button  title="Submit" onPress={handleSubmit} /> */}

//       <View style={{ marginTop:0.02 * windowHeight, justifyContent: "center", alignItems: "center" }}>
//         <TouchableOpacity
//           onPress={handleSubmit}
//         >
//           <Text
//             style={{
//               fontWeight: "bold",
//               fontSize: 0.03 * windowHeight,
//               width: 0.8 * windowWidth,
//               color: "#f1f4fa",
//               backgroundColor: "#e71e70",
//               padding: 0.01 * windowHeight,
//               borderRadius: 0.01 * windowHeight,
//               borderStyle: "solid",
//               borderColor: "grey",
//               borderWidth: 1,
//               textAlign: "center",
//             }}
//           >
//             Submit
//           </Text>
//         </TouchableOpacity>
//       </View>


      
//       <Text>{answer}</Text>
//     </View>
//   );
// };








// export default OpenAi;




// import React, { useState } from 'react';
// import { View, TextInput, Text, TouchableOpacity, Dimensions } from 'react-native';
// import OpenAI from 'openai-api';

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// const openai = new OpenAI('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');

// const OpenAi = () => {
//   const [question, setQuestion] = useState('');
//   const [answer, setAnswer] = useState('');

//   const handleSubmit = async () => {
//     try {
//       const result = await openai.complete({
//         engine: 'text-davinci-003',
//         prompt: question,
//         maxTokens: 100,
//         temperature: 0.5,
//       });

//       if (result.choices && result.choices.length > 0) {
//         setAnswer(result.choices[0].text);
//       } else {
//         console.log('Empty response from OpenAI API', result);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <View style={{ width: '80%', marginBottom: 20 }}>
//         <TextInput
//           value={question}
//           onChangeText={text => setQuestion(text)}
//           placeholder="Ask a question"
//           style={{
//             height: 40,
//             borderColor: '#ccc',
//             borderWidth: 1,
//             borderRadius: 10,
//             paddingHorizontal: 10,
//             fontSize: 16,
//           }}
//         />
//       </View>

//       <View style={{ marginBottom: 20 }}>
//         <TouchableOpacity onPress={handleSubmit}>
//           <Text
//             style={{
//               backgroundColor: '#e71e71',
//               color: '#fff',
//               paddingHorizontal: 20,
//               paddingVertical: 10,
//               borderRadius: 10,
//               fontWeight: 'bold',
//               fontSize: 16,
//             }}>
//             Send
//           </Text>
//         </TouchableOpacity>
//       </View>

//       {answer ? (
//         <View style={{ backgroundColor: '#e71e71', borderRadius: 10, padding: 10, alignSelf: 'flex-start', marginBottom: 20 }}>
//           <Text style={{ color: '#fff', fontSize: 16 }}>{answer}</Text>
//         </View>
//       ) : null}
//     </View>
//   );
// };

// export default OpenAi;




//code to run the chatbot



import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
} from 'react-native';

const API_KEY = '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';

const systemMessage = {
  role: 'system',
  content: "Answer this like you are customer Service agent at a utility comparison company",
  role: 'system',
  content: "You work for bill buster, a utility comparison company, bill buster is a mobile app, you can search for deals yourself by clicking on the deal finder or you can use the personlised service where bill buster will look after the swtiching process",
  role: 'user', 
  content: "who can i find a deal?",  
  role: "assistant", 
  content: "Use Bill Busters Deal Finder on the mobile app, you can filter by price or Sustainability",
  role: 'user', 
  content: "wbhat is bill buster?",  
  role: "assistant", 
  content: "bill buster is a mobile app, you can search for deals yourself by clicking on the deal finder or you can use the personlised service where bill buster will look after the swtiching process",
  role: 'user', 
  content: "who created bill buster?",  
  role: "assistant", 
  content: "Bill Buster is an Irish start up company located in Galway Ireland, founded by Connal Reilly, Keith Thornton and Lexis Funes, the company was founded in 2022",
};



export default function OpenAi() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm Buster! Ask me anything!",
      sentTime: 'just now',
      sender: 'Buster',
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const flatListRef = useRef(null);


  const handleSend = async () => {
    Keyboard.dismiss();
    if (!inputValue) return;

    const newMessage = {
      message: inputValue,
      direction: 'outgoing',
      sender: 'user',
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);
    setInputValue('');

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);

    flatListRef.current.scrollToIndex({ index: newMessages.length - 1 });

    
  };

  const processMessageToChatGPT = async (chatMessages) => {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = '';
      if (messageObject.sender === 'ChatGPT') {
        role = 'assistant';
      } else {
        role = 'user';
      }
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: 'gpt-3.5-turbo',
      messages: [systemMessage, ...apiMessages],
      temperature: 0.5,
    };

    await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: 'ChatGPT',

          },
        ]);
        setIsTyping(false);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <FlatList
          inverted={false}
          data={messages}
          keyExtractor={(item, index) => index.toString()}
          ref={flatListRef}
          renderItem={({ item }) => (
            <View
              style={[
                styles.messageContainer,
                item.sender === 'user'
                  ? styles.userMessageContainer
                  : styles.botMessageContainer,
              ]}
            >
              <Text style={styles.messageText}>{item.message}</Text>
              <Text style={styles.sentTimeText}>{item.sentTime}</Text>
            </View>
          )}
        />
        <View style={styles.messageInputContainer}>
          <TextInput
            style={styles.messageInput}
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
            placeholder="Type message here"
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
<Text style={styles.sendButtonText}>Send</Text>
</TouchableOpacity>
</View>
{isTyping && (
<View style={styles.typingIndicatorContainer}>
<Text style={styles.typingIndicatorText}>Bill Buster is typing...</Text>
</View>
)}
</KeyboardAvoidingView>
</SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f2f1f2',
padding: 5,
},
keyboardAvoidingView: {
flex: 1,
},
messageContainer: {
padding: 10,
marginVertical: 5,
maxWidth: '80%',
borderRadius: 10,
},
userMessageContainer: {
backgroundColor: '#777',
alignSelf: 'flex-end',
},
botMessageContainer: {
backgroundColor: '#e71e70',
alignSelf: 'flex-start',
},
messageText: {
fontSize: 16,
color: '#FFF'

},
sentTimeText: {
fontSize: 12,
color: '#eee',
alignSelf: 'flex-end',
marginTop: 5,
},
messageInputContainer: {
flexDirection: 'row',
alignItems: 'center',
paddingHorizontal: 10,
marginBottom: 10,
},
messageInput: {
flex: 1,
backgroundColor: '#fff',
borderRadius: 25,
paddingVertical: 10,
paddingHorizontal: 15,
fontSize: 16,
marginRight: 10,
},
sendButton: {
backgroundColor: '#e71e70',
borderRadius: 25,
paddingHorizontal: 15,
paddingVertical: 10,
},
sendButtonText: {
color: '#fff',
fontSize: 16,
},
typingIndicatorContainer: {
alignItems: 'flex-start',
marginLeft: 10,
marginBottom: 10,
},
typingIndicatorText: {
fontStyle: 'italic',
color: '#aaa',
},
});