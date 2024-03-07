## BaekJoon 6588 골드바흐의 추측

[문제 출처](https://www.acmicpc.net/problem/6588)  

### 풀이 방법 및 배워야할 것: 

   *  에라토스테네스의 체
   *  난이도: Silver 1
   *  푼 날짜 2024-03-07
     
### 풀이 코드 :

#### C++
```cpp
#include <iostream>

using namespace std;

int main(){
    ios_base::sync_with_stdio(false);
	cin.tie(NULL);
    cout.tie(NULL);
    bool arr[1000001]= {0, };
    arr[0] = true;
    arr[1] = true;

    for (int i = 2; i * i < 1000001; i++){
        if (arr[i] == true) continue;
        for (int j = i * i; j < 1000001; j += i){
            arr[j] = true;
        }
    }

    int N;
    while (true) {
		cin >> N;
		if (N == 0) {
			break;
		}

        bool check = false;

        for (int i = 3; i<= N/2; i+=2){
            if(!arr[i] && !arr[N - i]){
                check = true;
                cout << N << " = " << i << " + " << N - i << "\n";   
                break;
            }
        }
        if (!check){
            cout << "Goldbach's conjecture is wrong.\n";
        }
    }

    return 0;
             
}
```
#### Python

```python
import sys
input = sys.stdin.readline

max_num = 1000000
is_prime = [True] * (max_num + 1)
is_prime[0] = is_prime[1] = False
    
for i in range(2, int(max_num**0.5) + 1):
    if is_prime[i]:
        for j in range(i*i, max_num + 1, i):
            is_prime[j] = False
    
while True:
    n = int(input())
    if n == 0:
        break

    check = False
        
    for i in range(3, n//2 + 1, 2):
        if is_prime[i] and is_prime[n - i]:
            print(f"{n} = {i} + {n - i}")
            check = True
            break
                
    if not check:
        print("Goldbach's conjecture is wrong.")
```
