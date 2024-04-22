## BaekJoon 18406 럭키 스트레이트
[문제 출처](https://www.acmicpc.net/problem/18406)  

### 풀이 방법 및 배워야할 것: 

   * DFS, 브루트포스
   * DFS함수를 사용할 때 문제에서 요구하는 최대합을 인자로 함
   * DFS함수의 최적화를 위해 모든 경우의 수를 계산하지 않고 `i = x`, j = (i == x ? y : 0)`로 반복문의 범위를 줄임
   * 난이도: Silver 1
   * 푼 날짜 2024-04-22
     
### 풀이 코드 :

#### C++
```cpp
#include <iostream>

using namespace std;

int main(){

    string str;
    cin >> str;

    int left=0, right=0, tmp;
    
    for (int i=0; i<str.size()/2;i++){
        tmp = str[i] - '0';
        left += tmp;
    }
    for (int i=str.size()/2; i<str.size();i++){
        tmp = str[i] - '0';
        right += tmp;
    }
    //cout << left << " " << right << "\n";
    if (left == right) cout << "LUCKY";
    else cout << "READY";

    return 0;
}
```


#### Python
```Python
N = str(input())

left = 0
right = 0
for i in range(len(N)//2):
    left += int(N[i])

for i in range(len(N)//2, len(N)):
    right += int(N[i])

if left == right : print("LUCKY")
else : print("READY")
```