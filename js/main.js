const headerTitle = document.querySelector('.header-title');

window.onscroll = function fadeOutTitle(){
    if(window.pageYOffset>140){
        headerTitle.style.opacity = 0;
        headerTitle.style.paddingBottom = 30+'rem';
        headerTitle.style.transform = 'scale(120%)';
    }else{
        headerTitle.style.opacity = 1;
        headerTitle.style.paddingBottom = 0;
        headerTitle.style.transform = 'scale(100%)';
    }
}

function disappear(){
    if(window.pageYOffset>about.offsetTop){
        headerTitle.style.opacity = 0;
    }else{}
}

disappear();

const mu01 = document.querySelector('.music-contents-row-01-left');
const mu02 = document.querySelector('.music-contents-row-01-right-01');
const mu03 = document.querySelector('.music-contents-row-01-right-02');
const mu04 = document.querySelector('.music-contents-row-02-left-01');
const mu05 = document.querySelector('.music-contents-row-02-left-02');
const mu06 = document.querySelector('.music-contents-row-02-right');
const mu07 = document.querySelector('.music-contents-row-03-left');
const mu08 = document.querySelector('.music-contents-row-03-right-01');
const mu09 = document.querySelector('.music-contents-row-03-right-02');
const vi01 = document.querySelector('.history-contents-01-image-left');
const vi02 = document.querySelector('.history-contents-01-image-right-01');
const vi03 = document.querySelector('.history-contents-01-image-right-02');
const vi04 = document.querySelector('.history-contents-02-image-left');
const vi05 = document.querySelector('.history-contents-02-image-right-01');
const vi06 = document.querySelector('.history-contents-02-image-right-02');
const vi07 = document.querySelector('.history-contents-03-image-left');
const vi08 = document.querySelector('.history-contents-03-image-right-01');
const vi09 = document.querySelector('.history-contents-03-image-right-02');
const musicPopup = document.querySelector('.music-popup');
const musicPopupVideo = document.querySelector('.music-popup iframe');
const cancel = document.querySelector('.cancel');


var muAr = [mu01,mu02,mu03,mu04,mu05,mu06,mu07,mu08,mu09,vi01,vi02,vi03,vi04,vi05,vi06,vi07,vi08,vi09];

for(var i=0; i<muAr.length; i++){
    muAr[i].onclick = function(){
        musicPopup.style.display="flex";
    };
};

mu01.onmouseover = function(){
    if(musicPopupVideo.src !== "https://www.youtube.com/embed/7IcafhbXprU"){
        musicPopupVideo.src = "https://www.youtube.com/embed/7IcafhbXprU";  
    }else{}
};
mu02.onmouseover = function(){
    if(musicPopupVideo.src !== "https://www.youtube.com/embed/NVns4yRoTlU"){
        musicPopupVideo.src = "https://www.youtube.com/embed/NVns4yRoTlU";  
    }else{}
};
mu03.onmouseover = function(){
    if(musicPopupVideo.src !== "https://www.youtube.com/embed/fzHJxq37cqI"){
        musicPopupVideo.src = "https://www.youtube.com/embed/fzHJxq37cqI";  
    }else{}
};
mu04.onmouseover = function(){
    if(musicPopupVideo.src !== "https://www.youtube.com/embed/SAJrAQGvOHE"){
        musicPopupVideo.src = "https://www.youtube.com/embed/SAJrAQGvOHE";  
    }else{}
};
mu05.onmouseover = function(){
    if(musicPopupVideo.src !== "https://www.youtube.com/embed/DPEtmqvaKqY"){
        musicPopupVideo.src = "https://www.youtube.com/embed/DPEtmqvaKqY";  
    }else{}
};
mu06.onmouseover = function(){
    if(musicPopupVideo.src !== "https://www.youtube.com/embed/rFxJjpSeXHI"){
        musicPopupVideo.src = "https://www.youtube.com/embed/rFxJjpSeXHI";  
    }else{}
};
mu07.onmouseover = function(){
    if(musicPopupVideo.src !== "https://www.youtube.com/embed/kra0f71EIgc"){
        musicPopupVideo.src = "https://www.youtube.com/embed/kra0f71EIgc";  
    }else{}
};
mu08.onmouseover = function(){
    if(musicPopupVideo.src !== "https://www.youtube.com/embed/6hEvgKL0ClA"){
        musicPopupVideo.src = "https://www.youtube.com/embed/6hEvgKL0ClA";  
    }else{}
};
mu09.onmouseover = function(){
    if(musicPopupVideo.src !== "https://www.youtube.com/embed/8tJb1YlMHfA"){
        musicPopupVideo.src = "https://www.youtube.com/embed/8tJb1YlMHfA";  
    }else{}
};

