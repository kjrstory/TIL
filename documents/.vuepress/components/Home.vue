<template>
  <div>
    <div class="titleContainer">
      <h1>Today I Learned
       <br>테스트 
      </h1>
      <div class="infoContainer">
        <div class="name">김종록(Jong Rok Kim)</div>
        <ul>
          <li>
            <a href="https://github.com/kjrstory">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/kjrstory/">LinkedIn</a>
          </li>
          <li>
            <a href="https://kjrstory.netlify.app/">Tech. Blog</a>
          </li>
          <li>
            <a href="/TIL/dashboard">Heatmap</a>
          </li>
        </ul>
      </div>
    </div>
    
  </div>
</template>

<style>
@import "https://fonts.googleapis.com/css?family=Black+And+White+Picture";

.infoContainer {
  text-align: right;
}
h1 {
  font-family: "Black And White Picture", sans-serif;
  font-weight: 500;
  border-bottom: 17px solid #b9fba7;
  word-break: keep-all;
  font-size: 5rem;
}
.name {
  font-weight: 900;
  font-size: 2rem;
}
ul {
  list-style: none;
  line-height: 1.5rem;
}

@media (max-width: 550px) {
  h1 {
    font-size: 4.4rem;
  }

  .name {
    font-size: 1.7rem;
  }
}

@media (max-width: 430px) {
  h1 {
    font-size: 3.4rem;
  }
}
</style>
