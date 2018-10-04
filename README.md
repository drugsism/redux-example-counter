
React보일러 플레이트로 프로젝트 시작



Counter 예제

- 내용:

- 현재 값 표시(기본값 0)

- 값을 1증가, 1감소 시키는 버튼

- 배경색을 변경시키는 버튼 





create-react-app



npm install -g create-react-app



create-react-app redux-counter

cd redux-counter



code .

npm start





npm install --save redux react-redux



react-redux: view layer binding module 

Component 와 redux를 쉽게 connect해주기 위한 module





Directory구조 생성



src   - components

        - actions

- reducers





App.js 파일을 생성하고 index.js 에서 index.htm에 연결 해준다.





components   - Value.js // 카운터 표시 dumb Component

- Control.js // 커운터 및 배경색 변경 버튼 dumb Component

- Counter.js // Value, Control을 바인딩 하는 Smart Component









Action 

어떤 작업을 할때 작업에 대한 정보를 지니고 있는 객체

- 값을 증가 시키기

- 값을 감소 시키기

- 새로운 색상값 설정



actions - ActionType.js // ActionType정의 

- 대문자 const로 export

- index.js // Action 생성자 함수

- Actiontypes.js 에서 정의된 actionType의 정보를 객체로 담아서 리턴

- 다른 곳에서 불러서 사용할 수있도록 내보내는 역할









Reducer

- 상태의 변화를 만드는 함수

- 순수해야함

-비동기, 동일한 인수일경우 동일한 결과

-이전 상태와 액션을 받아서 새로운 상태를 반환한다.



Reducer는 ActionType 에서 정의된 ActionType을 가져와서 

변경된 새로운 상태값을 객체로 반환한다.



여러개의 Reducer는 한개의 reducer로 연결해줘야한다.



redux의 combineReducers로 각 reducer를 불러와 묶어준다.







Store

- 어플리케이션의 현재상태를 지니고 있음

- 단 한개의  store만 존재한다



- createStore를 불러와서 reducer를 넘겨줘서 Store를 생성한다.



- 컴포넌트와 연결해서 사용.



- 역할

- dispatch(action) // 현재 상태와 해당 액션을 리듀서로 보낸다. --> 리듀서가 액션을 확인하고 새로운 상태를 처리, 반환

- getState() // 현재 상태 반환

- subscribe(listener) // 상태가 변경시 실행할 콜백함수 

- replaceReducer(nextReducer) // hotLoarding splitting



- react-redux에서 Provider를 불러와서 store를 App컴포넌트와 연결한다.





Component와 Redux연결

Counter 컴포넌트(smart Component)에 

- react-redux 에서 connect호출

- Action생성자를 호출



connect 

- mapStateToProps // Redux의 State를 component의 props로 반환

- mapDispatchToProps // Redux의 Action을 component의 props로 반환



export default connect([OPTION])(Component)로 연결 

























