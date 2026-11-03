const styles = {
minimal:{name:"Minimalism",desc:"필요없는 건 다 빼고 여백과 타이포만 남기는 스타일",tags:["여백","무채색","간결함"]},
editorial:{name:"Editorial",desc:"잡지나 신문처럼 큰 세리프 제목과 얇은 선으로 읽는 화면",tags:["세리프","얇은 선","타이포"]},
swiss:{name:"Swiss Style",desc:"그리드와 왼쪽 정렬, 굵은 산세리프와 빨강·검정이 특징",tags:["Grid","산세리프","Red / Black"]},
bento:{name:"Bento Grid",desc:"크기가 다른 칸에 정보를 나눠 담는 모듈형 레이아웃",tags:["Grid","카드","라운드"]},
glass:{name:"Glassmorphism",desc:"반투명한 유리판 뒤로 배경이 흐릿하게 비치는 스타일",tags:["Backdrop blur","투명도","유리"]},
clay:{name:"Claymorphism",desc:"점토처럼 말랑하고 통통한 3D 느낌의 스타일",tags:["Soft UI","안쪽 그림자","둥근 모서리"]},
neo:{name:"Neo Brutalism",desc:"굵은 검정 테두리와 블러 없는 그림자, 쨍한 원색",tags:["Bold border","Hard shadow","원색"]},
maximal:{name:"Maximalism",desc:"패턴과 색, 장식을 겹쳐 풍성하게 표현하는 스타일",tags:["패턴","레이어","강한 색"]},
kinetic:{name:"Kinetic Typography",desc:"움직이는 글자 자체가 주인공이 되는 모션 중심 스타일",tags:["Motion","Animation","타이포"]},
grain:{name:"Grainy Gradient",desc:"부드러운 그라디언트에 필름 노이즈 질감을 더한 스타일",tags:["Gradient","Grain","아날로그"]},
chrome:{name:"Y2K Chrome",desc:"크롬 금속과 무지개빛 광택을 표현한 2000년대 감성",tags:["Metallic","Glossy","Y2K"]},
pixel:{name:"Pixel Art",desc:"8비트 게임 화면 같은 도트와 계단형 테두리",tags:["Pixel font","8-bit","각진 형태"]},
memphis:{name:"Memphis",desc:"삼각형·점·원과 원색을 장난스럽게 배치하는 스타일",tags:["도형","원색","패턴"]},
bauhaus:{name:"Bauhaus",desc:"원·삼각형·사각형과 빨강·노랑·파랑의 기하학 디자인",tags:["Geometry","Primary color","기능성"]},
pop:{name:"Pop Art",desc:"만화와 인쇄물 감성, 망점 배경과 굵은 외곽선",tags:["Halftone","만화","강한 외곽선"]},
collage:{name:"Collage",desc:"신문과 종이, 테이프를 오려 붙인 듯한 핸드메이드 감성",tags:["Paper","Rotate","Handmade"]},
risograph:{name:"Risograph",desc:"2~3색 잉크의 겹침과 어긋남을 흉내 낸 인쇄 스타일",tags:["2 color","Overprint","Ink"]},
deco:{name:"Art Deco",desc:"금색 선과 대칭, 우아한 장식이 특징인 1920년대 감성",tags:["Gold","Symmetry","Elegance"]},
cyber:{name:"Cyberpunk",desc:"네온과 어두운 도시, 글리치 느낌의 SF 스타일",tags:["Neon","Glitch","Dark"]},
iso:{name:"Isometric",desc:"비스듬한 시점의 3D 평면과 여러 겹 그림자로 두께 표현",tags:["3D","Perspective","Layer shadow"]}
};
const select=document.querySelector("#styleSelect");
const nameEl=document.querySelector("#styleName");
const descEl=document.querySelector("#styleDesc");
const numberEl=document.querySelector("#styleNumber");
const tagsEl=document.querySelector("#styleTags");
const previewNumber=document.querySelector(".preview-footer span");
select.addEventListener("change",()=>{
 const key=select.value, data=styles[key], index=select.selectedIndex+1;
 document.body.dataset.theme=key;
 nameEl.textContent=data.name;
 descEl.textContent=data.desc;
 numberEl.textContent="STYLE "+String(index).padStart(2,"0")+" / 20";
 previewNumber.textContent=String(index).padStart(2,"0")+" — 20";
 tagsEl.replaceChildren(...data.tags.map(tag=>{const el=document.createElement("span");el.textContent=tag;return el;}));
});
