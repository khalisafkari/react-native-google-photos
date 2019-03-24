import axios from 'axios';
import cio from 'cheerio-without-node-native';

// const item = async(callback) =>{
//     const url = await axios.get('https://photos.google.com/share/AF1QipOtzX-SIs7oGqmr3TylpHYb6CJWD4Snitmz9wY9r-9IffLf8Cl43Q18wHE-en7QkA/photo/AF1QipP-agii1krh1sbShkQmvtm3WdkNJ-YmEOs-bkkX?key=NmFyc085UzdINHpKYmdJLTh1Z3FBZVFSenJSZUxB');
//     const $ = cio.load(url.data)('body').html()
//     const item = `${$}`
//     const sp = item.split('003d')[1];
//     if(sp){
//         const decode = decodeURIComponent(sp.split('%3Dm')[0]);
//         return `${decode}=m18`
//     }else{
//         again();
//     }
// }

// const again = () =>{
//     item()
// }

const item = async(url) => {
    const url = await axios.get(url);
    const $ = cio.load(url.data)('body').html()
    const item = `${$}`
    const $data = item.split('003d');
    const arr = new Array()
    for(let i = 0;i < $data.length;i++){
        if($data[i].indexOf('hd1080') != -1){
            arr['hd1080'] = `${decodeURIComponent($data[1].split('%3Dm')[0])}=m37`
            // arr.push({
            //     type:'hd1080',
            //     src:`${$data[1].split('%3Dm')[0]}=m37`
            // })
        }else if($data[i].indexOf('hd720') != -1){
            arr['hd720'] = `${decodeURIComponent($data[1].split('%3Dm')[0])}=m22`
        }else{
            arr['hd480'] = `${decodeURIComponent($data[1].split('%3Dm')[0])}=m18`
        }
    }
    return arr;
}

export default item;

