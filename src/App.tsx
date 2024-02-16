// @ts-ignore
import { ImageCompressor } from 'image-compressor';
import img from "../src/img/pexels-jan-van-der-wolf-19861090.jpg";

import {useState} from "react";
const imageCompressor = new ImageCompressor;
const compressorSettings = {
    mimeType : 'image/png',
    quality :0.6,
    speed: 'slow'
};
function App() {
    const [image, setImage] = useState()
    console.log(image)
    imageCompressor.run(img, compressorSettings, (a:any)=> {
        setImage(a)
    })

  return (
    <div style={{display:'flex', flexDirection:'column', gap: '30px'}}>
      <h1>Img compression</h1>
        <img width={'100%'} src={img} alt=""/>
        <img width={'100%'} src={image} alt=""/>
    </div>
  )
}

export default App
