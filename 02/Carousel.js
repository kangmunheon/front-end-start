
var todayPhoto = [
    {"url":"http://media.daum.net/photo/2841","img":"http://icon.daumcdn.net/w/c/12/05/82877085750988319.jpeg","title":"&quot;�߸� ����&quot; �ְ� ������� ������ ����","id":"20120516082207657"}
    ,{"url":"http://media.daum.net/entertain/photo/gallery/?gid=100320","img":"http://icon.daumcdn.net/w/c/12/05/82876693901189319.jpeg","title":"&#39;���ø�&#39; �ʸ��� ���� 5������ ���� ��ģ��","id":"20120516091011626"}
    ,{"url":"http://media.daum.net/photo/4010","img":"http://icon.daumcdn.net/w/c/12/05/82876307459008319.jpeg","title":"[���� ��ȥ�� ǳ��] �Ŷ����ź� &quot;�ູ�մϴ�&quot;","id":"20120516092605081"}
    ,{"url":"http://sports.media.daum.net/general/gallery/gagsports/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81730673405131839.jpeg","title":"&#39;���� �� ����&#39; �ĺ�GK ��� ������ ����","id":"20120516100608409"}
    ,{"url":"http://sports.media.daum.net/general/gallery/0516ufc/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81728759258718839.jpeg","title":"�絿���� ����ű�� Ÿ�ٷ��� &#39;����&#39;","id":"20120516093313331"}
    ,{"url":"http://media.daum.net/entertain/photo/gallery/?gid=100539","img":"http://icon.daumcdn.net/w/c/12/05/81728404408992839.jpeg","title":"�̽�ö �Ƴ��� �� ���� ���� &quot;���ֿ�. .&quot;","id":"20120516093918544"}
    ,{"url":"http://media.daum.net/photo/3899","img":"http://icon.daumcdn.net/w/c/12/05/81728227037306839.jpeg","title":"���� 6������ �������� �Ծ�ƴ� ���̰�..","id":"20120516030614331"}
    ,{"url":"http://sports.media.daum.net/general/gallery/STARKIMYUNA/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81727815537682839.jpeg","title":"&#39;����&#39; �迬��, �����ǳ����� �α�����","id":"20120516092003892"}
];

var nowPage = 1;
var totalPage = Math.ceil(todayPhoto.length / 3);

function displayImages(){
    var imgList = [];
    var firstImg = (nowPage -1)*3;
    var finalImg = firstImg+3;

    if(finalImg >= todayPhoto.length)
        finalImg = todayPhoto.length -1;

    imgList = todayPhoto.slice(firstImg, finalImg);

    var img = tmpl(imgTpl, {imgList : imgList})

    document.getElementById("img").innerHTML = img;
}

function displayPage(){
    var page = tmpl(btnTpl, {page : nowPage, totalPage : totalPage})

    document.getElementById("btn").innerHTML = page;
}
function display(){
    displayImages();
    displayPage();
}

var imgTpl = document.getElementById("imgTpl").innerHTML;
var btnTpl = document.getElementById("btnTpl").innerHTML;

display();

var btn = document.getElementById("btn");
btn.addEventListener("click", function(ev){
    var target = ev.target.attributes.getNamedItem("id").nodeValue;

    console.log(ev);
    if(target === "prev"){
        if(nowPage === 1)
            nowPage = totalPage;
        else
            --nowPage;
    }else if(target === "next"){
        if(nowPage === totalPage)
            nowPage = 1;
        else
            ++nowPage
    }else{
        return;
    }
    display();
});