let trailer = document.getElementById("trailer");
trailer.controls = true;
trailer.autoplay = true;
trailer.loop = false;
trailer.volume = 0.3;
trailer.muted="muted"; //크롬의 경우 muted 시켜줘야 자동재생됨.

trailer.onended = function(e) {
    let newNode = document.createElement("div");
    let parentNode = trailer.parentElement;
    parentNode.insertBefore(newNode, trailer);//newNode를 trailer 앞에 삽입
    newNode.innerHTML = "예고편 재생이 종료되었습니다.(메세지를 제거하려면 클릭하세요)";
    newNode.style.color = "darkslategrey";
    // newNode.addEventListener("click", ()=> {
    //     let p = newNode.parentElement;
    //     p.removeChild(newNode);
    // });
    newNode.addEventListener("click", function () {
        let p = this.parentElement;
        p.removeChild(this);
    });
}