vi01.onmouseover = function(){
    if(musicPopupVideo.src !== "https://www.youtube.com/embed/HoJ7sjIyG4w"){
        musicPopupVideo.src = "https://www.youtube.com/embed/HoJ7sjIyG4w";  
    }else{}
};
vi02.onmouseover = function(){
    if(musicPopupVideo.src !== "https://www.youtube.com/embed/TzaER5VdZhs"){
        musicPopupVideo.src = "https://www.youtube.com/embed/TzaER5VdZhs";  
    }else{}
};
vi03.onmouseover = function(){
    if(musicPopupVideo.src !== "https://www.youtube.com/embed/TOAyncTgKEs"){
        musicPopupVideo.src = "https://www.youtube.com/embed/TOAyncTgKEs";  
    }else{}
};
vi04.onmouseover = function(){
    if(musicPopupVideo.src !== "https://www.youtube.com/embed/7TkD2fDLCsQ"){
        musicPopupVideo.src = "https://www.youtube.com/embed/7TkD2fDLCsQ";  
    }else{}
};
vi05.onmouseover = function(){
    if(musicPopupVideo.src !== "https://www.youtube.com/embed/NdF_FweAHdM"){
        musicPopupVideo.src = "https://www.youtube.com/embed/NdF_FweAHdM";  
    }else{}
};
vi06.onmouseover = function(){
    if(musicPopupVideo.src !== "https://www.youtube.com/embed/OTkFJyn4mvc"){
        musicPopupVideo.src = "https://www.youtube.com/embed/OTkFJyn4mvc";  
    }else{}
};
vi07.onmouseover = function(){
    if(musicPopupVideo.src !== "https://www.youtube.com/embed/uyYqWRTs-C0"){
        musicPopupVideo.src = "https://www.youtube.com/embed/uyYqWRTs-C0";  
    }else{}
};
vi08.onmouseover = function(){
    if(musicPopupVideo.src !== "https://www.youtube.com/embed/fgSXAKsq-Vo"){
        musicPopupVideo.src = "https://www.youtube.com/embed/fgSXAKsq-Vo";  
    }else{}
};
vi09.onmouseover = function(){
    if(musicPopupVideo.src !== "https://www.youtube.com/embed/rD3FhRbe5tU"){
        musicPopupVideo.src = "https://www.youtube.com/embed/rD3FhRbe5tU";  
    }else{}
};

cancel.onclick = function(){
    musicPopup.style.display="none";
    musicPopupVideo.src ="#";
    setTimeout(
        function(){
            musicPopupVideo.src = "https://www.youtube.com/embed/7IcafhbXprU";
        },100);
};

const acRow = document.querySelector('.activity-contents-row-01');
const acLeftBtn = document.querySelector('.ac-left-btn');
const acRightBtn = document.querySelector('.ac-right-btn');

acRightBtn.onclick = function(){
    if(acRow.style.left == "0px"){
        acRow.style.left = "-48.7rem";
        acLeftBtn.style.opacity = 1;
    }else if(acRow.style.left == "-48.7rem"){
        acRow.style.left = "-146rem";
    }else if(acRow.style.left == "-146rem"){
        acRow.style.left = "-194.7rem";
    }else if(acRow.style.left == "-194.7rem"){
        acRow.style.left = "-292rem";
        acRightBtn.style.opacity = 0.5;
    }
}

