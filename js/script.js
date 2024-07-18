document.addEventListener(`DOMContentLoaded`, function () { 
    // AOS
    AOS.init();

    // 모바일에  aos init? 빼보면 좋을 것 같음 스와이퍼 수업때 진행했던 스크립트 참고

    // 마우스휠 이벤트(헤더가 휠이 내려갈때는 안보이다가 올라갈때 보이게끔 설정)
    window.addEventListener(`wheel`, (event) => { 
        const headerArea = document.querySelector(`.header_area`);

        if (event.deltaY > 0) {
            // wheel down
            headerArea.classList.remove(`scroll`);
        } else {
            // wheel up
            headerArea.classList.add(`scroll`);
        }

    });

    // body 에 bg 변경(스크롤 이벤트 offset 값 활용)
    const sec2 = document.querySelector(`.sec_2`);
    const sec3 = document.querySelector(`.sec_3`);

    window.addEventListener(`scroll`, () => { 
        const sec2Offset = sec2.offsetTop - 500;
        const sec3Offset = sec3.offsetTop;

        const scrollTop = window.scrollY;
        const bodyBg = document.querySelector(`body`);

        if (scrollTop > sec2Offset && scrollTop < sec3Offset) {
            bodyBg.classList.add(`bg`);
        } else {
            bodyBg.classList.remove(`bg`);
        }
    });


    // 과제 : sec_4 swiper

    var swiper = new Swiper(".ceoSwiper", {
        direction: "vertical",
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false, /* 다른 인터렉션이 있을 때 자동재생이 멈추는 것을 방지 */
        },
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
      });

    // 과제 : sub_menu
    // 마우스 올리면 카테고리에 맞는 탭 활성화 

    const submenuTab=document.querySelectorAll(`.main_menu li`);
    const submenuBox=document.querySelector(`.sub_menu_box`);

    for(const li of submenuTab){
        li.addEventListener(`mouseenter`,function () {
            submenuBox.classList.add(`active`);

            //탭메뉴 연결
            const tab = this.getAttribute(`data-tab`);
            const subMenu = document.querySelectorAll(`.sub_menu`);

            for(const tabContent of subMenu){
                tabContent.classList.remove(`active`);
                /* 제거를 먼저 시키고 추가를 해야됨 아니면 추가되고 제거돼서 안 뜸 */
            }

            const changeTab = document.querySelector(`#${tab}`);
            changeTab.classList.add(`active`);
        });
    }

    // 서브메뉴박스에서 마우스 나가면 기존 상태로 변경
    submenuBox.addEventListener(`mouseleave`,function () {
        this.classList.remove(`active`);

    });


    // 상단이동버튼
    const topBtn =document.querySelector(`.top_btn`);
    window.addEventListener(`scroll`, function () {
        const sct=this.window.scrollY;
        
        console.log(sct);

        if(sct >= 300) {
            topBtn.classList.add(`scroll`);
        } else {
            topBtn.classList.remove(`scroll`);
        }
    });

    // 클릭 시 최상단 이동
    topBtn.addEventListener(`click`, ()=> {
        window.scrollTo({
            top:0,
            behavior:'smooth',
        })
    })
    


    // 작은그리드에서 햄버거 버튼 클릭하면 메인메뉴만 출력 / 햄버거 버튼은 위치값 서로 바뀌도록 처리
    const menuBtn = document.querySelector(`#hamburger`);
    const mainMenu = document.querySelector(`.main_menu`);

    menuBtn.addEventListener(`click`, function () { 
        this.classList.toggle(`active`);

        //contains 활용해서 메인메뉴를 메뉴버튼 active가 있을때 추가 아니면 제거
        const hasClass = this.classList.contains(`active`);

        // true생략가능
        if(hasClass) {
            mainMenu.classList.add(`active`);
        } else{
            mainMenu.classList.remove(`active`);
        }
    });


});