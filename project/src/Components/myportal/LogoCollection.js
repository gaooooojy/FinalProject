import React, { useState, useEffect } from 'react';
import { CheckCircleFilled } from '@ant-design/icons'
import { message } from 'antd';
import Axios from 'axios'
function LogoCollection({ list, User, path }) {

    const [checked, set_checked] = useState(true)
    useEffect(() => {
        list?.includes(path) ? set_checked(true) : set_checked(false)
    }, [path, list, User])

    const handle_click = () => {
        if (!checked) {
            Axios.post('/user/mark', { username: User, img: path }).then(res => {
                if (res.data.code !== "200") {
                    message.error('mark failed')
                    set_checked(false)
                } else {
                    set_checked(true)
                    message.success('mark successful')
                }
            })
        } else {

            Axios.post('/user/unmark', { username: User, img: path }).then(res => {
                if (res.data.code !== "200") {
                    message.error('mark failed')
                    set_checked(true)
                } else {
                    set_checked(false)
                    message.success('unmark successful')
                }
            })

        }
        //  发送
    }
    return (

        <CheckCircleFilled
            style={{ color: checked ? '#586CB1' : "gray", width:"20px", fontSize: "3rem", position: "absolute", top: '15%', right: "5%" }}
            onClick={handle_click}
        />

    )
}

export default LogoCollection
