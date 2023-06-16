# BaekJoon 2004 조합 0의 개수

[문제 출처](https://www.acmicpc.net/problem/2004)

* 풀이 방법 및 배워야할 것: 

  * Silver 2
  * 2023-01-02
  * 0의 개수를 알기 위해서, 2의 지수와 5의 지수를 계산해야된다. 수학적 지식이 필요하다  

- 풀이 코드 :
```cpp
#include <iostream>

using namespace std;

int count_zero(long long num, int div){
	int ans=0;
	long long tmp=div;
	while (tmp<=num){
		ans+=num/tmp;
		tmp=tmp*div;
	}
	return ans;
}

int main(void){

	long long n, m;
	cin >> n >> m;
	int count_zero_div2=count_zero(n,2)-count_zero(m,2)-count_zero(n-m,2);
	int count_zero_div5=count_zero(n,5)-count_zero(m,5)-count_zero(n-m,5);
	if (count_zero_div2<count_zero_div5){
		cout << count_zero_div2 ;
	}
	else {
		cout << count_zero_div5 ;
	}

    return 0;
}
```
