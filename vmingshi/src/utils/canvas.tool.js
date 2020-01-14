let CanvasTool = new Object()
/**
 * 初始化
 */
CanvasTool.init = function(options = {}){
    this.ctx = options.ctx
    this.width = options.width
    this.height = options.height
}
function circleImg(ctx, img, x, y, r) {
    ctx.save();
    var d =2 * r;
    var cx = x + r;
    var cy = y + r;
    ctx.arc(cx, cy, r, 0, 2 * Math.PI);
    ctx.clip();
    ctx.drawImage(img, x, y, d, d);
    ctx.restore();
} 
CanvasTool.draw = function(obj,options){
    var pattern = this.ctx.createPattern(obj, "no-repeat");
    this.circleImg(options.x, options.y, options.width, options.height, options.radius * 1 || 0);
    this.ctx.fillStyle = pattern;
    this.ctx.fill();    
}
function validateImage(url){    
    var xmlHttp ;
    if (window.ActiveXObject)
     {
      xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
     }
     else if (window.XMLHttpRequest)
     {
      xmlHttp = new XMLHttpRequest();
     } 
    xmlHttp.open("Get",url,false);
    xmlHttp.send();
    if(xmlHttp.status==404)
    return false;
    else
    return true;
}


CanvasTool.drawImage = function(imgSrc,options) {
    return new Promise(resolve=>{
        let img = new Image()
        img.crossOrigin = "Anonymous";
        img.src = validateImage(imgSrc) == true ? imgSrc : require('../m/assets/default/image/default-img.png')
        options.x = options.x || 0
        options.y = options.y || 0
        options.radius = options.radius || 0
        options.width = options.width || this.width
        options.height = options.height || this.height
        img.onload=()=>{
            if(!options.radius){
                this.ctx.drawImage(img,options.x,options.y,options.width,options.height);
            }else {
                circleImg(this.ctx,img,options.x,options.y,options.width / 2)
            }
            resolve()
        }
    })
}
/**
 * 绘制文本
 * @param {String} text 
 * @param {Object}
 */
CanvasTool.fillText = function(text,prop = {}){
    /**字体 x,y轴 */
    prop.fontSize = prop.fontSize || 14
    prop.fontWeight = prop.fontWeight || 'bold'
    prop.fontStyle = prop.fontStyle || 'Arial'
    prop.x = prop.x || 0
    prop.y = prop.y || 0
    prop.padding = prop.padding || 0
    /**字体颜色 */
    prop.fillStyle = prop.fillStyle || 'black'
    this.ctx.fillStyle = prop.fillStyle
    this.ctx.fontWeight = prop.fontWeight
    if(!text) return 
    /**汉字 */
    let cn = text.match(/[\u4e00-\u9fa5]/g)
    let textlength = Number(text.length);
    let cnlength
    if(cn && cn.length) {
        cnlength = Number(cn.length)
    }else {
        cnlength = 0
    }
    let fontSize = Number(prop.fontSize)
    let other = textlength - cnlength
    let fontWidth
    if((cn && cn.length) && other) {
        fontWidth = (cnlength * fontSize) + (other * fontSize / 2)
    }else if(!cn) {
        fontWidth = other * fontSize / 2
    }else {
        fontWidth = cn.length * fontSize
    }
    /**最大可容纳的字数(汉字) */
    let maxlength  = Math.floor((this.width - (prop.padding * 2)-(prop.x)) / prop.fontSize)
    /**是否需要换行 */
    let textArr = text.split("") 
    let alllength = 0
    /**数字的长度(中英文) */
    let msg = []
    let current = 0
    for(var i = 0 ; i<text.length;i++) {
        let w = fontSize / 2
        if(textArr[i].charCodeAt() > 127 || textArr[i].charCodeAt()== 94) {
            alllength+=2
            w = w * 2
        }else {
            alllength++
        }
        if((alllength / 2) <= maxlength){
            if(msg[current]){
                msg[current] = {
                    text:msg[current].text + text.substr(i,1),
                    w:msg[current].w + w
                }
            }else{
                msg[current] = {
                    text:text.substr(i,1),
                    w:w
                }
            }
            
        }else{
            current += 1
            msg[current] = {
                text:text.substr(i,1),
                w:w
            }
            alllength = 0
        }
    }
    this.ctx.font=`${prop.fontSize}px  ${prop.fontStyle}`;
    msg.map((item,i)=>{
        if(!prop.x) {
            prop.x  = (this.width- item.w) / 2
        }
        this.ctx.fillText(item.text,prop.x,prop.y+(i*fontSize))
    })
}
export default CanvasTool