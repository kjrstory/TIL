# BaekJoon 3085 사탕게임

[문제 출처](https://www.acmicpc.net/problem/3085)  

### 풀이 방법 및 배워야할 것: 

   *  보드의 크기가 50이여서 이중 배열을 쓰더라도 50*50=2500으로 크지 않으므로 브루트 포스를 사용하면 되는 문제이다.
리스트 원소를 스왑하기 위해서 C++에서는 `algorithm` 라이브러리의 `swap`명령어를 사용하면 된다.
python에서는 라이브러리 없이 `board[i][j], board[i][j+1] = board[i][j+1], board[i][j]` 와 같은 방법을 사용하면 된다.
   *  난이도: Silver 2
   *  푼 날짜: 2024-01-24
     
### 풀이 코드

#### C++

```cpp
#include <iostream>
#include <algorithm>

using namespace std;

int N;
char board[50][50];

int findMaxLength(int row, int col) {
    int maxLength = 1;
    
    int length = 1;
    for (int i = 1; i < N; i++) {
        if (board[row][i] == board[row][i-1]) {
            length++;
            maxLength = max(maxLength, length);
        } else {
            length = 1;
        }
    }

    length = 1;
    for (int i = 1; i < N; i++) {
        if (board[i][col] == board[i-1][col]) {
            length++;
            maxLength = max(maxLength, length);
        } else {
            length = 1;
        }
    }

    return maxLength;
}

int main() {
    cin >> N;
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            cin >> board[i][j];
        }
    }
    int maxCandy = 0;
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            if (j+1 < N) {
                swap(board[i][j], board[i][j+1]);
                maxCandy = max(maxCandy, findMaxLength(i, j));
				maxCandy = max(maxCandy, findMaxLength(i, j+1));
                swap(board[i][j], board[i][j+1]); 
			}
            if (i+1 < N) {
                swap(board[i][j], board[i+1][j]);
                maxCandy = max(maxCandy, findMaxLength(i, j));
				maxCandy = max(maxCandy, findMaxLength(i+1, j));
                swap(board[i][j], board[i+1][j]); 
			}
        }
    }

    cout << maxCandy << endl;
    return 0;
}

```

#### Python

```python
N = int(input())
board = [list(input()) for _ in range(N)]

def find_max_length(row, col):
    max_length = 1

    length = 1
    for i in range(1, N):
        if board[row][i] == board[row][i - 1]:
            length += 1
            max_length = max(max_length, length)
        else:
            length = 1

    length = 1
    for i in range(1, N):
        if board[i][col] == board[i - 1][col]:
            length += 1
            max_length = max(max_length, length)
        else:
            length = 1
    return max_length

max_candy = 0

for i in range(N):
    for j in range(N):
        if j + 1 < N:
            board[i][j], board[i][j+1] = board[i][j+1], board[i][j]
            max_candy = max(max_candy, find_max_length(i, j))
            max_candy = max(max_candy, find_max_length(i, j + 1))
            board[i][j], board[i][j+1] = board[i][j+1], board[i][j]
        if i + 1 < N:
            board[i][j], board[i+1][j] = board[i+1][j], board[i][j]
            max_candy = max(max_candy, find_max_length(i, j))
            max_candy = max(max_candy, find_max_length(i + 1, j))
            board[i][j], board[i+1][j] = board[i+1][j], board[i][j]

print(max_candy)

```
