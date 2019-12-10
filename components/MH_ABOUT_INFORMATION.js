import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from "./css";
import AsyncStorage from '@react-native-community/async-storage'

export default class app extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);

        this.state = {
            Ma_so: '',
            Ten: '',
            SDT: '',
            EMAIL: '',
            Quyen: '',
            Ten_Dang_nhap: '',
            Mat_khau: '',
            SOIMAGE: '',
            Count: null
        }

    }
    componentDidMount() {
        AsyncStorage.getItem('DATA_LOGIN', (err, result) => {
            let JSON_DATA = JSON.parse(result)

            if (result != null) {
                if (JSON_DATA.Quyen == 1) {
                    SETQUYEN = 'Admin'
                } else {
                    SETQUYEN = 'Giáo Viên'
                }
                this.setState({
                    Ma_nv: JSON_DATA.Ma_nv,
                    Ten: JSON_DATA.Ten,
                    SDT: JSON_DATA.SDT,
                    EMAIL: JSON_DATA.EMAIL,
                    Quyen: SETQUYEN,
                    Quyeninfo: JSON_DATA.Quyen,
                    Ten_Dang_nhap: JSON_DATA.Username,
                    Mat_khau: JSON_DATA.Password,
                    SOIMAGE: JSON_DATA.SOIMAGE
                })
            }

        })
    }
    
    render() {

        return (
            <View style={styles.container2}>
                <View style={styles.view_image}>
                    <Image style={styles.image} resizeMode='contain' source={require('./../images/login.png')}></Image>
                </View>
                <View style={styles.container_about}>
                    <View style={styles.column_875}>
                        <Text style={styles.text_877}>
                            Thông tin cá nhân
                                </Text>
                        <Text style={styles.text_875}>
                            <Text style={styles.text_87}>
                                Quyền tài khoản:
                                    </Text>
                            {this.state.Quyen}
                        </Text>
                        <Text style={styles.text_875}>
                            <Text style={styles.text_87}>
                                Mã nhân viên:
                                    </Text>
                            {this.state.Ma_nv}
                        </Text>
                        <Text style={styles.text_875}>
                            <Text style={styles.text_87}>
                                Họ và tên:
                                    </Text>
                            {this.state.Ten}
                        </Text>
                        <Text style={styles.text_875}>
                            <Text style={styles.text_87}>
                                SDT:
                                    </Text>
                            {this.state.SDT}
                        </Text>
                        <Text style={styles.text_875}>
                            <Text style={styles.text_87}>
                                Email:
                                    </Text>
                            {this.state.EMAIL}
                        </Text>
                    </View>
                </View>

            </View>
        )
    }
}