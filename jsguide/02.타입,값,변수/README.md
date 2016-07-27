# 타입, 값, 변수
## 숫자
- 자바스크립트는 정수 값과 실수 값을 구분하지 않는다.
  - 자바스크립트에서는 모든 숫자를 실수로 표현한다.
  - 숫자를 IEEE 754 표준에서 정의한 64비트 실수 형태로 표현한다.

### 정수 리터럴
- 자바스크립트에서 10진수 정수는 숫자를 일렬로 나열한 것이다.
```js
0
3
100000
```
- 16진수 리터럴은 0x 나 0X 뒤에 16진수 숫자들이 뒤따르는 형태다.
```js
0xff // 15 * 16 + 15 = 255
0xCAFE911
```
- 일부 자바스크립트 구현체에서는 정수 리터럴을 8진수로도 표현할 수 있다. (ECMAScript 표준에서 8진수 표현을 지원하지는 않는다.)
  - 8진수 리터럴은 0 뒤에 0 ~ 7 사이의 숫자 시퀸스가 뛰따른다.
  - ES5 의 strict mode 에서는 8진수 리터럴을 명시적으로 금지한다.
```js
0377 // 3 * 64 + 7 * 8 + 7 = 255
```

### 부동소수점 리터럴
- 부동소수점 리터럴은 소수점을 가질 수 있으며, 정수 부분과 소수점 그리고 소수점 이하 부분으로 표현한다.
- 부동소수점 리터럴은 지수 표기법으로도 표현할 수 있다. 실수에 이어 문자 e 나 E 가 오고, 그 뒤에 선택적으로 + / - 가 오고, 마지막으로 정수 지수 값이 따라온다.
```js
3.14
2345.789
.333333
6.02e23 // 6.02 * 10^23
1.4738223E-32 // 1.4738223 * 10^-32
```

