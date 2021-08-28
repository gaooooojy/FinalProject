import React from 'react';
import 'antd/dist/antd.css';
import { Typography } from 'antd';
import { useHistory } from 'react-router';
const { Title } = Typography;
function MyPortal({ User, list, set_path }) {

    const history = useHistory()
    list = list.filter(d => d !== "" && d !== "null")
    console.log(list);

    const handelClick = (d) => {
        console.log(d);
        set_path(d)
        history.push(`/${d}`)
    }
    return (
        <>

            <Typography>
                <Title level={3}>Bookmarks</Title>
                <div style={{ display: "grid", paddingLeft:"30px", paddingTop:"30px",gridTemplateColumns: "90%", width: "500px", fontSize:"20px" }}>

                    {
                        list?.map(d => <a style={{marginBottom:"10px"}} onClick={()=>handelClick(d)} >{d}</a>)
                    }

                </div>
            </Typography>

        </>
    )
}


export default MyPortal