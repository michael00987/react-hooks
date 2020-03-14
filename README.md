# react-hook 학습

## 내용

 - react-hook은 class component에서 사용하던 state나 lifeCylce method를 
   functional component에서도 사용할수있게 해준다.
   
 - useState는 두개의 배열을 반환한다, 0번인덱스는 상태이고, 1번인덱스는 0번인덱스의 상태를 바꾸는 메서드이다.
 - useEffect는 class component의 lifeClcle method와 비슷하다.
   useEffect는 인자로2개를 받는다. 
   첫번째 인자는 콜백함수이다. 이 콜백함수는 랜더 되기 전과 후에 실행이 된다. 변화이 있을때마다 실행이된다.
   두번째 인자는 배열이다. 배열안의 요소의 변화를 감시한다.
   두번째 인자가 빈 비열이면, 감시할 대상이 없기때문에 첫랜더가 된 후에 1번만 실행이 된다(componentDidMount와 같다)
   
