# 어휘 구조
## 문자 집합
- 자바스크립트 프로그램은 Unicode 문자 집합을 사용해 작성된다.

### 대소문자 구분
- 자바스크립트는 대소문자를 구분하며, 키워드, 변수, 함수명, 식별자들은 모두 대소문자를 구분해 입력해야 한다.

### 공백, 줄바꿈, 제어 문자
- 자바스크립트는 프로그램 코드 내 토큰들 사이에 있는 공백 (줄바꿈 없는 공백, 탭 등) 을 무시한다.
- 자바스크립트는 라인피드, 캐리지 리턴, 문단 구분다 등을 줄바꿈 문자로 인식한다.

### 유니코드 이스케이프 시퀀스
- 유니코드 이스케이프 시퀀스는 \u 로 시작하고, 그 뒤에 16 진수 숫자 4 개가 온다.

## 주석
- 자바스크립트는 두 가이 형태의 주석을 지원한다.
```js
// // 이후에 나오는 1 줄을 주석으로 취급한다.

/*
사이에 있는 모든 텍스트를 주석으로 취급한다.
*/
```

## 리터럴
- 리터럴은 프로그램에 직접 나타나는 데이터 값이다.
- 다음 코드는 모두 리터럴이다.
```js
12
1.2
"hello world"
'Hi'
true
false
/javascript/gi
null
{ x: 1, y: 2}
[1, 2, 3]
```

## 식별자와 예약어
- 식별자는 변수나 함수에 이름을 붙이거나 반복문에서 쓸 레이블을 붙이는
  데 사용된다.
- 식별자는 알파벳, 밑줄(_), 달러($) 로 시작하며, 이어지는 문자들은
  알파벳, 숫자, 밑줄(_), 달러($) 가 올 수 있다.

### 예약어
- 자바스크립트는 면 차기 식별자를 미리 선점하고 있으며, 다음은 식별자로 사용할 수 없는 단어들이다.
<table>
<tbody>
<tr><td>break</td><td>delete</td><td>function</td><td>return</td><td>typeof</td></tr>
<tr><td>case</td><td>do</td><td>if</td><td>switch</td><td>var</td></tr>
<tr><td>catch</td><td>else</td><td>in</td><td>this</td><td>void</td></tr>
<tr><td>continue</td><td>false</td><td>instanceof</td><td>throw</td><td>while</td></tr>
<tr><td>debugger</td><td>finally</td><td>new</td><td></td>true<td>with</td></tr>
<tr><td>default</td><td>for</td><td>null</td><td>try</td><td></td></tr>
</tbody>
</table>

- 다음은 ES5 에서 식별자로 사용할 수 없는 단어들이다.
<table>
<tbody>
<tr><td>class</td><td>const</td><td>enum</td><td>export</td><td>extends</td><td>import</td><td>super</td></tr>
</tbody>
</table>

- 다음은 Strict Mode 에서는 사용할 수 없는 단어들이다.
<table>
<tbody>
<tr><td>implements</td><td>let</td><td>private</td><td>public</td><td>yield</td></tr>
<tr><td>interface</td><td>package</td><td>protected</td><td></td><td>static</td></tr>
</tbody>
</table>

- ECMAScript3 에서는 자바의 예약어 전부를 동일하게 예약어로 지정했지만,
  ECMAScript 5 에서는 그렇지 않다.
  - 자세한 내용은 [MDN 문서](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar) 에서 볼 수 있다.

- 자바스크립트는 몇 가지 전역 변수와 함수를 정의하고 있는 데, 이것도 변수나 함수 이름으로 사용할 수 없다.
<table>
<tbody>
<tr><td>arguments</td><td>encodeURI</td><td>Infinity</td><td>Number</td><td>RegExp</td></tr>
<tr><td>Array</td><td>encodeURIComponent</td><td>isFinite</td><td>Object</td><td>String</td></tr>
<tr><td>Boolean</td><td>Error</td><td>isNaN</td><td>parseFloat</td><td>SyntaxError</td></tr>
<tr><td>Date</td><td>eval</td><td>JSON</td><td>parseInt</td><td>TypeError</td></tr>
<tr><td>decodeURI</td><td>EvalError</td><td>Math</td><td>RangeError</td><td>undefined</td></tr>
<tr><td>decodeURIComponent</td><td>Function</td><td>NaN</td><td>ReferenceError</td><td>URIError</td></tr>
</tbody>
</table>

## 선택적인 세미콜론 사용
- 여러 문장이 서로 다른 중에 나타나는 경우 세미콜론을 생략할 수 있다.
```js
a = 3;
b = 4;
```
- 코드가 다음과 같이 작성된 경우에는 첫 번째 세미콜론이 반드시 필요하다.
```js
a = 3; b = 4;
```
- 다음 두 코드는 같은 의미를 가진다.
```js
var a
a
=
3
console.log(a)
/**********/
var a; a = 3; console.log(a);
```
- 세미콜론의 생략은 의도하지 않은 결과를 초래할 수도 있다.
```js
var y = x + f
(a + b).toString()
/***** X *****/
var y = x + f; (a + b).toString();
/***** O *****/
var y = x + f(a + b).toString();
```
- 문장이 (, [, /, +, - 로 시작하면 자바스크립트 인터프리터는 해당 문장을 이전 문장과 이어 해석한다.
  - 일부 프로그래머들은 문장 시작 부분에 방어적인 세미콜론을 넣기도 한다.
- '다음 줄을 첫 줄의 문장과 이어서 하나로 처리할 수 없는 경우에만 줄바꿈을 세미콜론으로 해석한다' 는 일반 규칙에 **두 가지 예외**가 있다.
  - 첫 째로, return, break, continue 문을 사용했을 경우다.
    - return, break, continue 다음에는 줄바꿈을 하지 않는다.
```js
return
true
/***** X *****/
return true;
/***** O *****/
return; true;
```
  - 둘 째로, ++ 나 -- 연산자가 포함된 경우다.
    - ++ 와 -- 는 피연산자 전에 오면 전치 연산자가 되고, 피연산자 다음에 오면 후치 연산자가 된다.
```js
x
++
y
/***** X *****/
x++; y;
/***** O *****/
x; ++y;
```

