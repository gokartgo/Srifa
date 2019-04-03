import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './UserPoint.scss';
import ImageAdvertise from '../../../assets/image/advertise.png';
import ImageMoney from '../../../assets/image/money.png';

class UserPoint extends Component {

    render() {
        return (<Aux>

            <div className={classes.BodyContent}>

                <div className={classes.AdvertiseContent}>
                    <img src={ImageAdvertise} className={classes.Advertise} />
                </div>
                <div className={classes.StatusUserContent}>

                    <div className={classes.PointContent} >
                        <div className={classes.ImagePointContent} >
                            <div className={classes.SubMoneyContent}>
                                <div className={classes.TextContent}>
                                    <p className={classes.Text}>เงินคงเหลือ (บาท)</p>
                                    <p className={classes.Number}>720</p>
                                </div>
                                <img src={ImageMoney} style={{ width: '40%' }} />
                            </div>
                        </div>
                        <div className={classes.ImagePointContent} >
                            <div className={classes.SubPointContent}>
                                <div className={classes.TextContent}>
                                    <p className={classes.Text}>คะแนนสะสม</p>
                                    <p className={classes.Number} style={{ color: '#5e514d' }}>48</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.HistoryContent}>
                        <div className={classes.History}>
                            <div className={classes.HistoryHeader}>ประวัติการใช้คะแนนสะสม</div>
                            <div className={classes.HistoryBodyHeader}>
                                <div>วันที่</div>
                                <div>รายละเอียด</div>
                                <div>จำนวนเงิน/คะแนน</div>
                            </div>
                            <div className={classes.HistoryBody}>
                                <div>
                                    <div>วันที่</div>
                                    <div>วันที่</div>
                                </div>
                                <div>
                                    <div>ใช้คะแนนสะสม</div>
                                    <div>ใช้คะแนนสะสม</div>
                                </div>
                                <div>
                                    <div>-49 คะแนน</div>
                                    <div>-49 คะแนน</div>
                                </div>
                            </div>
                            <div className={classes.HistoryBody}>
                                <div>วันที่</div>
                                <div>ใช้จ่าย</div>
                                <div>-50 ฿</div>
                            </div>
                            <div className={classes.HistoryBody}>
                                <div>วันที่</div>
                                <div>เติมเงิน</div>
                                <div>+150 ฿</div>
                            </div>
                            <div className={classes.HistoryBody}>
                                <div>วันที่</div>
                                <div>ใช้จ่าย</div>
                                <div>-100 ฿</div>
                            </div>
                            <div className={classes.HistoryBody}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Aux>)
    }
}

export default UserPoint;