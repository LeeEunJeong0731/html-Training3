// javascript/index.js
document.addEventListener('DOMContentLoaded', function () {
  const rootElement = document.getElementById('root');

  // 데이터 모델 정의
  const dataModel = {
    title: 'HTML Training 3',
    content:
      'Lorem ipsum dolor sit amet consectetur. Odio quisque et ac egestas aliquet lectus sagittis tortor pellentesque. Fames urna porttitor egestas ornare non pharetra vulputate imperdiet. Massa vulputate ultrices mauris ut amet sit et netus. Non enim aliquam placerat mattis id in mattis. Elementum mauris vestibulum ullamcorper orci penatibus laoreet risus diam. Etiam neque ut est posuere leo tincidunt ridiculus vitae sagittis. Egestas sed lectus tempus purus egestas. Elit maecenas turpis justo feugiat sagittis enim cras lobortis. Imperdiet turpis pellentesque posuere suspendisse. Et risus scelerisque id nulla. Nulla faucibus ut ultricies velit sed maecenas.',
  };

  // 동적으로 생성할 HTML 요소들의 템플릿 정의
  const template = `
      <div class="width-80vw height-40vh bgc-d9d9d9 display-flex">
        <div class="width-20vw height-35vh bgc-E7E7E7 textAlign-center maginLeft-20px maginTop-20px">
          <p class="fontSize-12px maginTop-10px">${dataModel.content}</p>
        </div>
        <div class="width-50vw height-30vh maginTop-20px maginLeft-20px">
          <div class="width-50vw height-7vh">
            <p class="fontWeight-400 fontSize-32px">${dataModel.title}</p>
          </div>
          <div class="width-55vw height-10vh">
            <p class="fontSize-10px">${dataModel.content}</p>
          </div>
          <div class="width-50vw height-15vh display-flex ailgn-itemsCenter">
            <i class="fontWeight-400 fontSize-40px color-8D8D8D maginTop-50px">Lorem ipsum dolor sit amet consectetur.</i>
          </div>
        </div>
      </div>
      <div class="width-80vw height-40vh bgc-d9d9d9 display-flex justify-sparond ailgn-itemsCenter textAlign-left">
        <div class="width-23vw height-35vh">
          <p class="fontSize-10px">${dataModel.content}</p>
        </div>
        <div class="width-20vw height-30vh display-flex ailgn-itemsCenter flex-directionColumn justify-spaceBetween">
          <div class="width-30vw height-10vh">
            <p class="fontWeight-400 fontSize-32px maginLeft-10px">${dataModel.title}</p>
          </div>
          <div class="width-30vw height-30vh fontSize-9px maginLeft-20px">
            <p><span style="color: red">${dataModel.content}</span></p>
          </div>
        </div>
        <div class="width-20vw height-35vh">
          <p class="fontSize-11px"><span style="color: red">${dataModel.content}</span></p>
        </div>
      </div>
    `;

  // 동적으로 생성한 HTML을 root 요소에 삽입
  rootElement.innerHTML = template;
  //
});
