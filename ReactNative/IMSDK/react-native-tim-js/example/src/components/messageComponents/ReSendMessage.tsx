import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Switch } from 'react-native';
import { TencentImSDKPlugin } from 'react-native-tim-js';
import CommonButton from '../commonComponents/CommonButton';
import SDKResponseView from '../sdkResponseView';
import CheckBoxModalComponent from '../commonComponents/CheckboxModalComponent';

const ReSendMessageComponent = () => {
    const [res, setRes] = useState<any>({});
    const [isonlineUserOnly, setIsonlineUserOnly] = useState(false);
    const receiveOnlineUserstoggle = () => setIsonlineUserOnly(previousState => !previousState);
    

    const [conversationID, setConversationID] = useState<string>('未选择')
    const [message, setMessage] = useState<string>('[]')

    const reSendMessage = async () => {
        const res = await TencentImSDKPlugin.v2TIMManager.getMessageManager().reSendMessage(message)
        setRes(res)

    };



    const CodeComponent = () => {
        return res.code !== undefined ? (
            <SDKResponseView codeString={JSON.stringify(res)} />
        ) : null;
    };

    const MessageSelectComponent = () => {
        const [visible, setVisible] = useState<boolean>(false)
        return (
            <View style={styles.friendgroupview}>
                <View style={styles.selectContainer}>
                    <TouchableOpacity onPress={()=>setVisible(true)}>
                        <View style={styles.buttonView}>
                            <Text style={styles.buttonText}>选择消息</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.selectedText}>{message}</Text>
                </View>
                <CheckBoxModalComponent visible={visible} getVisible={setVisible} getUsername={setMessage} type={'message'} conversationID={conversationID}/>
            </View>
            
        )
    }

    const ConversationSelectComponent = () => {
        const [visible, setVisible] = useState<boolean>(false)
        return (
            <View style={styles.friendgroupview}>
                <View style={styles.selectContainer}>
                    <TouchableOpacity onPress={()=>setVisible(true)}>
                        <View style={styles.buttonView}>
                            <Text style={styles.buttonText}>选择会话</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.selectedText}>{conversationID}</Text>
                </View>
                <CheckBoxModalComponent visible={visible} getVisible={setVisible} getUsername={setConversationID} type={'conversation'}/>
            </View>
            
        )
    }




    return (
        <>
            <ConversationSelectComponent />
            <MessageSelectComponent/>

            <View style={styles.switchcontainer}>
                <Text style={styles.switchtext}>是否仅在线用户接受到消息</Text>
                <Switch
                    trackColor={{ false: "#c0c0c0", true: "#81b0ff" }}
                    thumbColor={isonlineUserOnly ? "#2F80ED" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={receiveOnlineUserstoggle}
                    value={isonlineUserOnly}
                />
            </View>
            <CommonButton
                handler={() => { reSendMessage() }}
                content={'重发消息'}
            ></CommonButton>
            <CodeComponent></CodeComponent>
        </>
    );
};

export default ReSendMessageComponent;
const styles = StyleSheet.create({
    userInputcontainer: {
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center'
    },
    selectContainer: {
        flexDirection: 'row'
    },
    selectedText: {
        marginLeft: 10,
        fontSize: 14,
        textAlignVertical: 'center',
        lineHeight: 35
    },
    buttonView: {
        backgroundColor: '#2F80ED',
        borderRadius: 3,
        width: 100,
        height: 35,
        marginLeft: 10
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 14,
        textAlign: 'center',
        textAlignVertical: 'center',
        lineHeight: 35
    },
    selectView: {
        flexDirection: 'row',
    },
    selectText: {
        marginLeft: 10,
        lineHeight: 35,
        fontSize: 14,
    },
    friendgroupview: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10
    },
    switchcontainer: {
        flexDirection: 'row',
        margin: 10
    },
    switchtext: {
        lineHeight: 35,
        marginRight: 8
    }
})