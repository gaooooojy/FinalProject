import React ,{useEffect} from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    useLocation
} from "react-router-dom";

function usePageViews() {
    let location = useLocation();
    useEffect(() => {
        console.log(location);
    }, [location]);
    return location
}

export default usePageViews