acLeftBtn.onclick = function(){
    if(acRow.style.left == "-292rem"){
        acRow.style.left = "-194.7rem";
        acRightBtn.style.opacity = 1;
    }else if(acRow.style.left == "-194.7rem"){
        acRow.style.left = "-146rem";
    }else if(acRow.style.left == "-146rem"){
        acRow.style.left = "-48.7rem";
    }else if(acRow.style.left == "-48.7rem"){
        acRow.style.left = "0px";
        acLeftBtn.style.opacity = 0.5;
        acRightBtn.style.opacity = 1;
    }
}

const mbSns01 = document.querySelector('.member-popup-right-sns-01');
const mbSns02 = document.querySelector('.member-popup-right-sns-02');
const mbSns03 = document.querySelector('.member-popup-right-sns-03');

const mbSns01Img = document.querySelector('.member-popup-right-sns-01 img');
const mbSns02Img = document.querySelector('.member-popup-right-sns-02 img');
const mbSns03Img = document.querySelector('.member-popup-right-sns-03 img');

const mbSns01P = document.querySelector('.member-popup-right-sns-01 p');
const mbSns02P = document.querySelector('.member-popup-right-sns-02 p');
const mbSns03P = document.querySelector('.member-popup-right-sns-03 p');

mbSns01.onmouseover = function(){
    mbSns01Img.src ="img/twich-hover.svg"
    mbSns01P.style.color = "#FF9900"
}
mbSns01.onmouseleave = function(){
    mbSns01Img.src ="img/twich.svg"
    mbSns01P.style.color = "#ffffff"
}
mbSns02.onmouseover = function(){
    mbSns02Img.src ="img/insta-hover.svg"
    mbSns02P.style.color = "#FF9900"
}
mbSns02.onmouseleave = function(){
    mbSns02Img.src ="img/insta.svg"
    mbSns02P.style.color = "#ffffff"
}
mbSns03.onmouseover = function(){
    mbSns03Img.src ="img/youtube-hover.svg"
    mbSns03P.style.color = "#FF9900"
}
mbSns03.onmouseleave = function(){
    mbSns03Img.src ="img/youtube.svg"
    mbSns03P.style.color = "#ffffff"
}

const memberPopup = document.querySelector('.member-popup');
const memberPopupBox = document.querySelector('.member-popup-box');
const ine = document.querySelector('.ine');
const jing = document.querySelector('.jing');
const lilpa = document.querySelector('.lilpa');
const jururu = document.querySelector('.jururu');
const gosegu = document.querySelector('.gosegu');
const viichan = document.querySelector('.viichan');
const memberImg = document.querySelector('.member-popup-left img');
const memberName01 = document.querySelector('.member-popup-right-name p:first-child');
const memberName02 = document.querySelector('.member-popup-right-name p:last-child');
const memberIntro = document.querySelector('.member-popup-right-text-01');
const memberText01 = document.querySelector('.member-popup-right-text-02-right p:nth-child(1)');
const memberText02 = document.querySelector('.member-popup-right-text-02-right p:nth-child(2)');
const memberText03 = document.querySelector('.member-popup-right-text-02-right p:nth-child(3)');
const memberText04 = document.querySelector('.member-popup-right-text-02-right p:nth-child(4)');
const memberText05 = document.querySelector('.member-popup-right-text-02-right p:nth-child(5)');
const memberSnsText01 = document.querySelector('.member-popup-right-sns-01 p');
const memberSnsText02 = document.querySelector('.member-popup-right-sns-02 p');
const memberSnsText03 = document.querySelector('.member-popup-right-sns-03 p');
const memberSnsLink01 = document.querySelector('.member-popup-right-sns a:nth-child(1)');
const memberSnsLink02 = document.querySelector('.member-popup-right-sns a:nth-child(2)');
const memberSnsLink03 = document.querySelector('.member-popup-right-sns a:nth-child(3)');
const memberCancel = document.querySelector('.member-cancel');

memberCancel.onclick = function(){
    memberPopup.style.display="none";
};

