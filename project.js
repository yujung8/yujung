const projects = {
    major: {
        index: "프로젝트 01",
        category: "데이터 분석 · 수업 프로젝트",
        title: "AI 시대의 전공 선택 데이터 분석",
        summary: "여러 지표를 살펴보고 전공 선택에 도움이 될 수 있는 기준을 탐색한 프로젝트입니다.",
        method: "자료 조사 · 데이터 분석",
        tools: "Python · 데이터 시각화",
        intro: "인공지능의 발전으로 직업 환경이 변하는 상황에서, 대학생의 전공 선택을 어떤 기준으로 살펴볼 수 있을지 질문을 세웠습니다. 취업 관련 지표와 자동화 가능성 등 여러 관점을 함께 고려하는 것을 목표로 했습니다.",
        process: ["분석에 활용할 지표와 자료 출처를 조사했습니다.", "자료를 정리하고 결측값과 지표의 한계를 확인했습니다.", "지표별 의미를 비교하고 결과를 이해하기 쉽게 정리했습니다."],
        learning: "하나의 지표만으로 복잡한 진로 문제를 판단하기 어렵다는 점을 배웠습니다. 데이터의 출처와 수집 방식, 해석의 한계를 함께 살펴보는 것이 중요했습니다.",
        next: "자료의 기준 연도를 더 통일하고, 전공별 차이를 비교할 수 있는 시각화를 보완하고 싶습니다."
    },
    robot: {
        index: "프로젝트 02",
        category: "로봇 · 수업 실습",
        title: "로봇 조작 학습 실습",
        summary: "로봇 시뮬레이션과 조작 학습의 기본 과정을 익히며 진행한 실습입니다.",
        method: "시뮬레이션 실습",
        tools: "Python · Ubuntu · MuJoCo",
        intro: "로봇이 환경을 인식하고 목표 동작을 수행하는 과정을 이해하기 위해 시뮬레이션 기반 실습을 진행했습니다. 실습 환경과 로봇 모델의 구성을 확인하고 제공된 코드를 실행하며 구조를 살펴보았습니다.",
        process: ["실습 자료와 실행 환경을 확인했습니다.", "로봇 모델 및 시뮬레이션 파일의 역할을 살펴보았습니다.", "실행 과정에서 발생한 환경 설정 문제를 확인하고 해결 방법을 탐색했습니다."],
        learning: "코드뿐 아니라 모델 파일과 리소스 경로, 실행 환경이 함께 맞아야 시뮬레이션이 동작한다는 점을 배웠습니다.",
        next: "실행 과정을 단계별로 기록하고, 각 설정이 결과에 미치는 영향을 더 체계적으로 비교하고 싶습니다."
    },
    prompt: {
        index: "프로젝트 03",
        category: "생성형 AI · 실습",
        title: "AI 도구 활용과 프롬프팅 실습",
        summary: "여러 AI 도구의 답변을 비교하고 요청 방식에 따른 결과 차이를 살펴본 실습입니다.",
        method: "도구 비교 · 결과 분석",
        tools: "생성형 AI · 프롬프트 설계",
        intro: "같은 주제라도 요청의 구조와 조건을 어떻게 제시하는지에 따라 답변이 달라지는지 살펴보았습니다. 답변을 그대로 사용하는 대신 결과를 비교하고 핵심을 정리하는 데 중점을 두었습니다.",
        process: ["실습 목적과 질문을 정리했습니다.", "여러 AI 도구에 구조화된 요청을 입력했습니다.", "결과의 구성, 어투, 구체성 등을 비교하고 공통점과 차이를 기록했습니다."],
        learning: "AI 도구를 사용할 때는 질문을 구체적으로 설계하는 것과 결과를 비판적으로 검토하는 과정이 모두 중요하다는 점을 배웠습니다.",
        next: "비교 기준을 더 명확하게 정의하고, 같은 조건에서 반복 실험해 결과의 일관성을 확인하고 싶습니다."
    },
    web: {
        index: "프로젝트 04",
        category: "웹 개발 · 개인 작업",
        title: "개인 포트폴리오 웹사이트",
        summary: "HTML, CSS, JavaScript로 학습과 프로젝트를 정리하는 웹사이트를 제작했습니다.",
        method: "개인 웹사이트 제작",
        tools: "HTML · CSS · JavaScript",
        intro: "수업과 개인 학습에서 진행한 활동을 한곳에 모아 보여 주기 위해 포트폴리오 웹사이트를 만들었습니다. 보기 편한 정보 구조와 차분한 색감, 작은 화면에서도 사용할 수 있는 레이아웃을 목표로 했습니다.",
        process: ["소개, 프로젝트, 학습 기록, 연락처의 구조를 설계했습니다.", "HTML로 콘텐츠를 구성하고 CSS로 색상과 반응형 레이아웃을 적용했습니다.", "JavaScript로 마우스 주변의 빛 효과와 스크롤 등장 애니메이션을 구현했습니다."],
        learning: "웹페이지는 내용을 배치하는 것뿐 아니라 사용자가 정보를 탐색하는 흐름과 접근성, 화면 크기에 따른 변화도 고려해야 한다는 점을 배웠습니다.",
        next: "실제 프로젝트 설명과 연락처를 채우고, 키보드 탐색과 다양한 화면 크기에서의 동작을 더 꼼꼼히 확인하고 싶습니다."
    }
};
const data = projects[new URLSearchParams(location.search).get("project")] || projects.major;
document.title = data.title + " | 정유정";
["index", "category", "title", "summary", "method", "tools", "intro", "learning", "next"].forEach(k => {
    const el = document.getElementById("project-" + k);
    if (el) el.textContent = data[k]
});
const list = document.getElementById("project-process");
if (list) data.process.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
    list.appendChild(li)
});