### 산술 연산
- 사칙연산 ( + - * /) 과 나눗셈 뒤 나머지를 구하는 % 연산자가 있다.
  - ES7 에서는 지수 연산자도 구현되어 있다. (2 &#42;&#42; 3 // 8)
- Math 객체를 통해 더 복잡한 수치 연산을 지원한다.
  - [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) 에서 더 자세한 내용을 볼 수 있다.
```js
Math.pow(2, 53) // 2^53
Math.round(.6) // 1
Math.ceil(.6) // 1
Math.floor(.6) // 0
Math.abs(-5) // 5
Math.max(x, y, z) // 가장 큰 값
Math.min(x, y, z) // 가장 작은 값
Math.random() // 0 과 1 사이의 난수
Math.PI // 원주율
Math.E // 자연 로그 상수 e
Math.sqrt(3) // 3 의 제곱근
Math.sin(Math.PI / 2) // 1 이외 cos, tan 등의 삼각함수
Math.log(10) // 자연 로그 10
Math.log(512) / Math.LN2 // 9 밑이 2인 로그 512
Math.exp(3) // Math.E 의 3 거듭제곱
```
- 자바스크립트 산술 연산은 오버플로와 언더플로, 0 으로 나누는 에러를 발생시키지 않는다.
  - 산술 연산 결과가 표현 범위 최대보다 크면 Infinity, 최소보다 작으면 -Infinity 를 출력한다.
  - 언더플로는 산술 연산 결과가 표현할 수 있는 가장 작은 값보다 더 0 에 가까우면, 0 혹은 -0 을 출력한다.
    - -0 은 자바스크립트 특수 값인데, 음의 0으로 0 과 같다.
```js
-0.1e-400; // -0
0.1e400; // 0
-0.1e-400 === 0.1e400 // true
```
  - 0 으로 나누는 연산은 에러가 아니며, Infinity 혹은 -Infinity 를 출력한다.
    - 다만, 0 / 0 은 NaN (Not a Number) 가 출력된다.
    - NaN 은 무한대를 무한대로 나누는 경우, 음수에 루트를 씌우는 경우, 숫자가 아닌 피연산자로 산술 연산을 하는 경우에도 발생한다.
    - ES5 에서 NaN 과 Infinity 는 읽기 전용 값으로 정의하며, Number 객체에는 Infinity 와 NaN 이 따로 상수로 정의되어 있다.

### 이진 부동소수점과 반올림 오류
- 자바스크립트에서는 한정된 숫자만 부동소수점 형태로 표현할 수 있다.
- 자바스크립트에서는 실수 연산을 할 때 근사값으로 표현한다.
  - 자바스크립트는 높은 정밀도를 가지고 있어서 0.1 에 근접한 근사치를 낼 수 있지만, 정확하게 표현할 수는 없다.
```js
.3 - .2 // 0.09999999999999998
.2 - .1 // 0.1
```
- 이 것은 부동소수점 숫자를 사용하기 때문에 벌어지는 현상이며, 계산된 값은 대부분 적절하지만, 동등 비교할 경우 문제가 발생한다.
  - 자바스크립트의 다음 버전은 이런 반올림 문제를 피하는 십진수 타입을 지원할 예정이라고 한다.

### 날짜와 시간
- Date() 생성자를 통해 날짜와 시간을 표현할 수 있다.
- Date 객체는 간단한 날짜 계산을 하는 메소드를 가진다.
```js
var then = new Date(2010, 0, 1); // 2010.01.01
var later = new Date(2010, 0, 1, 17, 10, 30); // 2010.01.01 17:10:30

var now = new Date(); // Fri Jul 22 2016 01:58:28 GMT+0900 (KST)
var elapsed = now - then; // millisecond 단위로 날짜 계산
var timestamp = +new Date(); // 1469120357691

later.getFullYear() // 2010
later.getMonth() // 1 : 월은 0 부터 시작한다.
later.getDate() // 1 : 일은 1 부터 시작한다.
later.getDay() // 5 : 0 은 일요일, 5는 금요일
later.getHours() // 17 : 오후 5 시
later.getUTCHours() // 8 : 서울은 UTC+09 이므로, 9 시간을 뺀다.
later.toString() // Fri Jan 01 2010 17:10:30 GMT+0900 (KST)
later.toUTCString() // Fri, 01 Jan 2010 08:10:30 GMT
later.toLocaleDateString() // 2010. 1. 1. 오후 5:10:30
later.toLocaleTimeString() // 오후 5:10:30
later.toISOString() // 2010-01-01T08:10:30.000Z
```

## 텍스트
- 문자열은 16 비트 값들이 연속적으로 나열된 변경 불가능한 값으로, 각 문자는 유니코드 문자로 표현된다.

### 문자열 리터럴
- 문자열 그대로를 포함하려면 단순히 문자열을 작은 따홈표 혹은 큰 따옴표로 둘러싸면 된다.
  - Airbnb 의 [Java Script Style Guide](https://github.com/airbnb/javascript#strings) 에 따르면, 작은 따옴표를 쓰길 권장한다.
- ES3 에서는 문자열 리터럴은 한 줄로 작성해야 하지만, ES5 에서는 줄 끝에 역슬래시를 쓰면, 한 줄을 여러 줄로 작성할 수 있다.
  - 역슬래시와 그 뒤에 오는 종료자(line terminator) 는 문자열 리터럴의 일부가 아니다.
  - 문자열 리터럴에 줄바꿈 문자를 포함시켜야 한다면, \n 을 사용한다.
```js
'two\nlines'
/*
 * two
 * lines
 */

'one\
long\
line'
/*
 * onelongline
 */
```
- ''로 감싸진 문자열에서 ' 를 이스케이프 하기 위해서는 \ 를 앞에 붙여준다.
```js
'Hi! I\'m Jaewon.'
```

### 문자열 리터럴 내의 이스케이프 문자열
- \ 는 자바스크립트 문자열에서 특별한 기능을 수행한다.
  - \n 은 줄바꿈 문자를 나타내는 이스케이프 시퀸스다.
- 다음은 자바스크립트 이스케이프 시퀸스들이다.
|시퀸스|표현하는 문자|
|:-----|------------:|
|\0    |널 문자(\u0000)|
|\b    |역스페이스(\u0008)|
|\t    |수평 탭(\u0009)|
|\n    |줄바꿈 문자(\u000A)|
|\v    |수직 탭(\u000B)|
|\f    |폼 피드(\u000C)|
|\r    |캐리지 리턴(\u000D)|
|\"    |큰따옴표(\u0022)|
|\'    |작은따옴표(\u0027)|
|\\\\  |역슬래시(\u005C)|
|\x    |두 개의 16 진수 숫자 xx 에 의해 지정되는 Latin-1 문자|
|\u    |네 개의 16 진수 숫자 xxxx 에 의해 지정되는 유니코드 문자|

### 문자열 다루기
- + 연산자를 통해 여러 문자열을 이어 붙일 수 있다.
```js
var msg = 'Hello, ' + 'World!'; // Hello, World!
```
- 문자열의 길이는 length 프로퍼티를 사용하면 된다.
```js
var s = 'String Length';
s.length; // 13
```
length 이외에도 문자열을 다루는 다양한 메소드가 있다.
```js
var s = 'hello, world';
s.charAt(0); // h : 첫 번째 문자
s.charAt(s.length - 1); // d : 마지막 문자

s.substring(1, 4); // ell : 1 ~ 4 까지 (1 ~ 2 : e / 2 ~ 3 : l / 3 ~ 4 : l) String 객체의 부분 집합을 반환한다.
s.substring(4, 1); // 위와 같다.
// 모든 인자의 최소값은 0 이고, 최대값은 s.length - 1 이다.

s.slice(1, 4); // ell : 1 ~ 4 이외의 문자열을 제거하고, 새 문자열을 반환한다.
s.slice(4, 1); // '' : 4 위치에서부터 1 번째 위치까지 잘라낸다.
s.slice(1, -1); // s.slice(1, s.length - 1);
// 인자에서 음수는 s.length 에서 해당 수의 절대값을 뺀 값이다.

s.indexOf('l'); // 2 : 문자 l 이 위치한 첫 번째 위치
s.lastIndexOf('l'); // 10 : 문자 l 이 위치한 마지막 위치
s.indexOf('l', 3); // 3 : 세 번째 문자 이후(포함), 문자 l 이 등장하는 첫 위치

s.split(', '); // ['hello', 'world'] 문자열 hello, world 를 문자열 ', ' 로 구분하고, 이를 배열로 반환한다.

s.replace('h', 'H'); // Hello, world : h 를 H 로 치환한다.
// 첫 번째 인자에 RegExp 가 올 수 있다.

s.toUpperCase(); // HELLO, WORLD : 대문자로 치환한다.
```

### 패턴 매칭
- 자바스크립트는 문자 패턴을 나타내는 객체를 생성하기 위해 RegExp() 생성자를 정의한다.
- 이 패턴은 정규 표현식(Regular Expression) 이라고 부르며, Perl 의 구문을 따른다.
- RegExp 는 자바스크립트의 원시 타입이 아니다.
  - Date 객체처럼 RegExp 는 유용한 API 를 가지고 있는 객체이다.
  - RegExp 는 자바스크립트의 기본 데이터 타입은 아니지만, 정규식에 대한 리터럴 문법을 가지고 있다.
    - 한 쌍의 슬래시 사이에 있는 문자열은 정규 표현식 리터럴을 구성한다.
```js
/^HTML/; // HTML 로 시작하는 문자열
/[1-9][0-9]*/; // 0 이 아닌 숫자로 시작하는 숫자
/\bjavascript\b/i; // 대소문자 구별없이 javascript 와 일치하는 문자열
```
- RegExp 객체의 메소드는 다음과 같다.
```js
var text = 'testing: 1, 2, 3';
var pattern = /\d+/g; // 하나 이상의 모든 숫자와 일치
// pattern = new RegExp('\d', 'g'); 와 같이 선언할 수도 있다.

pattern.test(text); // true : 일치하는 문자열이 존재
text.search(pattern); // 9 : 첫 번째로 매치하는 문자열의 위치
text.match(pattern); // ['1', '2', '3'] : 일치된 항목의 배열
text.replace(pattern, '#'); // testing: #, #, #
text.split(/\D+/); // ['', '1', '2', '3'] : 숫자가 아닌 문자열을 기준으로 분할
```

## 불린 값
- 불린 값은 참/거짓을 표현한다. 불린 값이 될 수 있는 표현식은 예약어인 true, false 밖에 없다.
- a == 4 와 같이 비교의 결과로 생성할 수도 있다.
- 일반적으로 불린 값은 자바스크립트 제어 구조 내에서 사용된다.
```js
if (a === 4) {
  b = b + 1;
} else {
  a = a + 1;
}
```
- 다음 값들은 모두 false 와 같다.
  - 이 외의 값들(객체를 포함하는 다른 모든 값)은 모두 true 와 같다.
```js
undefined
null
0
-0
NaN
'' // 빈 문자열
```
- 문자열이나, 숫자 등의 값을 Boolean 타입으로 형변환 하기 위해서 다음과 같이 코드를 작성할 수 있다.
```js
var a = '123456';
var b = undefined;
var c = document;

!!a // true
!!b // false
!!c // true
```
- 자바스크립트는 거짓으로 판정되는 값은 false 로, 참으로 판정되는 값은 true 로 동작할 것이라고 기대한다.
  - 예를 들어, o 가 객체 또는 null 값을 가지고 있다고 가정한다. 다음과 같은 구문을 사용하면, o 가 null 인지 아닌지 여부를 명확히 테스트할 수 있다.
  - 비교를 생략하고 o 만을 조건문에 조건으로 주어도 되며, 단순히, o 가 true 인지 false 인지를 검사할 때에는 이런식으로 코딩하길 권장한다.
    - 하지만, o 가 무조건 null 인지를 검사할 때는 명확하게 o !== null 라고 조건을 주어야 한다.
```js
if (o !== null) ...
if (o) ...
```
- 불린 값에 사용되는 세 가지 중요한 연산자가 있다.
  - && 연산자는 불린 AND 연산을 수행하며, 두 피연산자가 모두 참일 때 참으로 평가한다.
  - || 연산자는 불린 OR 연산자로, 두 피연산자 중 하나라도 참이면 참이고, 두 개 모두 거짓이어야 거짓을 반환한다.
  - ! 연산자는 불린 NOT 연산을 수행하며, 피연산자가 거짓이면 참, 참이면 거짓을 반환한다.

## null 과 undefined
- null 은 아무 값도 갖지 않음을 가리킬 때 사용되며, typeof 로 타입을 체크하면 object 를 반환한다.
- undefined 는 null 보다 심한 부재 상태를 나타내며, 초기화되어 있지 않는 변수나, 존재하지 않는 객체 프로퍼티 혹은, 배열의 원소 값에 접근할 때 얻는 값이다.
- undefined 는 또, 반환 값이 없는 함수의 반환값이고, 실 인자가 전달되지 않은 형식인자의 값이다.
- null 과 undefined 는 둘 다 값이 없음을 가리킨다.
- null 과 undefined 를 비교하면 다음과 같다.
```js
null == undefined // true
null === undefined // false

/***** because... *****/
typeof null // object
typeof undefined // undefined
```
- 주로, 시스템 수준에서 예기치 않은 상황에 발생한, 오류성 값 부재를 표현할 때 undefined 를 사용한다.
- 일반적으로, 또는 예상 가능한 값 부재 상황을 표현할 때 null 을 사용한다.
  - 변수나 프로퍼티에 할당할 필요가 있거나 함수에 인자로 전달할 필욕 있다면, undefined 보다는 null 을 사용하는 것이 좋다.

## 전역 객체
- 전역 객체는 매우 중요한 용도로 사용되는 일반적인 자바스크립트 객체이다.
  - 전역 객체의 프로퍼티는 자바스크립트 프로그램 전역에서 사용할 수 있게 정의된 심볼이며, 자바스크립트 인터프리터가 시작할 때, 새로운 전역 객체를 만들고 그 프로퍼티들을 초기화한다.
  - undefined, Infinity, NaN 같은 전역 프로퍼티
    - 전역 객체가 생성될 때 초기화되는 프로퍼티들은 예약어가 아니지만, 예약어처럼 취급된다.
  - isNaN(), parseInt(), eval() 같은 전역 함수
  - Date(), RegExp(), String(), Object(), Array() 같은 생성자 함수
  - Math 와 JSON 같은 전역 객체
- 최상위 코드에서는 this 키워드를 통해 전역 객체를 참조할 수 있다.
```js
var global = this; // 전역 객체를 참조하는 변수를 정의한다.
```

## 래퍼 객체
- 자바스크립트 객체는 복합적인 값이다.
- 객체는 프로퍼티 또는 이름있는 값들의 집합이며, '.' 표기법을 사용하여 프로퍼티의 값을 참조하며, 프로퍼티 값이 함수일 때, 그 함수를 메소드라고 한다.
  - 객체 o 의 메소드 m 을 호출하려면 o.m() 과 같이 적는다.
- 문자열에도 프로퍼티와 메소드가 있다.
```js
var s = 'hello world';
var word = s.substring(s.indexOf(' ') + 1, s.length);
```
- 문자열 s 의 프로퍼티를 참조하려고 할 때, 자바스크립트는 new String(s); 를 호출한 것처럼 문자열 값을 객체로 변환한다.
  - 프로퍼티 참조가 해제되면 새로 생성된 임시 객체는 메모리에서 회수된다.
  - 숫자와 불린도 메소드를 가지며, Number() 혹은 Boolean() 생성자를 통해 만들어진다.
  - null 과 undefined 값의 래퍼 객체는 없다.
- 다음은 임시 객체에 관한 예제 코드이다.
```js
var s = 'test';
s.len = 4; // 문자열 프로퍼티에 값을 할당
var t = s.len; // 프로퍼티 참조
// t => undefined
```
- t 는 undefined 이다. 2 번째 줄에서 생성된 임시 String 객체의 len 프로퍼티에 4를 할당한 뒤, 바로 삭제되기 때문이다.
  - 하지만 다음과 같은 코드에서는 다른 결과가 나온다.
```js
var s = new String('test');
s.len = 4;
var t = s.len; // t => 4
```
- 문자열, 숫자, 불린의 프로퍼티에 접근할 때 생성되는 임시 객체는 래퍼 객체로 알려져 있다.
- 문자열과 숫자, 불린 값의 프로퍼티는 읽기 전용이고, 이 값들에 새로운 프로퍼티를 정의할 수 없다는 점에서 이 값들은 객체와 다르다는 것을 알 수 있다.
- String() 과 Number(), Boolean() 생성자를 통해 명시적으로 래퍼 객체를 생성할 수 있다.
```js
var s = 'test', n = 1, b = true;
var S = new String(s);
var N = new Number(n);
var B = new Boolean(b);

console.log(
  s == S,
  n == N,
  b == B
);
// true, true, true

console.log(
  s === S,
  n === N,
  b === B
);
// false, false, false

/***** because... *****/
typeof s // String
typeof n // Number
typeof b // Boolean
typeof S // object
typeof N // object
typeof B // object
```
- 자바스크립트는 래퍼 객체를 필요에 따라 기본 타입으로 변환하며, S, N, B 는 값 s, n, b 처럼 작동한다.

## 변경 불가능한 원시 타입과 변경 가능 객체 참조
- 자바스크립트에서 원시 타입(undefined, null, 불린, 숫자, 문자열) 값과 객체 사이에는 큰 차이가 있다.
  - 원시 타입은 수정할 수 없다.
  - 원시 타입은 값으로 비교되며, 두 값은 같은 값이어야만 같다고 할 수 있다.
  - 객체는 원시 타입과는 달리, 자신의 값을 변경할 수 있다.
  - 객체는 값으로 비교되지 않고, 두 객체가 같은 프로퍼티와 값을 가지고 있어도 두 객체는 같지 않다.
```js
var o = { x: 1 };
o.x = 2; // 프로퍼티의 값을 변경함으로써 객체를 변경한다.
o.y = 3; // 새 프로퍼티를 추가함으로써 객체를 변경한다.

var a = [1, 2, 3];
a[0] = [0]; // 배열의 원소 하나의 값을 바꾼다.
a[3] = 4; // 배열의 원소를 하나 추가한다.
```
```js
var o = { x: 1 }, p = { x: 1 };
o === p // false
var a = [], b = [];
a === b // false
```
- 위에서 봤듯이, 객체를 변수에 할당하는 것은 단순히 참조를 할당하는 것이다. 이는 객체의 새로운 복사본을 생성하지 않는다.
- 객체 혹은 배열의 새로운 복사본을 만들고 싶다면, 명시적으로 객체 프로퍼티 또는 배열의 원소를 복사해야 한다.
- 다음은 iteration 으로 배열의 원소를 복사하는 예제이다.
```js
var a = ['a', 'b', 'c'];
var b = [];

for (var i = 0, len = a.length; i < len; i++) {
  b[i] = a[i];
}
```
- 다음은 두 다른 배열을 서로 비교하는 함수이다.
```js
function equalArrays(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  for (var i = 0, len = a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}
```

__+ Object 복사하기__
- 다음과 같은 방식으로 Object 를 복사하면, 객체를 참조하는 복사가 된다.
```js
var foo = { key: 'Copy an Object !' };
var bar = foo;
```
- 예제를 통해 얕은 복사 (Shallow Copy), 깊은 복사(Deep Copy) 를 구현하고자 한다.
```js
/***** Shallow Copy *****/
function copyObject(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  } else {
    var copiedObj = obj.constructor();

    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        copiedObj[prop] = obj[prop];
      }
    }

    return copiedObj;
  }
}

var foo = { key: 'value' };
var bar = copyObject(foo);

foo.key = 'other value';

console.log(foo); // Object {key: "value"}
console.log(bar); // Object {key: "other value"}
```
- 위와 같이, 인자가 null 이 아닌 객체일 경우, constructor() 메소드로 해당 객체와 똑같은 객체를 생성한다.
- 그리고, hasOwnProperty() 메소드로 해당 객체가 인자로 넘긴 프로퍼티를 가지고 있는지 체크하고, 이에 맞는 프로퍼티에 같은 값을 할당한다.
- lodash (혹은 underscore) 로는 더욱 간단히 구현할 수 있다.
```js
/***** Shallow Copy - with lodash *****/
var foo = { key: 'value' };
var bar = _.clone(foo);

foo.key = 'other value';

console.log(foo); // Object {key: "value"}
console.log(bar); // Object {key: "other value"}
```
```js
/***** Deep Copy *****/
function copyObject(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  } else {
    var copiedObj = obj.constructor();

    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        copy[prop] = copyObject(obj[prop]);
      }
    }

    return copiedObj;
  }
}

var foo = {
  deep: {
    key: 'value'
  },
  shallow: false
};

var bar = copyObject(foo);
foo.deep.key = 'other value';

console.log(foo); // Object {deep: Object, shallow: false} * foo.deep.key = 'ohter value'
console.log(bar); // Object {deep: Object, shallow: false} * bar.deep.key = 'value'
```

## 타입 변환
<table>
<thead>
<tr><th rowspan="2">값</th><th colspan="4">변환된 값</th></tr>
<tr><th>String</th><th>Number</th><th>Boolean</th><th>Object</th></tr>
</thead>
<tbody>
<tr><td>undefined</td><td>"undefined"</td><td>NaN</td><td>false</td><td>TypeError 예외 발생</td></tr>
<tr><td>null</td><td>"null"</td><td>0</td><td>false</td><td>TypeError 예외 발생</td></tr>
<tr><td>true</td><td>"true"</td><td>1</td><td></td><td>new Boolean(true)</td></tr>
<tr><td>false</td><td>"false"</td><td>0</td><td></td><td>new Boolean(false)</td></tr>
<tr><td>""</td><td></td><td>0</td><td>false</td><td>new String("")</td></tr>
<tr><td>"1.2"</td><td></td><td>1.2</td><td>true</td><td>new String("1.2")</td></tr>
<tr><td>"one"</td><td></td><td>NaN</td><td>true</td><td>new String("one")</td></tr>
<tr><td>0</td><td>"0"</td><td></td><td>false</td><td>new Number(0)</td></tr>
<tr><td>-0</td><td>"-0"</td><td></td><td>false</td><td>new Number(-0)</td></tr>
<tr><td>NaN</td><td>"NaN"</td><td></td><td>false</td><td>new Number(NaN)</td></tr>
<tr><td>Infinity</td><td>"Infinity"</td><td></td><td>true</td><td>new Number(Infinity)</td></tr>
<tr><td>-Infinity</td><td>"-Infinity"</td><td></td><td>true</td><td>new Number(-Infinity)</td></tr>
<tr><td>1</td><td>"1"</td><td></td><td>true</td><td>new Number(1)</td></tr>
<tr><td>{}</td><td>"[object Object]"</td><td>NaN</td><td>true</td><td></td></tr>
<tr><td>[]</td><td>""</td><td>0</td><td>true</td><td></td></tr>
<tr><td>[9]</td><td>"9"</td><td>9</td><td>true</td><td></td></tr>
<tr><td>['a']</td><td>"a"</td><td>NaN</td><td>true</td><td></td></tr>
<tr><td>function() {}</td><td>"function() {}"</td><td>NaN</td><td>true</td><td></td></tr>
</tbody>
</table>

### 변환과 동치
- 자바스크립트는 값의 타입을 유연하게 변경할 수 있는데, 마찬가지로 동치 연산자 == 도 유연하게 작용한다.
  - 보다 엄격하게 값이 같은지를 판단하려면 자료형 변환을 수행하지 않는 === 연산자를 사용한다.
```js
null == undefined // true
"0" == 0 // true >> 비교하기 전에 숫자로 변환된다.
0 == false // true >> 불린은 비교하기 전에 숫자로 변환된다.
"0" == false // true >> 두 피연산자는 비교하기 전에 숫자로 변환된다.
```

### 명시적 변환
- 자바스크립트는 많은 형 변환을 자동으로 수행하지만, 명시적 변환이
  필요할 때도 있다.
- 명시적으로 타입 변환을 수행하는 가장 간단한 방법은 Boolean(), Number(), String(), Object() 함수를 사용하는 것이다.
  - new 없이 호출되면, 이 함수들은 변환 함수로 작동한다.
```js
Number('3'); // 3
String(false); // 'false'
Boolean([ ]); // true
Object(3); // new Number(3) 의 결과와 같다.

/***** Other Ways *****/
'3' * 1 // 3
'3' << 0 // 3
+'3' // 3
parseInt('3') // 3

'' + 5 // '5'

!![ ] // true
!!undefined // false

/***** 한 가지 더 *****/
+new Date(); // 13 자리 숫자
+new String('123'); // 123
```
- null 과 undefined 를 제외한 모든 값은 toString() 메소드를 가지며, 이 메소드의 결과는 보통 String() 함수가 반환하는 값과 같다.
  - null 과 undefined 를 객체로 변환하려고 하면, TypeError 가 발생한다. 하지만, Object() 함수는 예외를 발생시키지 않으며, 대신 빈 객체를 반환한다.
- 어떤 자바스크립트 연산자는 암시적(implicit) 타입 변환을 수행하므로 종종 타입 변환 목적으로 사용된다.
  - + 연산자는 한 피연산자가 문자열이면, 다른 피연산자를 문자열로 변환한다.
  - 단항 연산자 + 는 피연산자를 숫자로 변환한다.
  - 단항 연산자 ! 는 피연산자를 불린으로 변환한 뒤, 부정 연산을 한다.
```js
x + '' // String(x)
+x // Number(x)
!!x // Boolean(x)
```
- 자바스크립트는 숫자를 문자로 변환하거나 문자를 숫자로 변환할 때, 결과 값의 형태를 좀 더 자세히 표현할 수 있는 함수와 메소드를 지원한다.
  - Number 클래스에 정의된 toString() 메소드는 기수(radix) 를 정하는 선택적 인자를 받는다. 이 인자들을 전달하지 않으면 기수를 10으로 하여 변환을 수행한다.
    - 2 에서 36 까지의 값을 전달하면 해당 숫자를 기수로 하여 변환한다.
```js
var n = 17;
binaryString = n.toString(2); // '10001'
octalString = '0' + n.toString(8); // '021'
hexString = '0x' + n.toString(16); // '0x11'
```
  - 금융 또는 과학적인 데이터를 문자열로 변환하는 경우, 소수점 이하 자릿수를 제어하거나, 지수 표기법(exponential notation) 을 사용하고 싶을 수도 있다. Number 클래스는 그런 용도에 맞는 세 가지 메소드를 제공한다.
    - toFixed() 메소드는 결과 문자열의 소수점 이하 자릿수 개수를 인자만큼 맞춘 문자열을 반환한다.
    - toExponential() 메소드는 지수 표기법을 사용하여 소수점 앞에 숫자 하나와 소수점 뒤에 인자로 지정한 만큼의 자릿수를 놓는 방식의 숫자를 문자열로 변환한다.
    - toPrecision() 메소드는 우리가 정의한 유효 자릿수로 숫자를 문자열로 변환한다.
    - toPrecision() 은 유효 자릿수가 숫자 전체 정수 부분을 표시할 정도로 크지 않다면 지수 표기법을 사용한다.
    - 위 메소드들은 결과 문자열 내에서 나머지 숫자들을 반올림하거나, 0 을 붙인다.
```js
var n = 123456.789;
n.toFixed(0); // '123457'
n.toFixed(2); // '123456.79'
n.toFixed(5); // '123456.78900'
n.toExponential(1); // '1.2e+5'
n.toExponential(3); // '1.234e+5'
n.toPrecision(4); // '1.234e+5'
n.toPrecision(7); // '123456.8'
n.toPrecision(10); // '123456.7890'
```
- 우리가 문자열을 Number() 변환 함수의 인자로 넘긴다면, 변환 함수는 문자열을 정수 혹은 실수 리터럴로 해석할 것이다.
  - Number() 함수는 10 진수 정수만 처리할 수 있고, 그 뒤에 숫자가 아닌 문자가 오는 것을 허용하지 않는다.
  - 반면, parseInt() 와 parseFloat() 함수는 리터럴의 일부가 숫자가 아니어도 된다.
    - 이 두 함수는 Number 클래스의 메소드가 아닌 전역 함수이다.
    - 두 함수는 모두 앞부분의 빈 공백을 무시하고, 숫자 다음에 나오는 숫자 아닌 문자들도 무시한다.
    - 첫 번째 공백이 아닌 문자가 유효한 숫자 리터럴이 아니면, NaN 을 반환한다.
    - parseInt() 는 정수만 변환할 수 있지만, parseFloat() 은 정수와 부동소수점 모두 변환할 수 있다.
    - 만약 문자열이 '0x' 나 '0X' 로 시작하면, parseInt() 는 문자열을 16 진수 숫자로 인식한다.
```js
parseInt('3 blind mice'); // 3
parseFloat(' 3.14 meters'); // 3.14
parseInt('-12.34'); // -12
parseInt('0xFF'); // 255
parseInt('0xff'); // 255
parseInt('-0XFF'); // -255
parseFloat('.1'); // 0.1
parseInt('0.1'); // 0
parseInt('.1'); // NaN : 정수는 . 로 시작할 수 없다.
parseFloat('$72.47'); // NaN : 숫자는 $ 로 시작할 수 없다.
```

### 객체에서 원시 타입으로 변환
- 객체에서 불린으로 변환하는 것은 간단하다.
- 객체에서 문자열이나 숫자로의 변환은 변환될 객체의 메소드를 호출함으로써 수행된다.
  - 이 과정은 객체가 변환을 수행하는 두 개의 서로 다른 메소드를 가지고 있기 때문에 다소 복잡하다.
- 모든 객체는 두 개의 타입 변환 메소드를 상속한다.
  - 먼저 알아볼, toString() 메소드는 객체를 문자열로 표현하여 반환한다.
```js
({ x: 1, y: 2 }).toString(); // "[object Object]"
```
    - 많은 클래스들이 toString() 메소드를 재정의한다.
    - Array.prototype.toString() 은 각 원소를 문자열로 변환하고, 원소 사이에 쉼표를 삽입하여 이어붙인 문자열을 반환한다.
    - Function.prototype.toString() 은 함수의 내부 표현형을 반환한다.
    - Date.prototype.toString() 은 포맷팅된 날짜를 반환한다.
    - RegExp.prototype.toString() 은 RegExp 객체를 RegExp 리터럴처럼 보이는 문자열을 반환한다.
```js
[1, 2, 3].toString(); // '1,2,3'
(function (x) { f(x); }).toString(); // "function (x) { f(x); }"
/\d+/g.toString(); // '/\\d+/g'
new Date(2010, 0, 1). toString(); // 'Fri Jan 01 2010 00:00:00 GMT+0900 (KST)'
```
  - valueOf() 메소드는 객체를 잘 표현하는 원시 타입 값을 반환한다.
    - 기본적으로 valueOf() 메소드는 원시 타입을 반환하지 않고 단순히 객체 그 자신을 반환한다.
    - 래퍼 클래스는 래핑된 원시 타입의 값을 반환하는 valueOf() 메소드를 정의한다.
    - 배열, 함수, 정규 표현식은 단순히 기본 메소드를 상속하며, valueOf() 를 호출하면 단순히 객체 그 자체를 반환한다.
    - Date.prototype.valueOf() 메소드는 객체 내부적으로 날짜를 표현하기 위해 쓰는 값(현재 시각과 1970-01-01 의 차를 ms 로 표현한 값. 흔히 말하는 timestamp) 를 반환한다.
- toString() 과 valueOf() 메소드를 통해 객체에서 문자열로, 그리고 객체에서 숫자로의 변환을 할 수 있다.
- 하지만, 자바스크립트가 객체에서 원시 타입으로의 변환을 특수하게 처리하는 경우가 있다.
- 자바스크립트는 아래의 절차를 통해 객체를 문자열로 변환한다.
  - 1-1. 객체가 toString() 메소드를 가지고 있으면, 이를 호출한다.
  - 1-2. toString() 이 원시값을 반환하면, 이 값을 문자열로 변환하여 반환한다.
  - 2-1. 객체가 toString() 메소드를 가지고 있지 않거나, 이 메소드가 원시 타입 값을 반환하지 않는다면, 자바스크립트는 valueOf() 메소드를 찾는다.
  - 2-2. valueOf() 메소드가 존재하면, 자바스크립트는 이 메소드를 호출한다.
  - 2-3. valueOf() 가 원시값을 반환하면, 이 값을 문자열로 변환하여 반환한다.
  - 3. 위 과정을 거쳤음에도 문자열을 반환받지 못한다면, 원시 타입 값을 얻을 수 없고, TypeError 가 발생한다.
- 객체를 숫자로 전환할 때는 valueOf() 메소드를 먼저 호출한다.
  - 1. 객체가 원시 타입의 값을 반환하는 valueOf() 메소드를 가지면, 반환된 값을 숫자로 변환하여 반환한다.
  - 2. 그렇지 않으면, 객체가 원시 타입 값을 반환하는 toString() 메소드를 가지면, 이 값을 변환하여 반환한다.
  - 3. 이 외의 경우, TypeError 가 발생한다.
  - + 배열은 기본적으로 원시 타입 값 대신 객체를 반환하는 valueOf() 메소드를 상속하기 때문에, 배열에서 숫자로의 변환은 toString() 메소드에 의존한다.
- + 연산자는 숫자 덧셈과 문자열 붙이기(concatenate) 를 수행한다.
  - + 연산자의 피연산자 중 하나가 객체면, 자바스크립트는 객체를 다른 산술 연산처럼 객체에서 숫자로 변환하는 대신 객체에서 원시 타입으로 변환한다.
  - == 동치 연산자도 비슷하다. 객체를 원시 타입과 비교할 때는, 객체를 원시 타입으로 변환한다.
- + 와 == 연산자는 Date 타입 객체를 특별하게 취급한다.
  - Date 클래스는 코어 자바스크립트에 포함된 타입 가운데 문자열로의 변환 절차와 숫자로의 변환 절차를 전부 구현하고 있는 유일한 타입이다.
  - 기본적으로 객체에서 원시 타입으로의 변환은 객체에서 숫자로의 변환이고, 이때, valueOf() 를 먼저 사용한다.
  - Date 객체에 한해서만 객체에서 문자열로 변환하며, 이때, toString() 을 먼저 사용한다.
    - valueOf() 나 toString() 에서 반환된 원시 값은 숫자나 문자열로 변환되지 않고 바로 사용된다.
  - < 연산자와 다른 관계 연산자들은 == 연산자처럼 객체에서 원시 타입으로의 변환을 수행하지만, Date 객체를 특별하게 취급하지는 않는다.
    - valueOf() 를 먼저 시도하고, 그 뒤에 toString() 을 시도한다.
    - 그 결과 값은 숫자나 문자열로 추가 변환 없이 바로 사용된다.
  - +, ==, != 그리고 관계 연산자들만이 이런 문자열-원시 타입 변환을 수행한다. (다른 연산자들은 지정된 타입으로 명시적 변환을 하고, Date 를 위한 처리 절차도 없다.)
```js
/***** Date 객체와 연산자의 상호 작용 *****/
var now = new Date();
typeof (now + 1); // 'string' : + 는 객체에서 문자열로 변환시킨다.
typeof (now - 1); // 'number' : - 는 객체에서 숫자로 변환시킨다.
now == now.toString(); // true : 암시적 그리고 명확한 문자열 변환
now > (now - 1); // true : > Date 에서 숫자로 변환
```

## 변수 선언
- 자바스크립트에서 변수를 사용하기 전에 변수 선언을 해야 한다.
- 변수를 선언할 때에는 var 키워드를 이용한다.
  - ES6 에서는 변수 선언 키워드로 let (변수), const (상수) 가 추가된다.
```js
var i;
var sum;

var j, total;

var message = 'hello';
var a = 1, b = 2, c = 3;
```
- var VARIABLE; 과 같이 변수에 초기값을 지정하지 않으면, 변수는 값이 설정될 때까지 undefined 가 된다.
- var 문은 for 와 for/in iteration 에 올 수도 있다.
```js
for (var i = 0; i < 10; i++) { }
for (var i = 0, j = 10; i < 10; i++, j--) { }
for (var p in o) { }
```
- 자바스크립트는 변수에 숫자를 할당했다가 문자열을 할당해도 문제가 없다.
```js
var i = 10;
i = 'ten';
```

### 반복된 선언과 생략된 선언
- var 키워드를 통해 변수를 하나 이상 선언할 수 있다. 초기값이 부여된 경우, 선언문은 마치 대입문처럼 동작한다.
- 선언하지 않은 변수를 읽으려하면, 자바스크립트는 에러를 발생시킨다.
- ES5 의 strict 모드에서는 선언하지 않은 변수에 값을 넣으려해도 에러가 발생한다.
- 비엄격 모드에서는 선언하지 않은 변수에 값을 할당하면, 그 변수는 미리 선언했던 전역 변수처럼 동작한다.

## 변수의 유효범위 (Scope)
- 변수의 유효범위는 변수가 정의되어 있는 영역을 말한다.
- 전역 변수의 유효범위는 전역적이다. (자바스크립트 코드 전체에 걸쳐 정의되어 있다.)
- 어떤 함수 안에서 선언된 변수는 오직 해당 함수 몸체 안에서만 정의되며, 이 변수를 지역 변수라고 한다.
  - 유효범위도 지역적이다. 함수의 매개변수도 역시 지역 변수이며, 해당 함수 내부에서만 정의된다.
```js
var scope = 'global';

function checkScope() {
  var scope = 'local';
  return scope; // 지역 변수 반환
}

checkScope(); // 'local'
scope; // 'global'
```
- 전역 유효범위에서는 var 문을 사용하지 않고 전역 변수를 선언할 수 있지만, 지역 변수를 선언하기 위해서는 반드시 var 를 사용해야 한다.
  - 예를 들어, 이런 일이 발생할 수 있다.
```js
scope = 'global';

function checkScope2() {
  scope = 'local';
  myScope = 'local';
  return [scope, myScope];
}

checkScope2(); // ['local', 'local'];
scope; // 'local' : 전역 변수가 바뀌었다.
myScope; // 'local'
```
- 함수 정의는 중첩될 수 있고, 각 함수에는 자신만의 유효범위가 있다.
  - 지역 유효범위도 여러 단계로 중첩될 수 있다.
```js
var scope = 'global scope'; // 전역 변수
function checkScope() {
  var scope = 'local scope'; // 지역 변수
  funcion nested() {
    var scope = 'nested scope'; // 함수 안에 포함된 유효범위의 지역 변수
    return scope; // 'nested scope'
  }

  return nested(); // 'nested scope'
}

checkScope(); // 'nested scope'
```

### 함수 유효범위와 끌어올림 (hoisting)
- var 는 블록 유효범위가 아닌 함수 유효범위의 개념이 적용된다.
- let 과 const 는 블록 유효범위를 가진다.
- 변수는 해당 변수가 정의된 함수 안에서 유효범위를 가지며, 해당 함수 안에 중첩된 함수 안에서도 사용될 수 있다.
- 다음 두 코드는 var 와 let 의 차이를 볼 수 있는 코드이다.
```js
var i = 0;
if (true) {
  var j = 0;

  for (var k = 0; k < 1; k++) {
    console.log(i, j, k); // 0, 0, 0
  }

  console.log(i, j, k); // 0, 0, 1
}

console.log(i, j, k); // 0, 0, 1
// i, j, k 모두 함수 스코프 안에 정의되어 있다.
```
```js
let i = 0;
if (true) {
  let j = 0;

  for (let k = 0; k < 1; k++) {
    console.log(i, j, k); // 0, 0, 0
  }

  console.log(i, j); // 0, 0
  // k is not defined.
}

console.log(i); // 0
// j is not defined.
```

- 자바스크립트의 함수 스코프는, '어떤 함수 안에 선언된 모든 변수는 그 함수 전체에 걸쳐 유효하다'는 의미이다.
  - 이는 변수가 선언되기 전에도 유효하다는 뜻이기도 하다.
  - 이러한 자바스크립트의 특징은 비공식적으로 끌어올림 (hoisting) 이라고 알려져 있다.
  - 함수 안에 있는 모든 변수를 함수 맨 꼭대기로 끌어올린 것처럼 (선언문만) 동작한다.
  - 다음은 예제이다.
```js
var scope = 'global';

function f() {
  console.log(scope); // undefined : 지역 변수는 함수 전체에 걸쳐 정의되기 때문
  var scope = 'local'; // 이 라인으로 인해, 같은 이름의 전역 변수는 함수 전체에서 이 지역 변수에 의해 감춰진다.
  console.log(scope); // 'local'
}
// 이 f 함수는 f2 함수처럼 동작한다.

function f2() {
  var scope;
  console.log(scope); // undefined
  scope = 'local';
  console.log(scope); // undefined
}
```

### 프로퍼티로써의 변수
- 전역 변수를 선언한다는 것은, 실제로는 전역 객체의 프로퍼티를 정의하는 것이다.
- 변수를 선언하기 위해 var 를 사용하면, 생성된 프로퍼티는 수정 할 수 없고, delete 연산자로 소멸시킬 수 없다는 뜻이다.
- 앞서 봤던 것처럼, 엄격 모드가 아닌 상황에서 선언하지 않은 변수에 값을 대입하려고 하면, 자바스크립트는 자동으로 전역 변수를 생성한다.
  - 이런 식으로 생성된 변수는 전역 객체의 평범하고 수정 가능한 프로퍼티이며, 삭제도 가능하다.
```js
var trueVar = 1; // 올바르게 선언한 전역 변수로 삭제할 수 없다.
falseVar = 2; // 삭제 가능한 전역 변수
this.fakeVar2 = 3; // 삭제 가능한 전역 변수
delete trueVar; // false : 변수는 삭제할 수 없다.
delete falseVar; // true : 삭제된다.
delete falseVar2; // true : 삭제된다.
```
- 자바스크립트 전역 변수는 전역 객체의 프로퍼티로, ECMAScript 명세에 규정되어 있다.
  - 지역 변수에는 그런 규정이 없지만, 변수를 각 함수 호출과 연관된 객체의 프로퍼티로 생각해도 된다.
  - ES3 명세는 이러한 객체를 '호출 객체 (call object)'라고 한다.
  - ES5 명세는 이를 '선언적 환경 기록 (devclarative environment record)' 라고 한다.
- 자바스크립트는 this 키워드로 전역 객체를 참조할 수 있도록 한다. 하지만, 지역 변수가 저장된 객체를 참조할 방법은 제공하지 않는다.

### 유효범위 체인
- 자바스크립트는 언어적으로 유효범위를 가지고 있는 (lexically scoped) 언어이다.
  - 전역 변수는 프로그램 전체에 걸쳐 유효하고, 지역 변수는 변수가 선언된 스코프에 걸쳐 유효하다.
- 지역 변수를 객체의 프로퍼티로 생각한다면, 변수의 유효범위를 다른 관점으로 볼 수 있다.
  - 자바스크립트의 코드는 전역 코드 혹은 함수와 연관된 유효범위 체인을 가진다.
  - 이 유효범위 체인은 해당 코드의 범위 내 변수를 정의하는 객체의 체인. 즉, 리스트다.
  - 자바스크립트가 변수 x 의 값을 얻어야 할 때, (식별자 해석(identifier resolution) 이라 일컫는 과정) 처음 체인에 있는 객체에서 x 를 찾는다.
    - 만약 이 객체가 x 프로퍼티를 가지면, 그대로 사용한다.
    - 이 객체에게 x 프로퍼티가 없다면, 체인에 있는 다음 객체에서 x 프로퍼티를 찾는다.
    - 이런 과정을 반복하며, x 가 유효범위 체인 안에 있는 객체의 프로퍼티가 아니면, x 는 유효범위 안에 없는 것이고, ReferenceError 가 발생하게 된다.
    - ES3 에서는 scope 프로퍼티가 가리키는 리스트 (스코프 체인)을 통해 수행되었다.
    - ES5, ES6 에서는 identifier resolution 은 lexical environment 의 outer 값을 통해 수행된다.
  - ES6 에 따르면, 현재 lexical environment 의 environment record 안의 값들을 찾는다.
    - 존재하지 않으면, outer 가 참조하고 있는 lexical environment 의 environment record 안의 값들을 찾으며 이 과정은 반복된다.
    - 즉, 기존의 스코프 체인 개념은 outer 체인으로 대체되었다.
- 함수가 정의될 때, 함수는 유효범위 체인을 저장한다. 함수가 호출될 때, 해당 함수의 지역 변수를 저장하기 위해 새로운 객체를 하나 생성하고, 해당 객체를 기존에 저장된 유효범위 안에 추가한다.
  - 중첩 함수의 경우에는 외부에서 함수를 호출할 때마다 중첩된 함수가 매번 선언된다.
  - 이러한 이유로 함수를 호출할 때마다 유효범위 체인이 조금씩 달라진다.

