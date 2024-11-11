# BaekJoon 18258번 문제 - 큐 2

* 문제: [백준 18258](https://www.acmicpc.net/problem/18258)   
* 난이도: Silver 4
* 날짜: 2024-11-11

## 문제 요약

큐 구현

명령어 종류: push X, pop, size, empty, front, back

큐가 비어 있는 상태에서 pop, front, back 명령어가 들어오면 -1을 출력

## 풀이 방법 및 배워야할 것: 

   * C++: queue 기본 사용법, 입출력 최적화(cin.tie(0)과 ios_base::sync_with_stdio(0)) 
   * Python: deque 기본 사용법, 입출력 최적화(sys.stdin, sys.stdout)
 
## 풀이 코드 :

* C++
```cpp
#include <queue>
#include <iostream>

using namespace std;

int main(){

    cin.tie(0);
    ios_base::sync_with_stdio(0);
    queue<int> q;
    int N;
    cin >> N;
    string str;
    for (int i=0;i<N;i++){
        cin >> str;
        if (str=="push"){
            int tmp;
            cin >> tmp;
            q.push(tmp);
        }
        else if (str=="pop"){
            if (q.empty()){
                cout << "-1\n";
            }
            else{
                cout << q.front() << "\n";
                q.pop();
            }
        }
        else if (str=="size"){
            cout << q.size() << "\n";
        }
        else if (str=="empty"){
            if (q.empty()){
                cout << "1\n";
            }
            else{
                cout << "0\n";
            }
        }
        else if (str=="front"){
            if (q.empty()){
                cout << "-1\n";
            }
            else{
                cout << q.front() << "\n";
            }
        }
        else if (str=="back"){
            if (q.empty()){
                cout << "-1\n";
            }
            else{
                cout << q.back() << "\n";
            }
        }
    }
    return 0;
}
```
* Python

```python
from collections import deque
import sys

input = sys.stdin.read

n = int(sys.stdin.readline())
q = deque()
results = []
for _ in range(n):
    line = sys.stdin.readline().strip()
    operation = line.split()[0]
    if operation == "push":
        q.append(int(line.split()[1]))
    elif operation == "pop":
        results.append(q.popleft() if q else -1)
    elif operation == "size":
        results.append(len(q))
    elif operation == "empty":
        results.append(0 if q else 1)
    elif operation == "front":
        results.append(q[0] if q else -1)
    elif operation == "back":
        results.append(q[-1] if q else -1)
    
sys.stdout.write("\n".join(map(str, results)) + "\n")
```