ine.onclick = function(){
    memberPopup.style.display="flex";
    memberImg.src ="img/ine.png";
    memberName01.innerText ="아이네";
    memberName02.innerText ="Ine";
    memberIntro.innerText ="부드럽고 차분한 목소리로 잔잔하고 편안한 방송이 주로 진행되나 가끔 텐션이 폭발합니다. 오디션 기간부터 주목받은 노래 실력으로 장르 구분 없이 다양한 노래를 소화해냅니다.";
    memberText01.innerText ="둘기";
    memberText02.innerText ="1994년(생일 비공개)";
    memberText03.innerText ="INFP";
    memberText04.innerText ="블루 바이올렛";
    memberText05.innerText ="독일어 Eine (같은, 하나의)";
    memberSnsText01.innerText ="vo_ine";
    memberSnsText02.innerText ="@ine_hamine";
    memberSnsText03.innerText ="아이네 INE";
    memberSnsLink01.href ="https://www.twitch.tv/vo_ine";
    memberSnsLink02.href ="https://www.instagram.com/ine_hamine/";
    memberSnsLink03.href ="https://www.youtube.com/channel/UCroM00J2ahCN6k-0-oAiDxg";
    memberPopupBox.style.backgroundImage = "url('img/ine-back.png')";
};
jing.onclick = function(){
    memberPopup.style.display="flex";
    memberImg.src ="img/jing.png";
    memberName01.innerText ="징버거";
    memberName02.innerText ="Jingburger";
    memberIntro.innerText ="찰진 사투리와 더불어 독특하고 귀여운 말투로 시청자를 중독시키는 것이 특징입니다. 뛰어난 그림 실력을 지녀 그림 관련 컨텐츠도 진행하며 직접 썸네일을 제작하기도 합니다.";
    memberText01.innerText ="똥강아지";
    memberText02.innerText ="1995년 10월 8일";
    memberText03.innerText ="ISFP";
    memberText04.innerText ="노랑색";
    memberText05.innerText ="친구들 사이 애칭 ‘징’ + 좋아하는 음식 ‘버거’";
    memberSnsText01.innerText ="jingburger";
    memberSnsText02.innerText ="@jing_burger";
    memberSnsText03.innerText ="징버거 JINGBURGER";
    memberSnsLink01.href ="https://www.twitch.tv/jingburger";
    memberSnsLink02.href ="https://www.instagram.com/jing_burger/";
    memberSnsLink03.href ="https://www.youtube.com/c/%EC%A7%95%EB%B2%84%EA%B1%B0";
    memberPopupBox.style.backgroundImage = "url('img/jing-back.png')";
};
lilpa.onclick = function(){
    memberPopup.style.display="flex";
    memberImg.src ="img/lilpa.png";
    memberName01.innerText ="릴파";
    memberName02.innerText ="Lilpa";
    memberIntro.innerText ="‘컨텐츠 괴물’이라 불리는 기획력과 기술력을 바탕으로 다양한 시청자 참여 컨텐츠를 진행합니다. 전직 아이돌 출신다운 탄탄한 춤 실력과, 시원한 고음이 특징적인 가창력을 갖추었습니다.";
    memberText01.innerText ="박쥐단";
    memberText02.innerText ="1996년 3월 9일";
    memberText03.innerText ="ENFP";
    memberText04.innerText ="남색";
    memberText05.innerText ="아무 뜻 없이 3초만에 지음";
    memberSnsText01.innerText ="lilpaaaaaa";
    memberSnsText02.innerText ="@lilpaaaaaa_";
    memberSnsText03.innerText ="릴파 lilpa";
    memberSnsLink01.href ="https://www.twitch.tv/lilpaaaaaa";
    memberSnsLink02.href ="https://www.instagram.com/lilpaaaaaa_/";
    memberSnsLink03.href ="https://www.youtube.com/channel/UC-oCJP9t47v7-DmsnmXV38Q";
    memberPopupBox.style.backgroundImage = "url('img/lilpa-back.png')";
};
jururu.onclick = function(){
    memberPopup.style.display="flex";
    memberImg.src ="img/jururu.png";
    memberName01.innerText ="주르르";
    memberName02.innerText ="Jururu";
    memberIntro.innerText ="‘주랄’로 불리는 광기 컨셉이 특징이며, 컨셉 해제 시에는 털털함과 매운맛이 두드러집니다. 이세계아이돌 내에서 가장 시청자 참여 경력이 긴 베테랑으로서, 능숙한 멘트로 웃음을 뽑아냅니다.";
    memberText01.innerText ="주폭도";
    memberText02.innerText ="1997년 6월 10일";
    memberText03.innerText ="INTP / ENFP";
    memberText04.innerText ="자주색";
    memberText05.innerText ="본명에 ‘주’가 들어가서 친구가 ‘주르르’로 지어줌";
    memberSnsText01.innerText ="cotton__123";
    memberSnsText02.innerText ="@ju_ruru_";
    memberSnsText03.innerText ="주르르 JURURU Ch";
    memberSnsLink01.href ="https://www.twitch.tv/cotton__123";
    memberSnsLink02.href ="https://www.instagram.com/ju_ruru_/";
    memberSnsLink03.href ="https://www.youtube.com/c/%EC%A3%BC%EB%A5%B4%EB%A5%B4";
    memberPopupBox.style.backgroundImage = "url('img/jururu-back.png')";
};
gosegu.onclick = function(){
    memberPopup.style.display="flex";
    memberImg.src ="img/gosegu.png";
    memberName01.innerText ="고세구";
    memberName02.innerText ="Gosegu";
    memberIntro.innerText ="자칭 킹받는 아이돌로서, 시청자와의 티키타카가 돋보이는 방송을 선보입니다. 방송 천재라는 별명에 걸맞는 이슈 메이킹 능력을 가져 종종 화제의 중심이 됩니다.";
    memberText01.innerText ="세균단";
    memberText02.innerText ="1998년 (생일 비공개)";
    memberText03.innerText ="ENTJ";
    memberText04.innerText ="파란색";
    memberText05.innerText ="고양이가 세상을 구한다";
    memberSnsText01.innerText ="gosegugosegu";
    memberSnsText02.innerText ="@gosegu_official";
    memberSnsText03.innerText ="고세구 GOSEGU";
    memberSnsLink01.href ="https://www.twitch.tv/gosegugosegu";
    memberSnsLink02.href ="https://www.instagram.com/gosegu_official/";
    memberSnsLink03.href ="https://www.youtube.com/channel/UCV9WL7sW6_KjanYkUUaIDfQ";
    memberPopupBox.style.backgroundImage = "url('img/gosegu-back.png')";
};
viichan.onclick = function(){
    memberPopup.style.display="flex";
    memberImg.src ="img/vichan.png";
    memberName01.innerText ="비챤";
    memberName02.innerText ="Viichan";
    memberIntro.innerText ="낮뱅 (낮 방송)의 수호자이며, 막내다운 귀여움에 이세계아이돌 최강 게임 실력을 겸비했습니다. 우타이테 출신답게 독특한 음색을 내세운 다양한 커버곡들은 많은 사랑을 받고 있습니다.";
    memberText01.innerText ="고라니";
    memberText02.innerText ="2000년 1월 16일";
    memberText03.innerText ="INFJ";
    memberText04.innerText ="초록색";
    memberText05.innerText ="태명 무지개에서 따온 Rain(비) + 일본어 ちゃん(쨩)";
    memberSnsText01.innerText ="viichan6";
    memberSnsText02.innerText ="@viichan6";
    memberSnsText03.innerText ="비챤 VIichan";
    memberSnsLink01.href ="https://www.twitch.tv/viichan6";
    memberSnsLink02.href ="https://www.instagram.com/viichan6/";
    memberSnsLink03.href ="https://www.youtube.com/channel/UCs6EwgxKLY9GG4QNUrP5hoQ";
    memberPopupBox.style.backgroundImage = "url('img/viichan-back.png')";
};



