import React from "react";
import CategoryList from "../components/CategoryList";
import BannerProduct from "../components/BannerProduct";
import HorizontalCartProduct from "../components/HorizontalCartProduct";
import VerticalCartProduct from "../components/VerticalCartProduct";

const Home =()=>{
    return(
    <div>
        <CategoryList/>
        <BannerProduct/>


        <HorizontalCartProduct category={"airpodes"} heading={"Airpodes"}/>
        <HorizontalCartProduct category={"watches"} heading={"Watches"}/>

        <VerticalCartProduct category={"mobiles"} heading={"Mobiles"}/>
        <VerticalCartProduct category={"mouse"} heading={"Mouses"}/>
        <VerticalCartProduct category={"televisions"} heading={"Televisions"}/>
        <VerticalCartProduct category={"camera"} heading={"Cameras"}/>
        
        
    </div>

    )
}
export default Home 