# BaekJoon 2981 검문

[문제 출처](https://www.acmicpc.net/problem/2981)  

* 풀이 방법 및 배워야할 것: 

  * Gold 4 
  * 2023-01-03
  * M으로 나누었을 때, 나머지가 모두 같게 되는 M
  * 인접한 수들의 최대 공약수의 약수 집합 

- 풀이 코드 :
```cpp
#include <iostream>
#include <vector>
#include <cmath>
#include <algorithm>

using namespace std;

int Euclidean(int a, int b)
{
    int r = a % b;
    if (r == 0) {
      return b;
    }
    return Euclidean(b, r);
}

int main(void){
	
	int n;
	cin >> n;
	vector <int> v;
	vector <int> a;
	for (int i=0;i<n;i++){
		int tmp;
		cin >> tmp;
		a.push_back(tmp);
	}
	sort(a.begin(),a.end());
	for (int i=1;i<n;i++){
		v.push_back(a[i]-a[i-1]);
	}

	int gcd=v[0];
	for (int i=1;i<v.size();i++){
		gcd=Euclidean(gcd,v[i]);
	}
	//cout << gcd ;
	vector <int> tmp2;
	for (int i=2;i<=sqrt(gcd);i++){
		if (gcd % i ==0){
			cout << i << " ";
			if (i!=gcd/i){
			    tmp2.push_back(gcd/i);				
			}
		}
	}
	sort(tmp2.begin(),tmp2.end());
	for (int i=0;i<tmp2.size();i++){
		cout << tmp2[i] << " ";
	}
	cout << gcd ; 
    return 0;
}
```
