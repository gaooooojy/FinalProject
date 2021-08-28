import { useEffect, useState } from 'react';
import Axios from 'axios'
function useGetmarks(User,path) {
  
    const [list, set_list] = useState([])

    useEffect(() => {
        Axios.post('/user/queryAllImgs', { username: User }).then(res => {
            if (res.data.code === "200") {
                let lists = res?.data?.data?.split(';')
                set_list(lists)
            }
        })
    }, [User,path])

    return list
}


export default useGetmarks;