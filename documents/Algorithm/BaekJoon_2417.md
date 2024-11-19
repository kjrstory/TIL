# BaekJoon 2417번 문제 - 정수 제곱근

* 문제: [백준 2417](https://www.acmicpc.net/problem/2417)  
* 난이도: Silver 3  
* 날짜: YYYY-MM-DD  

## 문제 요약

- 정수 \( n \)에 대해, \( x^2 \geq n \)을 만족하는 가장 작은 정수 \( x \)를 구하는 문제.
- \( n \)은 0 이상 \( 2^{63} - 1 \) 이하의 정수.

---

## 풀이 방법 및 배워야 할 것:

- **이진 탐색**: 가능한 정수 \( x \)의 범위를 좁혀가며 조건을 만족하는 값을 탐색.
- **최적화**: \( mid \times mid \)의 크기가 너무 커질 수 있으므로, \( n / mid \) 방식을 사용해 오버플로를 방지.

---

## 풀이 코드:

* **C++ 코드 1 (오버플로 방지 포함)**

```cpp
#include <iostream>
using namespace std;

long long integer_sqrt(long long n) {
    if (n == 0) {
        return 0;
    }
    long long left = 0, right = n, answer = n;
    while (left <= right) {
        long long mid = (left + right) / 2;
        if (mid <= n / mid) { // 오버플로 방지
            answer = mid;
            left = mid + 1;  // 더 큰 값을 탐색
        } else {
            right = mid - 1; // 더 작은 값을 탐색
        }
    }
    if (answer * answer < n) {
        answer++; // 최종 검증 후 조건 만족
    }
    return answer;
}

int main() {
    long long x;
    cin >> x;
    cout << integer_sqrt(x);
}
```

* **C++ 코드 2 (sqrt 함수 활용 최적화)**

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
    long long n;
    cin >> n;
    long long left = 0, right = (long long)sqrt(n) + 1;
    long long mid;

    while (left <= right) {
        mid = (left + right) / 2;
        if (mid * mid >= n) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    if (mid * mid < n) {
        mid++; // 조건을 만족하도록 mid 조정
    }
    cout << mid << "\n";
    return 0;
}
```

---

## 배운 점

- **오버플로 방지**: \( n / mid \) 방식을 사용하면 \( mid \times mid \)에서 발생할 수 있는 오버플로 문제를 방지할 수 있음.
- **sqrt 함수 활용**: 루트를 미리 계산해 이진 탐색의 범위를 좁히면 효율성을 높일 수 있음.
- **이진 탐색 최적화**: \( left \), \( right \), \( mid \)의 관계를 잘 정의하고 종료 후 검증 단계를 추가하는 것이 중요.

