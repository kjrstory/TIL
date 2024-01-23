# BaekJoon 2309 일곱 난쟁이

[문제 출처](https://www.acmicpc.net/problem/2309)  

* 풀이 방법 및 배워야할 것: 

   *  이 문제처럼 반드시 정답이 있고 여러 가지 중에 아무거나 출력하면 되는 경우 조건을 만족하면 break하는 것이 좋다. 이중 for 문에서 break하기 위해 flag를 추가하거나 함수로 만들어서 return을 해버리면 된다.
  python에서는 입력을 받을 때도 list comprehension을 사용할 수 있으므로 충분히 익혀둘 것.
   *  난이도: Bronze 1
   *  2024-01-23
     
* 풀이 코드 :
  
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main(){

	vector <int> v(9);	
	int sum_vec = 0;
	for (int i=0; i<9; i++){
		cin >> v[i];
		sum_vec += v[i];
	}
	
	bool endflag = false;
	
	for (int i = 0; i < 9; i++){
		for (int j = 0; j < 9; j++){
			if (i==j) continue;
			
			if (sum_vec - v[i]- v[j] == 100) {
				v[i] = v[j] = -1;
				endflag = true;
				break;
			}
		}
		if (endflag) break;
	}

	sort(v.begin(),v.end());
    
    for (int i = 2; i < 9; i++) {
        cout << v[i] << endl;
    }

	return 0;
}
```

```python
v = [int(input()) for _ in range(9)]
sum_vec = sum(v)

endflag = False
for i in range(9):
    for j in range(9):
        if i == j:
            continue
        if sum_vec - v[i] - v[j] == 100:
            v[i] = -1
            v[j] = -1
            endflag = True
            break
    if endflag:
        break

v.sort()

for i in v[2:]:
    print(i)
```
