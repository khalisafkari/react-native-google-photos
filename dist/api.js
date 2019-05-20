import axios from 'axios';
import cio from 'cheerio-without-node-native';

const bgt = async(i) => {
    const url = await axios.get(i);
    const $ = cio.load(url.data);
    const data = $('script')[0].children[0]
    const rp = JSON.parse( data.data.replace('var VIDEO_CONFIG =',''))
    return rp.streams[0].play_url;
} 

class Grab {
    async Photos(i){
        const url = await axios.get(i);
        const $ = cio.load(url.data)('body').html()
        const item = `${$}`
        const $data = item.split('003d');
        const todos = {}
        for(let i = 0;i < $data.length;i++){
            if($data[i].indexOf('hd1080') != -1){
                todos['hd1080'] = `${decodeURIComponent($data[1].split('%3Dm')[0])}=m37`
            }else if($data[i].indexOf('hd720') != -1){
                todos['hd720'] = `${decodeURIComponent($data[1].split('%3Dm')[0])}=m22`
            }else{
                todos['hd480'] = `${decodeURIComponent($data[1].split('%3Dm')[0])}=m18`
            }
        }
        return todos;
    }
    async Blogger(i){
        const url = await axios.get(i); 
        const $ = cio.load(url.data);
        const todos = []
        $('iframe').each(async(i,item)=>{
            const $element = $(item);
            if(!$element.attr('src')){
            }else{
               todos.push($element.attr('src'))
            }
        })
        for(let i = 0;i < todos.length;i++){
            todos[i] = await bgt(todos[i])
        }
        return todos
    }

    async Mp4Upload(i){
        const url = await axios.get(i);
        const $ = cio.load(url.data)('body > script:nth-child(9)').html();
        const items = $.substring(926,$.length);
        const tt = `${items.slice(0,-15)}`;  
        const m = explodeMp4Upload(tt) 
        return m;
    }
    // async bgt(i){
    //     const url = await axios.get(i);
    //     const $ = cio.load(url.data);
    //     const data = $('script')[0].children[0]
    //     const rp = JSON.parse( data.data.replace('var VIDEO_CONFIG =',''))
    //     return rp.streams[0].play_url;
    // }
}

const explodeMp4Upload = async(i) => {
    const t = i.split('video|')[1];
    const m = t.split('|282')
    if(i.indexOf('|www2|') !== -1){
      // console.log('yes |www2|')
      return `https://www2.mp4upload.com:282/d/${m[0]}/video.mp4`
    }else if(i.indexOf('|s3|') !== -1){
      // console.log('yes |s3|')
      return `https://s3.mp4upload.com:282/d/${m[0]}/video.mp4`
    }
}

const item = new Grab();
export default item;

