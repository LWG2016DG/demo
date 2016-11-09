/**
 * Created by pc on 2016/10/14.
 */
<script>
window.onload=function(){
    var out = document.getElementById("out");
    imgLocation("contaier","box");
    var imgData={"data":[{"src":'1.jpg'},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"6.jpg"},{"src":"8.jpg"},{"src":"9.jpg"},{"src":"10.jpg"}
        ,{"src":"11.jpg"}
        ,{"src":"12.jpg"}
        ,{"src":"13.jpg"}
        ,{"src":"14.jpg"}
        ,{"src":"15.jpg"}
        ,{"src":"16.jpg"}
        ,{"src":"17.jpg"}
        ,{"src":"18.jpg"}
        ,{"src":"19.jpg"}
        ,{"src":"20.jpg"}



    ]};
    window.onscroll=function(){
        top()
        if( checkFlag()){
            var cparent = document.getElementById("contaier")
            for(var i =0;i<imgData.data.length;i++){
                var cconent =document.createElement("div")
                cparent.appendChild(cconent);
                cconent.className="box"
                var box =document.createElement("div")
                cconent.appendChild(box);
                box.className="box_img"
                var img1 = document.createElement("img")
                img1.src='./images/'+imgData.data[i].src
                box.appendChild(img1)


            }
            imgLocation("contaier","box");
        }
    }
};
function  checkFlag() {
    var cparent = document.getElementById("contaier");
    var ccont = getChiildElement(cparent,"box");
    var lastTop = ccont[ccont.length - 1].offsetTop;
    var scrollTop = document.documentElement.scrollTop ||document.body.scrollTop
    var pageHeight= document.documentElement.clientHeight ||document.documentElement.clientHeight
    if(scrollTop+pageHeight>lastTop){
        return true;
    }

}
function  imgLocation(parent,content){
    var  cparent = document.getElementById(parent);
    var ccoent= getChiildElement(cparent,content);
    var imgWidth= ccoent[0].offsetWidth;
    var cols = Math.floor(document.documentElement.clientWidth/imgWidth);
    cparent.style.cssText="width:"+imgWidth*cols+"px;margin:0 auto";
    var Arr=[];
    for(var i= 0;i<ccoent.length;i++) {
        if (i < cols) {
            Arr[i]=ccoent[i].offsetHeight;
        }
        else
        {
            var minH = Math.min.apply(null, Arr);
            var index= getIndex(Arr,minH)
            ccoent[i].style.position='absolute';
            ccoent[i].style.top=minH+'px';
            ccoent[i].style.left = ccoent[index].offsetLeft+'px'
            Arr[index]=Arr[index]+ccoent[i].offsetHeight;

        }
    }

}
function getIndex(Arr,minH){
    for(var i in Arr){
        if(Arr[i]==minH){
            return i;
        }
    }
}
function getChiildElement(parent,content){
    var contentArr=[];
    var allcontent = parent.getElementsByTagName('*');
    for (var i= 0;i<allcontent.length;i++){
        if (allcontent[i].className==content) {
            contentArr.push(allcontent[i]);
        }
    }return contentArr;
}
function top (){
    var scrollTop = document.documentElement.scrollTop ||document.body.scrollTop;
    var pageHeight= document.documentElement.clientHeight ||document.documentElement.clientHeight;
    var out = document.getElementById("out");
    if(scrollTop>pageHeight){
        out.style.display='block';
    }else
    {
        out.style.display='none'
    }
    out.onclick = function () {
        timer = setInterval(function () {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var speed = scrollTop / 10;
            document.body.scrollTop = scrollTop - speed;
            if(scrollTop==0){
                clearInterval(timer);
            }
        }, 30)
    }
}


</script>